# Phụ lục N: Hệ Sinh Thái Skills Của OpenClaw

## 📊 Phân loại và Thống kê Skills (Tháng 3/2026)

### 📦 Skills tích hợp sẵn (Built-in Skills)

**Số lượng**: 49 Skills  
**Vị trí**: Đi kèm mặc định trong bộ cài OpenClaw  
**Đặc điểm**: Sẵn sàng dùng ngay (Out-of-the-box), không cần cài đặt thêm  
**Thể loại**: Quản lý tệp, quản lý tri thức, quản lý lịch trình, tự động hóa...  

**Mô tả**: Các Skills này đã được tích hợp ngay khi bạn cài đặt OpenClaw, có thể gọi dùng trực tiếp mà không cần cấu hình phức tạp.

**Lệnh kiểm tra**:

```bash
openclaw skills list
```

---

### 🏪 Skills chính thức trên ClawHub (Official Skills)

**Số lượng**: 93 Skills (Đã bao gồm 49 Skills tích hợp sẵn)  
**Vị trí**: Kho lưu trữ chính thức ClawHub  
**Đặc điểm**: Do đội ngũ OpenClaw trực tiếp bảo trì, bảo đảm chất lượng  
**Cài đặt**: `clawhub install <skill-name>`  

**Mô tả**: ClawHub là chợ kỹ năng chính thức của OpenClaw, cung cấp các Skills chất lượng cao đã qua kiểm duyệt bảo mật và kiểm thử nghiêm ngặt.

**Plugin mới bổ sung trong Sách Cam v1.4 (Tháng 3/2026)**:

- **@openclaw/wechat-clawbot**: Plugin chính thức kết nối WeChat cá nhân dựa trên WeChatFerry, chỉ với một dòng lệnh duy nhất để đưa trợ lý OpenClaw vào WeChat.

**Cú pháp truy cập và thao tác**:

```bash
# Tìm kiếm Skills
clawhub search <từ-khóa>

# Cài đặt Skills
clawhub install <skill-name>

# Cài đặt plugin WeChat (Mới trong v1.4)
openclaw plugins install @openclaw/wechat-clawbot

# Xem danh sách Skills đã cài đặt
openclaw skills list
```

---

### 🌐 Hệ sinh thái Skills đa nền tảng (Xu hướng công nghệ 2026)

Đầu năm 2026, thị trường AI Agent Skills chứng kiến sự bùng nổ vượt bậc với nhiều hệ sinh thái kỹ năng đa nền tảng liên thông:

#### Skills.sh (Phát triển bởi Vercel)

- **Số lượng**: 87.000+ Skills
- **Đơn vị phát triển**: Vercel
- **Ra mắt**: Tháng 1/2026
- **Đặc điểm nổi bật**:
  - Hệ sinh thái Agent Skills mở hoàn toàn
  - Công cụ dòng lệnh CLI tiện lợi: `npx skills`
  - Hỗ trợ hơn 37+ công cụ lập trình AI như Claude Code, Cursor, Codex...
  - Kho mã nguồn mở: `vercel-labs/skills`
- **Trang chủ**: https://skills.sh

**Cách thức cài đặt**:

```bash
# Cài đặt qua npx
npx skills install <skill-name>

# Tìm kiếm kỹ năng
npx skills search <từ-khóa>
```

#### SkillsMP (Chợ Agent Skills tập trung)

- **Số lượng**: 400.000+ Agent Skills
- **Đặc điểm nổi bật**:
  - Sử dụng định dạng tiêu chuẩn mở `SKILL.md`
  - Tương thích chéo với Claude Code, OpenAI Codex CLI, ChatGPT
  - Tổng hợp kỹ năng tự động từ các kho lưu trữ GitHub
  - Tìm kiếm thông minh và lọc danh mục tiện lợi
  - Bùng nổ số lượng mạnh mẽ từ tháng 12/2025
- **Trang chủ**: https://skillsmp.com

**Số liệu tăng trưởng thần tốc**:
- Tháng 12/2025: Khoảng 66.000 kỹ năng
- Ngày 22/01/2026: Tăng thêm 20.218 kỹ năng chỉ trong một ngày
- Tháng 3/2026: Vượt mốc 400.000+ kỹ năng

#### Hội tụ với hệ sinh thái MCP (Model Context Protocol)

**MCP (Model Context Protocol)** là chuẩn giao thức mở do Anthropic khởi xướng, dùng để kết nối hai chiều an toàn giữa các mô hình ngôn ngữ lớn (LLM) với các công cụ và nguồn dữ liệu bên ngoài.

**Thư mục máy chủ MCP Server**:

| Nền tảng | Số lượng MCP Server | Đặc điểm nổi bật |
|---|---|---|
| AI Agents List | 593+ | Phân loại theo thể loại, ngôn ngữ, phạm vi |
| API Tracker | 110 | Tích hợp chính thức và triển khai mẫu tham khảo |
| mcp.so | 1.800+ | Do MiniMax phát triển, tập trung vào TTS, tạo ảnh, sinh video |
| Kho GitHub chính thức | Bản mẫu tham khảo | Bộ sưu tập server do cộng đồng đóng góp |

**Sự hội tụ giữa MCP và Skills**:
- Các MCP Server có thể được đóng gói trực tiếp thành Skills của OpenClaw
- Các Skills có thể gọi trực tiếp công cụ chuẩn giao thức MCP
- Hai hệ sinh thái đang nhanh chóng tích hợp chặt chẽ với nhau

**Liên kết tài nguyên**:
- Kho chính thức MCP: https://github.com/modelcontextprotocol/servers
- AI Agents List: https://aiagentslist.com/mcp-servers

---

### 🌐 Skills cộng đồng (Mở rộng)

**Số lượng**: 1.715+ Skills  
**Vị trí**: Đóng góp trên cộng đồng GitHub  
**Đặc điểm**: Tính năng đa dạng, phong phú nhưng cần chọn lọc  
**Cài đặt**: Cài đặt thủ công hoặc clone từ GitHub  

**Mô tả**: Do cộng đồng lập trình viên toàn cầu đóng góp, bao quát mọi nhu cầu và tình huống sử dụng thực tế. Chất lượng giữa các bản có sự chênh lệch, bạn nên xem kỹ đánh giá và tài liệu trước khi kích hoạt.

**Cú pháp cài đặt**:

```bash
# Clone trực tiếp từ GitHub
git clone https://github.com/user/skill-name ~/.openclaw/skills/skill-name

# Hoặc cài qua clawhub (nếu tác giả đã phát hành lên sàn)
clawhub install community/skill-name
```

---

### 🏢 Skills cấp doanh nghiệp (Baidu Qianfan)

**Số lượng**: 1.715 Skills  
**Vị trí**: Nền tảng Baidu Qianfan  
**Đặc điểm**: Chất lượng chuẩn doanh nghiệp, phủ rộng trên 20+ lĩnh vực  
**Đối tượng phù hợp**: Khách hàng doanh nghiệp, ứng dụng chuyên ngành  

**Mô tả**: Hệ sinh thái Skills cấp doanh nghiệp do Baidu Qianfan cung cấp, thiết kế riêng cho các kịch bản kinh doanh và giải pháp chuyên biệt theo ngành nghề.

**Các ngành bao phủ tiêu biểu**:
- Tài chính, y tế, giáo dục, bán lẻ
- Sản xuất, logistics, chăm sóc khách hàng, tiếp thị truyền thông
- Và hơn 20+ phân ngành khác

---

### 🤖 Mạng xã hội dành riêng cho AI Agent

#### InStreet (Thực thể phố - Mạng xã hội Agent)

- **Thời gian ra mắt**: Ngày 09/03/2026
- **Đội ngũ phát triển**: Đội ngũ Coze (thuộc ByteDance)
- **Định vị**: Mạng xã hội tiếng Hoa đầu tiên trên thế giới thiết kế riêng cho các AI Agent
- **Trang chủ**: https://instreet.coze.site

**Số liệu ấn tượng sau 3 ngày ra mắt**:
- 17.000+ AI Agent tham gia
- 22.000+ bài viết đăng tải
- 120.000+ lượt thích (like)

**Đặc điểm nổi bật**:
1. **Hệ sinh thái giao tiếp thuần AI**
   - Chỉ cho phép các AI Agent đăng bài, bình luận và tương tác với nhau
   - Người dùng con người chỉ được theo dõi quan sát (read-only), không thể can thiệp trực tiếp
   - Thành viên hoạt động tích cực được gọi thân mật là các "chú tôm điện tử" (AI Agent)
2. **Các chuyên mục chức năng**
   - Khu vực chia sẻ Skill
   - Thảo luận hiệu suất làm việc
   - Diễn đàn tranh biện tư duy logic
   - Nhiều phân khu diễn đàn chuyên môn khác
3. **Phương thức kết nối**
   - Bất kỳ Agent nào cũng có thể kết nối tham gia
   - Mở đăng ký tự do qua API
   - Hỗ trợ đầy đủ các tác tử OpenClaw

**Bối cảnh công nghệ**:
- Đầu năm 2026 bùng nổ làn sóng xây dựng và vận hành AI Agent cá nhân
- Chính quyền các đô thị công nghệ ban hành chính sách hỗ trợ phát triển Agent
- Giới phân tích tài chính và công nghệ phổ cập các giáo trình huấn luyện Agent
- Đánh dấu bước nhảy vọt của AI từ vai trò phản hồi tương tác sang tự chủ thực thi hành động

---

## 📈 Bảng tổng hợp số liệu

| Thể loại | Số lượng | Mức độ chất lượng | Mức độ khuyến nghị |
|---|---|---|---|
| Skills tích hợp sẵn | 49 | ⭐⭐⭐⭐⭐ | Bắt buộc dùng |
| Skills chính thức ClawHub | 93 | ⭐⭐⭐⭐⭐ | Rất khuyến nghị |
| Skills.sh | 87.000+ | ⭐⭐⭐⭐ | Khuyến nghị đa nền tảng |
| SkillsMP | 400.000+ | ⭐⭐⭐ | Chọn lọc theo nhu cầu |
| MCP Server | 1.800+ | ⭐⭐⭐⭐ | Khả năng mở rộng mạnh |
| Skills cộng đồng | 1.715+ | ⭐⭐⭐ | Chọn lọc theo nhu cầu |
| Skills cấp doanh nghiệp | 1.715 | ⭐⭐⭐⭐⭐ | Khuyến nghị cho doanh nghiệp |
| **Tổng cộng** | **~492.000+** | - | - |

---

## 🎯 Gợi ý cài đặt cho người dùng

### Top 20 Skills thiết yếu

Xem chi tiết tại [Chương 8: Mở rộng Skills](../docs/03-advanced/08-skills-extension.md).

### Lời khuyên cho người mới bắt đầu

1. **Khởi đầu từ các Skills tích hợp sẵn** - Làm quen với các tính năng cơ bản
2. **Cài đặt Top 5 Skills cốt lõi** - Mở rộng năng lực xử lý tự động
3. **Chọn lựa Skills cộng đồng khi phát sinh nhu cầu** - Giải quyết các kịch bản cụ thể
4. **Khám phá MCP Server** - Mở rộng kết nối đến các công cụ và cơ sở dữ liệu chuyên sâu

---

## 💡 Lời khuyên khi vận hành thực tế

### Nguyên tắc lựa chọn Skills

1. **Ưu tiên Skills tích hợp sẵn**: Luôn ổn định và tương thích tuyệt đối
2. **Kế đến là Skills chính thức trên ClawHub**: Đảm bảo chất lượng và được cập nhật thường xuyên
3. **Cân nhắc tính tương thích của Skills đa nền tảng**: Đánh giá định dạng tương thích với Skills.sh, SkillsMP
4. **Tận dụng MCP Server để mở rộng**: Tích hợp các giao thức và nguồn dữ liệu đặc thù
5. **Cẩn trọng khi dùng Skills cộng đồng**: Luôn đọc kỹ phần đánh giá và kiểm tra mã nguồn
6. **Người dùng doanh nghiệp nên dùng Skills chuyên ngành**: Nhận được sự bảo chứng và hỗ trợ kỹ thuật dài hạn

### Lợi thế của Skills định dạng đa nền tảng

- **Tính phổ quát**: Một Skill có thể kích hoạt trên nhiều nền tảng Agent khác nhau
- **Dễ dàng di chuyển**: Thuận tiện chuyển đổi giữa các công cụ lập trình AI
- **Cộng đồng sôi động**: Được vá lỗi và nâng cấp tính năng rất nhanh
- **Quy chuẩn hóa**: Sử dụng cấu trúc định dạng chuẩn `SKILL.md`

### Tránh cài đặt quá nhiều kỹ năng dư thừa

- ❌ Tránh cài đặt ồ ạt hàng loạt Skills cùng lúc
- ✅ Chỉ cài đặt theo nhu cầu thực tế, mở rộng dần từng bước
- ✅ Định kỳ dọn dẹp và gỡ bỏ các Skills không còn sử dụng
- ✅ Chú ý theo dõi các phiên bản cập nhật bảo mật của Skills
- ✅ Ưu tiên các Skills tuân thủ định dạng chuẩn công nghiệp

### Lưu ý an ninh bảo mật

**Quan trọng**: Tháng 1/2026 đã từng xảy ra sự cố [Tấn công chuỗi cung ứng ClawHavoc](../docs/03-advanced/08-skills-extension.md#tấn-công-chuỗi-cung-ứng-clawhavoc), khi khoảng 20% Skills trên ClawHub bị phát hiện chứa mã độc hại.

- ✅ Luôn kiểm tra mã nguồn trước khi cho phép cài đặt vào môi trường sản xuất
- ✅ Ưu tiên tham khảo danh sách kiểm duyệt uy tín (như awesome-openclaw-skills)
- ✅ Định kỳ kiểm tra xem tệp `SOUL.md` và `MEMORY.md` có bị can thiệp trái phép hay không
- ✅ Sử dụng công cụ kiểm toán như SecureClaw hoặc Skill Vetter để quét mã nguồn
- ❌ Tuyệt đối không cài đặt các Skills trôi nổi không rõ nguồn gốc

---

## 🔗 Liên kết tài nguyên liên quan

- [Chương 8: Mở rộng Skills](../docs/03-advanced/08-skills-extension.md) - Hướng dẫn chi tiết cách dùng và tạo Skills
- [Bảo mật hệ thống: An toàn Skills](../docs/03-advanced/08-skills-extension.md#bảo-mật-skills) - Thực hành an toàn khi vận hành Skills
- [Chợ kỹ năng ClawHub](https://clawhub.com) - Chợ Skills chính thức của OpenClaw
- [Skills.sh](https://skills.sh) - Hệ sinh thái Agent Skills đa nền tảng từ Vercel
- [SkillsMP](https://skillsmp.com) - Chợ 400.000+ Agent Skills
- [Kho lưu trữ MCP chính thức](https://github.com/modelcontextprotocol/servers) - Máy chủ Model Context Protocol
- [Mạng xã hội InStreet](https://instreet.coze.site) - Mạng xã hội đầu tiên dành riêng cho AI Agent
- [Tài liệu phát triển Skills](https://docs.openclaw.ai/skills) - Tự xây dựng Skills cho riêng bạn

---

**Cập nhật lần cuối**: 04/04/2026  
**Nguồn dữ liệu**: Thống kê chính thức OpenClaw, Skills.sh, SkillsMP, Kho MCP chính thức  

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc phụ lục này trực tuyến?**

[🔗 Đọc trực tuyến phụ lục này](https://awesome.tryopenclaw.asia/appendix/N-skills-ecosystem/)

Truy cập website để có trải nghiệm đọc tối ưu nhất:
- 📱 Thiết kế tương thích cho điện thoại, máy tính bảng và máy tính để bàn
- 🌙 Hỗ trợ chế độ nền tối (Dark mode) bảo vệ thị lực
- 🔍 Tích hợp công cụ tìm kiếm, nhanh chóng tra cứu nội dung
- 📋 Điều hướng mục lục linh hoạt, dễ dàng chuyển đổi các chương

[🏠 Truy cập trang web giáo trình hoàn chỉnh](https://awesome.tryopenclaw.asia)
