> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 11: Cấu hình Nâng cao (Mô hình, Bộ nhớ, Phê duyệt & Hiệu năng)

> Mục tiêu chương: Làm rõ những cấu hình nâng cao cốt lõi nhất trong bản ổn định OpenClaw hiện tại, bao gồm lựa chọn mô hình, cơ chế xác thực, cấu hình mô hình media mặc định, Active Memory, Memory Wiki, cũng như quy trình phê duyệt thực thi lệnh và ranh giới bảo mật hệ thống.

---

## Mốc phiên bản chuẩn

- **Phiên bản ổn định hiện tại**: `v2026.9.3` (phát hành 08/09/2026)
- Chương này mặc định viết theo phiên bản ổn định `v2026.9.3`; các cú pháp cũ như `openai-codex/*`, OpenProse hoặc `clawhub install …` chỉ nên xem như tư liệu lịch sử.

---

## Hướng dẫn định hướng nhanh cho người mới

### Chương này giải quyết vấn đề gì?

Nhiều người mới khi nhìn thấy các tệp `openclaw.json`, `models.json`, `AGENTS.md` và cơ chế provider auth thường vội vàng chỉnh sửa cấu hình thủ công ngay lập tức. Hậu quả phổ biến là:

- Không nắm được giá trị cấu hình nào đang thực sự có hiệu lực
- Chỉnh sửa file nhưng mô hình mặc định thực tế vẫn không thay đổi
- Nhầm lẫn chồng chéo giữa xác thực (auth), mô hình dự phòng (fallbacks) và mô hình media

Chương này sẽ giúp bạn bóc tách và phân định rành mạch từng phần.

### Nếu bạn chỉ muốn chạy thông suốt cấu hình, hãy đọc theo thứ tự:

- **Đọc mục `11.1` trước**: Nắm rõ lộ trình cấu hình chuẩn được khuyến nghị
- **Xem tiếp mục `11.2`**: Thiết lập thông suốt mô hình chính, mô hình fallback và cơ chế xác thực
- **Xem mục `11.3`**: Phân biệt rạch ròi giữa mô hình hội thoại và mô hình media
- **Đọc kỹ mục `11.6`**: Hiểu rõ ranh giới an toàn, tránh cấu hình sai luồng phê duyệt lệnh

### Điều kiện tiên quyết tối thiểu trước khi bắt đầu

Bạn chưa cần phải hiểu hết mọi trường JSON phức tạp, nhưng cần đảm bảo:

1. Đã chạy qua trình thiết lập `openclaw onboard`
2. Tối thiểu có một provider đã đăng nhập xác thực thành công
3. Có thói quen dùng lệnh CLI kiểm tra trạng thái trước khi quyết định can thiệp thủ công vào file cấu hình

### 3 lỗi người mới dễ mắc phải nhất

- Vội vàng chỉnh sửa trực tiếp tệp JSON mà không kiểm tra qua `models status` trước
- Đánh đồng `imageModel` (mô hình nhìn ảnh) và `imageGenerationModel` (mô hình vẽ ảnh) là một
- Thấy có quá nhiều tùy chọn cấu hình rồi nghĩ rằng "phải điền hết mới là đầy đủ"

---

## 11.1 Lộ trình cấu hình chuẩn: Chạy hướng dẫn trước, tinh chỉnh sau

Kể từ sau cột mốc 2026.4, quy trình cấu hình nâng cao chuẩn không phải là "sửa chay file JSON", mà là:

1. `openclaw onboard`
2. `openclaw models auth add|login`
3. `openclaw models status|list|set`
4. Chỉ can thiệp thủ công vào `openclaw.json` / `models.json` khi thật sự cần thiết

Các câu lệnh khởi động ngắn gọn nhất:

```bash
openclaw onboard
openclaw models status
openclaw models list
openclaw models set openai/gpt-5.4
```

Nếu bạn chưa rõ cấu hình hiện tại đang nhận giá trị nào, hãy chạy lệnh kiểm tra thực tế, đừng đoán mò:

```bash
openclaw models status --probe
openclaw status
```

### Dấu hiệu nhận biết cấu hình đang ở trạng thái khỏe mạnh

Nếu xuất hiện các dấu hiệu sau, cấu hình của bạn đã sẵn sàng để tối ưu sâu hơn:

- Lệnh `openclaw models status` hiển thị rõ `primary` và danh sách `fallbacks`
- Lệnh `openclaw models status --probe` không báo lỗi provider mất kết nối hay token hết hạn
- Lệnh `openclaw status` không có lỗi nghiêm trọng gây nghẽn ở tầng Gateway hoặc Auth

Lệnh `models status --probe` sẽ gửi yêu cầu thăm dò thực tế (có thể tiêu tốn một lượng nhỏ token), nhưng đây là cách chuẩn xác nhất để xác nhận:

- Token xác thực có còn hạn hay không
- Provider nhìn thấy trong danh sách có thực sự gọi được không
- Các mô hình chính và dự phòng cuối cùng phân giải (resolve) ra mã định danh nào

---

## 11.2 Cấu hình mô hình và xác thực chuẩn xác hiện nay

### 11.2.1 Hiểu rõ 3 tầng quan hệ cốt lõi

Cấu hình mô hình của OpenClaw hiện nay được quy về 3 tầng rõ ràng:

1. **Mô hình chính (Primary Model)**: `agents.defaults.model.primary`
2. **Mô hình dự phòng (Fallbacks)**: `agents.defaults.model.fallbacks`
3. **Trạng thái xác thực & Provider**: Quản lý thông qua `models auth`, biến môi trường và auth profile

### 11.2.2 Các câu lệnh thường dùng

Nếu mới tiếp cận, bạn có thể nhóm các lệnh theo 4 mục đích chính:

- `status` / `list`: Nắm bắt hiện trạng cấu hình
- `set`: Thiết lập mô hình chính
- `fallbacks add`: Thêm phương án dự phòng khi mô hình chính gặp sự cố
- `auth login`: Xử lý dứt điểm tình trạng "thấy provider nhưng không dùng được"

```bash
# Xem trạng thái hiện tại
openclaw models status
openclaw models list

# Thiết lập mô hình chính
openclaw models set openai/gpt-5.4

# Bổ sung danh sách mô hình dự phòng (Fallback)
openclaw models fallbacks add anthropic/claude-sonnet-4-5
openclaw models fallbacks add google/gemini-2.5-pro

# Thiết lập mô hình dự phòng cho việc đọc hiểu hình ảnh
openclaw models set-image openai/gpt-4.1-mini
openclaw models image-fallbacks add google/gemini-2.5-pro
```

### 11.2.3 Những thay đổi quan trọng về Provider cần lưu ý

Căn cứ theo ghi chú phát hành chính thức (`2026.8.1` OpenClaw 2.0 → `v2026.9.3`):

- **Từ bản `2026.8.1` trở đi**: Toàn bộ phiên hội thoại và biên bản chat được chuyển sang lưu trữ bằng SQLite; hãy sao lưu thư mục `~/.openclaw` trước khi nâng cấp.
- **Di chuyển định tuyến OpenAI (Thay đổi có tính phá vỡ - Breaking)**: Các tiền tố cũ như `codex/*`, `openai-codex/*` bắt buộc phải chuyển sang định dạng chuẩn `openai/*`; hãy chạy `openclaw doctor --fix` để tự động sửa chữa.
- **Loại bỏ OpenProse (Breaking)**: Plugin tích hợp OpenProse và lệnh `/prose` đã bị gỡ bỏ; dọn dẹp cấu hình cũ bằng lệnh `openclaw doctor --fix`, trường hợp cần thiết hãy cài đặt Agent Skill thượng nguồn theo hướng dẫn chính thức.
- **Bản `v2026.9.3`**: Cơ chế chạy thử (dry-run) và khôi phục khi cập nhật ổn định hơn; Skill Workshop chuyển sang lưu trữ bộ sưu tập theo từng Agent riêng biệt; yêu cầu phiên bản Node.js nâng lên **24.16+ / 26.1+**.
- Danh mục mã định danh mô hình cụ thể nên căn cứ theo đầu ra của `openclaw models list` hoặc thư viện Control UI, tránh sao chép các mã mô hình cũ đã dừng hỗ trợ.

Nếu bạn xây dựng quy trình làm việc chuyên về lập trình (coding workflow), các provider ưu tiên hiện nay gồm:

- `openai/...` (Đăng ký ChatGPT/Codex hoặc gọi API trực tiếp; đăng nhập bằng `models auth login --provider openai`)
- `anthropic/...`
- `google/...`

### 11.2.4 Lời khuyên về phương thức xác thực

```bash
# Thêm xác thực provider qua giao diện tương tác
openclaw models auth add

# Khởi chạy đăng nhập trực tiếp cho một provider cụ thể
openclaw models auth login --provider openai --set-default
openclaw models auth login --provider anthropic --method cli --set-default
```

Nếu bạn sử dụng provider tự host cục bộ hoặc endpoint tương thích chuẩn OpenAI, hãy đảm bảo:

- `baseUrl` truy cập thông suốt
- API key đã được truyền vào
- Chỉ kích hoạt `models.providers.*.request.allowPrivateNetwork` trong môi trường mạng nội bộ tin cậy

---

## 11.3 Cấu hình mô hình Media mặc định: Không gộp chung ảnh, video và âm nhạc

Hệ thống của OpenClaw tách bạch rất rành mạch giữa "mô hình hội thoại" và "mô hình sinh nội dung media". Bạn cần phân biệt tối thiểu 5 cấu hình mặc định sau:

- `agents.defaults.model`: Mô hình suy luận hội thoại chính
- `agents.defaults.imageModel`: Mô hình đọc hiểu hình ảnh (Vision)
- `agents.defaults.imageGenerationModel`: Mô hình tạo ảnh
- `agents.defaults.videoGenerationModel`: Mô hình tạo video
- `agents.defaults.musicGenerationModel`: Mô hình tạo âm nhạc

Mẫu cấu hình tham khảo chuẩn:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "openai/gpt-5.4",
        "fallbacks": [
          "anthropic/claude-sonnet-4-5",
          "google/gemini-2.5-pro"
        ]
      },
      "imageModel": {
        "primary": "openai/gpt-4.1-mini"
      },
      "imageGenerationModel": {
        "primary": "openai/gpt-image-1"
      },
      "videoGenerationModel": {
        "primary": "google/veo-3.1-fast-generate-preview",
        "fallbacks": [
          "qwen/wan2.6-r2v-flash"
        ]
      },
      "musicGenerationModel": {
        "primary": "google/lyria-3-clip-preview"
      }
    }
  }
}
```

Một số điểm cần lưu ý:

1. `imageModel` chỉ đóng vai trò dự phòng thị giác khi mô hình chính không thể trực tiếp xử lý hình ảnh đầu vào.
2. `imageGenerationModel` được dành riêng cho công cụ tạo ảnh `image_generate`.
3. `videoGenerationModel` và `musicGenerationModel` chỉ tác động lên các công cụ tạo media chia sẻ dùng chung.
4. Nếu bạn không khai báo tường minh, OpenClaw sẽ cố gắng tự động suy đoán dựa trên các provider đã đăng nhập, tuy nhiên trong môi trường production không nên phụ thuộc hoàn toàn vào cơ chế tự suy đoán này.

---

## 11.4 Active Memory: Cho phép bộ nhớ chủ động can thiệp trước phản hồi

Một trong những cải tiến cốt lõi từ bản `v2026.4.12` là **plugin Active Memory** đã trở thành tính năng chủ đạo chính thức: Trước khi trả lời, hệ thống sẽ chạy một sub-agent bộ nhớ giới hạn, dùng `memory_search` / `memory_get` để kéo về các sở thích, ngữ cảnh và sự kiện lịch sử liên quan đến cuộc trò chuyện hiện tại.

### 11.4.1 Cấu hình khởi đầu chuẩn

```json
{
  "plugins": {
    "entries": {
      "active-memory": {
        "enabled": true,
        "config": {
          "agents": ["main"],
          "allowedChatTypes": ["direct"],
          "modelFallbackPolicy": "default-remote",
          "queryMode": "recent",
          "promptStyle": "balanced",
          "timeoutMs": 15000,
          "maxSummaryChars": 220,
          "persistTranscripts": false,
          "logging": true
        }
      }
    }
  }
}
```

### 11.4.2 Khi nào nên bật, khi nào không nên bật?

**Nên bật trong trường hợp**:

- Trợ lý cá nhân trong chat riêng tư (direct message), mối quan hệ tương tác dài hạn
- Cộng tác với tần suất cao, lặp đi lặp lại
- Cần ghi nhớ thói quen, phong cách làm việc và ngữ cảnh cá nhân

**Không nên bật mặc định khi**:

- Worker tự động hóa hoàn toàn
- Tác vụ gọi API một lần duy nhất
- Pipeline xử lý dữ liệu yêu cầu tính tất định nghiêm ngặt (deterministic)
- Tình huống không muốn ngữ cảnh cá nhân hóa ngầm làm sai lệch định dạng đầu ra

### 11.4.3 Cách gỡ lỗi (Debugging)

```bash
openclaw memory status --deep
```

Trong cuộc trò chuyện, bạn có thể gõ `/verbose on` để theo dõi dòng trạng thái của Active Memory. Khi tinh chỉnh hiệu năng, hãy bắt đầu từ các tham số trọng yếu sau:

- `queryMode`
- `promptStyle`
- `timeoutMs`
- `maxSummaryChars`

---

## 11.5 Memory Wiki: Biến trí nhớ dài hạn thành "tầng tri thức dễ bảo trì"

`memory-wiki` là plugin tích hợp chính thức của OpenClaw. Plugin này **không sinh ra để thay thế memory-core**, mà dùng để biên dịch bộ nhớ dài hạn thành một tầng wiki có cấu trúc, đặc biệt phù hợp cho:

- Đúc kết tri thức dự án
- Tổng hợp hồ sơ khách hàng / thông tin sản phẩm
- Tra soát và giải quyết các điểm xung đột tri thức
- Các tác vụ nghiên cứu kéo dài theo nhiều tuần, nhiều tháng

### 11.5.1 Cách hiểu chuẩn xác theo tài liệu chính thức

- **memory-core / QMD / dreaming**: Phụ trách trích xuất (recall), nâng hạng thông tin (promotion), tìm kiếm (search) và tái cấu trúc ban đêm (dreaming)
- **memory-wiki**: Phụ trách biên dịch các ký ức bền bỉ (durable memory) thành các trang wiki có thể điều hướng, đi kèm các luận điểm và bằng chứng (claim/evidence) có cấu trúc

### 11.5.2 Mẫu cấu hình khuyên dùng

```json
{
  "plugins": {
    "entries": {
      "memory-wiki": {
        "enabled": true,
        "config": {
          "vaultMode": "isolated",
          "vault": {
            "path": "~/.openclaw/wiki/main",
            "renderMode": "obsidian"
          },
          "bridge": {
            "enabled": false,
            "readMemoryArtifacts": true,
            "indexDreamReports": true,
            "indexDailyNotes": true,
            "indexMemoryRoot": true,
            "followMemoryEvents": true
          },
          "ingest": {
            "autoCompile": true,
            "maxConcurrentJobs": 1,
            "allowUrlIngest": true
          },
          "search": {
            "backend": "shared",
            "corpus": "wiki"
          },
          "context": {
            "includeCompiledDigestPrompt": false
          },
          "render": {
            "preserveHumanBlocks": true,
            "createBacklinks": true,
            "createDashboards": true
          }
        }
      }
    }
  }
}
```

### 11.5.3 Các câu lệnh thường dùng

```bash
openclaw wiki init
openclaw wiki status
openclaw wiki compile
openclaw wiki lint
openclaw wiki search "customer onboarding"
openclaw wiki get entity.alpha
```

Quy trình làm việc chuẩn:

1. Đảm bảo memory-core chạy ổn định trước
2. Bật plugin `memory-wiki`
3. Mặc định ưu tiên chế độ `isolated`
4. Chỉ bật `bridge` khi bạn thực sự có nhu cầu dựng wiki từ các artifact bộ nhớ sẵn có

---

## 11.6 Phê duyệt thực thi lệnh, An toàn & Ranh giới máy chủ riêng

### 11.6.1 Không chỉ nhìn vào `exec`, phải đồng bộ file phê duyệt và tool policy

Từ bản `v2026.4.12`, OpenClaw bổ sung lệnh `exec-policy` cục bộ nhằm đồng bộ giữa cấu hình `tools.exec.*` và tệp phê duyệt trên máy. Tuy nhiên khi triển khai thực tế, bạn cần hiểu rõ sự phối hợp của 3 tầng:

1. Cấu hình `tools.exec.*` trong tệp cấu hình
2. Tệp phê duyệt quyền thực thi `~/.openclaw/exec-approvals.json`
3. Tool policy và danh sách cho phép (allowlist) của từng agent

Các câu lệnh kiểm tra thực tế hữu ích nhất:

```bash
openclaw exec-policy show
openclaw approvals get
openclaw approvals get --gateway
```

Nếu bạn cần cấp quyền cố định cho một số câu lệnh an toàn vào danh sách allowlist:

```bash
openclaw approvals allowlist add "~/Projects/**/bin/rg"
openclaw approvals allowlist add --agent main "/usr/bin/uname"
```

### 11.6.2 Nguyên tắc an toàn cốt lõi cho Hook và Webhook

- Tách biệt rõ ràng giữa Hook token và Gateway token
- Tuyệt đối không để lộ hook trực tiếp tại đường dẫn gốc `/`
- Giữ `hooks.path` ở một đường dẫn con riêng biệt
- Định tuyến Webhook chỉ nên gắn với phạm vi `sessionKey` tối thiểu cần thiết
- Lưu trữ Secret ưu tiên qua cơ chế `env` / `file` / `exec`, không ghi cứng vào mã nguồn Git

### 11.6.3 Cấu hình mạng riêng (Private Network) cho Provider tự lưu trữ

Từ bản `v2026.4.12`, hệ thống bổ sung tùy chọn `models.providers.*.request.allowPrivateNetwork` để dỡ bỏ giới hạn khi bạn cần kết nối đến các provider trong mạng nội bộ tin cậy. Tùy chọn này rất hữu ích, nhưng **chỉ nên áp dụng cho các dịch vụ mạng riêng mà bạn nắm toàn quyền kiểm soát**.

Trường hợp áp dụng thích hợp:

- Máy chủ LM Studio hoặc endpoint tương thích OpenAI tự dựng trong nhà
- Tầng proxy nội bộ trong mạng LAN công ty
- Gateway suy luận nằm trong mạng VPN / Tailscale (Tailnet)

Trường hợp KHÔNG nên sử dụng:

- Địa chỉ proxy mở tùy tiện ngoài Internet công cộng
- Gateway chia sẻ không rõ nguồn gốc
- Các endpoint nằm trong môi trường proxy hỗn tạp thiếu ranh giới bảo mật rõ ràng

---

## 11.7 Tinh chỉnh hiệu năng: Những điểm trọng tâm cần lưu ý

### 11.7.1 Tối ưu cấu trúc trước, tinh chỉnh tham số sau

Trình tự mang lại hiệu quả cao nhất luôn là:

1. Thiết lập rõ ràng mô hình chính và chuỗi dự phòng (fallbacks)
2. Tách biệt riêng các mô hình chuyên biệt cho media
3. Bật Active Memory và Memory Wiki khi có nhu cầu thực tế
4. Cuối cùng mới tinh chỉnh các thông số như thinking token, context window và số lượng fallback

### 11.7.2 Lưu ý dành cho người dùng mô hình cục bộ

Trong bản thử nghiệm `v2026.4.15-beta.1` từng có tùy chọn thử nghiệm cho mô hình cục bộ:

```json
{
  "agents": {
    "defaults": {
      "experimental": {
        "localModelLean": true
      }
    }
  }
}
```

Tùy chọn này giúp lược bỏ bớt các công cụ nặng mặc định khi chạy mô hình cục bộ cấu hình yếu, giảm đáng kể độ dài của prompt. **Lưu ý đây là tính năng beta lịch sử**. Trên bản ổn định `v2026.9.3`, hãy kiểm tra kỹ tài liệu cấu hình chính thức và lệnh `openclaw config schema`, không nên sao chép bừa bãi vào môi trường sản xuất.

### 11.7.3 Trình tự kiểm tra toàn diện được khuyến nghị

```bash
openclaw status
openclaw models status --probe
openclaw memory status --deep
openclaw wiki status
openclaw approvals get
openclaw security audit
```

---

## 11.8 Lời khuyên thực hành

Nếu bạn đang thiết lập một môi trường OpenClaw sử dụng lâu dài và ổn định, hãy tuân thủ trình tự sau:

1. Cấu hình hoàn chỉnh `models auth`, mô hình chính và chuỗi dự phòng (fallbacks)
2. Cấu hình riêng rẽ các mô hình tạo ảnh, video và âm thanh
3. Chỉ bật Active Memory khi cần một trợ lý gắn bó và cá nhân hóa sâu
4. Chỉ bật Memory Wiki khi cần xây dựng tầng tri thức dự án có cấu trúc
5. Cuối cùng, thắt chặt phê duyệt lệnh thực thi (exec approvals), tách bạch token và thiết lập ranh giới mạng riêng an toàn

---

## 11.9 Tài liệu tham khảo chính thức

- GitHub Releases: https://github.com/openclaw/openclaw/releases
- Models CLI: https://docs.openclaw.ai/cli/models
- Khái niệm về Mô hình: https://docs.openclaw.ai/concepts/models
- Inference CLI: https://docs.openclaw.ai/cli/infer
- Active Memory: https://docs.openclaw.ai/concepts/active-memory
- Memory Wiki: https://docs.openclaw.ai/plugins/memory-wiki
- Quản lý Phê duyệt Thực thi: https://docs.openclaw.ai/cli/approvals
