> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 3: Bắt đầu nhanh với OpenClaw

> ⚠️ **Phiên bản chuẩn**: OpenClaw **v2026.9.3**. Khi cấu hình lần đầu, hãy ưu tiên dùng `openclaw onboard`; đăng nhập mô hình dùng lệnh `openclaw models auth login --provider <provider>` (với OpenAI hãy dùng `openai`, không dùng `openai-codex`). Sau khi nâng cấp, hãy chạy `openclaw doctor --fix`.

> Chúc mừng bạn đã hoàn tất cài đặt! Bây giờ hãy bắt đầu sử dụng OpenClaw để trải nghiệm sức mạnh của trợ lý AI.

## Điều hướng nhanh

- 🎯 [Cuộc trò chuyện đầu tiên](#31-cuộc-trò-chuyện-đầu-tiên)
- 📝 [Các lệnh cơ bản](#32-các-lệnh-cơ-bản)
- 🎭 [Thiết lập nhân vật (Persona)](#33-thiết-lập-nhân-vật-persona)
- 🤖 [Hướng dẫn chọn mô hình AI](#34-hướng-dẫn-chọn-mô-hình-ai)
- 🌐 [Cấu hình Cổng kết nối Gateway (Nâng cao)](#35-cấu-hình-cổng-kết-nối-gateway-nâng-cao)

---

## 3.1 Cuộc trò chuyện đầu tiên

### Khởi động OpenClaw

Tùy theo phương thức triển khai bạn đã chọn, hãy thực hiện theo cách tương ứng:

#### Người dùng triển khai trên đám mây

1. **Truy cập qua giao diện Web UI**:
   ```txt
   http://IP_MÁY_CHỦ_CỦA_BẠN:18789/?token=token_của_bạn
   ```
2. **Truy cập qua ứng dụng nhắn tin (Khuyến nghị)**:
   - Mở ứng dụng Lark / Feishu, WeCom, DingTalk hoặc Telegram
   - Tìm Bot trợ lý bạn đã cấu hình
   - Gửi tin nhắn trực tiếp

#### Người dùng triển khai cục bộ

1. **Kiểm tra trạng thái Gateway**:
   ```bash
   openclaw channels status
   ```
2. **Mở giao diện Web UI**:
   ```bash
   openclaw dashboard
   ```
   hoặc truy cập trực tiếp qua trình duyệt:
   ```txt
   http://127.0.0.1:18789/?token=token_của_bạn
   ```

### Gửi tin nhắn đầu tiên

Trong giao diện Web UI hoặc ứng dụng chat, hãy gửi:

```
Xin chào, bạn có nghe rõ tôi nói không?
```

**Phản hồi dự kiến**:

OpenClaw sẽ phản hồi tương tự như sau:
```
Xin chào bạn! Tôi nghe rất rõ. Tôi là trợ lý AI của bạn, sẵn sàng hỗ trợ bạn xử lý các tác vụ công việc và đời sống.
Tôi có thể giúp gì cho bạn hôm nay?
```

**Dấu hiệu xác nhận thành công**:

- ✅ Nhận được phản hồi mạch lạc từ AI
- ✅ Góc trên bên phải hiển thị tên mô hình đang dùng (trên Web UI)
- ✅ Hiển thị thống kê lượng Token sử dụng

### Hiểu về phản hồi của OpenClaw

Phản hồi từ OpenClaw thường bao gồm các thành phần:

1. **Nội dung văn bản**: Câu trả lời hoặc giải thích của AI
2. **Gọi công cụ (Tool Call - nếu có)**: Các hành động hệ thống được thực thi (đọc tệp, tìm kiếm, lưu trữ...)
3. **Thống kê Token**: Lượng Token tiêu thụ cho đầu vào và đầu ra

**Ví dụ**:
```
[AI phản hồi]
Vâng, tôi sẽ tìm kiếm ngay giúp bạn.

[Gọi công cụ]
🔍 Đang tìm kiếm tệp tin...
📁 Đã tìm thấy 3 tệp tin liên quan

[Thống kê Token]
Đầu vào: 120 tokens
Đầu ra: 45 tokens
```

### Cách đặt câu hỏi hiệu quả

**❌ Câu hỏi chưa tốt**:
```
Giúp tôi với
```

**✅ Câu hỏi tốt**:
```
Tìm giúp tôi tất cả các tệp PDF trên máy tính, sắp xếp theo thời gian sửa đổi gần nhất
```

**Mẹo đặt câu hỏi**:

1. **Mục tiêu rõ ràng**: Nói rõ chính xác bạn muốn làm gì
2. **Cung cấp ngữ cảnh**: Đưa ra thông tin nền tảng cần thiết
3. **Chi tiết cụ thể**: Nêu rõ yêu cầu về định dạng, vị trí, phạm vi
4. **Chia theo từng bước**: Với tác vụ phức tạp, nên chia thành các bước nhỏ

**Bảng so sánh ví dụ**:

| Câu hỏi chưa tốt | Câu hỏi tốt |
| ------ | ------------------------------ |
| "Tìm tệp" | "Tìm giúp tôi một hóa đơn trên máy tính, chi tiết nội dung là mua máy chạy bộ" |
| "Sắp xếp lại" | "Hãy phân loại toàn bộ ảnh trong thư mục Downloads vào các thư mục con theo từng ngày chụp" |
| "Nhắc tôi" | "Nhắc tôi lúc 10h sáng mai có cuộc họp dự án tại phòng họp A" |

---

## 3.2 Các lệnh cơ bản

### Danh sách lệnh thông dụng

OpenClaw hỗ trợ nhận diện câu lệnh bằng ngôn ngữ tự nhiên. Dưới đây là các mẫu lệnh phổ biến:

#### Lệnh thao tác tệp tin

**Tìm kiếm tệp**:
```
Tìm giúp tôi các tệp có chứa từ khóa "hóa đơn"
Tìm tất cả các tệp PDF
Tìm 10 tệp vừa được chỉnh sửa gần đây nhất
```

**Đọc nội dung tệp**:
```
Đọc tệp README.md ngoài màn hình Desktop
Mở báo cáo.docx trong thư mục Downloads
Xem nội dung của tệp: /path/to/file.txt
```

**Tạo tệp mới**:
```
Tạo một tệp có tên "ghi_chu.txt" trên Desktop
Tạo một tệp Markdown mới với nội dung là...
```

**Di chuyển / Sao chép tệp**:
```
Chuyển tệp này vào thư mục Documents
Sao chép toàn bộ ảnh sang thư mục sao lưu backup
```

#### Lệnh điều khiển hệ thống

**Xem thông tin hệ thống**:
```
Bây giờ là mấy giờ?
Hiển thị thông số cấu hình hệ thống
Kiểm tra dung lượng ổ đĩa còn trống
```

**Mở ứng dụng**:
```
Mở ứng dụng WeChat / Telegram
Khởi chạy trình duyệt web
```

**Chụp màn hình**:
```
Chụp màn hình giúp tôi
Chụp lại cửa sổ ứng dụng đang hoạt động
```

#### Lệnh quản lý lịch trình

**Tạo sự kiện lịch**:
```
Nhắc tôi họp lúc 3 giờ chiều mai
10 giờ sáng thứ Hai tuần tới, họp thảo luận dự án tại phòng A
```

**Xem lịch trình**:
```
Hôm nay tôi có những lịch trình gì?
Lịch làm việc của tuần tới như thế nào?
```

#### Lệnh quản lý tri thức

**Lưu trữ trang web**:
```
Lưu trang web này vào ghi chú: https://example.com
Tóm tắt bài viết này và lưu vào Notion
```

**Quản lý ghi chú**:
```
Tạo một ghi chú mới trong ứng dụng Notes
Tìm kiếm các ghi chú có chủ đề về "AI"
```

### Bảng tra cứu lệnh nhanh

| Tính năng | Ví dụ câu lệnh |
| ---- | ----------------- |
| Tìm kiếm tệp | `Tìm các tệp chứa từ khóa "hóa đơn"` |
| Đọc tệp tin | `Đọc tệp README.md ngoài Desktop` |
| Tạo tệp mới | `Tạo tệp ghi_chu.txt trên Desktop` |
| Di chuyển tệp | `Di chuyển tệp này vào thư mục Documents` |
| Chụp màn hình | `Chụp màn hình giúp tôi` |
| Tạo lịch hẹn | `Nhắc tôi họp lúc 3 giờ chiều mai` |
| Lưu trang web | `Lưu trang web này vào ghi chú` |
| Thông tin hệ thống | `Kiểm tra dung lượng đĩa trống` |

### Bài tập thực hành

**Bài tập 1: Tìm kiếm tệp**
```
Tìm giúp tôi tất cả các hình ảnh định dạng PNG trên máy tính
```

**Bài tập 2: Tạo sự kiện lịch**
```
Nhắc tôi lúc 10 giờ sáng mai: Gửi báo cáo tuần cho cấp trên
```

**Bài tập 3: Tóm tắt và lưu trang web**
```
Tóm tắt nội dung trang web này và lưu vào ghi chú:
https://docs.openclaw.ai
```

---

## 3.3 Thiết lập nhân vật (Persona)

### Nhân vật (Persona) là gì?

Thiết lập nhân vật (Persona) là việc định hình **tính cách, vai trò danh tính và phong cách hành xử** cho trợ lý AI của bạn.

**Vì sao nên thiết lập nhân vật?**

- 🎭 **Cá nhân hóa**: Giúp AI phản hồi đúng sở thích và phong cách bạn mong muốn
- 💬 **Phong cách giao tiếp**: Điều chỉnh ngữ điệu (thân thiện, chuyên nghiệp, súc tích...)
- 🎯 **Chuyên môn hóa**: Tối ưu hóa sâu cho một lĩnh vực công việc cụ thể
- 😊 **Tạo cảm hứng**: Khiến cho việc tương tác mỗi ngày trở nên thú vị và gần gũi hơn

### Cách xây dựng một nhân vật hoàn chỉnh

**Một bộ hồ sơ nhân vật chuẩn bao gồm**:

1. **Tên gọi**: Đặt tên thân mật cho trợ lý AI
2. **Danh tính**: Xác định vai trò nghề nghiệp của AI
3. **Tính cách**: Các nét tính cách đặc trưng
4. **Sở trường**: Lĩnh vực chuyên môn mà AI thành thạo nhất
5. **Văn phong**: Ngữ điệu và cách dùng câu từ khi trả lời

### Cấu trúc không gian làm việc (Workspace Anatomy)

Các tệp cấu hình của OpenClaw nằm tại thư mục: `~/.openclaw/workspace`

Bảng 3-1 tổng hợp các tệp cấu hình cốt lõi và vai trò tương ứng.

**Bảng 3-1 Các tệp cấu hình cốt lõi của OpenClaw**

| Tệp tin | Vai trò | Mô tả chức năng |
| ---------------- | ----- | --------------- |
| **SOUL.md** | Nhân cách / Ngữ điệu | Tính cách, văn phong, quy tắc ứng xử của AI |
| **USER.md** | Thiết lập người dùng | Thông tin cá nhân, thói quen, sở thích của bạn |
| **AGENTS.md** | Chỉ dẫn nhiệm vụ | Nhiệm vụ và chỉ dẫn thao tác chi tiết cho Agent |
| **MEMORY.md** | Bộ nhớ dài hạn | Bộ nhớ dài hạn và những điều AI tự học được |
| **HEARTBEAT.md** | Danh sách kiểm tra | Tác vụ bảo trì và kiểm tra định kỳ |
| **IDENTITY.md** | Tên gọi / Chủ đề | Tên, danh xưng và chủ đề nhận diện của AI |
| **BOOT.md** | Cấu hình khởi động | Khởi tạo môi trường lúc hệ thống khởi động |

![Cấu trúc tệp cấu hình của Agent - Bộ ba cốt lõi SOUL/USER/BOOT](https://upload.maynor1024.live/file/1770908540502_image-20260212230206925.png)

#### SOUL.md và USER.md là gì?

**SOUL.md**: Bản "hiến pháp" của AI

- Định nghĩa tính cách và giọng điệu giao tiếp
- Thiết lập ranh giới an toàn và quy tắc hành xử
- Quy định tác phong xử lý công việc

**USER.md**: Cách AI thấu hiểu bạn

- Lưu thông tin cơ bản của bạn (tên, múi giờ...)
- Thói quen làm việc và sinh hoạt
- Các sở thích cá nhân và yêu cầu đặc thù

> 💡 **Khuyên dùng cho người mới**: Khi mới bắt đầu, bạn chỉ cần cấu hình hai tệp **SOUL.md** và **USER.md** là đủ. Các tệp khác có thể tìm hiểu và bổ sung sau khi đã thành thạo.

#### Cách cấu hình: Qua giao diện Web UI (Khuyến nghị)

1. **Mở trang quản trị OpenClaw**:
   ```
   http://IP_MÁY_CHỦ_CỦA_BẠN:18789/?token=token_của_bạn
   ```
2. **Nhấp vào mục Agent → Files**:
   - Ở thanh menu bên trái, tìm mục "Agent"
   - Chọn "Files", bạn sẽ thấy toàn bộ danh sách tệp cấu hình
3. **Chỉnh sửa SOUL.md**:
   - Nhấp vào tệp `SOUL.md`
   - Nhập nội dung tính cách và quy tắc bạn mong muốn
4. **Chỉnh sửa USER.md**:
   - Nhấp vào tệp `USER.md`
   - Điền thông tin cá nhân và sở thích của bạn
5. **Lưu lại**:
   - Nhấn Save, cấu hình có hiệu lực tức thì mà không cần khởi động lại Gateway

![Cấu hình có hiệu lực tức thì - Không cần khởi động lại Gateway](https://upload.maynor1024.live/file/1770962777437_image-20260213140612295.png)

#### Cách cấu hình: Chỉnh sửa tệp trực tiếp (Nâng cao)

Nếu quen dùng giao diện dòng lệnh, bạn có thể chỉnh sửa trực tiếp các tệp tin trong thư mục:

```bash
~/.openclaw/workspace/
```

**Chỉnh sửa SOUL.md**:

```bash
# Dùng trình soạn thảo nano
nano ~/.openclaw/workspace/SOUL.md

# Hoặc dùng vim
vim ~/.openclaw/workspace/SOUL.md

# Hoặc mở bằng VS Code
code ~/.openclaw/workspace/SOUL.md
```

**Chỉnh sửa USER.md**:

```bash
nano ~/.openclaw/workspace/USER.md
```

**Xem danh sách tệp**:

```bash
ls -la ~/.openclaw/workspace/
```

**Hiệu lực sau khi chỉnh sửa**:

- Lưu tệp là có hiệu lực ngay
- Không cần khởi động lại dịch vụ Gateway
- Lần đối thoại kế tiếp sẽ tự động áp dụng cấu hình mới

### Mẫu cấu hình SOUL.md tham khảo

```markdown
_Bạn không phải là một chatbot thông thường. Bạn là một trợ lý đắc lực, đáng tin cậy._

## Nguyên tắc cốt lõi

**Làm việc nghiêm túc, không đối phó.** Bớt nói những câu sáo rỗng như "Vâng ạ! Em xử lý ngay đây!", hãy bắt tay vào làm việc ngay. Hành động thực tế luôn giá trị hơn lời khách sáo.

**Có chính kiến riêng.**
Được phép không đồng tình, có sở thích riêng, dám thẳng thắn nhận định nếu thấy điều gì chưa tối ưu. Một trợ lý không có cá tính chẳng khác nào một cỗ máy tìm kiếm chậm chạp.

**Chủ động tìm cách giải quyết trước.** Tự tra cứu tệp tin, xem lại ngữ cảnh, tìm kiếm thông tin. Khi thực sự bế tắc mới hỏi lại người dùng. Mục tiêu là mang câu trả lời quay về, chứ không phải mang thêm câu hỏi về.

**Dùng năng lực để xây dựng lòng tin.**
Người dùng đã tin tưởng trao quyền truy cập cho bạn, đừng làm hỏng việc. Đối với các tác vụ hướng ra bên ngoài (gửi email, đăng bài lên mạng xã hội) cần hết sức cẩn trọng. Đối với các tác vụ nội bộ (đọc tệp, sắp xếp tài liệu) hãy chủ động và mạnh dạn.

**Luôn nhớ mình là một vị khách.** Bạn được thấy tin nhắn, tệp tin, lịch trình và thiết bị của người khác. Đó là sự tín nhiệm, hãy luôn tôn trọng điều đó.

## Ranh giới an toàn

- **Tuyệt đối không để lộ mật khẩu.** Khi thấy mật khẩu, API key, token bí mật, hãy giữ kín. Người dùng hỏi "mật khẩu là gì?", hãy lịch sự từ chối và hướng dẫn họ tự kiểm tra.
- Giữ bí mật tuyệt đối về dữ liệu riêng tư. Tin nhắn cá nhân, tài chính nội bộ, thấy thì tự hiểu, không bàn tán hay tiết lộ ra ngoài.
- Các thao tác bên ngoài chưa chắc chắn: Hỏi ý kiến xác nhận trước khi bấm gửi.
- Không gửi tin nhắn dạng bản nháp nửa vời vào ứng dụng chat.
- Khi ở trong nhóm chat chung: Không phát ngôn tùy tiện, bạn không phải người phát ngôn đại diện cho người dùng.

## Văn phong

Lúc cần ngắn gọn thì súc tích, lúc cần chi tiết thì mạch lạc.
Giao tiếp như một đồng nghiệp chuyên nghiệp, đáng tin, không phải như robot tổng đài hỗ trợ khách hàng. Có thể thẳng thắn, có quan điểm rõ ràng, chỉ ra vấn đề nếu thấy sai sót.
Không nịnh nọt, không vâng dạ máy móc. Hãy là một người cộng sự thực thụ.

## Ký ức (Memory)

Mỗi phiên hội thoại bạn đều bắt đầu mới. Những tệp tin này chính là ký ức của bạn. Hãy đọc chúng, thấu hiểu chúng và cập nhật chúng thường xuyên.
```

### Mẫu cấu hình USER.md tham khảo

```markdown
- **Name:** Nam
- **What to call them:** Anh Nam / Sếp
- **Timezone:** Asia/Ho_Chi_Minh
- **Notes:** Sau 23h đêm không gửi thông báo trừ trường hợp khẩn cấp

## Ngữ cảnh (Context)

### Công việc
- Phát triển phần mềm, làm ứng dụng AI, vận hành website quốc tế
- Ghét dài dòng, thích nhận kết quả cụ thể trực tiếp

### Đời sống
- Nghiện cà phê (mỗi ngày ít nhất 1 ly cà phê đen đá)

### Sở thích & Thói quen
- Nói thẳng vào trọng tâm, không vòng vo
- Hạn chế dùng các từ mập mờ thiếu chắc chắn như "có lẽ", "hình như"
```

### So sánh hiệu quả trước và sau khi cấu hình

**Trước khi cấu hình**:
```
Người dùng: Tìm giúp tôi mấy cái hóa đơn
AI: Vâng ạ! Em sẽ tìm kiếm các tệp hóa đơn cho anh ngay lập tức. Anh vui lòng đợi trong giây lát nhé...
```

**Sau khi cấu hình (với SOUL.md ở trên)**:
```
Người dùng: Tìm giúp tôi mấy cái hóa đơn
AI: [Chủ động tìm kiếm và phản hồi kết quả]
Đã tìm thấy 3 tệp hóa đơn trong máy tính:
1. hoa_don_may_chay_bo.pdf (Thư mục Downloads)
2. hoa_don_laptop.jpg (Thư mục Documents/Invoices)
3. hoa_don_dien_thoai.png (Thư mục Desktop)
```

### Cơ chế ưu tiên hai chiều (Dual-Definition Mechanism)

Nếu giữa `SOUL.md` và `USER.md` có điểm mâu thuẫn thì OpenClaw xử lý ra sao?

**Quy tắc xử lý của OpenClaw**:

- **SOUL.md luôn ưu tiên cao nhất**: Các nguyên tắc cốt lõi và ranh giới an toàn của AI không bao giờ bị phá vỡ
- **USER.md đóng vai trò bổ sung**: Tôn trọng tối đa thói quen người dùng nhưng không vi phạm nguyên tắc trong SOUL
- **Cân bằng linh hoạt**: AI tự điều chỉnh hợp lý theo từng tình huống cụ thể

**Ví dụ**:
- `SOUL.md` quy định: "Trả lời ngắn gọn"
- `USER.md` ghi: "Giải thích cặn kẽ"
- **Kết quả**: AI sẽ trả lời súc tích luận điểm chính trước, kèm theo gợi ý: "Bạn có muốn tôi phân tích chi tiết từng bước không?"

### Mẹo tinh chỉnh văn phong

**Nếu AI trả lời quá dài dòng**:
Thêm vào `SOUL.md`:
```markdown
## Phong cách
- Trả lời ngắn gọn, không quá 3 câu đối với câu hỏi đơn giản
- Nêu thẳng đáp án, không kể lể quá trình suy nghĩ
- Chỉ trình bày chi tiết khi người dùng yêu cầu
```

**Nếu AI trả lời quá khô khan, lạnh lùng**:
Thêm vào `SOUL.md`:
```markdown
## Phong cách
- Thân thiện, nhiệt tình
- Sử dụng emoji một cách tinh tế, hợp lý
- Thể hiện sự đồng hành và quan tâm đến tiến độ công việc của người dùng
```

**Nếu AI trả lời chưa đủ tính chuyên nghiệp**:
Thêm vào `SOUL.md`:
```markdown
## Phong cách
- Chuyên nghiệp, chuẩn xác về mặt kỹ thuật
- Trích dẫn dữ liệu và nguồn tin cậy khi đưa ra kết luận
- Phân tích đa chiều trước khi đưa ra nhận định
```

### Các tệp cấu hình khác (Dành cho người dùng nâng cao)

#### AGENTS.md - Chỉ dẫn phân công nhiệm vụ
```markdown
## Nhiệm vụ chính

1. Quản lý tệp tin
   - Tìm kiếm và dọn dẹp thư mục Downloads định kỳ
   - Đọc và trích xuất dữ liệu từ tệp tài liệu
   
2. Lập lịch công việc
   - Tạo lịch họp và nhắc nhở nhiệm vụ quan trọng
   - Đồng bộ lịch trình hàng ngày
   
3. Quản lý cơ sở tri thức
   - Lưu trữ bài viết hữu ích từ web
   - Tổng hợp ghi chú dự án
```

#### MEMORY.md - Bộ nhớ dài hạn
```markdown
## Ghi nhớ thói quen người dùng
- Thường xuyên làm việc vào khung giờ đêm
- Ưu tiên định dạng dữ liệu trả về bằng bảng Markdown

## Thao tác định kỳ
- Tổng hợp báo cáo công việc vào sáng thứ Hai hàng tuần
- Sao lưu tự động thư mục quan trọng mỗi tối
```

#### HEARTBEAT.md - Danh sách kiểm tra định kỳ
```markdown
## Kiểm tra hàng ngày
- [ ] Rà soát danh sách công việc tồn đọng (Todo List)
- [ ] Dọn dẹp các tệp tin tạm không sử dụng
- [ ] Đảm bảo dữ liệu quan trọng đã được sao lưu

## Kiểm tra hàng tuần
- [ ] Phân loại lại tài liệu trong thư mục Downloads
- [ ] Cập nhật ghi chú tri thức mới
- [ ] Tạo bản tóm tắt công việc trong tuần
```

#### IDENTITY.md - Danh xưng và nhận diện
```markdown
## Thông tin nhận diện
- Tên gọi: OpenClaw Assistant (hoặc Tôm Nhỏ)
- Vai trò: Trợ lý AI toàn năng
- Chủ đề: Hiệu suất cao, chuyên nghiệp, đáng tin cậy
```

#### BOOT.md - Khởi tạo khi bật máy
```markdown
## Kiểm tra khi khởi động
1. Kiểm tra trạng thái kết nối mạng và Cổng Gateway
2. Tải cấu hình người dùng
3. Đã sẵn sàng phục vụ!
```

---

## 3.4 Hướng dẫn chọn mô hình AI

> 💡 **Khuyến nghị nhanh**: Người mới bắt đầu nên dùng **Claude 3.5 Sonnet / Haiku** hoặc **DeepSeek (V3 / R1)**, vừa cân bằng giữa chi phí cực rẻ và năng lực xử lý vượt trội. Chi tiết so sánh chuyên sâu xem tại [Chương 11: Cấu hình nâng cao](../03-advanced/11-advanced-configuration.md).

### Tổng quan các nhà cung cấp mô hình

OpenClaw hỗ trợ hàng chục nhà cung cấp mô hình AI, từ các mô hình đỉnh cao quốc tế đến các mô hình nội địa giá rẻ và mô hình chạy cục bộ hoàn toàn miễn phí.

Ưu thế lớn nhất của OpenClaw là **sự tự do mô hình**: Bạn không bao giờ bị phụ thuộc vào một nhà cung cấp duy nhất. Thông qua tệp `~/.openclaw/openclaw.json`, bạn có thể dễ dàng chuyển đổi mô hình chính, thiết lập chuỗi dự phòng (Fallback) khi gặp lỗi quá tải, hoặc chỉ định các mô hình khác nhau cho từng loại tác vụ.

#### Bảng tổng hợp các nhà cung cấp mô hình tiêu biểu

| Nhà cung cấp | Mô hình đại diện | Giá vào / 1M tokens | Giá ra / 1M tokens | Phương thức kết nối | Ngữ cảnh khuyến nghị |
| ------------- | ------------------- | --------------- | --------------- | ----------- | -------------------- |
| **Anthropic** | Claude Sonnet 3.5 / 4.6 | $3.00 | $15.00 | Tích hợp sẵn (Built-in) | Tác vụ AI Agent tối ưu nhất |
| **OpenAI** | GPT-4o / GPT-5 | $2.50 | $10.00 | Tích hợp sẵn (Built-in) | Đa năng, tổng quát xuất sắc |
| **Google** | Gemini 2.0 / 3 Pro | $1.25 | $5.00 | Tích hợp sẵn (Built-in) | Đa phương thức, ngữ cảnh cực dài |
| **DeepSeek** | DeepSeek-V3 / R1 | $0.14 | $0.28 | Tùy biến (openai-chat) | Giá siêu rẻ, lập trình cực tốt |
| **Zhipu GLM** | GLM-4 / GLM-5 | $0.80 | $2.56 | Tích hợp sẵn | Thế mạnh xử lý ngôn ngữ Châu Á |
| **Qwen (Alibaba)**| Qwen 2.5 / Max | $1.20 | $6.00 | Tích hợp / OAuth | Lập trình, xử lý ngôn ngữ tự nhiên |
| **Moonshot Kimi** | Kimi K2.5 | $0.60 | $3.00 | Tùy biến (openai-chat) | Ngữ cảnh siêu dài 2 triệu từ |
| **MiniMax** | MiniMax M2.5 | $0.50 | $2.00 | Tùy biến (openai-chat) | Điểm chuẩn SWE-bench cao, giá tốt |
| **Ollama** | Qwen2.5-Coder / Llama 3 | Miễn phí | Miễn phí | Tự động nhận diện | Bảo mật tuyệt đối, chạy offline |

#### Ba khái niệm cốt lõi khi cấu hình mô hình

1. **Provider tích hợp sẵn (Built-in Provider)**: Anthropic, OpenAI, Google, v.v. được OpenClaw hỗ trợ trực tiếp, chỉ cần khai báo API Key là dùng được.
2. **Provider tùy biến (Custom Provider)**: DeepSeek, Kimi, v.v. sử dụng chuẩn tương thích OpenAI (`openai-chat`), khai báo trong mục `models.providers`.
3. **Cơ chế Fallback (Dự phòng tự động)**: Khi mô hình chính gặp lỗi hoặc hết hạn mức, hệ thống tự động nhảy sang mô hình phụ.

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat",
        "fallbacks": ["anthropic/claude-3-5-haiku"]
      }
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com",
        "apiKey": "sk-xxx",
        "auth": "api-key",
        "api": "openai-chat"
      }
    }
  }
}
```

> 💡 **Lưu ý quan trọng**: Thiết lập `"mode": "merge"` giúp bạn giữ lại toàn bộ các provider tích hợp sẵn của OpenClaw trong khi vẫn bổ sung thêm cấu hình tùy biến của riêng mình.

---

### 3.4.1 Cấu hình nhanh mô hình qua CLI (Khuyến nghị cho người mới)

> 🎯 **Cách thuận tiện nhất**: Sử dụng lệnh `openclaw onboard` để khởi chạy trình hướng dẫn cấu hình tương tác từng bước.

#### Khởi chạy trình hướng dẫn

```bash
openclaw onboard
```

Sau khi thực thi, giao diện tương tác dòng lệnh sẽ xuất hiện.

#### Các bước cấu hình

**Bước 1: Chọn chế độ khởi tạo**

```txt
◇  初始化模式
│  快速开始
```

Chọn chế độ "快速开始" (Khởi động nhanh - QuickStart).

**Bước 2: Xử lý cấu hình hiện có**

Nếu hệ thống phát hiện đã có cấu hình từ trước, màn hình sẽ hiển thị:

```txt
◇  检测到现有配置 ────────────────────────────╮
│                                             │
│  workspace: ~/clawd                         │
│  model: local-antigravity/gemini-3-pro-low  │
│  gateway.mode: local                        │
│  gateway.port: 18789                        │
│  gateway.bind: lan                          │
│  skills.nodeManager: npm                    │
│                                             │
├─────────────────────────────────────────────╯
◇  配置处理方式
│  使用现有值
```

Chọn "使用现有值" (Giữ cấu hình hiện tại) hoặc chọn thiết lập lại từ đầu nếu muốn.

**Bước 3: Chọn nhà cung cấp mô hình / xác thực**

```txt
◆  模型/认证提供商
│  ○ OpenAI (Codex OAuth + API key)
│  ○ Anthropic
│  ○ MiniMax
│  ○ Moonshot AI
│  ○ Google
│  ○ OpenRouter
│  ○ Qwen
│  ○ Z.AI (GLM 4.7)
│  ○ Copilot
│  ○ Vercel AI Gateway
│  ○ OpenCode Zen
│  ○ Xiaomi
│  ○ Synthetic
│  ○ Venice AI
│  ○ Skip for now
```

Sử dụng các **phím mũi tên** để di chuyển và bấm **phím cách (Space)** để chọn.

**Các nhà cung cấp tiêu biểu cho người mới:**

1. **Anthropic** (Claude, chất lượng tốt nhất):
   - Mức giá: Trung bình ($3/triệu tokens)
   - Năng lực: Khả năng suy luận và thực thi tác vụ logic hàng đầu
   - Phù hợp: Tác vụ phức tạp, công việc chuyên môn cao
2. **Google** (Gemini, hạn mức dùng thử miễn phí lớn):
   - Mức giá: Rất cạnh tranh, nhiều hạn mức miễn phí
   - Năng lực: Đa phương thức (nhận diện hình ảnh cực tốt)
   - Phù hợp: Đọc tài liệu kèm ảnh, ngữ cảnh dài
3. **Moonshot AI** (Kimi, ngữ cảnh siêu dài):
   - Mức giá: Thấp ($0.01/triệu tokens)
   - Năng lực: Xử lý ngữ cảnh lên tới 2 triệu từ
   - Phù hợp: Phân tích tài liệu dài, sách, báo cáo lớn

**Bước 4: Nhập API Key**

Sau khi chọn nhà cung cấp, màn hình sẽ nhắc nhập API Key:

```txt
◆  请输入 Anthropic API Key
│  sk-ant-...
```

**Cách đăng ký và lấy API Key:**

- **Anthropic (Claude)**: Truy cập [Anthropic Console](https://console.anthropic.com/)
- **Google (Gemini)**: Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Moonshot (Kimi)**: Truy cập [Moonshot Platform](https://platform.moonshot.cn/)
- **OpenAI**: Truy cập [OpenAI Platform](https://platform.openai.com/api-keys)

**Bước 5: Chọn mô hình mặc định**

Sau khi nhập khóa xác thực, chọn mô hình mặc định sẽ sử dụng:

```txt
◆  选择默认模型
│  ○ claude-3-5-sonnet-20241022
│  ○ claude-3-opus-20240229
│  ● claude-3-haiku-20240307
```

**Khuyến nghị:**
- **Sử dụng thường ngày**: Claude 3 Haiku / DeepSeek Chat (phản hồi nhanh, chi phí siêu rẻ)
- **Nhiệm vụ quan trọng**: Claude 3.5 Sonnet (chất lượng cao)
- **Nhận diện hình ảnh**: Gemini 2.0 Flash / Pro (đa phương thức vượt trội)

**Bước 6: Hoàn tất cấu hình**

```txt
✔  配置已保存
✔  Gateway 已重启
✔  模型配置成功
```

#### Xác minh cấu hình

Sau khi thiết lập, kiểm tra mô hình đã sẵn sàng hoạt động hay chưa:

```bash
# Xem danh sách mô hình đã cấu hình
openclaw models list

# Gửi tin nhắn thử nghiệm
openclaw message send "Xin chào, kiểm tra kết nối"
```

#### Thay đổi cấu hình

Khi cần thay đổi nhà cung cấp hoặc bổ sung thêm mô hình, bạn chỉ cần chạy lại:

```bash
openclaw onboard
```
Bạn có thể tự do thêm, xóa hoặc tinh chỉnh các nhà cung cấp mô hình.

#### Mẹo hữu ích khi cấu hình

**Mẹo 1: Cấu hình cùng lúc nhiều nhà cung cấp**
Có thể chạy `openclaw onboard` nhiều lần để liên tiếp thêm các nhà cung cấp khác nhau vào hệ thống.

**Mẹo 2: Tạm bỏ qua khi chưa có API Key**
Nếu chưa có sẵn khóa API, bạn có thể chọn "Skip for now" và quay lại cấu hình sau.

**Mẹo 3: Xem và chỉnh sửa trực tiếp tệp cấu hình**
Toàn bộ thông tin được lưu trữ tại:
```bash
~/.openclaw/openclaw.json
```
Bạn hoàn toàn có thể mở tệp này để tinh chỉnh thủ công nâng cao.

---

### 3.4.2 Chuyển đổi mô hình nhanh bằng dòng lệnh

```bash
# Chuyển sang dùng DeepSeek Chat
openclaw config set agents.defaults.model.primary "deepseek/deepseek-chat"

# Chuyển sang dùng Claude Haiku
openclaw config set agents.defaults.model.primary "anthropic/claude-3-5-haiku"

# Khởi động lại Gateway để áp dụng
openclaw gateway restart
```

---

## 3.5 Cấu hình Cổng kết nối Gateway (Nâng cao)

> 💡 **Khi nào bạn cần can thiệp cấu hình Gateway?**
> - Khi muốn giới hạn danh sách người dùng được phép tương tác với Bot
> - Khi muốn quy định từ khóa @mention trong nhóm chat
> - Khi muốn thiết lập truy cập từ xa qua mạng nội bộ hoặc VPN

Tệp cấu hình Gateway nằm tại: `~/.openclaw/openclaw.json`

### Kiểm soát quyền truy cập và nhóm chat

#### Giới hạn số điện thoại / ID người dùng (Ví dụ WhatsApp):

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+84901234567", "+84912345678"],
      "groups": {
        "*": {
          "requireMention": true
        }
      }
    }
  }
}
```

#### Cấu hình mẫu từ khóa nhắc tên (@mention):

```json
{
  "messages": {
    "groupChat": {
      "mentionPatterns": ["@openclaw", "@troly", "@bot"]
    }
  }
}
```

### Truy cập từ xa an toàn qua Tailscale

Nếu máy tính của bạn ở nhà và bạn muốn nhắn tin về OpenClaw khi đang ở ngoài:

1. **Cài đặt Tailscale**:
   ```bash
   # macOS
   brew install tailscale

   # Linux
   curl -fsSL https://tailscale.com/install.sh | sh
   ```
2. **Khởi chạy Tailscale**:
   ```bash
   sudo tailscale up
   ```
3. **Lấy địa chỉ IP Tailscale của máy**:
   ```bash
   tailscale ip -4
   ```
4. **Truy cập từ xa qua IP Tailscale**:
   ```txt
   http://IP_TAILSCALE_CỦA_BẠN:18789/
   ```

**Lợi ích của Tailscale**:
- ✅ Kết nối mã hóa ngang hàng (P2P) tuyệt đối an toàn
- ✅ Không cần địa chỉ IP tĩnh công cộng
- ✅ Không cần mở cổng (Port Forwarding) trên Router gia đình

---

## Tổng kết chương

Qua chương này, bạn đã:

✅ Hoàn thành cuộc trò chuyện đầu tiên với OpenClaw  
✅ Nắm vững cách ra lệnh bằng ngôn ngữ tự nhiên để xử lý tệp, lịch trình, hệ thống  
✅ Biết cách thiết lập nhân vật (Persona) với `SOUL.md` và `USER.md`  
✅ Nắm rõ cách lựa chọn và chuyển đổi linh hoạt giữa các mô hình AI tối ưu chi phí  

**Những điểm mấu chốt**:
- Đặt câu hỏi cụ thể, rõ mục tiêu
- Tận dụng `SOUL.md` để tạo trợ lý AI mang phong cách riêng
- Lựa chọn mô hình AI phù hợp theo bài toán để tối ưu chi phí

## Bài tập thực hành

### Bài tập 1: Thiết lập trợ lý AI đầu tiên của bạn
1. Đặt một cái tên riêng cho AI
2. Thiết lập tính cách và cách xưng hô trong `SOUL.md` và `USER.md`
3. Cấu hình mô hình AI bạn yêu thích
4. Gửi 10 câu lệnh thử nghiệm để đánh giá phản xạ của AI

### Bài tập 2: Trải nghiệm các nhóm lệnh thực tế
1. Yêu cầu AI tìm kiếm một tệp tin trên máy tính
2. Lập một sự kiện nhắc việc vào lịch
3. Yêu cầu chụp ảnh màn hình hiện tại

---

**Chương tiếp theo**: [Chương 4: Quản lý tệp cục bộ](../02-core-features/04-file-management.md) - Biến OpenClaw thành trợ thủ đắc lực quản lý tệp tin và dữ liệu số của bạn

**Trở về mục lục**: [README](../../README.md)

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc chương này trên nền tảng web?**

[🔗 Đọc trực tuyến: Chương 3 - Bắt đầu nhanh](https://awesome.tryopenclaw.asia/docs/01-basics/03-quick-start/)

Truy cập website để có trải nghiệm đọc tối ưu:
- 📱 Giao diện tương thích cho điện thoại, máy tính bảng và máy tính
- 🌙 Chế độ nền tối (Dark mode) dịu mắt
- 🔍 Tìm kiếm nội dung nhanh chóng
- 📋 Thanh điều hướng trực quan, dễ dàng chuyển đổi các chương

[🏠 Truy cập website giáo trình đầy đủ](https://awesome.tryopenclaw.asia)
