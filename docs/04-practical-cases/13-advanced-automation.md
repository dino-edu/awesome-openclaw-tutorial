> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 13: Quy trình Tự động hóa Nâng cao (Cron / Tasks / Task Flow / Hooks / Standing Orders)

> Mục tiêu chương này: Xây dựng một tư duy tự động hóa chuẩn theo thiết kế chính thức hiện tại của OpenClaw, không còn nhầm lẫn ranh giới trách nhiệm giữa cron, heartbeat, tasks, Task Flow, hooks và standing orders.

---

## Baseline phiên bản

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (Phát hành ngày 08-09-2026)
- Nội dung chương tự động hóa mặc định giải thích theo hành vi của bản ổn định `v2026.9.3`; sau khi nâng cấp hãy chạy trước lệnh `openclaw doctor --fix`

---

## Hướng dẫn đọc dành cho người mới bắt đầu

### Điều quan trọng nhất trong chương này không phải là câu lệnh, mà là thứ tự tiếp cận

Rất nhiều người vừa bắt đầu đã lao vào học ngay `Task Flow`, kết quả là càng học càng rối. Thứ tự tiếp cận phù hợp nhất cho người mới là:

1. Học `cron` trước
2. Học cách xem `tasks`
3. Cuối cùng mới triển khai `Task Flow`, `hooks`, `standing orders`

### Nếu bạn chỉ muốn tạo một luồng tự động hóa chạy được ngay

Hãy hoàn thành lộ trình tối thiểu sau:

- Dùng `cron` tạo một tác vụ chạy vào mỗi buổi sáng
- Dùng `tasks list` xem tác vụ đó đã vào sổ theo dõi chạy nền (ledger) chưa
- Dùng `tasks show` xem chi tiết một tác vụ

Nếu hoàn thành trơn tru cả 3 bước này, bạn hãy đọc tiếp phần điều phối nhiều bước (multi-step orchestration) phía sau.

### Chương này phù hợp với ai

- Đã dùng OpenClaw ổn định, nhưng muốn giao việc lặp đi lặp lại cho hệ thống tự chạy
- Muốn biến các tác vụ "nhắc nhở, báo cáo, quét kiểm tra, tổng hợp" thành quy trình cố định
- Muốn kết nối với kích hoạt từ bên ngoài, nhưng chưa phân biệt rõ `hooks` và `webhooks`

---

## 13.1 Phân biệt rõ ràng 6 khái niệm cốt lõi

| Cơ chế | Phù hợp với điều gì | Khi nào nên dùng |
|--------|---------------------|-------------------|
| `cron` | Kích hoạt theo thời gian chính xác | Hàng ngày, hàng tuần, nhắc nhở một lần, báo cáo định kỳ |
| `heartbeat` | Kiểm tra định kỳ xấp xỉ | Cần liên tục "tuần tra phiên chính" thay vì đúng từng giây chính xác |
| `tasks` | Ghi nhận công việc chạy nền | Xem detached work đang chạy gì, bị tắc ở đâu |
| `Task Flow` | Điều phối nhiều bước có khả năng phục hồi | Các quy trình bền vững (durable) dạng A → B → C |
| `hooks` | Kích hoạt gọn nhẹ từ bên ngoài | Hệ thống bên ngoài bắn một sự kiện, đánh thức phiên chính hoặc chạy isolated job |
| `standing orders` | Quy tắc ủy quyền dài hạn | Ghi rõ "bạn có những quyền hạn và trách nhiệm cố định nào" vào `AGENTS.md` |

Quan điểm cốt lõi từ tài liệu chính thức rất nhất quán:

- `cron` là bộ lập lịch (Scheduler)
- `tasks` là sổ theo dõi công việc chạy nền (Background Tasks Ledger)
- `Task Flow` là tầng điều phối bền vững nằm phía trên tasks
- `standing orders` là sự ủy quyền vận hành dài hạn cho agent, bản thân nó không phải là bộ lập lịch

---

## 13.2 `cron`: Lựa chọn hàng đầu cho tự động hóa điều hướng theo thời gian

### 13.2.1 Nhắc nhở một lần

Đây là ví dụ thích hợp nhất để người mới luyện tập vì cấu trúc đơn giản nhất: Đến thời điểm chỉ định, gửi một lời nhắc rồi kết thúc.

```bash
openclaw cron add \
  --name "Reminder" \
  --at "2026-05-01T16:00:00Z" \
  --session main \
  --system-event "Reminder: review the launch checklist" \
  --wake now \
  --delete-after-run
```

### 13.2.2 Báo cáo định kỳ hằng ngày

```bash
openclaw cron add \
  --name "Morning brief" \
  --cron "0 7 * * *" \
  --tz "Asia/Shanghai" \
  --session isolated \
  --message "Summarize overnight updates, key tasks, and calendar priorities." \
  --announce
```

### 13.2.3 Các lệnh vận hành thường dùng

#### Dấu hiệu nhận biết `cron` đã chạy thông suốt

Bạn ít nhất cần biết kiểm tra 3 điều sau:

- Nhìn thấy tác vụ vừa tạo trong danh sách `openclaw cron list`
- Nhìn thấy lịch sử thực thi thực tế qua `openclaw cron runs --id <job-id>`
- Nếu tác vụ chạy dài, bạn cũng nhìn thấy tác vụ chạy nền tương ứng trong `tasks list`

```bash
openclaw cron list
openclaw cron runs --id <job-id>
openclaw cron run <job-id>
openclaw cron edit <job-id> --message "Updated prompt"
openclaw cron remove <job-id>
```

### 13.2.4 Cách chọn chế độ session phù hợp

- `main`: Phù hợp cho nhắc nhở, sự kiện hệ thống, tiếp nối ngữ cảnh của phiên chính
- `isolated`: Phù hợp cho báo cáo ngày, quét dữ liệu, phân tích, xử lý hàng loạt theo lô
- `current`: Phù hợp với tác vụ lặp lại gắn liền với phiên làm việc hiện tại
- `session:custom-id`: Phù hợp với quy trình cố định cần duy trì cùng một ngữ cảnh mỗi ngày

---

## 13.3 `tasks`: Học cách đọc sổ theo dõi trước khi bàn đến điều phối phức tạp

Nhiều người biến hệ thống tự động hóa trở nên quá phức tạp, rốt cuộc lại không biết "cái gì đang chạy, cái gì bị lỗi ở đâu". Đó chính là ý nghĩa của `tasks`.

### 13.3.1 Các lệnh bạn bắt buộc phải nắm vững

```bash
openclaw tasks list
openclaw tasks show <task-id>
openclaw tasks cancel <task-id>
openclaw tasks audit
```

### 13.3.2 Giá trị lớn nhất của `tasks audit`

Lệnh này trực tiếp chỉ ra cho bạn biết liệu hệ thống có tồn tại các trạng thái lỗi sau hay không:

- `stale_queued` (Tồn đọng hàng đợi quá lâu)
- `stale_running` (Treo trạng thái đang chạy)
- `lost` (Mất dấu vết tác vụ)
- `delivery_failed` (Gửi kết quả thất bại)
- `missing_cleanup` (Thiếu bước dọn dẹp tài nguyên)
- `inconsistent_timestamps` (Mốc thời gian không nhất quán)

Nếu bạn đang sử dụng:

- Sinh video AI
- Tạo nhạc AI
- Tác vụ isolated cron
- Subagent / Tác vụ con ACP

Thì `tasks audit` nên trở thành thao tác kiểm tra định kỳ cố định của bạn.

---

## 13.4 `Task Flow`: Tầng điều phối tiêu chuẩn cho quy trình nhiều bước

Task Flow phù hợp cho:

- Quy trình tuần tự hoặc phân nhánh nhiều bước
- Yêu cầu lưu giữ trạng thái bền vững (persistence)
- Cần tiếp tục chạy lại sau khi gateway khởi động lại
- Cần góc nhìn trực quan thống nhất về tiến độ toàn quy trình

### 13.4.1 Hai chế độ hoạt động

**Managed mode**: Bản thân Task Flow tự điều khiển từng bước thực thi tác vụ.

Phù hợp cho:

- Dây chuyền sản xuất báo cáo tuần
- Dây chuyền sản xuất nội dung media
- Tự động bàn giao sau khi được phê duyệt

**Mirrored mode**: Task Flow chỉ quan sát các tác vụ bên ngoài và đồng bộ hóa trạng thái.

Phù hợp cho:

- Đã có sẵn cron / CLI / hệ thống bên ngoài tạo ra các tác vụ
- Bạn chỉ muốn gom nhiều tác vụ lại thành một màn hình theo dõi quy trình tập trung

### 13.4.2 Các lệnh CLI

```bash
openclaw tasks flow list
openclaw tasks flow show <lookup>
openclaw tasks flow cancel <lookup>
```

### 13.4.3 Khi nào KHÔNG NÊN dùng Task Flow

Đừng vội áp dụng trong các trường hợp sau:

- Chỉ là một tác vụ chạy nền đơn lẻ một lần
- Chỉ là một lời nhắc cố định hàng ngày
- Bạn vẫn chưa thành thạo xem `tasks list` / `tasks audit`
- Các bước của luồng công việc chưa ổn định, hôm nay sửa một kiểu, ngày mai sửa kiểu khác

Trong những trường hợp này, dùng cron hoặc isolated job sẽ ổn định và đơn giản hơn nhiều.

---

## 13.5 Plugin `hooks` và `webhooks`: Kết nối hệ thống bên ngoài vào OpenClaw

### 13.5.1 Kích hoạt gọn nhẹ: `hooks`

Tính năng `hooks` chính thức phù hợp khi có sự kiện từ hệ thống bên ngoài truyền vào để:

- Đánh thức phiên chính (wake main session)
- Kích hoạt một lượt chạy isolated agent run

Cấu hình mẫu:

```json
{
  "hooks": {
    "enabled": true,
    "token": "replace-with-dedicated-hook-token",
    "path": "/hooks"
  }
}
```

Gọi endpoint `wake`:

```bash
curl -X POST http://127.0.0.1:18789/hooks/wake \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"text":"New invoice received","mode":"now"}'
```

Gọi endpoint `agent`:

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize the new invoice and extract payable date","name":"Finance","model":"openai/gpt-5.4-mini"}'
```

### 13.5.2 Điều phối nhiều bước: Plugin `webhooks`

Nếu bạn dùng Zapier, n8n, hệ thống CI, hoặc Google Forms để kích hoạt quy trình phức tạp, hãy dùng trực tiếp plugin `webhooks` gắn với Task Flow. Cấu hình chính thức:

```json
{
  "plugins": {
    "entries": {
      "webhooks": {
        "enabled": true,
        "config": {
          "routes": {
            "ops": {
              "path": "/plugins/webhooks/ops",
              "sessionKey": "agent:main:main",
              "secret": {
                "source": "env",
                "provider": "default",
                "id": "OPENCLAW_WEBHOOK_SECRET"
              },
              "controllerId": "webhooks/ops",
              "description": "Ops TaskFlow bridge"
            }
          }
        }
      }
    }
  }
}
```

**Hai hành động phổ biến nhất**:

- `create_flow`
- `run_task`

Giải pháp này ổn định hơn rất nhiều so với việc viết các đoạn mã shell chắp vá (glue code) như các bài hướng dẫn cũ, đồng thời hỗ trợ xử lý sự cố thuận tiện hơn.

---

## 13.6 `standing orders`: Tự động hóa không phải là "kế hoạch", mà là "sự ủy quyền dài hạn"

Tài liệu chính thức của OpenClaw hiện đã giải thích rất rõ: Standing orders không phải là một bộ đếm thời gian nào đó, mà là **các quy tắc ủy quyền dài hạn được ghi trong workspace của agent**. Khuyến nghị đặt trực tiếp trong file `AGENTS.md`, vì tệp này sẽ tự động được đưa vào ngữ cảnh của mọi phiên làm việc.

### 13.6.1 Cấu trúc của một standing order đạt chuẩn

```md
## Program: Weekly Status Report

**Authority:** Compile data, generate report, deliver to stakeholders
**Trigger:** Every Friday at 4 PM (enforced via cron job)
**Approval gate:** None for standard reports. Flag anomalies for human review.
**Escalation:** If data source is unavailable or metrics look unusual

### Execution Steps

1. Pull metrics from configured sources
2. Compare to prior week and targets
3. Generate report in Reports/weekly/YYYY-MM-DD.md
4. Deliver summary via configured channel
5. Log completion to Agent/Logs/

### What NOT to Do

- Do not send reports to external parties
- Do not modify source data
- Do not skip delivery if metrics look bad
```

### 13.6.2 Tại sao cơ chế này quan trọng

Khi không có standing orders:

- Bạn phải liên tục lặp lại các chỉ thị quản lý giống nhau trong mỗi lần giao tiếp
- Agent chỉ "thụ động chờ bạn gọi"
- Các công việc định kỳ thường nhật (routine work) rất dễ bị gián đoạn

Khi có standing orders:

- Ranh giới trách nhiệm rõ ràng, minh bạch
- Các điểm phê duyệt của con người được phân định cụ thể
- Hành vi dài hạn của agent dễ kiểm soát hơn
- `cron` chỉ chịu trách nhiệm "khi nào chạy", còn `AGENTS.md` quyết định "chạy cái gì, khi nào thì dừng"

---

## 13.7 Các tổ hợp tự động hóa nên dùng và không nên dùng

### Tổ hợp khuyến nghị nên dùng

**Tổ hợp 1: Báo cáo định kỳ**

- `cron`
- `tasks list / audit`
- `AGENTS.md` standing order

**Tổ hợp 2: Quy trình nhiều bước do hệ thống ngoài điều hướng**

- `hooks` hoặc plugin `webhooks`
- `Task Flow`
- `tasks flow show`

**Tổ hợp 3: Nghiên cứu dài hạn / Vận hành tri thức**

- `cron`
- `infer web search / fetch`
- `Memory Wiki`

### Tổ hợp KHÔNG nên dùng

- Chỉ dùng vòng lặp shell `while true + sleep` để mô phỏng bộ lập lịch
- Dùng một prompt khổng lồ duy nhất để thay thế standing orders
- Chưa thành thạo xem `tasks audit` đã vội vàng triển khai nhiều subagent và webhook
- Ghi trực tiếp token của hệ thống bên ngoài vào kho mã nguồn

---

## 13.8 Khuyến nghị thực hành cho chương này

Nếu bạn muốn xây dựng một hệ thống tự động hóa ổn định từ con số 0 đến 1, trình tự nên thực hiện là:

1. Dùng `cron` chạy thông suốt một tác vụ cố định trước
2. Học cách theo dõi qua `tasks list` và `tasks audit`
3. Khi có quy trình nhiều bước, hãy đưa vào `Task Flow`
4. Khi cần tích hợp hệ thống ngoài, mới mở `hooks` / plugin `webhooks`
5. Cuối cùng, kết tinh các trách nhiệm dài hạn vào file `AGENTS.md`

---

## 13.9 Tài liệu tham khảo chính thức

- GitHub Releases: https://github.com/openclaw/openclaw/releases
- Automation Overview: https://docs.openclaw.ai/automation/cron-vs-heartbeat
- Scheduled Tasks: https://docs.openclaw.ai/automation/cron-jobs
- Background Tasks: https://docs.openclaw.ai/automation/tasks
- Task Flow: https://docs.openclaw.ai/automation/taskflow
- Standing Orders: https://docs.openclaw.ai/automation/standing-orders
- Webhooks Plugin: https://docs.openclaw.ai/plugins/webhooks
