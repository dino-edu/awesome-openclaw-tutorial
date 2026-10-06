# Phụ lục A: Bảng Tra Cứu Nhanh Lệnh CLI

> 💡 **Mục tiêu của phụ lục này**: Cung cấp bảng tra cứu nhanh toàn diện các câu lệnh thường dùng trong OpenClaw. Tất cả các lệnh đều được kiểm chứng dựa trên tài liệu CLI chính thức (https://docs.openclaw.ai/cli), áp dụng cho phiên bản v2026.3.7 trở lên.

## 📋 Mục lục

- A.1 Cài đặt và Khởi tạo
- A.2 Quản lý Cấu hình (config)
- A.3 Gateway và Tiến trình Nền (daemon)
- A.4 Trạng thái và Chẩn đoán Lỗi
- A.5 Quản lý Kênh Kết nối (channels)
- A.6 Quản lý Mô hình AI (models)
- A.7 Quản lý Kỹ năng (skills)
- A.8 Quản lý Plugin (plugins)
- A.9 Nhật ký và Phiên làm việc (logs & sessions)
- A.10 Lập lịch Định kỳ (cron)
- A.11 Gửi và Tương tác Tin nhắn (message)
- A.12 An ninh Bảo mật và Sao lưu (security & backup)
- A.13 Đặt lại và Gỡ cài đặt (reset & uninstall)
- A.14 Chuỗi Lệnh Kịch bản Thực chiến Phổ biến
- A.15 Đường dẫn Tệp Cấu hình và Dữ liệu

## A.1 Cài đặt và Khởi tạo

```bash
# Cài đặt OpenClaw toàn cục qua npm
npm install -g openclaw@latest

# Trình hướng dẫn thiết lập lần đầu (Khuyến nghị cho người mới)
openclaw onboard

# Trình hướng dẫn nâng cao (Kiểm soát chi tiết từng bước cấu hình)
openclaw onboard --advanced

# Chạy lại trình hướng dẫn thiết lập (Đặt lại cấu hình + thông tin xác thực + phiên)
openclaw onboard --reset

# Trình cấu hình tương tác (Sửa đổi cấu hình sau khi đã cài đặt)
openclaw configure

# Kiểm tra phiên bản hiện tại
openclaw --version

# Xem hướng dẫn trợ giúp chung
openclaw --help

# Xem trợ giúp cho lệnh con cụ thể
openclaw config --help
```

## A.2 Quản lý Cấu hình (config)

> ⚠️ Lệnh `openclaw config` khi chạy không kèm lệnh con sẽ tương đương với `openclaw configure` (mở trình hướng dẫn cấu hình tương tác).  
> Lệnh `config` chỉ hỗ trợ đúng 5 lệnh con hợp lệ: `get`, `set`, `unset`, `file`, `validate`.

```bash
# Xem giá trị của một mục cấu hình cụ thể
openclaw config get <path>
openclaw config get gateway.port
openclaw config get agents.defaults.workspace
openclaw config get agents.list[0].id

# Thiết lập giá trị cấu hình (Giá trị tự động parse thành JSON5, nếu không sẽ coi là chuỗi)
openclaw config set <path> <value>
openclaw config set gateway.port 19001 --strict-json
openclaw config set agents.defaults.heartbeat.every "2h"
openclaw config set channels.whatsapp.groups '["*"]' --strict-json

# Xóa một mục cấu hình
openclaw config unset <path>
openclaw config unset tools.web.search.apiKey

# Xem đường dẫn tệp cấu hình đang sử dụng
openclaw config file

# Kiểm tra tính hợp lệ của tệp cấu hình
openclaw config validate
```

> ⚠️ **Các lệnh KHÔNG tồn tại**: `config list`, `config reset`, `config export`, `config import`, `config delete` đều không phải là lệnh con hợp lệ. Để xem toàn bộ cấu hình, hãy mở trực tiếp tệp cấu hình bằng lệnh: `openclaw config file`. Để đặt lại toàn bộ cấu hình, vui lòng dùng `openclaw reset`.

## A.3 Gateway và Tiến trình Nền (daemon)

> ⚠️ Việc khởi động và dừng Gateway trong hệ thống được quản lý thông qua lệnh `daemon`, không phải qua `gateway start/stop`.

```bash
# Cài đặt dịch vụ hệ thống (macOS: LaunchAgent / Linux: systemd)
openclaw daemon install

# Khởi động tiến trình chạy nền (daemon)
openclaw daemon start

# Dừng tiến trình chạy nền
openclaw daemon stop

# Khởi động lại tiến trình nền (thực hiện sau khi thay đổi cấu hình)
openclaw daemon restart

# Xem trạng thái hoạt động của tiến trình nền
openclaw daemon status

# Gỡ bỏ dịch vụ hệ thống
openclaw daemon uninstall

# Xem nhật ký của tiến trình nền
openclaw daemon logs

# Chạy trực tiếp Gateway ở chế độ foreground (Phù hợp để debug)
openclaw gateway

# Tham số khởi chạy Gateway
openclaw gateway --port 18789 --verbose

# Kiểm tra trạng thái sức khỏe (health) của Gateway đang chạy
openclaw gateway health

# Truy vấn thông tin trạng thái chi tiết của Gateway
openclaw gateway status

# Dò quét Gateway (Kiểm tra mở rộng)
openclaw gateway probe

# Tự động phát hiện Gateway trong mạng cục bộ LAN (Bonjour / mDNS)
openclaw gateway discover

# Gọi phương thức RPC của Gateway
openclaw gateway call <method>

# Mở giao diện điều khiển Control Dashboard (Web UI)
openclaw dashboard
```

## A.4 Trạng thái và Chẩn đoán Lỗi

```bash
# Xem trạng thái vận hành tổng thể
openclaw status

# Kiểm tra sức khỏe toàn diện
openclaw health

# Chẩn đoán sự cố tổng hợp và gợi ý hướng khắc phục
openclaw doctor

# Tự động thực thi sửa lỗi được đề xuất
openclaw doctor --yes

# Chẩn đoán ở chế độ không tương tác (phù hợp cho script CI/CD)
openclaw doctor --non-interactive

# Quét sâu (Kiểm tra dịch vụ hệ thống, quyền hạn tệp...)
openclaw doctor --deep

# Khởi động giao diện dòng lệnh dạng bảng điều khiển (TUI terminal)
openclaw tui

# Tìm kiếm trực tiếp trong tài liệu chính thức
openclaw docs <từ-khóa>
```

## A.5 Quản lý Kênh Kết nối (channels)

```bash
# Liệt kê các kênh giao tiếp đã cấu hình
openclaw channels list

# Xem trạng thái chi tiết của các kênh (Kèm kiểm tra kết nối)
openclaw channels status

# Dò quét kiểm tra kết nối kênh chuyên sâu
openclaw channels status --probe

# Thêm một kênh kết nối mới
openclaw channels add <channel>

# Xóa một kênh kết nối
openclaw channels remove <channel>

# Đăng nhập xác thực kênh
openclaw channels login <channel>

# Đăng xuất khỏi kênh
openclaw channels logout <channel>

# Quản lý ghép nối (Ghép nối DM trên WhatsApp / Telegram)
openclaw pairing list <channel>
openclaw pairing approve <channel> <code>
```

## A.6 Quản lý Mô hình AI (models)

```bash
# Liệt kê danh sách các mô hình đã được cấu hình
openclaw models list

# Xem trạng thái kết nối của các mô hình
openclaw models status

# Chuyển đổi mô hình mặc định
openclaw models set <model>
openclaw models set anthropic/claude-sonnet-4-5

# Chỉ định mô hình chuyên xử lý hình ảnh
openclaw models set-image <model>

# Thêm thông tin xác thực (API Key / OAuth / setup-token)
openclaw models auth add
openclaw models auth login --provider openai --set-default

# Quản lý định danh bí danh mô hình (Aliases)
openclaw models aliases list
openclaw models aliases add <alias> <model>
openclaw models aliases remove <alias>

# Quản lý danh sách mô hình dự phòng (Fallbacks)
openclaw models fallbacks list
openclaw models fallbacks add <model>
openclaw models fallbacks remove <model>
openclaw models fallbacks clear

# Quản lý mô hình dự phòng cho tác vụ hình ảnh
openclaw models image-fallbacks list
openclaw models image-fallbacks add <model>
openclaw models image-fallbacks remove <model>

# Quét và phát hiện các mô hình khả dụng từ nhà cung cấp
openclaw models scan

# Xem và thiết lập thứ tự ưu tiên xác thực
openclaw models auth order get
openclaw models auth order set <providers...>
```

## A.7 Quản lý Kỹ năng (skills)

> ⚠️ **Khuyến nghị chuẩn 2026.9**: Luôn ưu tiên sử dụng `openclaw skills` để liệt kê / kiểm tra / quản lý; cú pháp `clawhub install …` được giữ lại phục vụ tra cứu lịch sử.

### openclaw skills (Xem và Kiểm tra)

```bash
# Liệt kê toàn bộ Skills (Tích hợp sẵn + Workspace + Managed)
openclaw skills list

# Chỉ liệt kê các Skills đủ điều kiện để kích hoạt
openclaw skills list --eligible

# Xem thông tin chi tiết của một Skill
openclaw skills info <skill-name>

# Kiểm tra các thư viện phụ thuộc của Skills đã đáp ứng đủ chưa
openclaw skills check
```

### clawhub (Tra cứu lịch sử: Cài đặt / Gỡ bỏ / Cập nhật / Tìm kiếm)

```bash
# Cài đặt ClawHub CLI toàn cục
npm install -g clawhub

# Tìm kiếm Skills trên chợ
clawhub search <từ-khóa>
clawhub search browser
clawhub search --sort downloads

# Cài đặt Skills (Tham chiếu lịch sử)
# clawhub install <slug>
# clawhub install brave-search

# Cài đặt vào thư mục chỉ định
# clawhub install <slug> --dir /path/to/skills

# Xem chi tiết thông tin Skill trước khi cài
clawhub inspect <slug>

# Liệt kê danh sách Skills đã cài đặt qua ClawHub
clawhub list

# Cập nhật một Skill cụ thể
clawhub update <slug>

# Cập nhật tất cả Skills
clawhub update --all

# Gỡ bỏ một Skill
clawhub uninstall <slug>

# Đồng bộ hóa danh mục Skills
clawhub sync
```

## A.8 Quản lý Plugin (plugins)

```bash
# Liệt kê danh sách các plugin hiện có
openclaw plugins list

# Xem thông tin chi tiết của một plugin
openclaw plugins info <id>

# Cài đặt một plugin mới
openclaw plugins install <id>

# Kích hoạt plugin (Cần khởi động lại Gateway sau khi bật)
openclaw plugins enable <id>

# Vô hiệu hóa một plugin
openclaw plugins disable <id>

# Chẩn đoán trạng thái hoạt động của plugin
openclaw plugins doctor
```

## A.9 Nhật ký và Phiên làm việc (logs & sessions)

```bash
# Xem tệp nhật ký hệ thống
openclaw logs

# Theo dõi luồng nhật ký theo thời gian thực (stream logs)
openclaw logs --follow

# Xem định dạng nhật ký dưới dạng cấu trúc JSON
openclaw logs --json

# Xem nhật ký dưới dạng văn bản thuần túy (plain text)
openclaw logs --plain

# Giới hạn số dòng nhật ký hiển thị gần nhất
openclaw logs --limit 100

# Xem danh sách và trạng thái các phiên làm việc (sessions)
openclaw sessions
```

## A.10 Lập lịch Định kỳ (cron)

```bash
# Tạo tác vụ định kỳ chạy một lần duy nhất tại thời điểm cụ thể
openclaw cron add \
  --name "Gửi lời nhắc" \
  --at "2026-03-15T18:00:00Z" \
  --session main \
  --system-event "Nhắc nhở: Nộp báo cáo chi phí tuần"

# Tạo tác vụ định kỳ lặp lại theo biểu thức cron
openclaw cron add \
  --name "Bản tin buổi sáng" \
  --cron "0 7 * * *" \
  --tz "Asia/Ho_Chi_Minh" \
  --session isolated \
  --message "Tóm tắt email trong hộp thư đến và lịch trình hôm nay" \
  --deliver \
  --channel whatsapp

# Liệt kê các tác vụ cron đang hoạt động
openclaw cron list

# Xóa một tác vụ định kỳ theo ID
openclaw cron remove <job-id>
```

## A.11 Gửi và Tương tác Tin nhắn (message)

```bash
# Gửi tin nhắn chủ động tới một kênh đích cụ thể
openclaw message send --channel <channel> --target <target> "Nội dung tin nhắn cần gửi"

# Tạo cuộc thăm dò ý kiến (Poll)
openclaw message poll --channel discord --target channel:123 \
  --poll-question "Tối nay ăn gì?" --poll-option "Lẩu nướng" --poll-option "Cơm niêu"

# Các tác vụ tin nhắn nâng cao khác
openclaw message react
openclaw message edit
openclaw message delete
openclaw message pin
openclaw message search

# Kích hoạt một lượt trò chuyện đơn lẻ với Agent qua dòng lệnh
openclaw agent --message "Xin chào"
```

## A.12 An ninh Bảo mật và Sao lưu (security & backup)

```bash
# Kiểm toán an ninh hệ thống
openclaw security audit

# Kiểm toán an ninh chuyên sâu
openclaw security audit --deep

# Tạo bản sao lưu toàn diện
openclaw backup create

# Chỉ sao lưu tệp cấu hình
openclaw backup create --only-config

# Kiểm tra tính toàn vẹn của tệp sao lưu
openclaw backup verify <backup-id-hoặc-đường-dẫn>

# Xem danh sách các bản sao lưu hiện có
openclaw backup list

# Phục hồi dữ liệu từ bản sao lưu
openclaw backup restore <đường-dẫn-tệp-sao-lưu>

# Quản lý khóa bảo mật bí mật (secrets)
openclaw secrets
```

## A.13 Đặt lại và Gỡ cài đặt (reset & uninstall)

```bash
# Đặt lại hệ thống về trạng thái ban đầu (Cấu hình + Thông tin xác thực + Phiên làm việc)
openclaw reset

# Gỡ cài đặt OpenClaw thông thường
openclaw uninstall

# Gỡ cài đặt hoàn toàn tự động (xóa toàn bộ dữ liệu, không hỏi lại)
openclaw uninstall --all --yes --non-interactive

# Chạy thử nghiệm gỡ cài đặt (Dry-run, chỉ hiển thị kết quả dự kiến)
openclaw uninstall --dry-run

# Cập nhật OpenClaw lên bản mới nhất
openclaw update

# Kiểm tra trạng thái và thông tin cập nhật
openclaw update status

# Cập nhật tới một phiên bản chỉ định cụ thể
openclaw update --tag <số-phiên-bản>

# Chuyển kênh cập nhật phần mềm
openclaw update --channel stable
openclaw update --channel beta
```

## A.14 Chuỗi Lệnh Kịch bản Thực chiến Phổ biến

### Kịch bản 1: Cấu hình ngay sau khi hoàn tất cài đặt lần đầu

```bash
# 1. Chạy trình hướng dẫn thiết lập
openclaw onboard

# 2. Cài đặt dịch vụ nền hệ thống
openclaw daemon install

# 3. Khởi động tiến trình nền
openclaw daemon start

# 4. Mở giao diện bảng điều khiển Web
openclaw dashboard
```

### Kịch bản 2: Thay đổi mô hình AI đang sử dụng

```bash
# 1. Kiểm tra danh sách mô hình khả dụng
openclaw models list

# 2. Đổi mô hình chính sang Claude Sonnet
openclaw models set anthropic/claude-sonnet-4-5

# 3. Khởi động lại dịch vụ daemon để cập nhật
openclaw daemon restart
```

### Kịch bản 3: Cài đặt và kích hoạt thêm Skill mới

```bash
# 1. Tìm kiếm Skill mong muốn
clawhub search screenshot

# 2. Cài đặt Skill tương ứng (tham chiếu lịch sử)
# clawhub install peekaboo

# 3. Xác nhận Skill đã sẵn sàng trong hệ thống
openclaw skills list

# 4. Khởi động lại daemon
openclaw daemon restart
```

### Kịch bản 4: Quy trình chẩn đoán sự cố toàn diện

```bash
# 1. Kiểm tra trạng thái vận hành tổng quát
openclaw status

# 2. Kích hoạt bác sĩ chẩn đoán tự động
openclaw doctor

# 3. Theo dõi luồng nhật ký lỗi trực tiếp
openclaw logs --follow

# 4. Kiểm tra sức khỏe kết nối Gateway
openclaw gateway health

# 5. Rà soát lại an ninh hệ thống
openclaw security audit
```

## A.15 Đường dẫn Tệp Cấu hình và Dữ liệu

```bash
# Xem đường dẫn tệp cấu hình thực tế
openclaw config file

# Tệp cấu hình chính (Vị trí mặc định)
~/.openclaw/openclaw.json

# Thư mục chứa Skills cấp không gian làm việc (Workspace level)
<workspace>/skills/

# Thư mục chứa Skills cấp toàn cục (Global level)
~/.openclaw/skills/

# Các tệp định nghĩa nhân cách và hành vi Agent
~/clawd/SOUL.md
~/clawd/USER.md
~/clawd/AGENTS.md

# Thư mục lưu trữ bộ nhớ và ngữ cảnh
~/clawd/memory/
```

## 📚 Tài liệu tham khảo liên quan

- Tra cứu đầy đủ các lệnh OpenClaw CLI: https://docs.openclaw.ai/cli
- Tài liệu công cụ ClawHub CLI: https://docs.openclaw.ai/tools/clawhub
- Tham khảo toàn bộ trường cấu hình: https://docs.openclaw.ai/gateway/configuration

**Ghi chú**: Bảng tra cứu này đã được xác thực trên phiên bản OpenClaw v2026.3.7 trở lên. Danh mục lệnh có thể được bổ sung hoặc tinh chỉnh theo từng bản phát hành mới. Nếu gặp lỗi cú pháp, bạn hãy chạy `openclaw update` để cập nhật bản mới nhất hoặc đối chiếu tài liệu chính thức.
