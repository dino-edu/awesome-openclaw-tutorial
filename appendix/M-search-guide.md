# Phụ lục M: 🔍 Hướng Dẫn Sử Dụng Tính Năng Tìm Kiếm

> Tính năng tìm kiếm của bộ tài liệu tập trung vào tìm kiếm tiêu đề, giúp bạn nhanh chóng định vị chính xác chương mục cần tra cứu

---

## 📖 Hướng dẫn tìm kiếm

### Phạm vi tìm kiếm

Tính năng tìm kiếm trên trang **chỉ quét tiêu đề tài liệu**, không quét toàn bộ nội dung văn bản. Thiết kế này mang lại các ưu điểm sau:

- ✅ **Chính xác hơn**: Điều hướng trực tiếp đến đúng tiêu đề chương mục
- ✅ **Nhanh chóng hơn**: Tốc độ phản hồi tìm kiếm tức thì
- ✅ **Rõ ràng hơn**: Danh sách kết quả gọn gàng, trực quan và dễ hiểu

### Nội dung hỗ trợ

Công cụ tìm kiếm bao phủ tiêu đề của các phần nội dung sau:

- 📚 **15 chương chính**: Toàn bộ tiêu đề từ Chương 1 đến Chương 15
- 📖 **Hệ thống phụ lục**: Toàn bộ tiêu đề từ Phụ lục A đến N
- 💡 **Tài liệu ví dụ**: Tiêu đề các tài liệu nằm trong thư mục `examples/`
- 📄 **Các trang điều hướng khác**: README, Lộ trình học tập (LEARNING-PATH)...

---

## 🎯 Mẹo tìm kiếm hiệu quả

### 1. Sử dụng từ khóa ngắn gọn

**Cách làm khuyến nghị**:

✅ Feishu hoặc Lark  
✅ Cấu hình  
✅ Skills  
✅ Lỗi hoặc Sự cố  
✅ API  

**Không khuyến nghị**:

❌ Làm thế nào để cấu hình bot Feishu (quá dài)  
❌ Tôi muốn biết cách cài đặt hệ thống (văn phong khẩu ngữ)  

### 2. Tìm kiếm bằng tiếng Việt

Hỗ trợ tìm kiếm từ khóa tiếng Việt (có dấu hoặc không dấu tùy bộ gõ):

```text
Lark → Tìm tất cả tiêu đề có chứa "Lark"
Cấu hình → Tìm tất cả tiêu đề có chứa "Cấu hình"
Lỗi → Tìm tất cả tiêu đề có chứa "Lỗi" hoặc "Sự cố"
```

### 3. Tìm kiếm bằng thuật ngữ tiếng Anh

Hỗ trợ tra cứu nhanh các thuật ngữ kỹ thuật tiếng Anh:

```text
API → Tìm tất cả tiêu đề có chứa "API"
Skills → Tìm tất cả tiêu đề có chứa "Skills"
Bot → Tìm tất cả tiêu đề có chứa "Bot"
Gateway → Tìm tất cả tiêu đề có chứa "Gateway"
```

### 4. Tìm kiếm kết hợp nhiều từ khóa

Sử dụng dấu cách (khoảng trắng) để phân tách các từ khóa:

```text
Feishu Cấu hình → Tìm các tiêu đề đồng thời chứa "Feishu" và "Cấu hình"
API Lỗi → Tìm các tiêu đề đồng thời chứa "API" và "Lỗi"
```

### 5. Khớp mờ và khớp tiền tố

Hỗ trợ khớp một phần tiền tố từ khóa:

```text
Cấu → Có thể khớp với "Cấu hình"
Lỗi → Có thể khớp với "Xử lý lỗi"
Ski → Có thể khớp với "Skills"
```

---

## 💡 Ví dụ tìm kiếm thực tế

### Ví dụ 1: Tìm kiếm nội dung liên quan đến Lark / Feishu

**Từ khóa tìm kiếm**: `Feishu` hoặc `Lark`

**Kết quả dự kiến**:

- Chương 9: Tích hợp đa nền tảng (Kết nối một chạm Lark / WeCom / DingTalk / QQ)
- Cấu hình Bot Lark / Feishu
- Danh sách kiểm tra cấu hình Lark / Feishu
- Các tài liệu hướng dẫn liên quan...

### Ví dụ 2: Tìm kiếm nội dung về cấu hình

**Từ khóa tìm kiếm**: `Cấu hình`

**Kết quả dự kiến**:

- Chương 2: Hoàn thành triển khai trong 5 phút
- Chương 11: Cấu hình nâng cao
- Phụ lục H: Mẫu tệp cấu hình và ví dụ
- Phụ lục L: Cấu trúc tệp cấu hình OpenClaw...

### Ví dụ 3: Tra cứu giải quyết sự cố

**Từ khóa tìm kiếm**: `Sự cố` hoặc `Lỗi`

**Kết quả dự kiến**:

- Phụ lục E: Tra cứu nhanh các sự cố thường gặp
- Các chương xử lý sự cố và khắc phục lỗi hệ thống...

### Ví dụ 4: Tra cứu về Skills

**Từ khóa tìm kiếm**: `Skills`

**Kết quả dự kiến**:

- Chương 8: Mở rộng Skills
- Phụ lục B: Danh mục Skills thiết yếu
- Phụ lục N: Hệ sinh thái Skills của OpenClaw
- Các ví dụ phát triển Skills...

---

## 🚀 Tính năng nâng cao

### Tìm kiếm thời gian thực (Real-time Search)

Khi bạn nhập từ 2 ký tự trở lên, quá trình tìm kiếm sẽ tự động kích hoạt (với độ trễ làm dịu 300ms) mà không cần nhấn phím Enter hay nút tìm kiếm.

### Tô sáng kết quả (Highlighting)

Trong danh sách kết quả trả về, các từ khóa khớp với nội dung tìm kiếm sẽ được làm nổi bật với nền màu vàng nhạt trực quan.

### Nhãn phân loại danh mục

Mỗi kết quả tìm kiếm đều hiển thị nhãn phân loại nội dung:

- 📚 Tài liệu - Các tài liệu trong thư mục `docs/`
- 📖 Phụ lục - Các phụ lục trong thư mục `appendix/`
- 💡 Ví dụ - Các ví dụ trong thư mục `examples/`

### Tìm kiếm trực tiếp qua tham số URL

Bạn có thể chia sẻ liên kết tìm kiếm trực tiếp qua tham số URL:

```yaml
https://your-site.com/search?q=Feishu
```

---

## ❓ Câu hỏi thường gặp

### Q1: Tại sao không tìm thấy một số nội dung chi tiết?

**Trả lời**: Công cụ tìm kiếm chỉ quét tiêu đề bài viết, không quét toàn bộ thân bài. Nếu từ khóa bạn nhập không xuất hiện trong tiêu đề chương hoặc mục nhỏ, kết quả sẽ không hiển thị.

**Giải pháp**:

- Thử sử dụng các từ khóa chung thường xuất hiện trong tiêu đề chương
- Xem mục lục tổng quan để định vị chương có liên quan
- Sử dụng tính năng tìm kiếm nội bộ trang của trình duyệt (Ctrl+F / Cmd+F)

### Q2: Kết quả tìm kiếm trả về quá nhiều thì làm thế nào?

**Trả lời**: Hãy thu hẹp phạm vi bằng cách dùng từ khóa cụ thể hơn hoặc kết hợp nhiều từ khóa cách nhau bởi khoảng trắng.

**Ví dụ**:

❌ Cấu hình → Quá nhiều kết quả  
✅ Feishu Cấu hình → Kết quả tập trung và chính xác hơn  

### Q3: Kết quả tìm kiếm quá ít hoặc không có kết quả?

**Trả lời**: Hãy thử các cách khắc phục sau:

1. **Sử dụng từ khóa ngắn hơn**

   ```text
   ❌ Cách thiết lập cấu hình bot Feishu → Có thể không thấy
   ✅ Feishu → Có kết quả ngay
   ```

2. **Kiểm tra lỗi chính tả**

   ```text
   ❌ Skils → Viết sai chính tả
   ✅ Skills → Đúng từ khóa
   ```

3. **Sử dụng từ đồng nghĩa**

   ```text
   Lỗi = Sự cố = Vấn đề
   Cấu hình = Thiết lập = Cài đặt
   ```

### Q4: Tốc độ tìm kiếm bị chậm?

**Trả lời**: Ở lần tải trang đầu tiên, trình duyệt cần tải tệp chỉ mục tìm kiếm nhẹ (chỉ khoảng vài KB), sau đó tốc độ tìm kiếm sẽ đạt tức thì. Nếu vẫn cảm thấy chậm, bạn vui lòng:

1. Tải lại trang (F5 hoặc Cmd+R)
2. Xóa bộ nhớ đệm (cache) của trình duyệt
3. Kiểm tra lại đường truyền mạng

---

## 📚 Tài nguyên liên quan

- [Mục lục giáo trình](../README.md#mục-lục-giáo-trình)
- [Lộ trình học tập](../LEARNING-PATH.md)
- [Tra cứu sự cố thường gặp](../appendix/E-common-problems.md)

---

**Cập nhật lần cuối**: 14/02/2026  

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/M-search-guide/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp sẵn công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi qua lại giữa các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
