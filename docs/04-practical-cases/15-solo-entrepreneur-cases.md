> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 15: Thực chiến Mô hình Công ty Một người - Solopreneur (Chọn đề tài, Bàn giao, Phân phối, Đánh giá)

> Mục tiêu chương này: Chuyển đổi toàn bộ quy trình "một người tự xây dựng thương hiệu, làm sản phẩm, phân phối nội dung" thành phiên bản tương thích với năng lực chính thức hiện nay của OpenClaw: sử dụng standing orders, cron, Task Flow, năng lực media và Memory Wiki để tạo thành một vòng lặp khép kín.

---

## Baseline phiên bản

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (Phát hành ngày 08-09-2026)
- Chương này hoàn toàn bám sát theo luồng chính của bản ổn định `v2026.9.3`, tránh đưa các bản beta lịch sử hoặc plugin đã bị loại bỏ vào quy trình vận hành thương mại mặc định

---

## Hướng dẫn đọc dành cho người mới bắt đầu

### Chương này không phải là "giáo trình kiếm tiền tự động hoàn toàn"

Định vị chính xác của chương này là: **Hướng dẫn bạn cách bóc tách các công việc kinh doanh thường nhật của một cá nhân thành những quy trình có thể tái sử dụng**. Nó không khuyến khích bạn phát hành nội dung ra bên ngoài mà không qua khâu duyệt bài, xác nhận hay kiểm tra lại.

### Ai nên đọc chương này trước

- Bạn đã chạy thông suốt phần tự động hóa ở Chương 13 và năng lực media ở Chương 14
- Bạn đang tự mình làm nội dung, sản phẩm số, tư vấn, khóa học hoặc chuyển giao dịch vụ
- Bạn muốn biến các khâu "nghiên cứu, soạn thảo, sản xuất tư liệu, phân phối, đánh giá" thành một dây chuyền bán tự động

### Cách đọc hiệu quả nhất cho người mới

- **Chỉ muốn xây dựng hệ thống nội dung**: Đọc `15.1` trước
- **Chỉ muốn tự động hóa theo dõi khách hàng tiềm năng (Leads)**: Đọc `15.2` trước
- **Muốn hiểu toàn bộ hệ điều hành của một Solopreneur**: Đọc tiếp từ `15.3` trở đi

### Nguyên tắc cốt lõi quan trọng nhất

Mọi hoạt động phát hành ra bên ngoài, báo giá dịch vụ, rủi ro pháp lý, rủi ro thương hiệu mặc định đều phải giữ lại bước phê duyệt của con người. Thế mạnh của OpenClaw là **giúp bạn tăng tốc tối đa**, chứ không phải gánh vác trách nhiệm pháp lý thay bạn.

---

## 15.1 Ca thực chiến 1: Dây chuyền sản xuất nội dung thương hiệu cá nhân

### 15.1.1 Mục tiêu

Một người tự mình hoàn thành trọn vẹn chuỗi liên kết sau:

1. Tự động tìm kiếm các chủ đề đáng viết mỗi ngày
2. Nhanh chóng nghiên cứu và tổng hợp tư liệu
3. Tạo bản nháp bài viết / bài đăng mạng xã hội / kịch bản video ngắn
4. Tự động tạo ảnh minh họa, file đọc thử giọng hoặc tư liệu video ngắn
5. Con người phê duyệt trước khi phân phối ra các kênh

### 15.1.2 Thiết lập Standing Orders trước, thay vì gom góp công cụ

Ghi rõ các trách nhiệm dài hạn của agent vào file `AGENTS.md`:

```md
## Program: Daily Content Desk

**Authority:** Research AI/productivity topics, draft content, prepare assets
**Trigger:** Daily 09:00 via cron, plus manual on-demand requests
**Approval gate:** External publishing always requires human approval
**Escalation:** If sources conflict, legal risk appears, or confidence is low

### Execution Steps

1. Search for the last 24h worth of relevant updates
2. Rank 3 content angles
3. Draft one article outline and one short-form script
4. Prepare image/video/audio asset suggestions
5. Save everything to the workspace and wait for approval

### What NOT to Do

- Do not auto-publish to external platforms
- Do not fabricate facts or quotes
- Do not reuse old claims when sources conflict
```

### 15.1.3 Kích hoạt định kỳ bằng Cron

Ví dụ này rất đáng để triển khai trước tiên, vì nó giúp bạn nhận được danh sách chủ đề đề xuất cố định vào mỗi sáng, từ đó dễ dàng đánh giá liệu hệ thống có thực sự tiết kiệm thời gian cho bạn hay không.

```bash
openclaw cron add \
  --name "Daily content desk" \
  --cron "0 9 * * *" \
  --tz "Asia/Shanghai" \
  --session isolated \
  --message "Research AI/productivity topics from the last 24 hours, rank 3 angles, draft one article outline and one short-form script, then summarize what needs approval." \
  --announce
```

### 15.1.4 Sản xuất tư liệu media

Ở giai đoạn nghiên cứu tư liệu, ưu tiên dùng các lệnh tìm kiếm và cào dữ liệu chính thức:

```bash
openclaw infer web search --query "OpenClaw release notes April 2026" --json
openclaw infer web fetch --url https://github.com/openclaw/openclaw/releases --json
```

Ở giai đoạn tạo tư liệu, ưu tiên dùng năng lực media chính thức:

```bash
openclaw infer image generate --prompt "Một ảnh minh họa phong cách vẽ bảng trắng: Dây chuyền sản xuất nội dung AI" --json
openclaw infer tts convert --text "Các chủ đề hôm nay đã chuẩn bị xong" --output ./topic-brief.mp3 --json
```

Nếu cần tư liệu video ngắn, hãy để agent gọi `video_generate` và theo dõi tiến độ qua lệnh `tasks list`.

#### Dấu hiệu nhận biết dây chuyền nội dung đã mang lại giá trị thực tế

- Mỗi ngày bạn đều nhận được danh sách chủ đề ứng viên và bản nháp một cách đều đặn
- Bạn không cần phải mở thủ công hàng chục tab trình duyệt để cóp nhặt tư liệu
- Bạn vẫn giữ quyền kiểm duyệt cuối cùng, không để hệ thống tự tiện đăng bài ra ngoài

### 15.1.5 Vì sao cách làm này ổn định hơn các hướng dẫn cũ

Vấn đề lớn nhất trong các hướng dẫn Solopreneur kiểu cũ là thường gắn chặt vào hàng loạt công cụ đăng bài nền tảng bên thứ ba và các tên Skill đã lỗi thời. Cách làm chuẩn và bền vững hơn hiện nay là:

- OpenClaw đảm nhiệm khâu nghiên cứu, soạn thảo, chuẩn bị tư liệu và theo dõi trạng thái
- Việc phân phối ra bên ngoài chỉ diễn ra sau khi con người đã kiểm tra và duyệt
- Nếu thực sự muốn tự động phân phối, hãy tích hợp qua plugin `hooks` / `webhooks` hoặc một tầng dịch vụ trung gian riêng, không phụ thuộc cứng vào bất kỳ nền tảng cũ nào

---

## 15.2 Ca thực chiến 2: Tự động hóa thu thập và theo dõi khách hàng tiềm năng (Leads)

### 15.2.1 Kịch bản thực tế

Bạn có:

- Biểu mẫu đăng ký trên website
- Email tư vấn gửi đến
- Tin nhắn riêng từ Telegram / Slack / Lark / Feishu
- Yêu cầu dùng thử sản phẩm

Bạn muốn đạt được:

1. Khi có khách hàng tiềm năng mới, hệ thống nhận diện ngay lập tức
2. Tự động bổ sung thông tin hồ sơ cơ bản
3. Phân loại theo mức độ ưu tiên
4. Đưa ra gợi ý phản hồi phù hợp
5. Nâng cấp thành ca xử lý thủ công cho con người khi cần thiết

### 15.2.2 Kiến trúc khuyến nghị

```text
Sự kiện từ Biểu mẫu / Email / Ứng dụng nhắn tin
  -> Plugin hooks hoặc webhooks
  -> create_flow
  -> run_task (Đánh giá điều kiện / Tóm tắt nhu cầu / Gợi ý phản hồi)
  -> Ghi vào Memory Wiki / Hệ thống CRM
  -> Con người phê duyệt trước khi gửi phản hồi chính thức
```

### 15.2.3 Triển khai tối thiểu kích hoạt từ bên ngoài

Với các trường hợp gọn nhẹ, sử dụng trực tiếp endpoint `hooks/agent`:

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Classify this inbound lead, summarize intent, infer urgency, and draft a reply outline.","name":"Lead intake","model":"openai/gpt-5.4-mini"}'
```

Với các kịch bản phức tạp, sử dụng plugin `webhooks` để khởi tạo Task Flow:

- `create_flow`: Tạo đối tượng luồng xử lý riêng cho lead đó
- `run_task`: Tách thành các tác vụ con như đánh giá điều kiện, bổ sung hồ sơ, đề xuất câu trả lời

### 15.2.4 Vì sao nên ghi nhận khách hàng tiềm năng vào Memory Wiki

Nỗi sợ lớn nhất của một Solopreneur không phải là "trả lời chậm", mà là:

- Trước sau nói năng không nhất quán
- Quên bối cảnh và nhu cầu đặc thù của khách hàng
- Quên mất những cam kết đã từng hứa
- Trạng thái chăm sóc bị phân tán rải rác ở khắp nơi

Khi bạn kết tinh các thông tin quan trọng vào Wiki, bạn sẽ luôn nắm rõ:

- Khách hàng / Công ty này là ai
- Họ đến từ kênh nào
- Họ quan tâm đến vấn đề gì nhất
- Cuộc trao đổi trước đó đã dừng ở bước nào
- Còn những vướng mắc nào chưa được giải quyết

Điều này có ý nghĩa sống còn đối với một đội ngũ một người.

---

## 15.3 Hệ điều hành 4 tầng của Solopreneur

Tôi khuyến nghị bóc tách vai trò của OpenClaw trong mô hình Solopreneur thành 4 tầng rõ rệt:

### Tầng 1: Tầng thực thi hàng ngày (Execution Layer)

Đảm nhiệm:

- Tìm kiếm và thu thập dữ liệu
- Tóm tắt và phân tích thông tin
- Tạo hình ảnh / file đọc thử / tư liệu video
- Xử lý tin nhắn và danh sách việc cần làm (To-Do) thường nhật

Năng lực cốt lõi:

- `infer`
- `image_generate`
- `video_generate`
- `music_generate`
- `tts`

### Tầng 2: Tầng điều phối (Orchestration Layer)

Đảm nhiệm:

- Thực thi theo lịch định kỳ
- Ghi nhận trạng thái tác vụ
- Xử lý và giám sát các tác vụ dài hạn
- Theo dõi quy trình phân nhánh nhiều bước

Năng lực cốt lõi:

- `cron`
- `tasks`
- `Task Flow`

### Tầng 3: Tầng ủy quyền dài hạn (Standing Authority Layer)

Đảm nhiệm:

- Quy định những đầu việc agent được phụ trách lâu dài
- Quy định những việc bắt buộc phải có con người phê duyệt
- Quy định khi nào cần leo thang (escalate) để người dùng can thiệp

Vật phẩm cốt lõi:

- `AGENTS.md`
- Standing orders

### Tầng 4: Tầng tri thức (Knowledge Layer)

Đảm nhiệm:

- Tích lũy tài sản về khách hàng, dự án, sản phẩm và nội dung
- Ghi nhận luận điểm (claim) / bằng chứng (evidence) / mâu thuẫn (contradiction)
- Biến kinh nghiệm thực chiến thành tri thức có thể tra cứu nhanh

Năng lực cốt lõi:

- `memory-core`
- `active-memory`
- `memory-wiki`

---

## 15.4 Cách thiết lập ranh giới phê duyệt cho Solopreneur

Đây là phần quan trọng nhất của chương này.

**Có thể để AI tự động thực hiện hoàn toàn**:

- Nghiên cứu và tóm tắt thông tin
- Đề xuất ý tưởng và góc nhìn nội dung
- Cào dữ liệu và tổng hợp tài liệu
- Tạo các bản phác thảo tư liệu media ban đầu
- Đưa ra đề xuất phân loại khách hàng tiềm năng
- Soạn thảo bản nháp báo cáo tuần và báo cáo ngày

**BẮT BUỘC phải có con người xác nhận trực tiếp**:

- Phát hành bài đăng chính thức ra các kênh đối ngoại
- Đưa ra các cam kết thỏa thuận với khách hàng
- Gửi báo giá, hợp đồng, thông tin thanh toán tài chính
- Xử lý các khủng hoảng truyền thông nhạy cảm
- Chỉnh sửa dữ liệu môi trường sản xuất (production) hoặc file cấu hình cốt lõi

OpenClaw rất xuất sắc trong việc hoàn thành "80% khối lượng chuẩn bị ban đầu", nhưng bước nhảy trách nhiệm kinh doanh cuối cùng nhất định phải nằm trong tay con người.

---

## 15.5 Bộ công cụ tối thiểu triển khai được ngay (Khuyến nghị)

Nếu bạn chỉ có một mình, đừng vội xây dựng một bộ công cụ cồng kềnh ngay từ đầu. Bộ khung sau đây là thiết thực nhất:

### Thành phần bắt buộc phải có ngay

- `openclaw onboard`
- Mô hình chính + Chuỗi dự phòng (fallbacks)
- Một tác vụ `cron` cho báo cáo ngày / báo cáo tuần
- Một standing order trong `AGENTS.md`
- Một giao diện `hooks` hoặc `webhooks`

### Bổ sung ở giai đoạn thứ hai

- `Active Memory`
- `Memory Wiki`
- Cấu hình mô hình mặc định cho ảnh / video / âm nhạc
- `Task Flow`

### Tạm thời chưa nên vội đưa vào

- Hàng loạt tầng tương thích sinh thái Skill cũ
- Các đoạn script phụ thuộc cứng vào nền tảng bên thứ ba
- Tính năng tự động đăng bài ra ngoài mà không có ranh giới phê duyệt
- Điều phối đa agent phức tạp khi bản thân chưa nắm được cách quan sát tác vụ

---

## 15.6 Checklist đánh giá lại (Review) hằng tuần

Khuyến nghị định kỳ mỗi tuần kiểm tra một lần:

```bash
openclaw status
openclaw cron list
openclaw tasks audit
openclaw tasks flow list
openclaw memory status --deep
openclaw wiki status
openclaw wiki lint
```

Trọng tâm cần rà soát:

1. Tác vụ có bị tồn đọng hoặc treo không
2. Những quy trình nào thường xuyên gặp sự cố
3. Những cam kết nào với khách hàng chưa được đưa vào tầng tri thức (Wiki)
4. Những standing orders nào cần thu hẹp hoặc mở rộng quyền hạn
5. Những luồng tự động hóa nào còn thiếu ranh giới phê duyệt của con người

---

## 15.7 Kết luận chương

Xây dựng công ty một người không phải là "để AI thay thế hoàn toàn bạn", mà là:

- Để OpenClaw tiếp quản công việc nghiên cứu, tổng hợp, lập lịch, chuẩn bị tư liệu và theo dõi trạng thái
- Giúp bạn tập trung trọn vẹn trí lực vào việc ra quyết định, lựa chọn hướng đi, xây dựng thương hiệu, hoàn thiện sản phẩm và chịu trách nhiệm cuối cùng

Nói cách khác:

**Hãy giao các công việc lặp đi lặp lại cho hệ thống, và giữ lại quyền phán đoán tối cao cho chính bản thân bạn.**

---

## 15.8 Tài liệu tham khảo chính thức

- GitHub Releases: https://github.com/openclaw/openclaw/releases
- Automation Overview: https://docs.openclaw.ai/automation/cron-vs-heartbeat
- Scheduled Tasks: https://docs.openclaw.ai/automation/cron-jobs
- Task Flow: https://docs.openclaw.ai/automation/taskflow
- Standing Orders: https://docs.openclaw.ai/automation/standing-orders
- Webhooks Plugin: https://docs.openclaw.ai/plugins/webhooks
- Memory Wiki: https://docs.openclaw.ai/plugins/memory-wiki
- Inference CLI: https://docs.openclaw.ai/cli/infer
