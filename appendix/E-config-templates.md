# Phụ lục E: Mẫu Tệp Cấu Hình và Hướng Dẫn Tùy Biến

> 💡 **Mục tiêu của phụ lục này**: Cung cấp các đoạn cấu hình mẫu chuẩn xác cho `openclaw.json`, giúp bạn tùy biến hệ thống theo nhu cầu sau khi hoàn thành trình hướng dẫn thiết lập. Toàn bộ các mẫu đều được kiểm chứng dựa trên tài liệu chính thức (https://docs.openclaw.ai/gateway/configuration-examples), áp dụng cho phiên bản OpenClaw v2026.3.7 trở lên.
>
> ⚠️ **Lưu ý quan trọng cho người mới bắt đầu**: Bạn không cần phải chỉnh sửa tệp cấu hình thủ công để bắt đầu sử dụng OpenClaw. Hãy chạy trực tiếp trình hướng dẫn thiết lập `openclaw onboard`, hệ thống sẽ tương tác từng bước và tự động tạo tệp cấu hình hoàn chỉnh. Các mẫu trong phụ lục này phục vụ cho việc tùy biến chuyên sâu sau này.
>
> Đường dẫn tệp cấu hình: `~/.openclaw/openclaw.json` (Định dạng JSON5, hỗ trợ chú thích dòng `//` và dấu phẩy ở cuối dòng).

## 📋 Mục lục

- E.1 Dành cho người mới bắt đầu (Phương thức khuyến nghị)
- E.2 Cấu hình đa mô hình AI (Multi-model Configuration)
- E.3 Cấu hình tích hợp đa nền tảng trò chuyện
- E.4 Cấu hình Skills và Biến môi trường
- E.5 Lập lịch tác vụ định kỳ (Cron Jobs)
- E.6 Cấu hình đa tác tử (Multi-Agent Architecture)
- E.7 Cấu hình an ninh bảo mật và cô lập Sandbox
- E.8 Ví dụ hoàn chỉnh: Cấu hình cho Cá nhân Độc lập (Solopreneur)
- E.9 Script tự động hóa triển khai siêu tốc

---

## E.1 Dành cho người mới bắt đầu (Phương thức khuyến nghị)

### 1. Cách tiếp cận nhanh nhất: Chạy trình hướng dẫn thiết lập (Rất khuyến nghị)

> ⚠️ **Người mới tuyệt đối không nên chỉnh sửa tệp cấu hình bằng tay ngay từ đầu.** OpenClaw áp dụng cơ chế xác thực schema nghiêm ngặt: chỉ cần sai một tên trường hoặc cấu trúc sai lệch, Cổng Gateway sẽ từ chối khởi động. Trình hướng dẫn thiết lập sẽ tự động sinh tệp chuẩn xác 100%.

```bash
# Bước 1: Chạy trình hướng dẫn thiết lập (Lựa chọn mô hình, nhập API Key, cấu hình kênh...)
openclaw onboard

# Bước 2: Cài đặt và khởi chạy tiến trình nền daemon
openclaw daemon install
openclaw daemon start

# Bước 3: Mở bảng điều khiển Control Dashboard trên trình duyệt
openclaw dashboard
```

Trình hướng dẫn sẽ dắt tay bạn hoàn thành đầy đủ các khâu:
- Chọn nhà cung cấp mô hình AI và cấu hình API Key (Anthropic, OpenAI, DeepSeek, Kimi...)
- Cấu hình kênh liên lạc (Lark / Feishu, Telegram, WhatsApp...)
- Tạo token xác thực an toàn cho Gateway
- Phân quyền hồ sơ công cụ (Tools profile)
- Gợi ý cài đặt các Skills thiết yếu

Sau khi kết thúc, tệp cấu hình sẽ tự động lưu tại `~/.openclaw/openclaw.json`. Khi cần tinh chỉnh thêm, bạn có thể lựa chọn các phương thức sau:

```bash
# Cách 1: Sử dụng trình hướng dẫn tương tác (Khuyến nghị)
openclaw configure

# Cách 2: Sử dụng dòng lệnh để sửa từng trường giá trị cụ thể
openclaw config set agents.defaults.heartbeat.every "30m"
openclaw config set session.reset.atHour 4

# Cách 3: Mở trực tiếp tệp cấu hình bằng trình soạn thảo
openclaw config file   # Hiển thị đường dẫn tệp cấu hình để bạn mở trực tiếp

# Cách 4: Tinh chỉnh trực quan trên giao diện Web Dashboard
openclaw dashboard     # Mở trang quản trị, vào tab Config để chỉnh sửa trực quan
```

### 2. Các tùy biến phổ biến sau khi thiết lập xong

Dưới đây là các tham số bạn có thể muốn điều chỉnh thêm bằng lệnh `openclaw config set` mà không cần sửa thủ công tệp JSON:

```bash
# Thiết lập định danh nhân cách cho AI
openclaw config set identity.name "Tôm Càng Xanh"
openclaw config set identity.theme "Trợ lý AI chuyên nghiệp và tận tụy"
openclaw config set identity.emoji "🦞"

# Kích hoạt nhịp tim chủ động (Cứ mỗi 30 phút tự kiểm tra tác vụ nền một lần)
openclaw config set agents.defaults.heartbeat.every "30m"
openclaw config set agents.defaults.heartbeat.target "last"

# Tự động làm mới phiên hội thoại mỗi ngày (Lúc 4 giờ sáng, sau 2 giờ không hoạt động)
openclaw config set session.dmScope "per-channel-peer"
openclaw config set session.reset.mode "daily"
openclaw config set session.reset.atHour 4
openclaw config set session.reset.idleMinutes 120

# Đảm bảo phân quyền công cụ ở chế độ toàn diện (full) để Agent có thể thực thi tác vụ
openclaw config set agents.defaults.tools.profile "full"

# Khởi động lại dịch vụ daemon để cấu hình mới có hiệu lực
openclaw daemon restart
```

---

## E.2 Cấu hình đa mô hình AI (Multi-model Configuration)

### 1. Phối hợp các mô hình chi phí tối ưu (Tiết kiệm ngân sách)

> ⚠️ Việc xác thực API Key được thực hiện thông qua lệnh tương tác `openclaw models auth add`, không lưu cứng trực tiếp API Key vào tệp cấu hình. Cấu hình bên dưới thiết lập cơ chế định tuyến và dự phòng (fallback).

```json5
{
  agents: {
    defaults: {
      model: {
        // Mô hình chính: DeepSeek (Chi phí suy luận cực rẻ)
        primary: "deepseek/deepseek-chat",
        // Danh sách dự phòng: Kimi cho tài liệu dài → GLM-4 Flash làm chốt chặn cuối
        fallbacks: [
          "moonshot/moonshot-v1-128k",
          "zhipu/glm-4-flash",
        ],
      },
      models: {
        "deepseek/deepseek-chat": { alias: "ds" },
        "moonshot/moonshot-v1-128k": { alias: "kimi" },
        "zhipu/glm-4-flash": { alias: "glm" },
      },
    },
  },
}
```

**Thêm thông tin xác thực API Key (Thực thi qua terminal)**:

```bash
# Thêm xác thực cho DeepSeek
openclaw models auth add
# Chọn deepseek → Nhập API Key tương ứng

# Thêm xác thực cho Kimi (Moonshot)
openclaw models auth add
# Chọn moonshot → Nhập API Key tương ứng

# Thêm xác thực cho Zhipu GLM
openclaw models auth add
# Chọn zhipu → Nhập API Key tương ứng
```

**Chuyển đổi nhanh mô hình ngay trong cuộc trò chuyện**:

```text
/model ds      # Chuyển tức thì sang DeepSeek
/model kimi    # Chuyển tức thì sang Kimi
/model glm     # Chuyển tức thì sang GLM-4
```

---

### 2. Cấu hình các mô hình quốc tế cao cấp

```json5
{
  agents: {
    defaults: {
      model: {
        primary: "anthropic/claude-sonnet-4-5",
        fallbacks: [
          "openai/gpt-5.2",
          "anthropic/claude-opus-4-6",
        ],
      },
      imageModel: {
        primary: "anthropic/claude-sonnet-4-5",
      },
      models: {
        "anthropic/claude-opus-4-6": { alias: "opus" },
        "anthropic/claude-sonnet-4-5": { alias: "sonnet" },
        "openai/gpt-5.2": { alias: "gpt" },
      },
    },
  },
}
```

---

### 3. Cấu hình thông qua API trung gian chuyển tiếp (Relay API)

> Các nhà cung cấp trung gian sử dụng định dạng tương thích OpenAI, định cấu hình thông qua biến môi trường BaseURL và API Key.

```json5
{
  env: {
    vars: {
      OPENAI_API_KEY: "your-relay-api-key",
      OPENAI_BASE_URL: "https://tryallapi.com/v1",
    },
  },
  agents: {
    defaults: {
      model: {
        primary: "openai/gpt-4o-mini",
        fallbacks: ["openai/gpt-4o"],
      },
    },
  },
}
```

---

### 4. Sử dụng mô hình chạy cục bộ hoàn toàn miễn phí (Ollama)

```json5
{
  agents: {
    defaults: {
      model: {
        primary: "ollama/qwen2.5:32b",
        fallbacks: ["ollama/llama3.1:8b"],
      },
    },
  },
}
```

**Điều kiện tiên quyết**: Cần cài đặt Ollama và tải mô hình về máy trước:

```bash
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull qwen2.5:32b
```

---

## E.3 Cấu hình tích hợp đa nền tảng trò chuyện

### 1. Bot Lark / Feishu

```json5
{
  channels: {
    feishu: {
      enabled: true,
      appId: "cli_your_app_id",
      appSecret: "your_app_secret",
      dmPolicy: "pairing",
    },
  },
}
```

### 2. Bot WeCom (WeChat Doanh nghiệp)

```json5
{
  channels: {
    wework: {
      enabled: true,
      corpId: "ww_your_corp_id",
      agentSecret: "your_agent_secret",
      dmPolicy: "pairing",
    },
  },
}
```

### 3. Bot DingTalk

```json5
{
  channels: {
    dingtalk: {
      enabled: true,
      appKey: "your_app_key",
      appSecret: "your_app_secret",
      dmPolicy: "pairing",
    },
  },
}
```

### 4. Bot Telegram

```json5
{
  channels: {
    telegram: {
      enabled: true,
      botToken: "1234567890:ABCdefGHIjklMNOpqrsTUVwxyz",
      dmPolicy: "pairing",
      allowFrom: ["your_telegram_user_id"],
      groups: { "*": { requireMention: true } },
    },
  },
}
```

### 5. Kết nối đồng thời nhiều nền tảng

```json5
{
  channels: {
    telegram: {
      enabled: true,
      botToken: "your_telegram_token",
      dmPolicy: "pairing",
      groups: { "*": { requireMention: true } },
    },
    whatsapp: {
      dmPolicy: "pairing",
      allowFrom: ["+84912345678"],
      groups: { "*": { requireMention: true } },
    },
    discord: {
      enabled: true,
      token: "your_discord_token",
      dm: { enabled: true },
    },
  },
}
```

---

## E.4 Cấu hình Skills và Biến môi trường

> ⚠️ Các Skills được cài đặt thông qua lệnh `clawhub install <slug>`. Trong tệp cấu hình `openclaw.json`, bạn chỉ cần khai báo thông số tùy biến hoặc truyền biến môi trường (như API Key của công cụ ngoài) cho các Skills đó.

```json5
{
  skills: {
    entries: {
      "nano-banana-pro": {
        enabled: true,
        env: {
          GEMINI_API_KEY: "your-gemini-key",
        },
      },
      "brave-search": {
        enabled: true,
        env: {
          BRAVE_API_KEY: "your-brave-key",
        },
      },
      "tavily-search": {
        enabled: true,
        env: {
          TAVILY_API_KEY: "your-tavily-key",
        },
      },
    },
  },
}
```

**Cài đặt các Skills qua dòng lệnh**:

```bash
clawhub install brave-search nano-banana-pro summarize \
  find-skills self-improving proactive-agent skill-vetter

# Kiểm tra danh sách kỹ năng đã cài
openclaw skills list
```

---

## E.5 Lập lịch tác vụ định kỳ (Cron Jobs)

> ⚠️ Các tác vụ cụ thể được tạo qua lệnh `openclaw cron add`. Tệp cấu hình chỉ chứa thiết lập quản trị chung cho tiến trình Cron.

**Thiết lập chung trong `openclaw.json`**:

```json5
{
  cron: {
    enabled: true,
    maxConcurrentRuns: 2,
    sessionRetention: "24h",
  },
}
```

**Thêm tác vụ định kỳ qua dòng lệnh**:

```bash
# Gửi bản tin thị trường AI vào 9:00 sáng mỗi ngày qua Feishu
openclaw cron add \
  --name "daily-ai-report" \
  --cron "0 9 * * *" \
  --tz "Asia/Ho_Chi_Minh" \
  --session isolated \
  --message "Tạo bản tin tổng hợp ngành AI hôm nay" \
  --deliver --channel feishu

# Tự động lập báo cáo tổng kết tuần vào lúc 18:00 mỗi thứ Sáu
openclaw cron add \
  --name "weekly-summary" \
  --cron "0 18 * * 5" \
  --tz "Asia/Ho_Chi_Minh" \
  --session isolated \
  --message "Tổng kết các đầu việc tuần qua và lên kế hoạch tuần tới" \
  --deliver --channel feishu

# Xem danh sách hoặc xóa tác vụ cron
openclaw cron list
openclaw cron remove <job-id>
```

---

## E.6 Cấu hình đa tác tử (Multi-Agent Architecture)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: {
        primary: "anthropic/claude-sonnet-4-5",
      },
    },
    list: [
      {
        id: "main",
        default: true,
        workspace: "~/.openclaw/workspace-main",
      },
      {
        id: "content",
        workspace: "~/.openclaw/workspace-content",
        model: {
          primary: "anthropic/claude-opus-4-6",
        },
      },
      {
        id: "code",
        workspace: "~/.openclaw/workspace-code",
        model: {
          primary: "deepseek/deepseek-coder",
        },
      },
    ],
  },
  bindings: [
    { agentId: "content", match: { channel: "telegram" } },
    { agentId: "code", match: { channel: "discord" } },
  ],
}
```

---

## E.7 Cấu hình an ninh bảo mật và cô lập Sandbox

### Xác thực Gateway bắt buộc (Từ v2026.3.7 trở lên)

```json5
{
  gateway: {
    port: 18789,
    auth: {
      mode: "token",
      token: "your-secret-token-here",
    },
  },
}
```

**Tạo chuỗi Token bảo mật ngẫu nhiên**:

```bash
openssl rand -hex 32
```

### Cơ chế cô lập Sandbox (Sử dụng Docker)

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "non-main",
        scope: "agent",
      },
    },
  },
}
```

### Kiểm soát hồ sơ quyền hạn của công cụ (Tool Profile)

```json5
{
  agents: {
    defaults: {
      tools: {
        profile: "full",     // Các chế độ: full | coding | messaging
      },
    },
  },
}
```

---

## E.8 Ví dụ hoàn chỉnh: Cấu hình cho Cá nhân Độc lập (Solopreneur)

```json5
// ~/.openclaw/openclaw.json
{
  identity: {
    name: "Tôm Càng Xanh",
    theme: "Trợ lý AI đắc lực cho cá nhân độc lập",
    emoji: "🦞",
  },
  gateway: {
    port: 18789,
    auth: { mode: "token", token: "Thay-bang-Token-ngau-nhien-cua-ban" },
  },
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      userTimezone: "Asia/Ho_Chi_Minh",
      model: {
        primary: "deepseek/deepseek-chat",
        fallbacks: ["moonshot/moonshot-v1-128k", "zhipu/glm-4-flash"],
      },
      models: {
        "deepseek/deepseek-chat": { alias: "ds" },
        "moonshot/moonshot-v1-128k": { alias: "kimi" },
        "zhipu/glm-4-flash": { alias: "glm" },
      },
      heartbeat: { every: "30m", target: "last" },
      tools: { profile: "full" },
    },
  },
  channels: {
    feishu: {
      enabled: true,
      appId: "cli_your_app_id",
      appSecret: "your_app_secret",
      dmPolicy: "pairing",
    },
  },
  skills: {
    entries: {
      "brave-search": {
        enabled: true,
        env: { BRAVE_API_KEY: "your-brave-key" },
      },
    },
  },
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4, idleMinutes: 120 },
  },
  cron: { enabled: true, maxConcurrentRuns: 2 },
}
```

---

## E.9 Script tự động hóa triển khai siêu tốc

### Script cấu hình một chạm (Dành cho macOS / Linux)

```bash
#!/bin/bash
set -e
echo "🦞 Khởi động quy trình triển khai siêu tốc OpenClaw..."
mkdir -p ~/.openclaw/workspace
TOKEN=$(openssl rand -hex 32)

cat > ~/.openclaw/openclaw.json << EOF
{
  gateway: { port: 18789, auth: { mode: "token", token: "$TOKEN" } },
  identity: { name: "Tôm Càng Xanh", theme: "Trợ lý AI hiệu suất cao", emoji: "🦞" },
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      userTimezone: "Asia/Ho_Chi_Minh",
      tools: { profile: "full" },
    },
  },
  session: { dmScope: "per-channel-peer", reset: { mode: "daily", atHour: 4 } },
  cron: { enabled: true },
}
EOF

echo "✅ Tệp cấu hình đã được tạo thành công (Token: $TOKEN)"
openclaw onboard
clawhub install skill-vetter find-skills self-improving proactive-agent
openclaw daemon install
openclaw daemon start
echo "✅ Hoàn tất! Hãy chạy 'openclaw dashboard' để mở giao diện điều khiển."
```

## 📚 Tài nguyên tham khảo liên quan

- Tài liệu cấu hình chính thức: https://docs.openclaw.ai/gateway/configuration
- Các ví dụ cấu hình mẫu từ tài liệu gốc: https://docs.openclaw.ai/gateway/configuration-examples
- Danh mục tra cứu trường cấu hình chi tiết: https://docs.openclaw.ai/gateway/configuration-reference
- [Phụ lục A: Bảng tra cứu nhanh lệnh CLI](A-command-reference.md)
- [Phụ lục H: Mẫu tệp cấu hình và ví dụ mở rộng](H-config-templates.md)

**Lời khuyên hữu ích**: Hệ thống OpenClaw áp dụng kiểm tra cấu hình nghiêm ngặt; mọi trường lạ hoặc sai kiểu dữ liệu đều có thể khiến Gateway từ chối khởi động. Nếu gặp sự cố, bạn chỉ cần chạy `openclaw doctor` để tự động kiểm tra và chẩn đoán nguyên nhân.
