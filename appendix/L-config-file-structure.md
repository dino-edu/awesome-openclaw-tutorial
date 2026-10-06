# Phụ lục L: Hướng dẫn Toàn diện về Cấu trúc Tệp Cấu hình OpenClaw

## 📁 Cấu trúc Thư mục Tệp Cấu hình

### Thư mục Cấu hình Toàn cục

```text
~/.openclaw/                          # Thư mục gốc cấu hình toàn cục
├── openclaw.json                     # Cấu hình toàn cục (áp dụng chung cho mọi Agent)
├── credentials/                      # Thư mục chứa thông tin xác thực
│   └── oauth.json                   # Thông tin xác thực OAuth
├── agents/                           # Thư mục cấu hình từng Agent
│   ├── main-assistant/               # Agent trợ lý chính
│   │   ├── openclaw.json            # Cấu hình riêng biệt của Agent
│   │   ├── agent/
│   │   │   └── auth-profiles.json   # Hồ sơ xác thực tài khoản
│   │   └── sessions/                # Nhật ký các phiên làm việc
│   │       └── *.jsonl
│   └── tech-dev/                     # Agent chuyên trách kỹ thuật & code
│       ├── openclaw.json
│       └── agent/
│           └── auth-profiles.json
├── skills/                           # Thư mục Skills ở cấp người dùng
│   └── custom-skill/
│       └── SKILL.md
└── logs/                             # Nhật ký hoạt động hệ thống
    └── openclaw.log
```

### Thư mục cấu hình cũ (Đã ngừng sử dụng)

```text
~/.openclaw-main-assistant/           # Thư mục cấu hình phiên bản cũ
└── openclaw.json                     # Không còn sử dụng, đã chuyển sang cấu trúc mới
```

⚠️ **Lưu ý**: Nếu trên hệ thống của bạn vẫn còn tồn tại các thư mục dạng `~/.openclaw-*`, hãy chạy lệnh `openclaw doctor` để hệ thống tự động di chuyển dữ liệu sang cấu trúc mới.

---

## 📝 Chi tiết Từng Tệp Cấu hình

### 1. Tệp Cấu hình Toàn cục (Global Config)

**Đường dẫn**: `~/.openclaw/openclaw.json`

**Mục đích**: Chứa các cấu hình mặc định dùng chung cho toàn bộ các Agent.

**Mức ưu tiên**: Thấp hơn cấu hình riêng của từng Agent.

**Nội dung mẫu**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "port": 18789
  }
}
```

**Các lệnh kiểm tra**:
```bash
# Xem toàn bộ cấu hình toàn cục
openclaw config get

# Xem một trường cấu hình cụ thể
openclaw config get models.default

# Mở tệp cấu hình bằng nano
nano ~/.openclaw/openclaw.json
```

---

### 2. Tệp Cấu hình Riêng cho Agent (Agent-specific Config)

**Đường dẫn**: `~/.openclaw/agents/<agentId>/openclaw.json`

**Mục đích**: Cấu hình chuyên biệt dành riêng cho một Agent cụ thể (định nghĩa tính cách, mô hình riêng, workspace riêng).

**Mức ưu tiên**: Cao hơn cấu hình toàn cục.

**Nội dung mẫu**:
```json
{
  "models": {
    "default": "openai/gpt-4",
    "providers": {
      "openai": {
        "apiKey": "sk-xxx"
      }
    }
  },
  "persona": {
    "name": "Trợ lý Phát triển Kỹ thuật",
    "role": "Chuyên trách viết mã và giải quyết các bài toán kỹ thuật"
  }
}
```

**Các lệnh quản trị**:
```bash
# Xem cấu hình của Agent cụ thể
openclaw config get --agent tech-dev

# Đặt cấu hình cho Agent
openclaw config set models.default "openai/gpt-4" --agent tech-dev

# Mở tệp cấu hình của Agent
nano ~/.openclaw/agents/tech-dev/openclaw.json
```

---

### 3. Tệp Hồ sơ Xác thực (Auth Profiles)

**Đường dẫn**: `~/.openclaw/agents/<agentId>/agent/auth-profiles.json`

**Mục đích**: Lưu trữ thông tin định danh và các API Key của Agent.

**Mức ưu tiên**: Ưu tiên cao nhất trong quá trình xác thực provider.

**Nội dung mẫu**:
```json
{
  "profiles": [
    {
      "provider": "anthropic",
      "apiKey": "sk-ant-xxx",
      "createdAt": "2026-02-14T10:00:00Z"
    },
    {
      "provider": "openai",
      "apiKey": "sk-xxx",
      "createdAt": "2026-02-14T10:00:00Z"
    }
  ]
}
```

**Các lệnh thao tác**:
```bash
# Thêm xác thực mới qua giao diện tương tác
openclaw models auth add

# Xem tệp hồ sơ xác thực
cat ~/.openclaw/agents/main-assistant/agent/auth-profiles.json

# Xóa tệp hồ sơ xác thực khi cần đặt lại
rm ~/.openclaw/agents/main-assistant/agent/auth-profiles.json
```

---

### 4. Tệp Thông tin Xác thực OAuth

**Đường dẫn**: `~/.openclaw/credentials/oauth.json`

**Mục đích**: Lưu trữ token xác thực OAuth khi đăng nhập qua trình duyệt.

**Mức ưu tiên**: Thấp hơn (khuyến khích ưu tiên dùng `auth-profiles.json`).

**Nội dung mẫu**:
```json
{
  "google": {
    "accessToken": "ya29.xxx",
    "refreshToken": "1//xxx",
    "expiresAt": "2026-02-14T11:00:00Z"
  }
}
```

**Ghi chú**: Đây là phương thức lưu trữ OAuth thế hệ trước, các phiên bản mới của OpenClaw ưu tiên sử dụng `auth-profiles.json` đồng bộ với `openclaw models auth`.

---

## 🔄 Thứ tự Ưu tiên Cấu hình

### Phân cấp từ cao xuống thấp

```text
1. Biến môi trường (Environment Variables) - Cao nhất
   ↓
2. Cấu hình riêng của Agent (~/.openclaw/agents/<agentId>/openclaw.json)
   ↓
3. Cấu hình toàn cục (~/.openclaw/openclaw.json)
   ↓
4. Giá trị mặc định của hệ thống (Defaults) - Thấp nhất
```

### Ví dụ minh họa

Giả sử bạn thiết lập đồng thời:

**Biến môi trường**:
```bash
export ANTHROPIC_API_KEY="sk-ant-env"
```

**Cấu hình Agent** (`~/.openclaw/agents/tech-dev/openclaw.json`):
```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-agent"
      }
    }
  }
}
```

**Cấu hình toàn cục** (`~/.openclaw/openclaw.json`):
```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-global"
      }
    }
  }
}
```

**API Key thực tế được chọn**: `sk-ant-env` (vì biến môi trường luôn đứng đầu bảng ưu tiên).

---

## 🔍 Các Lệnh Tra cứu Cấu hình

### Xem đường dẫn tệp cấu hình

```bash
# Xem đường dẫn tệp cấu hình toàn cục
openclaw config path

# Xem đường dẫn tệp cấu hình của Agent cụ thể
openclaw config path --agent tech-dev
```

### Xem nội dung cấu hình chi tiết

```bash
# Xem toàn bộ cấu hình đang áp dụng
openclaw config get

# Xem một trường cấu hình nhất định
openclaw config get models.providers.anthropic.apiKey

# Xem cấu hình của một Agent
openclaw config get --agent tech-dev

# Xuất toàn bộ cấu hình ra định dạng JSON
openclaw config get --json
```

### Xem trạng thái cấu hình đang hoạt động trên hệ thống

```bash
# Xem danh sách các mô hình khả dụng
openclaw models list

# Xem trạng thái hoạt động của Gateway
openclaw gateway status

# Liệt kê tất cả các Agent đang có
openclaw agents list
```

---

## ⚙️ Các Lệnh Chỉnh sửa Cấu hình

### Thiết lập giá trị mới

```bash
# Thiết lập cấu hình toàn cục
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# Thiết lập cấu hình cho một Agent riêng biệt
openclaw config set models.default "openai/gpt-4" --agent tech-dev

# Thiết lập API Key cho provider
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"
```

### Xóa trường cấu hình

```bash
# Xóa một trường trong cấu hình toàn cục
openclaw config unset models.providers.anthropic.apiKey

# Xóa một trường trong cấu hình của Agent
openclaw config unset models.default --agent tech-dev
```

### Đặt lại cấu hình (Reset)

```bash
# Khôi phục cấu hình toàn cục về mặc định
openclaw config reset

# Khôi phục cấu hình của Agent về mặc định
openclaw config reset --agent tech-dev
```

---

## 🛠️ Các Tình huống Thực tế Phổ biến

### Tình huống 1: Chỉ chạy một Agent duy nhất, dùng cấu hình toàn cục

**Cách thiết lập**:
```bash
# Thiết lập API Key trực tiếp trong cấu hình toàn cục
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"
```

**Ưu điểm**:
- ✅ Cấu hình một lần duy nhất, áp dụng toàn hệ thống
- ✅ Quản lý cực kỳ gọn nhẹ

**Nhược điểm**:
- ❌ Mọi tác vụ đều chia sẻ chung một tài khoản và mô hình

---

### Tình huống 2: Nhiều Agent độc lập, cấu hình chuyên biệt từng người

**Cách thiết lập**:
```bash
# Cấu hình riêng cho từng Agent
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer
```

**Ưu điểm**:
- ✅ Mỗi Agent hoàn toàn độc lập về mô hình và chìa khóa
- ✅ Tính linh hoạt rất cao, đáp ứng đúng từng chuyên môn

**Nhược điểm**:
- ❌ Cần quản lý cấu hình ở nhiều tệp khác nhau

---

### Tình huống 3: Dùng biến môi trường (Phục vụ thử nghiệm nhanh)

**Cách thiết lập**:
```bash
# Thiết lập tạm thời trong terminal hiện tại
export ANTHROPIC_API_KEY="sk-ant-xxx"

# Hoặc thiết lập vĩnh viễn trong ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.zshrc
source ~/.zshrc
```

**Ưu điểm**:
- ✅ Mức ưu tiên cao nhất, lập tức ghi đè cấu hình trên đĩa
- ✅ Rất lý tưởng cho Docker và CI/CD
- ✅ Không lưu vết khóa nhạy cảm vào tệp cấu hình JSON

**Nhược điểm**:
- ❌ Mất hiệu lực khi đóng phiên terminal (nếu không ghi vào file shell profile)

---

## 🔧 Chẩn đoán và Xử lý Sự cố Thường gặp

### Vấn đề 1: Đổi cấu hình nhưng hệ thống không nhận

**Trình tự kiểm tra**:

1. **Rà soát lại thứ tự ưu tiên**:
   ```bash
   # Kiểm tra biến môi trường có đang ghi đè không
   echo $ANTHROPIC_API_KEY
   
   # Xem giá trị cấu hình đang thực sự có hiệu lực
   openclaw config get models.providers.anthropic.apiKey
   ```

2. **Khởi động lại Gateway**:
   ```bash
   openclaw gateway restart
   ```

3. **Xem nhật ký hệ thống**:
   ```bash
   openclaw logs --tail 50
   ```

---

### Vấn đề 2: Không tìm thấy tệp cấu hình trên máy

**Trình tự kiểm tra**:

1. **Kiểm tra xem tệp có tồn tại trên đĩa không**:
   ```bash
   ls -la ~/.openclaw/openclaw.json
   ls -la ~/.openclaw/agents/*/openclaw.json
   ```

2. **Chạy lệnh tự chẩn đoán và sửa lỗi của OpenClaw**:
   ```bash
   openclaw doctor
   ```

3. **Tự khởi tạo tệp cấu hình tối thiểu nếu bị mất**:
   ```bash
   mkdir -p ~/.openclaw
   echo '{}' > ~/.openclaw/openclaw.json
   ```

---

### Vấn đề 3: Cấu hình giữa các Agent bị lẫn lộn

**Cách xử lý**:

1. **Liệt kê lại toàn bộ Agent hiện có**:
   ```bash
   openclaw agents list
   ```

2. **Kiểm tra rà soát cấu hình của từng Agent**:
   ```bash
   openclaw config get --agent main-assistant
   openclaw config get --agent tech-dev
   ```

3. **Chuẩn hóa lại phương thức quản lý**:
   - Sử dụng cấu hình toàn cục làm nền tảng chung + ghi đè ở Agent khi cần
   - Hoặc tách riêng biệt hoàn toàn cấu hình ở mỗi Agent

---

## 📋 Mẫu Tệp Cấu hình Tham khảo

### Mẫu cấu hình tối giản (Minimal Template)

```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      }
    }
  }
}
```

### Mẫu cấu hình đầy đủ tính năng (Full Template)

```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx",
        "baseUrl": "https://api.anthropic.com"
      },
      "openai": {
        "apiKey": "sk-xxx",
        "baseUrl": "https://api.openai.com"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "port": 18789,
    "bind": "loopback"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "xxx"
    },
    "discord": {
      "enabled": true,
      "token": "xxx"
    }
  },
  "skills": {
    "autoLoad": true,
    "paths": [
      "~/.openclaw/skills",
      "./skills"
    ]
  }
}
```

---

## 🔗 Liên kết Tham khảo Liên quan

- [Chương 2: Cài đặt và Môi trường](../docs/01-basics/02-installation.md) - Hướng dẫn triển khai OpenClaw
- [Chương 11: Cấu hình Nâng cao](../docs/03-advanced/11-advanced-configuration.md) - Tối ưu mô hình, bộ nhớ, phê duyệt và hiệu năng
- [Mẫu Tệp Cấu hình Chuẩn](H-config-templates.md) - Bộ sưu tập các mẫu cấu hình cho nhiều kịch bản

---

## 💡 Thực hành Tối ưu

### Lời khuyên theo từng đối tượng

1. **Người mới bắt đầu**:
   - Ưu tiên dùng cấu hình toàn cục
   - Thay đổi thông số qua lệnh CLI `openclaw config set`
   - Hạn chế sửa thủ công file JSON để tránh lỗi cú pháp dấu phẩy hoặc ngoặc

2. **Người dùng nâng cao**:
   - Sử dụng cấu hình riêng cho từng Agent chuyên trách
   - Nắm vững và tận dụng các tầng ưu tiên cấu hình
   - Thường xuyên sao lưu thư mục `~/.openclaw`

3. **Môi trường Doanh nghiệp**:
   - Sử dụng biến môi trường hoặc Secret Manager để quản lý khóa nhạy cảm
   - Lưu trữ các mẫu tệp cấu hình (template) vào Git, không chứa khóa thật
   - Triển khai cấu hình tự động thông qua CI/CD và Docker

### Nguyên tắc bảo trì cấu hình

1. **Sao lưu định kỳ**:
   ```bash
   cp -r ~/.openclaw ~/.openclaw.backup-$(date +%Y%m%d)
   ```

2. **Quản lý phiên bản an toàn**:
   - Đưa cấu hình mẫu không chứa secret vào Git
   - Đảm bảo file `.gitignore` loại trừ toàn bộ khóa bí mật và thông tin nhạy cảm

3. **Ghi chú rõ ràng**:
   - Lưu lại mục đích sử dụng của các Agent
   - Ghi chú lịch sử thay đổi để thuận tiện truy vết khi phát sinh sự cố

---

**Cập nhật lần cuối**: 14/02/2026  
**Phiên bản áp dụng**: OpenClaw 2026.3.2+
---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/L-config-file-structure/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp sẵn công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi qua lại giữa các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
