# Phụ lục E: Tra Cứu Nhanh Các Sự Cố Thường Gặp

> 💡 **Định vị nhanh sự cố**: Phụ lục này tổng hợp các vấn đề thường gặp nhất trong quá trình cài đặt và vận hành OpenClaw kèm theo giải pháp xử lý chi tiết, giúp bạn nhanh chóng khắc phục và khôi phục hệ thống.

## 📋 Mục lục

- [Sự cố cài đặt và cấu hình](#sự-cố-cài-đặt-và-cấu-hình)
- [Sự cố kết nối API](#sự-cố-kết-nối-api)
- [Sự cố Gateway](#sự-cố-gateway)
- [Sự cố Skills](#sự-cố-skills)
- [Sự cố tích hợp nền tảng chat](#sự-cố-tích-hợp-nền-tảng-chat)
- [Sự cố hiệu năng và tài nguyên](#sự-cố-hiệu-năng-và-tài-nguyên)

---

## Sự cố cài đặt và cấu hình

### Q1: Cài đặt thất bại thì xử lý thế nào?

**Triệu chứng**: Xuất hiện thông báo lỗi khi thực thi lệnh cài đặt

**Giải pháp**:

1. **Kiểm tra phiên bản Node.js**
```bash
node --version  # Yêu cầu v22.14.0 trở lên (riêng macOS yêu cầu v22.16.0+)
```

2. **Sử dụng script cài đặt chính thức**
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

3. **Cài đặt trực tiếp qua npm**
```bash
npm install -g openclaw
```

4. **Kiểm tra kết nối mạng**
- Nếu đường truyền quốc tế bị bóp băng thông, hãy cân nhắc sử dụng proxy hoặc mirror thích hợp

### Q2: Gặp lỗi phân quyền (Permission denied)?

**Triệu chứng**: Báo lỗi không đủ thẩm quyền khi cài đặt hoặc khởi chạy

**Giải pháp**:

```bash
# macOS/Linux
sudo npm install -g openclaw

# Hoặc sử dụng nvm để quản lý phiên bản Node (Khuyến nghị)
nvm install node
nvm use node
npm install -g openclaw
```

### Q3: Kết nối mạng bị hết thời gian chờ (Timeout)?

**Triệu chứng**: Quá trình tải gói cài đặt hoặc cập nhật bị treo hoặc timeout

**Giải pháp**:

1. **Sử dụng mirror npm uy tín**
```bash
npm config set registry https://registry.npmjs.org/
```

2. **Thiết lập proxy cho npm**
```bash
npm config set proxy http://proxy-server:port
npm config set https-proxy http://proxy-server:port
```

3. **Cài đặt ngoại tuyến từ gói tải về**
```bash
# Tải gói tarball về máy rồi cài cục bộ
npm install -g ./openclaw-*.tgz
```

### Q4: Môi trường WSL / Linux sau khi cài đặt báo thiếu tài nguyên Control UI? (Lỗi đã biết trên bản v2026.3.22)

**Triệu chứng**: Sau khi cài đặt bằng `npm install -g openclaw`, lúc khởi động xuất hiện thông báo:

```text
Missing Control UI assets. You can build them yourself with: pnpm ui:build
```

Hoặc khi thực thi `pnpm ui:build` lại báo tiếp:

```text
Cannot find module '.../scripts/ui.js'
```

**Nguyên nhân**: Khi đóng gói bản `openclaw@2026.3.22` lên npm, nhà phát triển đã bỏ sót tệp `scripts/ui.js` và các tài nguyên UI đã biên dịch sẵn, **đây không phải lỗi do thao tác của người dùng**.

**Giải pháp**:

**Cách 1: Nâng cấp lên phiên bản mới nhất (Khuyến nghị)**

```bash
npm install -g openclaw@latest
openclaw --version  # Xác nhận phiên bản từ 2026.3.24 trở lên
```

**Cách 2: Xác nhận phiên bản Node.js có đáp ứng yêu cầu hay không**

```bash
node --version
# Môi trường Linux/WSL yêu cầu >= 22.14.0
# Môi trường macOS yêu cầu >= 22.16.0
```

Nếu phiên bản không đạt chuẩn, hãy nâng cấp Node trước:

```bash
# Nâng cấp thông qua nvm
nvm install 22
nvm use 22
npm install -g openclaw@latest
```

**Cách 3: Tạm thời biên dịch thủ công từ mã nguồn nếu vẫn gặp lỗi**

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
pnpm ui:build
pnpm build
```

> ⚠️ **Lưu ý**: Đối với môi trường WSL, khuyến nghị ưu tiên Cách 1. Lỗi này đã được khắc phục hoàn toàn từ phiên bản v2026.3.24+.

---

## Sự cố kết nối API

### Q4: Kết nối API thất bại hoặc bị timeout?

**Triệu chứng**: Hệ thống báo lỗi kết nối API hoặc hết hạn chờ phản hồi

**Giải pháp**:

1. **Kiểm tra xem API Key đã cấu hình đúng chưa**
```bash
openclaw config get env | grep API_KEY
```

2. **Kiểm tra kết nối trực tiếp đến endpoint API**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.anthropic.com/v1/messages
```

3. **Kiểm tra độ thông mạng**
```bash
ping api.anthropic.com
```

4. **Sử dụng dịch vụ chuyển tiếp API (Proxy Relay)**
- Tham khảo Phụ lục C: So sánh các nhà cung cấp dịch vụ API

### Q5: Chi phí gọi API quá cao so với dự kiến?

**Triệu chứng**: Ngân sách API bị cạn kiệt nhanh chóng

**Giải pháp**:

1. **Sử dụng các mô hình tiết kiệm chi phí**
- DeepSeek: Tiết kiệm tới 95% chi phí suy luận
- Kimi: Chi phí rất tối ưu cho tài liệu ngữ cảnh dài
- Qwen / GLM-4: Hiệu năng mạnh mẽ với mức giá hợp lý

2. **Kết hợp linh hoạt nhiều mô hình**
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxx",
    "DEEPSEEK_API_KEY": "sk-xxx"
  },
  "agents": [
    {
      "name": "assistant",
      "model": "claude-3-5-sonnet-20241022"
    },
    {
      "name": "coder",
      "model": "deepseek-chat"
    }
  ]
}
```

3. **Thu hẹp hồ sơ quyền hạn của công cụ**
```bash
openclaw config set tools.profile "coding"  # Giới hạn phạm vi kích hoạt công cụ để tránh tốn token dư thừa
```

---

## Sự cố Gateway

### Q6: Cổng Gateway khởi động thất bại?

**Triệu chứng**: Thực thi `openclaw daemon start` hoặc `openclaw gateway start` nhưng Gateway không thể kích hoạt

**Giải pháp**:

1. **Chẩn đoán cấu hình hệ thống**
```bash
openclaw doctor  # Tự động quét và phát hiện các điểm bất thường trong cấu hình
```

2. **Kiểm tra xem cổng mạng (port) có bị ứng dụng khác chiếm dụng không**
```bash
lsof -i :18789  # Trên macOS/Linux
netstat -ano | findstr :18789  # Trên Windows
```

3. **Xem tệp nhật ký ghi lỗi**
```bash
tail -f ~/.openclaw/logs/gateway.log
```

4. **Khởi động lại tiến trình Gateway**
```bash
openclaw daemon stop
openclaw daemon start
```

### Q7: Lỗi xác thực Gateway (Từ bản v2026.3.7 trở lên)?

**Triệu chứng**: Sau khi nâng cấp, Gateway từ chối khởi động và yêu cầu phải cấu hình cơ chế xác thực an toàn

**Giải pháp**:

```bash
# Thiết lập xác thực bằng token an toàn
openclaw config set gateway.auth.mode "token"
openclaw config set gateway.auth.token "$(openssl rand -hex 32)"

# Khởi động lại dịch vụ Gateway
openclaw daemon restart
```

### Q8: Cổng kết nối bị chiếm dụng (Port conflict)?

**Triệu chứng**: Báo lỗi cổng 18789 đã được sử dụng bởi một tiến trình khác

**Giải pháp**:

1. **Đổi sang một cổng khả dụng khác**
```bash
openclaw config set gateway.port 18790
```

2. **Dừng tiến trình đang chiếm cổng**
```bash
# Tìm và chấm dứt tiến trình đang chiếm cổng 18789
lsof -ti :18789 | xargs kill -9
```

---

## Sự cố Skills

### Q9: Cài đặt Skills thất bại?

**Triệu chứng**: Lệnh `clawhub install` báo lỗi không thể hoàn tất

**Giải pháp**:

1. **Kiểm tra kết nối tới máy chủ ClawHub**
```bash
ping clawhub.ai
```

2. **Sử dụng registry dự phòng nếu có**
```bash
clawhub install skill-name --registry https://mirror.clawhub.ai
```

3. **Cài đặt thủ công từ kho Git**
```bash
# Tải mã nguồn của Skill
git clone https://github.com/user/skill-repo.git

# Cài đặt các thư viện phụ thuộc
cd skill-repo
npm install

# Sao chép vào thư mục Skills của OpenClaw
cp -r . ~/.openclaw/skills/skill-name
```

### Q10: Skill đã cài đặt nhưng không hoạt động?

**Triệu chứng**: Đã cài đặt Skill thành công nhưng Agent không gọi được chức năng

**Giải pháp**:

1. **Kiểm tra tệp định nghĩa của Skill**
```bash
cat ~/.openclaw/skills/skill-name/SKILL.md
```

2. **Khởi động lại Gateway để nạp lại danh sách công cụ**
```bash
openclaw daemon restart
```

3. **Kiểm tra danh sách quyền cho phép (allowlist)**
```bash
openclaw config get skills.allowlist
```

4. **Theo dõi nhật ký lỗi riêng của Skills**
```bash
tail -f ~/.openclaw/logs/skills.log
```

### Q11: Làm thế nào để gỡ bỏ (uninstall) một Skill?

**Giải pháp**:

```bash
# Gỡ bỏ thông qua lệnh clawhub
clawhub uninstall skill-name

# Hoặc xóa thư mục thủ công
rm -rf ~/.openclaw/skills/skill-name

# Khởi động lại Gateway
openclaw daemon restart
```

### Q12: Xuất hiện xung đột giữa nhiều Skills?

**Triệu chứng**: Các Skills can thiệp lẫn nhau hoặc trùng lặp định nghĩa lệnh

**Giải pháp**:

1. **Kiểm tra danh sách toàn bộ Skills đang kích hoạt**
```bash
clawhub list
```

2. **Thêm Skill gây xung đột vào danh sách cấm (denylist)**
```json
{
  "skills": {
    "denylist": ["skill-a", "skill-b"]
  }
}
```

3. **Ghim phiên bản ổn định cho từng Skill**
```bash
clawhub install skill-name@version
```

---

## Sự cố tích hợp nền tảng chat

### Q13: Bot Lark / Feishu không phản hồi tin nhắn?

**Triệu chứng**: Gửi tin nhắn cho bot trong Lark / Feishu nhưng bot im lặng hoàn toàn

**Giải pháp**:

1. **Kiểm tra trạng thái bot**
```bash
openclaw status
```

2. **Kiểm tra cấu hình kênh Feishu**
```bash
openclaw config get channels.feishu
```

3. **Xác thực kết nối Webhook**
```bash
curl -X POST https://open.feishu.cn/open-apis/bot/v2/hook/xxx \
  -H "Content-Type: application/json" \
  -d '{"msg_type":"text","content":{"text":"Kiểm tra kết nối"}}'
```

4. **Sử dụng danh sách kiểm tra cấu hình**
- Tham khảo: [Phụ lục J: Danh sách kiểm tra cấu hình Bot Lark / Feishu](J-feishu-checklist.md)

### Q14: Cấu hình Bot WeCom (WeChat Doanh nghiệp) thất bại?

**Triệu chứng**: Bot WeCom không thể kết nối hoặc báo lỗi URL xác thực

**Giải pháp**:

1. Kiểm tra lại CorpID và Secret của ứng dụng
2. Xác thực cấu hình Token và EncodingAESKey tại trang quản trị WeCom
3. Đảm bảo ứng dụng có đủ quyền truy cập danh bạ nhân sự
4. Thực hiện tuần tự theo hướng dẫn tại Chương 9

### Q15: Có thể kết nối trực tiếp vào WeChat cá nhân không?

**Triệu chứng**: Người dùng muốn tương tác với OpenClaw Agent trực tiếp trên ứng dụng WeChat cá nhân

**Giải pháp**:

OpenClaw cung cấp giải pháp **kết nối WeChat chính thức thông qua ClawBot** (Bổ sung từ Sách Cam v1.4):

1. **Cài đặt plugin chính thức**:
   ```bash
   openclaw plugins install @openclaw/wechat-clawbot
   ```

2. **Kích hoạt kênh WeChat**:
   ```bash
   openclaw config set channels.wechat.enabled true
   ```

3. **Khởi động lại Gateway**:
   ```bash
   openclaw gateway restart
   ```

**Lưu ý quan trọng**:
- Plugin ClawBot hoạt động dựa trên WeChatFerry, hiện tại chủ yếu hỗ trợ môi trường Windows
- **Khuyến nghị mạnh mẽ sử dụng tài khoản phụ (nick phụ)** do WeChat kiểm soát nghiêm ngặt nguy cơ khóa tài khoản
- Xem chi tiết tại [Chương 9: Mục 9.5 Kết nối WeChat](../docs/03-advanced/09-multi-platform-integration.md)

### Q16: Bot Telegram không phản hồi?

**Triệu chứng**: Gửi tin nhắn trên Telegram nhưng bot không có tín hiệu trả lời

**Giải pháp**:

1. **Kiểm tra mã Bot Token**
```bash
openclaw config get channels.telegram.botToken
```

2. **Kiểm tra tính hợp lệ của Token với máy chủ Telegram**
```bash
curl https://api.telegram.org/bot<TOKEN>/getMe
```

3. **Kiểm tra cấu hình Webhook hiện tại**
```bash
curl https://api.telegram.org/bot<TOKEN>/getWebhookInfo
```

---

## Sự cố hiệu năng và tài nguyên

### Q17: Tốc độ phản hồi của hệ thống bị chậm?

**Giải pháp**:

1. **Chuyển sang sử dụng các mô hình có độ trễ thấp**
- DeepSeek: Tốc độ phản hồi cực nhanh, hạ tầng tối ưu
- Claude 3.5 Sonnet / Claude 3 Haiku: Cân bằng xuất sắc giữa tốc độ và độ chuẩn xác

2. **Cắt giảm bớt độ dài ngữ cảnh lịch sử**
```bash
# Xóa lịch sử trò chuyện đã cũ
openclaw chat clear
```

3. **Tinh chỉnh các tham số sinh văn bản**
```json
{
  "agents": [{
    "maxTokens": 4096,
    "temperature": 0.7
  }]
}
```

### Q18: Mức chiếm dụng bộ nhớ RAM quá cao?

**Giải pháp**:

1. **Giới hạn số lượng phiên trò chuyện đồng thời**
```bash
openclaw config set sessions.max 10
```

2. **Định kỳ khởi động lại Gateway để giải phóng RAM**
```bash
openclaw daemon restart
```

3. **Triển khai cô lập thông qua Docker kèm giới hạn tài nguyên**
```bash
docker run -d --memory="2g" openclaw/openclaw
```

### Q19: Dung lượng ổ đĩa bị đầy?

**Giải pháp**:

1. **Dọn dẹp các tệp nhật ký dung lượng lớn**
```bash
rm -rf ~/.openclaw/logs/*.log
```

2. **Xóa bộ nhớ đệm tạm thời**
```bash
rm -rf ~/.openclaw/cache/*
```

3. **Tự động dọn dẹp các phiên trò chuyện cũ**
```bash
openclaw session prune --days 30
```

---

## 🔍 Tài nguyên tham khảo chuyên sâu

- [Chương 2: Cài đặt và triển khai](../docs/01-basics/02-installation.md) - Hướng dẫn cài đặt trọn vẹn
- [Chương 8: Mở rộng Skills](../docs/03-advanced/08-skills-extension.md) - Quản lý và phát triển Skills
- [Chương 9: Tích hợp đa nền tảng](../docs/03-advanced/09-multi-platform-integration.md) - Thiết lập kết nối các kênh chat
- [Chương 11: Cấu hình nâng cao](../docs/03-advanced/11-advanced-configuration.md) - Tối ưu mô hình, bộ nhớ và hiệu năng

---

**Cập nhật lần cuối**: 27/03/2026  
**Phiên bản áp dụng**: OpenClaw v2026.3.7+ (Câu hỏi Q4 áp dụng từ v2026.3.22+)
