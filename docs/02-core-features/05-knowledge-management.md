> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 5: Cơ sở Tri thức & Bộ Não Thứ Hai (Active Memory / Memory Wiki / Lưu trữ Nghiên cứu)

> **Mục tiêu của chương**: Dựa trên lộ trình chính thức hiện tại của OpenClaw, làm sáng tỏ toàn diện khái niệm "Cơ sở tri thức" (Knowledge Base): phần nào nên giao cho Active Memory, phần nào nên đưa vào Memory Wiki, và phần nào chỉ là tài liệu tạm thời. Bạn không nên tiếp tục xem các Skill đồng bộ bên thứ ba cũ kỹ là giải pháp mặc định.

---

## Cột mốc phiên bản

- **Bản ổn định hiện tại**: `v2026.9.3` (Phát hành ngày 08/09/2026)
- Nội dung chương này được biên soạn và kiểm chứng mặc định trên bản ổn định `v2026.9.3`

---

## Hướng dẫn nhập môn dành cho người mới bắt đầu

### Chương này giải quyết vấn đề gì?

Khi nhắc đến "Cơ sở tri thức", nhiều người thường nghĩ ngay đến:

- Lưu trang web vào Notion
- Đồng bộ ghi chú vào Obsidian
- Tạo hàng đống thư mục và gắn nhãn (tags) phức tạp

Những cách làm trên không phải là vô ích, nhưng chúng không còn là lộ trình chính thức của OpenClaw nữa. Hiện tại, chúng tôi khuyến nghị bạn chia hệ thống tri thức thành 3 tầng rõ rệt:

1. **Active Memory (Bộ nhớ chủ động)**: Tự động gợi nhớ ngữ cảnh, sở thích và dữ kiện liên quan trước khi trả lời.
2. **Memory Wiki**: Tổng hợp và biên dịch tri thức dài hạn thành một tầng tri thức có cấu trúc, có thể tra cứu và truy xuất bằng chứng xác thực.
3. **Xử lý tài liệu tạm thời**: Thu thập dữ liệu web, biên bản cuộc họp, trích đoạn nghiên cứu — xử lý tinh gọn trước khi quyết định có đưa vào tầng tri thức dài hạn hay không.

### Nếu bạn chỉ muốn chạy thử nhanh, hãy xem các mục sau

- **Muốn OpenClaw "ghi nhớ bạn" tốt hơn**: Xem mục `5.2`
- **Muốn bắt đầu xây dựng Bộ não thứ hai**: Xem mục `5.3`
- **Muốn tích lũy tài liệu nghiên cứu, bài viết, dự án**: Xem mục `5.4`
- **Bạn đã và đang dùng sẵn Obsidian**: Xem mục `5.5`

### 3 sai lầm người mới rất dễ mắc phải

- Vừa bắt đầu đã vội vã cài đặt các plugin đồng bộ ngoài, thay vì cấu hình thông suốt luồng ghi nhớ chính thức.
- Ném thẳng toàn bộ "tài liệu tạm thời" vào cơ sở tri thức dài hạn, khiến dữ liệu ngày càng hỗn loạn và loãng ngữ cảnh.
- Nghĩ rằng mọi thông tin đều bắt buộc phải cấu trúc hóa hoàn hảo, dẫn đến chần chừ và không bao giờ bắt tay vào làm.

### Kết luận ngắn gọn của chương

Trước tiên, hãy để OpenClaw **nhớ được**, sau đó giúp nó **tra cứu được**, và cuối cùng mới cân nhắc xem có cần **đồng bộ sang các công cụ ghi chú khác** hay không.

---

## 5.1 Sau phiên bản 2026.4, đâu là luồng cơ sở tri thức chuẩn xác?

Trong các tài liệu cũ, "Cơ sở tri thức" chủ yếu dựa vào việc lưu trữ trang web, đồng bộ Notion, đồng bộ Obsidian. Tuy nhiên, trong luồng phát triển chính thức hiện nay, bộ công cụ sau mới là cốt lõi:

| Tầng | Nhiệm vụ chính | Kịch bản phù hợp |
|------|----------------|------------------|
| `Active Memory` | Gợi nhớ sở thích, sự thật, ngữ cảnh trước khi trả lời | Hội thoại hàng ngày, cộng tác dài hạn, ghi nhớ thói quen |
| `Memory Wiki` | Biên dịch tri thức dài hạn thành tầng tri thức có cấu trúc | Tri thức dự án, tài liệu nghiên cứu, tích lũy chủ đề dài hạn |
| `openclaw infer web fetch/search` | Thu thập dữ liệu từ internet | Trang web, tài liệu trực tuyến, tin tức, tài liệu khảo sát |
| `wiki ingest / compile / search / get` | Nạp dữ liệu, biên dịch tổng hợp, tra cứu, trích xuất | Bộ não thứ hai, tri thức nhóm, hồ sơ lưu trữ dự án |

Bạn có thể hiểu một cách trực quan như sau:

- **Active Memory** giải quyết bài toán: *"Khi trả lời, AI có nhớ ra điều này không?"*
- **Memory Wiki** giải quyết bài toán: *"Tài liệu dài hạn có được sắp xếp khoa học, tìm kiếm chuẩn xác và truy nguyên nguồn gốc được không?"*
- **Web scraping / Transcribe / Summary** giải quyết bài toán: *"Làm thế nào để đưa thông tin bên ngoài vào hệ thống một cách tinh gọn?"*

---

## 5.2 Active Memory: Giúp OpenClaw luôn nhớ rõ bạn

Tài liệu chính thức định nghĩa Active Memory rất rõ ràng: Đây là một **tác tử bộ nhớ phụ dạng chặn (blocking memory sub-agent) chạy trước khi câu trả lời chính được tạo ra**. Trong các phiên hội thoại phù hợp, nó sẽ sử dụng `memory_search` và `memory_get` để tìm kiếm những ký ức liên quan, sau đó bàn giao phần tóm tắt cô đọng nhất cho câu trả lời chính của AI.

### 5.2.1 Khi nào nên bật Active Memory?

Những trường hợp rất nên kích hoạt ngay:

- Bạn thường xuyên làm việc lâu dài với cùng một AI Agent.
- Bạn muốn AI ghi nhớ thói quen, sở thích cá nhân, bối cảnh công việc và phong cách làm việc của bạn.
- Bạn muốn AI bớt hỏi lại những thông tin cũ bạn đã từng chia sẻ.

Những trường hợp chưa cần vội bật:

- Bạn chỉ thỉnh thoảng hỏi vài câu hỏi ngắn mang tính tra cứu tạm thời.
- Bạn đang trong giai đoạn cấu hình, kiểm tra mô hình hoặc sửa lỗi xác thực.
- Bạn cực kỳ nhạy cảm với độ trễ (latency) và muốn kiểm tra đường truyền cơ bản chạy ổn định trước.

### 5.2.2 Cấu hình khởi động chuẩn theo tài liệu chính thức

Theo hướng dẫn chính thức, cách bắt đầu an toàn nhất là: Kích hoạt plugin, chỉ liên kết với duy nhất agent hội thoại chính, và chỉ áp dụng trong cuộc trò chuyện trực tiếp (direct chat).

Hãy thêm đoạn cấu hình sau vào tệp `openclaw.json`:

```json5
{
  plugins: {
    entries: {
      "active-memory": {
        enabled: true,
        config: {
          agents: ["main"],
          allowedChatTypes: ["direct"],
          modelFallback: "google/gemini-3-flash",
          queryMode: "recent",
          promptStyle: "balanced",
          timeoutMs: 15000,
          maxSummaryChars: 220,
          persistTranscripts: false,
          logging: true
        }
      }
    }
  }
}
```

Sau khi sửa xong, hãy khởi động lại tiến trình Gateway hoặc dịch vụ nền bạn đang sử dụng.

### 5.2.3 Dấu hiệu nhận biết Active Memory đã chạy thành công

Bạn có thể quan sát qua các tiêu chí đơn giản sau:

- Trong cùng một luồng hội thoại, OpenClaw bắt đầu ghi nhớ ổn định các thông tin nền tảng và sở thích của bạn.
- Khi bật chế độ `/verbose` hoặc `/trace`, bạn thấy các bản ghi trạng thái của Active Memory xuất hiện.
- Không có lỗi gọi mô hình, không bị lỗi quá thời gian (timeout) hoặc chạy vòng lặp vô tận.

### 5.2.4 Giải thích ý nghĩa các thông số cấu hình

- `agents: ["main"]`: Chỉ cho phép agent `main` sử dụng tính năng bộ nhớ chủ động.
- `allowedChatTypes: ["direct"]`: Tạm thời chỉ kích hoạt trong chat riêng / hội thoại trực tiếp 1-1, tránh bật ồ ạt trên các kênh chat nhóm.
- `queryMode: "recent"`: Ưu tiên quét ngữ cảnh gần nhất, đạt độ cân bằng tối ưu giữa tốc độ phản hồi và hiệu quả truy xuất.
- `promptStyle: "balanced"`: Chế độ cân bằng mặc định, phù hợp với đại đa số người dùng.
- `timeoutMs: 15000`: Nếu quá 15 giây không truy xuất xong sẽ tự động bỏ qua để tránh làm gián đoạn câu trả lời quá lâu.

Nếu đây là lần đầu tiên sử dụng, bạn không nên tinh chỉnh quá sâu. Hãy để cấu hình mặc định chạy ổn định trước rồi mới tối ưu sau.

---

## 5.3 Memory Wiki: Biên dịch tri thức dài hạn thành tầng tri thức có cấu trúc và truy nguyên bằng chứng

Tài liệu chính thức định vị `memory-wiki` không phải là một plugin ghi chú thông thường, mà là một **bundled plugin chuyên biên dịch bộ nhớ bền vững (durable memory) thành một kho tri thức (knowledge vault)**.

Mối quan hệ giữa nó và Active Memory:

- **Active Memory** chịu trách nhiệm: *"Nhớ ra trước khi trả lời"*.
- **Memory Wiki** chịu trách nhiệm: *"Tổng hợp tri thức dài hạn thành các trang hoàn chỉnh, hệ thống các luận điểm (claims), bằng chứng (evidence) và bảng điều khiển trực quan (dashboards)"*.

### 5.3.1 Tại sao Memory Wiki vượt trội hơn ghi chú thông thường?

Điểm mạnh của Memory Wiki không dừng lại ở việc "lưu trữ được", mà nằm ở:

- Sở hữu wiki vault chuyên biệt độc lập.
- Hỗ trợ cấu trúc luận điểm / bằng chứng (`claim / evidence`) chặt chẽ.
- Có khả năng biên dịch thành các trang tài liệu ổn định và bản tóm lược (digest).
- Hỗ trợ truy xuất chuẩn xác bằng các lệnh `wiki_search` / `wiki_get`.
- Có thể chia sẻ tìm kiếm chung (shared search) với tầng Active Memory.

Điều này tạo nên một "Tầng tri thức" thực thụ thay vì một "Kho tài liệu lộn xộn".

### 5.3.2 Cấu hình khởi động mẫu

Tài liệu hướng dẫn đặt cấu hình bên trong `plugins.entries.memory-wiki.config`. Dưới đây là mẫu cấu hình khởi đầu rất thích hợp cho người mới:

```json5
{
  plugins: {
    entries: {
      "memory-wiki": {
        enabled: true,
        config: {
          vaultMode: "isolated",
          vault: {
            path: "~/.openclaw/wiki/main",
            renderMode: "obsidian"
          },
          obsidian: {
            enabled: true,
            useOfficialCli: true,
            vaultName: "OpenClaw Wiki",
            openAfterWrites: false
          },
          bridge: {
            enabled: false,
            readMemoryArtifacts: true,
            indexDreamReports: true,
            indexDailyNotes: true,
            indexMemoryRoot: true,
            followMemoryEvents: true
          },
          ingest: {
            autoCompile: true,
            maxConcurrentJobs: 1,
            allowUrlIngest: true
          },
          search: {
            backend: "shared",
            corpus: "wiki"
          },
          context: {
            includeCompiledDigestPrompt: false
          },
          render: {
            preserveHumanBlocks: true,
            createBacklinks: true,
            createDashboards: true
          }
        }
      }
    }
  }
}
```

### 5.3.3 4 thông số quan trọng người mới cần nắm vững

- `vaultMode: "isolated"`: Lựa chọn tốt nhất cho giai đoạn đầu, quản lý wiki như một tầng tri thức độc lập.
- `renderMode: "obsidian"`: Rất thuận tiện nếu bạn đã quen thuộc với giao diện và định dạng liên kết của Obsidian.
- `search.backend: "shared"`: Cho phép tích hợp tìm kiếm dùng chung với tầng bộ nhớ khi cần.
- `createDashboards: true`: Tự động tạo các trang bảng điều khiển tổng quan giúp bạn dễ dàng duyệt qua toàn bộ tri thức.

### 5.3.4 Khi nào nên kích hoạt chế độ `bridge`?

Chỉ khi bạn nắm rõ và đáp ứng đủ hai điều kiện sau:

- Hệ thống Active Memory backend của bạn đã tạo ra các hiện vật (bridge artifacts) công khai.
- Bạn muốn tự động biên dịch các dữ liệu dài hạn tích lũy từ bộ nhớ hội thoại vào trong Wiki.

Khi đó mới nên cân nhắc bật `bridge`. Nếu mới bắt đầu, hãy luôn chọn `isolated`.

---

## 5.4 Quy trình ứng dụng cơ sở tri thức tối ưu cho người mới

Mục này không bàn về các lý thuyết phức tạp, mà tập trung vào vòng lặp thực chiến ngắn gọn nhất.

### 5.4.1 Quy trình A: Đưa một ghi chú cục bộ vào Wiki

Khởi tạo kho Wiki trước:

```bash
openclaw wiki init
openclaw wiki status
```

Chuẩn bị một tệp ghi chú Markdown đơn giản, ví dụ `./notes/customer-onboarding.md`:

```md
# Hướng dẫn Onboarding Khách hàng

## Thực trạng
- Người dùng mới khi tiếp cận sản phẩm thường dễ bị vướng ở bước cấu hình phân quyền.
- Tài liệu hướng dẫn hiện tại quá phân tán, thiếu một đầu mối tập trung.

## Đánh giá & Định hướng
- Cần xây dựng một checklist onboarding thống nhất và ngắn gọn.
- Màn hình đầu tiên nên hiển thị ngay 3 thao tác cốt lõi thường dùng nhất.
```

Tiến hành nạp vào Wiki:

```bash
openclaw wiki ingest ./notes/customer-onboarding.md
openclaw wiki compile
openclaw wiki lint
```

Tìm kiếm và đọc lại nội dung:

```bash
openclaw wiki search "onboarding"
openclaw wiki get <lookup>
```

### 5.4.2 Dấu hiệu nhận biết Wiki đã hoạt động trơn tru

Tối thiểu cần đạt được 4 điều kiện sau:

- Lệnh `openclaw wiki status` báo trạng thái vault bình thường.
- Lệnh `openclaw wiki ingest` nạp tệp thành công không báo lỗi.
- Lệnh `openclaw wiki compile` biên dịch xong xuôi, không phát sinh lỗi cấu trúc.
- Lệnh `openclaw wiki search` tìm thấy chính xác chủ đề bạn vừa nạp.

### 5.4.3 Quy trình B: Biến thông tin trang web thành tri thức dài hạn

Thứ tự xử lý chuẩn mực không phải là "đồng bộ thẳng vào ứng dụng ghi chú", mà là:

1. Thu thập dữ liệu từ trang web.
2. Để OpenClaw tóm tắt và chắt lọc thành ghi chú mang phong cách của bạn.
3. Đánh giá xem có xứng đáng đưa vào Wiki dài hạn hay không.

Thu thập dữ liệu web bằng CLI:

```bash
openclaw infer web search --query "OpenClaw Active Memory use cases" --json
openclaw infer web fetch --url https://docs.openclaw.ai/concepts/active-memory --json
```

Sau đó, bạn yêu cầu OpenClaw tổng hợp thành một bản tóm tắt Markdown, lưu vào thư mục `./notes/`, rồi tiếp tục thực hiện:

```bash
openclaw wiki ingest ./notes/active-memory-summary.md
openclaw wiki compile
```

### 5.4.4 Quy trình C: Tích lũy tri thức dự án

Những nội dung rất nên đưa vào Wiki dự án:

- Các quyết định về kiến trúc kỹ thuật (Architectural Decision Records).
- Hướng dẫn xử lý các sự cố thường gặp.
- Câu hỏi chung của khách hàng và người dùng.
- Bảng giải thích thuật ngữ chuyên ngành.
- Biên bản đúc kết sau các đợt phát hành sản phẩm (Post-mortem / Retrospective).

Những nội dung **không nên** vội vàng đưa vào:

- Tin nhắn trò chuyện vụn vặt diễn ra một lần.
- Các tệp nhật ký (logs) siêu dài chưa qua xử lý lọc sạch.
- Thông tin trôi nổi bên ngoài chưa được kiểm chứng tính xác thực.

Thói quen tốt nhất là: **Chắt lọc và sắp xếp trước, nạp vào kho tri thức sau**.

---

## 5.5 Nếu bạn đang dùng Obsidian: Hiểu đúng mối quan hệ giữa Obsidian và Wiki

Chúng ta không coi Obsidian là phương thức vận hành bắt buộc, mà đặt nó về đúng vị trí sở trường nhất: **Tầng hiển thị và giao diện chỉnh sửa thủ công**.

### Mối quan hệ tương hỗ khuyến nghị

- OpenClaw đảm nhận: Ghi nhớ, biên dịch, suy luận và tìm kiếm.
- Wiki đảm nhận: Cấu trúc hóa tri thức, bằng chứng và liên kết.
- Obsidian đảm nhận: Trải nghiệm đọc trực quan của con người và thao tác biên tập thủ công.

Nếu bạn đang dùng Obsidian, hãy lưu ý các câu lệnh hữu ích sau:

```bash
openclaw wiki obsidian status
openclaw wiki obsidian search "onboarding"
openclaw wiki obsidian open syntheses/alpha-summary.md
openclaw wiki obsidian daily
```

### Các cách làm cũ không còn được khuyến khích

Những hướng đi cũ sau đây không còn được xem là phương án mặc định:

- `clawhub install notion-sync`
- `clawhub install obsidian-sync`
- Cài đặt các Skill đồng bộ trước, rồi dùng công cụ ghi chú bên thứ ba làm hệ thống ghi nhớ chính của AI.

Những cách trên không phải là hoàn toàn vô dụng, nhưng chúng chỉ đóng vai trò là **tích hợp bổ trợ khi bạn đã có sẵn quy trình làm việc từ trước**, hoàn toàn không phải là trục kiến trúc tri thức chính thức hiện tại của OpenClaw.

---

## 5.6 Các lưu ý và kinh nghiệm tránh lỗi quan trọng

### Lưu ý 1: Coi mọi mẩu thông tin đều là tri thức dài hạn

Không phải thứ gì cũng xứng đáng đưa vào Wiki. Tiêu chí đánh giá thực tế bao gồm:

- Thông tin này trong tương lai có được tái sử dụng nhiều lần không?
- Nó đã được chắt lọc đủ rõ ràng, súc tích chưa?
- Nó có giá trị để tra cứu, trích dẫn bằng chứng và xem lại sau này không?

### Lưu ý 2: Vừa bắt đầu đã bật quá nhiều chế độ phức tạp

Trình tự an toàn cho người mới:

1. Kích hoạt Active Memory trước.
2. Khởi tạo Memory Wiki.
3. Dùng chế độ `isolated` trước.
4. Chạy ổn định rồi mới cân nhắc chuyển sang chế độ `bridge`.

### Lưu ý 3: Đặt nặng việc đồng bộ mà quên mất bản chất tri thức

Notion, Obsidian hay Apple Notes đều chỉ là công cụ lưu trữ bề mặt. Điều bạn thực sự cần ưu tiên giải quyết là:

- OpenClaw có nhớ ra được khi cần thiết hay không?
- Tài liệu có dễ dàng tìm lại được không?
- Các kết luận đưa ra có bằng chứng rõ ràng làm chỗ dựa hay không?

---

## 5.7 Lộ trình triển khai nhanh trong 30 phút

Nếu bạn muốn thiết lập hệ sinh thái cơ sở tri thức hoạt động ngay hôm nay, hãy làm theo đúng 6 bước:

1. Kích hoạt Active Memory trong cấu hình.
2. Khởi tạo Memory Wiki bằng `openclaw wiki init`.
3. Tự viết một tệp ghi chú Markdown đơn giản trên máy.
4. Thực hiện `wiki ingest` + `wiki compile`.
5. Chạy `wiki search` xem AI có tìm thấy nội dung vừa nạp hay không.
6. Sau đó mới quyết định có cần kết nối với Obsidian hay không.

---

## 5.8 Tài liệu tham khảo chính thức

- Tài liệu Active Memory: https://docs.openclaw.ai/concepts/active-memory
- Plugin Memory Wiki: https://docs.openclaw.ai/plugins/memory-wiki
- Wiki CLI: https://docs.openclaw.ai/cli/wiki
- Inference CLI: https://docs.openclaw.ai/cli/infer

---

**Chương tiếp theo**: [Chương 6: Quản lý Lịch trình & Tác vụ](06-schedule-management.md) - Tự động hóa lịch biểu và nhắc việc thông minh

**Trở về mục lục**: [README](../../README.md)

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc chương này trên nền tảng web?**

[🔗 Đọc trực tuyến: Chương 5 - Cơ sở Tri thức & Bộ Não Thứ Hai](https://awesome.tryopenclaw.asia/docs/02-core-features/05-knowledge-management/)

Trải nghiệm đọc tốt hơn trên website giáo trình:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính
- 🌙 Chế độ nền tối (Dark Mode) dịu mắt
- 🔍 Tích hợp tìm kiếm nhanh nội dung
- 📋 Thanh điều hướng mục lục trực quan, dễ dàng chuyển đổi giữa các chương

[🏠 Truy cập website giáo trình đầy đủ](https://awesome.tryopenclaw.asia)
