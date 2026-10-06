# 🍪 Hướng Dẫn Chi Tiết Cách Lấy CSDN Cookie

## 📸 Hướng Dẫn Kèm Hình Ảnh

### Bước 1: Đăng nhập vào CSDN
1. Mở trình duyệt web, truy cập: https://www.csdn.net
2. Nhấp vào nút "Đăng nhập" ở góc trên bên phải
3. Sử dụng tài khoản và mật khẩu của bạn để đăng nhập

### Bước 2: Mở Công cụ Dành cho Nhà phát triển (Developer Tools)
1. **Nhấn phím F12** trên bàn phím
2. Hoặc: Nhấp chuột phải vào bất kỳ vị trí nào trên trang → Chọn "Kiểm tra" (Inspect)

### Bước 3: Chuyển sang tab Application
1. Trên thanh công cụ trên cùng của DevTools, tìm thẻ **"Application"**
2. Nhấp vào để mở

### Bước 4: Điều hướng đến mục Cookies
1. Ở thanh menu bên trái, tìm mục **"Storage"**
2. Mở rộng danh mục và tìm **"Cookies"**
3. Nhấp chọn tên miền **https://www.csdn.net**

### Bước 5: Sao chép các Cookie quan trọng
Tìm kiếm và sao chép các giá trị tương ứng sau:

#### 🔑 Danh sách Cookie trọng yếu:

| Tên Cookie | Tác dụng | Mức độ bắt buộc |
|------------|----------|-----------------|
| `SESSION` | ID phiên làm việc (Session ID) | ✅ Bắt buộc |
| `token` | Token xác thực đăng nhập | ✅ Bắt buộc |
| `UserInfo` | Thông tin người dùng | ⭕ Tùy chọn |
| `UserName` | Tên đăng nhập | ⭕ Tùy chọn |
| `UserToken` | Token phân quyền người dùng | ⭕ Tùy chọn |

### Bước 6: Sao chép giá trị Cookie

**Cách A: Sao chép thủ công từng mục**
1. Nhấp vào cookie cần lấy (ví dụ `SESSION`)
2. Trong cột "Value" ở khung bên phải
3. Sao chép toàn bộ chuỗi giá trị

**Cách B: Xuất toàn bộ cookie**
1. Nhấp chuột phải vào dòng "https://www.csdn.net" trong danh sách Cookies
2. Chọn "Export"
3. Lưu về máy dưới dạng tệp JSON

---

## 📝 Định Dạng Sao Chép Nhanh

### Định dạng 1: Cấu trúc JSON (Khuyên dùng)

Sau khi sao chép các cookie cần thiết, sắp xếp theo định dạng JSON như sau:

```json
{
  "SESSION": "giá_trị_SESSION_bạn_đã_sao_chép",
  "token": "giá_trị_token_bạn_đã_sao_chép"
}
```

### Định dạng 2: Chuỗi một dòng

```
SESSION=giá_trị_SESSION_của_bạn; token=giá_trị_token_của_bạn
```

---

## 🎯 Sau Khi Hoàn Thành

Dán chuỗi cookie đã sao chép cho bot / agent, định dạng có thể là:

```
SESSION=xxxxxx; token=xxxxxx
```

Hoặc gửi riêng từng giá trị:

```
SESSION: xxxxxx
token: xxxxxx
```

Hệ thống sẽ giúp bạn cấu hình vào agent-browser!

---

## ⚠️ Lưu Ý Quan Trọng

1. **Bảo mật**: Cookie chứa toàn bộ phiên đăng nhập của bạn, tuyệt đối không chia sẻ cho người lạ hoặc công khai trên mạng.
2. **Thời hạn sử dụng**: Cookie sẽ hết hạn sau một khoảng thời gian nhất định, nếu mất hiệu lực bạn cần thao tác lấy lại.
3. **Chỉ sao chép mục cần thiết**: Thông thường chỉ cần `SESSION` và `token` là đã đủ đáp ứng yêu cầu.

---

## 🚀 Các Bước Tiếp Theo

Sau khi lấy được cookie, bạn chỉ cần:
1. Gửi thông báo xác nhận: "Đã lấy xong cookie"
2. Dán giá trị cookie

Hệ thống Agent sẽ tự động hỗ trợ bạn:
1. Cấu hình vào trình duyệt tự động
2. Mở trang xuất bản bài viết của CSDN
3. Tự động điền nội dung bài viết
4. Chờ bạn kiểm duyệt lần cuối và bấm nút xuất bản
