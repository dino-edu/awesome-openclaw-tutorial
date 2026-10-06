> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 4: Quản lý Tệp tin Cục bộ

> Một trong những tính năng mạnh mẽ nhất của OpenClaw là khả năng truy cập và quản lý các tệp tin trực tiếp trên máy tính của bạn — điều mà các dịch vụ AI trực tuyến thông thường hoàn toàn không thể làm được.

## Điều hướng nhanh

- 🔍 [Tìm kiếm tệp thông minh](#41-tìm-kiếm-tệp-thông-minh)
- 📦 [Xử lý tệp hàng loạt](#42-xử-lý-tệp-hàng-loạt)
- 📁 [Tự động sắp xếp tệp](#43-tự-động-sắp-xếp-tệp)
- 🧹 [Dọn dẹp và tối ưu hóa ổ cứng](#44-dọn-dẹp-và-tối-ưu-hóa-ổ-cứng)

---

## 4.1 Tìm kiếm tệp thông minh

### Tại sao bạn cần tìm kiếm thông minh?

Cách tìm kiếm tệp truyền thống chỉ dựa vào tên tệp, nhưng thực tế bạn rất hay gặp phải các tình huống:
- ❌ Quên mất tên tệp, chỉ nhớ mang máng nội dung bên trong
- ❌ Quá nhiều tệp tin, không nhớ đã lưu trong thư mục nào
- ❌ Cần tìm kiếm đồng thời nhiều định dạng tệp khác nhau
- ❌ Cần lọc tệp dựa trên ngữ cảnh và nội dung chi tiết

**Tìm kiếm thông minh của OpenClaw giúp bạn**:
- ✅ Tìm kiếm trực tiếp theo nội dung bên trong tệp
- ✅ Hiểu các câu mô tả bằng ngôn ngữ tự nhiên
- ✅ Tìm kiếm xuyên suốt qua nhiều thư mục
- ✅ Tự động lọc và sắp xếp kết quả thông minh

### Tình huống 1: Tìm tệp thất lạc

**Trường hợp thực tế**: Tìm hóa đơn

> Trong máy tính của tôi có một đống hóa đơn lưu trữ rất lộn xộn. Tôi quên mất hóa đơn mua máy chạy bộ là tệp nào.
> Theo cách cũ, tôi sẽ phải bấm mở từng ảnh một để xem. Thật sự việc này vô cùng tốn thời gian và máy móc.

![Thư mục hóa đơn lộn xộn - Nỗi đau của quản lý tệp truyền thống](https://upload.maynor1024.live/file/1770176215000_image_4.jpg)

**Cách truyền thống**:
1. Mở thư mục
2. Nhấp mở từng hình ảnh
3. Xem nội dung bên trong
4. Tìm tệp đích
5. Thời gian tiêu tốn: 10 - 30 phút

**Cách dùng OpenClaw**:

Tôi: Tìm giúp tôi một hóa đơn trên máy tính, chi tiết bên trong có mục mua máy chạy bộ, sau đó gửi tệp hóa đơn đó qua cho tôi.

![Tìm kiếm thông minh OpenClaw - Tìm đúng tệp đích nhờ hiểu ngữ nghĩa](https://upload.maynor1024.live/file/1770176217951_image_5.jpg)

**Quy trình OpenClaw thực thi**:
1. 🔍 Quét toàn bộ các tệp hình ảnh
2. 📄 Dùng OCR nhận diện văn bản trong ảnh
3. 🎯 Khớp từ khóa "máy chạy bộ"
4. 📤 Gửi lại tệp tin đã tìm thấy

![Chi tiết hóa đơn tìm thấy - Khớp chính xác nhu cầu người dùng](https://upload.maynor1024.live/file/1770176224257_image_6.jpg)

**Kết quả**:
- ⏱️ Thời gian tiêu tốn: 30 - 60 giây
- ✅ Độ chính xác: 100%
- 😊 Trải nghiệm: Vô cùng tiện lợi và mượt mà!

### Ví dụ câu lệnh tìm kiếm

#### Tìm theo nội dung

- Tìm giúp tôi các tệp PDF có chứa từ khóa "hợp đồng"
- Tìm kiếm tất cả tài liệu có nhắc đến "kế hoạch dự án"
- Tìm lại những ghi chú tôi đã viết về chủ đề AI

#### Tìm theo định dạng

- Lọc ra tất cả các hình ảnh định dạng PNG
- Tìm các tệp PDF vừa tải xuống gần đây
- Tìm kiếm toàn bộ bảng tính Excel trên máy

#### Tìm theo thời gian

- Tìm các tệp được chỉnh sửa trong 7 ngày gần nhất
- Tìm kiếm tài liệu được tạo vào tháng trước
- Lọc ra những tệp được tải xuống trong ngày hôm nay

#### Tìm theo dung lượng

- Lọc ra những tệp có dung lượng lớn hơn 100MB
- Tìm tất cả hình ảnh có kích thước dưới 1MB
- Liệt kê 10 tệp đang chiếm nhiều dung lượng ổ cứng nhất

#### Tìm kiếm kết hợp đa điều kiện

- Tìm các tệp ảnh chứa "hóa đơn" phát sinh trong vòng 1 tuần qua
- Tìm kiếm trong thư mục Downloads các tệp PDF có dung lượng trên 10MB
- Tìm trên Desktop những tài liệu Word đã được chỉnh sửa trong hôm nay

### Mẹo tìm kiếm hiệu quả

#### Mẹo 1: Mô tả nội dung thay vì cố nhớ tên tệp

- **❌ Câu lệnh chưa tốt**: Tìm giúp tôi tệp IMG_1234.jpg
- **✅ Câu lệnh hiệu quả**: Tìm giúp tôi bức ảnh tôi chụp ở bãi biển vào năm ngoái

#### Mẹo 2: Cung cấp ngữ cảnh cụ thể

- **❌ Câu lệnh chưa tốt**: Tìm hóa đơn
- **✅ Câu lệnh hiệu quả**: Tìm hóa đơn mua máy chạy bộ tháng trước của tôi, hình như nằm trong thư mục Downloads

#### Mẹo 3: Giới hạn phạm vi tìm kiếm

- **❌ Câu lệnh chưa tốt**: Tìm tất cả tệp
- **✅ Câu lệnh hiệu quả**: Tìm tất cả các tệp PDF nằm trong thư mục Documents

#### Mẹo 4: Yêu cầu sắp xếp kết quả

- **❌ Câu lệnh chưa tốt**: Tìm ảnh
- **✅ Câu lệnh hiệu quả**: Tìm 10 bức ảnh được chỉnh sửa gần đây nhất, sắp xếp theo thứ tự thời gian

### Bài tập thực hành

- **Bài tập 1: Tìm ảnh**: Tìm giúp tôi tất cả ảnh selfie trên máy tính
- **Bài tập 2: Tìm tài liệu**: Tìm các tài liệu Word có nội dung "tổng kết năm"
- **Bài tập 3: Tìm tệp tải về**: Tìm tất cả tệp PDF tôi đã tải về gần đây

---

## 4.2 Xử lý tệp hàng loạt

### Tình huống 2: Sắp xếp hóa đơn thanh toán hoàn ứng

**Trường hợp thực tế**: Tự động điền bảng kê hoàn ứng chi phí

> Bộ phận kế toán công ty có quy định rất nghiêm ngặt: toàn bộ hóa đơn phải được kê khai chi tiết vào một bảng mẫu Excel, sau đó nộp kèm hóa đơn gốc và tệp Excel này cho kế toán.
> 
> Trước đây, dù không đến mức phải gõ tay từng chữ, nhưng tôi vẫn phải tải từng hóa đơn lên ChatGPT hoặc các công cụ AI khác để nhờ trích xuất thông tin.

**Cách truyền thống**:
1. Mở ChatGPT
2. Tải từng ảnh hóa đơn lên (lần lượt từng tấm)
3. Yêu cầu AI trích xuất thông tin
4. Sao chép kết quả vào Excel
5. Lặp lại N lần
6. Thời gian tiêu tốn: 30 - 60 phút

**Cách dùng OpenClaw**:

Tôi: Tôi muốn bạn giúp tôi tổng hợp toàn bộ hóa đơn trong thư mục hóa đơn tháng 1 cục bộ, điền theo đúng cấu trúc mẫu của tệp bang_ke_hoan_ung.xlsx trong thư mục Downloads, rồi gửi lại bảng tính đã điền hoàn chỉnh cho tôi.

![Xử lý hóa đơn hàng loạt - Tự động phân loại và đổi tên](https://upload.maynor1024.live/file/1770176222217_image_7.jpg)

**Quy trình OpenClaw thực thi**:
1. 📁 Đọc thư mục chứa hóa đơn
2. 🔍 Nhận diện toàn bộ ảnh hóa đơn
3. 📄 Dùng OCR trích xuất thông tin (ngày tháng, số tiền, đơn vị bán hàng, v.v.)
4. 📊 Đọc tệp mẫu Excel
5. ✍️ Điền dữ liệu chuẩn xác theo cấu trúc bảng mẫu
6. 💾 Lưu tệp mới hoàn chỉnh
7. 📤 Gửi lại tệp cho bạn

**Kết quả**:
- ⏱️ Thời gian tiêu tốn: 2 - 5 phút
- ✅ Độ chính xác: 95%+
- 😊 Trải nghiệm: Hoàn thành tự động chỉ với một câu lệnh!

### Ví dụ câu lệnh xử lý hàng loạt

#### Đọc hàng loạt

- Đọc toàn bộ các tệp PDF nằm trong thư mục Documents
- Trích xuất văn bản từ tất cả các hình ảnh được chọn
- Đọc dòng đầu tiên (tiêu đề cột) của toàn bộ bảng tính Excel

#### Trích xuất thông tin hàng loạt

- Trích xuất ngày tháng, số tiền, tên nhà cung cấp từ tất cả các hóa đơn
- Trích xuất họ tên, số điện thoại, email từ toàn bộ hồ sơ ứng viên (CV)
- Trích xuất thông tin bên A, bên B, giá trị hợp đồng từ toàn bộ tệp hợp đồng

#### Chuyển đổi định dạng hàng loạt

- Chuyển đổi toàn bộ tài liệu Word thành PDF
- Đổi định dạng tất cả ảnh PNG sang JPG
- Xuất toàn bộ bảng tính Excel thành tệp CSV

#### Tổng hợp dữ liệu hàng loạt

- Tổng hợp thông tin từ tất cả hóa đơn vào một bảng tính Excel duy nhất
- Gom toàn bộ thông tin liên hệ thành một danh bạ chuẩn
- Tổng hợp biên bản các cuộc họp thành một bản tóm lược chung

### Ca thực chiến

#### Ca 1: Sắp xếp thông tin khách hàng

**Tình huống**:
- Có 100 tài liệu Word chứa hồ sơ khách hàng
- Cần trích xuất: Tên công ty, Người liên hệ, Điện thoại, Email
- Gom lại thành một bảng tính Excel

**Câu lệnh**:
> Giúp tôi trích xuất Tên công ty, Người liên hệ, Điện thoại và Email từ toàn bộ tài liệu Word trong thư mục "Ho_so_khach_hang", sau đó gom vào một bảng tính Excel và sắp xếp theo tên công ty.

**Kết quả**:
- Tự động trích xuất thông tin từ 100 tài liệu
- Tạo bảng tính Excel chuẩn mực
- Thời gian thực hiện: 5 - 10 phút

#### Ca 2: Trích xuất tóm tắt hàng loạt tệp PDF

**Tình huống**:
- Có 50 báo cáo PDF
- Cần trích xuất phần tóm tắt (Executive Summary) của từng báo cáo
- Gom thành một tài liệu tổng hợp duy nhất

**Câu lệnh**:
> Đọc toàn bộ các tệp PDF trong thư mục "Bao_cao", trích xuất phần tóm tắt của từng báo cáo (thường ở trang đầu tiên), gom thành một tài liệu Word và ghi chú rõ tên tệp nguồn tương ứng cho mỗi phần tóm tắt.

**Kết quả**:
- Tự động đọc 50 tệp PDF
- Trích xuất chính xác nội dung tóm tắt
- Xuất bản tài liệu tổng hợp đầy đủ nguồn dẫn

#### Ca 3: Nhận diện ảnh danh thiếp hàng loạt

**Tình huống**:
- Có 200 bức ảnh chụp danh thiếp
- Cần lấy thông tin liên hệ
- Lập thành danh bạ liên lạc

**Câu lệnh**:
> Nhận diện toàn bộ ảnh trong thư mục "Danh_thiep", trích xuất Họ tên, Công ty, Chức vụ, Số điện thoại, Email, rồi lập thành danh bạ Excel phân loại theo từng công ty.

**Kết quả**:
- Quét OCR 200 danh thiếp
- Tự động phân loại và chuẩn hóa
- Tạo danh bạ liên hệ bài bản

### Xử lý lỗi và dự phòng dữ liệu

#### Xử lý lỗi nhận diện
> Tôi: Hãy kiểm tra lại bảng tính Excel vừa tạo xem có lỗi nhận diện nào không, ví dụ như sai định dạng số điện thoại hoặc số tiền bất thường.

#### Xử lý thiếu thông tin
> Tôi: Một số hóa đơn có thể bị mờ hoặc thiếu thông tin. Nếu thiếu các trường bắt buộc, hãy liệt kê riêng ra để tôi bổ sung thủ công.

#### Xử lý sự cố định dạng tệp
> Tôi: Nếu gặp định dạng tệp không thể nhận diện được, hãy bỏ qua và báo lại tên tệp cho tôi để tôi xử lý riêng.

---

## 4.3 Tự động sắp xếp tệp

### Tình huống 3: Đổi tên tệp hàng loạt

**Trường hợp thực tế**: Đổi tên thư mời

> Bạn thiết kế gửi cho tôi một loạt thư mời qua WeChat, sau đó tôi tải toàn bộ về máy.
> Tải xong thì phát hiện vấn đề:
> Tên tệp nào cũng là dạng `WeChat_File_XXX.jpg`.
> Thật sự không thể biết tệp nào là thư mời của ai.

![Tệp thư mời lộn xộn - Tên tệp không theo chuẩn](https://upload.maynor1024.live/file/1770176232438_image_8.jpg)

**Cách truyền thống**:
1. Mở từng bức ảnh
2. Đọc nội dung xem tên khách mời là ai
3. Đổi tên tệp thủ công
4. Lặp lại N lần
5. Thời gian tiêu tốn: 20 - 30 phút

**Cách dùng OpenClaw**:

Tôi: Hãy để OpenClaw nhận diện tên người tương ứng bên trong từng thư mời, rồi đổi tên tệp bên ngoài theo định dạng: "Tên_người - Thu_moi.jpg".

![Sau khi đổi tên hàng loạt - Tên tệp rõ ràng, đúng chuẩn](https://upload.maynor1024.live/file/1770176231952_image_9.jpg)

**Quy trình OpenClaw thực thi**:
1. 📁 Đọc tất cả hình ảnh trong thư mục
2. 🔍 Nhận diện OCR tên người trong thư mời
3. ✍️ Tạo tên tệp chuẩn mới
4. 📝 Đổi tên hàng loạt trên ổ đĩa
5. ✅ Hoàn tất

**Kết quả**:
- ⏱️ Thời gian tiêu tốn: 1 - 2 phút
- ✅ Độ chính xác: 100%
- 😊 Trải nghiệm: Xong ngay chỉ với một câu lệnh!

### Ví dụ câu lệnh sắp xếp tệp

#### Đổi tên hàng loạt

- Đổi tên toàn bộ ảnh theo ngày chụp, định dạng: `YYYY-MM-DD_STT.jpg`
- Đổi tên tất cả tài liệu theo chủ đề nội dung bên trong
- Đổi tên toàn bộ tệp trong Downloads theo định dạng loại tệp

#### Phân loại tệp

- Phân loại các tệp ngoài Desktop vào từng thư mục tương ứng theo định dạng
- Gom các tệp trong thư mục Downloads vào các thư mục theo tháng/ngày tải về
- Phân loại ảnh chụp theo vị trí địa lý

#### Tối ưu hóa cấu trúc thư mục

- Giúp tôi sắp xếp lại thư mục dự án, phân loại theo từng mô-đun chức năng
- Tối ưu cấu trúc thư mục Documents để gọn gàng và dễ tra cứu hơn
- Gom toàn bộ tệp nằm rải rác vào đúng thư mục phù hợp

### Ca thực chiến

#### Ca 1: Dọn dẹp thư mục Downloads

**Tình huống**:
- Thư mục Downloads có hơn 500 tệp tin đủ loại nằm lẫn lộn
- Cần phân loại gọn gàng

**Câu lệnh**:
> Giúp tôi sắp xếp thư mục Downloads:
> 1. Phân loại theo định dạng (Documents, Images, Videos, Archives, v.v.)
> 2. Tạo các thư mục con tương ứng
> 3. Di chuyển tệp vào đúng thư mục
> 4. Xóa các tệp trùng lặp
> 5. Báo cáo lại kết quả sau khi hoàn thành

**Kết quả**:
```text
✅ Sắp xếp hoàn tất!

📊 Thống kê:
- Tài liệu: 120 tệp → Documents/
- Hình ảnh: 200 tệp → Images/
- Video: 50 tệp → Videos/
- Tệp nén: 30 tệp → Archives/
- Khác: 100 tệp → Others/

🗑️ Đã xóa tệp trùng lặp: 15 tệp
💾 Giải phóng dung lượng: 2.3GB
```

#### Ca 2: Tự động phân loại ảnh

**Tình huống**:
- Hơn 1.000 bức ảnh chụp cần sắp xếp
- Phân loại theo ngày và địa điểm để tiện tra cứu

**Câu lệnh**:
> Giúp tôi sắp xếp thư mục Photos:
> 1. Tạo thư mục theo tháng chụp (định dạng YYYY-MM)
> 2. Nếu ảnh có thông tin GPS, hãy thêm địa danh vào tên tệp
> 3. Lọc bỏ ảnh bị mờ và ảnh trùng lặp
> 4. Tạo một tệp chỉ mục tóm tắt

**Kết quả**:
```text
✅ Sắp xếp hoàn tất!

📁 Cấu trúc thư mục:
Photos/
├── 2025-12/
│   ├── 2025-12-01_HaNoi_001.jpg
│   ├── 2025-12-01_HaNoi_002.jpg
│   └── ...
├── 2026-01/
│   ├── 2026-01-15_DaNang_001.jpg
│   └── ...
└── index.txt (Tệp chỉ mục tra cứu)

🗑️ Đã xóa ảnh mờ: 50 tấm
🗑️ Đã xóa ảnh trùng: 30 tấm
```

#### Ca 3: Lưu trữ tài liệu dự án hoàn tất

**Tình huống**:
- Dự án kết thúc, cần đóng gói lưu trữ (archive)
- Tài liệu nằm phân tán ở nhiều nơi

**Câu lệnh**:
> Giúp tôi lưu trữ toàn bộ tài liệu của "Dự án XX":
> 1. Tìm tất cả tài liệu có chứa tên dự án
> 2. Phân loại theo nhóm (Yêu cầu, Thiết kế, Mã nguồn, Kiểm thử, Triển khai)
> 3. Tạo cấu trúc thư mục lưu trữ bài bản
> 4. Di chuyển tệp vào đúng vị trí
> 5. Xuất danh mục kiểm kê tài liệu ra tệp Excel

**Kết quả**:
```text
✅ Đóng gói lưu trữ hoàn tất!

📁 Cấu trúc thư mục:
Du_an_XX_Archive_2026-02-10/
├── 01_Yeu_cau/
├── 02_Thiet_ke/
├── 03_Phat_trien/
├── 04_Kiem_thu/
├── 05_Trien_khai/
└── Danh_muc_tai_lieu.xlsx

📊 Thống kê:
- Tổng số tệp: 156 tệp
- Tổng dung lượng: 1.2GB
```

### Viết kịch bản tự động hóa

Nếu bạn thường xuyên phải sắp xếp một loại tệp nhất định, hãy yêu cầu OpenClaw tạo script tự động:

> Tôi: Hãy viết cho tôi 1 script tự động dọn dẹp và sắp xếp thư mục Downloads mỗi tuần, phân loại theo các quy tắc vừa rồi.

OpenClaw sẽ tạo kịch bản có thể chạy định kỳ để tự động hóa toàn bộ công việc này.

---

## 4.4 Dọn dẹp và tối ưu hóa ổ cứng

### Tình huống 4: Dọn rác ổ cứng

**Trường hợp thực tế**: Giải phóng không gian lưu trữ

> Khi ổ cứng của bạn sắp đầy, bạn không cần phải tải thêm các phần mềm dọn rác cồng kềnh. Hãy để OpenClaw quét và xử lý giúp bạn.

![Dọn dẹp không gian ổ cứng - Tự động nhận diện tệp lớn và tệp trùng lặp](https://upload.maynor1024.live/file/1770176234805_image_10.jpg)

**Cách truyền thống**:
1. Tải phần mềm dọn dẹp
2. Quét ổ cứng
3. Chọn từng mục để xóa thủ công
4. Lo lắng xóa nhầm tệp quan trọng
5. Thời gian tiêu tốn: 30 - 60 phút

**Cách dùng OpenClaw**:

Tôi: Phân tích giúp tôi tình trạng sử dụng dung lượng ổ cứng, tìm ra các tệp và thư mục đang chiếm nhiều dung lượng nhất, đồng thời gợi ý những mục nào có thể dọn dẹp an toàn.

**Quy trình OpenClaw thực thi**:
1. 📊 Quét ổ cứng
2. 📈 Phân tích dung lượng chiếm dụng
3. 🔍 Lọc ra các tệp dung lượng lớn
4. 🗑️ Nhận diện tệp rác và bộ nhớ đệm tạm thời
5. 💡 Đưa ra đề xuất dọn dẹp an toàn

### Ví dụ câu lệnh dọn dẹp

#### Tìm tệp dung lượng lớn

- Tìm 10 tệp đang chiếm nhiều dung lượng nhất
- Lọc ra toàn bộ các tệp có kích thước lớn hơn 1GB
- Phân tích xem thư mục nào đang ngốn nhiều dung lượng ổ đĩa nhất

#### Tìm tệp trùng lặp

- Quét toàn bộ các tệp bị trùng lặp nội dung
- Tìm các bức ảnh trùng lặp
- Lọc ra các tài liệu bị trùng bản sao

#### Tìm tệp tạm thời và cache

- Tìm tất cả các tệp tạm thời (temp files)
- Quét các tệp bộ nhớ đệm (cache) hệ thống và ứng dụng
- Liệt kê các tệp có thể xóa an toàn mà không ảnh hưởng tới hệ điều hành

#### Đề xuất dọn dẹp

- Phân tích ổ cứng và đưa ra khuyến nghị dọn dẹp
- Những tệp nào nên chuyển sang ổ cứng ngoài?
- Những tệp nào có thể nén lại để tiết kiệm bộ nhớ?

### Ca thực chiến: Giải phóng 100GB dung lượng

**Bước 1: Phân tích mức độ sử dụng dung lượng**

> Tôi: Phân tích tình trạng sử dụng ổ cứng của tôi.

**OpenClaw phản hồi**:
```text
📊 Phân tích không gian ổ cứng:

Tổng dung lượng: 500GB
Đã sử dụng: 450GB (90%)
Còn trống: 50GB (10%)

⚠️ Cảnh báo dung lượng sắp đầy!

Các thư mục chiếm nhiều dung lượng nhất:
1. ~/Library/Caches - 80GB
2. ~/Downloads - 50GB
3. ~/Movies - 120GB
4. ~/Documents - 100GB
5. ~/Desktop - 30GB
```

**Bước 2: Tìm tệp dung lượng lớn**

> Tôi: Lọc ra các tệp lớn hơn 1GB.

**OpenClaw phản hồi**:
```text
🔍 Tìm thấy 35 tệp có dung lượng trên 1GB:

Tệp video (25 tệp):
1. Demo_du_an.mov - 15GB
2. Video_ghi_am_hop_2025-12.mp4 - 8GB
3. ...

Tệp máy ảo (5 tệp):
1. Windows.vmdk - 50GB
2. Ubuntu.vmdk - 30GB
3. ...

Tệp sao lưu (5 tệp):
1. iPhone_backup_2025-12.backup - 20GB
2. ...

💡 Đề xuất:
- Các tệp video có thể nén lại hoặc chuyển sang ổ cứng ngoài
- Các tệp máy ảo cũ không dùng có thể xóa bỏ
- Các bản sao lưu điện thoại cũ có thể dọn dẹp bớt
```

**Bước 3: Tìm tệp trùng lặp**

> Tôi: Tìm tất cả các tệp trùng lặp.

**OpenClaw phản hồi**:
```text
🔍 Tìm thấy 120 nhóm tệp trùng lặp:

Ảnh trùng lặp (80 nhóm):
- IMG_1234.jpg (3 bản sao) - 15MB
- IMG_5678.jpg (2 bản sao) - 10MB
- ...

Tài liệu trùng lặp (30 nhóm):
- Bao_cao_v1.docx (4 bản sao) - 5MB
- Phuong_an_final.pptx (3 bản sao) - 20MB
- ...

Tệp cài đặt tải về trùng lặp (10 nhóm):
- setup.exe (2 bản sao) - 100MB
- ...

💡 Dung lượng có thể giải phóng: khoảng 8GB
```

**Bước 4: Quét tệp tạm thời**

> Tôi: Tìm tất cả tệp tạm thời và cache có thể xóa an toàn.

**OpenClaw phản hồi**:
```text
🗑️ Các tệp có thể xóa an toàn:

Bộ nhớ đệm hệ thống:
- ~/Library/Caches - 80GB
  - Safari Cache - 20GB
  - Chrome Cache - 30GB
  - Cache các ứng dụng khác - 30GB

Tệp tạm thời:
- /tmp - 5GB
- ~/Downloads/Temp - 10GB

Tệp nhật ký (logs):
- ~/Library/Logs - 3GB

💡 Dung lượng có thể giải phóng: khoảng 98GB

⚠️ Đề xuất:
- Cache hệ thống có thể dọn dẹp toàn bộ
- Tệp tạm thời có thể xóa hết
- Tệp log chỉ nên giữ lại trong 1 tháng gần nhất
```

**Bước 5: Thực hiện dọn dẹp**

> Tôi: Được rồi, hãy dọn dẹp các tệp này giúp tôi. Nhớ sao lưu những tệp quan trọng trước khi xóa nhé.

**OpenClaw phản hồi**:
```text
✅ Dọn dẹp hoàn tất!

📊 Kết quả dọn dẹp:
- Xóa tệp bộ nhớ đệm: 80GB
- Xóa tệp tạm thời: 15GB
- Xóa tệp trùng lặp: 8GB
- Xóa bản sao lưu cũ: 20GB

💾 Tổng dung lượng đã giải phóng: 123GB

📁 Vị trí bản sao lưu:
- Các tệp quan trọng đã được sao lưu tại: ~/Backup/CleanBackup_2026-02-10/

⚠️ Lời khuyên:
- Nên dọn cache định kỳ mỗi tháng một lần
- Định kỳ xóa các tệp không cần thiết trong thư mục Downloads
- Lưu trữ các tệp dung lượng lớn trên ổ cứng ngoài hoặc lưu trữ đám mây
```

### Chiến lược xóa an toàn

#### Quy trình xác nhận 3 bước

1. **Bước 1: Phân tích**
   ```text
   Phân tích những tệp nào có thể xóa an toàn
   ```

2. **Bước 2: Sao lưu**
   ```text
   Sao lưu các tệp quan trọng vào vị trí an toàn
   ```

3. **Bước 3: Thực thi xóa**
   ```text
   Sau khi người dùng xác nhận không có vấn đề gì mới thực hiện xóa
   ```

#### Bảo vệ thư mục quan trọng

> Tôi: Trước khi dọn dẹp, tuyệt đối không được xóa bất kỳ tệp nào trong các thư mục sau:
> - `~/Documents/Tai_lieu_quan_trong`
> - `~/Projects`
> - `~/Photos`

#### Xóa có thể khôi phục (Chuyển vào Thùng rác)

> Tôi: Hãy di chuyển các tệp vào Thùng rác (Trash / Recycle Bin) thay vì xóa vĩnh viễn, để nếu lỡ có nhầm lẫn thì tôi vẫn có thể khôi phục lại được.

### Kế hoạch dọn dẹp định kỳ

Hãy để OpenClaw lập lịch dọn dẹp tự động giúp bạn:

> Tôi: Lập giúp tôi một kế hoạch dọn dẹp định kỳ: hàng tuần tự động xóa cache và tệp tạm, hàng tháng kiểm tra tệp lớn và tệp trùng lặp.

**OpenClaw phản hồi**:
```text
✅ Đã thiết lập kế hoạch dọn dẹp định kỳ:

📅 Tác vụ hàng tuần (22:00 tối Chủ nhật hàng tuần):
- Xóa cache hệ thống
- Xóa cache trình duyệt
- Xóa tệp tạm thời
- Dọn dẹp các tệp trong Downloads đã lưu quá 30 ngày

📅 Tác vụ hàng tháng (Ngày 1 hàng tháng):
- Quét tệp lớn (>1GB)
- Quét tệp trùng lặp
- Phân tích tình trạng dung lượng
- Xuất báo cáo dọn dẹp

💡 Ước tính dung lượng giải phóng mỗi tháng: 20 - 30GB

⚠️ Lưu ý quan trọng:
- Luôn tự động tạo bản sao lưu trước khi xóa
- Gửi thông báo cho bạn sau khi dọn dẹp xong
- Bạn có thể hủy hoặc điều chỉnh tác vụ bất cứ lúc nào
```

---

## Tổng kết chương

Qua chương này, bạn đã nắm vững các kỹ năng:

✅ **Tìm kiếm tệp thông minh**: Tìm kiếm theo ngữ nghĩa và nội dung, không còn phụ thuộc vào tên tệp  
✅ **Xử lý tệp hàng loạt**: Xử lý 100+ tệp cùng lúc, tự động trích xuất và gom dữ liệu  
✅ **Tự động sắp xếp tệp**: Phân loại thông minh, đổi tên hàng loạt, lưu trữ dự án khoa học  
✅ **Dọn dẹp và tối ưu hóa ổ cứng**: Phát hiện tệp rác, tệp trùng lặp và giải phóng dung lượng bộ nhớ an toàn  

**Điểm cốt lõi cần nhớ**:
- OpenClaw có quyền truy cập hệ thống tệp cục bộ — lợi thế vượt trội so với các AI chạy trên web.
- Hãy mô tả nội dung bạn cần thay vì cố nhớ tên tệp, AI sẽ tự hiểu ngữ cảnh.
- Xử lý hàng loạt giúp bạn tiết kiệm hàng giờ thao tác lặp đi lặp lại.
- Dọn dẹp định kỳ giúp hệ thống của bạn luôn vận hành trơn tru và an toàn.

---

## Dự án thực hành: Xây dựng Trợ lý quản lý tệp cá nhân

### Mục tiêu dự án

Thiết lập một quy trình quản lý tệp tự động khép kín:
1. Tự động dọn dẹp và phân loại thư mục Downloads mỗi ngày
2. Dọn cache và tệp tạm thời mỗi tuần
3. Kiểm tra tệp lớn và tệp trùng lặp mỗi tháng
4. Tự động sao lưu tài liệu quan trọng

### Các bước thực hiện

- **Bước 1: Thiết lập tự động sắp xếp**
  > Cài đặt giúp tôi lịch 22:00 hàng ngày tự động sắp xếp thư mục Downloads theo định dạng tệp.

- **Bước 2: Thiết lập dọn dẹp định kỳ**
  > Cài đặt lịch 23:00 tối Chủ nhật hàng tuần dọn dẹp bộ nhớ đệm và tệp tạm.

- **Bước 3: Thiết lập kiểm tra hàng tháng**
  > Cài đặt lịch vào ngày 1 hàng tháng quét các tệp lớn và tệp trùng lặp, xuất báo cáo cho tôi.

- **Bước 4: Thiết lập sao lưu tự động**
  > Thiết lập sao lưu tự động hàng ngày các thư mục tài liệu quan trọng sang ổ cứng ngoài.

### Hiệu quả đạt được

- 📁 Thư mục Downloads luôn ngăn nắp, sạch sẽ
- 💾 Ổ cứng luôn có đủ không gian trống (duy trì ít nhất 20% dung lượng trống)
- 🔒 Tài liệu quan trọng luôn có bản sao lưu an toàn
- ⏱️ Tiết kiệm từ 5 - 10 giờ dọn dẹp thủ công mỗi tháng

---

**Chương tiếp theo**: [Chương 5: Cơ sở Tri thức & Bộ Não Thứ Hai](05-knowledge-management.md) - Xây dựng hệ thống tri thức cá nhân với Active Memory và Memory Wiki

**Trở về mục lục**: [README](../../README.md)

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc chương này trên nền tảng web?**

[🔗 Đọc trực tuyến: Chương 4 - Quản lý Tệp tin Cục bộ](https://awesome.tryopenclaw.asia/docs/02-core-features/04-file-management/)

Trải nghiệm đọc tốt hơn trên website giáo trình:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính
- 🌙 Chế độ nền tối (Dark Mode) dịu mắt
- 🔍 Tích hợp tìm kiếm nhanh nội dung
- 📋 Thanh điều hướng mục lục trực quan, dễ dàng chuyển đổi giữa các chương

[🏠 Truy cập website giáo trình đầy đủ](https://awesome.tryopenclaw.asia)
