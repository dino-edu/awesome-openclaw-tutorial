# Phụ lục J: Phân Tích Chuyên Sâu Về OpenClaw (Tencent Technology Engineering)

> Bài viết này xuất bản trên tài khoản kỹ thuật chính thức của Tencent Technology Engineering, tác giả Bing Yidong (Băng Dĩ Đông). Bài viết phân tích sâu sắc về kiến trúc cốt lõi của OpenClaw, mô hình triển khai đa Agent, cơ chế ghi nhớ ngữ cảnh và các chủ đề kỹ thuật nâng cao.

## Lời mở đầu

### (I) OpenClaw thực sự có điểm gì khác biệt?

Trong vòng nửa năm qua, các sản phẩm trong lĩnh vực AI Agent xuất hiện liên tục như nấm sau mưa. Trước khi OpenClaw bùng nổ, một sản phẩm tương đối tương đồng được chú ý là Happy của Claude (một phần mềm Claude Code chạy qua SSH).

Những người bạn thích dùng Happy thường hỏi tôi: "OpenClaw có gì hay đến thế? Khác biệt cơ bản gì so với Happy?"

Khi vừa nhìn thấy các tính năng của OpenClaw, tôi đã lập tức bị cuốn hút. Đối diện với câu hỏi này, tôi muốn tổng kết những ưu thế vượt trội của OpenClaw ở tầng tư duy trừu tượng.

#### 1. Khung kỹ thuật của OpenClaw không hề phức tạp, ưu thế nằm ở việc phổ biến "nhận thức chung" (Consensus)

Là một lập trình viên, để mọi người hiểu trực quan về độ phức tạp kiến trúc của OpenClaw, tôi xin mạn phép đưa ra một phép so sánh: Độ khó kỹ thuật của OpenClaw tương đương với một "ứng dụng giao tiếp frontend - backend tích hợp thuật toán gợi ý sơ cấp" trước thời kỳ AI Coding bùng nổ.

Bất kỳ ai làm lập trình vài năm đều hiểu điều này không quá đánh đố, vì vậy bản thân bộ khung kỹ thuật đơn thuần không phải là điểm sáng lớn nhất.

Ưu thế thực sự của OpenClaw nằm ở **khả năng tạo dựng và phổ biến nhận thức chung (Consensus)**. Trước khi OpenClaw ra đời, hầu như mỗi kỹ sư chúng tôi đều tự tay dựng một kiến trúc Agent cho riêng mình (như hệ thống 5 tầng L1~L5 mà tôi từng phát triển).

Bất kỳ ai tự thiết kế kiến trúc Agent đều phải đau đầu giải quyết các bài toán: quản lý Skills, định danh cho Agent, tự tiến hóa kiến trúc, tìm kiếm bộ nhớ (memory-search) và quản trị phiên làm việc (Session).

Điều này dẫn đến một trở ngại lớn: Mỗi lần tôi muốn trao đổi với bạn bè về Agent, chúng tôi phải mất nửa ngày chỉ để giải thích kiến trúc của nhau, rồi mới có thể bàn đến ca thực tế, cách quản lý Session và cơ chế lưu trữ bộ nhớ.

Nhưng OpenClaw đã chuẩn hóa và phổ biến kiến trúc này. Giờ đây khi xây dựng Agent cá nhân trên OpenClaw, chúng ta không cần phải giải thích lại kiến trúc nền tảng nữa. Mọi cuộc thảo luận chuyển thẳng sang các chủ đề giá trị cao: làm sao để duy trì tiến trình (keep-alive), thay thế thư viện thuật toán RAG thế nào, triển khai hệ thống đa Agent ra sao và nhân rộng các ca thành công (good cases) như thế nào.

Trải nghiệm trao đổi mượt mà đến khó tin!

#### 2. Hỗ trợ tự nhiên cho kiến trúc đa Agent (Multi-Agent)

Những ai am hiểu nguyên lý tầng sâu của mô hình ngôn ngữ lớn (LLM) đều biết: LLM thành công nhờ Transformer, và nút thắt cổ chai hiện tại cũng nằm ở chính Transformer. Giới hạn độ dài ngữ cảnh (Context Window) kìm hãm nghiêm trọng năng lực trí tuệ của một Agent đơn lẻ.

Cách làm truyền thống là nhồi nhét định nghĩa nhân cách vào System Prompt, cộng thêm danh sách hàng chục Skills mở rộng, đang từng bước gặm nhấm cửa sổ ngữ cảnh quý giá của LLM.

Để khai thác LLM hiệu quả nhất, nguyên tắc "chuyên môn hóa tác tử - việc nào việc nấy" đã trở thành nhận thức chung tất yếu trong cộng đồng kỹ thuật.

#### 3. Làm những việc trực giao (Orthogonal) với năng lực của AI

Trong kỷ nguyên AI, việc lựa chọn **không làm điều gì** cũng quan trọng ngang với việc lựa chọn **làm điều gì**.

Một năm trước, khi trò chuyện với một người bạn từ đội ngũ Manus, anh ấy đã chia sẻ một quan điểm đắt giá: **Hãy làm những việc trực giao với năng lực cốt lõi của AI.**

Dành thời gian và công sức để tôi luyện và phát triển Agent của riêng bạn chính là một việc trực giao với năng lực AI. Nó tương tự như việc nuôi dạy một đứa trẻ: đứa trẻ có thể sinh ra rất thông minh bẩm sinh, nhưng thế giới quan và năng lực giải quyết công việc thực tế lại cần sự chỉ dẫn, uốn nắn từ bạn. Đây là bài toán mang đậm dấu ấn cá nhân hóa.

Khi các mô hình nền tảng AI ngày càng thông minh hơn, bạn chỉ việc nâng cấp mô hình LLM bên dưới của Agent. Những khối dữ liệu tích lũy lâu dài qua các lượt tương tác hàng ngày sẽ trở thành tài sản dữ liệu tư nhân vô giá để bạn điều khiển AI tối ưu hơn trong tương lai.

---

### (II) Muốn triển khai OpenClaw, có bắt buộc phải mua máy tính mới không?

Việc mua thêm máy tính chuyên dụng là không bắt buộc. Hiện tại có 2 phương án phổ biến để vận hành OpenClaw: **Máy ảo đám mây (Cloud Instance)** và **Tự triển khai cục bộ (Self-hosted)**.

#### 1. Máy ảo đám mây

Các nền tảng điện toán đám mây như Tencent Cloud, AWS, GCP đều hỗ trợ triển khai OpenClaw chỉ với vài thao tác nhanh gọn.

Nếu bạn quen thuộc với môi trường dòng lệnh từ xa trên đám mây, đây là cách tiện lợi nhất: không tốn phần cứng máy thật, dữ liệu có thể tải về sao lưu bất kỳ lúc nào.

#### 2. Tự triển khai cục bộ

Đây có lẽ là phần nhiều độc giả quan tâm nhất khi muốn làm chủ hoàn toàn dữ liệu.

**Nên chọn macOS hay Windows?**

OpenClaw và các công cụ liên quan được tối ưu hóa tự nhiên và hoạt động mượt mà nhất trên môi trường macOS / Linux. Nếu có điều kiện, bạn nên ưu tiên chọn macOS. Windows tất nhiên vẫn chạy được nhưng sẽ cần tinh chỉnh môi trường nhiều hơn.

**Cấu hình phần cứng Mac khuyến nghị:**

Do OpenClaw sau khi cài đặt sẽ chạy ngầm liên tục 24/7 trên máy, dòng máy Mac Mini là lựa chọn có hiệu năng trên giá thành (P/P) tốt nhất.

Có 3 thông số phần cứng cốt lõi bạn cần cân nhắc: **Chip xử lý, Bộ nhớ RAM và Dung lượng ổ đĩa**.

- **Chip xử lý**: Đã chọn giải pháp Mac Mini thì bắt buộc phải từ Apple Silicon dòng M trở lên. Lựa chọn từ M1 đến M4 tùy thuộc vào nhu cầu: Nếu bạn không cần chạy các mô hình cục bộ sinh ảnh, sinh video (như ComfyUI, Stable Diffusion) mà chỉ gọi API bên ngoài, thì một chiếc Mac Mini M1 là cực kỳ kinh tế và dư sức vận hành. Bản thân OpenClaw chủ yếu chỉ điều phối luồng gọi API nên tiêu tốn rất ít tài nguyên tính toán.
- **Bộ nhớ RAM**: Nếu bạn có ý định chạy các mô hình AI cục bộ trên máy, hãy chọn RAM tối thiểu 24GB. Nếu chỉ chạy bot OpenClaw thuần túy, 8GB đến 16GB là hoàn toàn thoải mái.
- **Dung lượng ổ cứng**: Các mô hình ComfyUI tải về cục bộ thường chiếm từ 20GB đến 30GB mỗi model. Do đó nếu định chạy mô hình nội bộ, ổ đĩa cần tối thiểu 256GB đến 512GB trở lên.

Lời khuyên chân thành: Nếu đã xác định đầu tư một thiết bị phục vụ gia đình và tự động hóa công việc lâu dài, hãy cân nhắc cấu hình RAM và ổ cứng dư dả một chút để vừa làm máy chủ OpenClaw, vừa chạy sinh ảnh cho gia đình mà không tốn phí mua API.

---

### (III) OpenClaw nên kết nối với ứng dụng trò chuyện (IM) nào?

Đây là điểm rất dễ "vấp ổ gà". Khi lựa chọn ứng dụng trò chuyện (IM) để kết nối bot, tôi đúc kết ra 3 nguyên tắc sống còn: **Tính an toàn, Tính khả dụng và Tính dễ dùng**.

Tôi sẽ không chỉ định ứng dụng cụ thể mà đưa ra các tiêu chí để bạn tự đánh giá:

#### 1. Tính an toàn

Xuất phát từ nguyên tắc cô lập dữ liệu riêng tư: Bạn phải tuyệt đối tránh việc thao tác nhầm gửi các dữ liệu nhạy cảm cá nhân vào khung chat của OpenClaw (Lưu ý: **Tuyệt đối không** coi OpenClaw như một "Trợ lý truyền tệp" lưu trữ mật khẩu, giấy tờ). Đồng thời, hãy luôn nhận thức rằng một khi đưa bot lên môi trường mạng công cộng, bạn phải thiết lập các rào chắn kiểm soát quyền truy cập chặt chẽ nhất.

#### 2. Tính khả dụng

Đây là cái bẫy phổ biến nhất. Nếu bạn chỉ vận hành một Agent đơn lẻ, hạn ngạch API của ứng dụng trò chuyện thường là đủ dùng.

Nhưng khi bạn bắt đầu mở rộng sang hệ thống đa Agent (Multi-Agent), hạn ngạch gọi API của ứng dụng IM sẽ bị tiêu hao rất nhanh. Khi tôi triển khai 10 Agent cùng lúc, hạn ngạch IM bị cạn sạch chỉ sau một thời gian ngắn. Lý do là trong cơ chế Cổng Gateway của OpenClaw có một tiến trình định kỳ kiểm tra sức khỏe hệ thống:

```javascript
const healthInterval = setInterval(() => {
  void params.refreshGatewayHealthSnapshot({ probe: true });
  // ...
}, 60000);
```

Tiến trình này sẽ ping liên tục tới IM mỗi phút một lần. Nếu số lượng Agent lớn, lượng request thăm dò sẽ nhanh chóng bào mòn hạn mức miễn phí của nền tảng IM. Vì vậy khi chạy đa Agent, bạn cần chọn nền tảng IM có hạn mức rộng rãi hoặc không giới hạn tần suất gọi webhook nội bộ.

#### 3. Tính dễ dùng

Tùy theo thói quen của người dùng và đồng nghiệp, các ứng dụng như Lark / Feishu, Telegram, Discord hay WeCom đều có những thế mạnh riêng về giao diện thông báo và khả năng hiển thị thẻ tương tác (Interactive Cards).

---

### (IV) Cấu hình OpenClaw có phức tạp không?

Nếu mục tiêu của bạn chỉ là: Chạy được hệ thống cơ bản + Kết nối một bot trò chuyện đơn giản, thì **30 phút là hoàn toàn đủ**.

Tuy nhiên, nếu bạn muốn thiết lập hệ thống đa Agent chuyên nghiệp, phân chia luồng tác vụ, hiệu chỉnh các Skills chuyên sâu, tinh chỉnh nhân cách của từng Agent, lập lịch cron tự động hóa và tích hợp mô hình cục bộ, thì sẽ cần đầu tư từ 2 đến 3 ngày nghiên cứu và thử nghiệm để đạt độ hoàn thiện cao.

---

### (V) Dành công sức cho OpenClaw mang lại lợi ích gì cho bạn?

#### 1. Thu hoạch về mặt nâng tầm kỹ thuật

Sau khi tự tay hoàn thiện toàn bộ quy trình này, sự hiểu biết của bạn về Skills, kiến trúc đa Agent, cơ chế lưu trữ bộ nhớ và cách luân chuyển ngữ cảnh trong Transformer sẽ nhảy vọt lên một tầm cao mới.

Bạn sẽ tự tin trả lời rõ ràng những câu hỏi hóc búa của kỹ thuật AI hiện đại:
- *"Nếu bạn tự thiết kế một AI Agent, chuỗi xử lý bộ nhớ ngắn hạn và dài hạn của bạn sẽ vận hành như thế nào?"*
- *"Nếu bạn phải kiến tạo một hệ thống đa Agent, bạn sẽ thiết kế các giao thức giao tiếp nội bộ nào?"*
- *"Trong các dự án quy mô lớn, làm sao để quản trị hàng chục Skills mà không làm bùng nổ ngữ cảnh hoặc gây xung đột công cụ?"*
- *"Bản chất của kỹ thuật tìm kiếm bộ nhớ (memory-search) là gì và một phiên đối thoại LLM thực sự luân chuyển ra sao bên dưới framework?"*

Quan trọng hơn cả, bạn sẽ có con mắt phân tích sắc bén trước các dự án Agent đang nổi trên thị trường, nhìn rõ đâu là sản phẩm có chiều sâu kỹ thuật và đâu chỉ là lớp vỏ ngoài hào nhoáng.

#### 2. Sở hữu một "Jarvis cá nhân" đích thực

Bạn sẽ sở hữu một trợ lý cá nhân hiểu rõ ngữ cảnh của bạn, sẵn sàng tự động hóa các tác vụ lặp đi lặp lại hàng ngày theo ý muốn.

---

## I. Triển Khai Kiến Trúc Đa Agent Trong OpenClaw

### (I) Khởi động nhanh (Quick-start)

#### 1. Các bước triển khai cốt lõi

**Chuẩn bị trước khi triển khai**:
1. Lựa chọn nền tảng IM phù hợp với thói quen làm việc
2. Chọn nhà cung cấp mô hình LLM (mô hình càng thông minh, Agent hành xử càng ổn định)

**Lệnh cài đặt trên máy cục bộ**:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Sau khi chạy lệnh trên, hệ thống sẽ tự động kích hoạt tiến trình `openclaw onboard` để hướng dẫn cấu hình Agent chính (main agent). Bạn chỉ cần làm theo các bước hướng dẫn trên terminal.

> 💡 **Mẹo gỡ lỗi cùng Claude Code / AI Coding**: Bạn có thể clone mã nguồn OpenClaw về máy cục bộ, để trợ lý AI đọc hiểu kiến trúc nguồn, sau đó hỗ trợ bạn debug cấu hình cục bộ một cách cực kỳ chuẩn xác.

---

### (II) Kiến trúc Agent cốt lõi của OpenClaw

#### 1. Các tệp cấu hình linh hồn của Agent

Mỗi Agent trong OpenClaw đều có một không gian làm việc (`workspace`) riêng biệt chứa các tệp định nghĩa cốt lõi:

```text
AGENTS.md     : Tuyên ngôn trách nhiệm của Agent, quyết định thẩm quyền gọi công cụ
SOUL.md       : Câu lệnh prompt nhân cách, được tiêm trực tiếp vào system prompt
TOOLS.md      : Danh sách cho phép/chặn công cụ, thiết lập ranh giới an toàn
IDENTITY.md   : Định danh hiển thị (tên gọi, ảnh đại diện avatar trên kênh chat)
USER.md       : Hồ sơ sở thích và thói quen của người dùng (tiền nghiệm ngữ cảnh)
HEARTBEAT.md  : Cấu hình tác vụ định kỳ tự kích hoạt (nhịp tim hệ thống)
BOOTSTRAP.md  : Hướng dẫn khởi tạo cho lần chạy đầu tiên (chỉ đọc một lần)
MEMORY.md     : Tài liệu lưu trữ bộ nhớ dài hạn của người dùng (nguồn RAG)
```

Trích đoạn mã nguồn nạp tệp không gian làm việc của OpenClaw:

```typescript
// src/agents/workspace.ts
export async function loadWorkspaceBootstrapFiles(dir: string): Promise<WorkspaceBootstrapFile[]> {
  const entries = [
    { name: "AGENTS.md", filePath: path.join(resolvedDir, "AGENTS.md") },
    { name: "SOUL.md", ... },
    { name: "TOOLS.md", ... },
    { name: "IDENTITY.md", ... },
    { name: "USER.md", ... },
    { name: "HEARTBEAT.md", ... },
    { name: "BOOTSTRAP.md", ... },
  ];
  // Tự động kiểm tra và bổ sung MEMORY.md
  for (const entry of entries) {
    const loaded = await readWorkspaceFileWithGuards({...});
  }
}
```

Thứ tự xuất hiện của tệp cũng chính là thứ tự ưu tiên. `AGENTS.md` vạch rõ ranh giới năng lực, `SOUL.md` thổi linh hồn nhân cách, `TOOLS.md` thiết lập vùng cấm. Tám tệp tin này kết hợp tạo nên một cá tính Agent hoàn chỉnh. Tôi đặc biệt khuyến nghị bạn đọc kỹ tệp **AGENTS.md** để hiểu cách thức vận hành trí tuệ của hệ thống.

#### 2. Vòng đời khởi chạy của một Agent

Agent trong OpenClaw không phải là một tiến trình nặng nề chạy thường trực trong RAM, mà là một **thực thể tạm thời (transient instance)** được tạo ra trên từng phiên (per-session). Mỗi cuộc hội thoại là một vòng lặp hoàn chỉnh: Khởi tạo ngữ cảnh → Thực thi tác vụ → Hủy thực thể.

Nhờ cơ chế này, System Prompt luôn được sinh động tại mỗi lần gọi, mọi thay đổi trong tệp cấu hình của workspace đều có hiệu lực ngay lập tức mà không cần khởi động lại toàn bộ dịch vụ.

---

### (III) Cơ Chế Quản Lý Bộ Nhớ Của OpenClaw

Cơ chế ghi nhớ của OpenClaw xoay quanh 3 tệp dữ liệu chính:

```bash
# Nhật ký chi tiết phiên làm việc
.openclaw/agents/ceo/sessions/xxxx.jsonl

# Bộ nhớ ghi nhận theo từng ngày cụ thể
.openclaw/workspace-ceo/memory/YYYY-MM-DD.md

# Bộ nhớ dài hạn đã được tinh luyện và cô đọng
.openclaw/workspace-ceo/MEMORY.md
```

#### 1. Quản lý độ dài phiên và kỹ thuật nén ngữ cảnh (Compaction)

Khi cuộc trò chuyện kéo dài hàng trăm lượt, làm sao để không vượt quá giới hạn cửa sổ ngữ cảnh của LLM? OpenClaw áp dụng 3 kỹ thuật song hành:

- **A. Nén ngữ cảnh (Compaction — Lưu bền vững)**: Khi phiên trò chuyện quá dài, các tin nhắn cũ sẽ được mô hình tóm tắt thành một đoạn tổng kết cô đọng (`compaction_summary`). Đoạn tóm tắt này thay thế các tin nhắn cũ và được ghi bền vững vào tệp `.jsonl`.
- **B. Tỉa bớt kết quả công cụ (Session Pruning — Tạm thời trên RAM)**: Trước khi gửi mảng tin nhắn tới LLM, các kết quả trả về từ công cụ (như nội dung tệp 10KB vừa đọc) sẽ được tạm thời thay thế bằng chuỗi `"[Old tool result cleared]"` để giải phóng token. Thao tác này chỉ diễn ra trong bộ nhớ RAM, không làm mất dữ liệu gốc trong tệp JSONL.
- **C. Giới hạn số lượng tin nhắn (History Limit)**: Tự động chỉ gửi $N$ tin nhắn gần nhất tùy theo cấu hình.

#### 2. Cập nhật và truy hồi MEMORY.md

Khi phiên trò chuyện sắp chạm ngưỡng token tối đa, OpenClaw sẽ nhắc nhở Agent chủ động chắt lọc các thông tin quan trọng để ghi vào `MEMORY.md` thông qua công cụ ghi tệp, trước khi kích hoạt nén phiên. Ở các phiên tiếp theo, Agent sẽ tự động đối chiếu và truy hồi các thông tin cốt lõi này để duy trì sự nhất quán dài hạn.

---

### (IV) Giới Hạn Của Kiến Trúc Đơn Tác Tử (Single-Agent)

Một Agent duy nhất gánh vác mọi trọng trách sẽ nhanh chóng làm cạn kiệt cửa sổ ngữ cảnh và dễ bị "nhiễm chéo ký ức".

Ví dụ thực tế tôi từng gặp:
> Ban đầu tôi tạo một Agent chuyên làm gia sư học Flutter. Trong một buổi trao đổi ngẫu hứng, tôi có thảo luận sâu về thuật toán C++ với nó. Do cơ chế ghi nhớ tự động lưu giữ ngữ cảnh C++, ở các phiên sau đó khi tôi yêu cầu viết code demo Flutter, Agent lại liên tục sinh mã và đưa ra ví dụ bằng C++.

Chính vì vậy, phân chia các Agent chuyên trách riêng biệt là giải pháp tối ưu nhất cho các hệ thống phức tạp.

---

### (V) Giao Tiếp và Phối Hợp Giữa Các Agent

Trong OpenClaw, có hai cơ chế giao tiếp giữa các Agent: `sessions_send` và `sessions_spawn`.

#### 1. Sự khác biệt giữa sessions_send và sessions_spawn

- **sessions_send (Gửi tin nhắn vào phiên đang tồn tại)**:  
  Tương tự như việc bạn gửi tin nhắn trao đổi với một đồng nghiệp cùng phòng: thông tin trao đổi được lưu lại trong mạch làm việc và bộ nhớ của cả hai. Phương thức này phù hợp khi hai Agent cần trao đổi bình đẳng và lưu vết ký ức lâu dài.

- **sessions_spawn (Khởi tạo không gian chạy tác vụ độc lập)**:  
  Tương tự như việc bạn thuê một nhân sự thời vụ độc lập cho một nhiệm vụ cụ thể: giao việc, cung cấp dữ liệu đầu vào, nhận báo cáo kết quả và kết thúc. Không gian thực thi hoàn toàn tách biệt, không làm nhiễu ngữ cảnh chính của Agent gọi.

#### 2. Cách cấu hình trong openclaw.json

**Cấu hình sessions_send (Giao tiếp bình đẳng Agent-to-Agent)**:

```json
{
  "tools": {
    "agentToAgent": {
      "enabled": true,
      "allow": ["ceo", "iostutor"]
    },
    "sessions": {
      "visibility": "all"
    }
  }
}
```

**Cấu hình sessions_spawn (Quan hệ Agent mẹ - Agent con / SubAgent)**:

```json
{
  "id": "ceo",
  "name": "ceo",
  "workspace": "/Users/user/.openclaw/workspace-ceo",
  "subagents": {
    "allowAgents": ["iostutor"]
  }
}
```

#### 3. Kinh nghiệm tổ chức bộ máy Agent trong thực tế

- **Tổ chức phẳng, không nuôi quá nhiều Agent**: Chỉ nên duy trì một nhóm nòng cốt từ 3 đến 5 Agent chuyên trách thực sự. Phân cấp quản lý quá sâu chỉ làm tăng độ trễ và phức tạp hóa việc gỡ lỗi.
- **Xác lập ranh giới rõ ràng**: Những Agent mang tính công cụ thuần túy (như Agent chỉ chuyên định dạng Markdown) chỉ nên đóng vai trò SubAgent tạm thời, không cần lưu trữ bộ nhớ dài hạn.

---

## II. Kiểm Soát Tinh Chỉnh Hệ Thống

### (I) Cơ chế nạp và quản trị Skills

Một nguyên lý quan trọng cần nắm vững: **OpenClaw không nạp toàn bộ mã nguồn của tất cả Skills vào System Prompt, mà chỉ nạp danh sách tóm tắt (tên gọi, mô tả ngắn và đường dẫn)**.

Chỉ khi nào Agent nhận thấy yêu cầu của người dùng cần đến một công cụ cụ thể, nó mới dùng lệnh đọc tệp để đọc chi tiết tệp `SKILL.md` tương ứng. Cơ chế này giúp tiết kiệm tối đa token ban đầu.

**Thứ tự ưu tiên nạp Skills**:
1. `workspace-xxx/skills/` (Ưu tiên cao nhất — dành riêng cho từng Agent)
2. `~/.openclaw/skills/` (Ưu tiên trung bình — dùng chung toàn cục)
3. Bundled skills (Ưu tiên thấp nhất — tích hợp sẵn trong gói cài đặt)

**Lưu ý về bộ nhớ đệm (Cache) của Skills**:  
Khi bạn chỉnh sửa cấu hình một Skill, nếu phiên làm việc cũ vẫn đang mở, Agent có thể vẫn sử dụng snapshot kỹ năng cũ. Bạn chỉ cần đóng phiên cũ hoặc khởi động lại Gateway để nạp phiên bản mới nhất.

---

## III. Các Ca Ứng Dụng Thực Chiến Nổi Bật (Good Cases)

1. **Daily Paper (Điểm tin nghiên cứu AI mỗi sáng)**: Tự động quét các bài báo khoa học mới trên Hugging Face Papers, trích xuất điểm cốt lõi và gửi bản tóm tắt qua tin nhắn.
2. **Summary Agent (Bộ máy chắt lọc tri thức)**: Tự động theo dõi các kênh tin tức chuyên ngành, chấm điểm chất lượng và tổng hợp những bài viết giá trị nhất.
3. **DeepResearch (Nghiên cứu chuyên sâu tự động)**: Giao đề tài mở, Agent tự động phân rã câu hỏi, tìm kiếm đa chiều trên Internet và tổng hợp báo cáo phân tích toàn diện.
4. **RAG Tutor (Gia sư chuyên ngành theo yêu cầu)**: Cung cấp tài liệu đào tạo chuyên môn vào thư mục tri thức để Agent trở thành cố vấn 1-1 theo sát lộ trình học tập của bạn.
5. **ComfyUI Local Image/Video Generation**: Kết nối API cục bộ với ComfyUI trên máy tính để Agent có thể trực tiếp vẽ minh họa mà không tốn phí bản quyền API bên ngoài.
6. **Trợ lý gia đình thông minh**: Cấu hình Agent trong nhóm chat gia đình để nhắc lịch uống thuốc cho người lớn tuổi, theo dõi lịch bảo dưỡng thiết bị gia dụng và gợi ý thực đơn dinh dưỡng.

---

## Lời kết

Trong kỷ nguyên AI bùng nổ, việc nắm vững một nền tảng Agent mã nguồn mở linh hoạt và tự chủ như OpenClaw sẽ trao cho bạn đòn bẩy năng suất khổng lồ. Hãy bắt tay vào thử nghiệm từng bước, xây dựng cho mình những người cộng sự số đắc lực nhất!

---

**Nguồn bài viết**: Tài khoản kỹ thuật chính thức Tencent Technology Engineering  
**Tác giả**: Bing Yidong (Băng Dĩ Đông)  
**Thời gian công bố**: Ngày 09 tháng 03 năm 2026  

**Tài nguyên chính thức**:
- Trang chủ OpenClaw: https://openclaw.ai
- Tài liệu kỹ thuật: https://docs.openclaw.ai
- Chợ kỹ năng ClawHub: https://clawhub.ai

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/J-tencent-deep-dive/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích hoàn hảo cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp sẵn công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi qua lại giữa các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
