> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 8: Mở rộng Skills (Khi nào nên dùng, cách tìm kiếm, cài đặt và quản lý)

> Mục tiêu chương: Đặt Skills về đúng vị trí thực tế của nó. Skills vẫn rất quan trọng, nhưng không còn là "lối vào duy nhất cho mọi năng lực". Bạn sẽ học được: khi nào nên dùng Skills, khi nào nên tận dụng năng lực tích hợp sẵn, cùng cách tìm kiếm, cài đặt, kiểm tra và bảo trì Skills an toàn.

---

## Mốc phiên bản chuẩn

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (phát hành 08/09/2026)
- Chương này mặc định bám sát phiên bản ổn định `v2026.9.3`; mọi câu lệnh đều lấy CLI chính thức `openclaw skills` làm chuẩn (tránh dùng lệnh cũ `clawhub install`).

---

## Hướng dẫn định hướng nhanh cho người mới

### Kết luận quan trọng nhất của chương này

OpenClaw ngày nay không còn ở giai đoạn "không có Skills thì không làm được gì".

Rất nhiều năng lực cốt lõi đã có giải pháp chính thức:

- Mô hình và nhà cung cấp: `openclaw models`
- Gọi năng lực không cần giao diện (headless): `openclaw infer`
- Tự động hóa: `cron / tasks / Task Flow / webhooks`
- Bộ nhớ: `Active Memory / Memory Wiki`
- Đa phương tiện (Media): `image_generate / video_generate / tts / music_generate`

**Skills hiện nay phù hợp nhất để đóng vai trò "Quy trình thao tác chuẩn (SOP) và phương pháp làm việc có thể tái sử dụng"**, thay vì bị coi là điểm khởi đầu mặc định cho mọi tính năng.

### Nếu bạn chỉ muốn nắm phần thực dụng nhất trước, hãy đọc:

- **Muốn cài đặt nhanh một Skill dùng được ngay**: Xem mục `8.2`
- **Muốn hiểu rõ phân công giữa Skills và các năng lực khác**: Xem mục `8.1`
- **Muốn tự viết một Skill cục bộ**: Xem mục `8.4`
- **Lo ngại về vấn đề an toàn bảo mật**: Xem mục `8.5`

### 4 lỗi người mới dễ mắc phải nhất

- Đọc tài liệu cũ rồi chạy ngay lệnh `clawhub install ...`
- Nhầm lẫn lẫn lộn giữa Skills, Tools, Plugins và MCP
- Chưa xem mã nguồn mà đã vội cài đặt Skill bên thứ ba
- Trường hợp rõ ràng nên dùng `infer` hoặc tính năng tích hợp, lại cố tìm một Skill để giải quyết

---

## 8.1 Bản chất của Skills sau cột mốc 2026.4 là gì?

### 8.1.1 Khái niệm cốt lõi trong một câu

Bạn có thể hình dung Skill giống như:

- Một bản hướng dẫn vận hành có thể tái sử dụng
- Một bộ SOP chuyên biệt được tải khi cần trong ngữ cảnh thích hợp
- Tập hợp kinh nghiệm chuyên môn hướng dẫn agent "gặp tác vụ dạng này thì cần làm như thế nào"

Skill phát huy hiệu quả tối đa khi: **Bạn phải làm đi làm lại cùng một nhóm tác vụ, và quy trình xử lý tương đối ổn định**.

### 8.1.2 Những tình huống nào nên ưu tiên dùng Skill?

Những trường hợp phù hợp dùng Skill:

- Quy trình viết lách, sáng tạo nội dung cố định
- Quy trình nghiên cứu, tổng hợp dữ liệu cố định
- Mẫu xuất kết quả hoặc báo cáo bàn giao chuẩn hóa
- Các bước điều tra, xử lý sự cố cố định
- Quy trình chuyển đổi định dạng dữ liệu có quy tắc rõ ràng

Những trường hợp KHÔNG nhất thiết phải dùng Skill:

- Hỏi đáp ngẫu hứng, tạm thời
- Prompt dùng một lần duy nhất
- Tác vụ chỉ cần một câu lệnh shell đơn giản là xong
- Những tính năng mà OpenClaw đã hỗ trợ chính thức (như `infer`, tạo media, Task Flow)

### 8.1.3 Bảng đối chiếu thực tế khi lựa chọn giải pháp

| Nhu cầu của bạn | Giải pháp khuyên dùng |
|---|---|
| Chạy một lệnh suy luận mô hình | `openclaw infer` |
| Đổi mô hình AI mặc định | `openclaw models` |
| Tạo ảnh / video / giọng nói | Năng lực media tích hợp chính thức |
| Điều phối tự động hóa | `cron / tasks / Task Flow / webhooks` |
| Dạy agent một bộ SOP thao tác chuẩn | Skill |
| Kết nối API bên ngoài / CSDL / dịch vụ ngoài | Plugin / MCP / Webhooks |

Nếu bạn còn phân vân, hãy tự đặt câu hỏi:

**"Thứ mình đang thiếu là một cổng tính năng công cụ, hay là một phương pháp làm việc?"**

- Thiếu cổng tính năng: Ưu tiên xem các tính năng tích hợp sẵn của OpenClaw.
- Thiếu phương pháp làm việc: Hãy cân nhắc tạo hoặc cài đặt Skill.

---

## 8.2 Bắt đầu nhanh: Tra cứu, cài đặt và quản lý chuẩn chính thức

Lối vào CLI chuẩn được khuyến nghị hiện nay là `openclaw skills`, không phải cú pháp cũ `clawhub install`.

### 8.2.1 Các câu lệnh thường dùng nhất

```bash
openclaw skills search "calendar"
openclaw skills search --limit 20 --json
openclaw skills install <slug>
openclaw skills install <slug> --version <version>
openclaw skills install <slug> --force
openclaw skills update <slug>
openclaw skills update --all
openclaw skills list
openclaw skills list --eligible
openclaw skills list --json
openclaw skills list --verbose
openclaw skills info <name>
openclaw skills info <name> --json
openclaw skills check
openclaw skills check --json
```

### 8.2.2 Người mới chỉ cần nhớ 5 lệnh trọng tâm

Nếu mới bắt đầu, bạn chỉ cần thành thạo 5 lệnh cơ bản sau:

```bash
openclaw skills search "writing"
openclaw skills install <slug>
openclaw skills list --eligible
openclaw skills info <name>
openclaw skills check
```

### 8.2.3 Tác dụng chi tiết của từng lệnh

- `search`: Tìm kiếm xem có Skill nào phù hợp trên kho không
- `install`: Cài đặt Skill vào không gian làm việc (workspace) hiện tại
- `list --eligible`: Liệt kê các Skill đang thực sự khả dụng trong workspace
- `info`: Xem thông tin chi tiết, tác giả, mô tả của một Skill cụ thể
- `check`: Kiểm tra xem các Skill cục bộ có gặp lỗi cấu trúc hoặc vấn đề nhận diện không

### 8.2.4 Skills được cài đặt ở đâu?

Tài liệu chính thức nêu rõ: các thao tác `search / install / update` kết nối qua ClawHub, nhưng sẽ cài đặt Skill trực tiếp vào **thư mục `skills/` của workspace đang hoạt động**.

Điều này đồng nghĩa với:

- Skill cài trong dự án hiện tại sẽ đi liền với dự án đó
- Các workspace khác nhau có thể sở hữu tập hợp Skills hoàn toàn khác nhau
- Các lệnh `list / info / check` chỉ quét các Skill cục bộ nhìn thấy được trong cấu hình và workspace hiện tại

### 8.2.5 Dấu hiệu nào cho thấy Skill đã cài đặt thành công?

Cần thỏa mãn tối thiểu 3 điều kiện sau:

- Lệnh `openclaw skills list --eligible` hiển thị Skill vừa cài đặt
- Lệnh `openclaw skills info <name>` đọc được nội dung mô tả của Skill
- Khi bạn giao nhiệm vụ phù hợp, agent thực sự nhận diện và kích hoạt sử dụng Skill

Nếu Skill đã cài nhưng không xuất hiện trong danh sách `eligible`, đừng vội đổi mô hình, hãy chạy ngay lệnh kiểm tra:

```bash
openclaw skills check
```

---

## 8.3 Phân biệt rõ: Skills, Tools, Plugins và MCP

### 8.3.1 Cách phân biệt trực quan nhất

- **Skill**: Bộ phương pháp và quy trình làm việc (SOP)
- **Tool**: Một hành động công cụ cụ thể (đọc file, tìm web, gọi shell)
- **Plugin**: Bổ sung nguyên một nhóm năng lực mới cho OpenClaw
- **MCP**: Kết nối hệ thống bên ngoài thành các năng lực có thể gọi được

### 8.3.2 Ví dụ thực tế

Giả sử bạn muốn OpenClaw hỗ trợ "viết lại ghi chú kỹ thuật thành bài viết chuyên sâu trên blog":

- **Skill**: Hướng dẫn agent cách phân tích cấu trúc, đổi văn phong, đặt tiêu đề và triển khai đề mục
- **Tool**: Đọc tệp tin, tìm kiếm web kiểm tra số liệu, sinh ảnh minh họa
- **Plugin / MCP**: Kết nối cơ sở tri thức Notion, hệ thống CMS hoặc nền tảng xuất bản tự động

Do đó, chúng không thay thế nhau mà bổ trợ nhịp nhàng theo từng tầng trách nhiệm.

---

## 8.4 Tự viết một Skill cục bộ tối giản

Khi bạn đã làm đi làm lại một dạng tác vụ nhiều lần, đó là lúc nên đóng gói thành Skill riêng.

### 8.4.1 Cấu trúc thư mục tối thiểu

```text
skills/
└── my-writing-helper/
    └── SKILL.md
```

### 8.4.2 Mẫu tệp `SKILL.md` tối giản

```markdown
---
name: my-writing-helper
description: Biên tập ghi chú kỹ thuật thành dàn ý bài viết chuyên sâu
---

# my-writing-helper

## Khi nào nên dùng

Sử dụng khi người dùng cần chuyển đổi ghi chú thô thành bài viết hoàn chỉnh, cấu trúc rõ ràng để công bố.

## Các bước thực hiện

1. Trích xuất các luận điểm và ý tưởng cốt lõi từ ghi chú gốc.
2. Xây dựng lại cấu trúc bài viết mạch lạc, phân lớp rõ ràng.
3. Xuất tiêu đề đề xuất, tóm tắt nội dung, các đề mục chính và lời kêu gọi hành động ở phần kết.
```

### 8.4.3 Cách kiểm tra sau khi viết xong

```bash
openclaw skills list --eligible
openclaw skills info my-writing-helper
openclaw skills check
```

### 8.4.4 Khi nào thì ĐÁNG để tự viết Skill?

Bạn nên viết Skill khi:

- Bạn đã lặp lại tác vụ này từ 5 lần trở lên
- Tác vụ có các bước thực hiện tuần tự, ổn định
- Lần nào bạn cũng phải giải thích lại cùng một loạt yêu cầu dài dòng
- Bạn muốn nhiều agent hoặc nhiều dự án khác nhau đều tái sử dụng chung một cách làm

Nếu chỉ là nhu cầu phát sinh một lần duy nhất, bạn không cần viết Skill mà chỉ cần đưa trực tiếp vào prompt để tiết kiệm thời gian.

---

## 8.5 An toàn bảo mật: Cài đặt Skill bên thứ ba sao cho an tâm

Tài liệu chính thức đưa ra khuyến cáo thẳng thắn: **Hãy xem Skills từ bên thứ ba như đoạn mã chưa được kiểm chứng (untrusted code)**.

### 8.5.1 Nguyên tắc an toàn cơ bản

Trước khi cài đặt, hãy tuân thủ 4 bước sau:

1. Chạy lệnh `openclaw skills info <name>` để xem thông tin
2. Đọc mã nguồn hoặc tối thiểu phải đọc kỹ tệp `SKILL.md`
3. Với Skill lạ, hãy chạy thử trước trong môi trường Sandbox hoặc dự án độc lập ít rủi ro
4. Sau khi cài, hãy chạy ngay `openclaw skills check`

### 8.5.2 Vì sao không nên cài đặt bừa bãi?

Theo tài liệu chính thức:

- Skill bên thứ ba cần được coi là mã nguồn tiềm ẩn rủi ro
- Luồng cài đặt dependency ở phía Gateway có quét các đoạn mã nguy hiểm
- Tuy nhiên điều đó không thay thế được việc bạn tự đọc, tự đánh giá và thẩm định trước khi dùng

Thói quen an toàn nhất là:

- Chỉ cài những Skill mà bạn hiểu rõ mục đích và hoạt động của nó
- Giữ số lượng Skill vừa đủ, mục tiêu rõ ràng, không cài tràn lan
- Mỗi lần chỉ thêm một Skill, kiểm tra ổn định rồi mới thêm tiếp

### 8.5.3 Những dấu hiệu cảnh báo cần cảnh giác

- Mô tả rất mơ hồ nhưng lại đòi hỏi quyền hạn truy cập hệ thống cao
- Yêu cầu bạn chạy thêm các script ngoài đáng ngờ
- Đòi quyền truy cập các thư mục nhạy cảm không liên quan đến chức năng
- Bạn hoàn toàn không hiểu vì sao nó lại cần những quyền hạn đó

---

## 8.6 Trình tự triển khai nhanh nhất dành cho người mới

Nếu bạn chỉ có 15 phút để làm quen và vận hành Skills, hãy làm theo đúng 7 bước này:

1. `openclaw skills search "tác vụ bạn cần làm"`
2. Chọn Skill đơn giản nhất, mục đích rõ ràng nhất
3. `openclaw skills install <slug>`
4. `openclaw skills list --eligible`
5. `openclaw skills info <name>`
6. `openclaw skills check`
7. Thử nghiệm ngay trong một tác vụ thực tế

---

## 8.7 Những cạm bẫy dễ mắc phải nhất trong chương này

### Bẫy 1: Coi Skills là lối vào cho mọi năng lực

Rất nhiều tính năng hiện nay đã có giải pháp chính thức, mạnh mẽ và ổn định hơn, không cần phải tìm kiếm Skill bên ngoài.

### Bẫy 2: Sao chép lệnh `clawhub install` từ tài liệu cũ

Các câu lệnh chính thức hiện nay quy chuẩn về `openclaw skills`. Cú pháp cũ không nên dùng làm đường dẫn mặc định nữa.

### Bẫy 3: Cài đặt ồ ạt quá nhiều Skill ngay từ đầu

Cách làm bền vững nhất luôn là:

- Cài từng cái một
- Kiểm tra xem nó có hoạt động ổn định không
- Xác định rõ nó giải quyết triệt để vấn đề gì cho bạn

### Bẫy 4: Lỗi ở quy trình làm việc nhưng lại đổ lỗi cho mô hình AI

Nhiều trường hợp không phải do mô hình AI kém thông minh, mà là do bạn chưa có một bộ SOP rõ ràng, từng bước. Đó mới chính là bài toán mà Skill phát huy sức mạnh vượt trội.

---

## 8.8 Tài liệu tham khảo chính thức

- Skills CLI: https://docs.openclaw.ai/cli/skills
- Hướng dẫn công cụ Skills: https://docs.openclaw.ai/tools/skills
- Plugins CLI: https://docs.openclaw.ai/cli/plugins
- Hooks CLI: https://docs.openclaw.ai/cli/hooks
- Models CLI: https://docs.openclaw.ai/cli/models
