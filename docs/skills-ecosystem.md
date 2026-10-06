# Hệ sinh thái Skills của OpenClaw

## 📊 Thống kê Phân loại Skills (Tháng 02/2026)

### 📦 Skills tích hợp sẵn (Built-in Skills)

**Số lượng**: 49 skills  
**Vị trí**: Đi kèm mặc định trong gói cài đặt OpenClaw  
**Đặc điểm**: Dùng được ngay lập tức, không cần cài đặt thêm  
**Phân loại**: Quản lý tệp tin, quản lý tri thức, quản lý lịch trình, tự động hóa...

**Mô tả**: Những Skills này đã nằm sẵn trong mã nguồn OpenClaw khi cài đặt, bạn có thể gọi trực tiếp trong phiên làm việc mà không cần thiết lập gì thêm.

**Lệnh kiểm tra**:
```bash
openclaw skills list --builtin
```

---

### 🏪 Skills chính thức trên ClawHub (Official Skills)

**Số lượng**: 93 skills (đã bao gồm 49 skills tích hợp sẵn)  
**Vị trí**: Kho lưu trữ chính thức ClawHub  
**Đặc điểm**: Được đội ngũ OpenClaw trực tiếp bảo trì, bảo đảm chất lượng và độ an toàn  
**Lệnh cài đặt**: `openclaw skills install <skill-name>`

**Mô tả**: ClawHub là chợ tiện ích mở rộng Skills chính thức của OpenClaw, cung cấp các bộ kỹ năng đã trải qua quy trình kiểm thử và rà soát bảo mật nghiêm ngặt.

**Cách tra cứu và sử dụng**:
```bash
# Tìm kiếm Skills
openclaw skills search <từ_khóa>

# Cài đặt Skill vào không gian làm việc
openclaw skills install <skill-name>

# Xem danh sách Skills khả dụng
openclaw skills list --eligible
```

---

### 🌐 Skills do Cộng đồng phát triển (Community Skills)

**Số lượng**: Hơn 1.715 skills  
**Vị trí**: Đóng góp trên GitHub bởi cộng đồng mã nguồn mở toàn cầu  
**Đặc điểm**: Năng lực phong phú, phủ khắp nhiều tác vụ ngách, đòi hỏi người dùng chọn lọc  
**Phương thức cài đặt**: Cài đặt thủ công hoặc kéo trực tiếp từ GitHub

**Mô tả**: Các bộ kỹ năng do các nhà phát triển trong cộng đồng xây dựng, giải quyết vô vàn kịch bản thực tế. Chất lượng giữa các repo có thể khác nhau, vì vậy bạn nên xem trước mã nguồn và tài liệu hướng dẫn trước khi sử dụng.

**Cách cài đặt**:
```bash
# Clone trực tiếp từ GitHub vào thư mục skills của workspace
git clone https://github.com/user/skill-name skills/skill-name

# Hoặc cài đặt qua ClawHub nếu tác giả đã phát hành
openclaw skills install community/skill-name
```

---

### 🏢 Skills dành cho Doanh nghiệp (Enterprise Skills)

**Số lượng**: Hơn 1.715 skills  
**Đặc điểm**: Đạt chuẩn doanh nghiệp, bao phủ giải pháp chuyên sâu cho hơn 20 ngành nghề  
**Đối tượng**: Khách hàng tổ chức, doanh nghiệp, ứng dụng chuyên ngành

**Mô tả**: Hệ sinh thái kỹ năng cấp doanh nghiệp được thiết kế riêng cho các kịch bản sản xuất kinh doanh lớn, tích hợp sẵn các gói giải pháp theo từng ngành dọc.

**Các lĩnh vực bao phủ**:
- Tài chính, ngân hàng, bảo hiểm
- Y tế, dược phẩm, chăm sóc sức khỏe
- Giáo dục và đào tạo trực tuyến
- Bán lẻ, thương mại điện tử, chuỗi cung ứng
- Sản xuất, logistics, chăm sóc khách hàng tự động, marketing đa kênh

---

## 📈 Tổng hợp số liệu

| Phân loại | Số lượng | Mức độ kiểm duyệt | Mức độ khuyến nghị |
|---|---|---|---|
| Skills tích hợp sẵn | 49 | ⭐⭐⭐⭐⭐ | Bắt buộc nắm vững |
| Skills chính thức ClawHub | 93 | ⭐⭐⭐⭐⭐ | Khuyến nghị sử dụng |
| Skills từ Cộng đồng | 1.715+ | ⭐⭐⭐ | Chọn lọc theo nhu cầu |
| Skills Cấp Doanh nghiệp | 1.715+ | ⭐⭐⭐⭐⭐ | Dành cho khối doanh nghiệp |
| **Tổng cộng** | **1.800+** | - | - |

---

## 🎯 Gợi ý Lộ trình Cài đặt

### Top Skills cốt lõi nên trang bị

Chi tiết xem tại [Chương 8: Mở rộng Skills](03-advanced/08-skills-extension.md).

### Lời khuyên cho người mới bắt đầu

1. **Khởi đầu từ các Skills tích hợp sẵn**: Làm quen với quy trình thao tác và cơ chế phản hồi cơ bản.
2. **Cài đặt thêm các Skills chính thức**: Mở rộng các năng lực xử lý nâng cao đã được kiểm chứng.
3. **Bổ sung Skills cộng đồng theo đúng bài toán thực tế**: Chỉ tìm kiếm và cài đặt khi gặp bài toán cụ thể mà hệ thống tích hợp chưa có.

---

## 💡 Thực hành Tối ưu

### Nguyên tắc chọn lựa Skills

1. **Ưu tiên giải pháp tích hợp sẵn**: Ổn định, an toàn và đồng bộ hoàn hảo với phiên bản OpenClaw hiện hành.
2. **Kế đến là Skills chính thức từ ClawHub**: Đảm bảo cập nhật thường xuyên và tài liệu đầy đủ.
3. **Thận trọng với Skills từ cộng đồng**: Luôn đọc kỹ tệp `SKILL.md` và mã nguồn trước khi cài đặt.
4. **Áp dụng Skills doanh nghiệp khi vận hành quy mô lớn**: Hưởng lợi từ sự hỗ trợ kỹ thuật chuyên nghiệp.

### Tránh cài đặt tràn lan

- ❌ Không cài hàng loạt hàng chục Skills cùng lúc khi chưa có nhu cầu sử dụng thực tế.
- ✅ Cài đặt có chọn lọc, mở rộng từng bước theo tiến độ công việc.
- ✅ Định kỳ dọn dẹp các Skills không còn sử dụng để giữ ngữ cảnh gọn gàng.
- ✅ Thường xuyên kiểm tra và cập nhật phiên bản mới của các Skills đang dùng.

---

## 🔗 Liên kết Tham khảo Liên quan

- [Chương 8: Mở rộng Skills](03-advanced/08-skills-extension.md) - Hướng dẫn chi tiết cách tìm kiếm, cài đặt và tự viết Custom Skills
- [Chợ ứng dụng ClawHub](https://clawhub.ai) - Chợ Skills chính thức của OpenClaw
- [Tài liệu Phát triển Skills](https://docs.openclaw.ai/skills) - Hướng dẫn tự xây dựng Skills cho riêng bạn

---

**Cập nhật lần cuối**: 14/02/2026  
**Nguồn dữ liệu**: Thống kê chính thức từ OpenClaw
