# Phụ lục J: Danh Sách Kiểm Tra Cấu Hình Bot Lark / Feishu

> ✅ Sử dụng danh sách kiểm tra này để đảm bảo bot Lark / Feishu được cấu hình hoàn chỉnh, tránh các lỗi phổ biến trong thực tế

---

## 📋 Chuẩn bị trước khi cấu hình

- [ ] Đã cài đặt OpenClaw (phiên bản 2026.2.9 trở lên)
- [ ] Đã đăng ký tài khoản trên Nền tảng Mở Lark / Feishu (Lark / Feishu Open Platform)
- [ ] Đã tạo doanh nghiệp / nhóm làm việc (tài khoản cá nhân cũng có thể tạo nhóm)
- [ ] Môi trường mạng có thể kết nối bình thường đến Nền tảng Mở Lark / Feishu

---

## 🔧 Tạo ứng dụng (Trên Nền tảng Mở Lark / Feishu)

### 1. Tạo ứng dụng mới

- [ ] Đăng nhập vào Nền tảng Mở Feishu: https://open.feishu.cn (hoặc Lark Open Platform: https://open.larksuite.com)
- [ ] Bấm chọn "Tạo ứng dụng tùy chỉnh cho doanh nghiệp" (Create Custom App)
- [ ] Điền thông tin ứng dụng:
  - [ ] Tên ứng dụng (Ví dụ: Trợ lý OpenClaw)
  - [ ] Mô tả ứng dụng
  - [ ] Biểu tượng ứng dụng (Icon)
- [ ] Ghi lại App ID và App Secret

### 2. Kích hoạt tính năng Bot

- [ ] Điều hướng tới mục "Tính năng ứng dụng" (App Features) → "Bot" (Robot)
- [ ] Bật tính năng Bot
- [ ] Đặt tên hiển thị cho Bot
- [ ] Điền phần mô tả Bot
- [ ] Tải lên ảnh đại diện cho Bot

### 3. Cấu hình phân quyền (⭐ Cực kỳ quan trọng)

Tại trang "Quản lý quyền" (Permissions / Scope), thêm các quyền sau:

#### Quyền bắt buộc (Không được thiếu quyền nào)

- [ ] `im:message` - Đọc và gửi tin nhắn trong trò chuyện cá nhân hoặc nhóm
- [ ] `im:message:send_as_bot` - Gửi tin nhắn dưới danh nghĩa ứng dụng / bot
- [ ] `contact:contact.base:readonly` - Đọc thông tin cơ bản trong danh bạ ⭐

> ⚠️ **Đặc biệt lưu ý**: `contact:contact.base:readonly` là quyền thường xuyên bị bỏ quên nhất!
>
> Nếu thiếu quyền này:
>
> - ❌ Bot không thể nhận diện định danh người dùng
> - ❌ Bot sẽ không phản hồi bất kỳ tin nhắn nào
> - ❌ Trong nhật ký hệ thống (logs) sẽ xuất hiện lỗi "User not found"

#### Quyền tùy chọn (Bổ sung theo nhu cầu thực tế)

- [ ] `im:message:group_at_msg:readonly` - Đọc tin nhắn có @ nhắc đến bot trong nhóm
- [ ] `im:message:group_msg:readonly` - Đọc tất cả tin nhắn trong nhóm trò chuyện
- [ ] `im:chat` - Lấy thông tin nhóm trò chuyện
- [ ] `contact:user.base:readonly` - Lấy thông tin chi tiết của người dùng

### 4. Cấu hình đăng ký sự kiện (Event Subscription)

Tại trang "Đăng ký sự kiện" (Event Subscriptions):

- [ ] Chọn chế độ "Sử dụng kết nối dài để nhận sự kiện" (Chế độ WebSocket / Long connection)
- [ ] Thêm sự kiện: `im.message.receive_v1` (Nhận tin nhắn)
- [ ] Xác nhận trạng thái kết nối dài hiển thị "Đã kết nối" (Connected)

> 💡 **Mẹo**: Nếu kết nối dài chưa thể thiết lập ngay, vui lòng hoàn tất các bước cấu hình OpenClaw bên dưới trước.

### 5. Phát hành ứng dụng

- [ ] Bấm vào mục "Quản lý phiên bản & Phát hành" (Version Management & Release)
- [ ] Tạo phiên bản mới (Create version)
- [ ] Điền ghi chú mô tả phiên bản
- [ ] Gửi phê duyệt (Ứng dụng tự phát triển trong doanh nghiệp thường được tự động duyệt ngay)
- [ ] Xác nhận trạng thái ứng dụng chuyển thành "Đã phát hành" (Published)

### 6. Thiết lập phạm vi khả dụng (Availability)

- [ ] Tại trang "Phạm vi khả dụng" (Availability), thiết lập danh sách người dùng được phép sử dụng
- [ ] Thêm các phòng ban hoặc thành viên cụ thể
- [ ] Hoặc chọn chế độ "Khả dụng cho toàn bộ thành viên" (All members)

---

## 💻 Cấu hình trên OpenClaw

### 1. Thêm kênh kết nối Lark / Feishu

```bash
# Chạy lệnh thêm kênh giao tiếp
openclaw channels add

# Chọn kênh Feishu
# Nhập App ID
# Nhập App Secret
```

**Kiểm tra lại cấu hình**:

```bash
# Xem danh sách các kênh kết nối
openclaw channels list

# Bạn sẽ thấy kênh feishu xuất hiện trong danh sách
```

### 2. Khởi động Cổng Gateway

```bash
# Khởi động Cổng kết nối Gateway
openclaw gateway start

# Kiểm tra trạng thái hoạt động
openclaw gateway status

# Kết quả cần hiển thị trạng thái "running"
```

### 3. Xác thực kết nối

```bash
# Kiểm tra khả năng kết nối tới Feishu
openclaw channels status --probe

# Kết quả cần thông báo kết nối thành công (connected)
```

---

## 🧪 Kiểm thử và Xác minh

### 1. Kiểm tra cơ bản

- [ ] Tìm kiếm và thêm bot vào danh sách trò chuyện trên Lark / Feishu
- [ ] Gửi một tin nhắn bất kỳ: "Xin chào"
- [ ] Bot cần gửi lại phản hồi tương ứng

### 2. Kiểm tra tính năng

- [ ] Thử nghiệm gửi tin nhắn văn bản thông thường
- [ ] Thử nghiệm gửi tệp tài liệu đính kèm (nếu có cấu hình)
- [ ] Thử nghiệm gửi hình ảnh (nếu có cấu hình)
- [ ] Thử nghiệm tương tác trong nhóm (cần gắn thẻ @ nhắc tên bot)

### 3. Kiểm tra phân quyền

- [ ] Bot nhận diện chính xác tên người dùng
- [ ] Bot phản hồi nội dung bình thường
- [ ] Tính năng kiểm soát quyền truy cập (nếu có cấu hình) hoạt động chuẩn xác

---

## 🔍 Khắc phục sự cố

### Bot không phản hồi tin nhắn?

Hãy kiểm tra tuần tự theo các bước sau:

1. **Kiểm tra phân quyền (Nguyên nhân phổ biến nhất)**
   ```text
   ✅ im:message
   ✅ im:message:send_as_bot
   ✅ contact:contact.base:readonly ⭐ Bắt buộc phải có
   ```

2. **Kiểm tra đăng ký sự kiện**
   ```text
   ✅ Đã chọn phương thức "Kết nối dài" (WebSocket)
   ✅ Đã thêm sự kiện im.message.receive_v1
   ✅ Trạng thái kết nối dài hiển thị "Đã kết nối"
   ```

3. **Kiểm tra trạng thái phát hành ứng dụng**
   ```text
   ✅ Ứng dụng đã được phát hành chính thức
   ✅ Phiên bản đã được duyệt
   ✅ Tài khoản của bạn nằm trong phạm vi người dùng khả dụng
   ```

4. **Kiểm tra trạng thái OpenClaw**
   ```bash
   # Kiểm tra trạng thái hoạt động của Gateway
   openclaw gateway status

   # Theo dõi nhật ký thời gian thực
   openclaw logs --follow

   # Kiểm tra danh sách các kênh
   openclaw channels list
   ```

### Xem nhật ký chi tiết

```bash
# Xem luồng nhật ký theo thời gian thực
openclaw logs --follow

# Lọc riêng các dòng nhật ký liên quan đến feishu
openclaw logs --follow | grep feishu

# Xem 100 dòng nhật ký gần nhất
openclaw logs --limit 100
```

### Bảng tra cứu lỗi thường gặp và giải pháp

| Thông báo lỗi | Nguyên nhân gốc rễ | Giải pháp xử lý |
|---|---|---|
| `Permission denied` | Ứng dụng thiếu quyền hạn cần thiết | Bổ sung đầy đủ các quyền bắt buộc trong danh sách |
| `User not found` | Thiếu quyền truy cập danh bạ người dùng | Thêm quyền `contact:contact.base:readonly` và phát hành lại phiên bản |
| `Connection failed` | Cổng Gateway của OpenClaw chưa khởi động | Chạy lệnh `openclaw gateway start` |
| `Invalid app_id` | App ID hoặc App Secret bị nhập sai | Kiểm tra và cấu hình lại thông tin chính xác |
| `Long connection failed` | Kết nối dài WebSocket thất bại | Đảm bảo OpenClaw Gateway đã chạy trước khi kiểm tra trạng thái trên Lark/Feishu |

---

## 📚 Tài liệu tham khảo liên quan

- [Chương 9: Tích hợp đa nền tảng](../docs/03-advanced/09-multi-platform-integration.md)
- [Phụ lục E: Tra cứu nhanh các sự cố thường gặp](E-common-problems.md)
- [Tài liệu chính thức Nền tảng Mở Lark / Feishu](https://open.feishu.cn/document/)

---

## 💡 Thực hành tốt nhất (Best Practices)

### Lưu ý trong quá trình triển khai

1. **Kiểm thử trước khi phát hành rộng rãi**
   - Hoàn tất mọi thiết lập và kiểm tra trong môi trường thử nghiệm
   - Đảm bảo bot vận hành ổn định trước khi mở cho toàn bộ nhân sự sử dụng

2. **Nguyên tắc phân quyền tối thiểu (Least Privilege)**
   - Chỉ cấp đúng các quyền hạn thực sự cần dùng
   - Định kỳ rà soát lại danh sách quyền hạn đã cấp cho ứng dụng

3. **Chủ động giám sát nhật ký**
   - Thường xuyên kiểm tra nhật ký vận hành
   - Kịp thời phát hiện và khắc phục các bất thường

4. **Sao lưu cấu hình an toàn**
   - Thường xuyên sao lưu tệp cấu hình của OpenClaw
   - Lưu trữ an toàn các thông tin cấu hình của ứng dụng Lark / Feishu

### Khuyến nghị về an ninh bảo mật

1. **Bảo vệ khóa bí mật (Secrets)**
   - Tuyệt đối không commit trực tiếp App Secret vào kho mã nguồn (Git)
   - Sử dụng biến môi trường để lưu trữ các thông tin nhạy cảm

2. **Kiểm soát quyền truy cập**
   - Thiết lập `allowlist` để giới hạn danh sách người dùng được phép tương tác
   - Định kỳ kiểm toán nhật ký truy cập của người dùng

3. **Cập nhật hệ thống định kỳ**
   - Thường xuyên nâng cấp OpenClaw lên phiên bản mới nhất
   - Theo dõi các thông báo thay đổi API từ phía Lark / Feishu

---

**Cập nhật lần cuối**: 14/02/2026  
**Phiên bản áp dụng**: OpenClaw 2026.2.9+

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/J-feishu-checklist/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
