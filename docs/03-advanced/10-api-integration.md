> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 10: Tích hợp API và Năng lực Bên ngoài (Infer / Webhooks / Luồng Media)

> Mục tiêu chương: Bám sát lộ trình kỹ thuật chính thức mới nhất của OpenClaw để làm rõ cơ chế suy luận mô hình (infer), năng lực đa phương tiện (media), tích hợp Webhook và liên kết các hệ thống bên ngoài, đồng thời thay thế triệt để các hướng dẫn dùng Skill bên thứ ba đã lỗi thời.

---

## Mốc phiên bản chuẩn (Thống nhất quy chuẩn trước khi bắt đầu)

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (phát hành 16/06/2026)
- Chương này mặc định viết theo **bản ổn định `v2026.9.3`**; các phiên bản beta cũ hoặc định tuyến mô hình lịch sử chỉ mang tính chất tham khảo.

> Nếu máy của bạn vẫn ở bản `v2026.4.12` hoặc cũ hơn, hãy nâng cấp phiên bản trước khi đọc tiếp chương này, nếu không bạn sẽ liên tục gặp lỗi về tên câu lệnh, cổng truy cập năng lực và đường dẫn cấu hình.

---

## Hướng dẫn định hướng nhanh cho người mới

### Chương này phù hợp với ai?

- Bạn đã cài đặt xong OpenClaw và muốn gọi mô hình AI, sinh ảnh, xử lý âm thanh, video hoặc cào dữ liệu web.
- Bạn muốn kết nối Notion, biểu mẫu (form), Webhook hoặc các nền tảng tự động hóa vào OpenClaw.
- Bạn từng đọc tài liệu cũ và thấy nhiều tên Skill đã không còn cài đặt được, muốn biết cách tiếp cận chuẩn xác hiện nay.

### Những việc cần chuẩn bị trước khi bắt đầu

Trước khi đi tiếp, hãy chắc chắn bạn đã hoàn thành 3 điều kiện sau:

1. Đã chạy qua trình thiết lập `openclaw onboard`
2. Lệnh `openclaw models status` hiển thị các nhà cung cấp (providers) bạn đã đăng nhập
3. Bạn xác định rõ mình đang làm tác vụ thuộc nhóm nào: **Suy luận qua dòng lệnh**, **Gọi công cụ tự động trong phiên chat**, hay **Kích hoạt từ hệ thống bên ngoài**

### Nếu bạn chỉ muốn chạy thông suốt nhanh nhất, hãy đọc theo thứ tự:

- **Chỉ muốn chạy thông lệnh trước**: Xem mục `10.2` + `10.3`
- **Chỉ muốn kết nối hệ thống bên ngoài**: Xem mục `10.4`
- **Muốn hiểu vì sao không nên sao chép Skill cũ**: Xem mục `10.1` + `10.5`

### 3 nguyên tắc cốt lõi cần ghi nhớ

- `openclaw infer` phụ trách **các lệnh gọi headless, kịch bản tự động hóa và chạy qua CLI**
- Các công cụ của agent phụ trách **tự động kích hoạt năng lực ngay trong phiên hội thoại**
- `hooks` / `webhooks` / `Task Flow` phụ trách **tiếp nhận sự kiện từ bên ngoài và điều phối đa bước**

---

## 10.1 Sau cột mốc 2026.4, lộ trình tích hợp API chuẩn là gì?

Vấn đề lớn nhất ở các tài liệu cũ không phải là "không biết kết nối API", mà là mặc định xem các **Skill bên thứ ba đã quá hạn** và **các câu lệnh không còn được khuyên dùng** làm lựa chọn hàng đầu. Lộ trình chuẩn hóa hiện nay gồm:

| Nhu cầu | Nhược điểm ở cách viết cũ | Lộ trình chính thức khuyên dùng hiện nay |
|---|---|---|
| Suy luận văn bản | Script rời rạc, tự ghép nối provider thủ công | `openclaw infer model run` |
| Tạo ảnh | Phụ thuộc vào các Skill bên thứ ba cũ | `openclaw infer image generate` hoặc công cụ agent `image_generate` |
| Tạo video | Lệnh cũ, tên Skill cũ không còn hoạt động | `openclaw infer video generate` hoặc công cụ agent `video_generate` |
| Chuyển âm thanh thành văn bản (Transcribe) | Nhiều script thủ công, định dạng dễ lỗi | `openclaw infer audio transcribe` |
| Chuyển văn bản thành giọng nói (TTS) | Đường dẫn câu lệnh cũ không thống nhất | `openclaw infer tts convert` hoặc công cụ agent `tts` |
| Tìm kiếm Web / Cào dữ liệu | Tự viết và bảo trì crawler | `openclaw infer web search` / `openclaw infer web fetch` |
| Tạo Embedding | Mỗi provider tự viết một chuẩn riêng | `openclaw infer embedding create` |
| Kích hoạt từ hệ thống bên ngoài | Ghép nối chắp vá bằng cron + shell | `hooks` / plugin `webhooks` / `Task Flow` |
| Luồng xử lý media cục bộ | Script rời rạc + chuyển đổi giao diện đồ họa | Provider/plugin `ComfyUI` chính thức |

Tóm tắt trong một câu:

1. **Nhu cầu "suy luận / tác vụ trực tiếp"**: Ưu tiên dùng `openclaw infer`
2. **"Tự động gọi trong phiên chat"**: Giao cho các công cụ tích hợp sẵn của agent (`image_generate`, `video_generate`, `music_generate`, `tts`)
3. **"Điều khiển bởi hệ thống bên ngoài"**: Ưu tiên dùng `hooks`, plugin `webhooks` và `Task Flow`
4. Chỉ khi các phương án trên không đáp ứng được, mới cân nhắc viết custom plugin hoặc middleware bên ngoài.

---

## 10.2 Thiết lập nhà cung cấp (provider) và năng lực mô hình

Trước khi kết nối bất kỳ API nào, hãy đảm bảo OpenClaw của bạn đã kết nối và truy cập bình thường tới các mô hình AI và năng lực media. Trình tự ngắn nhất:

```bash
# 1) Khuyên dùng: Chạy wizard hướng dẫn từng bước
openclaw onboard

# 2) Kiểm tra trạng thái mô hình và xác thực
openclaw models status
openclaw models list

# 3) Đăng nhập theo từng provider
openclaw models auth login --provider openai --set-default
openclaw models auth login --provider anthropic --method cli --set-default

# 4) Thiết lập mô hình chính và mô hình fallback cho tác vụ thị giác (image)
openclaw models set openai/gpt-5.4
openclaw models set-image openai/gpt-4.1-mini
```

Nếu bạn ở trong môi trường đa provider, khuyến nghị cấu hình đồng thời mô hình chính và chuỗi dự phòng (fallbacks):

```bash
openclaw models set openai/gpt-5.4
openclaw models fallbacks add anthropic/claude-sonnet-4-5
openclaw models fallbacks add google/gemini-2.5-pro
```

**Khi nào cần chạy `models status --probe`?**

- Bạn nghi ngờ token đã hết hạn
- Danh sách provider hiển thị bình thường nhưng gọi thực tế lại lỗi
- Vừa chuyển đổi OAuth / API key và cần kiểm tra khả dụng ngay

```bash
openclaw models status --probe
```

### Dấu hiệu nhận biết cấu hình thành công

Nếu thỏa mãn các tiêu chí sau, bạn đã sẵn sàng đi tiếp:

- `openclaw models status` hiển thị mô hình chính và các provider đã đăng nhập
- `openclaw models status --probe` không báo lỗi xác thực (auth/token)
- Bạn đã xác định rõ mô hình mặc định mà mình sẽ sử dụng

Nếu bước này chưa thông, đừng vội kết nối hệ thống bên ngoài. Hãy cấu hình xác thực và kiểm tra mô hình mặc định chạy tốt trước đã.

---

## 10.3 `openclaw infer`: Cổng thống nhất quan trọng nhất hiện nay

Tài liệu chính thức nêu rõ: `openclaw infer` hiện là **cổng chuẩn cho mọi năng lực headless (không giao diện)**. Lệnh này bao quát:

- Suy luận văn bản
- Tạo / chỉnh sửa / mô tả hình ảnh
- Chuyển âm thanh thành văn bản
- Tổng hợp giọng nói (TTS)
- Tạo / phân tích video
- Tìm kiếm web / cào dữ liệu URL
- Tạo vector nhúng (Embedding)

### 10.3.1 Xem nhanh các lệnh thường dùng

```bash
openclaw infer model run --prompt "Reply with exactly: smoke-ok" --json
openclaw infer image generate --prompt "friendly lobster illustration" --json
openclaw infer audio transcribe --file ./memo.m4a --json
openclaw infer tts convert --text "hello from openclaw" --output ./hello.mp3 --json
openclaw infer video generate --prompt "cinematic sunset over the ocean" --json
openclaw infer web search --query "OpenClaw docs" --json
openclaw infer embedding create --text "friendly lobster" --json
```

Đối với người mới, không nên chạy thử tất cả cùng lúc. Trình tự thử nghiệm ổn định nhất:

1. Chạy `model run` trước để xác nhận mô hình văn bản hoạt động
2. Chạy tiếp `web search` để kiểm tra khả năng truy cập mạng
3. Cần năng lực media nào thì mới kiểm tra riêng năng lực đó

Cách làm này giúp bạn lập tức khoanh vùng lỗi do **xác thực mô hình**, **đường dẫn tệp tin**, hay do **chưa cấu hình provider media**.

### 10.3.2 Suy luận văn bản: Chuẩn hóa thay cho các script rời rạc

```bash
openclaw infer model run \
  --prompt "Dùng 5 gạch đầu dòng tóm tắt các điểm mới chính của OpenClaw v2026.9.3" \
  --json
```

Rất phù hợp cho:

- Tóm tắt nội dung nhanh trong shell script
- Sinh ghi chú phát hành (release notes) trong luồng CI/CD
- Xuất dữ liệu JSON có cấu trúc ổn định cho hệ thống tự động hóa hạ nguồn

### 10.3.3 Tạo hình ảnh: Mặc định dùng năng lực chính thức

```bash
openclaw infer image generate \
  --prompt "Hình minh họa sơ đồ luồng công việc OpenClaw theo phong cách vẽ tay trên bảng trắng" \
  --json
```

Nếu muốn sửa tiếp từ ảnh có sẵn, dùng `image edit`; nếu muốn agent đọc hiểu và mô tả ảnh, dùng `image describe`:

```bash
openclaw infer image describe \
  --file ./ui-screenshot.png \
  --model openai/gpt-4.1-mini \
  --json
```

> Lưu ý: Tham số `--model` của các lệnh như `image describe` bắt buộc phải viết đầy đủ định dạng `<provider/model>`.

### 10.3.4 Xử lý âm thanh (Transcribe): Không cần tự viết script Whisper

```bash
openclaw infer audio transcribe \
  --file ./team-sync.m4a \
  --language vi \
  --prompt "Tập trung trích xuất tên người, các quyết định chính và các đầu việc cần làm" \
  --json
```

Phù hợp cho:

- Lập biên bản cuộc họp
- Bóc tách nội dung podcast
- Xử lý và tổng hợp tin nhắn thoại từ Telegram, Lark, Zalo

### 10.3.5 Chuyển giọng nói (TTS): Chuẩn hóa qua `tts convert`

```bash
openclaw infer tts convert \
  --text "Báo cáo công việc hàng ngày đã được tạo thành công" \
  --output ./daily-report.mp3 \
  --json
```

Nếu bạn đang trong phiên hội thoại và muốn agent trả lời trực tiếp bằng giọng nói, hãy để agent tự gọi công cụ `tts`. Nếu bạn đang viết script hoặc chạy tác vụ tự động hóa hàng loạt, hãy ưu tiên dùng `infer tts convert`.

### 10.3.6 Tạo video: Hiện là tác vụ bất đồng bộ (Async Task)

```bash
openclaw infer video generate \
  --prompt "Một cảnh quay điện ảnh dài 5 giây: chú tôm hùm đang lướt sóng lúc hoàng hôn trên biển" \
  --json
```

Cần lưu ý 2 điểm quan trọng:

1. Sinh video là **tác vụ kéo dài và chạy bất đồng bộ**, provider phía dưới sẽ trả về mã `task id` trước.
2. OpenClaw sẽ ghi nhận tác vụ video vào task ledger, bạn có thể chạy `openclaw tasks list` để theo dõi tiến độ khi cần.

### 10.3.7 Tìm kiếm Web và trích xuất dữ liệu: Dùng công cụ chuẩn trước khi nghĩ đến crawler

```bash
openclaw infer web search --query "OpenClaw v2026.9.3 release notes" --json
openclaw infer web fetch --url https://docs.openclaw.ai/cli/infer --json
```

Bộ lệnh này đặc biệt phù hợp cho:

- Bản tin tổng hợp tự động hàng ngày
- Giám sát đối thủ cạnh tranh và tin tức ngành
- Sàng lọc tài liệu sơ bộ
- Thu thập tư liệu trước khi biên tập nội dung

### 10.3.8 Tạo Vector Embedding: Chuẩn hóa qua `embedding create`

```bash
openclaw infer embedding create \
  --text "Phản hồi từ khách hàng: Giao hàng chậm, quy định bồi thường không rõ ràng" \
  --json
```

Phù hợp cho:

- Phân cụm câu hỏi thường gặp (FAQ)
- Phân loại ngữ nghĩa ticket hỗ trợ khách hàng
- Vector hóa dữ liệu trước khi nạp vào cơ sở tri thức bên ngoài

---

## 10.4 Kết nối hệ thống bên ngoài: Dùng Hooks, Webhooks Plugin và Task Flow

### 10.4.1 Kích hoạt gọn nhẹ: Dùng `hooks`

Nếu bạn chỉ cần hệ thống bên ngoài "đánh thức" OpenClaw hoặc kích hoạt một phiên chạy agent độc lập (isolated run), giải pháp nhẹ nhàng nhất là `hooks`.

Ví dụ cấu hình:

```json
{
  "hooks": {
    "enabled": true,
    "token": "replace-with-dedicated-hook-token",
    "path": "/hooks"
  }
}
```

**Đánh thức phiên chính (Wake)**:

```bash
curl -X POST http://127.0.0.1:18789/hooks/wake \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"text":"New email received","mode":"now"}'
```

**Khởi chạy một phiên agent độc lập**:

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize inbox","name":"Email","model":"openai/gpt-5.4-mini"}'
```

Kịch bản ứng dụng thích hợp:

- Kích hoạt tóm tắt sau khi có người gửi form biểu mẫu
- Phân loại nhanh khi có email mới hoặc ticket mới
- Yêu cầu OpenClaw tạo báo cáo cập nhật sau khi build CI/CD thành công

### 10.4.2 Điều phối quy trình phức tạp: Dùng plugin `webhooks` + Task Flow

Nếu bạn cần một quy trình làm việc **nhiều bước, có thể theo dõi trạng thái và tiếp tục chạy**: hãy sử dụng trực tiếp plugin `webhooks`.

Ví dụ cấu hình chính thức:

```json
{
  "plugins": {
    "entries": {
      "webhooks": {
        "enabled": true,
        "config": {
          "routes": {
            "zapier": {
              "path": "/plugins/webhooks/zapier",
              "sessionKey": "agent:main:main",
              "secret": {
                "source": "env",
                "provider": "default",
                "id": "OPENCLAW_WEBHOOK_SECRET"
              },
              "controllerId": "webhooks/zapier",
              "description": "Zapier TaskFlow bridge"
            }
          }
        }
      }
    }
  }
}
```

Tạo một flow làm việc mới:

```bash
curl -X POST https://gateway.example.com/plugins/webhooks/zapier \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_SHARED_SECRET' \
  -d '{"action":"create_flow","goal":"Review inbound queue"}'
```

Tạo tiếp tác vụ con bên trong flow:

```json
{
  "action": "run_task",
  "flowId": "flow_123",
  "runtime": "acp",
  "childSessionKey": "agent:main:acp:worker",
  "task": "Inspect the next message batch"
}
```

Kịch bản ứng dụng thích hợp:

- Zapier / n8n / Make kích hoạt các quy trình nhiều bước
- Điều phối và phân loại ticket chăm sóc khách hàng
- Sàng lọc đầu mối kinh doanh + theo dõi + tổng hợp báo cáo
- Dây chuyền sản xuất bản tin hàng tuần hoặc duyệt nội dung tự động

### 10.4.3 Cách kết nối Notion chuẩn xác hiện nay

Vấn đề lớn nhất của hướng dẫn "cấu hình Notion Skill trọn gói" trong các tài liệu cũ không phải là Notion không kết nối được, mà là **cách làm đó đã lạc hậu**.

Cách tiếp cận chuẩn xác và bền vững hiện nay là:

1. **Nếu chỉ ghi kết quả từ OpenClaw vào Notion**: Ưu tiên dùng Zapier / n8n / dịch vụ trung gian riêng, kết nối qua Webhook.
2. **Nếu muốn tạo quy trình làm việc nội bộ liên tục**: Dùng plugin `webhooks` để gắn sự kiện bên ngoài vào Task Flow.
3. **Nếu có nhu cầu tùy biến sâu**: Tự viết plugin riêng, không nên phụ thuộc vào tên Skill bên thứ ba cũ.

Nói cách khác:

- **Notion vẫn hoàn toàn kết nối được**
- Nhưng nó không nên đóng vai trò là "lối đi mặc định duy nhất"
- Lộ trình kỹ thuật chuẩn hiện nay là **Infer + Hooks/Webhooks + Task Flow + Plugin**

---

## 10.5 Những cạm bẫy dễ mắc phải nhất trong chương này

### Bẫy 1: Cố tìm và cài đặt theo tên Skill cũ

Cách xử lý chuẩn:

- Kiểm tra tài liệu chính thức và ghi chú phát hành (release notes) mới nhất
- Xác nhận xem tính năng đó đã được tích hợp sẵn vào `infer` hoặc công cụ của agent chưa
- Chỉ khi OpenClaw chưa hỗ trợ chính thức, mới tìm plugin hoặc công cụ trong cộng đồng

### Bẫy 2: Coi năng lực media như script xử lý đồng bộ thông thường

- Tạo ảnh và TTS đa số trả về kết quả đồng bộ ngay lập tức
- Tạo video và sinh nhạc thường là tác vụ chạy ngầm bất đồng bộ
- Với các tác vụ chạy ngầm, hãy kết hợp theo dõi trạng thái qua `openclaw tasks list` và `openclaw tasks show`

### Bẫy 3: Quên viết tiền tố provider khi dùng cờ `--model`

Trong các lệnh sau, luôn khuyến nghị viết đầy đủ định dạng:

- `image describe`
- `audio transcribe`
- `video describe`
- Bất kỳ kịch bản nào bạn muốn chỉ định đích danh nhà cung cấp

Ví dụ đúng chuẩn:

```bash
openclaw infer audio transcribe --file ./memo.m4a --model openai/whisper-1 --json
```

### Bẫy 4: Lưu cứng secret và token trực tiếp trong repository

Tài liệu chính thức đã hỗ trợ cơ chế SecretRef an toàn. Thứ tự ưu tiên:

1. `env` (biến môi trường)
2. `file` (tệp bảo mật trên đĩa)
3. `exec` (chương trình quản lý khóa)

Tuyệt đối không lưu cứng webhook secret, provider token, hay API key vào các file cấu hình công khai trên Git.

---

## 10.6 Lời khuyên thực hành

Nếu bạn muốn đưa OpenClaw vào ứng dụng thực tế ngay hôm nay, hãy làm theo các bước sau:

1. **Chạy thông suốt `openclaw onboard` và `openclaw infer` trước**
2. **Thiết lập mô hình mặc định cho ảnh / video / TTS**
3. **Dùng `hooks` cho các kích hoạt sự kiện đơn giản**
4. **Dùng plugin `webhooks` + `Task Flow` cho các luồng công việc nhiều bước**
5. **Chỉ triển khai `ComfyUI` khi cần điều phối media chuyên sâu tại máy cục bộ**

---

## 10.7 Tài liệu tham khảo chính thức

- GitHub Releases: https://github.com/openclaw/openclaw/releases
- Inference CLI: https://docs.openclaw.ai/cli/infer
- Models CLI: https://docs.openclaw.ai/cli/models
- Webhooks Plugin: https://docs.openclaw.ai/plugins/webhooks
- Scheduled Tasks: https://docs.openclaw.ai/automation/cron-jobs
- Task Flow: https://docs.openclaw.ai/automation/taskflow
