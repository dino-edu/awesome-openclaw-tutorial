# 🦞 Awesome OpenClaw Tutorial
# 🦞 Giáo trình OpenClaw toàn diện cho cá nhân độc lập

> Xây dựng trợ lý làm việc AI của bạn từ con số không: Giáo trình tiếng Việt toàn diện nhất, bao gồm cài đặt, cấu hình, ca thực chiến và kinh nghiệm tránh lỗi.

[![GitHub stars](https://img.shields.io/github/stars/xianyu110/awesome-openclaw-tutorial?style=social)](https://github.com/xianyu110/awesome-openclaw-tutorial)
[![GitHub forks](https://img.shields.io/github/forks/xianyu110/awesome-openclaw-tutorial?style=social)](https://github.com/xianyu110/awesome-openclaw-tutorial)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-v2026.9.3-green.svg)](https://github.com/xianyu110/awesome-openclaw-tutorial)
[![Status](https://img.shields.io/badge/status-hoàn%20thành-success.svg)](reports/PROJECT-SUMMARY.md)
[![CSDN](https://img.shields.io/badge/CSDN-Blog-c32136?style=for-the-badge&logo=csdn)](https://blog.csdn.net/xianyu120)
[![Bilibili](https://img.shields.io/badge/Bilibili-B站-fb7299?style=for-the-badge&logo=bilibili)](https://space.bilibili.com/399102586)
[![WeChat](https://img.shields.io/badge/WeChat-MaynorAI-07C160?style=for-the-badge&logo=wechat)](https://upload.may.maynor1024.live/file/1773461955906_qrcode_for_gh_c749803541de_1280.jpg)
[![YouTube](https://img.shields.io/badge/YouTube-Profile-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@buguniao537)
[![X](https://img.shields.io/badge/X-Profile-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Nikitka_aktikiN)

---

> 🇻🇳 **Lời giới thiệu bản dịch tiếng Việt & Tri ân nguyên tác**:
> Bản dịch tiếng Việt của giáo trình **Awesome OpenClaw Tutorial** được thực hiện nhằm mang đến cho cộng đồng công nghệ, các cá nhân độc lập (solopreneurs), nhà sáng tạo nội dung và lập trình viên tại Việt Nam một tài liệu thực hành hoàn chỉnh, bài bản và cập nhật nhất về hệ sinh thái OpenClaw. 
> Toàn bộ nội dung nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110) cùng các cộng sự trong cộng đồng OpenClaw mã nguồn mở. Chúng tôi xin gửi lời cảm ơn và tri ân chân thành nhất tới tác giả vì kho tàng kiến thức đồ sộ và vô cùng thực tế này. Mọi đóng góp cải thiện bản dịch hoặc cập nhật ca thực chiến cho thị trường Việt Nam luôn được hoan nghênh nồng nhiệt qua Pull Request và Issue!

> 🔄 **Lưu ý cập nhật (10/09/2026)**: Kho tài liệu này hiện được đối chiếu và chuẩn hóa theo **OpenClaw v2026.9.3 (Bản ổn định, phát hành 08/09/2026)**; các chương `1/2/5/7/8/10~15` đã được đồng bộ với nhánh chính 2026.9. Khi nâng cấp xuyên phiên bản, vui lòng đọc trước [`updates/2026-09-10-v2026.9.3.md`](updates/2026-09-10-v2026.9.3.md), sau khi nâng cấp hãy chạy `openclaw doctor --fix`.

---

## 📌 Khác biệt giữa giáo trình này và phiên bản OpenClaw mới nhất

Để tránh việc bạn nhầm lẫn các chương cũ với tài liệu hướng dẫn chính thức mới nhất, hãy lưu ý 4 điểm sau:

- **Phiên bản nền tảng hiện tại**: Kho tài liệu hiện được đối chiếu theo bản ổn định `v2026.9.3`; nếu trên GitHub Releases hoặc npm có phiên bản cao hơn, vui lòng ưu tiên Release Notes và tài liệu chính thức từ OpenClaw.
- **Các chương đã được ưu tiên cập nhật**: `README`, ghi chú cập nhật và các chương `1/2/5/7/8/10~15` đã được hiệu chỉnh theo nhánh chính `2026.9` (bao gồm cảnh báo di chuyển thay đổi lớn - Breaking Changes từ bản 2026.8).
- **Các chương vẫn còn nội dung lịch sử**: Chương `3/4/6/9` và một số bài hướng dẫn triển khai một chạm trong `tutorials/` có thể vẫn chứa ảnh chụp màn hình cũ hoặc các bước kênh cũ, phù hợp để tham khảo tư duy, không khuyến nghị sao chép và thực thi nguyên văn.
- **Các nhánh lệnh chính thức nên ưu tiên hiện tại**: `openclaw onboard`, `openclaw models auth login --provider openai|…`, `openclaw doctor --fix`, `openclaw infer ...`, `openclaw skills …`, `Task Flow`, `Webhooks`, `/usage`.

| Phân loại | Trạng thái hiện tại của giáo trình | Lời khuyên khi đọc |
|------|----------------|----------|
| Phiên bản nền tảng | Đã đồng bộ `v2026.9.3` | Người mới nên ưu tiên chạy thông suốt trên phiên bản này |
| Runtime môi trường | Node **24.16+** hoặc **26.1+** (khuyến nghị 26) | Nâng cấp Node trước rồi mới nâng cấp OpenClaw |
| Di chuyển liên phiên bản | Nhấn mạnh `openclaw doctor --fix` | Xử lý định tuyến `openai/*`, dọn dẹp OpenProse, SQLite lưu trữ phiên |
| Quy trình cài đặt/cấu hình | Đã bổ sung các cổng vào 2026.9 | Ưu tiên đọc Chương `2` và Chương `11` |
| Năng lực truyền thông/sáng tạo | Giữ nhánh chính `infer` / tạo media / `ComfyUI` | Ưu tiên đọc Chương `10` và Chương `14` |
| Hệ sinh thái Skill cũ | Đánh dấu rõ là tài liệu lịch sử | Dùng `openclaw skills`, không mặc định dùng `clawhub install …` |

> ⚠️ **Quy tắc phán đoán nhanh**: Nếu bạn thấy các chuỗi cú pháp như `openai-codex/*`, `codex/*`, `/prose`, `local-anthropic`, `bananapro-image-gen`, hoặc cả chuỗi `clawhub install ...`, hãy hiểu đó là "mục tham khảo lịch sử hoặc cần di chuyển", đừng mặc định coi đó là các bước khuyến nghị chính thức của phiên bản `2026.9`.

---

## 🚀 Lựa chọn nhanh trong 30 giây: Phương án triển khai nào phù hợp với bạn?

| Trường hợp của bạn | Phương án đề xuất | Lý do | Thời gian bắt đầu |
|---------|---------|------|---------|
| **Người mới hoàn toàn, muốn trải nghiệm nhanh nhất** | [**Lark / Feishu Miaoda**](tutorials/Openclaw史上最简单教程，小白一键部署.md#1飞书妙搭-openclaw--强烈推荐) ⭐ | **Miễn phí** + **Hoàn thành trong 1 phút** + **1 triệu Tokens/ngày** | → Bắt đầu ngay |
| **Có VPS/Server riêng, muốn quản lý giao diện trực quan** | [**BaoTa Panel (aaPanel)**](tutorials/Openclaw史上最简单教程，小白一键部署.md#11宝塔面板-openclaw) | **Plugin miễn phí** + **Quản trị trực quan** + **Cài đặt 1 click** | → Xong trong 3 phút |
| **Cấp doanh nghiệp, đòi hỏi bảo mật cao** | [**JVSClaw**](tutorials/Openclaw史上最简单教程，小白一键部署.md#10jvsclaw阿里云无影) | **Miễn phí 14 ngày** + **6 Core 12GB** + **Mã hóa đầu cuối** | → Cần mã mời |
| **Muốn thao tác tự động hóa qua trình duyệt** | [Kimi Claw](tutorials/Openclaw史上最简单教程，小白一键部署.md#3kimi-openclaw) | **Kimi K2.5** + **Điều khiển trình duyệt** | → ~200 tệ/tháng |
| **Giao dịch định lượng / Đa kênh IM** | [Tencent WorkBuddy](tutorials/Openclaw史上最简单教程，小白一键部署.md#4腾讯-openclawworkbuddy) | **Desktop Agent** + **Hỗ trợ đa nền tảng IM** | → Tặng 5.000 điểm |
| **Trải nghiệm ứng dụng bản địa macOS** | [QClaw](tutorials/Openclaw史上最简单教程，小白一键部署.md#5qclaw) | **Desktop Client chính thức từ Tencent** + **Public Beta** | → Miễn phí |
| **Hệ sinh thái AI Agent phong phú** | [Coze OpenClaw](tutorials/Openclaw史上最简单教程，小白一键部署.md#2扣子-openclaw) | **Hơn 1.800 Skills** | → Từ 99 tệ/tháng |

📖 **[Xem bài hướng dẫn triển khai một chạm chi tiết →](tutorials/Openclaw史上最简单教程，小白一键部署.md)**

---

## 📊 Điều hướng giáo trình (Theo lộ trình học tập)

### 🎯 Nhập môn từ số 0 (Bắt buộc đọc)
- 📖 [Chương 1: Làm quen với OpenClaw](docs/01-basics/01-introduction.md) - 5 phút nắm bắt giá trị cốt lõi
- 🚀 [Chương 2: Triển khai nhanh](docs/01-basics/02-installation.md) - Lựa chọn cách cài đặt phù hợp với bạn
- 💬 [Chương 3: Khởi động nhanh](docs/01-basics/03-quick-start.md) - Gửi thông điệp đầu tiên

### 🔥 Tính năng cốt lõi (Thực chiến)
- 📁 [Chương 4: Quản lý tệp cục bộ](docs/02-core-features/04-file-management.md) - Nâng cao 81% hiệu suất công việc
- 🧠 [Chương 5: Cơ sở tri thức cá nhân](docs/02-core-features/05-knowledge-management.md) - Hệ thống bộ não thứ hai + Active Memory / Dreaming
- 📅 [Chương 6: Quản lý lịch trình](docs/02-core-features/06-schedule-management.md) - AI tự động thiết lập thời gian biểu
- ⚙️ [Chương 7: Luồng công việc tự động hóa](docs/02-core-features/07-automation-workflow.md) - Tác vụ định kỳ Cron + Task Flow / Webhooks

### 💎 Kỹ năng nâng cao (Tối ưu hóa)
- 🔌 [Chương 8: Mở rộng Skills](docs/03-advanced/08-skills-extension.md) - Kho 1.800+ kỹ năng mở rộng
- 🤖 [Chương 9: Tích hợp đa nền tảng](docs/03-advanced/09-multi-platform-integration.md) - Lark/Feishu, WeCom, DingTalk, Telegram, Discord
- 🔗 [Chương 10: Tích hợp API và năng lực bên ngoài](docs/03-advanced/10-api-integration.md) - infer / webhooks / quy trình xử lý media
- ⚙️ [Chương 11: Cấu hình nâng cao](docs/03-advanced/11-advanced-configuration.md) - Mô hình / Bộ nhớ / Phê duyệt / Hiệu năng

### 🎯 Ca thực chiến (Áp dụng trực tiếp)
- 👔 [Chương 12: Tối ưu năng suất cá nhân](docs/04-practical-cases/12-personal-productivity.md) - Công việc tri thức / Lập trình / Viết lách / Học tập / Vận hành cá nhân
- 🔗 [Chương 13: Tự động hóa nâng cao](docs/04-practical-cases/13-advanced-automation.md) - Cron / Tasks / Task Flow / Hooks / Standing orders
- 🎨 [Chương 14: Ứng dụng sáng tạo & Media](docs/04-practical-cases/14-creative-applications.md) - Hình ảnh / Video / Âm nhạc / TTS / ComfyUI
- 🚀 [Chương 15: Thực chiến cá nhân độc lập (Solopreneur)](docs/04-practical-cases/15-solo-entrepreneur-cases.md) - Nghiên cứu chủ đề / Bàn giao / Phân phối / Đánh giá tổng kết

### 📚 Hệ thống phụ lục & Công cụ (Tra cứu nhanh)
- [Bảng tra cứu câu lệnh CLI](appendix/A-command-reference.md) | [Danh mục Skills cần cài đặt](appendix/B-skills-catalog.md)
- [Xử lý sự cố thường gặp](appendix/E-common-problems.md) | [So sánh các API & Nhà cung cấp](appendix/C-api-comparison.md)
- [Mẫu cấu hình chuẩn](appendix/H-config-templates.md) | [Kinh nghiệm thực tiễn & Tránh lỗi](appendix/F-best-practices.md)

---

## 🆘 Gặp sự cố? Giải quyết nhanh

<details>
<summary><b>🔧 Tra cứu nhanh lỗi thường gặp (Bấm để mở rộng)</b></summary>

### Vấn đề cài đặt và cấu hình
- [Cài đặt thất bại xử lý thế nào?](appendix/E-common-problems.md#安装配置问题)
- [Kết nối API thất bại?](appendix/E-common-problems.md#api连接问题)
- [Bot Lark/Feishu không phản hồi?](docs/03-advanced/09-multi-platform-integration.md#常见问题)

### Vấn đề trong quá trình sử dụng
- [AI trở nên "im lặng", không chịu thao tác?](#🔧-phiên-bản-202632-ai-không-thực-hiện-lệnh-hoặc-im-lặng) → Chuyển sang profile `full`
- [Khởi động Gateway thất bại?](appendix/E-common-problems.md#gateway问题) → Kiểm tra cấu hình xác thực (auth)

### Tối ưu chi phí sử dụng
- [Chi phí gọi API quá cao?](docs/03-advanced/11-advanced-configuration.md)
- [Làm sao để tiết kiệm chi phí?](appendix/F-best-practices.md) - Sử dụng các mô hình nội địa chất lượng cao giúp tiết kiệm đến 95%

</details>

**Chưa tìm thấy câu trả lời?**
- 📖 [Xem toàn bộ FAQ](appendix/E-common-problems.md)
- 💬 [Tạo yêu cầu hỗ trợ (Issue)](https://github.com/xianyu110/awesome-openclaw-tutorial/issues)

---

## 🚨 Lưu ý quan trọng theo từng phiên bản

### ⚠️ Phiên bản 2026.3.7: Yêu cầu xác thực Gateway (Breaking Change)

Xác thực Gateway hiện **bắt buộc phải được thiết lập tường minh** qua `gateway.auth.mode` (`token` hoặc `password`).

**Khắc phục nhanh**:
```bash
openclaw config set gateway.auth.mode token
openclaw config set gateway.auth.token "your-secret-token"
openclaw gateway restart
```

### 🔧 Phiên bản 2026.3.2: AI không thực hiện lệnh hoặc "im lặng"?

**Hiện tượng**: AI chỉ trò chuyện được thông thường nhưng không thực hiện công việc (thao tác tệp, thực thi lệnh bị vô hiệu hóa).  
**Nguyên nhân**: Profile mặc định được chuyển sang `messaging` (chế độ thuần chat).  
**Khắc phục**: Chuyển cấu hình sang profile `full`.

```bash
openclaw config set tools.profile full
openclaw gateway restart
```

**Mô tả 5 loại Profile**:

| Profile | Chức năng chi tiết |
|---------|---------|
| `messaging` | Chỉ có thể gửi tin nhắn và quản lý phiên hội thoại |
| `default` | Bộ công cụ mặc định (không bao gồm thực thi dòng lệnh) |
| `coding` | Các công cụ chuyên sâu về lập trình |
| **`full`** | **Bộ công cụ đầy đủ, bao gồm thực thi dòng lệnh (Khuyến nghị)** |
| `all` | Kích hoạt toàn bộ tất cả công cụ |

---

### 🆕 Cập nhật quan trọng v2026.3.12 (Tháng 03/2026)

> Khuyến nghị tất cả người dùng nâng cấp vì có chứa nhiều bản vá bảo mật quan trọng.

**Tính năng mới**:
- **Thiết kế lại toàn diện giao diện Control UI**: Dashboard mô-đun hóa với các khung nhìn Tổng quan / Chat / Cấu hình / Agent / Phiên làm việc; hỗ trợ Command Palette, thanh Tab đáy trên di động, lệnh slash, xuất tin nhắn và ghim tin nhắn.
- **Công tắc chế độ nhanh `/fast`**: Hỗ trợ chuyển đổi nhanh gói fast tier của OpenAI / Anthropic giúp tiết kiệm chi phí và tăng tốc độ phản hồi.
- **Hỗ trợ Kubernetes**: Bổ sung tài liệu triển khai trên K8s (hỗ trợ cả Kind và manifest gốc).
- **Công cụ `sessions_yield`**: Cho phép AI Agent chủ động kết thúc lượt hiện tại kèm payload tiếp theo, giúp điều phối luồng linh hoạt hơn.
- **Slack Block Kit**: Hỗ trợ định dạng tin nhắn phong phú Block Kit trên kênh Slack.

**Bản vá bảo mật trọng yếu** (Khuyến nghị nâng cấp ngay):
- Vá lỗ hổng tấn công chiếm quyền WebSocket qua Cross-site.
- Ngăn chặn nạp ngầm tự động plugin không an toàn trong workspace (chống thực thi mã độc).
- Sửa lỗi vượt quyền xác thực tại `/config` và `/debug`.
- Sửa lỗi tự nâng quyền phạm vi thông qua token chia sẻ.
- Vá nhiều điểm bỏ qua kiểm duyệt phê duyệt lệnh thực thi (exec).

---

### 🆕 Cập nhật v2026.3.13 (Giữa tháng 03/2026)

**Tính năng mới**:
- **Chế độ Chrome DevTools MCP attach**: Cho phép kết nối trực tiếp vào trình duyệt Chrome đã đăng nhập để tự động hóa mà không cần đăng nhập lại từ đầu.
- **Trình hướng dẫn cài đặt Ollama một chạm**: Hỗ trợ cả chế độ Local lẫn mô hình kết hợp Cloud + Local.
- **Lập chỉ mục bộ nhớ đa phương thức (Multimodal Memory)**: Hỗ trợ tìm kiếm ngữ nghĩa nội dung hình ảnh/âm thanh qua Gemini Embedding.
- **Hỗ trợ múi giờ trong Docker**: Bổ sung biến môi trường `OPENCLAW_TZ`.
- **Màn hình hướng dẫn khởi động lần đầu trên iOS**: Cải thiện đáng kể trải nghiệm người dùng mới.

**Sửa lỗi**:
- Khắc phục hiện tượng lag và giật giao diện Dashboard khi chạy nhiều công cụ đồng thời.
- Sửa lỗi cửa sổ console màu đen bật lên trên Windows khi khởi động lại gateway.
- Vá lỗ hổng mã xác lập (setup code) bị tấn công phát lại (replay attack).
- Khử trùng lặp plugin SDK, giải quyết vấn đề phình bộ nhớ gấp ~2 lần.

---

### 🆕 Cập nhật bản ổn định v2026.9.3 (08/09/2026)

**Nền tảng hiện tại**:
- **Phiên bản ổn định**: `v2026.9.3`
- **Môi trường khuyến nghị**: `Node 26` (hoặc `Node 24.16+`); **Không còn hỗ trợ Node 22**
- **Kiểm tra phiên bản**: `npm view openclaw version` sẽ trả về `2026.9.3`
- **Tài liệu hướng dẫn di chuyển đầy đủ**: [`updates/2026-09-10-v2026.9.3.md`](updates/2026-09-10-v2026.9.3.md)

**Những thay đổi cốt lõi khi nâng cấp từ 2026.6.8 lên 2026.9.3**:
- **OpenClaw 2.0 (2026.8.1)**: Toàn bộ phiên hội thoại và biên bản được chuyển vào SQLite; Control UI và onboarding được thiết kế lại; bắt buộc sao lưu trước khi nâng cấp.
- **Di chuyển định tuyến mô hình OpenAI**: Chuyển đổi từ `codex/*`, `openai-codex/*` sang `openai/*` (sử dụng `openclaw doctor --fix`).
- **Loại bỏ OpenProse**: Plugin tích hợp sẵn và lệnh `/prose` đã ngừng hoạt động; làm sạch cấu hình bằng lệnh Doctor, khi cần hãy cài đặt Agent Skill từ upstream.
- **Skills & Workshop**: Ưu tiên quản lý qua lệnh `openclaw skills`; Workshop lưu trữ trạng thái bền vững theo từng Agent; lệnh `clawhub install …` chuyển thành tài liệu tham khảo cũ.
- **Phục hồi cập nhật (2026.9.x)**: Cho phép chạy thử (dry-run) tiến trình cập nhật và khôi phục sạch sẽ hơn nếu thất bại; kiểm tra qua `openclaw update status`.
- **Các tính năng tiếp tục phát triển từ nhánh 2026.6**: Active Memory / Memory Wiki, `infer`, Task Flow / Webhooks, tạo nội dung media, chân trang `/usage`.

**Lệnh nâng cấp**:
```bash
# Trước tiên hãy kiểm tra phiên bản Node
node -v   # Yêu cầu Node 24.16+ hoặc 26.1+

openclaw update --tag 2026.9.3 --yes
openclaw update repair
openclaw doctor --fix
openclaw --version  # Xác nhận phiên bản hiển thị là 2026.9.3
```

> ⚠️ **Lời khuyên cho người mới**: Để đảm bảo trải nghiệm ổn định và bám sát giáo trình nhất, hãy sử dụng phiên bản `v2026.9.3`. Nếu lệnh `openclaw update` gặp sự cố, bạn có thể dùng lệnh cài đặt trực tiếp: `npm install -g openclaw@2026.9.3 --allow-scripts=openclaw`. Sau khi nâng cấp, hãy chạy lần lượt các lệnh: `openclaw doctor --fix`, `openclaw models status --probe` và `openclaw channels status`.

### 📎 Nền tảng lịch sử: v2026.6.8 (16/06/2026)

> Nội dung dưới đây được lưu giữ nhằm mục đích đối chiếu lịch sử, **không còn là phiên bản khuyến nghị hiện tại**.

- Môi trường chạy tại thời điểm đó là Node 24 / tương thích Node 22.19+.
- Đặt nền móng cho các tính năng: Active Memory, Dreaming, Memory Wiki, Task Flow, Webhooks, `openclaw infer`, công cụ media tích hợp sẵn và chân trang thống kê token `/usage`.
- Nếu ghi chú hoặc script của bạn vẫn còn chứa `openai-codex/*` hoặc `clawhub install …`, vui lòng di chuyển lên nhánh chính 2026.9 theo hướng dẫn ở trên.

---

## 📖 Về giáo trình này

### 🎯 Điểm nổi bật của giáo trình

1. **Định vị cho Cá nhân Độc lập (Solopreneur)** - Một người + OpenClaw = Tiềm năng vô hạn, tăng gấp 10 lần hiệu suất làm việc.
2. **Ưu tiên triển khai Cloud** - Hạ thấp rào cản kỹ thuật, có thể sử dụng linh hoạt mọi lúc mọi nơi từ điện thoại.
3. **Tận dụng tối đa các mô hình kinh tế & mạnh mẽ** - Chi phí rẻ, tốc độ xử lý nhanh (DeepSeek, Qwen, Kimi, GLM cùng OpenAI, Claude, Gemini).
4. **Hệ thống ca thực chiến phong phú** - Hơn 70 quy trình làm việc hoàn chỉnh, áp dụng được ngay vào thực tế.
5. **Tích hợp đa kênh giao tiếp** - Hỗ trợ sâu rộng Telegram, Discord, Lark/Feishu, WeCom, DingTalk.
6. **Bản đồ tài nguyên hoàn chỉnh** - Tài nguyên chính thức, tài nguyên cộng đồng và lộ trình học tập chi tiết.

### 📊 Quy mô giáo trình

- ✅ **15 chương chính khóa**: Khoảng 267.000 từ
- ✅ **15 phụ lục chuyên sâu**: Khoảng 141.000 từ
- ✅ **Tổng dung lượng nội dung**: Hơn 408.000 từ
- ✅ **70+ ca thực chiến**: Có thể sao chép và áp dụng ngay
- ✅ **Minh họa trực quan**: Hơn 50 ảnh chụp màn hình cấu hình chi tiết

### 🎯 Đối tượng độc giả phù hợp

- 🚀 **Cá nhân độc lập (Solopreneurs)**: Muốn một mình vận hành bằng cả một đội ngũ, tối đa hóa giá trị cá nhân.
- 🔰 **Người mới bắt đầu**: Đi từ con số không, hướng dẫn từng bước cài đặt và cấu hình.
- 💼 **Nhân sự làm việc tri thức**: Học cách ứng dụng OpenClaw để bứt phá hiệu năng làm việc hàng ngày.
- 👨‍💻 **Lập trình viên & Kỹ sư**: Tìm hiểu sâu về phát triển Skills tùy biến và tích hợp API hệ thống.
- ✍️ **Nhà sáng tạo nội dung**: Khám phá các luồng tự động hóa sáng tạo nội dung đa phương tiện.

---

## 📚 Mục lục toàn bộ giáo trình

### Phần 1: Nhập môn từ số 0 (3 chương)
- [Chương 1: OpenClaw là gì?](docs/01-basics/01-introduction.md)
- [Chương 2: Hoàn thành triển khai trong 5 phút](docs/01-basics/02-installation.md)
- [Chương 3: Gửi tin nhắn đầu tiên](docs/01-basics/03-quick-start.md)

### Phần 2: Tính năng cốt lõi (4 chương)
- [Chương 4: Quản lý tệp cục bộ](docs/02-core-features/04-file-management.md)
- [Chương 5: Cơ sở tri thức cá nhân](docs/02-core-features/05-knowledge-management.md)
- [Chương 6: Quản lý lịch trình](docs/02-core-features/06-schedule-management.md)
- [Chương 7: Luồng công việc tự động hóa](docs/02-core-features/07-automation-workflow.md)

### Phần 3: Kỹ năng nâng cao (4 chương)
- [Chương 8: Mở rộng Skills](docs/03-advanced/08-skills-extension.md)
- [Chương 9: Tích hợp đa nền tảng](docs/03-advanced/09-multi-platform-integration.md)
- [Chương 10: Tích hợp API và năng lực bên ngoài](docs/03-advanced/10-api-integration.md)
- [Chương 11: Cấu hình nâng cao (Mô hình, Bộ nhớ, Phê duyệt và Hiệu năng)](docs/03-advanced/11-advanced-configuration.md)

### Phần 4: Ca thực chiến (4 chương)
- [Chương 12: Thực chiến tối ưu năng suất cá nhân](docs/04-practical-cases/12-personal-productivity.md)
- [Chương 13: Quy trình tự động hóa nâng cao](docs/04-practical-cases/13-advanced-automation.md)
- [Chương 14: Thực chiến ứng dụng sáng tạo](docs/04-practical-cases/14-creative-applications.md)
- [Chương 15: Thực chiến vận hành công ty một người (Solopreneur)](docs/04-practical-cases/15-solo-entrepreneur-cases.md)

---

## 🔗 Tài nguyên chính thức

- **Trang chủ OpenClaw**: https://openclaw.ai
- **Tài liệu chính thức OpenClaw**: https://docs.openclaw.ai
- **GitHub Repository**: https://github.com/openclaw/openclaw
- **Quảng trường Kỹ năng ClawHub**: https://clawhub.ai
- **Tuyển tập Awesome Skills**: https://github.com/VoltAgent/awesome-openclaw-skills

## 💡 Tuyển tập ca thực chiến tiêu biểu

### 📦 Mẫu cấu hình (Sẵn sàng sử dụng)

- [Cấu hình cơ bản](examples/configs/basic-config.json)
- [Cấu hình đa mô hình](examples/configs/multi-model-config.json)
- [Cấu hình đa Agent](examples/configs/multi-agent-config.json)
- [Cấu hình Bot Lark/Feishu](examples/configs/feishu-config.json)

### 🎬 Các tình huống thực tế

- [Quản lý tệp: Tìm hóa đơn thất lạc](docs/02-core-features/04-file-management.md)
- [Quản lý tri thức: Lưu trữ và tóm tắt bài viết web](docs/02-core-features/05-knowledge-management.md)
- [Quản lý lịch trình: Nhận diện ảnh chụp màn hình tạo sự kiện](docs/02-core-features/06-schedule-management.md)
- [Tự động hóa: Giám sát thay đổi trang web](docs/02-core-features/07-automation-workflow.md)

---

## 📊 So sánh chi phí giải pháp

| Phương án | Chi phí ước tính hàng tháng | Tình huống phù hợp |
|------|--------|----------|
| Lark / Feishu Miaoda | **Miễn phí** | Khuyến nghị cho người mới |
| Triển khai Cloud (VPS) | ~70.000đ - 180.000đ | Không có máy tính chạy liên tục 24/7 |
| Triển khai máy cục bộ | 0đ | Đã có sẵn máy tính cá nhân |
| Chi phí API (DeepSeek) | ~20.000đ - 100.000đ | Nhu cầu sử dụng thông thường hàng ngày |
| Chi phí API (Kimi / Qwen) | ~35.000đ - 180.000đ | Xử lý tài liệu và ngữ cảnh dài |

💡 **Mẹo tiết kiệm chi phí**: Tận dụng các mô hình AI tối ưu về chi phí như DeepSeek hoặc Qwen để tiết kiệm từ **50% đến 70%** ngân sách so với các gói thương mại thông thường.

---

## 🤝 Hướng dẫn đóng góp

Chúng tôi luôn chào đón mọi đóng góp về kinh nghiệm, sửa lỗi bản dịch và bổ sung ca thực hành từ cộng đồng!

1. Fork kho tài liệu này
2. Tạo nhánh tính năng mới (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Đẩy lên nhánh của bạn (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📮 Thông tin tác giả & Kênh liên hệ nguyên tác

### Mạng xã hội của tác giả nguyên tác
- **GitHub**: [@xianyu110](https://github.com/xianyu110)
- **Chuyên mục CSDN**: [OpenClaw từ nhập môn đến tinh thông](https://blog.csdn.net/xianyu120)
- **Kênh Bilibili**: [@MaynorAI](https://space.bilibili.com/399102586)
- **YouTube**: [@buguniao537](https://www.youtube.com/@buguniao537)
- **X (Twitter)**: [@Nikitka_aktikiN](https://x.com/Nikitka_aktikiN)

### Dự án liên quan
- **Dự án Clawbot**: [700+ Stars](https://github.com/xianyu110/clawbot)
- **Cộng đồng AI hơn 20.000 thành viên**

---

## 📈 Lịch sử phiên bản & Tiến độ cập nhật

- ✅ **v1.12** (10/09/2026): Đồng bộ OpenClaw `v2026.9.3`, cập nhật README / hướng dẫn cài đặt nâng cấp / di chuyển định tuyến mô hình / Doctor / chuẩn hóa các chương cốt lõi, bổ sung `updates/2026-09-10-v2026.9.3.md`.
- ✅ **v1.11** (18/06/2026): Đồng bộ phiên bản ổn định OpenClaw `v2026.6.8`, cập nhật lệnh nâng cấp, nền tảng phiên bản và mô tả mô hình/kênh/usage/search.
- ✅ **v1.10** (16/04/2026): Viết lại các chương `10~15` theo phiên bản ổn định OpenClaw `v2026.4.14`, đồng bộ lại cấu trúc mục lục và hướng dẫn.
- ✅ **v1.9** (04/04/2026): Cập nhật tích hợp WeChat ClawBot, công cụ Tencent, kênh trình duyệt, GLM-5-Turbo và báo cáo bảo mật.
- ✅ **v1.6** (18/03/2026): Bổ sung hướng dẫn triển khai một chạm trên 8 nền tảng.
- 🔄 **Đang triển khai**: Tiếp tục rà soát, bản địa hóa trọn vẹn và kiểm tra chéo các ca thực chiến cho cộng đồng người dùng Việt Nam.

---

## 📄 Giấy phép mã nguồn

Dự án này được phát hành theo giấy phép [GPL-3.0 License](LICENSE).

### ⚠️ Tuyên bố bản quyền & Nguyên tắc chia sẻ

- ❌ **Nghiêm cấm thương mại hóa đóng gói**: Không được phép đóng gói tài liệu này để bán lại dưới bất kỳ hình thức nào.
- ❌ **Nghiêm cấm đóng mã nguồn**: Mọi sản phẩm phái sinh phát triển dựa trên dự án này đều bắt buộc phải được mở mã nguồn công khai theo chuẩn GPL-3.0.
- ✅ **Khuyến khích học tập**: Hoan nghênh mọi cá nhân học tập, nghiên cứu và áp dụng vào công việc.
- ✅ **Tự do chia sẻ**: Khuyến khích chia sẻ rộng rãi đến cộng đồng kèm trích dẫn nguồn tác giả và nhóm dịch.
- ✅ **Chỉnh sửa đóng góp**: Được phép sửa đổi, bổ sung và hoàn thiện với điều kiện giữ nguyên tính chất mã nguồn mở.

---

<div align="center">

**Cập nhật lần cuối**: Tháng 10/2026  
**Phiên bản tài liệu**: v1.12  
**Quy mô**: 408.000 từ (15 chương + 15 phụ lục)  
**Phiên bản OpenClaw áp dụng**: 2026.9.3 (Bản ổn định)  

🎉 **Tài liệu hoàn chỉnh | Cập nhật liên tục | Hoàn toàn miễn phí** 🎉  
🚀 **Một cá nhân + OpenClaw = Tiềm năng vô hạn** 🚀  
⭐ **Nếu thấy hữu ích, hãy ủng hộ một Star trên GitHub nhé!** ⭐  

</div>
