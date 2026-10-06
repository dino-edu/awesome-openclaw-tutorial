> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 6: Quản lý Lịch trình & Tác vụ

> 💡 **Mục tiêu của chương**: Nắm vững kỹ năng sử dụng OpenClaw để quản lý lịch trình và tác vụ hàng ngày: tự động tạo sự kiện lịch, nhận diện ảnh chụp màn hình WeChat / ứng dụng nhắn tin, nhập lịch hàng loạt từ bảng tính và thiết lập lời nhắc việc thông minh.

## 📅 Nội dung chương

- 6.1 Tự động tạo sự kiện lịch
- 6.2 Nhận diện ảnh chụp màn hình ứng dụng chat
- 6.3 Nhập lịch biểu hàng loạt
- 6.4 Mẹo và chiến lược thiết lập lời nhắc

---

## 6.1 Tự động tạo sự kiện lịch

### 6.1.1 Tại sao bạn cần tự động tạo lịch?

Trong công việc hàng ngày, chúng ta thường xuyên đối mặt với các tình huống:
- 📱 Hẹn giờ họp hoặc gặp mặt qua tin nhắn WeChat / Zalo / Slack
- 📧 Nhận email mời tham gia sự kiện hoặc hội thảo
- 💬 Thảo luận deadline dự án trong các nhóm chat công việc
- 📝 Các mốc thời gian quan trọng ghi chú rải rác trong văn bản

Cách làm thủ công thông thường:
1. Cố gắng ghi nhớ thời gian và địa điểm
2. Mở ứng dụng Lịch (Calendar)
3. Nhập tiêu đề, ngày giờ, địa điểm thủ công
4. Cài đặt các mốc thời gian nhắc nhở

**Vấn đề phát sinh**:
- ❌ Rất dễ quên tạo lịch khi đang bận rộn
- ❌ Thao tác lặp đi lặp lại phiền toái
- ❌ Dễ nhập nhầm chi tiết quan trọng
- ❌ Năng suất làm việc bị giảm sút

OpenClaw có thể tự động nhận diện thông tin và tạo sự kiện lịch chính xác chỉ trong chớp mắt!

### 6.1.2 Nguyên lý hoạt động cốt lõi

Tính năng quản lý lịch biểu của OpenClaw dựa trên tích hợp hệ thống Lịch của macOS / Apple Calendar:

`Văn bản / Ảnh chụp → OpenClaw nhận diện → Trích xuất thông tin → Tạo sự kiện Lịch → Đồng bộ sang iPhone`

**Các năng lực nổi bật**:
1. **Nhận diện thông minh**: Tự động bóc tách thời gian, địa điểm, người tham gia và ghi chú.
2. **Tạo lịch tức thì**: Khởi tạo sự kiện trên ứng dụng Lịch chỉ bằng một câu lệnh ngôn ngữ tự nhiên.
3. **Đồng bộ đa thiết bị**: Lịch trên máy tính Mac sẽ tự động đồng bộ tức thời với iPhone / iPad qua iCloud.
4. **Nhắc nhở thông minh**: Tự động tính toán các mốc nhắc nhở hợp lý trước khi sự kiện diễn ra.

### 6.1.3 Ca thực chiến 1: Tạo lịch từ tin nhắn văn bản

**Tình huống**: Bạn vừa hẹn đối tác một cuộc họp qua tin nhắn.

**Nội dung tin nhắn**:
> Anh Nam: Chiều mai 3 giờ, tại phòng họp A bàn về phương án dự án nhé, nhớ mang theo laptop.

**Thao tác với OpenClaw**:

Bạn: Giúp tôi tạo một sự kiện lịch: Chiều mai 3 giờ, tại phòng họp A bàn về phương án dự án.

OpenClaw: Vâng, tôi sẽ tạo sự kiện lịch giúp bạn ngay bây giờ.

[Đang phân tích...]

OpenClaw: Đã tạo sự kiện lịch thành công!

📅 **Chi tiết sự kiện**:
- Tiêu đề: Thảo luận phương án dự án
- Thời gian: 15:00 - 16:00, ngày 11/02/2026
- Địa điểm: Phòng họp A
- Người tham gia: Anh Nam
- Ghi chú: Nhớ mang theo laptop

**Cài đặt nhắc nhở**:
- Nhắc trước 15 phút
- Nhắc trước 1 giờ

**Đã đồng bộ đến**:
- Lịch Mac ✅
- Lịch iPhone ✅

![Minh họa tạo sự kiện lịch tự động](https://upload.maynor1024.live/file/1770909307160_image-20260212231420791.png)

**Kiểm tra kết quả**:

Mở ứng dụng Lịch trên máy Mac, bạn sẽ thấy sự kiện xuất hiện rõ ràng:

![Giao diện Lịch Mac hiển thị sự kiện](https://upload.maynor1024.live/file/1770176284226_image_21.jpg)

```text
Thứ Ba, ngày 11 tháng 2 năm 2026

15:00 - 16:00  Thảo luận phương án dự án
               📍 Phòng họp A
               👤 Anh Nam
               📝 Nhớ mang theo laptop
               
               🔔 Nhắc trước 15 phút
               🔔 Nhắc trước 1 giờ
```

Mở Lịch trên iPhone, sự kiện cũng được đồng bộ chính xác tương tự.

### 6.1.4 Ca thực chiến 2: Tạo lịch biểu phức tạp từ email

**Tình huống**: Bạn nhận được một email mời họp với nội dung nhiều mục chi tiết.

**Nội dung email**:
```text
Chủ đề: Cuộc họp Lập kế hoạch Sản phẩm Q1/2026

Thời gian: 14:00 - 17:00, Thứ Sáu ngày 15/02/2026
Địa điểm: Phòng họp tầng 3, Tòa nhà Trụ sở
Thành phần tham dự: Toàn bộ thành viên đội ngũ Sản phẩm

Chương trình họp:
1. Đánh giá kết quả Q1 (30 phút)
2. Kế hoạch sản phẩm Q2 (60 phút)
3. Thảo luận phân bổ nguồn lực (60 phút)
4. Tổng kết và giao việc cụ thể (30 phút)

Yêu cầu chuẩn bị trước:
- Báo cáo số liệu sản phẩm Q1
- Bản dự thảo kế hoạch Q2
- Danh sách đề xuất nhu cầu nguồn lực
```

**Thao tác với OpenClaw**:

Bạn: Hãy tạo sự kiện lịch chi tiết dựa trên nội dung email này giúp tôi:
[Dán nội dung email vào]

OpenClaw: Đang phân tích nội dung email...

[Phân tích hoàn tất]

OpenClaw: Đã tạo sự kiện lịch chi tiết thành công!

📅 **Chi tiết sự kiện**:
- Tiêu đề: Cuộc họp Lập kế hoạch Sản phẩm Q1/2026
- Thời gian: 14:00 - 17:00, ngày 15/02/2026 (Thời lượng: 3 giờ)
- Địa điểm: Phòng họp tầng 3, Tòa nhà Trụ sở
- Thành phần: Toàn bộ thành viên đội ngũ Sản phẩm

**Chương trình họp**:
1. 14:00 - 14:30: Đánh giá kết quả Q1
2. 14:30 - 15:30: Kế hoạch sản phẩm Q2
3. 15:30 - 16:30: Thảo luận phân bổ nguồn lực
4. 16:30 - 17:00: Tổng kết và giao việc cụ thể

**Hạng mục cần chuẩn bị**:
- ✓ Báo cáo số liệu sản phẩm Q1
- ✓ Bản dự thảo kế hoạch Q2
- ✓ Danh sách đề xuất nhu cầu nguồn lực

**Cài đặt lời nhắc**:
- Nhắc trước 1 ngày (Chuẩn bị tài liệu báo cáo)
- Nhắc trước 2 giờ (Kiểm tra lại công tác chuẩn bị)
- Nhắc trước 30 phút (Di chuyển đến phòng họp)

Đã đồng bộ sang Lịch Mac và iPhone ✅

### 6.1.5 Ca thực chiến 3: Thiết lập sự kiện lặp lại định kỳ

**Tình huống**: Bạn cần tạo lịch họp giao ban hàng tuần cho đội nhóm.

**Thao tác với OpenClaw**:

Bạn: Tạo giúp tôi một sự kiện lịch định kỳ: 10:00 sáng Thứ Hai hàng tuần, họp giao ban tuần của nhóm, thời lượng 1 giờ, tại phòng họp B.

OpenClaw: Đã tạo sự kiện lịch định kỳ thành công!

📅 **Chi tiết sự kiện**:
- Tiêu đề: Họp giao ban tuần của nhóm
- Thời gian: 10:00 - 11:00, Thứ Hai hàng tuần
- Địa điểm: Phòng họp B
- Chu kỳ lặp lại: Hàng tuần
- Kết thúc: Vô thời hạn (hoặc cho đến khi bạn yêu cầu dừng)

**Cài đặt nhắc nhở**:
- Nhắc trước 15 phút

Đã khởi tạo chuỗi sự kiện cho 12 tuần tiếp theo:
- 10:00 Thứ Hai, ngày 10/02/2026
- 10:00 Thứ Hai, ngày 17/02/2026
- 10:00 Thứ Hai, ngày 24/02/2026
- ... (Tổng cộng 12 buổi)

Đã đồng bộ sang Lịch Mac và iPhone ✅

### 6.1.6 Mẫu sự kiện lịch và thực hành chuẩn mực

**Các mẫu lịch biểu thường dùng**:

**Mẫu 1: Cuộc họp**
```text
Tiêu đề: [Chủ đề cuộc họp]
Thời gian: [Ngày] [Giờ bắt đầu] - [Giờ kết thúc]
Địa điểm: [Phòng họp / Link họp trực tuyến]
Thành phần tham gia: [Danh sách người dự]
Chương trình: [Nội dung thảo luận]
Chuẩn bị: [Tài liệu cần mang theo]
Lời nhắc: Trước 1 ngày, trước 1 giờ, trước 15 phút
```

**Mẫu 2: Hạn chót dự án (Deadline)**
```text
Tiêu đề: [Tên dự án] - Hạn chót nộp sản phẩm
Thời gian: [Hạn chót] Cả ngày
Mức độ ưu tiên: Cao
Lời nhắc: Trước 1 tuần, trước 3 ngày, trước 1 ngày, sáng ngày đến hạn
Ghi chú: [Danh sách các kết quả bàn giao cần nộp]
```

**Mẫu 3: Lịch cá nhân**
```text
Tiêu đề: [Nội dung công việc]
Thời gian: [Ngày] [Giờ]
Địa điểm: [Địa điểm]
Lời nhắc: Trước 30 phút
Ghi chú: [Thông tin ghi nhớ bổ sung]
```

**Thực hành chuẩn mực tốt nhất**:

1. **Quy tắc đặt tên nhất quán**:
   - Cuộc họp: `[Họp] Thảo luận dự án`
   - Nhiệm vụ: `[Task] Hoàn thành báo cáo`
   - Hoạt động: `[Sự kiện] Teambuilding công ty`
   - Học tập: `[Học tập] Buổi chia sẻ kỹ thuật`

2. **Cài đặt lời nhắc hợp lý**:
   - Họp quan trọng: Nhắc trước 1 ngày, 1 giờ, 15 phút
   - Họp thường kỳ: Nhắc trước 1 giờ, 15 phút
   - Hạn chót (Deadline): Nhắc trước 1 tuần, 3 ngày, 1 ngày
   - Việc cá nhân: Nhắc trước 30 phút

3. **Cung cấp đầy đủ thông tin chi tiết**:
   - Link họp trực tuyến (Zoom / Google Meet / Lark)
   - Vị trí phòng họp cụ thể
   - Thông tin liên hệ của các bên tham gia
   - Checklist những thứ cần chuẩn bị

4. **Phân loại bằng nhãn màu trực quan**:
   - 🔴 Đỏ: Khẩn cấp và quan trọng
   - 🟠 Cam: Quan trọng nhưng không khẩn cấp
   - 🟡 Vàng: Khẩn cấp nhưng ít quan trọng
   - 🟢 Xanh lá: Việc cá nhân
   - 🔵 Xanh dương: Học tập và phát triển bản thân

---

## 6.2 Nhận diện ảnh chụp màn hình ứng dụng chat

### 6.2.1 Tại sao cần nhận diện từ ảnh chụp màn hình?

**Bối cảnh thực tế**:

Bạn thường xuyên nhận được những tin nhắn hẹn việc trong các nhóm chat như hình bên dưới:

![Tin nhắn nhắc lịch hẹn trong ứng dụng chat](https://upload.maynor1024.live/file/1771085154272_1b87855aba3ddbd3b354c0c25b88cc18.jpg)

> Hoàng Nam: Chiều mai 2 giờ gặp nhau ở Highlands Coffee (Chi nhánh Bà Triệu) bàn về dự án mới nhé, nhớ mang bản kế hoạch của bạn đi, mình mời cà phê 😊

**Cách làm thủ công thông thường**:
1. Đọc tin nhắn
2. Ghi nhớ ngày giờ, địa điểm trong đầu
3. Thoát ứng dụng chat, mở ứng dụng Lịch
4. Gõ từng dòng thông tin
5. Đặt lời nhắc

**Hạn chế**:
- ❌ Trải qua quá nhiều bước thủ công rườm rà
- ❌ Rất dễ quên hoặc nhớ nhầm giờ
- ❌ Tốn thời gian thao tác

**Cách làm với OpenClaw**:
1. Chụp ảnh màn hình tin nhắn và gửi cho OpenClaw
2. Hoàn thành! Mọi thứ được tự động đưa vào lịch biểu.

### 6.2.2 Quy trình nhận diện cốt lõi

Luồng xử lý ảnh chụp màn hình của OpenClaw:

`Ảnh chụp màn hình chat → OCR nhận diện ký tự → NLP bóc tách thông tin → Tạo sự kiện Lịch chuẩn xác`

**Các công nghệ then chốt**:
1. **OCR bóc tách chữ**: Đọc toàn bộ văn bản trong bức ảnh.
2. **Phân tích thời gian tự nhiên**: Hiểu các cụm từ như "chiều mai 2 giờ", "thứ Tư tuần sau lúc 9 rưỡi".
3. **Trích xuất địa điểm**: Nhận diện các địa danh cụ thể như "Highlands Coffee (Chi nhánh Bà Triệu)".
4. **Nhận diện nhân sự**: Nhận biết người gửi hoặc đối tác nhắc đến trong hội thoại.
5. **Bóc tách nội dung chính**: Xác định hành động cốt lõi như "bàn về dự án mới".

### 6.2.3 Ca thực chiến 1: Cuộc hẹn ăn trưa / cà phê đơn giản

**Nội dung ảnh chụp chat**:
> Minh Trí: Tối mốt 7 giờ đi ăn chỗ cũ không bạn?  
> Bạn: Ok chốt nhé!

**Thao tác với OpenClaw**:

Bạn: [Gửi ảnh chụp màn hình] Tạo lịch hẹn từ ảnh này giúp tôi.

OpenClaw: Đang quét nội dung bức ảnh...

[Hoàn tất nhận diện OCR]

OpenClaw: Đã bóc tách được thông tin cuộc hẹn!

📅 **Chi tiết sự kiện**:
- Tiêu đề: Đi ăn tối với Minh Trí
- Thời gian: 19:00 - 20:30, ngày 12/02/2026
- Địa điểm: Chỗ cũ (Cần bạn xác nhận địa chỉ cụ thể)
- Người tham gia: Minh Trí

**Cài đặt nhắc nhở**:
- Nhắc trước 2 giờ

Đã tạo sự kiện lịch thành công ✅

💡 *Gợi ý: Nếu "chỗ cũ" có địa chỉ cụ thể, bạn chỉ cần nói cho tôi biết, tôi sẽ cập nhật ngay vào sự kiện lịch.*

**Bổ sung địa chỉ**:
Bạn: Chỗ cũ là "Quán Lẩu Haidilao - Vincom Bà Triệu".

OpenClaw: Đã cập nhật địa điểm vào lịch!
📍 Địa điểm: Lẩu Haidilao - Vincom Bà Triệu, Hai Bà Trưng, Hà Nội.
Đã đồng bộ lại vào Lịch ✅

### 6.2.4 Ca thực chiến 2: Cuộc họp nhóm phức tạp

**Ảnh chụp tin nhắn thông báo trong nhóm dự án**:
> Quản lý dự án: @Tất cả thành viên  
> Sáng Thứ Tư tuần sau lúc 9:30, tại phòng họp lớn tầng 5 công ty sẽ diễn ra buổi Kick-off dự án mới.  
> Đề nghị các bạn tham gia đầy đủ, cuộc họp dự kiến kéo dài 2 giờ.  
> Cần chuẩn bị trước:  
> 1. Tài liệu yêu cầu dự án (PRD)  
> 2. Đề xuất phương án kỹ thuật  
> 3. Lộ trình tiến độ chi tiết (Timeline)  
> Sau cuộc họp công ty sẽ mời cơm trưa toàn đội ngũ.

**Thao tác với OpenClaw**:

Bạn: [Gửi ảnh chụp màn hình nhóm chat] Tạo sự kiện lịch giúp tôi.

OpenClaw: Đang phân tích thông báo từ ảnh chụp...

[Nhận diện hoàn tất]

OpenClaw: Đã trích xuất thông tin cuộc họp!

📅 **Chi tiết sự kiện**:
- Tiêu đề: Cuộc họp Kick-off dự án mới
- Thời gian: 09:30 - 11:30, ngày 19/02/2026 (Thời lượng: 2 giờ)
- Địa điểm: Phòng họp lớn tầng 5 công ty
- Thành phần: Toàn bộ thành viên đội ngũ dự án

**Hạng mục cần chuẩn bị**:
- ✓ Tài liệu yêu cầu dự án (PRD)
- ✓ Đề xuất phương án kỹ thuật
- ✓ Lộ trình tiến độ chi tiết

**Ghi chú**:
- Sau cuộc họp có cơm trưa công ty
- Yêu cầu tham gia đầy đủ

**Cài đặt lời nhắc**:
- Nhắc trước 1 ngày (Chuẩn bị tài liệu)
- Nhắc trước 1 giờ
- Nhắc trước 15 phút

Đã tạo sự kiện lịch thành công ✅  
💡 *Mẹo: Tôi đã tự động đánh dấu thêm khoảng thời gian trống 11:30 - 13:00 cho bữa cơm trưa cùng nhóm.*

### 6.2.5 Ca thực chiến 3: Nhận diện và tạo hàng loạt lịch hẹn cùng lúc

**Nội dung ảnh chụp thông báo tuần**:
> Kế hoạch làm việc tuần này:  
> Thứ Hai 10:00 - Họp giao ban nhóm (Phòng họp A)  
> Thứ Tư 14:00 - Đi gặp đối tác (Văn phòng đối tác)  
> Thứ Sáu 16:00 - Đánh giá tổng kết dự án (Họp trực tuyến)

**Thao tác với OpenClaw**:

Bạn: [Gửi ảnh chụp] Tạo toàn bộ các lịch hẹn này vào lịch giúp tôi.

OpenClaw: Đang nhận diện danh sách các sự kiện...

[Nhận diện hoàn tất]

OpenClaw: Đã bóc tách được 3 sự kiện riêng biệt!

📅 **Sự kiện 1**: Họp giao ban nhóm
- Thời gian: 10:00 - 11:00, ngày 10/02/2026
- Địa điểm: Phòng họp A
- Trạng thái: ✅ Đã tạo

📅 **Sự kiện 2**: Đi gặp đối tác
- Thời gian: 14:00 - 15:30, ngày 12/02/2026
- Địa điểm: Văn phòng đối tác (Cần địa chỉ cụ thể)
- Trạng thái: ✅ Đã tạo

📅 **Sự kiện 3**: Đánh giá tổng kết dự án
- Thời gian: 16:00 - 17:00, ngày 14/02/2026
- Địa điểm: Họp trực tuyến (Cần bổ sung đường link họp)
- Trạng thái: ✅ Đã tạo

Toàn bộ sự kiện đã được đồng bộ vào Lịch ✅

### 6.2.6 Tối ưu hóa độ chính xác nhận diện hình ảnh

Để đạt độ chính xác cao nhất khi gửi ảnh cho OpenClaw:

- **Mẹo 1: Ảnh chụp rõ ràng**: Ảnh chụp cần có độ phân giải đủ lớn, phông chữ tin nhắn rõ nét, không bị nhòe hay bị cắt góc mất thông tin quan trọng.
- **Mẹo 2: Tin nhắn có cấu trúc**: Tin nhắn có định dạng rõ ràng (Thời gian, Địa điểm, Nội dung) sẽ giúp AI bóc tách nhanh và chuẩn xác hơn nhiều so với những câu nói bâng quơ.
- **Mẹo 3: Gửi kèm câu lệnh định hướng ngắn**: Khi gửi ảnh, chỉ cần gõ thêm một câu ngắn gọn như: *"Đây là lịch họp chiều mai ở công ty, hãy tạo lịch giúp tôi"* — AI sẽ kết hợp câu lệnh này để loại trừ các thông tin gây nhiễu trong ảnh.
- **Mẹo 4: Xác nhận và điều chỉnh**: OpenClaw luôn tóm tắt lại các trường dữ liệu trước hoặc ngay sau khi tạo, bạn hoàn toàn có thể yêu cầu sửa lại ngay nếu có thông tin chưa đúng ý.

---

## 6.3 Nhập lịch biểu hàng loạt

### 6.3.1 Tại sao cần tính năng nhập hàng loạt?

**Các kịch bản thực tế điển hình**:

1. **Thời khóa biểu học tập mới**:
   - Từ 10 - 20 môn học khác nhau
   - Lặp lại theo từng tuần trong suốt học kỳ
   - Diễn ra ở nhiều phòng học khác nhau

2. **Các mốc tiến độ dự án (Milestones)**:
   - Rất nhiều mốc bàn giao then chốt
   - Nhiều nhân sự phụ trách riêng lẻ
   - Hàng loạt deadline liên hoàn

3. **Lịch làm việc của đoàn công tác hoặc hội nghị**:
   - Hàng chục phiên họp, hội thảo nối tiếp nhau
   - Phân bố theo nhiều khung giờ và địa điểm

Tự gõ tay từng sự kiện sẽ mất từ 1 - 2 giờ và cực kỳ dễ gõ nhầm. Với OpenClaw, bạn chỉ cần một tệp Excel hoặc CSV là có thể nhập toàn bộ lịch trình chỉ trong vòng 1 phút!

### 6.3.2 Nhập lịch từ bảng tính Excel

**Bước 1: Chuẩn bị tệp Excel (`Thoi_khoa_bieu.xlsx`)**:

| Tiêu đề | Ngày bắt đầu | Giờ bắt đầu | Giờ kết thúc | Địa điểm | Ghi chú | Chu kỳ lặp |
|---|---|---|---|---|---|---|
| Toán cao cấp | 2026-02-10 | 08:00 | 09:40 | Giảng đường A101 | Thầy Vương | Thứ Hai hàng tuần |
| Tiếng Anh chuyên ngành | 2026-02-10 | 10:00 | 11:40 | Giảng đường B203 | Cô Lan | Thứ Hai hàng tuần |
| Nhập môn Trí tuệ nhân tạo | 2026-02-11 | 14:00 | 15:40 | Phòng thực hành C301 | Thầy Tuấn | Thứ Ba hàng tuần |
| Giáo dục thể chất | 2026-02-12 | 08:00 | 09:40 | Nhà thi đấu | Thầy Hùng | Thứ Tư hàng tuần |

**Bước 2: Yêu cầu OpenClaw nhập dữ liệu**:

Bạn: Giúp tôi nhập thời khóa biểu trong tệp này vào ứng dụng Lịch.  
[Tải tệp `Thoi_khoa_bieu.xlsx` lên]

OpenClaw: Đang đọc nội dung tệp Excel...

[Đọc hoàn tất]

OpenClaw: Đã nhận diện được 4 môn học định kỳ!

Đang tiến hành tạo các sự kiện lịch...

✅ Toán cao cấp (Thứ Hai hàng tuần 08:00 - 09:40)  
✅ Tiếng Anh chuyên ngành (Thứ Hai hàng tuần 10:00 - 11:40)  
✅ Nhập môn Trí tuệ nhân tạo (Thứ Ba hàng tuần 14:00 - 15:40)  
✅ Giáo dục thể chất (Thứ Tư hàng tuần 08:00 - 09:40)  

Đã tạo toàn bộ các buổi học cho học kỳ này (Tổng cộng 16 tuần, gồm 64 sự kiện lịch).

Cài đặt lời nhắc:
- Nhắc trước 15 phút trước mỗi tiết học

Đã đồng bộ sang Lịch Mac và iPhone ✅

### 6.3.3 Xử lý định dạng CSV

**Mẫu tệp CSV (`Tien_do_du_an.csv`)**:

```csv
Tiêu đề,Ngày,Khung giờ,Địa điểm,Người phụ trách,Mức ưu tiên
Đánh giá yêu cầu phần mềm,2026-02-15,14:00-16:00,Phòng họp A,Hoàng Nam,Cao
Duyệt bản thiết kế hệ thống,2026-02-20,10:00-12:00,Phòng họp B,Thu Trang,Cao
Hoàn thành phát triển tính năng,2026-03-01,Cả ngày,Nội bộ,Quang Huy,Cao
Hoàn tất kiểm thử QA,2026-03-10,Cả ngày,Nội bộ,Khánh Linh,Trung bình
Phát hành chính thức lên Production,2026-03-15,09:00-18:00,Phòng vận hành,Hoàng Nam,Cao
```

**Thao tác nhập với OpenClaw**:

Bạn: Nhập danh sách các mốc tiến độ dự án từ tệp CSV này vào lịch giúp tôi.  
[Tải tệp `Tien_do_du_an.csv` lên]

OpenClaw: Đang xử lý tệp CSV...

[Xử lý hoàn tất]

OpenClaw: Đã nhận diện được 5 mốc tiến độ quan trọng!

📅 **Đánh giá yêu cầu phần mềm**
- Thời gian: 14:00 - 16:00, ngày 15/02/2026
- Phụ trách: Hoàng Nam
- Mức độ ưu tiên: Cao
- Trạng thái: ✅ Đã tạo

📅 **Duyệt bản thiết kế hệ thống**
- Thời gian: 10:00 - 12:00, ngày 20/02/2026
- Phụ trách: Thu Trang
- Mức độ ưu tiên: Cao
- Trạng thái: ✅ Đã tạo

📅 **Hoàn thành phát triển tính năng**
- Thời gian: Cả ngày, 01/03/2026
- Phụ trách: Quang Huy
- Mức độ ưu tiên: Cao
- Trạng thái: ✅ Đã tạo

📅 **Hoàn tất kiểm thử QA**
- Thời gian: Cả ngày, 10/03/2026
- Phụ trách: Khánh Linh
- Mức độ ưu tiên: Trung bình
- Trạng thái: ✅ Đã tạo

📅 **Phát hành chính thức lên Production**
- Thời gian: 09:00 - 18:00, ngày 15/03/2026
- Phụ trách: Hoàng Nam
- Mức độ ưu tiên: Cao
- Trạng thái: ✅ Đã tạo

Tất cả các mốc tiến độ đã được đồng bộ vào Lịch với cơ chế nhắc việc:
- Ưu tiên Cao: Nhắc trước 1 tuần, trước 3 ngày và trước 1 ngày.
- Ưu tiên Trung bình: Nhắc trước 3 ngày và trước 1 ngày.

### 6.3.4 Tạo lịch hàng loạt trực tiếp từ văn bản

Bạn cũng có thể cung cấp danh sách bằng văn bản mà không cần tạo tệp:

Bạn: Giúp tôi tạo các cuộc họp định kỳ sau, bắt đầu từ tuần tới và kéo dài trong 12 tuần:
1. 10:00 sáng Thứ Hai hàng tuần: Họp giao ban tuần, phòng họp A, thời lượng 1 giờ.
2. 14:00 chiều Thứ Tư hàng tuần: Chia sẻ công nghệ, phòng họp B, thời lượng 2 giờ.
3. 16:00 chiều Thứ Sáu hàng tuần: Review dự án, online, thời lượng 1 giờ.

OpenClaw sẽ tự động tính toán lịch biểu và tạo đủ 36 sự kiện trên Lịch của bạn chỉ trong một lượt thực thi!

### 6.3.5 Kiểm tra dữ liệu và xử lý xung đột thời gian

OpenClaw sở hữu các cơ chế kiểm tra thông minh giúp bảo vệ lịch biểu của bạn:

- **Phát hiện trùng lịch (Conflicts)**: Nếu sự kiện mới trùng giờ với một lịch hẹn quan trọng đã có từ trước, OpenClaw sẽ cảnh báo ngay và gợi ý các khung giờ trống lân cận.
- **Sửa lỗi ngày tháng bất hợp lý**: Tự động phát hiện và cảnh báo các giá trị ngày tháng sai quy tắc (ví dụ: ngày 30 tháng 2, hoặc khung giờ 25:00).
- **Phát hiện thiếu trường bắt buộc**: Nếu tệp dữ liệu thiếu mất ngày diễn ra hoặc thiếu tiêu đề sự kiện, OpenClaw sẽ thông báo để bạn quyết định bổ sung hoặc áp dụng giá trị mặc định.

---

## 6.4 Mẹo và chiến lược thiết lập lời nhắc

### 6.4.1 Phân loại và lựa chọn thời điểm nhắc việc

**Các hình thức nhắc việc**:
1. **Nhắc theo mốc thời gian**: Trước X phút / giờ / ngày, nhắc đúng giờ bắt đầu.
2. **Nhắc theo vị trí địa lý (Location-based)**: Nhắc khi bạn vừa đến hoặc vừa rời khỏi một địa điểm cụ thể.
3. **Nhắc việc lặp lại**: Hàng ngày, hàng tuần, hàng tháng hoặc theo chu kỳ riêng.

Khuyến nghị thời điểm nhắc nhở theo từng nhóm sự kiện được trình bày ở Bảng 6-1:

**Bảng 6-1: Thời điểm nhắc nhở đề xuất cho từng loại sự kiện**

| Loại sự kiện | Thời điểm nhắc đề xuất | Lý do |
|---|---|---|
| Cuộc họp quan trọng | Trước 1 ngày, trước 1 giờ, trước 15 phút | Đủ thời gian chuẩn bị tài liệu kỹ lưỡng |
| Cuộc họp thường lệ | Trước 1 giờ, trước 15 phút | Kịp thời di chuyển và chuẩn bị tâm thế |
| Hạn chót nộp dự án | Trước 1 tuần, trước 3 ngày, trước 1 ngày | Tránh tình trạng nước đến chân mới nhảy |
| Tác vụ thường nhật | Trước 30 phút | Không làm gián đoạn dòng tập trung công việc |
| Hẹn gặp đối tác / Ăn trưa | Trước 2 giờ, trước 30 phút | Dự trù thời gian chuẩn bị và di chuyển trên đường |
| Tiết học / Khóa học | Trước 15 phút | Đảm bảo có mặt đúng giờ vào lớp |

### 6.4.2 Cài đặt lời nhắc đa tầng (Multi-tier Reminders)

**Tình huống**: Bạn phụ trách dự án phát hành sản phẩm quan trọng vào ngày 15/03/2026.

Bạn: Cài đặt giúp tôi lời nhắc đa tầng cho hạn chót phát hành sản phẩm ngày 15/03/2026.

OpenClaw sẽ tự động lập kế hoạch 5 tầng nhắc nhở:
- 🔔 **Tầng 1 (Trước 2 tuần - 09:00 ngày 01/03)**: Còn 2 tuần nữa là đến ngày phát hành, bắt đầu giai đoạn nước rút.
- 🔔 **Tầng 2 (Trước 1 tuần - 09:00 ngày 08/03)**: Còn 1 tuần cuối cùng, hoàn tất kiểm thử và rà soát phương án triển khai.
- 🔔 **Tầng 3 (Trước 3 ngày - 09:00 ngày 12/03)**: Còn 3 ngày, tổng duyệt quy trình phát hành và phương án rollback dự phòng.
- 🔔 **Tầng 4 (Trước 1 ngày - 09:00 ngày 14/03)**: Ngày mai phát hành sản phẩm, xác nhận lịch trực của đội ngũ vận hành.
- 🔔 **Tầng 5 (Sáng ngày phát hành - 08:00 ngày 15/03)**: Hôm nay là ngày phát hành sản phẩm! Kiểm tra lần cuối và sẵn sàng triển khai.

### 6.4.3 Chiến lược nhắc nhở theo bối cảnh thực tế

- **Theo mức độ quan trọng**: Nhận diện các sự kiện lớn (như "Họp Hội đồng Quản trị", "Bảo vệ Luận án") để tự động thiết lập các lời nhắc chuẩn bị tài liệu sớm hơn bình thường.
- **Theo khoảng cách di chuyển**: Nếu địa điểm sự kiện nằm ở xa, OpenClaw có thể tính toán thời gian đi đường để nhắc bạn xuất phát sớm trước 30 - 45 phút.
- **Kèm danh mục chuẩn bị (Checklist)**: Khi tạo lịch thuyết trình demo sản phẩm, OpenClaw sẽ đính kèm luôn checklist những thứ cần kiểm tra: Slide trình chiếu, bản demo, thiết bị kết nối và máy chiếu.

### 6.4.4 Tích hợp kênh nhận thông báo

Bạn có thể cấu hình để nhận thông báo lịch trình qua nhiều kênh quen thuộc:

- **Thông báo qua Lark / Feishu**: Nhận tin nhắn thông báo họp trực tiếp trong ứng dụng chat công việc, đồng bộ lịch vào Feishu Calendar.
- **Thông báo qua WeCom / DingTalk**: Gửi thẻ thông báo tóm tắt thông tin họp đến tài khoản doanh nghiệp.
- **Gửi email nhắc nhở**: Tự động gửi email tóm tắt tiến độ đối với các deadline dự án quan trọng trước 3 ngày và 1 ngày.

### 6.4.5 Bí quyết quản lý để không bị "bội thực thông báo"

1. **Tránh đặt quá nhiều thông báo cho mọi sự việc**: Chỉ đặt thông báo đa tầng cho sự kiện quan trọng; những sự việc thông thường chỉ cần một mốc nhắc trước 15 phút.
2. **Nội dung thông báo cần cô đọng và hữu ích**: Thay vì chỉ hiện "15 phút nữa có cuộc họp", một thông báo chuẩn sẽ ghi rõ: Phòng họp nào, cần mang theo tài liệu gì, ai chủ trì.
3. **Phân chia mức độ ưu tiên theo khung giờ**: Điều chỉnh thông báo phù hợp với nhịp sinh hoạt sinh học của bạn (người dậy sớm hay người làm việc đêm) để thông báo xuất hiện đúng lúc bạn tỉnh táo nhất.

---

## 📝 Tổng kết chương

Trong chương này, bạn đã làm chủ các tính năng quản lý lịch và tác vụ của OpenClaw:

1. **Tự động tạo sự kiện lịch**: Tạo lịch tức thì từ văn bản tự nhiên, xử lý lịch họp phức tạp, thiết lập chuỗi sự kiện lặp lại định kỳ.
2. **Nhận diện ảnh chụp màn hình chat**: Trích xuất dữ liệu từ tin nhắn ứng dụng chat, tự động bóc tách ngày giờ, địa điểm và tạo lịch chính xác.
3. **Nhập lịch biểu hàng loạt**: Nhập toàn bộ thời khóa biểu, mốc tiến độ dự án từ tệp Excel và CSV chỉ trong vài giây.
4. **Chiến lược nhắc nhở thông minh**: Thiết lập lời nhắc đa tầng, nhắc theo ngữ cảnh di chuyển, tích hợp thông báo qua Lark / Feishu, Email và Lịch hệ thống.

---

## 🎯 Bài tập thực hành

- **Bài tập 1: Lập lịch tuần cá nhân**: Liệt kê toàn bộ các sự kiện dự kiến trong tuần tới, yêu cầu OpenClaw tạo lịch và kiểm tra kết quả đồng bộ trên điện thoại của bạn.
- **Bài tập 2: Nhận diện ảnh chụp tin nhắn hẹn gặp**: Chụp ảnh màn hình một đoạn tin nhắn hẹn cà phê hoặc hẹn họp, gửi cho OpenClaw để AI tự tạo sự kiện.
- **Bài tập 3: Nhập bảng tính kế hoạch**: Tạo một tệp bảng tính nhỏ chứa 3 - 5 sự kiện và yêu cầu OpenClaw nhập hàng loạt vào lịch hệ thống.

---

## 💡 Câu hỏi thường gặp

**Q1: Sự kiện tạo ra không đồng bộ sang iPhone?**  
A: Hãy kiểm tra xem máy Mac và iPhone của bạn có cùng đăng nhập một tài khoản iCloud và đã bật tính năng đồng bộ Lịch (Calendar) trong cài đặt iCloud hay chưa.

**Q2: Nhận diện chữ trong ảnh chụp bị sai lệch?**  
A: Đảm bảo ảnh chụp màn hình rõ nét, phông chữ tin nhắn không bị mờ. Bạn có thể gõ kèm thêm một câu hướng dẫn ngắn để AI nhận diện chuẩn xác hơn.

**Q3: Nhập tệp Excel bị báo lỗi cấu trúc?**  
A: Kiểm tra lại tên các cột tiêu đề (Tiêu đề, Ngày, Giờ bắt đầu, Giờ kết thúc) và định dạng ngày tháng (khuyến nghị chuẩn `YYYY-MM-DD`).

**Q4: Làm thế nào để xóa một loạt sự kiện đã tạo nhầm?**  
A: Bạn chỉ cần nói với OpenClaw: *"Hãy xóa giúp tôi toàn bộ các sự kiện vừa tạo"* hoặc mở ứng dụng Lịch chọn xóa hàng loạt thủ công.

---

**Chương tiếp theo**: [Chương 7: Quy trình Tự động hóa](07-automation-workflow.md) - Xây dựng Task Flow, Webhooks và Lập lịch Cron tự động

**Trở về mục lục**: [README](../../README.md)

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc chương này trên nền tảng web?**

[🔗 Đọc trực tuyến: Chương 6 - Quản lý Lịch trình & Tác vụ](https://awesome.tryopenclaw.asia/docs/02-core-features/06-schedule-management/)

Trải nghiệm đọc tốt hơn trên website giáo trình:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính
- 🌙 Chế độ nền tối (Dark Mode) dịu mắt
- 🔍 Tích hợp tìm kiếm nhanh nội dung
- 📋 Thanh điều hướng mục lục trực quan, dễ dàng chuyển đổi giữa các chương

[🏠 Truy cập website giáo trình đầy đủ](https://awesome.tryopenclaw.asia)
