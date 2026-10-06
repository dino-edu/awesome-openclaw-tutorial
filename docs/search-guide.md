# 🔍 Hướng dẫn Sử dụng Tính năng Tìm kiếm

> Tính năng tìm kiếm trên trang tài liệu này tập trung vào tìm kiếm theo tiêu đề đề mục, giúp bạn định vị nhanh chóng các chương và nội dung cần tra cứu.

---

## 📖 Cơ chế Tìm kiếm

### Phạm vi tìm kiếm

Công cụ tìm kiếm trên trang **chỉ quét tiêu đề các đề mục trong tài liệu**, không tìm kiếm toàn bộ nội dung chi tiết trong bài viết. Ưu điểm của thiết kế này:

- ✅ **Chính xác hơn**: Dẫn thẳng tới đúng đề mục và chương liên quan
- ✅ **Nhanh chóng hơn**: Tốc độ phản hồi tức thì
- ✅ **Rõ ràng hơn**: Danh sách kết quả gọn gàng, trực quan và dễ nắm bắt

### Các nội dung được hỗ trợ

Công cụ tìm kiếm bao phủ toàn bộ tiêu đề của:

- 📚 **15 chương nội dung chính**: Tất cả các tiêu đề từ Chương 1 đến Chương 15
- 📖 **Các phụ lục**: Tiêu đề của các Phụ lục từ A đến N
- 💡 **Tài liệu ví dụ**: Tiêu đề tài liệu trong thư mục `examples/`
- 📄 **Các trang chuyên đề khác**: README, Lộ trình học tập (LEARNING-PATH)...

---

## 🎯 Mẹo Tìm kiếm Hiệu quả

### 1. Sử dụng từ khóa ngắn gọn

**Khuyên dùng**:
✅ `Feishu` hoặc `Lark`  
✅ `Cấu hình`  
✅ `Skills`  
✅ `Lỗi` hoặc `Sự cố`  
✅ `API`  

**Không khuyên dùng**:
❌ `Làm thế nào để cấu hình bot Lark` (quá dài dòng)  
❌ `Tôi muốn biết cách cài đặt` (văn phong khẩu ngữ)  

### 2. Tìm kiếm bằng tiếng Việt

Hỗ trợ gõ từ khóa tiếng Việt có dấu hoặc không dấu:

```text
Cấu hình → Tìm tất cả các tiêu đề có chứa từ "Cấu hình"
Lỗi → Tìm tất cả các tiêu đề có chứa từ "Lỗi"
Bộ nhớ → Tìm tất cả các tiêu đề có chứa từ "Bộ nhớ"
```

### 3. Tìm kiếm bằng thuật ngữ kỹ thuật tiếng Anh

Hỗ trợ đầy đủ các thuật ngữ tiếng Anh:

```text
API → Tìm tất cả các tiêu đề chứa "API"
Skills → Tìm tất cả các tiêu đề chứa "Skills"
Bot → Tìm tất cả các tiêu đề chứa "Bot"
Gateway → Tìm tất cả các tiêu đề chứa "Gateway"
```

### 4. Tìm kiếm kết hợp nhiều từ khóa

Dùng dấu cách giữa các từ khóa để thu hẹp kết quả:

```text
Lark Cấu hình → Tìm các tiêu đề chứa đồng thời "Lark" và "Cấu hình"
API Lỗi → Tìm các tiêu đề chứa cả "API" và "Lỗi"
```

### 5. Khớp tiền tố (Prefix Matching)

Hỗ trợ tìm kiếm theo tiền tố của từ:

```text
Cấu → Có thể khớp với "Cấu hình"
Ski → Có thể khớp với "Skills"
Mem → Có thể khớp với "Memory"
```

---

## 💡 Ví dụ Tìm kiếm Cụ thể

### Ví dụ 1: Tìm nội dung liên quan đến Lark / Feishu

**Từ khóa**: `Feishu` hoặc `Lark`

**Kết quả dự kiến**:
- Chương 9: Tích hợp Đa Nền tảng (Lark/Feishu, DingTalk, WeCom, Telegram, Discord)
- Cấu hình Bot Lark / Feishu
- Danh sách Kiểm tra Cấu hình Bot Lark / Feishu
- Và các mục liên quan...

### Ví dụ 2: Tìm nội dung về Cấu hình

**Từ khóa**: `Cấu hình`

**Kết quả dự kiến**:
- Chương 2: Cài đặt và Môi trường
- Chương 11: Cấu hình Nâng cao
- Phụ lục H: Mẫu Tệp Cấu hình Chuẩn
- Hướng dẫn Cấu trúc Tệp Cấu hình...

### Ví dụ 3: Tìm cách khắc phục sự cố

**Từ khóa**: `Lỗi` hoặc `Sự cố`

**Kết quả dự kiến**:
- Phụ lục E: Tra cứu Lỗi Thường gặp
- Các mục hướng dẫn chẩn đoán và khắc phục sự cố...

### Ví dụ 4: Tìm nội dung về Skills

**Từ khóa**: `Skills`

**Kết quả dự kiến**:
- Chương 8: Mở rộng Skills
- Phụ lục B: Danh mục Skills Khuyên dùng
- Hệ sinh thái Skills của OpenClaw...

---

## 🚀 Các Tính năng Nâng cao

### Tìm kiếm thời gian thực (Real-time Search)

Sau khi bạn gõ từ 2 ký tự trở lên, hệ thống sẽ tự động quét và trả về kết quả (độ trễ khoảng 300ms) mà không cần phải nhấn phím Enter.

### Đánh dấu nổi bật (Highlighting)

Trong danh sách kết quả trả về, các từ khóa khớp với nội dung tìm kiếm sẽ được làm nổi bật với nền màu vàng nhạt giúp bạn dễ nhìn thấy.

### Nhãn phân loại tài liệu

Mỗi kết quả đều đi kèm nhãn danh mục nguồn:
- 📚 Tài liệu - Các bài hướng dẫn trong thư mục `docs/`
- 📖 Phụ lục - Các tài liệu bổ trợ trong thư mục `appendix/`
- 💡 Ví dụ - Các file mẫu cấu hình trong thư mục `examples/`

### Tìm kiếm trực tiếp qua tham số URL

Bạn có thể tạo liên kết tìm kiếm nhanh bằng tham số query URL:

```yaml
https://your-site.com/search?q=Feishu
```

---

## ❓ Câu hỏi Thường gặp

### Q1: Vì sao tôi tìm một đoạn văn bản mà không thấy kết quả?

**Trả lời**: Hệ thống chỉ tìm kiếm trên tiêu đề đề mục, không tìm trên nội dung chi tiết từng đoạn văn bản. Nếu từ khóa không xuất hiện trong các dòng tiêu đề, kết quả sẽ không hiển thị.

**Cách xử lý**:
- Thử tìm bằng các danh từ kỹ thuật lớn có khả năng nằm ở tiêu đề
- Xem lướt bảng mục lục chính để định vị chương phù hợp
- Sử dụng phím tắt tìm kiếm trên trang của trình duyệt (`Ctrl+F` hoặc `Cmd+F`) khi đang ở trong bài viết

### Q2: Kết quả tìm kiếm trả về quá nhiều thì làm thế nào?

**Trả lời**: Hãy kết hợp từ 2 từ khóa trở lên để thu hẹp phạm vi.

**Ví dụ**:
❌ `Cấu hình` → Kết quả quá rộng  
✅ `Feishu Cấu hình` → Kết quả chính xác và thu hẹp đúng nội dung cần tìm  

### Q3: Không tìm thấy kết quả hoặc kết quả quá ít?

**Trả lời**: Hãy thử các cách sau:

1. **Rút ngắn từ khóa tìm kiếm**
   ```text
   ❌ Cách thiết lập bot feishu nhận tin nhắn → Có thể không thấy kết quả
   ✅ Feishu → Có ngay kết quả liên quan
   ```

2. **Kiểm tra chính tả**
   ```text
   ❌ Skils → Sai chính tả
   ✅ Skills → Chuẩn xác
   ```

3. **Dùng từ đồng nghĩa**
   ```text
   Sự cố = Lỗi = Vấn đề = Troubleshooting
   Cấu hình = Thiết lập = Config
   ```

### Q4: Tốc độ tải tìm kiếm có bị chậm không?

**Trả lời**: Ở lần tải đầu tiên, trình duyệt cần tải tệp chỉ mục tìm kiếm (chỉ khoảng vài chục KB), từ các lần tìm sau kết quả sẽ hiện ra ngay lập tức. Nếu thấy chậm bất thường:

1. Tải lại trang (F5 hoặc `Cmd+R`)
2. Xóa cache trình duyệt
3. Kiểm tra lại đường truyền mạng Internet

---

## 📚 Tài liệu Tham khảo Liên quan

- [Bảng Mục lục Giáo trình](../README.md#mục-lục-toàn-bộ-giáo-trình)
- [Lộ trình Học tập Toàn diện](../LEARNING-PATH.md)
- [Tra cứu Lỗi Thường gặp](../appendix/E-common-problems.md)

---

**Cập nhật lần cuối**: 14/02/2026
