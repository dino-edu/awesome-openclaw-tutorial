> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 9: Tích hợp Đa Nền tảng (Lark/Feishu, DingTalk, WeCom, Telegram, Discord)

> 💡 **Mục tiêu chương**: Học cách kết nối OpenClaw với các nền tảng giao tiếp phổ biến như Lark/Feishu (ByteDance), WeCom (WeChat Doanh nghiệp), DingTalk (Alibaba), Discord, Telegram, QQ, v.v., để có thể tương tác với trợ lý AI mọi lúc mọi nơi. Lark/Feishu với thiết kế hiện đại và thân thiện nhất cho nhà phát triển sẽ được ưu tiên hướng dẫn chi tiết hàng đầu.

## 📱 Nội dung chương

- 9.1 Cấu hình Bot Lark / Feishu
  - 9.1.1 Giới thiệu về Bot Feishu / Lark
  - 9.1.2 Bắt đầu nhanh
  - 9.1.3 Bước 1: Tạo ứng dụng Lark / Feishu
  - 9.1.4 Bước 2: Cấu hình OpenClaw
  - 9.1.5 Bước 3: Khởi chạy và kiểm thử
  - 9.1.6 Kiểm soát truy cập (Access Control)
  - 9.1.7 Cấu hình nhóm chat
  - 9.1.8 Cách lấy Chat ID và User ID
  - 9.1.9 Cấu hình nâng cao
  - 9.1.10 Các lệnh thường dùng
  - 9.1.11 Xử lý sự cố
  - 9.1.12 Bảng tham chiếu cấu hình
  - 9.1.13 Các loại tin nhắn hỗ trợ
  - 9.1.14 Tích hợp sâu vào hệ sinh thái Lark / Feishu
  - 9.1.15 Ca thực chiến: Cấu hình Bot kép
- 9.2 Cấu hình Bot WeCom (WeChat Doanh nghiệp)
- 9.3 Cấu hình Bot DingTalk (Alibaba)
- 9.4 Cấu hình Bot QQ
- 9.5 Kết nối WeChat cá nhân (Giải pháp chính thức ClawBot) ⭐ Mới
  - 9.5.1 ClawBot là gì?
  - 9.5.2 Các bước cài đặt
  - 9.5.3 Nguyên lý hoạt động
  - 9.5.4 So sánh với các giải pháp bên thứ ba
  - 9.5.5 Cấu hình và sử dụng
  - 9.5.6 Lưu ý an toàn
- 9.6 Kênh Trình duyệt Web (Dashboard v2) ⭐ Mới
  - 9.6.1 Kênh trình duyệt là gì?
  - 9.6.2 Kịch bản phù hợp
  - 9.6.3 Cách truy cập và tính năng
- 9.7 So sánh và Lựa chọn Nền tảng Tích hợp
- 9.1.16 Mô hình Đa Bot Đa Agent: Xây dựng Đội ngũ Trợ lý AI Chuyên biệt
- 9.1.17 Cấu hình Đa Agent (Phương thức truyền thống qua Bindings)
- 9.1.18 Quản lý Đa Agent Cục bộ (Không cần gắn nền tảng chat) ⭐ Mới
- 9.12 OpenClaw Manager - Công cụ Quản lý Trực quan
- 9.13 Các Công cụ Quản lý Trực quan Khác trong Cộng đồng (ClawX, ClawPanel)

---

## 9.1 Cấu hình Bot Lark / Feishu

> 💡 **Trạng thái**: Sẵn sàng cho môi trường sản xuất (Production-ready), hỗ trợ chat 1-1 và tương tác nhóm, nhận sự kiện qua kết nối dài WebSocket ổn định.

### 9.1.1 Giới thiệu về Bot Feishu / Lark

**Những ưu thế vượt trội của Lark / Feishu (ByteDance)**:

1. **Không gian làm việc số hiện đại**
   - Cộng tác tài liệu đám mây (Cloud Docs) mượt mà
   - Bảng cơ sở dữ liệu đa chiều (Bitable / Multi-dimensional tables)
   - Tích hợp lịch họp và video call tiện lợi

2. **Giao tiếp hiệu quả và trực quan**
   - Thẻ tin nhắn tương tác (Interactive Message Cards) đẹp mắt
   - Các nút bấm hành động (Components) linh hoạt
   - Hỗ trợ phản hồi theo dòng dữ liệu (Streaming Output) tức thì

3. **Thân thiện tối đa với nhà phát triển**
   - Thiết kế RESTful API và SDK chuẩn chỉ, tài liệu rõ ràng
   - Cơ chế kết nối dài WebSocket không đòi hỏi IP tĩnh hay mở cổng Public Webhook
   - Phân quyền theo chuẩn OAuth2 minh bạch

4. **Chi phí tối ưu**
   - Các tính năng mở rộng nền tảng miễn phí, ổn định cao

### 9.1.2 Bắt đầu nhanh

Có hai cách để thêm kênh Lark / Feishu vào OpenClaw:

**Cách 1: Thêm qua Trình Hướng dẫn Cài đặt (Khuyên dùng)**

Nếu vừa cài đặt OpenClaw, bạn chỉ cần chạy lệnh hướng dẫn:

```bash
openclaw setup
```

Trình hướng dẫn sẽ dẫn dắt bạn qua các bước:
1. Tạo ứng dụng trên Lark/Feishu Open Platform và lấy thông tin xác thực
2. Điền App ID và App Secret
3. Khởi chạy Gateway

✅ **Sau khi hoàn tất cấu hình**, bạn có thể dùng các lệnh sau để kiểm tra:
```bash
openclaw gateway status      # Xem trạng thái hoạt động của Gateway
openclaw logs --follow       # Theo dõi nhật ký hệ thống thời gian thực
```

**Cách 2: Thêm trực tiếp qua Dòng lệnh**

Nếu đã hoàn thành cài đặt ban đầu, bạn có thể thêm kênh bằng lệnh:

```bash
openclaw channels add
```
Chọn **Feishu** (hoặc Lark), sau đó dán `App ID` và `App Secret` tương ứng.

✅ **Sau khi cấu hình xong**, quản lý Gateway bằng các lệnh:
```bash
openclaw gateway status      # Xem trạng thái Gateway
openclaw gateway restart     # Khởi động lại Gateway để nạp cấu hình mới
openclaw logs --follow       # Theo dõi log thời gian thực
```

### 9.1.3 Bước 1: Tạo ứng dụng Lark / Feishu

#### 1. Mở Nền tảng Mở (Open Platform)

Truy cập [Feishu Open Platform](https://open.feishu.cn/app) (hoặc [Lark Open Platform](https://open.larksuite.com/app) nếu bạn dùng bản quốc tế), đăng nhập bằng tài khoản của bạn.

> 💡 **Với bản quốc tế Lark**: Vui lòng truy cập https://open.larksuite.com/app và thêm cấu hình `domain: "lark"` trong OpenClaw.

#### 2. Tạo ứng dụng mới

1. Nhấp chọn **Tạo ứng dụng tùy chỉnh cho doanh nghiệp** (Custom App)
2. Điền tên ứng dụng và mô tả hoạt động
3. Tải lên ảnh đại diện biểu tượng ứng dụng

![Nền tảng Mở Feishu - Tạo ứng dụng tùy chỉnh doanh nghiệp](https://upload.maynor1024.live/file/1770734336224_image_1770734318.jpg)

#### 3. Lấy thông tin xác thực ứng dụng

Tại trang **Thông tin cơ bản & Xác thực** (Credentials & Basic Info), sao chép:
- **App ID** (định dạng dạng `cli_xxx`)
- **App Secret**

❗ **Lưu ý bảo mật**: Hãy bảo quản cẩn thận App Secret, tuyệt đối không gửi công khai cho người khác.

![Thông tin xác thực ứng dụng - App ID và App Secret](https://upload.maynor1024.live/file/1770734332380_image_1770734319.jpg)

#### 4. Cấu hình quyền hạn ứng dụng

Tại trang **Quản lý quyền hạn** (Permissions), nhấp vào nút **Nhập hàng loạt** (Batch Import), sau đó dán chuỗi JSON sau để cấp trọn gói các quyền cần thiết:

```json
{
  "scopes": {
    "tenant": [
      "aily:file:read",
      "aily:file:write",
      "application:application.app_message_stats.overview:readonly",
      "application:application:self_manage",
      "application:bot.menu:write",
      "cardkit:card:write",
      "contact:user.employee_id:readonly",
      "corehr:file:download",
      "docs:document.content:read",
      "event:ip_list",
      "im:chat",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.members:bot_access",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:send_as_bot",
      "im:resource",
      "sheets:spreadsheet",
      "wiki:wiki:readonly"
    ],
    "user": [
      "aily:file:read",
      "aily:file:write",
      "im:chat.access_event.bot_p2p_chat:read"
    ]
  }
}
```
![Cấu hình quyền hạn ứng dụng - Nhập hàng loạt quyền JSON](https://upload.maynor1024.live/file/1770734343156_image_1770734320.jpg)

#### 5. Bật tính năng Bot (Robot)

Tại trang **Năng lực ứng dụng** (App Features) > **Bot** (Robot):
1. Bật công tắc kích hoạt năng lực Bot
2. Đặt tên hiển thị cho Bot

![Cấu hình Bot - Kích hoạt tính năng Bot](https://upload.maynor1024.live/file/1770734349201_image_1770734321.jpg)

#### 6. Cấu hình Đăng ký Sự kiện (Event Subscription)

⚠️ **Nhắc nhở quan trọng**: Trước khi cấu hình đăng ký sự kiện, hãy đảm bảo bạn đã:
1. Chạy lệnh `openclaw channels add` để thêm kênh Feishu/Lark
2. Gateway đang ở trạng thái chạy (kiểm tra qua `openclaw gateway status`)

Tại trang **Đăng ký sự kiện** (Event Subscriptions):

**Bước 1: Chọn chế độ Kết nối dài**
1. Chọn tùy chọn **Sử dụng kết nối dài để nhận sự kiện** (chế độ WebSocket)

**Bước 2: Thêm sự kiện**
2. Thêm sự kiện: `im.message.receive_v1` (Nhận tin nhắn)

**Bước 3: Cấu hình các quyền hạn bắt buộc**

Hãy chắc chắn rằng trong trang **Quản lý quyền hạn**, bạn đã thêm 3 quyền cốt lõi sau:

| Quyền hạn | Tên quyền | Bắt buộc | Mục đích sử dụng |
|---|---|---|---|
| `im:message` | Đọc và gửi tin nhắn đơn/nhóm | ✅ Bắt buộc | Nhận và phát tin nhắn |
| `im:message:send_as_bot` | Gửi tin nhắn dưới danh nghĩa ứng dụng | ✅ Bắt buộc | Phản hồi tin nhắn với tư cách bot |
| `contact:contact.base:readonly` | Đọc thông tin cơ bản trong danh bạ | ✅ Bắt buộc | Nhận diện danh tính người gửi |

> 💡 **Vì sao quyền `contact:contact.base:readonly` lại bắt buộc?**
> 
> Quyền này cho phép đọc thông tin người dùng (tên, phòng ban), OpenClaw cần dữ liệu này để:
> - ✅ Nhận diện chính xác người gửi tin nhắn
> - ✅ Thực thi cơ chế kiểm soát truy cập (allowlist / denylist)
> - ✅ Cá nhân hóa câu trả lời
> - ✅ Ghi nhận lịch sử hội thoại đúng người
> 
> ⚠️ **Nếu thiếu quyền này, bot sẽ không thể phản hồi tin nhắn của bạn!**

**Minh họa quyền danh bạ**:

![Cấu hình quyền Feishu - Quyền danh bạ cơ bản](https://upload.maynor1024.live/file/1771065454975_image-20260214183727712.png)

⚠️ **Lưu ý**: Nếu Gateway chưa khởi động hoặc chưa thêm kênh, nút lưu thiết lập kết nối dài trên console sẽ báo lỗi.

![Đăng ký sự kiện Feishu - Dùng kết nối dài nhận tin nhắn](https://upload.maynor1024.live/file/1770734352151_image_1770734322.jpg)

**Xử lý các lỗi cấu hình Gateway thường gặp:**

Nếu gặp thông báo lỗi "Gateway start blocked: set gateway.mode=local":
```json
// Hãy đảm bảo trong tệp cấu hình đã khai báo gateway.mode:
{
  "gateway": {
    "mode": "local"
  }
}
```

Nếu gặp thông báo lỗi "Gateway auth is set to token, but no token is configured":
```json
// Cách 1: Thiết lập token trực tiếp trong tệp cấu hình
{
  "gateway": {
    "auth": {
      "mode": "token",
      "token": "your-secure-token"
    }
  }
}
```
Hoặc dùng biến môi trường:
```bash
# Cách 2: Sử dụng biến môi trường
export OPENCLAW_GATEWAY_TOKEN="your-secure-token"
```

#### 7. Phát hành Ứng dụng

1. Vào trang **Quản lý phiên bản và phát hành** (Version Management & Release), chọn tạo phiên bản mới
2. Điền ghi chú mô tả phiên bản và gửi xét duyệt
3. Chờ quản trị viên phê duyệt (với ứng dụng nội bộ công ty tự xây dựng, hệ thống thường tự động duyệt ngay lập tức)

### 9.1.4 Bước 2: Cấu hình OpenClaw

#### Cài đặt Plugin Feishu

```bash
# Cài đặt plugin Feishu chính thức
openclaw plugins install @openclaw/feishu

# Hoặc cài từ mã nguồn cục bộ (nếu chạy trong kho git clone)
openclaw plugins install ./extensions/feishu
```

#### Cấu hình qua Trình Hướng dẫn (Khuyên dùng)

Chạy câu lệnh sau và dán `App ID` cùng `App Secret` khi được hỏi:

```bash
openclaw channels add
```
Chọn **Feishu**, sau đó nhập các thông tin xác thực đã lấy ở Bước 1.

#### Cấu hình thủ công qua Tệp Cấu hình

Chỉnh sửa tệp `~/.openclaw/openclaw.json`:

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "dmPolicy": "pairing",
      "accounts": {
        "main": {
          "appId": "cli_xxx",
          "appSecret": "xxx",
          "botName": "Trợ lý AI của tôi"
        }
      }
    }
  }
}
```

#### Cấu hình qua Biến Môi trường

```bash
export FEISHU_APP_ID="cli_xxx"
export FEISHU_APP_SECRET="xxx"
```

#### Cấu hình tên miền cho bản quốc tế Lark

Nếu tổ chức của bạn đăng ký trên Lark quốc tế, hãy đặt trường tên miền thành `lark`:

```json
{
  "channels": {
    "feishu": {
      "domain": "lark",
      "accounts": {
        "main": {
          "appId": "cli_xxx",
          "appSecret": "xxx"
        }
      }
    }
  }
}
```

### 9.1.5 Bước 3: Khởi chạy và Kiểm thử

#### 1. Khởi động Gateway

```bash
# Cài đặt dịch vụ và khởi chạy Gateway
openclaw gateway install

# Kiểm tra trạng thái hoạt động
openclaw gateway status

# Xem nhật ký log trực tiếp
openclaw logs --follow
```

**Dấu hiệu nhận biết Gateway đã chạy thành công:**
- ✅ Gateway: running (pid xxxxx, state active)
- ✅ Gateway target: ws://127.0.0.1:18789
- ✅ Source: local loopback

#### 2. Gửi tin nhắn thử nghiệm

Tìm bot vừa tạo trên ứng dụng Lark/Feishu, gửi một tin nhắn chào hỏi, ví dụ: `"hi"`.

**Trong log hệ thống bạn sẽ thấy:**
```text
HEARTBEAT_OK
hi
connected | running
agent main | session main (heartbeat) | local-antigravity/gemini-3-pro-high
```

#### 3. Ghép đôi và Cấp quyền (Pairing Approval)

Ở chính sách mặc định (`dmPolicy: "pairing"`), bot sẽ phản hồi kèm một **Mã ghép đôi** (Pairing Code). Bạn cần duyệt mã này qua dòng lệnh:

```bash
# Xem danh sách yêu cầu ghép đôi đang chờ duyệt
openclaw pairing list feishu

# Duyệt ghép đôi (thay <mã_ghép_đôi> bằng mã nhận được từ bot)
openclaw pairing approve feishu <mã_ghép_đôi>

# Ví dụ
openclaw pairing approve feishu ABC123
```
Sau khi duyệt xong, bạn có thể trò chuyện với bot bình thường.

**Nếu bạn muốn mở quyền tự do, không cần bước ghép đôi:**
```json
{
  "channels": {
    "feishu": {
      "dmPolicy": "open",
      "allowFrom": ["*"]
    }
  }
}
```

### 9.1.6 Kiểm soát Truy cập (Access Control)

#### Truy cập Tin nhắn Riêng (Direct Message)

- **Chính sách mặc định**: `dmPolicy: "pairing"`, người lạ nhắn tin sẽ nhận được mã ghép đôi yêu cầu quản trị viên phê duyệt
- **Duyệt ghép đôi**:
  ```bash
  openclaw pairing list feishu           # Xem danh sách chờ
  openclaw pairing approve feishu <CODE> # Duyệt mã
  ```
- **Chế độ danh sách trắng (Allowlist)**: Khai báo các Open ID được phép thông qua `channels.feishu.allowFrom`

#### Truy cập Nhóm chat (Group Chat)

1. **Chính sách nhóm** (`channels.feishu.groupPolicy`):
   - `"open"` = Cho phép tất cả mọi người trong nhóm tương tác (mặc định)
   - `"allowlist"` = Chỉ cho phép các người dùng nằm trong `groupAllowFrom`
   - `"disabled"` = Tắt hoàn toàn tính năng trong nhóm chat

2. **Yêu cầu nhắc tên @ (Mention)** (`channels.feishu.groups.<chat_id>.requireMention`):
   - `true` = Bắt buộc phải tag @ tên bot thì bot mới trả lời (mặc định)
   - `false` = Không cần tag @, bot tự động phản hồi mọi tin nhắn trong nhóm

### 9.1.7 Ví dụ Cấu hình Nhóm chat

#### Cho phép mọi nhóm, yêu cầu phải tag @ (Hành vi mặc định)

```json
{
  "channels": {
    "feishu": {
      "groupPolicy": "open"
      // Mặc định requireMention: true
    }
  }
}
```

#### Cho phép nhóm cụ thể không cần tag @

Cấu hình riêng cho từng nhóm chỉ định:

```json
{
  "channels": {
    "feishu": {
      "groups": {
        "oc_xxx": { "requireMention": false }
      }
    }
  }
}
```

#### Chỉ cho phép một số người dùng nhất định được dùng bot trong nhóm

```json
{
  "channels": {
    "feishu": {
      "groupPolicy": "allowlist",
      "groupAllowFrom": ["ou_xxx", "ou_yyy"]
    }
  }
}
```

### 9.1.8 Cách lấy Chat ID và User ID

#### Lấy Chat ID của nhóm (`chat_id`)

Chat ID có định dạng bắt đầu bằng `oc_xxx`. Bạn có thể lấy bằng:

**Cách 1 (Khuyên dùng)**:
1. Bật Gateway và tag @ tên bot gửi tin nhắn vào nhóm
2. Chạy `openclaw logs --follow`, quan sát dòng log để thấy `chat_id`

**Cách 2**: Sử dụng công cụ API Explorer trên Lark/Feishu Open Platform để gọi API lấy danh sách nhóm bot tham gia.

#### Lấy Open ID của người dùng (`open_id`)

Open ID người dùng có định dạng `ou_xxx`. Bạn có thể lấy bằng:

**Cách 1 (Khuyên dùng)**:
1. Bật Gateway và nhắn tin riêng cho bot
2. Chạy `openclaw logs --follow`, đọc trường `open_id` trong log

**Cách 2**: Chạy lệnh xem danh sách ghép đôi, mã `open_id` sẽ hiển thị trực tiếp:
```bash
openclaw pairing list feishu
```

### 9.1.9 Cấu hình Nâng cao

#### Menu Tùy chỉnh (Custom Menu)

Thêm các nút bấm lệnh tắt thường dùng ngay trên thanh menu trò chuyện của bot:

![Menu Bot Feishu - Thêm các phím tắt lệnh thường dùng](https://upload.maynor1024.live/file/1770874980945_image-20260212134245771.png)

Ví dụ tạo 3 phím tắt tiện ích: Phiên mới (`/reset`), Danh sách kỹ năng (`/skills`), Tiếp tục (`/continue`):

![Minh họa Menu Tùy chỉnh - Phiên mới / Kỹ năng / Tiếp tục](https://upload.maynor1024.live/file/1770874990637_image-20260212134300933.png)

#### Cấu hình Đa tài khoản Bot (Multi-account)

OpenClaw hỗ trợ quản lý đồng thời nhiều Bot Lark/Feishu trên cùng một hệ thống. Tính năng này rất hữu ích khi:
- Các phòng ban/đội ngũ khác nhau dùng bot riêng
- Tách biệt môi trường thử nghiệm (Testing) và môi trường thực tế (Production)
- Tạo các trợ lý chuyên môn riêng biệt (Hỗ trợ code, Viết bài, Quản lý dự án)
- Cấu hình bot chính và bot dự phòng

**Mẫu cấu hình cơ bản cho 2 Bot:**

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "dmPolicy": "pairing",
      "accounts": {
        "bot1": {
          "appId": "cli_xxxxxxxxxxxxxxxx",
          "appSecret": "your-app-secret-1",
          "botName": "Trợ lý OpenClaw 1",
          "enabled": true
        },
        "bot2": {
          "appId": "cli_yyyyyyyyyyyyyyyy",
          "appSecret": "your-app-secret-2",
          "botName": "Trợ lý OpenClaw 2",
          "enabled": true
        }
      },
      "domain": "feishu",
      "groupPolicy": "open",
      "connectionMode": "websocket",
      "requireMention": true,
      "renderMode": "auto",
      "streaming": true,
      "blockStreaming": true,
      "replyToMode": "all"
    }
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "lan",
    "auth": {
      "mode": "token",
      "token": "your-secure-token-here"
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "your-provider/your-model"
      },
      "workspace": "/path/to/your/workspace",
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  }
}
```

> 💡 **Kinh nghiệm thực tế**: Hãy bảo mật cẩn thận `appSecret` và `token`, tuyệt đối không commit tệp cấu hình này lên Git công khai.

**Mẫu cấu hình 4 Trợ lý Chuyên nghiệp:**

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "dmPolicy": "pairing",
      "accounts": {
        "main-assistant": {
          "appId": "cli_main_xxxxxx",
          "appSecret": "your-main-secret",
          "botName": "Trợ lý Tổng hợp",
          "enabled": true
        },
        "content-creator": {
          "appId": "cli_content_xxxxxx",
          "appSecret": "your-content-secret",
          "botName": "Trợ lý Sáng tạo Nội dung",
          "enabled": true
        },
        "tech-dev": {
          "appId": "cli_tech_xxxxxx",
          "appSecret": "your-tech-secret",
          "botName": "Trợ lý Phát triển Kỹ thuật",
          "enabled": true
        },
        "ai-news": {
          "appId": "cli_news_xxxxxx",
          "appSecret": "your-news-secret",
          "botName": "Trợ lý Tin tức AI",
          "enabled": true
        }
      },
      "domain": "feishu",
      "groupPolicy": "open",
      "connectionMode": "websocket",
      "requireMention": true,
      "streaming": true,
      "blockStreaming": true,
      "replyToMode": "all"
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4"
      },
      "workspace": "/path/to/workspace",
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  }
}
```

> ⚠️ **Lưu ý**: Trong mô hình cấu hình đa tài khoản chung một Gateway, bạn không nhất thiết phải cấu hình phần `bindings` phức tạp. Mọi bot sẽ dùng chung cấu hình mặc định trong `agents.defaults`. Nếu cần dùng mô hình khác nhau giữa các bot, bạn có thể gõ lệnh `/model` ngay trong đoạn chat để chuyển đổi linh hoạt.

**Giải thích các thông số cấu hình:**

| Tham số | Ý nghĩa | Bắt buộc |
|---|---|---|
| `accounts.<id>` | Mã định danh duy nhất của tài khoản (tự đặt) | ✅ |
| `appId` | App ID của ứng dụng trên Lark/Feishu | ✅ |
| `appSecret` | App Secret của ứng dụng | ✅ |
| `botName` | Tên hiển thị của bot | ❌ |
| `enabled` | Trạng thái kích hoạt bot | ❌ (Mặc định: true) |

**Kịch bản phân tách nhóm bot thực tế**:

1. **Phân tách theo môi trường (Environment Separation)**
   - Production: `cli_prod_xxx` (Chính sách pairing nghiêm ngặt)
   - Staging: `cli_staging_xxx` (Chính sách mở thử nghiệm)
   - Development: `cli_dev_xxx` (Tạm tắt khi không dùng)

2. **Phân tách theo phòng ban (Team Separation)**
   - Đội kỹ thuật: `cli_tech_xxx`
   - Đội kinh doanh: `cli_sales_xxx`
   - Đội nhân sự: `cli_hr_xxx`

**Các lệnh quản lý đa bot:**

```bash
# Xem danh sách tất cả các kênh và tài khoản đang hoạt động
openclaw channels list

# Khởi động lại Gateway để nạp thay đổi
openclaw gateway restart

# Xem log riêng của kênh Feishu
openclaw channels logs feishu
```

#### Phản hồi theo Dòng (Streaming Output)

Bật cờ `streaming: true` trong cấu hình giúp bot hiển thị câu trả lời từng chữ theo thời gian thực thay vì chờ sinh xong toàn bộ văn bản mới gửi, mang lại trải nghiệm mượt mà vượt trội.

#### Trích dẫn Tin nhắn (Message Quoting)

Tùy chọn `replyToMode: "all"` hoặc `"thread"` giúp bot tự động trích dẫn lại câu hỏi của người dùng, cực kỳ hữu ích trong các nhóm chat đông người để tránh trôi ngữ cảnh.

### 9.1.10 Các Lệnh Thường dùng

#### Các lệnh gửi trực tiếp cho Bot trong khung chat:
- `/reset`: Xóa lịch sử phiên làm việc hiện tại, bắt đầu cuộc trò chuyện mới
- `/skills`: Liệt kê các Skills đang được kích hoạt
- `/model`: Xem hoặc chuyển đổi mô hình AI đang sử dụng
- `/status`: Kiểm tra trạng thái kết nối của hệ thống

#### Các lệnh quản trị Gateway:
- `openclaw gateway start`: Khởi động Gateway
- `openclaw gateway stop`: Dừng Gateway
- `openclaw gateway restart`: Khởi động lại Gateway
- `openclaw gateway status`: Kiểm tra trạng thái tiến trình

### 9.1.11 Xử lý Sự cố (Troubleshooting)

#### Lỗi cú pháp JSON trong tệp cấu hình
Tránh nhầm lẫn cú pháp Python (`True`/`False`) với JSON (`true`/`false`), không để thừa dấu phẩy ở phần tử cuối cùng. Hãy chạy lệnh kiểm tra:
```bash
openclaw doctor
```

#### Gateway báo lỗi xung đột cổng mạng (Port already in use)
Nếu cổng mặc định 18789 đã bị ứng dụng khác chiếm giữ:
```bash
# Tìm tiến trình đang chiếm cổng
lsof -i :18789

# Hoặc đổi sang cổng khác trong cấu hình openclaw.json:
"gateway": {
  "port": 18790
}
```

#### Bị lộ App Secret
Nếu lỡ để lộ App Secret lên kho mã nguồn công khai:
1. Lập tức truy cập Feishu Open Platform, tạo lại App Secret mới (Reset Secret)
2. Cập nhật khóa mới vào cấu hình OpenClaw
3. Khởi động lại Gateway: `openclaw gateway restart`

### 9.1.12 Bảng Tham chiếu Cấu hình Kênh Feishu

| Thuộc tính | Kiểu dữ liệu | Mặc định | Mô tả |
|---|---|---|---|
| `enabled` | boolean | `true` | Bật/tắt kênh |
| `domain` | string | `"feishu"` | `"feishu"` (nội địa) hoặc `"lark"` (quốc tế) |
| `dmPolicy` | string | `"pairing"` | Chính sách chat 1-1 (`pairing`, `open`, `allowlist`) |
| `groupPolicy` | string | `"open"` | Chính sách nhóm (`open`, `allowlist`, `disabled`) |
| `connectionMode` | string | `"websocket"` | Phương thức kết nối (WebSocket) |
| `streaming` | boolean | `true` | Xuất kết quả theo dòng dữ liệu thời gian thực |
| `requireMention` | boolean | `true` | Bắt buộc tag @ tên bot trong nhóm |

### 9.1.13 Các Loại Tin nhắn Hỗ trợ

- **Nhận vào**: Văn bản, Hình ảnh, Tệp tài liệu (PDF, Word, TXT), Tin nhắn thoại, Lời mời tham gia nhóm.
- **Gửi ra**: Văn bản thường, Thẻ tương tác đa phương tiện (Interactive Card), Bảng Markdown, Đoạn mã có tô màu cú pháp (Code blocks).

### 9.1.14 Tích hợp sâu vào Hệ sinh thái Lark / Feishu

OpenClaw có thể kết hợp mạnh mẽ với các công cụ trong Lark/Feishu:
- **Tài liệu đám mây (Docs)**: Đọc nội dung biên bản cuộc họp và tự động xuất tài liệu mới
- **Bảng đa chiều (Bitable)**: Tự động ghi chép dữ liệu khách hàng hoặc trạng thái công việc
- **Lịch công tác (Calendar)**: Trợ lý kiểm tra lịch trống và nhắc nhở cuộc họp tự động

### 9.1.15 Ca Thực chiến: Cấu hình Bot Kép (Dual Bots)

Giả sử bạn cần chạy 2 bot:
- Bot 1: Trợ lý Hỗ trợ Khách hàng
- Bot 2: Trợ lý Viết mã & Kỹ thuật

Trình tự thiết lập:
1. Tạo 2 ứng dụng độc lập trên Lark/Feishu Open Platform, lấy 2 cặp `App ID` và `App Secret`.
2. Khai báo 2 bot vào mục `accounts` trong `feishu.json`.
3. Khởi động Gateway: `openclaw gateway restart`.
4. Nhắn tin cho từng bot để nhận mã ghép đôi và tiến hành phê duyệt.
5. Cả 2 bot sẽ cùng lúc hoạt động độc lập và mượt mà trên cùng một Gateway.

---

## 9.4 Cấu hình Bot QQ

### 9.4.1 Giới thiệu về QQ Bot

**Ưu thế của nền tảng QQ**:
- Lượng người dùng cá nhân và cộng đồng giải trí cực kỳ đông đảo
- Tính năng nhóm chat và kênh cộng đồng sôi nổi
- Nền tảng mở hỗ trợ API chính thức cho cả nhóm chat và kênh cá nhân

### 9.4.2 Các bước tạo QQ Bot

1. **Đăng ký tài khoản trên Nền tảng Mở QQ**: Truy cập https://q.qq.com/ và tạo tài khoản nhà phát triển (lưu ý: cần đăng ký riêng, không phải quét QR thông thường).
2. **Tạo ứng dụng Bot**: Vào mục Quản lý Robot, điền tên, biểu tượng và mô tả.
3. **Lấy thông tin xác thực**:
   - `BotAppID`
   - `Bot Secret`
4. **Cấu hình IP Whitelist**: Thêm địa chỉ IP máy chủ của bạn vào danh sách cho phép trên cổng quản trị QQ.
5. **Thêm tài khoản thử nghiệm**: Điền số QQ của bạn vào danh sách thành viên thử nghiệm để có quyền kết bạn và tương tác trước khi phát hành công khai.

### 9.4.3 Cấu hình OpenClaw với QQ

Chạy wizard cấu hình:
```bash
openclaw onboard
```
Chọn kênh **QQ**, sau đó điền `BotAppID` và `Bot Secret`.

Khởi chạy Gateway nền:
```bash
openclaw gateway start
```
Gửi tin nhắn chào hỏi từ ứng dụng QQ để xác nhận kết nối thành công.

---

## 9.6 Cấu hình Bot Discord (Tham khảo)

> ⚠️ **Lưu ý lịch sử**: Discord là nền tảng quốc tế cực kỳ mạnh mẽ cho các cộng đồng mã nguồn mở và đội ngũ phát triển toàn cầu. Các lệnh trước đây từng dùng tiền tố `clawdbot`, hiện nay toàn bộ đã được chuẩn hóa về `openclaw`.

### 9.5.1 Ưu thế của Discord
- Hỗ trợ đa ngôn ngữ, cộng đồng lập trình viên và game toàn cầu
- Hệ thống phân quyền máy chủ (Server/Guild), kênh văn bản và kênh thoại chi tiết
- Định dạng tin nhắn phong phú với Embeds và Components

### 9.5.2 Trình tự thiết lập Discord Bot
1. Truy cập [Discord Developer Portal](https://discord.com/developers/applications).
2. Nhấp chọn **New Application**, đặt tên cho ứng dụng.
3. Vào mục **Bot**, nhấn **Reset Token** để lấy `Bot Token` (hãy lưu trữ an toàn).
4. Bật tùy chọn **Message Content Intent** để bot có quyền đọc nội dung tin nhắn.
5. Tạo URL mời bot: Tại mục **OAuth2** > **URL Generator**, tích chọn scope `bot` cùng quyền gửi tin nhắn, sau đó dán link vào trình duyệt để thêm bot vào máy chủ Discord của bạn.
6. Thêm kênh Discord vào OpenClaw:
   ```bash
   openclaw onboard
   ```
   Chọn kênh **Discord** và điền `Bot Token`.

---

## 9.5 Kết nối WeChat Cá nhân (Giải pháp chính thức ClawBot)

> 💡 **Trạng thái**: Bản thử nghiệm mở rộng (dựa trên dự án mã nguồn mở WeChatFerry).

### 9.5.1 ClawBot là gì?
ClawBot cung cấp giải pháp cầu nối cho phép tài khoản WeChat cá nhân của bạn tự động nhận diện và phản hồi tin nhắn bằng trí tuệ nhân tạo, hỗ trợ cả chat riêng và quản lý nhóm chat thông minh.

### 9.5.2 Cài đặt và Sử dụng
```bash
# Cài đặt plugin WeChat chính thức
openclaw plugins install @openclaw/wechat

# Khởi động Gateway để tải plugin
openclaw gateway start
```

⚠️ **Lưu ý an toàn quan trọng**: Nền tảng WeChat có chính sách kiểm soát nghiêm ngặt đối với các hành vi tự động hóa tài khoản cá nhân. Không nên sử dụng tài khoản công việc chính để chạy tự động quy mô lớn nhằm tránh nguy cơ bị khóa tài khoản tạm thời.

---

## 9.6 Kênh Trình duyệt Web (Dashboard v2)

> 💡 **Trạng thái**: Sẵn sàng, đi kèm phiên bản Dashboard v2 giao diện hiện đại.

### 9.6.1 Kênh trình duyệt là gì?
Không cần cài đặt bất kỳ ứng dụng chat nào trên điện thoại hay máy tính, bạn có thể tương tác trực tiếp với OpenClaw thông qua trình duyệt Web tại địa chỉ cục bộ:

```text
http://127.0.0.1:18789/?token=your-token
```

### 9.6.2 Kịch bản phù hợp
- Môi trường làm việc hạn chế, không được phép cài đặt ứng dụng chat ngoài
- Cần tải lên và tải xuống các tệp dữ liệu lớn trực tiếp vào workspace
- Muốn theo dõi trực quan lượng tiêu thụ Token và trạng thái bộ nhớ thời gian thực

---

## 9.7 So sánh và Lựa chọn Nền tảng Tích hợp

### 9.7.1 Bảng so sánh tính năng

| Nền tảng | Bản chất & Đơn vị chủ quản | Môi trường văn phòng | Thân thiện nhà phát triển | Kết nối WebSocket | Trải nghiệm di động |
|---|---|---|---|---|---|
| **Lark / Feishu** | ByteDance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Sẵn có, cực kỳ ổn định | ⭐⭐⭐⭐⭐ Xuất sắc |
| **WeCom** | WeChat Doanh nghiệp (Tencent) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Hỗ trợ Webhook/API | ⭐⭐⭐⭐⭐ Tốt |
| **DingTalk** | Alibaba | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Hỗ trợ Stream mode | ⭐⭐⭐⭐ Tốt |
| **Discord** | Discord Inc. | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ WebSocket Gateway | ⭐⭐⭐⭐⭐ Xuất sắc |
| **Telegram** | Telegram FZ-LLC | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Bot API Long-polling | ⭐⭐⭐⭐⭐ Xuất sắc |
| **QQ** | Tencent | ⭐⭐ | ⭐⭐⭐ | ✅ WebSocket | ⭐⭐⭐⭐ Khá |

### 9.7.2 Gợi ý lựa chọn theo nhu cầu thực tế

- **Đội ngũ công nghệ, lập trình viên, startup hiện đại**: Chọn **Lark / Feishu (ByteDance)** làm kênh giao tiếp chính.
- **Doanh nghiệp vừa và lớn, mạng lưới quan hệ khách hàng nội địa**: Chọn **WeCom (WeChat Doanh nghiệp)** hoặc **DingTalk (Alibaba)**.
- **Cộng đồng mã nguồn mở, dự án quốc tế**: Chọn **Discord** hoặc **Telegram**.
- **Cá nhân muốn dùng nhanh, không phụ thuộc IM**: Dùng trực tiếp **Dashboard v2 trên Trình duyệt Web**.

---

## 9.1.16 Mô hình Đa Bot Đa Agent: Xây dựng Đội ngũ Trợ lý AI Chuyên biệt

> 💡 **Hướng dẫn toàn diện**: Hướng dẫn xây dựng đội ngũ trợ lý AI đa nhiệm bằng kiến trúc Nhiều Gateway + Nhiều Bot.

### 9.1.16.1 Vì sao cần Đa Agent?

Là một chuyên gia độc lập hoặc solopreneur, bạn thường phải đảm nhiệm nhiều vai trò:
- **Trợ lý Trọng yếu (Main Assistant)**: Dùng mô hình mạnh nhất (Claude Opus / GPT-4o) để lập kế hoạch chiến lược
- **Trợ lý Viết nội dung (Content Creator)**: Chuyên trách viết blog, bài viết mạng xã hội, newsletter
- **Trợ lý Công nghệ (Tech Dev)**: Chuyên rà soát code, sửa lỗi phần mềm và kiến trúc hệ thống
- **Trợ lý Tổng hợp Tin tức (AI News)**: Chuyên tóm tắt thị trường, nghiên cứu xu hướng công nghệ

Mô hình đơn Agent buộc bạn phải liên tục chuyển đổi ngữ cảnh và đổi prompt thủ công. Mô hình Đa Agent cho phép mỗi trợ lý sở hữu tính cách, bộ nhớ và không gian làm việc hoàn toàn riêng biệt.

![Kiến trúc Đa Agent](https://i-blog.csdnimg.cn/img_convert/d9d0d47052a8dbef500c9ceab133ee7e.png)

### 9.1.16.2 So sánh các Phương án Triển khai

#### Phương án 1: Một Gateway duy nhất + Bindings (Ít khuyên dùng)
- Gặp hạn chế khi cơ chế so khớp `peer.id` phân giải không đồng nhất giữa các nhóm chat.
- Người dùng phải gõ lệnh `/reset` và `/agent` thủ công để chuyển đổi qua lại.

#### Phương án 2: Nhiều Gateway độc lập + Nhiều Bot riêng biệt (Khuyên dùng) ✅
- Mỗi bot trên Lark/Feishu kết nối với một tiến trình Gateway riêng biệt qua tham số `--profile`.
- Phân tách cổng mạng (18789, 18790, 18791, 18792).
- Hoàn toàn độc lập về bộ nhớ, context và mô hình AI.
- Người dùng chỉ cần mở khung chat với đúng bot là xong, không cần bất kỳ câu lệnh chuyển đổi nào.

### 9.1.16.3 Thiết kế Kiến trúc Profile

```text
┌─────────────────────────────────────────────────────────┐
│              Lark / Feishu (Ứng dụng Chat)               │
├─────────────────────────────────────────────────────────┤
│  Bot 1: Trợ lý Chính       Bot 2: Sáng tạo Nội dung     │
│  Bot 3: Kỹ sư Phần mềm     Bot 4: Tin tức & Nghiên cứu   │
└─────────────────────────────────────────────────────────┘
                          ↓ WebSocket
┌─────────────────────────────────────────────────────────┐
│                   Tầng Gateway OpenClaw                 │
├──────────────┬──────────────┬──────────────┬────────────┤
│ Gateway 1    │ Gateway 2    │ Gateway 3    │ Gateway 4  │
│ Port: 18789  │ Port: 18790  │ Port: 18791  │ Port: 18792│
│ Profile:     │ Profile:     │ Profile:     │ Profile:   │
│ main-agent   │ content      │ tech-dev     │ news-agent │
└──────────────┴──────────────┴──────────────┴────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                     Tầng Mô hình AI                     │
├──────────────┬──────────────┬──────────────┬────────────┤
│ Claude Opus  │ Claude Sonnet│ Claude Sonnet│ Gemini 2.5 │
│ Thinking     │ 4.5          │ Thinking     │ Flash      │
└──────────────┴──────────────┴──────────────┴────────────┘
```

Mỗi profile được cách ly dữ liệu tại `~/.openclaw-<name>/`:
- Cấu hình riêng: `~/.openclaw-<name>/openclaw.json`
- Trạng thái phiên chat độc lập
- Cổng dịch vụ riêng biệt

### 9.1.16.4 Các bước Thiết lập Thực tế

1. Tạo 4 ứng dụng Bot tương ứng trên Lark/Feishu Open Platform.
2. Tạo thư mục cấu hình cho từng Agent với 2 tệp `USER.md` (thông tin người dùng) và `SOUL.md` (định hình tính cách, phong cách trả lời của Agent).
3. Khởi chạy 4 tiến trình Gateway tương ứng theo từng cổng mạng:
   ```bash
   openclaw gateway --profile main-agent --port 18789
   openclaw gateway --profile content --port 18790
   openclaw gateway --profile tech-dev --port 18791
   openclaw gateway --profile news-agent --port 18792
   ```
4. Kiểm tra trạng thái và duyệt ghép đôi cho từng bot.

---

## 9.1.17 Cấu hình Đa Agent (Phương thức Truyền thống qua Bindings)

Nếu bạn chỉ muốn chạy một tiến trình Gateway duy nhất, có thể dùng cơ chế `bindings` trong tệp `openclaw.json`:

```json
{
  "agents": {
    "list": [
      {
        "id": "main-agent",
        "workspace": "/Users/username/work",
        "model": { "primary": "anthropic/claude-sonnet-4" }
      },
      {
        "id": "tech-agent",
        "workspace": "/Users/username/code",
        "model": { "primary": "deepseek/deepseek-chat" }
      }
    ],
    "defaults": {
      "compaction": { "mode": "safeguard" },
      "maxConcurrent": 4
    }
  },
  "bindings": [
    {
      "agentId": "main-agent",
      "match": {
        "channel": "feishu",
        "peer": { "kind": "dm", "id": "ou_user_1" }
      }
    },
    {
      "agentId": "tech-agent",
      "match": {
        "channel": "feishu",
        "peer": { "kind": "dm", "id": "ou_user_2" }
      }
    }
  ]
}
```

---

## 9.1.18 Quản lý Đa Agent Cục bộ (Không cần Liên kết Nền tảng Chat)

> 💡 **Điểm sáng quan trọng**: Bạn hoàn toàn có thể sử dụng sức mạnh của nhiều Agent chuyên biệt ngay trên máy tính mà không bắt buộc phải kết nối tới bất kỳ ứng dụng nhắn tin nào.

![Giao diện Quản lý Đa Agent Cục bộ - Web UI / CLI / TUI](https://upload.maynor1024.live/file/1770944487857_image-20260213090121654.png)

### Ba phương thức tương tác cục bộ:

1. **Giao diện Web UI (Khuyên dùng)**:
   ```bash
   openclaw dashboard
   # Truy cập qua trình duyệt: http://127.0.0.1:18789/?token=YOUR_TOKEN
   ```

2. **Dòng lệnh CLI (Thích hợp cho kịch bản tự động hóa)**:
   ```bash
   # Gửi tin nhắn trực tiếp
   openclaw agent --message "Hãy phân tích dự án này giúp tôi"
   
   # Truyền dữ liệu qua đường ống pipe
   cat data.txt | openclaw agent --message
   
   # Xuất kết quả ra file tài liệu
   openclaw agent --message "Lập kế hoạch tuần" > plan.md
   ```

3. **Giao diện dòng lệnh tương tác TUI (Terminal UI)**:
   ```bash
   openclaw tui
   ```

### Các lệnh quản trị Agent cục bộ:

```bash
# Liệt kê tất cả Agent có sẵn
openclaw agents list

# Chuyển đổi Agent đang làm việc
openclaw agent switch content-agent

# Xem Agent hiện tại
openclaw agent current

# Kiểm tra trạng thái hoạt động của hệ thống
openclaw status
```

---

## 9.12 OpenClaw Manager - Công cụ Quản lý Trực quan

> 💡 **Giao diện quản trị hiện đại**: OpenClaw Manager là bảng điều khiển Web xây dựng bằng React 18 và Tailwind CSS, giúp trực quan hóa việc theo dõi và kiểm soát nhiều phiên Gateway cùng lúc.

### 9.12.1 Các Tính năng Cốt lõi
- 📊 **Giám sát thời gian thực**: Nắm bắt tình trạng vận hành, mức tiêu thụ tài nguyên và cổng mạng của từng Gateway.
- 🎮 **Điều khiển một chạm**: Bật, tắt, khởi động lại toàn bộ hoặc từng Gateway chỉ bằng một cú nhấp chuột.
- ➕ **Khởi tạo trực quan**: Tạo mới Gateway và thiết lập Bot bằng form biểu mẫu dễ hiểu, không cần gõ file JSON.
- ✏️ **Biên tập tính cách (SOUL.md)**: Chỉnh sửa trực tiếp chân dung, phong cách trả lời và ranh giới chuyên môn của Agent.
- 📝 **Nhật ký tích hợp**: Theo dõi log thời gian thực của từng bot ngay trên trình duyệt.

### 9.12.2 Cài đặt và Khởi chạy OpenClaw Manager

```bash
# 1. Clone kho mã nguồn
git clone https://github.com/xianyu110/openclaw-manager.git
cd openclaw-manager

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Khởi chạy đồng thời frontend và backend
npm run dev
```
Mở trình duyệt tại `http://localhost:5173` để trải nghiệm bảng điều khiển.

---

## 9.13 Các Công cụ Quản lý Trực quan Khác trong Cộng đồng

Ngoài OpenClaw Manager, cộng đồng mã nguồn mở còn phát triển thêm các tiện ích quản trị xuất sắc:

---

### 9.13.1 ClawX —— Trợ lý Nghiên cứu AI Mã Nguồn Mở

> Trang chủ: https://clawx.dev/ | GitHub: https://github.com/ValueCell-ai/ClawX

**ClawX** là ứng dụng desktop phát triển bởi đội ngũ ValueCell, hoạt động hoàn toàn cục bộ trên máy tính, tập trung vào khả năng tự động thực thi tác vụ kéo dài 24/7 và đẩy thông báo đa nền tảng.

**Các tính năng nổi bật**:
- **Tự vận hành 24/7**: Giám sát và thực thi tác vụ định kỳ liên tục không cần con người can thiệp.
- **Hơn 20 kênh thông báo**: Hỗ trợ đẩy cảnh báo tức thì tới WhatsApp, Telegram, Slack, Discord.
- **Thu thập dữ liệu thông minh**: Cào dữ liệu web và tổng hợp thông tin đa nguồn.
- **Tương thích toàn diện**: Hỗ trợ các mô hình từ OpenAI, Anthropic, Google cùng hơn 55+ Skills trong hệ sinh thái OpenClaw.

---

### 9.13.2 ClawPanel —— Bảng Điều khiển Trực quan Đa Nền tảng

> Trang chủ: https://claw.qt.cool/ | GitHub: https://github.com/qingchencloud/clawpanel

**ClawPanel** là ứng dụng desktop xây dựng trên nền tảng Tauri v2 (Rust + Webview), mang lại tốc độ phản hồi cực nhanh và chiếm dụng bộ nhớ siêu nhẹ.

**Tính năng cốt lõi**:
- **Bảng điều khiển trực quan**: Giám sát trạng thái Gateway, số lượng Agent và bộ nhớ đệm.
- **Khung chat đa mô hình**: Trò chuyện trực tiếp bằng WebSocket với các mô hình AI.
- **Quản lý tri thức và bộ nhớ**: Chỉnh sửa trực quan bộ nhớ làm việc, tài liệu lưu trữ và file cấu hình.
- **Phân quyền công cụ chi tiết**: Thiết lập ranh giới an toàn cho các lệnh thực thi nhạy cảm.

---

### 9.13.3 Bảng so sánh 3 công cụ quản trị trực quan

| Tiện ích | Định dạng | Điểm mạnh nhất | Kịch bản khuyên dùng |
|---|---|---|---|
| **OpenClaw Manager** | Ứng dụng Web | Quản lý đa Gateway, đa Bot Lark/Feishu | Quản lý tập trung nhiều tiến trình bot trên máy chủ |
| **ClawX** | Ứng dụng Desktop | Tác vụ tự động 24/7, đẩy thông báo đa kênh | Giám sát dữ liệu, thu thập tin tức, lập lịch trình |
| **ClawPanel** | Ứng dụng Desktop (Tauri) | Gọn nhẹ, toàn diện, quản lý bộ nhớ trực quan | Sử dụng hàng ngày trên máy tính cá nhân (macOS/Win/Linux) |

---

## 📝 Tóm tắt Chương

Qua chương này, bạn đã làm chủ:

1. **Cấu hình Bot Lark / Feishu**: Quy trình tạo ứng dụng, cấp quyền, cấu hình kết nối dài WebSocket và thiết lập bảo mật.
2. **Cấu hình Đa nền tảng**: Tích hợp với WeCom (WeChat Doanh nghiệp), DingTalk (Alibaba), Discord, Telegram và QQ.
3. **Mô hình Đa Bot Đa Agent**: Xây dựng đội ngũ trợ lý AI chuyên biệt, phân tách rõ ràng vai trò và mô hình.
4. **Sử dụng Cục bộ**: Khai thác sức mạnh của nhiều Agent qua Web UI, CLI và TUI mà không cần mạng xã hội.
5. **Công cụ Quản trị Trực quan**: Tối ưu hóa vận hành bằng OpenClaw Manager, ClawPanel và ClawX.

---

## 🎯 Bài tập Thực hành

1. Tạo một bot trên Lark/Feishu và hoàn thành kiểm thử đối thoại cơ bản.
2. Thử nghiệm cấu hình 2 Agent với 2 mô hình khác nhau để so sánh phong cách trả lời.
3. Trải nghiệm bảng điều khiển cục bộ Dashboard v2 qua trình duyệt web.
4. Tùy biến tệp `SOUL.md` để xây dựng một trợ lý có phong cách chuyên môn riêng cho công việc của bạn.

---

## 💡 Lời khuyên Nâng cao

1. Ưu tiên sử dụng Lark/Feishu khi xây dựng trợ lý cho đội ngũ công nghệ nhờ khả năng hỗ trợ WebSocket và thẻ tương tác tuyệt vời.
2. Định kỳ sao lưu thư mục `~/.openclaw` trước khi thay đổi các cấu hình quan trọng.
3. Sử dụng các công cụ quản lý trực quan để giảm tải việc ghi nhớ các câu lệnh terminal phức tạp.

---

[🏠 Quay lại Bảng mục lục chính](../../README.md)
