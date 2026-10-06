> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 14: Thực chiến Ứng dụng Sáng tạo (Hình ảnh, Video, Âm nhạc, TTS, ComfyUI)

> Mục tiêu chương này: Gom các cách làm rời rạc kiểu cũ về "vẽ tranh / video / giọng nói / Skill bên thứ ba" thành các luồng công việc media được OpenClaw hỗ trợ chính thức hiện nay.

---

## Baseline phiên bản

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (Phát hành ngày 08-09-2026)
- Chương này mặc định viết theo phiên bản ổn định `v2026.9.3`; mọi năng lực sáng tạo ưu tiên tham chiếu ma trận năng lực media chính thức của OpenClaw

---

## Hướng dẫn đọc dành cho người mới bắt đầu

### Nếu bạn chỉ muốn tạo ra một sản phẩm đầu ra trước, đừng đọc cả chương cùng lúc

- **Muốn tạo ngay một bức ảnh**: Đọc trực tiếp mục `14.2`
- **Muốn sinh giọng nói trước**: Đọc trực tiếp mục `14.4.2`
- **Muốn thử làm video**: Đọc trực tiếp mục `14.3`, nhưng cần biết rằng sinh video là một tác vụ bất đồng bộ
- **Muốn xây dựng quy trình cục bộ có thể kiểm soát cao**: Đọc phần ComfyUI ở mục `14.5` sau cùng

### 2 điều cần biết trước khi bắt đầu

1. Hình ảnh và TTS thường là các thao tác **trả về đồng bộ**, rất thích hợp để người mới thử nghiệm trước
2. Video và âm nhạc thường là các **tác vụ chạy nền bất đồng bộ**, vì vậy đừng tưởng rằng "lệnh không lập tức nhả file ra là đã bị lỗi"

### Những điểm người mới dễ hiểu lầm nhất

- Nhầm lẫn giữa "mô hình hiểu hình ảnh (Vision)" và "mô hình tạo hình ảnh (Image Generation)"
- Không biết cách vào `tasks` để kiểm tra trạng thái tiến độ sinh video
- Thấy danh sách provider quá nhiều rồi tưởng nhầm là bắt buộc phải cấu hình tất cả

---

## 14.1 Bản đồ năng lực media chính thức

Năng lực media hiện tại của OpenClaw không phải là các plugin rời rạc, mà là một tầng năng lực dùng chung thống nhất:

| Năng lực | Công cụ / Lệnh | Provider phổ biến | Mô tả |
|----------|----------------|-------------------|-------|
| Tạo hình ảnh | `image_generate` / `openclaw infer image generate` | ComfyUI, fal, Google, MiniMax, OpenAI, Vydra | Chuyển văn bản thành ảnh (Text-to-Image), chỉnh sửa ảnh mẫu |
| Tạo video | `video_generate` / `openclaw infer video generate` | Alibaba, BytePlus, ComfyUI, fal, Google, MiniMax, OpenAI, Qwen, Runway, Together, Vydra, xAI | Chuyển văn bản thành video, chuyển ảnh thành video, chuyển video thành video |
| Tạo âm nhạc | `music_generate` | ComfyUI, Google, MiniMax | Tạo đoạn nhạc / bài hát / track âm thanh |
| TTS | `tts` / `openclaw infer tts convert` | ElevenLabs, Microsoft, MiniMax, OpenAI | Chuyển văn bản thành giọng nói |
| Đọc hiểu media | `image describe` / `audio transcribe` / `video describe` | Các provider đa mô hình (Multimodal) | Nhận diện ảnh, chuyển âm thanh thành văn bản, phân tích video |

Hai điểm mấu chốt quan trọng nhất:

1. **Hình ảnh và TTS mang tính đồng bộ nhiều hơn**
2. **Video và âm nhạc là tác vụ chạy nền bất đồng bộ**, sẽ được ghi vào sổ theo dõi tác vụ (task ledger), sau khi hoàn tất sẽ đánh thức agent để gửi kết quả về phiên hội thoại gốc

---

## 14.2 Luồng công việc xử lý hình ảnh: Cách làm chuẩn hiện nay

### 14.2.1 Xuất ảnh trực tiếp từ dòng lệnh

Nếu bạn mới thử năng lực media lần đầu, khuyến nghị bắt đầu từ đây vì tốc độ phản hồi nhanh nhất và dễ phân biệt lỗi do prompt hay do provider chưa cấu hình đúng.

```bash
openclaw infer image generate \
  --prompt "Một sơ đồ kiến trúc tự động hóa OpenClaw vẽ tay phong cách bảng trắng" \
  --json
```

Phù hợp cho:

- Hình minh họa cho bài hướng dẫn
- Ảnh bìa (Cover Image)
- Sơ đồ bảng trắng
- Poster mạng xã hội
- Sơ đồ minh họa cấu trúc

#### Dấu hiệu nhận biết năng lực tạo ảnh đã chạy thông suốt

- Lệnh trả về kết quả JSON hoặc đường dẫn file kết xuất
- Khi ảnh chưa ưng ý, bạn biết điều chỉnh prompt trước thay vì vội nghi ngờ toàn bộ hệ thống bị hỏng
- Bạn phân biệt rõ giữa hai cách: "Xuất ảnh trực tiếp bằng CLI" và "Ra lệnh trong phiên chat để agent tự gọi tool"

### 14.2.2 Yêu cầu agent tạo ảnh trực tiếp trong hội thoại

```text
Hãy tạo giúp tôi một ảnh minh họa phong cách vẽ tay trên bảng trắng, chủ đề là "Lộ trình nâng cấp tự động hóa từ cron lên Task Flow".
```

Nếu công cụ `image_generate` đã khả dụng, agent sẽ tự động gọi tool tương ứng. So với các tên Skill cũ trong các bài hướng dẫn trước đây, đây mới là luồng làm việc mặc định hiện nay.

### 14.2.3 Khi nào cần cấu hình riêng `imageGenerationModel`

Khuyến nghị cấu hình thủ công khi bạn thỏa mãn một trong các điều kiện sau:

- Nhóm của bạn quy định dùng thống nhất một provider cụ thể
- Bạn muốn kiểm soát chi phí một cách chặt chẽ
- Bạn không muốn OpenClaw tự động suy đoán provider

```json
{
  "agents": {
    "defaults": {
      "imageGenerationModel": {
        "primary": "openai/gpt-image-1"
      }
    }
  }
}
```

---

## 14.3 Luồng công việc xử lý video: Hiểu đúng về cơ chế "trả về bất đồng bộ"

### 14.3.1 Ví dụ tối thiểu chạy được

Sinh video chậm hơn tạo ảnh rất nhiều, do đó khi thử nghiệm lần đầu, mục tiêu không phải là "lập tức ra ngay một thước phim bom tấn", mà là xác nhận tác vụ được ghi vào sổ theo dõi và hoàn tất trọn vẹn.

```bash
openclaw infer video generate \
  --prompt "Cảnh quay điện ảnh 5 giây: Bảng điều khiển OpenClaw trên bàn làm việc đang tự động cập nhật trạng thái tác vụ" \
  --json
```

### 14.3.2 Tư duy đúng về quy trình tạo video hiện nay

Tạo video không phải là kiểu "gõ một lệnh là nhận ngay file mp4". Quy trình thực tế diễn ra như sau:

1. OpenClaw gửi yêu cầu đến provider
2. Provider trả về mã định danh tác vụ (task id)
3. Tác vụ được ghi vào sổ theo dõi chạy nền (background task ledger)
4. Sau khi hoàn thành, OpenClaw đánh thức phiên hội thoại ban đầu và đính kèm video vào

Do đó bạn cần biết cách sử dụng các lệnh kiểm tra:

```bash
openclaw tasks list
openclaw tasks show <task-id>
openclaw tasks audit
```

### 14.3.3 Cách khai báo mô hình video mặc định khuyến nghị

```bash
openclaw config set agents.defaults.videoGenerationModel.primary "google/veo-3.1-fast-generate-preview"
```

Nếu bạn muốn có thêm chuỗi dự phòng (fallbacks):

```json
{
  "agents": {
    "defaults": {
      "videoGenerationModel": {
        "primary": "google/veo-3.1-fast-generate-preview",
        "fallbacks": [
          "qwen/wan2.6-r2v-flash"
        ]
      }
    }
  }
}
```

### 14.3.4 Các kịch bản video phù hợp với OpenClaw

- Video ngắn giới thiệu sản phẩm
- Đoạn intro bài giảng / Video ngắn cho mạng xã hội
- Thử nghiệm biến hình ảnh thành video hoặc chuyển phong cách video
- Bước "tạo video ngắn" trong dây chuyền tự động hóa tài liệu marketing

---

## 14.4 Tạo âm nhạc và TTS: Hai mảnh ghép cuối của quy trình sáng tạo

### 14.4.1 Tạo âm nhạc (Music Generation)

Hiện tại khuyến nghị ưu tiên dùng qua công cụ agent `music_generate`. Theo tài liệu chính thức, nếu bạn không nhìn thấy công cụ này, hãy kiểm tra ưu tiên:

- API key của provider tương ứng đã được cấu hình chưa
- `agents.defaults.musicGenerationModel` đã được thiết lập chưa

Ví dụ cấu hình khuyến nghị:

```json
{
  "agents": {
    "defaults": {
      "musicGenerationModel": {
        "primary": "google/lyria-3-clip-preview"
      }
    }
  }
}
```

Prompt mẫu:

```text
Tạo một đoạn nhạc nền synthpop điện tử nhẹ nhàng dài 20 giây, tiết tấu tươi vui, không có lời hát, phù hợp làm nhạc nền cho video ngắn giới thiệu sản phẩm AI.
```

### 14.4.2 Chuyển văn bản thành giọng nói (TTS): Trong script dùng `infer`, trong hội thoại dùng `tts`

```bash
openclaw infer tts convert \
  --text "Chào mừng các bạn đến với bài hướng dẫn tự động hóa OpenClaw hôm nay." \
  --output ./intro.mp3 \
  --json
```

Phù hợp cho:

- Bản nháp lời bình video
- Phát thanh bản tin tóm tắt hàng ngày
- Thử giọng đọc cho bài giảng
- Thông báo âm thanh cảnh báo sự cố sản phẩm

---

## 14.5 ComfyUI: Điểm kết nối chính thức cho các luồng công việc cục bộ / kiểm soát cao

Nhiều tài liệu cũ triển khai "luồng media cục bộ" bằng các script rời rạc hoặc cầu nối bên thứ ba không ổn định. Hiện nay khuyến nghị:

- OpenClaw tiếp tục đóng vai trò **bộ điều phối và cổng giao tiếp hội thoại**
- `ComfyUI` đảm nhiệm **quy trình đồ họa media cục bộ chuyên sâu**
- Hai bên kết nối thông qua provider/plugin chính thức của OpenClaw

Sự kết hợp này rất lý tưởng cho:

- Sản xuất hàng loạt poster / ảnh bìa theo template cố định
- Đoạn intro / outro video đồng nhất phong cách
- Đóng gói quy trình tạo ảnh hoặc âm nhạc thành chu trình bất biến
- Xử lý các tài nguyên đồ họa nội bộ, đảm bảo quyền riêng tư dữ liệu

Nếu mục tiêu của bạn là "luồng công việc cấp sản xuất có tính lặp lại cao", hãy ưu tiên xem xét ComfyUI thay vì chắp vá các Skill cũ.

---

## 14.6 4 luồng công việc sáng tạo tiêu biểu đáng để áp dụng ngay

### Luồng 1: Dây chuyền sản xuất ảnh minh họa bài hướng dẫn

- Dùng `infer web fetch` lấy tài liệu gốc
- Mô hình chính tổng hợp các ý chính
- Dùng `infer image generate` tạo sơ đồ bảng trắng minh họa
- Lưu file vào thư mục tài nguyên dự án

### Luồng 2: Kịch bản video ngắn + Bản nháp lời bình

- Mô hình chính soạn kịch bản chi tiết
- Dùng `infer tts convert` tạo file âm thanh đọc thử
- Dùng `video_generate` tạo các cảnh quay phác thảo
- Con người thực hiện cắt ghép và biên tập hậu kỳ

### Luồng 3: Tạo hàng loạt ảnh bìa chuẩn nhận diện thương hiệu

- Chuẩn hóa template prompt cố định
- Quy định kích thước ảnh và bố cục khung hình thống nhất
- Chỉ định rõ ràng `imageGenerationModel`
- Dùng script tự động gọi hàng loạt qua `infer image generate`

### Luồng 4: Sản xuất âm nhạc / video bất đồng bộ

- Dùng agent phát lệnh `music_generate` / `video_generate`
- Dùng `tasks list` theo dõi tiến độ thực thi
- Sau khi hoàn thành, tự động gửi trả file về kênh giao tiếp đã chỉ định

---

## 14.7 Những cạm bẫy dễ gặp nhất trong chương này

### Cạm bẫy 1: Tiếp tục xem Skill bên thứ ba kiểu cũ là luồng chính

Hiện tại không khuyến nghị lấy các thành phần sau làm mặc định:

- Tên các Skill tạo ảnh lịch sử cũ
- Lệnh script sinh video cũ
- Các đường dẫn lệnh con TTS cũ
- Cấu hình qua các trạm trung chuyển API không chính thống

### Cạm bẫy 2: Không phân biệt tác vụ media "đồng bộ" và "bất đồng bộ"

- Hình ảnh, TTS: Gần với tính chất đồng bộ (chờ kết quả tức thì)
- Video, âm nhạc: Là các tác vụ chạy nền bất đồng bộ (cần theo dõi qua sổ tác vụ)

### Cạm bẫy 3: Không thiết lập giá trị mặc định riêng cho các mô hình media

Một mô hình trò chuyện tốt không đồng nghĩa với việc nó là mô hình tối ưu cho việc tạo ảnh / video / âm nhạc. Hãy tách riêng cấu hình cho từng năng lực này.

### Cạm bẫy 4: Bàn giao trực tiếp sản phẩm sáng tạo mà không qua con người duyệt

Cách làm an toàn và hiệu quả nhất hiện nay vẫn là:

- OpenClaw chịu trách nhiệm phác thảo, xử lý hàng loạt và điều phối luồng
- Bạn chịu trách nhiệm thẩm mỹ cuối cùng, tính nhất quán thương hiệu và rà soát rủi ro pháp lý

---

## 14.8 Tài liệu tham khảo chính thức

- GitHub Releases: https://github.com/openclaw/openclaw/releases
- Media Overview: https://docs.openclaw.ai/tools/media-overview
- Inference CLI: https://docs.openclaw.ai/cli/infer
- Video Generation: https://docs.openclaw.ai/tools/video-generation
- Music Generation: https://docs.openclaw.ai/tools/music-generation
