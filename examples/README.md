# Thư mục Tệp Mẫu OpenClaw (Examples)

Thư mục này chứa các tệp cấu hình mẫu, kịch bản tự động hóa (scripts) và ví dụ phát triển Skills cho OpenClaw.

## 📁 Cấu trúc thư mục

```
examples/
├── configs/              # Tệp cấu hình mẫu
│   ├── basic-config.json           # Cấu hình cơ bản (nhập môn)
│   ├── multi-model-config.json     # Cấu hình đa mô hình
│   ├── multi-agent-config.json     # Cấu hình đa Agent
│   └── feishu-config.json          # Cấu hình Lark / Feishu Bot
├── automation/           # Kịch bản tự động hóa (Shell scripts)
│   ├── daily-report.sh             # Tự động tạo báo cáo AI hằng ngày
│   ├── backup-config.sh            # Sao lưu cấu hình tự động
│   ├── batch-process-files.sh      # Xử lý tệp tin hàng loạt theo lô
│   └── website-monitor.sh          # Giám sát thay đổi nội dung website
└── skills/               # Ví dụ phát triển Skills
    ├── custom-skill-template.js    # Mẫu khung phát triển Skill tùy biến
    └── weather-skill-example.js    # Ví dụ Skill tra cứu thời tiết
```

## 📋 Hướng dẫn các tệp cấu hình

### basic-config.json
Cấu hình tối giản nhất, phù hợp cho người mới bắt đầu:
- Xác thực bằng Token
- Một Agent duy nhất
- Thiết lập thông số cơ bản

**Cách sử dụng:**
```bash
cp examples/configs/basic-config.json ~/.openclaw/openclaw.json
# Chỉnh sửa tệp cấu hình, điền token và API key của bạn
```

### multi-model-config.json
Cấu hình đa mô hình, linh hoạt sử dụng mô hình phù hợp theo từng tác vụ:
- DeepSeek: Sử dụng thường nhật, chi phí tiết kiệm
- Kimi: Xử lý tài liệu dài (Long-context)
- GPT-4: Các tác vụ suy luận logic phức tạp

**Cách sử dụng:**
```bash
cp examples/configs/multi-model-config.json ~/.openclaw/openclaw.json
# Tùy chỉnh danh sách mô hình theo nhu cầu của bạn
```

### multi-agent-config.json
Cấu hình đa Agent chuyên môn hóa theo vai trò:
- Trợ lý công việc: Xử lý các đầu việc chuyên môn
- Trợ lý cá nhân: Hội thoại thường nhật và giải trí
- Trợ lý lập trình: Hỗ trợ viết mã và gỡ lỗi
- Trợ lý sáng tạo nội dung: Soạn thảo bài viết, kịch bản

**Cách sử dụng:**
```bash
cp examples/configs/multi-agent-config.json ~/.openclaw/openclaw.json
# Điều chỉnh cấu hình của từng Agent theo mục đích sử dụng
```

### feishu-config.json
Cấu hình tích hợp hoàn chỉnh cho Lark / Feishu Bot:
- Khai báo thông tin ứng dụng Lark / Feishu (App ID, Secret)
- Cấu hình xác thực Webhook / Event
- Thiết lập Agent tiếp nhận thông điệp

**Cách sử dụng:**
```bash
cp examples/configs/feishu-config.json ~/.openclaw/openclaw.json
# Điền thông tin ứng dụng Lark / Feishu của bạn
```

## 🤖 Hướng dẫn các kịch bản tự động hóa

### daily-report.sh
Tự động tổng hợp bản tin ngành AI hằng ngày và gửi thông báo đến nền tảng được chỉ định.

**Cách sử dụng:**
```bash
# 1. Cấp quyền thực thi
chmod +x examples/automation/daily-report.sh

# 2. Chỉnh sửa script, cấu hình API và phương thức nhận thông báo
vim examples/automation/daily-report.sh

# 3. Thêm vào crontab (thực thi lúc 9:00 sáng mỗi ngày)
crontab -e
# Thêm dòng sau:
0 9 * * * /path/to/examples/automation/daily-report.sh
```

### backup-config.sh
Tự động sao lưu định kỳ tệp cấu hình OpenClaw.

**Cách sử dụng:**
```bash
# 1. Cấp quyền thực thi
chmod +x examples/automation/backup-config.sh

# 2. Chạy sao lưu thủ công thử nghiệm
./examples/automation/backup-config.sh

# 3. Thêm vào crontab (thực thi lúc 2:00 sáng mỗi ngày)
crontab -e
# Thêm dòng sau:
0 2 * * * /path/to/examples/automation/backup-config.sh
```

### batch-process-files.sh
Mẫu script xử lý hàng loạt tài liệu theo lô.

**Cách sử dụng:**
```bash
# 1. Cấp quyền thực thi
chmod +x examples/automation/batch-process-files.sh

# 2. Chỉnh sửa logic xử lý trong script theo nhu cầu
vim examples/automation/batch-process-files.sh

# 3. Thực thi script
./examples/automation/batch-process-files.sh ./input ./output
```

### website-monitor.sh
Giám sát biến động nội dung trên website chỉ định, gửi cảnh báo khi phát hiện thay đổi hoặc từ khóa.

**Cách sử dụng:**
```bash
# 1. Cấp quyền thực thi
chmod +x examples/automation/website-monitor.sh

# 2. Chạy giám sát thử nghiệm
./examples/automation/website-monitor.sh "https://example.com" "từ khóa" feishu

# 3. Thêm vào crontab (kiểm tra mỗi tiếng một lần)
crontab -e
# Thêm dòng sau:
0 * * * * /path/to/examples/automation/website-monitor.sh "https://example.com" "từ khóa" feishu
```

## 🔧 Hướng dẫn phát triển Skills

### custom-skill-template.js
Mẫu khung chuẩn để phát triển một Skill mới, bao gồm đầy đủ các hook vòng đời (lifecycle hooks) và best practices.

**Cách sử dụng:**
```bash
# 1. Sao chép mẫu
cp examples/skills/custom-skill-template.js ~/.openclaw/skills/my-skill.js

# 2. Chỉnh sửa mã nguồn để hiện thực hóa tính năng
vim ~/.openclaw/skills/my-skill.js

# 3. Đăng ký Skill trong openclaw.json
{
  "skills": {
    "my-skill": {
      "enabled": true,
      "path": "~/.openclaw/skills/my-skill.js"
    }
  }
}
```

### weather-skill-example.js
Ví dụ Skill tra cứu thông tin thời tiết thực tế, minh họa cách:
- Phân tích ý định người dùng (Intent Parsing)
- Gọi API dịch vụ bên ngoài
- Định dạng dữ liệu phản hồi
- Xử lý lỗi ngoại lệ

**Cách sử dụng:**
```bash
# 1. Sao chép ví dụ
cp examples/skills/weather-skill-example.js ~/.openclaw/skills/weather-query.js

# 2. Cấu hình API key (tùy chọn)
vim ~/.openclaw/openclaw.json
# Thêm vào:
{
  "skills": {
    "weather-query": {
      "apiKey": "your-weather-api-key"
    }
  }
}

# 3. Khởi động lại OpenClaw Gateway
openclaw gateway restart
```

## ⚠️ Lưu ý quan trọng

1. **Bảo mật tệp cấu hình**:
   - Tuyệt đối không commit các tệp cấu hình chứa API key thật lên Git
   - Sử dụng biến môi trường để lưu trữ các thông tin nhạy cảm
   - Định kỳ thay đổi (rotate) mã token và khóa truy cập

2. **Quyền hạn kịch bản Shell**:
   - Luôn kiểm tra nội dung mã script trước khi cho phép chạy
   - Chỉ thực thi các script từ nguồn tin cậy
   - Dùng `chmod +x` để cấp quyền thực thi khi cần thiết

3. **Phát triển Skill**:
   - Tuân thủ quy chuẩn giao diện Skill của OpenClaw
   - Bổ sung cơ chế bắt lỗi và xử lý ngoại lệ đầy đủ
   - Viết tài liệu hướng dẫn và chú thích rõ ràng

4. **Tác vụ tự động hóa**:
   - Luôn chạy thử script thủ công thành công trước khi đưa vào crontab
   - Đảm bảo script có cơ chế ghi log chuẩn xác
   - Định kỳ kiểm tra log thực thi để kịp thời phát hiện lỗi treo

## 📚 Tài nguyên tham khảo thêm

- [Tài liệu chính thức OpenClaw](https://docs.openclaw.ai)
- [Hướng dẫn mở rộng Skill](../docs/03-advanced/08-skills-extension.md)
- [Cấu trúc tệp cấu hình chi tiết](../appendix/L-config-file-structure.md)
- [Xử lý sự cố thường gặp](../appendix/E-common-problems.md)

## 💡 Đóng góp

Cộng đồng luôn hoan nghênh các đóng góp về tệp cấu hình mẫu và kịch bản thực tiễn! Vui lòng tham khảo [Hướng dẫn đóng góp](../README.md).
