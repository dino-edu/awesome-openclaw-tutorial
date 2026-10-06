# Kế Hoạch Thực Thi Dịch Thuật Toàn Bộ Repository Sang Tiếng Việt

> **Dành cho kỹ sư/agent thực thi:** KỸ NĂNG BẮT BUỘC: Sử dụng `superpowers:subagent-driven-development` (khuyến nghị cho khối lượng lớn) hoặc `superpowers:executing-plans` để thực thi từng nhiệm vụ (task). Các bước sử dụng cú pháp checkbox (`- [ ]`) để theo dõi tiến độ.

**Mục tiêu:** Bản địa hóa 100% repository Awesome OpenClaw Tutorial sang tiếng Việt tự nhiên, chuẩn kỹ thuật cho cộng đồng công nghệ Việt Nam, thay thế trực tiếp (in-place) toàn bộ tài liệu, giao diện web Jekyll và công cụ tìm kiếm.

**Kiến trúc:** Dịch tuần tự theo mô hình phân lớp (Layered Localization): bắt đầu từ Hạ tầng Web & Giao diện $\rightarrow$ Lộ trình & Nền tảng $\rightarrow$ Tính năng cốt lõi $\rightarrow$ Nâng cao $\rightarrow$ Thực chiến $\rightarrow$ Phụ lục & Tutorials $\rightarrow$ Tái tạo chỉ mục tìm kiếm và QA toàn diện.

**Tech Stack:** Jekyll, Markdown (GFM/kramdown), Python 3 (scripts sinh index), HTML/CSS/JavaScript (Giao diện Cayman tùy biến).

**Tài liệu đặc tả (Spec):** `docs/superpowers/specs/2026-10-06-vietnamese-translation-plan.md`

## Ràng Buộc Chung (Global Constraints)

- **Nguyên tắc In-place**: Giữ nguyên toàn bộ cấu trúc thư mục, tên tệp `.md`, tên ảnh và đường dẫn liên kết tương đối để không làm hỏng routing của GitHub Pages.
- **Bảo toàn mã nguồn**: Tuyệt đối không dịch hoặc làm biến dạng các khối lệnh code (`bash`, `json`, `yaml`, `javascript`, `python`), lệnh CLI (`openclaw ...`), tham số và biến môi trường.
- **Chuẩn hóa thuật ngữ**: Bắt buộc tuân thủ bảng thuật ngữ quy chuẩn tại Mục 2.2 của file Spec (ví dụ: AI Agent, Gateway, Solopreneur, Prompt, Task Flow, Active Memory).
- **Văn phong**: Xưng hô "bạn - chúng ta", văn phong kỹ thuật gãy gọn, trong sáng, loại bỏ hoàn toàn các cấu trúc câu dịch máy thô cứng.
- **Bản địa hóa có chọn lọc**: Loại bỏ các đoạn quảng bá mua sách giấy JD.com của Trung Quốc; bổ sung lời mở đầu bản dịch cộng đồng; chú thích các nền tảng chat Trung Quốc (Feishu/Lark, DingTalk, WeCom).

## Trọng Tâm Rà Soát (Review Focus)

1. **Khối lệnh bị dịch nhầm**: Các lệnh CLI hoặc chuỗi JSON bị dịch sang tiếng Việt làm người dùng gõ theo bị lỗi cú pháp $\rightarrow$ Kiểm tra tự động bằng script quét code block.
2. **Anchor Links bị đứt gãy**: Tiêu đề các mục cấp 2, cấp 3 đổi sang tiếng Việt làm các liên kết nội bộ `#11-...` trong cùng file hoặc khác file bị 404 $\rightarrow$ Chạy kiểm tra liên kết.
3. **Regex trích xuất tiêu đề tìm kiếm**: Script `scripts/generate_search_index.py` chỉ bắt regex tiếng Trung `第X章` mà bỏ qua `Chương X` $\rightarrow$ Thêm regex hỗ trợ tiếng Việt.
4. **Ký tự tiếng Trung sót lại trong giao diện**: Các nút bấm, breadcrumbs, placeholder tìm kiếm trong `_layouts/default.html` và `search.md` chưa được dịch hết $\rightarrow$ Quét regex chữ Hán trên tệp HTML/JS.
5. **Định dạng bảng và Markdown**: Bảng so sánh API và bảng tham chiếu lệnh bị vỡ cột do độ dài ký tự tiếng Việt $\rightarrow$ Kiểm tra preview markdown.

---

### Task 1: Bản Địa Hóa Hạ Tầng, Cấu Hình Jekyll & Giao Diện Web

**Tệp tin:**
- Sửa đổi: `_config.yml`
- Sửa đổi: `_layouts/default.html`
- Sửa đổi: `search.md`
- Sửa đổi: `search-enhanced.md`
- Sửa đổi: `scripts/generate_search_index.py`
- Kiểm tra: `tests/test_search_regex.py` (tạo script kiểm tra regex)

**Giao diện:**
- Cung cấp: Cấu hình Jekyll, nhãn menu navigation tiếng Việt, UI tìm kiếm, script indexer cập nhật regex tiếng Việt.

- [ ] **Bước 1: Viết test kiểm tra regex trích xuất tiêu đề tiếng Việt cho script search index**

Tạo `tests/test_search_regex.py`:
```python
import re

def test_chapter_title_extraction():
    patterns = r'^(?:第[\dIVX]+章|Chương\s+[\dIVX\d]+)[：:]\s*'
    raw_title = "Chương 1: Giới thiệu về OpenClaw"
    cleaned = re.sub(patterns, '', raw_title).strip()
    assert cleaned == "Giới thiệu về OpenClaw"
```

- [ ] **Bước 2: Chạy test để xác nhận regex hiện tại của script bị thiếu**

Chạy: `python3 -m pytest tests/test_search_regex.py` hoặc chạy trực tiếp bằng python.

- [ ] **Bước 3: Cập nhật `_config.yml` sang tiếng Việt**

Thay đổi các mục `title`, `description`, và danh sách `navigation`:
- `首页` $\rightarrow$ `Trang chủ`
- `搜索` $\rightarrow$ `Tìm kiếm`
- `快速开始` $\rightarrow$ `Bắt đầu nhanh`
- `核心功能` $\rightarrow$ `Tính năng cốt lõi`
- `进阶应用` $\rightarrow$ `Ứng dụng nâng cao`
- `实战案例` $\rightarrow$ `Ca thực chiến`
- `附录` $\rightarrow$ `Phụ lục`
- `国产Claw选购` $\rightarrow$ `Chọn lựa giải pháp thay thế`
- `Skills生态` $\rightarrow$ `Hệ sinh thái Skills`
- `安全指南` $\rightarrow$ `Hướng dẫn an toàn`

- [ ] **Bước 4: Bản địa hóa giao diện `_layouts/default.html`**

Dịch các nhãn UI:
- `aria-label="面包屑导航"` $\rightarrow$ `aria-label="Điều hướng breadcrumb"`
- `📑 目录` $\rightarrow$ `📑 Mục lục`
- `aria-label="返回顶部"` $\rightarrow$ `aria-label="Về đầu trang"`
- `aria-label="切换主题"` $\rightarrow$ `aria-label="Chuyển đổi giao diện sáng/tối"`
- Placeholder tìm kiếm: `🔍 搜索教程内容...` $\rightarrow$ `🔍 Tìm kiếm nội dung giáo trình...`
- Nút bấm: `搜索` $\rightarrow$ `Tìm kiếm`, `🏠 首页` $\rightarrow$ `🏠 Trang chủ`, `🚀 安装` $\rightarrow$ `🚀 Cài đặt`, `⚡ 快速开始` $\rightarrow$ `⚡ Bắt đầu nhanh`, `📋 命令速查` $\rightarrow$ `📋 Tra cứu lệnh`.
- Cập nhật footer ghi nhận bản dịch tiếng Việt của cộng đồng.

- [ ] **Bước 5: Bản địa hóa `search.md` và `search-enhanced.md`**

Dịch toàn bộ placeholder, thông báo trạng thái tìm kiếm ("Đang tải chỉ mục...", "Tìm thấy X kết quả cho từ khóa...", "Không tìm thấy kết quả phù hợp").

- [ ] **Bước 6: Cập nhật `scripts/generate_search_index.py`**

Sửa đổi regex trong hàm `extract_title` để hỗ trợ định dạng `# Chương 1: ...` và `# Phụ lục A: ...`.

- [ ] **Bước 7: Kiểm tra lại và Commit**

```bash
git add _config.yml _layouts/default.html search.md search-enhanced.md scripts/generate_search_index.py tests/
git commit -m "feat(i18n): localize Jekyll infrastructure, navigation, and search UI to Vietnamese"
```

---

### Task 2: Bản Địa Hóa Trang Chủ & Lộ Trình Học Tập

**Tệp tin:**
- Sửa đổi: `README.md`
- Sửa đổi: `index.md`
- Sửa đổi: `LEARNING-PATH.md`

**Giao diện:**
- Tiêu chuẩn hóa trang bìa, bảng mục lục tổng quan, lộ trình học tập từ cơ bản đến chuyên sâu cho độc giả Việt Nam.

- [ ] **Bước 1: Dịch `README.md`**
  - Chuyển đổi tiêu đề và mô tả: "Awesome OpenClaw Tutorial - Giáo trình OpenClaw toàn diện cho cá nhân độc lập".
  - Chuyển đổi phần thông tin phiên bản `v2026.9.3`.
  - Thay thế phần quảng cáo sách giấy Trung Quốc bằng lời giới thiệu bản dịch tiếng Việt, mục tiêu cộng đồng và hướng dẫn đóng góp.
  - Dịch bảng so sánh phiên bản, lưu ý nâng cấp `openclaw doctor --fix`.
  - Dịch bảng mục lục toàn bộ 15 chương và hệ thống phụ lục.

- [ ] **Bước 2: Dịch `index.md`**
  - Trang chủ của Jekyll site: chuyển đổi toàn bộ thẻ giới thiệu (hero section), danh mục tính năng, các đường link điều hướng nhanh đến từng phần của giáo trình.

- [ ] **Bước 3: Dịch `LEARNING-PATH.md`**
  - Dịch lộ trình học theo vai trò: Người mới bắt đầu (Beginner), Lập trình viên (Developer), Nhà sáng tạo nội dung (Creator), Cá nhân vận hành độc lập (Solopreneur).

- [ ] **Bước 4: Kiểm tra và Commit**

```bash
git add README.md index.md LEARNING-PATH.md
git commit -m "docs(i18n): translate README, index, and LEARNING-PATH to Vietnamese"
```

---

### Task 3: Phần 1 - Nhập Môn & Nền Tảng (Chương 1 đến 3)

**Tệp tin:**
- Sửa đổi: `docs/01-basics/01-introduction.md` (~422 dòng)
- Sửa đổi: `docs/01-basics/02-installation.md` (~3.391 dòng)
- Sửa đổi: `docs/01-basics/03-quick-start.md` (~1.095 dòng)

- [ ] **Bước 1: Dịch `docs/01-basics/01-introduction.md`**
  - Dịch định nghĩa OpenClaw: AI Gateway mã nguồn mở kết nối công cụ và ứng dụng chat.
  - Lịch sử đổi tên (Clawdbot $\rightarrow$ Moltbot $\rightarrow$ OpenClaw).
  - Các trụ cột cốt lõi: Bộ nhớ dài hạn, Task Flow, Media Generation, CLI `infer`.
  - Giữ nguyên các hình ảnh minh họa kiến trúc.

- [ ] **Bước 2: Dịch `docs/01-basics/02-installation.md`**
  - Hướng dẫn cài đặt Node.js 26+, npm/pnpm.
  - Các bước cài đặt trên macOS (Homebrew), Ubuntu/Debian, Windows (WSL2/PowerShell).
  - Lệnh kiểm tra hệ thống `openclaw doctor --fix`.
  - Giữ nguyên 100% các khối lệnh shell, flags và đường dẫn thư mục cài đặt.

- [ ] **Bước 3: Dịch `docs/01-basics/03-quick-start.md`**
  - Khởi tạo lần đầu với `openclaw onboard`.
  - Cấu hình API key đầu tiên, kiểm tra phản hồi từ CLI và chat bot.

- [ ] **Bước 4: Kiểm tra và Commit**

```bash
git add docs/01-basics/
git commit -m "docs(i18n): translate Part 1 Basics (Chapters 1-3) to Vietnamese"
```

---

### Task 4: Phần 2 - Tính Năng Cốt Lõi (Chương 4 đến 7)

**Tệp tin:**
- Sửa đổi: `docs/02-core-features/04-file-management.md` (~697 dòng)
- Sửa đổi: `docs/02-core-features/05-knowledge-management.md` (~403 dòng)
- Sửa đổi: `docs/02-core-features/06-schedule-management.md` (~1.021 dòng)
- Sửa đổi: `docs/02-core-features/07-automation-workflow.md` (~1.065 dòng)

- [ ] **Bước 1: Dịch `docs/02-core-features/04-file-management.md`**
  - Cơ chế quản lý file cục bộ, quyền hạn đọc ghi trong workspace.
- [ ] **Bước 2: Dịch `docs/02-core-features/05-knowledge-management.md`**
  - Quản lý cơ sở tri thức cá nhân: Active Memory, Dreaming (Light, Deep, REM), Memory Wiki.
- [ ] **Bước 3: Dịch `docs/02-core-features/06-schedule-management.md`**
  - Tác vụ định kỳ Cron jobs, quản lý nhắc nhở, lập lịch tự động.
- [ ] **Bước 4: Dịch `docs/02-core-features/07-automation-workflow.md`**
  - Xây dựng Task Flow nhiều bước, bắt sự kiện qua Webhook, tự động khôi phục khi lỗi.
- [ ] **Bước 5: Kiểm tra và Commit**

```bash
git add docs/02-core-features/
git commit -m "docs(i18n): translate Part 2 Core Features (Chapters 4-7) to Vietnamese"
```

---

### Task 5: Phần 3 - Ứng Dụng Nâng Cao & Tài Liệu Bổ Trợ (Chương 8 đến 11 + `docs/*.md`)

**Tệp tin:**
- Sửa đổi: `docs/03-advanced/08-skills-extension.md` (~322 dòng)
- Sửa đổi: `docs/03-advanced/09-multi-platform-integration.md` (~4.566 dòng)
- Sửa đổi: `docs/03-advanced/10-api-integration.md` (~300+ dòng)
- Sửa đổi: `docs/03-advanced/11-advanced-configuration.md` (~500+ dòng)
- Sửa đổi: `docs/03-advanced/feishu-checklist.md`
- Sửa đổi: `docs/api-key-config-guide.md`, `docs/config-file-structure.md`, `docs/search-guide.md`, `docs/skills-ecosystem.md`

- [ ] **Bước 1: Dịch `08-skills-extension.md`**
  - Hướng dẫn viết Custom Skills bằng JavaScript, API hooks và sandbox an toàn.
- [ ] **Bước 2: Dịch `09-multi-platform-integration.md` & `feishu-checklist.md`**
  - Tích hợp chi tiết: Lark/Feishu, DingTalk, WeCom, Telegram, Discord.
  - Chú thích rõ cách thiết lập Webhook URL và phân quyền ứng dụng bot.
- [ ] **Bước 3: Dịch `10-api-integration.md` & `11-advanced-configuration.md`**
  - Tích hợp nhà cung cấp mô hình (OpenAI, Anthropic, DeepSeek, Qwen, v.v.).
  - Cấu hình SQLite session, tối ưu bộ nhớ đệm, bảo mật network gateway.
- [ ] **Bước 4: Dịch 4 file tài liệu chuyên đề độc lập trong `docs/`**
- [ ] **Bước 5: Kiểm tra và Commit**

```bash
git add docs/03-advanced/ docs/*.md
git commit -m "docs(i18n): translate Part 3 Advanced (Chapters 8-11) and standalone guides to Vietnamese"
```

---

### Task 6: Phần 4 - Ca Thực Chiến & Thư Mục Mẫu `examples/` (Chương 12 đến 15)

**Tệp tin:**
- Sửa đổi: `docs/04-practical-cases/12-personal-productivity.md` (~300 dòng)
- Sửa đổi: `docs/04-practical-cases/13-advanced-automation.md` (~400 dòng)
- Sửa đổi: `docs/04-practical-cases/14-creative-applications.md` (~300 dòng)
- Sửa đổi: `docs/04-practical-cases/15-solo-entrepreneur-cases.md` (~300 dòng)
- Sửa đổi: `examples/README.md`, các file cấu hình và chú thích script trong `examples/`

- [ ] **Bước 1: Dịch `12-personal-productivity.md`**: Trợ lý đọc báo, tóm tắt tài liệu, quản lý email.
- [ ] **Bước 2: Dịch `13-advanced-automation.md`**: Giám sát website, sao lưu tự động, báo cáo ngày.
- [ ] **Bước 3: Dịch `14-creative-applications.md`**: ComfyUI pipeline, sinh ảnh đa mô hình, voice TTS.
- [ ] **Bước 4: Dịch `15-solo-entrepreneur-cases.md`**: Xây dựng trợ lý kinh doanh cho cá nhân độc lập (Solopreneur).
- [ ] **Bước 5: Bản địa hóa `examples/`**: Dịch `examples/README.md` và các ghi chú tiếng Trung trong các file mẫu json/sh/js.
- [ ] **Bước 6: Kiểm tra và Commit**

```bash
git add docs/04-practical-cases/ examples/
git commit -m "docs(i18n): translate Part 4 Practical Cases (Chapters 12-15) and examples to Vietnamese"
```

---

### Task 7: Hệ Thống Phụ Lục Kỹ Thuật (Phụ lục A đến N)

**Tệp tin:**
- Sửa đổi: `appendix/A-command-reference.md`
- Sửa đổi: `appendix/B-skills-catalog.md`
- Sửa đổi: `appendix/C-api-comparison.md`
- Sửa đổi: `appendix/D-community-resources.md`
- Sửa đổi: `appendix/E-common-problems.md`
- Sửa đổi: `appendix/E-config-templates.md`
- Sửa đổi: `appendix/F-best-practices.md`, `appendix/F-video-tutorials.md`, `appendix/G-links-validation.md`
- Sửa đổi: `appendix/H-config-templates.md`, `appendix/I-thinking-questions-answers.md`, `appendix/J-feishu-checklist.md`, `appendix/J-tencent-deep-dive.md`
- Sửa đổi: `appendix/K-api-key-config-guide.md`, `appendix/L-config-file-structure.md`, `appendix/M-search-guide.md`, `appendix/N-skills-ecosystem.md`

- [ ] **Bước 1: Dịch nhóm phụ lục lệnh & cấu hình (A, B, C, E, H, L)**
  - Đảm bảo tra cứu lệnh CLI chuẩn xác từng cờ tham số.
- [ ] **Bước 2: Dịch nhóm phụ lục xử lý lỗi & thực hành tốt nhất (D, F, G, I, J, K, M, N)**
- [ ] **Bước 3: Kiểm tra và Commit**

```bash
git add appendix/
git commit -m "docs(i18n): translate all Appendixes (A through N) to Vietnamese"
```

---

### Task 8: Hướng Dẫn Bổ Trợ `tutorials/`

**Tệp tin:**
- Sửa đổi: `tutorials/COST-CALCULATOR.md`
- Sửa đổi: `tutorials/Openclaw史上最简单教程，小白一键部署.md`
- Sửa đổi: `tutorials/jvsclaw部署.md`
- Sửa đổi: `tutorials/宝塔面版claw.md`

- [ ] **Bước 1: Dịch bảng tính chi phí `COST-CALCULATOR.md`** (chuyển đổi đơn vị tiền tệ hoặc quy đổi VND/USD rõ ràng).
- [ ] **Bước 2: Dịch các bài hướng dẫn triển khai nhanh** (Triển khai 1-click cho người mới, triển khai trên panel quản trị máy chủ).
- [ ] **Bước 3: Kiểm tra và Commit**

```bash
git add tutorials/
git commit -m "docs(i18n): translate standalone tutorials to Vietnamese"
```

---

### Task 9: Tái Tạo Chỉ Mục Tìm Kiếm, Rà Soát Liên Kết & QA Toàn Bộ Dự Án

**Tệp tin:**
- Sinh mới: `search-index.json`, `search-index-expanded.json`
- Script kiểm tra: `scripts/check-links.sh`, `scripts/check-format.sh`

- [ ] **Bước 1: Chạy script tạo chỉ mục tìm kiếm tiếng Việt**
  ```bash
  python3 scripts/generate_search_index.py
  ```
  Xác nhận `search-index.json` chứa các từ khóa và tiêu đề tiếng Việt.

- [ ] **Bước 2: Quét kiểm tra liên kết nội bộ đứt gãy**
  Chạy kiểm tra link giữa các chương để đảm bảo không có đường dẫn hỏng.

- [ ] **Bước 3: Quét kiểm tra ký tự tiếng Trung sót lại trong các file Markdown chính**
  ```bash
  python3 -c "
  import glob, re
  files = glob.glob('docs/**/*.md', recursive=True) + glob.glob('appendix/*.md')
  chinese_re = re.compile(r'[\u4e00-\u9fa5]')
  found = 0
  for f in files:
      with open(f, 'r', encoding='utf-8') as fp:
          content = fp.read()
          # Loại bỏ các link hoặc credit nếu cố ý giữ lại
          matches = chinese_re.findall(content)
          if len(matches) > 10:
              print(f'{f}: {len(matches)} Chinese characters remaining')
              found += 1
  print(f'Total files with remaining Chinese text: {found}')
  "
  ```

- [ ] **Bước 4: Kiểm tra trạng thái Git và Commit hoàn tất**

```bash
git add search-index.json search-index-expanded.json
git commit -m "chore: rebuild search index for Vietnamese documentation and complete QA verification"
```
