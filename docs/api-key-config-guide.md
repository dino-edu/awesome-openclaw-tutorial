# Hướng dẫn Toàn diện về Cấu hình API Key trong OpenClaw

## 📋 Tổng quan về các Phương thức Cấu hình

OpenClaw hỗ trợ nhiều phương thức cấu hình API Key khác nhau. Mỗi phương thức đều có kịch bản ứng dụng tối ưu và mức độ ưu tiên riêng biệt.

### Bảng so sánh các phương thức cấu hình

| Phương thức | Mức độ ưu tiên | Kịch bản phù hợp | Lưu bền vững (Persistent) | Độ khó |
|---|---|---|---|---|
| Biến môi trường (Environment Variables) | ⭐⭐⭐⭐⭐ Cao nhất | Thử nghiệm nhanh, Docker, CI/CD | ❌ Không | ⭐ Rất dễ |
| Cấu hình riêng cho từng Agent | ⭐⭐⭐⭐ Cao | Nhiều Agent dùng các Key khác nhau | ✅ Có | ⭐⭐ Trung bình |
| Cấu hình toàn cục (Global Config) | ⭐⭐⭐ Trung bình | Dùng chung cho tất cả Agent | ✅ Có | ⭐ Rất dễ |
| Trình hướng dẫn cấu hình (Onboarding Wizard) | ⭐⭐ Thấp | Thiết lập lần đầu | ✅ Có | ⭐ Rất dễ |

---

## 🔄 Thứ tự Ưu tiên Cấu hình

### Sơ đồ phân cấp ưu tiên (Từ cao xuống thấp)

```text
1. Biến môi trường (Mức ưu tiên cao nhất)
   ↓
2. Cấu hình riêng cho Agent (Agent-specific Config)
   ↓
3. Cấu hình toàn cục (Global Config)
   ↓
4. Trình hướng dẫn cấu hình (Onboarding Wizard)
   ↓
5. Giá trị mặc định của hệ thống (Mức ưu tiên thấp nhất)
```

### Ví dụ minh họa về độ ưu tiên

Giả sử bạn đồng thời thiết lập 3 nguồn:

```bash
# 1. Biến môi trường
export ANTHROPIC_API_KEY="sk-ant-env"

# 2. Cấu hình Agent
openclaw config set models.providers.anthropic.apiKey "sk-ant-agent" --agent tech-dev

# 3. Cấu hình toàn cục
openclaw config set models.providers.anthropic.apiKey "sk-ant-global"
```

**Giá trị thực tế được sử dụng**: `sk-ant-env` (do biến môi trường luôn giữ quyền ưu tiên cao nhất).

---

## 🎯 Phương thức 1: Biến Môi trường (Khuyên dùng cho Thử nghiệm Tạm thời)

### Kịch bản phù hợp

- ✅ Thử nghiệm nhanh các API Key khác nhau mà không muốn ghi file
- ✅ Triển khai trong container Docker
- ✅ Tự động hóa qua luồng CI/CD
- ✅ Không muốn lưu thông tin bí mật vào tệp cấu hình trên đĩa
- ✅ Cần quyền ưu tiên tuyệt đối ghi đè tạm thời

### Cách thiết lập

#### Thiết lập tạm thời (Chỉ áp dụng trong phiên terminal hiện tại)

```bash
# Anthropic
export ANTHROPIC_API_KEY="sk-ant-xxx"

# OpenAI
export OPENAI_API_KEY="sk-xxx"

# Google
export GOOGLE_API_KEY="xxx"

# DeepSeek
export DEEPSEEK_API_KEY="sk-xxx"

# Moonshot
export MOONSHOT_API_KEY="sk-xxx"
```

#### Thiết lập vĩnh viễn (Ghi vào tệp cấu hình Shell)

**macOS/Linux (zsh)**:
```bash
# Thêm vào ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.zshrc
source ~/.zshrc
```

**macOS/Linux (bash)**:
```bash
# Thêm vào ~/.bashrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.bashrc
source ~/.bashrc
```

**Windows (PowerShell)**:
```powershell
# Thiết lập tạm thời
$env:ANTHROPIC_API_KEY="sk-ant-xxx"

# Thiết lập vĩnh viễn ở cấp người dùng (User-level)
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-ant-xxx", "User")
```

### Kiểm tra cấu hình

```bash
# Xem giá trị biến môi trường
echo $ANTHROPIC_API_KEY

# Kiểm tra danh sách mô hình
openclaw models list
```

### Đánh giá ưu và nhược điểm

**Ưu điểm**:
- ✅ Ưu tiên cao nhất, lập tức ghi đè mọi cấu hình khác
- ✅ Linh hoạt, dễ dàng chuyển đổi nhanh
- ✅ Rất phù hợp với Docker và quy trình CI/CD
- ✅ Không lưu vết vào file cấu hình cục bộ, an toàn hơn khi chia sẻ code

**Nhược điểm**:
- ❌ Nếu chỉ gõ tạm trong terminal thì sẽ mất khi đóng cửa sổ
- ❌ Khó áp dụng nếu muốn mỗi Agent dùng một API Key khác nhau
- ❌ Cần thiết lập lại nếu mở cửa sổ terminal mới mà chưa thêm vào profile

---

## 🎯 Phương thức 2: Cấu hình Riêng cho Từng Agent (Khuyên dùng cho Đa Agent)

### Kịch bản phù hợp

- ✅ Nhiều Agent phụ trách các mảng khác nhau và dùng API Key riêng biệt
- ✅ Cần cô lập và cách ly hoàn toàn cấu hình giữa các Agent
- ✅ Vận hành ổn định, lâu dài
- ✅ Cần lưu cấu hình bền vững trên đĩa

### Cách thiết lập

#### Sử dụng dòng lệnh CLI

```bash
# Cấu hình API Key cho một Agent cụ thể
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev

# Cấu hình API Key khác cho một Agent khác
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer

# Kiểm tra lại cấu hình của Agent
openclaw config get models.providers.anthropic.apiKey --agent tech-dev
```

#### Chỉnh sửa trực tiếp tệp cấu hình

**Đường dẫn tệp**: `~/.openclaw/agents/<agentId>/openclaw.json`

```bash
# Mở tệp cấu hình bằng trình soạn thảo nano
nano ~/.openclaw/agents/tech-dev/openclaw.json
```

**Nội dung cấu hình**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx",
        "baseUrl": "https://api.anthropic.com"
      }
    }
  }
}
```

### Kiểm tra cấu hình

```bash
# Xem toàn bộ cấu hình của Agent
openclaw config get --agent tech-dev

# Gửi tin nhắn kiểm tra kết nối
openclaw agent --message --agent tech-dev "Hello"
```

### Đánh giá ưu và nhược điểm

**Ưu điểm**:
- ✅ Mỗi Agent được cấu hình hoàn toàn độc lập
- ✅ Cách ly rõ ràng, thay đổi bên Agent này không ảnh hưởng đến Agent khác
- ✅ Lưu trữ bền vững trên đĩa
- ✅ Cực kỳ phù hợp cho môi trường vận hành nhiều trợ lý chuyên biệt

**Nhược điểm**:
- ❌ Phải thiết lập thủ công cho từng Agent
- ❌ Tốn công quản lý hơn khi số lượng Agent tăng lên
- ❌ Vẫn bị biến môi trường ghi đè nếu biến môi trường có giá trị

---

## 🎯 Phương thức 3: Cấu hình Toàn cục (Khuyên dùng cho Cấu hình Đơn Agent)

### Kịch bản phù hợp

- ✅ Tất cả Agent dùng chung một tài khoản / API Key
- ✅ Hệ thống chỉ chạy một Agent duy nhất
- ✅ Sử dụng ổn định lâu dài
- ✅ Cần lưu bền vững trên đĩa

### Cách thiết lập

#### Cách 1: Sử dụng lệnh tương tác (Phù hợp nhất với người mới)

```bash
# Chạy lệnh thêm xác thực dạng tương tác
openclaw models auth add

# Làm theo hướng dẫn trên màn hình:
# 1. Chọn provider (ví dụ: anthropic)
# 2. Nhập API Key
# 3. Xác nhận lưu cấu hình
```

#### Cách 2: Sử dụng lệnh thiết lập cấu hình trực tiếp

```bash
# Thiết lập API Key toàn cục
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"

# Thiết lập mô hình mặc định
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# Kiểm tra lại giá trị
openclaw config get models.providers.anthropic.apiKey
```

#### Cách 3: Chỉnh sửa trực tiếp tệp cấu hình toàn cục

**Đường dẫn tệp**: `~/.openclaw/openclaw.json`

```bash
# Mở tệp cấu hình toàn cục
nano ~/.openclaw/openclaw.json
```

**Nội dung cấu hình**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      },
      "openai": {
        "apiKey": "sk-yyy"
      }
    }
  }
}
```

### Kiểm tra cấu hình

```bash
# Xem toàn bộ cấu hình toàn cục
openclaw config get

# Kiểm tra danh sách mô hình
openclaw models list
```

### Đánh giá ưu và nhược điểm

**Ưu điểm**:
- ✅ Thiết lập một lần, có hiệu lực trên toàn bộ hệ thống
- ✅ Lưu trữ bền vững trên đĩa
- ✅ Phù hợp với đại đa số nhu cầu cơ bản
- ✅ Quản lý dễ dàng, trực quan

**Nhược điểm**:
- ❌ Không phân tách được chìa khóa riêng cho từng Agent
- ❌ Vẫn bị cấu hình riêng của Agent hoặc biến môi trường ghi đè

---

## 🎯 Phương thức 4: Trình Hướng dẫn Onboarding (Khuyên dùng khi Cài đặt Mới)

### Kịch bản phù hợp

- ✅ Vừa cài đặt OpenClaw lần đầu
- ✅ Chưa quen với các câu lệnh dòng lệnh phức tạp
- ✅ Muốn được hệ thống dẫn dắt từng bước tương tác

### Cách thiết lập

```bash
# Khởi chạy wizard hướng dẫn
openclaw onboard

# Thực hiện theo các bước trên màn hình:
# 1. Chọn nhà cung cấp mô hình (provider)
# 2. Nhập API Key tương ứng
# 3. Chọn mô hình mặc định muốn dùng
# 4. Hoàn tất quá trình thiết lập
```

### Kiểm tra cấu hình

```bash
# Xem cấu hình vừa tạo
openclaw config get

# Kiểm tra trạng thái các kênh kết nối
openclaw channels status
```

### Đánh giá ưu và nhược điểm

**Ưu điểm**:
- ✅ Trực quan, giao diện hỏi đáp dễ thao tác, tránh gõ nhầm cú pháp
- ✅ Cực kỳ thân thiện với người mới
- ✅ Hoàn thành trọn gói cấu hình cơ bản trong một lần chạy

**Nhược điểm**:
- ❌ Chỉ tiện khi thiết lập ban đầu
- ❌ Khi muốn sửa đổi sau này thì dùng các lệnh chuyên biệt sẽ nhanh hơn
- ❌ Có độ ưu tiên thấp nhất trong số các phương thức lưu trữ cấu hình

---

## 🔍 Kiểm tra và Xác minh Cấu hình Thực tế

### Các bước kiểm tra xem cấu hình đã thực sự có hiệu lực chưa

```bash
# 1. Xem giá trị cấu hình trong file
openclaw config get models.providers.anthropic.apiKey

# 2. Kiểm tra xem biến môi trường có đang tồn tại không
echo $ANTHROPIC_API_KEY

# 3. Kiểm tra khả năng kết nối gọi API thực tế
openclaw models list

# 4. Kiểm tra trạng thái Gateway
openclaw channels status

# 5. Gửi một tin nhắn thử nghiệm thực tế
openclaw agent --message "Hello, test API Key"
```

### Cách xem các giá trị cấu hình đang thực sự hoạt động

```bash
# Xem mô hình đang được dùng mặc định
openclaw config get models.default

# Xem toàn bộ cấu hình các provider
openclaw config get models.providers

# Xuất toàn bộ cấu hình ra định dạng JSON
openclaw config get --json
```

---

## 🔧 Hướng dẫn Chẩn đoán và Xử lý Sự cố Cấu hình

### Vấn đề 1: Đã điền API Key nhưng hệ thống vẫn báo chưa cấu hình

**Hiện tượng**: Bạn đã lưu API Key nhưng khi gọi lệnh vẫn nhận được thông báo lỗi thiếu khóa xác thực.

**Các bước xử lý**:

1. **Rà soát lại thứ tự ưu tiên cấu hình**:
   ```bash
   # Kiểm tra biến môi trường (Ưu tiên cao nhất)
   echo $ANTHROPIC_API_KEY
   
   # Kiểm tra cấu hình riêng của Agent
   openclaw config get models.providers.anthropic.apiKey --agent tech-dev
   
   # Kiểm tra cấu hình toàn cục
   openclaw config get models.providers.anthropic.apiKey
   ```

2. **Khởi động lại Gateway để nạp cấu hình mới**:
   ```bash
   openclaw gateway restart
   ```

3. **Xem nhật ký log để tìm nguyên nhân cụ thể**:
   ```bash
   openclaw logs --tail 50
   ```

4. **Kiểm tra định dạng của API Key**:
   - Khóa Anthropic: Bắt đầu bằng tiền tố `sk-ant-xxx`
   - Khóa OpenAI: Bắt đầu bằng tiền tố `sk-xxx`
   - Khóa Google: Thường là chuỗi ký tự không có tiền tố cố định

---

### Vấn đề 2: Muốn phân tách nhiều Agent dùng các API Key khác nhau

**Bài toán**: Bạn muốn Agent hỗ trợ kỹ thuật dùng tài khoản công ty, còn Agent viết nội dung dùng tài khoản cá nhân.

**Giải pháp**:

```bash
# Phương án 1: Cấu hình riêng biệt cho từng Agent (Bền vững)
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer

# Phương án 2: Chuyển đổi qua biến môi trường tạm thời
export ANTHROPIC_API_KEY="sk-ant-xxx"
openclaw agent --message --agent tech-dev "Hello"

export ANTHROPIC_API_KEY="sk-ant-yyy"
openclaw agent --message --agent content-writer "Hello"
```

---

### Vấn đề 3: Làm thế nào để đổi nhanh nhà cung cấp mô hình (Provider)?

**Bài toán**: Đang dùng Claude nhưng muốn chuyển qua GPT hoặc Gemini để đối chiếu kết quả.

**Giải pháp**:

```bash
# Xem mô hình mặc định hiện tại
openclaw config get models.default

# Chuyển mô hình mặc định sang Anthropic Claude
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# Chuyển mô hình mặc định sang OpenAI GPT-4
openclaw config set models.default "openai/gpt-4"

# Chuyển mô hình mặc định sang Google Gemini
openclaw config set models.default "google/gemini-pro"

# Xác thực lại danh sách khả dụng
openclaw models list
```

---

### Vấn đề 4: Phải làm gì khi phát hiện API Key bị lộ?

**Các bước xử lý khẩn cấp**:

1. **Thu hồi ngay lập tức khóa bị lộ trên console**:
   - Đăng nhập vào trang quản trị của provider (Anthropic Console, OpenAI Dashboard, v.v.)
   - Nhấn Revoke / Delete khóa API bị rò rỉ ngay lập tức

2. **Khởi tạo khóa mới**:
   - Sinh một API Key mới hoàn toàn trên bảng điều khiển của nhà cung cấp

3. **Cập nhật lại cấu hình trong OpenClaw**:
   ```bash
   # Cập nhật trong cấu hình toàn cục
   openclaw config set models.providers.anthropic.apiKey "sk-ant-new"
   
   # Hoặc cập nhật trong biến môi trường
   export ANTHROPIC_API_KEY="sk-ant-new"
   ```

4. **Dọn sạch khóa cũ trong các file trên đĩa**:
   ```bash
   # Tìm kiếm xem khóa cũ còn sót ở đâu không
   grep -r "sk-ant-old" ~/.openclaw/
   
   # Hủy cấu hình khóa cũ nếu cần
   openclaw config unset models.providers.anthropic.apiKey
   ```

---

## 📋 Chiến lược Cấu hình Tối ưu Khuyên dùng

### Dành cho người mới bắt đầu

1. **Sử dụng wizard hướng dẫn**:
   ```bash
   openclaw onboard
   ```

2. **Hoặc thêm xác thực toàn cục trực tiếp**:
   ```bash
   openclaw models auth add
   ```

3. **Kiểm tra kết nối**:
   ```bash
   openclaw models list
   ```

### Dành cho người dùng nâng cao

1. **Sử dụng cấu hình riêng cho từng Agent**:
   ```bash
   openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
   ```

2. **Tận dụng linh hoạt các tầng ưu tiên**:
   - Cấu hình toàn cục làm giá trị mặc định cho toàn hệ thống
   - Cấu hình riêng cho Agent dùng để ghi đè theo từng nghiệp vụ chuyên biệt
   - Biến môi trường dùng cho các trường hợp thử nghiệm nhanh hoặc trong script tạm

3. **Định kỳ sao lưu thư mục cấu hình**:
   ```bash
   cp -r ~/.openclaw ~/.openclaw.backup-$(date +%Y%m%d)
   ```

### Dành cho môi trường Doanh nghiệp / Production

1. **Sử dụng biến môi trường hoặc Secret Manager để quản lý khóa nhạy cảm**:
   ```yaml
   # Trong tệp docker-compose.yml
   environment:
     - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
   ```

2. **Quản lý cấu hình mẫu qua Git (Tuyệt đối không lưu khóa thật)**:
   ```json
   {
     "models": {
       "providers": {
         "anthropic": {
           "apiKey": "${ANTHROPIC_API_KEY}"
         }
       }
     }
   }
   ```

3. **Tự động hóa triển khai qua kịch bản**:
   ```bash
   ./scripts/setup-config.sh
   ```

---

## 🔐 Nguyên tắc Bảo mật Trọng yếu

### Quản lý API Key an toàn

1. **Tuyệt đối không lưu cứng (hardcode) API Key**:
   - ❌ Không viết thẳng API Key vào mã nguồn ứng dụng
   - ❌ Không commit file chứa Key lên Git repository
   - ✅ Luôn truyền qua biến môi trường hoặc file cấu hình riêng được bảo vệ

2. **Cấu hình tệp `.gitignore` chuẩn xác**:
   ```bash
   # Thêm vào .gitignore
   .openclaw/openclaw.json
   .openclaw/agents/*/openclaw.json
   .openclaw/credentials/
   .env
   ```

3. **Định kỳ luân chuyển (rotate) API Key**:
   - Thay đổi API Key mới sau mỗi 3 đến 6 tháng
   - Lập tức đổi khóa mới nếu nghi ngờ có rò rỉ

4. **Áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege)**:
   - Chỉ cấp đúng quyền và hạn mức chi tiêu cần thiết cho từng Key
   - Tách biệt rõ ràng giữa Key dùng cho môi trường thử nghiệm và môi trường sản xuất

5. **Giám sát lượng tiêu thụ API thường xuyên**:
   - Theo dõi biểu đồ gọi API trên console của nhà cung cấp
   - Cài đặt cảnh báo hạn mức (budget alert) để tránh phát sinh cước phí ngoài ý muốn

---

## 📚 Tài liệu Tham khảo Liên quan

- [Hướng dẫn Cấu trúc Tệp Cấu hình](config-file-structure.md) - Giải thích chi tiết các tệp trong thư mục `~/.openclaw`
- [Chương 2: Cài đặt và Môi trường](01-basics/02-installation.md) - Hướng dẫn triển khai nền tảng
- [Chương 11: Cấu hình Nâng cao](03-advanced/11-advanced-configuration.md) - Mô hình, bộ nhớ, phê duyệt và tối ưu hiệu năng

---

## 💡 Câu hỏi Thường gặp (FAQ)

### Q1: Tôi nên lựa chọn phương thức cấu hình nào?

**Trả lời**: Tùy theo trường hợp của bạn:
- Người mới bắt đầu: Dùng `openclaw onboard` hoặc cấu hình toàn cục
- Hệ thống nhiều Agent: Dùng cấu hình riêng cho từng Agent
- Thử nghiệm nhanh: Gán biến môi trường trong terminal
- Môi trường Docker / CI/CD: Dùng biến môi trường

### Q2: Thứ tự ưu tiên cấu hình chính xác là gì?

**Trả lời**: `Biến môi trường` > `Cấu hình riêng của Agent` > `Cấu hình toàn cục` > `Trình hướng dẫn Onboard` > `Giá trị mặc định của hệ thống`.

### Q3: Làm sao để kiểm tra API Key nào đang thực sự được dùng?

**Trả lời**:
```bash
openclaw config get models.providers.anthropic.apiKey
```

### Q4: Đã lưu cấu hình nhưng OpenClaw không nhận thì xử lý sao?

**Trả lời**:
1. Kiểm tra xem có biến môi trường nào đang ghi đè không (`echo $ANTHROPIC_API_KEY`)
2. Khởi động lại Gateway (`openclaw gateway restart`)
3. Xem nhật ký lỗi (`openclaw logs --tail 50`)
4. Kiểm tra lại định dạng chuỗi ký tự của API Key

### Q5: Làm thế nào để mỗi Agent dùng một API Key khác nhau?

**Trả lời**:
```bash
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent agent1
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent agent2
```

---

**Cập nhật lần cuối**: 14/02/2026  
**Phiên bản áp dụng**: OpenClaw 2026.3.2+
