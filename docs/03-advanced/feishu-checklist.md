# Danh sách Kiểm tra Cấu hình Bot Lark / Feishu

> ✅ Sử dụng danh sách kiểm tra (checklist) này để đảm bảo bot Lark / Feishu được cấu hình đầy đủ, chuẩn xác và tránh các lỗi thường gặp trong quá trình vận hành.

---

## 📋 Chuẩn bị trước khi cấu hình

- [ ] Đã cài đặt OpenClaw (phiên bản 2026.3.2+ trở lên)
- [ ] Đã đăng ký tài khoản trên Nền tảng Mở Lark / Feishu (Lark Open Platform / Feishu Open Platform)
- [ ] Đã tạo tổ chức/doanh nghiệp (tài khoản cá nhân cũng có thể tạo tổ chức riêng để thử nghiệm)
- [ ] Mạng Internet có thể kết nối bình thường đến máy chủ Nền tảng Mở Lark / Feishu

---

## 🔧 Tạo ứng dụng (Trên Nền tảng Mở Lark / Feishu)

### 1. Tạo ứng dụng mới

- [ ] Đăng nhập Nền tảng Mở Feishu (https://open.feishu.cn) hoặc Lark (https://open.larksuite.com)
- [ ] Nhấp chọn "Tạo ứng dụng tùy chỉnh cho doanh nghiệp" (Custom App)
- [ ] Điền thông tin ứng dụng:
  - [ ] Tên ứng dụng (Ví dụ: `Trợ lý OpenClaw`)
  - [ ] Mô tả ứng dụng
  - [ ] Tải lên biểu tượng (Icon) đại diện
- [ ] Ghi lại và lưu trữ an toàn `App ID` cùng `App Secret`

### 2. Cấu hình tính năng Bot (Robot)

- [ ] Truy cập mục "Tính năng ứng dụng" (App Features) → "Bot" (Robot)
- [ ] Bật tính năng Bot
- [ ] Đặt tên hiển thị cho Bot
- [ ] Cập nhật mô tả hoạt động của Bot
- [ ] Tải lên ảnh đại diện (Avatar) cho Bot

### 3. Cấu hình quyền hạn (⭐ CỰC KỲ QUAN TRỌNG)

Trong trang "Quản lý quyền hạn" (Permissions), thêm đầy đủ các quyền sau:

#### Quyền hạn bắt buộc (Thiếu một quyền bot sẽ không hoạt động)

- [ ] `im:message` - Đọc và gửi tin nhắn trong cuộc trò chuyện 1-1 và nhóm chat
- [ ] `im:message:send_as_bot` - Gửi tin nhắn dưới danh nghĩa ứng dụng bot
- [ ] `contact:contact.base:readonly` - Đọc thông tin cơ bản từ danh bạ doanh nghiệp ⭐

> ⚠️ **Đặc biệt lưu ý**: Quyền `contact:contact.base:readonly` là quyền thường xuyên bị bỏ sót nhất!
> 
> Nếu thiếu quyền này:
> - ❌ Bot hoàn toàn không nhận diện được danh tính người gửi
> - ❌ Không thể phản hồi bất kỳ tin nhắn nào
> - ❌ Trong nhật ký hệ thống (logs) sẽ liên tục báo lỗi "User not found"

#### Quyền hạn tùy chọn (Bổ sung tùy theo nhu cầu thực tế)

- [ ] `im:message:group_at_msg:readonly` - Đọc tin nhắn có @ nhắc đến bot trong nhóm chat
- [ ] `im:message:group_msg:readonly` - Đọc toàn bộ tin nhắn trong nhóm chat
- [ ] `im:chat` - Đọc thông tin chi tiết của nhóm chat
- [ ] `contact:user.base:readonly` - Đọc thông tin chi tiết nâng cao của người dùng

### 4. Cấu hình đăng ký sự kiện (Event Subscription)

Tại trang "Đăng ký sự kiện" (Event Subscriptions):

- [ ] Chọn phương thức "Sử dụng kết nối dài để nhận sự kiện" (chế độ WebSocket / Long Connection)
- [ ] Thêm sự kiện: `im.message.receive_v1` (Nhận tin nhắn)
- [ ] Xác nhận trạng thái kết nối dài hiển thị "Đã kết nối" (Connected)

> 💡 **Mẹo nhỏ**: Nếu kết nối dài chưa thể thiết lập ngay, hãy hoàn thành các bước cấu hình OpenClaw phía dưới trước rồi quay lại kiểm tra.

### 5. Phát hành phiên bản ứng dụng

- [ ] Nhấp vào mục "Quản lý phiên bản và phát hành" (Version Management & Release)
- [ ] Tạo phiên bản mới (Create a version)
- [ ] Điền ghi chú mô tả phiên bản
- [ ] Gửi phê duyệt (với ứng dụng nội bộ doanh nghiệp tự xây dựng, hệ thống thường tự động duyệt ngay)
- [ ] Xác nhận trạng thái ứng dụng chuyển sang "Đã phát hành" (Published)

### 6. Cấu hình phạm vi khả dụng (Availability)

- [ ] Trong trang "Phạm vi khả dụng" (Availability), thiết lập người dùng được phép tương tác với bot
- [ ] Thêm các phòng ban hoặc thành viên cụ thể
- [ ] Hoặc chọn "Toàn thể thành viên trong doanh nghiệp" (All members)

---

## 💻 Cấu hình phía OpenClaw

### 1. Thêm kênh kết nối Lark / Feishu

```bash
# Chạy lệnh thêm kênh
openclaw channels add

# Chọn Feishu (hoặc Lark)
# Nhập App ID
# Nhập App Secret
```

**Kiểm tra lại cấu hình**:

```bash
# Xem danh sách các kênh kết nối
openclaw channels list

# Đảm bảo nhìn thấy kênh feishu trong danh sách
```

### 2. Khởi chạy Gateway

```bash
# Khởi động Gateway
openclaw gateway start

# Kiểm tra trạng thái hoạt động
openclaw gateway status

# Trạng thái cần hiển thị là "running"
```

### 3. Xác thực kết nối

```bash
# Kiểm tra kết nối tới Lark/Feishu
openclaw channels test feishu

# Kết quả cần hiển thị kết nối thành công (Connection successful)
```

---

## 🧪 Kiểm thử và Xác minh thực tế

### 1. Kiểm tra tương tác cơ bản

- [ ] Tìm kiếm và thêm bot vào danh bạ trên ứng dụng Lark / Feishu
- [ ] Gửi tin nhắn thử nghiệm: "Xin chào"
- [ ] Bot phản hồi câu trả lời bình thường

### 2. Kiểm tra tính năng nâng cao

- [ ] Gửi tin nhắn dạng văn bản thông thường
- [ ] Gửi tệp đính kèm (nếu quy trình yêu cầu xử lý file)
- [ ] Gửi hình ảnh minh họa (nếu có dùng mô hình vision)
- [ ] Kiểm tra tương tác trong nhóm chat (nhớ tag @ tên bot)

### 3. Kiểm tra phân quyền và nhận diện

- [ ] Bot nhận diện chính xác tên hiển thị của người nhắn
- [ ] Bot phản hồi mạch lạc, đúng ngữ cảnh
- [ ] Cơ chế kiểm soát truy cập (allowlist) hoạt động chuẩn xác (nếu bạn có bật cấu hình giới hạn)

---

## 🔍 Hướng dẫn Chẩn đoán và Xử lý Sự cố

### Trường hợp Bot im lặng, không phản hồi tin nhắn?

Hãy rà soát tuần tự theo 4 bước sau:

1. **Kiểm tra quyền hạn (Nguyên nhân phổ biến nhất chiếm 90%)**
   ```text
   ✅ im:message
   ✅ im:message:send_as_bot
   ✅ contact:contact.base:readonly ⭐ Bắt buộc phải có
   ```

2. **Kiểm tra cơ chế đăng ký sự kiện**
   ```text
   ✅ Đã chọn chế độ "Kết nối dài" (WebSocket)
   ✅ Đã thêm đúng sự kiện im.message.receive_v1
   ✅ Trạng thái kết nối dài báo "Đã kết nối"
   ```

3. **Kiểm tra trạng thái phát hành ứng dụng**
   ```text
   ✅ Ứng dụng đã được phát hành phiên bản mới nhất
   ✅ Đã được duyệt thành công
   ✅ Tài khoản của bạn nằm trong phạm vi khả dụng
   ```

4. **Kiểm tra dịch vụ OpenClaw**
   ```bash
   # Kiểm tra trạng thái Gateway
   openclaw gateway status
   
   # Theo dõi nhật ký lỗi thời gian thực
   openclaw logs --follow
   
   # Kiểm tra danh sách kênh kết nối
   openclaw channels list
   ```

### Cách theo dõi log chi tiết

```bash
# Theo dõi toàn bộ log hệ thống theo thời gian thực
openclaw logs --follow

# Lọc riêng các dòng log liên quan đến Feishu/Lark
openclaw logs --follow | grep feishu

# Xem nhanh 100 dòng log gần nhất
openclaw logs --tail 100
```

### Bảng tra cứu lỗi thường gặp và giải pháp

| Thông báo lỗi | Nguyên nhân gốc rễ | Hướng dẫn khắc phục |
|---|---|---|
| `Permission denied` | Ứng dụng thiếu quyền API cần thiết | Bổ sung đầy đủ các quyền bắt buộc trong trang phân quyền |
| `User not found` | Thiếu quyền đọc danh bạ doanh nghiệp | Bổ sung ngay quyền `contact:contact.base:readonly` rồi phát hành phiên bản mới |
| `Connection failed` | Gateway OpenClaw chưa khởi chạy | Chạy lệnh `openclaw gateway start` |
| `Invalid app_id` | Sai thông tin `App ID` hoặc `App Secret` | Kiểm tra và cấu hình lại thông tin xác thực |
| `Long connection failed` | Kết nối dài WebSocket bị từ chối | Khởi động Gateway OpenClaw trước, sau đó mới bật kết nối dài trên console |

---

## 📚 Tài liệu tham khảo liên quan

- [Chương 9: Tích hợp Đa Nền tảng](09-multi-platform-integration.md)
- [Phụ lục E: Tra cứu Lỗi Thường gặp](../../appendix/E-common-problems.md#vấn-đề-14-bot-feishu-không-phản-hồi)
- [Tài liệu chính thức Nền tảng Mở Feishu](https://open.feishu.cn/document/)
- [Tài liệu Nền tảng Mở Lark](https://open.larksuite.com/document/)

---

## 💡 Thực hành tối ưu (Best Practices)

### Lưu ý trong quá trình phát triển

1. **Thử nghiệm trước khi phát hành diện rộng**
   - Hoàn tất mọi bước kiểm tra trong môi trường nội bộ cá nhân
   - Sau khi chạy ổn định mới mở rộng phạm vi khả dụng cho toàn bộ công ty

2. **Áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege)**
   - Chỉ cấp đúng những quyền hạn mà bot thực sự cần dùng
   - Định kỳ rà soát lại danh sách quyền hạn của ứng dụng

3. **Giám sát nhật ký thường xuyên**
   - Định kỳ kiểm tra log hệ thống để phát hiện các lỗi phát sinh sớm
   - Xử lý kịp thời các cảnh báo nghẽn kết nối hoặc token hết hạn

4. **Sao lưu dữ liệu cấu hình định kỳ**
   - Luôn sao lưu thư mục cấu hình `~/.openclaw` trước khi cập nhật
   - Lưu trữ an toàn các thông tin cấu hình của ứng dụng Lark/Feishu

### Lưu ý về an toàn và bảo mật

1. **Bảo vệ khóa bí mật**
   - Tuyệt đối không commit tệp chứa `App Secret` lên GitHub hoặc kho mã nguồn công khai
   - Ưu tiên lưu trữ khóa bí mật trong biến môi trường hoặc file bảo mật cục bộ

2. **Kiểm soát truy cập chặt chẽ**
   - Cấu hình allowlist để chỉ định các tài khoản người dùng được phép ra lệnh cho bot
   - Thường xuyên rà soát nhật ký truy cập để phát hiện các hành vi bất thường

3. **Cập nhật phiên bản định kỳ**
   - Duy trì cập nhật các bản vá lỗi mới nhất của OpenClaw
   - Theo dõi các thông báo cập nhật API từ phía Lark / Feishu Open Platform

---

**Cập nhật lần cuối**: 14/02/2026  
**Phiên bản áp dụng**: OpenClaw 2026.3.2+
