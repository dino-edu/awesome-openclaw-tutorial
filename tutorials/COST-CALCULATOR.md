# Bảng Tính Chi Phí Vận Hành

Tìm hiểu chi phí thực tế khi sử dụng OpenClaw để lựa chọn phương án triển khai tối ưu nhất cho bạn.

> 💡 **Tỷ giá tham khảo quy đổi**: 1 USD ≈ 25.400 VND | 1 RMB (NDT) ≈ 3.500 VND.

---

## 💰 Chi Phí Triển Khai Cục Bộ (Local)

### Đã có máy tính Mac
- **Chi phí phần cứng**: 0 đ (sử dụng thiết bị sẵn có)
- **Chi phí phần mềm**: 0 đ (mã nguồn mở hoàn toàn miễn phí)
- **Chi phí API**: 0 - 30 NDT/tháng (~0 - 4,2 USD / 0 - 105.000 VND/tháng)
  - DeepSeek: 5 - 30 NDT/tháng (~0,7 - 4,2 USD / 17.500 - 105.000 VND/tháng)
  - Kimi: 10 - 50 NDT/tháng (~1,4 - 7 USD / 35.000 - 175.000 VND/tháng)
  - Claude: 50 - 200 NDT/tháng (~7 - 28 USD / 175.000 - 700.000 VND/tháng)

**✅ Ưu thế**:
- Bảo mật quyền riêng tư tuyệt đối, dữ liệu lưu hoàn toàn cục bộ trên máy
- Đầy đủ tính năng nhất (tích hợp sâu với lịch Calendar, ghi chú Notes, Apple Reminders...)
- Tốc độ phản hồi cực nhanh, độ trễ thấp
- Không tốn chi phí thuê máy chủ hàng tháng

---

## ☁️ Chi Phí Triển Khai Đám Mây (Cloud)

### Tencent Cloud Lighthouse
- **Máy chủ**: ~20 NDT/tháng (~2,8 USD / 70.000 VND/tháng)
- **Băng thông**: 20 Mbps
- **Chi phí API**: 5 - 30 NDT/tháng (~0,7 - 4,2 USD / 17.500 - 105.000 VND/tháng)
- **Tổng cộng**: 25 - 50 NDT/tháng (~3,5 - 7 USD / 87.500 - 175.000 VND/tháng)

**✅ Ưu thế**:
- Chi phí rất kinh tế
- Hỗ trợ triển khai 1-click tiện lợi
- Hoạt động ổn định, đáng tin cậy
- Rất phù hợp cho người dùng Lark / Feishu

### Volcengine (ByteDance Volcano Engine)
- **Máy chủ**: ~9,9 NDT/tháng (~1,4 USD / 35.000 VND/tháng)
- **Băng thông**: 10 Mbps
- **Chi phí API**: 5 - 30 NDT/tháng (~0,7 - 4,2 USD / 17.500 - 105.000 VND/tháng)
- **Tổng cộng**: 15 - 40 NDT/tháng (~2,1 - 5,6 USD / 52.500 - 140.000 VND/tháng)

**✅ Ưu thế**:
- Mức giá thấp nhất
- Tích hợp rất tốt với Lark / Feishu
- Thân thiện cho người mới bắt đầu

### Alibaba Cloud (Aliyun)
- **Máy chủ**: Mức giá tương đương Lighthouse (~20 NDT/tháng ~ 2,8 USD / 70.000 VND)
- **Băng thông**: Lựa chọn theo nhu cầu
- **Chi phí API**: 5 - 30 NDT/tháng (~0,7 - 4,2 USD / 17.500 - 105.000 VND/tháng)
- **Tổng cộng**: Khoảng 25 - 50 NDT/tháng (~3,5 - 7 USD / 87.500 - 175.000 VND/tháng)

**✅ Ưu thế**:
- Hỗ trợ Image / Template 1-click
- Dịch vụ máy chủ ổn định chuẩn doanh nghiệp

---

## 🎯 Chi Phí Theo Từng Kịch Bản Sử Dụng

### Sử dụng nhẹ (khoảng 10 tin nhắn/ngày)
- **Chi phí API**: 5 - 10 NDT/tháng (~0,7 - 1,4 USD / 17.500 - 35.000 VND/tháng)
- **Tổng chi phí**: 5 - 40 NDT/tháng (~0,7 - 5,6 USD / 17.500 - 140.000 VND/tháng, đã bao gồm máy chủ)

### Sử dụng vừa phải (khoảng 50 tin nhắn/ngày)
- **Chi phí API**: 15 - 30 NDT/tháng (~2,1 - 4,2 USD / 52.500 - 105.000 VND/tháng)
- **Tổng chi phí**: 15 - 60 NDT/tháng (~2,1 - 8,4 USD / 52.500 - 210.000 VND/tháng, đã bao gồm máy chủ)

### Sử dụng nhiều / Chuyên sâu (trên 200 tin nhắn/ngày)
- **Chi phí API**: 50 - 150 NDT/tháng (~7 - 21 USD / 175.000 - 525.000 VND/tháng)
- **Tổng chi phí**: 50 - 180 NDT/tháng (~7 - 25,2 USD / 175.000 - 630.000 VND/tháng, đã bao gồm máy chủ)

---

## 💡 Mẹo Tiết Kiệm Chi Phí Vận Hành

### 1. Sử dụng các mô hình nội địa tối ưu chi phí
- **DeepSeek**: Rẻ hơn GPT-4 tới 95% nhưng năng lực suy luận và lập trình tương đương
- **Kimi**: Xử lý ngữ cảnh văn bản dài cực kỳ tiết kiệm chi phí
- **GLM-4 / Qwen**: Hiệu năng trên giá thành (P/P) rất cao

👉 **Mức tiết kiệm**: 50% - 70%

### 2. Kết hợp linh hoạt nhiều mô hình (Model Routing)
- Trò chuyện và tác vụ thường ngày: Sử dụng DeepSeek
- Xử lý tài liệu dài: Sử dụng Kimi
- Lập luận logic phức tạp: Sử dụng Claude 3.5 Sonnet hoặc GPT-4

👉 **Mức tiết kiệm**: ~50%

### 3. Phương án tài khoản nhóm / Dùng chung
- Nhiều người dùng chia sẻ một cổng Gateway
- Phân bổ chi phí API theo hạn mức nhóm
- Rất phù hợp cho đội nhóm hoặc doanh nghiệp nhỏ

👉 **Mức tiết kiệm**: Lên đến 80% (trong trường hợp sử dụng nhiều)

### 4. Tối ưu hóa câu lệnh Prompt & Bộ nhớ đệm (Cache)
- Rút gọn prompt hệ thống, loại bỏ thông tin dư thừa
- Tránh các yêu cầu trùng lặp
- Bật tính năng Prompt Caching của mô hình

👉 **Mức tiết kiệm**: 20% - 30%

---

## 📊 Bảng So Sánh Chi Phí Tổng Hợp

| Phương án | Chi phí hàng tháng | Chi phí hàng năm | Kịch bản phù hợp |
|-----------|--------------------|-------------------|------------------|
| **Cục bộ (có máy Mac)** | 0 - 30 NDT (~0 - 4,2 USD / 0 - 105.000 VND) | 0 - 360 NDT (~0 - 50 USD / 0 - 1.260.000 VND) | Ưu tiên bảo mật dữ liệu riêng tư |
| **Đám mây (Tencent Cloud)** | 25 - 50 NDT (~3,5 - 7 USD / 87.500 - 175.000 VND) | 300 - 600 NDT (~42 - 84 USD / 1.050.000 - 2.100.000 VND) | Khuyên dùng cho người mới |
| **Đám mây (Volcengine)** | 15 - 40 NDT (~2,1 - 5,6 USD / 52.500 - 140.000 VND) | 180 - 480 NDT (~25 - 67 USD / 630.000 - 1.680.000 VND) | Người dùng hệ sinh thái Lark / Feishu |
| **Đám mây (Alibaba Cloud)** | 25 - 50 NDT (~3,5 - 7 USD / 87.500 - 175.000 VND) | 300 - 600 NDT (~42 - 84 USD / 1.050.000 - 2.100.000 VND) | Người dùng doanh nghiệp |

---

## 🎯 Gợi Ý Phương Án Khuyên Dùng

### Học sinh, sinh viên / Người dùng cá nhân
- **Phương án**: Triển khai cục bộ (nếu có Mac) hoặc Volcengine (nếu không có Mac)
- **Chi phí**: 0 - 40 NDT/tháng (~0 - 5,6 USD / 0 - 140.000 VND/tháng)
- **Mô hình khuyên dùng**: DeepSeek

### Lập trình viên / Kỹ sư phần mềm
- **Phương án**: Triển khai cục bộ + DeepSeek
- **Chi phí**: 5 - 30 NDT/tháng (~0,7 - 4,2 USD / 17.500 - 105.000 VND/tháng)
- **Mô hình khuyên dùng**: DeepSeek (code chính) + Claude / GPT-4 (tác vụ lập luận khó)

### Nhà sáng tạo nội dung (Content Creator)
- **Phương án**: Triển khai đám mây + Kimi
- **Chi phí**: 25 - 80 NDT/tháng (~3,5 - 11,2 USD / 87.500 - 280.000 VND/tháng)
- **Mô hình khuyên dùng**: Kimi (tài liệu dài, video script) + DeepSeek (tác vụ hàng ngày)

### Người dùng doanh nghiệp / Đội nhóm
- **Phương án**: Tencent Cloud / Aliyun + Phối hợp đa mô hình
- **Chi phí**: 50 - 200 NDT/tháng (~7 - 28 USD / 175.000 - 700.000 VND/tháng)
- **Mô hình khuyên dùng**: DeepSeek + Kimi + Claude / GPT-4
- **Ưu thế**: Tài khoản chuyên biệt, chia sẻ nội bộ cả nhóm

---

## 🔍 Ví Dụ Tính Toán Chi Phí Thực Tế

### Ví dụ 1: Cá nhân sử dụng nhẹ
- **Hình thức triển khai**: Cục bộ trên Mac
- **Lựa chọn mô hình**: DeepSeek
- **Khối lượng tin nhắn**: 10 tin nhắn/ngày
- **Chi phí tháng**: ~5 NDT (~0,7 USD / 17.500 VND)
- **Chi phí năm**: ~60 NDT (~8,4 USD / 210.000 VND)

### Ví dụ 2: Cá nhân sử dụng vừa phải
- **Hình thức triển khai**: Volcengine
- **Lựa chọn mô hình**: DeepSeek
- **Khối lượng tin nhắn**: 50 tin nhắn/ngày
- **Chi phí tháng**: 25 NDT (máy chủ) + 15 NDT (API) = 40 NDT (~5,6 USD / 140.000 VND)
- **Chi phí năm**: ~480 NDT (~67 USD / 1.680.000 VND)

### Ví dụ 3: Sử dụng chuyên sâu / Nhu cầu cao
- **Hình thức triển khai**: Tencent Cloud Lighthouse
- **Lựa chọn mô hình**: DeepSeek (hàng ngày) + Claude / GPT-4 (tác vụ phức tạp)
- **Khối lượng tin nhắn**: 200 tin nhắn/ngày
- **Chi phí tháng**: 20 NDT (máy chủ) + 100 NDT (API) = 120 NDT (~16,8 USD / 420.000 VND)
- **Chi phí năm**: ~1.440 NDT (~201 USD / 5.040.000 VND)

---

## 💎 Tổng Kết

Sử dụng các mô hình nội địa tối ưu (DeepSeek, Kimi, Qwen) có thể giúp bạn tiết kiệm **50% - 70%** chi phí vận hành.

Với đại đa số người dùng:
- **Chi phí thấp nhất**: 0 đ/tháng (Triển khai cục bộ trên Mac + Free API / DeepSeek)
- **Chi phí khuyên dùng**: 15 - 40 NDT/tháng (~52.500 - 140.000 VND/tháng, Đám mây + DeepSeek)
- **Trải nghiệm trọn vẹn**: 25 - 60 NDT/tháng (~87.500 - 210.000 VND/tháng, Đám mây + Đa mô hình)

---

**Cập nhật lần cuối**: Ngày 13 tháng 03 năm 2026  
**Phiên bản áp dụng**: OpenClaw 2026.3.12
