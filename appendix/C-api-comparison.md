# Phụ lục C: Bảng So Sánh Các Nhà Cung Cấp Dịch Vụ API

> 💡 **Mục tiêu của phụ lục này**: Cung cấp bức tranh toàn cảnh và so sánh chi tiết các nhà cung cấp API khả dụng cho OpenClaw, bao gồm các dịch vụ quốc tế chủ lưu, các mô hình nội địa hiệu năng cao, dịch vụ trung gian chuyển tiếp (relay proxy) bên thứ ba và giải pháp tài khoản chuyên dụng, giúp bạn lựa chọn giải pháp API tối ưu nhất cho bài toán của mình.

## 📋 Mục lục

- C.1 Các dịch vụ API quốc tế chủ lưu
- C.2 Các mô hình AI nội địa & chi phí tối ưu
- C.3 Nhà cung cấp API chuyển tiếp bên thứ ba (Relay Providers)
- C.4 Giải pháp tài khoản chuyên dụng (Dedicated Accounts)
- Bảng tổng hợp so sánh chi phí & năng lực
- Gợi ý lựa chọn theo từng tình huống thực tế

---

## C.1 Các dịch vụ API quốc tế chủ lưu

### C.1.1 Anthropic Claude API

#### Thông tin cơ bản

**Trang chủ**: https://www.anthropic.com  
**Tài liệu API**: https://docs.anthropic.com  
**Các mô hình hỗ trợ**:
- Claude Opus 4 (Năng lực mạnh nhất)
- Claude Sonnet 4 / 3.7 Sonnet (Khuyến nghị sử dụng, cân bằng hoàn hảo)
- Claude Haiku 4 (Tốc độ phản hồi nhanh nhất)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào (Input) | Giá Token đầu ra (Output) | Độ dài ngữ cảnh (Context) |
|---|---|---|---|
| Claude Opus 4 | $15 / 1M tokens | $75 / 1M tokens | 200K |
| Claude Sonnet 4 | $3 / 1M tokens | $15 / 1M tokens | 200K |
| Claude Haiku 4 | $0.25 / 1M tokens | $1.25 / 1M tokens | 200K |

#### Hạn mức dùng thử miễn phí

- Tặng $5 tín dụng ban đầu cho tài khoản đăng ký mới
- Tương đương khoảng 1,7 triệu Token (với mô hình Sonnet)

#### Ưu điểm nổi bật

1. **Khả năng lập trình xuất sắc nhất**: Rất mạnh trong sinh mã, rà soát lỗi và tư duy kiến trúc
2. **Ngữ cảnh siêu dài**: Hỗ trợ cửa sổ ngữ cảnh 200K mượt mà
3. **An toàn và tin cậy cao**: Chất lượng đầu ra chặt chẽ, tỷ lệ ảo giác (hallucination) cực thấp
4. **Hạ tầng API ổn định**: Độ sẵn sàng dịch vụ cao

#### Nhược điểm

1. **Chi phí khá cao**: Đắt hơn các mô hình tối ưu như DeepSeek từ 10 đến 30 lần
2. **Yêu cầu môi trường mạng quốc tế**: Cần cấu hình mạng thông thoáng
3. **Rào cản đăng ký**: Cần số điện thoại quốc tế và thẻ thanh toán hợp lệ

#### Tình huống ứng dụng tối ưu

- Phát triển phần mềm chuyên nghiệp (viết code, code review, debug)
- Các tác vụ suy luận logic phức tạp và chuỗi hành động dài
- Doanh nghiệp có ngân sách dồi dào đòi hỏi chất lượng đầu ra khắt khe

#### Quy trình đăng ký

1. Truy cập https://console.anthropic.com
2. Đăng ký tài khoản nhà phát triển
3. Tạo API Key tại mục Settings
4. Cấu hình vào OpenClaw thông qua `openclaw models auth add`

---

### C.1.2 OpenAI GPT API

#### Thông tin cơ bản

**Trang chủ**: https://openai.com  
**Tài liệu API**: https://platform.openai.com/docs  
**Các mô hình hỗ trợ**:
- GPT-4o / GPT-4 Turbo (Toàn năng, mạnh mẽ)
- GPT-4o-mini (Kinh tế, phản hồi nhanh)
- GPT-3.5 Turbo (Bản tiêu chuẩn cũ)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| GPT-4 Turbo | $10 / 1M tokens | $30 / 1M tokens | 128K |
| GPT-4o | $2.5 / 1M tokens | $10 / 1M tokens | 128K |
| GPT-4o-mini | $0.15 / 1M tokens | $0.6 / 1M tokens | 128K |

#### Hạn mức dùng thử miễn phí

- Tài khoản mới nhận $5 hạn mức thử nghiệm ban đầu trong thời hạn nhất định

#### Ưu điểm nổi bật

1. **Đa phương thức toàn diện (Multimodal)**: Hỗ trợ văn bản, thị giác máy tính, âm thanh
2. **Hệ sinh thái phong phú**: Tài liệu, SDK và cộng đồng hỗ trợ lớn nhất thế giới
3. **Tương thích cao**: Hầu như mọi thư viện Agent đều hỗ trợ sẵn chuẩn định dạng OpenAI
4. **Hạ tầng phân phối toàn cầu**: Mạng lưới máy chủ phân tán rộng rãi

#### Nhược điểm

1. **Chi phí đáng kể**: Bản cao cấp vẫn có chi phí cao nếu gọi liên tục
2. **Kiểm duyệt nội dung gắt gao**: Hệ thống lọc từ khóa đôi khi từ chối xử lý văn bản chuyên ngành

#### Tình huống ứng dụng tối ưu

- Ứng dụng xử lý đa phương thức (văn bản kết hợp hình ảnh)
- Ứng dụng cần tích hợp tương thích chuẩn OpenAI
- Doanh nghiệp đa quốc gia

---

### C.1.3 Google Gemini API

#### Thông tin cơ bản

**Trang chủ**: https://ai.google.dev  
**Tài liệu API**: https://ai.google.dev/docs  
**Các mô hình hỗ trợ**:
- Gemini 2.5 Pro (Suy luận sâu sắc)
- Gemini 2.0 Flash (Khuyến nghị, tốc độ chớp nhoáng)
- Gemini 1.5 Pro (Cửa sổ ngữ cảnh khổng lồ 2M)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| Gemini 2.5 Pro | $1.25 / 1M tokens | $5 / 1M tokens | 1M |
| Gemini 2.0 Flash | $0.075 / 1M tokens | $0.3 / 1M tokens | 1M |
| Gemini 1.5 Pro | $1.25 / 1M tokens | $5 / 1M tokens | 2M |

#### Hạn mức dùng thử miễn phí

- **Hạn mức miễn phí cực hào phóng**: Lên tới 1.500 yêu cầu mỗi ngày (giới hạn 15 RPM)
- Phù hợp cho việc thử nghiệm hoàn toàn miễn phí

#### Ưu điểm nổi bật

1. **Hạn mức miễn phí rất lớn**: Lý tưởng cho người dùng cá nhân và nghiên cứu
2. **Ngữ cảnh cực đại**: Hỗ trợ từ 1 triệu đến 2 triệu token, nuốt trọn toàn bộ kho sách hoặc codebase
3. **Xử lý đa phương thức xuất sắc**: Đọc trực tiếp video dài, audio và hình ảnh độ phân giải cao
4. **Chi phí phiên bản Flash siêu rẻ**: Chỉ từ $0.075 / 1M token đầu vào

#### Nhược điểm

1. Cần cấu hình mạng quốc tế ổn định
2. Bản miễn phí có giới hạn tần suất yêu cầu trên phút (Rate limit)

#### Tình huống ứng dụng tối ưu

- Người dùng cá nhân, sinh viên muốn dùng AI mạnh mẽ không tốn phí
- Phân tích và tra cứu codebase hoặc sách tài liệu có độ dài hàng trăm nghìn dòng
- Phân tích video và file âm thanh nguyên bản

---

## C.2 Các mô hình AI nội địa & chi phí tối ưu

### C.2.1 Kimi k2.5 (Moonshot AI — Rất khuyến nghị)

#### Thông tin cơ bản

**Trang chủ**: https://www.moonshot.cn  
**Tài liệu API**: https://platform.moonshot.cn/docs  
**Công ty phát triển**: Moonshot AI (Nguyệt Chi Ám Diện)  
**Mô hình hỗ trợ**:
- Kimi k2.5 (Bản mới nhất)
- Kimi k1.5 (Bản tiêu chuẩn)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| Kimi k2.5 | ¥0.5 / 1M tokens | ¥2 / 1M tokens | 200K |
| Kimi k1.5 | ¥0.3 / 1M tokens | ¥1.2 / 1M tokens | 128K |

#### Hạn mức dùng thử

- Tặng ¥15 tín dụng cho người dùng mới, tương đương khoảng 3 triệu token

#### Ưu điểm nổi bật

1. **Tỷ suất hiệu năng trên giá thành (P/P) cực cao**: Giá chỉ bằng 1/6 so với Claude
2. **Xử lý tài liệu ngữ cảnh dài mượt mà**: 200K token với độ chính xác truy hồi cao
3. **Kết nối trực tiếp không cần proxy**: Tốc độ phản hồi tại châu Á cực nhanh
4. **Hệ thống API ổn định**: Độ sẵn sàng dịch vụ ấn tượng

#### Nhược điểm

1. Năng lực sinh code ở các framework ngách có phần sau Claude và GPT-4 một chút

#### Tình huống ứng dụng tối ưu

- Xử lý văn bản, tóm tắt tài liệu, quản lý cơ sở tri thức cá nhân
- Doanh nghiệp vừa và nhỏ cần tối ưu ngân sách
- Trợ lý viết lách và tổng hợp tin tức tự động

---

### C.2.2 DeepSeek-V3 / DeepSeek-R1 (Chi phí suy luận rẻ nhất)

#### Thông tin cơ bản

**Trang chủ**: https://www.deepseek.com  
**Tài liệu API**: https://platform.deepseek.com/docs  
**Công ty phát triển**: DeepSeek (Hàng Châu)  
**Mô hình hỗ trợ**:
- DeepSeek-V3 (Mô hình nền tảng tổng quát đa nhiệm)
- DeepSeek-R1 (Mô hình lý luận logic chuyên sâu theo chuỗi tư duy)
- DeepSeek-Coder (Tối ưu hóa lập trình)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| DeepSeek-V3 | ¥0.1 / 1M tokens (khoảng 0.014$) | ¥0.4 / 1M tokens (khoảng 0.056$) | 64K |
| DeepSeek-Chat | ¥0.1 / 1M tokens | ¥0.4 / 1M tokens | 32K |
| DeepSeek-Coder | ¥0.1 / 1M tokens | ¥0.4 / 1M tokens | 16K |

#### Hạn mức dùng thử

- Tặng 5 triệu token cho tài khoản mới đăng ký

#### Ưu điểm nổi bật

1. **Mức giá phá vỡ giới hạn ngành**: Rẻ hơn Claude tới 30 lần, tiết kiệm tới 95% chi phí
2. **Khả năng lập trình và toán học cực kỳ ấn tượng**: Vượt trội so với tầm giá
3. **Hỗ trợ định dạng tương thích hoàn toàn chuẩn OpenAI**: Tích hợp vào OpenClaw cực kỳ dễ dàng
4. **Hỗ trợ mạnh mẽ phong trào mã nguồn mở**: Trọng lượng mô hình mở công khai

#### Nhược điểm

1. Cửa sổ ngữ cảnh ở mức 64K
2. Trong những đợt cao điểm nhu cầu toàn cầu, API đôi lúc gặp hiện tượng nghẽn mạng ngắn hạn

#### Tình huống ứng dụng tối ưu

- Làm mô hình chính chạy 24/7 cho các tác vụ cron tự động hóa
- Lập trình viên muốn trợ lý code đồng hành liên tục với chi phí gần như bằng không
- Xử lý khối lượng văn bản lớn hàng chục triệu token mỗi tháng

---

### C.2.3 GLM-4 (Zhipu AI)

#### Thông tin cơ bản

**Trang chủ**: https://www.zhipuai.cn  
**Tài liệu API**: https://open.bigmodel.cn/dev/api  
**Đơn vị phát triển**: Zhipu AI (Đội ngũ xuất thân từ Đại học Thanh Hoa)  
**Mô hình hỗ trợ**:
- GLM-4 Plus (Bản cao cấp nhất)
- GLM-4 (Bản tiêu chuẩn)
- GLM-4 Flash (Phiên bản siêu kinh tế, miễn phí hoặc cực rẻ)

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| GLM-4 Plus | ¥0.5 / 1M tokens | ¥2 / 1M tokens | 128K |
| GLM-4 | ¥0.1 / 1M tokens | ¥0.4 / 1M tokens | 128K |
| GLM-4 Flash | ¥0.01 / 1M tokens | ¥0.04 / 1M tokens | 128K |

#### Hạn mức dùng thử

- Tài khoản mới nhận gói hạn mức dùng thử lớn
- Bản Flash có chính sách miễn phí gọi API rất rộng rãi

#### Ưu điểm nổi bật

1. Nền tảng học thuật vững chắc từ Đại học Thanh Hoa, khả năng hiểu ngôn ngữ tự nhiên sâu sắc
2. Bản Flash có chi phí gần như tượng trưng, phù hợp làm bộ phân loại tác vụ (router)
3. Hỗ trợ đầy đủ Function Calling và định dạng JSON có cấu trúc

---

### C.2.4 Qwen — Thông Nghĩa Thiên Vấn (Alibaba Cloud)

#### Thông tin cơ bản

**Trang chủ**: https://tongyi.aliyun.com  
**Tài liệu API**: https://help.aliyun.com/zh/dashscope  
**Đơn vị phát triển**: Alibaba Cloud  
**Mô hình hỗ trợ**: Qwen-Max, Qwen-Plus, Qwen-Turbo, Qwen-2.5-Coder

#### Bảng giá tham khảo

| Mô hình | Giá Token đầu vào | Giá Token đầu ra | Độ dài ngữ cảnh |
|---|---|---|---|
| Qwen-Max | ¥0.4 / 1M tokens | ¥1.2 / 1M tokens | 8K - 32K |
| Qwen-Plus | ¥0.08 / 1M tokens | ¥0.24 / 1M tokens | 32K - 128K |
| Qwen-Turbo | ¥0.03 / 1M tokens | ¥0.06 / 1M tokens | 8K - 128K |

#### Ưu điểm nổi bật

1. Tối ưu cực mạnh cho các nghiệp vụ thương mại điện tử, chăm sóc khách hàng và lập trình (Qwen-Coder)
2. Hệ sinh thái mã nguồn mở Qwen 2.5 rất mạnh mẽ, được cộng đồng AI toàn cầu đánh giá rất cao
3. Tích hợp trực tiếp với hạ tầng điện toán đám mây của Alibaba

---

## C.3 Nhà cung cấp API chuyển tiếp bên thứ ba (Relay Providers)

### C.3.1 Bản chất của nhà cung cấp API chuyển tiếp

Nhà cung cấp trung gian (Relay/Aggregator) là các đơn vị tập hợp nhiều API của các nhà phát triển lớn (OpenAI, Anthropic, Google, Meta...) vào một endpoint duy nhất. Người dùng chỉ cần đăng ký một tài khoản và nạp tiền một lần là có thể gọi luân phiên hàng trăm mô hình khác nhau.

#### Ưu điểm

1. **Quản lý tập trung một cửa (All-in-one)**: Quản trị chi phí và API Key tại một nơi duy nhất
2. **Không lo thanh toán quốc tế**: Hỗ trợ nhiều cổng thanh toán nội địa và thẻ phổ thông
3. **Kết nối tối ưu**: Có máy chủ relay định tuyến trung gian, giảm độ trễ khi kết nối quốc tế
4. **Mức giá cạnh tranh**: Nhờ mua gói dung lượng lớn (bulk purchase), giá thường thấp hơn hoặc tương đương mua lẻ

#### Nhược điểm cần cân nhắc

1. Cần chọn đơn vị uy tín để tránh nguy cơ gián đoạn dịch vụ đột xuất
2. Cần lưu ý về chính sách bảo mật dữ liệu riêng tư

---

### C.3.2 Một số nhà cung cấp uy tín phổ biến

#### 1. OpenRouter (Khuyến nghị hàng đầu toàn cầu)
- **Trang chủ**: https://openrouter.ai
- **Đặc điểm**: Hỗ trợ hơn 200+ mô hình lớn nhỏ trên toàn cầu, tự động định tuyến dự phòng (fallback) nếu một nhà cung cấp bị sập, hiển thị giá minh bạch từng mili-cent.
- **Tương thích**: Chuẩn OpenAI API 100%, cấu hình vào OpenClaw cực kỳ tiện lợi.

#### 2. AnyRouter
- **Trang chủ**: https://anyrouter.ai
- **Đặc điểm**: Tối ưu định tuyến cho khu vực châu Á, hỗ trợ đa dạng phương thức nạp tiền, giá cả minh bạch không phụ phí ẩn.

#### 3. API2D
- **Trang chủ**: https://api2d.com
- **Đặc điểm**: Đơn vị cung cấp giải pháp chuyển tiếp thâm niên, tích hợp hướng dẫn chi tiết cho người mới.

---

## C.4 Giải pháp tài khoản chuyên dụng (Dedicated Accounts)

### C.4.1 Tổng quan về giải pháp tài khoản trả phí cố định

Thay vì trả phí theo lượng token tiêu thụ (Pay-as-you-go), người dùng đăng ký các gói thuê bao tháng của nhà cung cấp như ChatGPT Plus ($20/tháng), Claude Pro ($20/tháng) hoặc GitHub Copilot.

#### Bảng so sánh kinh tế học

Giả định một Solopreneur sử dụng khoảng 10 triệu Token văn bản chất lượng cao mỗi tháng:
- Nếu dùng Claude 3.5 Sonnet qua API: 10M × ~$9 = ~$90/tháng
- Nếu dùng gói thuê bao Claude Pro hoặc gói định mức: Cố định $20/tháng

**Quy tắc rút ra**:
- Nếu khối lượng sử dụng mỗi tháng vượt quá 3 - 5 triệu token cao cấp, hình thức thuê bao trọn gói có lợi thế về chi phí.
- Tuy nhiên, hình thức API truyền thống mang lại sự tự do tuyệt đối về tự động hóa ngầm, không bị giới hạn cửa sổ phiên và độ trễ phản hồi thấp.

---

## 📊 Bảng Tổng Hợp So Sánh Toàn Diện

### So sánh chi phí (Quy đổi ước tính trên 1 triệu Token)

| Nhà cung cấp | Mô hình đại diện | Giá Token vào | Giá Token ra | Chi phí tổng thể | Đánh giá P/P |
|---|---|---|---|---|---|
| DeepSeek | V3 / R1 | ~¥0.1 | ~¥0.4 | ~¥0.5 (~$0.07) | ⭐⭐⭐⭐⭐ (Vô địch về giá) |
| Zhipu AI | GLM-4 Flash | ~¥0.01 | ~¥0.04 | ~¥0.05 (~$0.007) | ⭐⭐⭐⭐⭐ (Gần như miễn phí) |
| Alibaba | Qwen-Turbo | ~¥0.03 | ~¥0.06 | ~¥0.09 (~$0.013) | ⭐⭐⭐⭐⭐ (Rất kinh tế) |
| Moonshot | Kimi k2.5 | ~¥0.5 | ~¥2.0 | ~¥2.5 (~$0.35) | ⭐⭐⭐⭐⭐ (Xuất sắc) |
| Google | Gemini 2.0 Flash | $0.075 | $0.30 | $0.375 | ⭐⭐⭐⭐ (Có tier miễn phí lớn) |
| Anthropic | Claude 3.5 Sonnet | $3.00 | $15.00 | $18.00 | ⭐⭐⭐⭐ (Đắt nhưng chất lượng đỉnh cao) |
| OpenAI | GPT-4o | $2.50 | $10.00 | $12.50 | ⭐⭐⭐ (Mạnh mẽ, toàn diện) |

### So sánh năng lực chuyên môn

| Nhà cung cấp | Khả năng lập trình | Khả năng suy luận | Ngữ cảnh | Tốc độ | Mức độ ổn định |
|---|---|---|---|---|---|
| DeepSeek (V3/R1) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 64K | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Claude 3.5 Sonnet | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 200K | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Kimi k2.5 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 200K | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Gemini 2.0 Flash | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| GPT-4o | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 128K | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| GLM-4 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 128K | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 💡 Gợi Ý Lựa Chọn Phối Hợp Cho Từng Đối Tượng

### 1. Người dùng cá nhân & Solopreneur (Tối ưu hóa ngân sách tối đa)
- **Mô hình tác chiến chính (Default Agent)**: DeepSeek-V3 hoặc Qwen-Plus (Chi phí dưới 10.000 VNĐ / ngày)
- **Mô hình lập trình chuyên sâu**: DeepSeek-Coder hoặc DeepSeek-R1
- **Mô hình xử lý tài liệu dài**: Kimi k2.5 hoặc Gemini 2.0 Flash (Tận dụng gói miễn phí)
- **Tổng ngân sách hàng tháng**: Dưới 50.000 - 100.000 VNĐ

### 2. Doanh nghiệp & Nhóm làm việc chuyên nghiệp (Ưu tiên chất lượng & độ tin cậy)
- **Mô hình điều phối & hội thoại tiêu chuẩn**: Kimi k2.5 hoặc GPT-4o-mini
- **Mô hình giải quyết bài toán phức tạp & Code review**: Claude 3.5 Sonnet
- **Mô hình dự phòng**: Cấu hình fallback tự động sang DeepSeek qua OpenRouter
- **Tổng ngân sách hàng tháng**: Khoảng 300.000 - 1.500.000 VNĐ tùy quy mô sử dụng

### 3. Lập trình viên chuyên trách (Software Engineer)
- **Cấu hình khuyên dùng**: Thiết lập Claude Sonnet làm Agent chính để kiến trúc hệ thống và rà soát bug, kết hợp DeepSeek chạy nền để sinh mã kiểm thử và viết tài liệu kỹ thuật.

---

## 📚 Tài liệu tham khảo liên quan

- Hướng dẫn cấu hình API Key trong OpenClaw: [Phụ lục K: Hướng dẫn cấu hình API Key](K-api-key-config-guide.md)
- Mẫu tệp cấu hình đa mô hình: [Phụ lục H: Mẫu tệp cấu hình và ví dụ](H-config-templates.md)
- Tài liệu chính thức về quản lý Token: https://docs.openclaw.ai/reference/token-use-and-costs

---

**Ghi chú**: Bảng giá và thông số kỹ thuật được cập nhật theo mặt bằng công nghệ năm 2026. Do thị trường AI phát triển nhanh chóng, các nhà cung cấp có thể điều chỉnh giá cước hoặc nâng cấp mô hình mới theo thời gian.

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/C-api-comparison/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp sẵn công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi qua lại giữa các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
