> 📖 **Giáo trình Awesome OpenClaw Tutorial** | Bản dịch tiếng Việt chính thức cho cộng đồng. Nguyên tác thuộc về tác giả [@xianyu110](https://github.com/xianyu110).

# Chương 2: Thiết lập môi trường

> Chương này sẽ hướng dẫn bạn từng bước cài đặt và vận hành OpenClaw.

> ⚠️ **Phiên bản chuẩn**: Tính đến **10/09/2026**, giáo trình khuyến nghị sử dụng **OpenClaw v2026.9.3 (Bản ổn định, phát hành 08/09/2026)**. Yêu cầu môi trường runtime **Node 24.16+** hoặc **Node 26.1+** (khuyên dùng Node 26); Node 22 và các bản 24.x cũ không còn được hỗ trợ.

![Giao diện cài đặt OpenClaw](https://upload.maynor1024.live/file/1771085321300_installation-interface.png)

## 📋 Điều kiện tiên quyết & Cấu hình đề xuất

### Cấu hình đề xuất

Để có trải nghiệm tối ưu nhất, chúng tôi đề xuất:

**Hệ điều hành**:
- 🍎 **Mac (Khuyến nghị cao nhất)**: Khả năng tương thích tự nhiên tốt nhất, điều khiển được lịch hẹn (Calendar), ghi chú (Notes), chụp màn hình và các tính năng sâu của hệ thống
- 🪟 Windows: Hoạt động hoàn toàn ổn định qua WSL2, nhưng một số tích hợp sâu bị giới hạn
- 🐧 Linux: Rất phù hợp cho lập trình viên, cấu hình linh hoạt trên máy chủ

**Nền tảng ứng dụng nhắn tin (IM)**:
- 🌍 **Người dùng quốc tế**: Khuyên dùng **Telegram** hoặc **Discord** (hỗ trợ bot tốt nhất, tính năng trọn vẹn)
- 🚀 **Doanh nghiệp & Đội ngũ**: Khuyên dùng **Lark / Feishu** (hiện đại, thân thiện với lập trình viên, hỗ trợ rich text mạnh mẽ)
- Lựa chọn thay thế: WeCom (WeChat Doanh nghiệp), DingTalk, QQ, WhatsApp

**Phương thức triển khai**:
- 💻 **Có máy Mac**: Khuyên dùng triển khai cục bộ (trải nghiệm mượt mà, tính năng đầy đủ nhất)
- ☁️ **Không có Mac hoặc muốn chạy 24/7**: Khuyên dùng triển khai đám mây (VPS chi phí thấp, ổn định không phụ thuộc máy cá nhân)

### Vì sao nên ưu tiên Mac?

OpenClaw mang lại trải nghiệm tuyệt vời nhất trên macOS bởi:
- ✅ Tương thích tự nhiên, mức độ tích hợp hệ thống cao nhất
- ✅ Thao tác mượt mà với Apple Calendar, Apple Notes, Reminders
- ✅ Tính năng chụp màn hình tự động hoàn hảo
- ✅ Đồng bộ hóa liền mạch với iPhone, iPad
- ✅ Quản lý tệp tin thông minh
- ✅ Môi trường phát triển tinh gọn, dễ cấu hình

### Vì sao nên chọn Lark / Feishu?

- ✅ Thiết kế hiện đại, trải nghiệm người dùng vượt trội
- ✅ Thân thiện với lập trình viên, hệ thống Open API hoàn chỉnh
- ✅ Hỗ trợ định dạng văn bản giàu tính năng (Rich Text), bảng tính, tài liệu
- ✅ Đẩy thông báo tức thì, ổn định
- ✅ Bản miễn phí cung cấp đầy đủ tính năng cần thiết

### Vì sao nên chọn Telegram?

- ✅ Lượng người dùng toàn cầu đông đảo
- ✅ Hệ sinh thái Bot API hoàn thiện và mạnh mẽ nhất
- ✅ Tốc độ gửi và nhận tin nhắn theo thời gian thực
- ✅ Bảo vệ quyền riêng tư cá nhân xuất sắc

## Điều hướng nhanh

**Lộ trình khuyến nghị**:
- 🍎 **Có máy Mac** → [Triển khai cục bộ trên Mac](#mac-triển-khai-cục-bộ-khuyến-nghị) + [Cấu hình Bot](../03-advanced/09-multi-platform-integration.md)
- ☁️ **Không có Mac / Cần chạy 24/7** → [Triển khai một chạm trên đám mây](#triển-khai-một-chạm-trên-đám-mây) + [Cấu hình Bot](../03-advanced/09-multi-platform-integration.md)

**Tất cả phương thức triển khai**:
- 🍎 [Triển khai cục bộ trên Mac (Khuyến nghị)](#mac-triển-khai-cục-bộ-khuyến-nghị)
- 🪟 [Triển khai cục bộ trên Windows](#windows-triển-khai-cục-bộ)
- 🐧 [Triển khai cục bộ trên Linux](#linux-triển-khai-cục-bộ)
- 🚀 [Triển khai một chạm trên đám mây](#triển-khai-một-chạm-trên-đám-mây)
- 🇨🇳 [Cài đặt nhanh qua script](#cài-đặt-nhanh-qua-script-nội-địa-khuyến-nghị)
- ☁️ [Triển khai Cloudflare Workers (Nâng cao)](#triển-khai-cloudflare-workers-nâng-cao)
- 🐳 [Triển khai Docker (Tùy chọn)](#triển-khai-docker-tùy-chọn)

**Hướng dẫn cấu hình**:
- 🔑 [Hướng dẫn cấu hình API](#hướng-dẫn-cấu-hình-api)
- 🔄 [Hướng dẫn nâng cấp phiên bản 2.X](#hướng-dẫn-nâng-cấp-phiên-bản-2x)
- ❓ [Xử lý các sự cố thường gặp](#xử-lý-các-sự-cố-thường-gặp)

---

## Mac triển khai cục bộ (Khuyến nghị)

> 🍎 **Trải nghiệm tối ưu**: Nếu bạn sở hữu máy Mac, chúng tôi nhiệt liệt khuyến nghị cài đặt trực tiếp trên máy cục bộ để tận hưởng trải nghiệm mượt mà và tính năng phong phú nhất!

### Vì sao nên chọn triển khai cục bộ trên Mac?

**Ưu thế**:
- ✅ **Tích hợp sâu hệ thống**: Tương tác trực tiếp với Lịch, Ghi chú, Lời nhắc, hệ thống tệp
- ✅ **Bảo mật & Quyền riêng tư**: Dữ liệu lưu hoàn toàn trên máy bạn, không gửi lên cloud bên thứ ba
- ✅ **Tốc độ phản hồi cực nhanh**: Chạy trực tiếp trên máy, không chịu độ trễ mạng
- ✅ **Tính năng toàn diện nhất**: Hỗ trợ đầy đủ tất cả tính năng nâng cao
- ✅ **Không tốn chi phí máy chủ**: Không cần thuê thêm máy chủ đám mây VPS
- ✅ **Thân thiện với lập trình viên**: Dễ dàng gỡ lỗi và tùy biến mã nguồn

**Đối tượng phù hợp**:
- Người dùng máy tính Mac (MacBook, Mac Mini, Mac Studio, iMac)
- Người đặc biệt đề cao sự riêng tư của dữ liệu cá nhân
- Người cần tự động hóa các thao tác ứng dụng trên macOS
- Lập trình viên và người đam mê công nghệ

### Yêu cầu hệ thống

**Yêu cầu phần cứng**:
- CPU: Chip Apple Silicon (M1/M2/M3/M4) hoặc Intel Core i5 trở lên
- RAM: Tối thiểu 8GB (khuyên dùng 16GB trở lên)
- Ổ cứng: Tối thiểu 10GB dung lượng trống

**Phiên bản hệ điều hành**:
- macOS 12 Monterey trở lên
- Khuyên dùng macOS 14 Sonoma hoặc macOS 15 Sequoia

**Phần mềm tiên quyết**:
- Node.js 26 (khuyên dùng) hoặc Node 24.16+ (sẽ được tự động cài đặt nếu thiếu)
- Homebrew (tùy chọn, dùng để quản lý các gói phụ trợ)

### Các bước cài đặt

#### Bước 1: Mở ứng dụng Terminal

1. Nhấn tổ hợp phím `Command + Space` để mở Spotlight
2. Nhập `Terminal`
3. Nhấn `Enter` để mở cửa sổ dòng lệnh

![Cách mở Terminal trên Mac - Tìm kiếm Spotlight](https://upload.maynor1024.live/file/1770742238798_07-select-quickstart.png)

#### Bước 2: Cài đặt OpenClaw

Chạy dòng lệnh sau trong Terminal:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Quá trình cài đặt sẽ tự động:
- Kiểm tra môi trường hệ thống
- Tự động cài đặt Node.js (nếu máy chưa có)
- Tải về phiên bản OpenClaw mới nhất
- Cấu hình các biến môi trường cần thiết

**Thời gian dự kiến**: 2 - 5 phút

#### Bước 3: Xác minh cài đặt

Sau khi cài đặt xong, hãy kiểm tra phiên bản:

```bash
openclaw --version
```

Nếu màn hình hiển thị số phiên bản (ví dụ: `2026.9.3`), bạn đã cài đặt thành công!

#### Bước 4: Khởi tạo cấu hình ban đầu

Khởi chạy trình hướng dẫn cấu hình:

```bash
openclaw onboard
```

**Quy trình cấu hình chi tiết**:

**1. Chấp nhận cảnh báo rủi ro**:

Chọn `Yes` để tiếp tục.

![Trình hướng dẫn cài đặt - Chấp nhận cảnh báo rủi ro](https://upload.maynor1024.live/file/1770742238798_07-select-quickstart.png)

**2. Chọn chế độ khởi động**:

Khuyên chọn `QuickStart` (Khởi động nhanh):

![Trình hướng dẫn cài đặt - Chọn chế độ QuickStart](https://upload.maynor1024.live/file/1770742238798_07-select-quickstart.png)

**3. Chọn nhà cung cấp mô hình AI**:

Chọn nhà cung cấp bạn muốn sử dụng (hỗ trợ đầy đủ các mô hình quốc tế và nội địa):

![Trình hướng dẫn cài đặt - Chọn nhà cung cấp mô hình AI](https://upload.maynor1024.live/file/1770742221938_03-select-ai-provider.png)

Các gợi ý tiêu biểu:
- **Claude (Anthropic)**: Năng lực suy luận và lập trình xuất sắc nhất
- **DeepSeek**: Chi phí siêu rẻ, năng lực suy luận mạnh
- **Kimi (Moonshot AI)**: Xử lý ngữ cảnh văn bản siêu dài lên tới 2 triệu từ
- **Zhipu GLM**: Xử lý đa phương thức và ngôn ngữ tự nhiên tốt

**4. Nhập API Key**:

Dán khóa API tương ứng với nhà cung cấp bạn vừa chọn (xem thêm tại [Hướng dẫn cấu hình API](#hướng-dẫn-cấu-hình-api))

**5. Chọn nền tảng nhắn tin**:

- Nếu muốn kết nối với Lark / Feishu, WeCom, DingTalk, Telegram: chọn mục tương ứng
- Nếu tạm thời chưa muốn kết nối, chọn `None` (có thể cấu hình bổ sung bất cứ lúc nào)

![Trình hướng dẫn cài đặt - Chọn nền tảng nhắn tin](https://upload.maynor1024.live/file/1770742247561_08-select-chat-tool.png)

**6. Thiết lập cổng Gateway**:

Giữ nguyên cổng mặc định `18789`:

![Trình hướng dẫn cài đặt - Thiết lập cổng Gateway mặc định 18789](https://upload.maynor1024.live/file/1770742247410_09-port-setting.png)

**7. Chọn các Skills**:

Dùng phím cách (Space) để chọn các kỹ năng bạn muốn cài đặt, hoặc nhấn Enter để tạm bỏ qua:

![Trình hướng dẫn cài đặt - Chọn gói kỹ năng Skills cần cài đặt](https://upload.maynor1024.live/file/1770742255849_10-select-skills.png)

**8. Cấu hình API Key bổ sung**:

Nếu chưa có, chọn `no` để bỏ qua:

![Trình hướng dẫn cài đặt - Cấu hình khóa API bổ sung](https://upload.maynor1024.live/file/1770742264976_11-api-key-config.png)

**9. Bật các Hooks tự động hóa**:

Khuyên dùng kích hoạt 3 hooks mặc định (hỗ trợ điều hướng ngữ cảnh, ghi log và theo dõi phiên):

![Trình hướng dẫn cài đặt - Kích hoạt tính năng Hooks tự động hóa](https://upload.maynor1024.live/file/1770742261487_12-enable-hooks.png)

**10. Hoàn tất cấu hình**:

Sau khi thiết lập hoàn tất, hệ thống sẽ tự động khởi chạy dịch vụ Gateway và mở giao diện Web UI tại địa chỉ `http://127.0.0.1:18789/chat`.

#### Bước 5: Xác minh dịch vụ Gateway

```bash
# Kiểm tra trạng thái kết nối Gateway
openclaw channels status

# Màn hình sẽ hiển thị:
# Gateway reachable.
```

### Sử dụng hàng ngày

**Khởi động OpenClaw**:

```bash
# Khởi động dịch vụ Gateway
openclaw gateway start

# Hoặc thiết lập tự khởi động cùng hệ thống (Khuyên dùng)
openclaw gateway enable
```

**Truy cập Web UI**:

Mở trình duyệt web và truy cập: `http://127.0.0.1:18789/chat`

**Dừng dịch vụ**:

```bash
openclaw gateway stop
```

### Kết nối với Lark / Feishu (Khuyến nghị)

Sau khi cài đặt xong trên Mac, chúng tôi khuyên bạn nên kết nối với bot Lark / Feishu để có trải nghiệm thuận tiện nhất:

1. Tham khảo hướng dẫn chi tiết tại [Chương 9: Tích hợp đa nền tảng](../03-advanced/09-multi-platform-integration.md#91-cấu-hình-feishu-bot)
2. Sau khi hoàn tất cấu hình, bạn có thể trò chuyện với OpenClaw trực tiếp từ điện thoại hoặc máy tính
3. Hỗ trợ đầy đủ tin nhắn văn bản, hình ảnh, tài liệu và tập tin đa phương tiện

### Các câu hỏi thường gặp

**Q1: Quá trình cài đặt báo lỗi thiếu quyền (permission denied)?**

```bash
# Dùng sudo để cấp quyền chạy script cài đặt
curl -fsSL https://openclaw.ai/install.sh | sudo bash
```

**Q2: Làm thế nào để cập nhật OpenClaw lên bản mới nhất?**

```bash
openclaw update
```

**Q3: Làm thế nào để gỡ cài đặt hoàn toàn?**

```bash
openclaw uninstall
```

---

## Windows triển khai cục bộ

> 🪟 **Dành cho người dùng Windows**: Bạn hoàn toàn có thể chạy OpenClaw trên Windows, tuy nhiên một số tính năng thao tác hệ thống sâu sẽ bị giới hạn so với macOS.

![Kiến trúc triển khai trên Windows - Phương án WSL2+Ubuntu](https://upload.maynor1024.live/file/1770963301031_attachment_531c0e90-e8a2-469c-b6ec-b9811a55edfa_image.png)

### Yêu cầu hệ thống

**Phần cứng**:
- CPU: 2 nhân trở lên
- RAM: Tối thiểu 4GB (khuyên dùng 8GB trở lên)
- Ổ cứng: Tối thiểu 10GB dung lượng trống

**Hệ điều hành**:
- Windows 10 (bản 2004 trở lên) hoặc Windows 11

**Phần mềm tiên quyết**:
- Node.js 26 (khuyên dùng) hoặc Node 24.16+

### Lựa chọn phương thức triển khai

Trên Windows có hai phương thức chính:

1. **WSL2 + Ubuntu (Khuyến nghị cao nhất)**: Phương thức chính thức được khuyên dùng, cung cấp môi trường Linux hoàn chỉnh và độ ổn định cao nhất.
2. **PowerShell gốc (Native PowerShell)**: Chạy trực tiếp trong Windows, phù hợp cho người không muốn cài đặt máy ảo WSL2.

---

### Phương án 1: Triển khai qua WSL2 + Ubuntu (Khuyến nghị cao nhất)

Đây là phương thức tối ưu nhất cho môi trường Windows, đảm bảo tính tương thích và ổn định tuyệt đối với các thư viện mã nguồn mở.

#### Bước 1: Kích hoạt WSL2

**Mở PowerShell với quyền Quản trị viên (Run as Administrator)** và thực thi các lệnh:

```powershell
# Bật tính năng WSL trên Windows
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# Thiết lập WSL 2 làm phiên bản mặc định
wsl --set-default-version 2
```

**Khởi động lại máy tính** để áp dụng thay đổi.

#### Bước 2: Cài đặt bản phân phối Ubuntu

**Cách 1: Cài đặt từ Microsoft Store (Khuyên dùng)**

1. Mở Microsoft Store
2. Tìm kiếm từ khóa "Ubuntu 22.04 LTS" hoặc "Ubuntu 24.04 LTS"
3. Nhấp "Get" (Nhận) để tải về và cài đặt
4. Khởi chạy Ubuntu lần đầu, thiết lập tên tài khoản và mật khẩu người dùng theo hướng dẫn trên màn hình

#### Bước 3: Cập nhật hệ thống Ubuntu

Trong cửa sổ dòng lệnh Ubuntu WSL2, chạy các lệnh sau:

```bash
# Cập nhật danh sách gói phần mềm
sudo apt update && sudo apt upgrade -y

# Cài đặt các công cụ cơ bản
sudo apt install -y curl git wget build-essential
```

#### Bước 4: Cài đặt Node.js

```bash
# Thêm kho lưu trữ NodeSource (khuyên dùng Node 24 hoặc Node 26)
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -

# Cài đặt Node.js
sudo apt install -y nodejs

# Xác minh phiên bản
node -v
npm -v
```

#### Bước 5: Cài đặt OpenClaw

Chạy script cài đặt tự động:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

#### Bước 6: Xác minh cài đặt

```bash
# Kiểm tra phiên bản
openclaw --version

# Xem hướng dẫn trợ giúp
openclaw --help

# Kiểm tra trạng thái hệ thống
openclaw status
```

#### Bước 7: Cấu hình truy cập dịch vụ WSL2 từ Windows

Vì OpenClaw chạy bên trong WSL2, bạn có thể dễ dàng truy cập giao diện Web từ trình duyệt Windows.

**Tạo script khởi động nhanh** `start-openclaw.bat`:

```batch
@echo off
echo Starting OpenClaw Gateway in WSL2...
wsl -d Ubuntu-22.04 -u root service openclaw start
timeout /t 3
start http://localhost:18789
```

Hoặc khởi chạy thủ công ngay trong cửa sổ WSL2:

```bash
# Trong cửa sổ terminal WSL2 Ubuntu
openclaw gateway run --port 18789
```

Sau đó, mở trình duyệt trên Windows và truy cập địa chỉ `http://localhost:18789`.

---

### Phương án 2: Triển khai trực tiếp qua PowerShell (Native)

Phương án này dành cho người dùng muốn chạy trực tiếp trên môi trường Windows mà không cài đặt WSL2.

#### Bước 1: Cài đặt Node.js

1. Truy cập trang chủ Node.js: https://nodejs.org/
2. Tải về bản cài đặt Windows (LTS - Node 24 hoặc Node 26)
3. Chạy trình cài đặt, tích chọn ô "Automatically install the necessary tools"

#### Bước 2: Xác minh cài đặt Node.js

Mở PowerShell và kiểm tra:

```powershell
node -v
npm -v
```

#### Bước 3: Cài đặt OpenClaw với quyền Quản trị viên

**Lưu ý quan trọng**: Bắt buộc phải mở PowerShell bằng quyền **Run as Administrator**.

```powershell
# Cài đặt phiên bản ổn định mới nhất
npm install -g openclaw@latest --allow-scripts=openclaw

# Hoặc cài đặt bản gói quốc tế / nội địa hóa
npm install -g @qingchencloud/openclaw-zh@latest
```

#### Bước 4: Xử lý quyền thực thi tập lệnh trên PowerShell

Nếu gặp lỗi về chính sách bảo mật thực thi tập lệnh (Execution Policy):

```powershell
# Phương án A: Cho phép thực thi script cho người dùng hiện tại
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Phương án B: Đổi đường dẫn cài đặt npm toàn cục
npm config set prefix "C:
pm"
npm config set cache "C:
pm-cache"

# Thêm đường dẫn vào biến môi trường PATH
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:
pm", "User")
```

#### Bước 5: Xác minh cài đặt

```powershell
openclaw --version
openclaw --help
```

#### Bước 6: Xử lý các lỗi thường gặp trên Windows

**Sự cố: Lỗi tải mô-đun sharp**

```powershell
# Xóa sạch bộ nhớ đệm của npm
npm cache clean --force

# Cài đặt lại với cờ force
npm install -g openclaw@latest --allow-scripts=openclaw --force
```

**Sự cố: Windows Defender chặn hoạt động**

Thêm các đường dẫn cài đặt của OpenClaw vào danh sách loại trừ (Exclusions) của Windows Defender:

```
C:\Users\Tên_Người_Dùng\AppData\Roaming\npm
C:\Users\Tên_Người_Dùng\.openclaw
```

---

### Khởi tạo cấu hình ban đầu

Sau khi cài đặt xong, hãy chạy trình hướng dẫn khởi tạo:

#### Chạy trình hướng dẫn khởi tạo

```bash
openclaw onboard --install-daemon
```

#### Cấu hình nhà cung cấp mô hình AI

OpenClaw cần kết nối với mô hình AI để xử lý thông tin.

**Ví dụ cấu hình Anthropic Claude (Khuyên dùng):**

> 📖 **Xem thêm**: Hướng dẫn chi tiết về thứ tự ưu tiên và cách thiết lập khóa tại [Hướng dẫn đầy đủ về cấu hình API Key](../api-key-config-guide.md).

```bash
# Chạy trong WSL2 hoặc PowerShell
openclaw models auth add
# Chọn nhà cung cấp: anthropic
# Nhập khóa xác thực: sk-ant-xxx
```

#### Liên kết kênh nhắn tin

**1. Telegram**

Tạo Bot:
1. Mở ứng dụng Telegram, tìm tài khoản `@BotFather`
2. Gửi lệnh `/newbot` để tạo bot mới
3. Lưu lại mã Bot Token được cấp

Cấu hình vào OpenClaw:

```bash
openclaw channels add telegram
openclaw config set channels.telegram.botToken "YOUR_BOT_TOKEN"
openclaw gateway restart
```

**2. WhatsApp**

```bash
# Đăng nhập WhatsApp (hiển thị mã QR)
openclaw channels login whatsapp

# Dùng ứng dụng WhatsApp trên điện thoại quét mã QR
```

**3. WeCom (WeChat Doanh nghiệp)**

```bash
# Cài đặt tiện ích WeCom
openclaw plugins install @m1heng-clawd/wework

# Cấu hình thông số ứng dụng
openclaw config set channels.wework '{"enabled":true,"corpId":"xxx","agentSecret":"xxx"}' --json
```

**4. Lark / Feishu**

```bash
# Cài đặt tiện ích Feishu
openclaw plugins install @m1heng-clawd/feishu

# Cấu hình App ID và App Secret
openclaw config set channels.feishu '{"enabled":true,"appId":"cli_xxx","appSecret":"xxx"}' --json
```

### Bảng tra cứu lệnh thông dụng trên Windows

**Quản trị hệ thống**:

| Lệnh | Chức năng |
|------|------|
| `openclaw --version` | Kiểm tra phiên bản |
| `openclaw status` | Kiểm tra trạng thái hệ thống |
| `openclaw health` | Kiểm tra sức khỏe dịch vụ (Health Check) |
| `openclaw update` | Nâng cấp OpenClaw |
| `openclaw doctor` | Chẩn đoán và phát hiện sự cố |

**Quản lý cấu hình**:

| Lệnh | Chức năng |
|------|------|
| `openclaw onboard` | Trình hướng dẫn cấu hình ban đầu |
| `openclaw configure` | Giao diện cấu hình tương tác |
| `openclaw config get <key>` | Xem giá trị một mục cấu hình |
| `openclaw config set <key> <value>` | Thiết lập giá trị cấu hình |
| `openclaw config unset <key>` | Xóa mục cấu hình |

---

## Linux triển khai cục bộ

> 🐧 **Dành cho người dùng Linux**: Lựa chọn hoàn hảo cho lập trình viên và máy chủ riêng, cấu hình tùy biến linh hoạt cao.

### Yêu cầu hệ thống

**Các bản phân phối khuyến nghị**:
- Ubuntu 20.04 LTS / 22.04 LTS / 24.04 LTS
- Debian 11 / 12
- CentOS Stream 8 / 9, Rocky Linux, AlmaLinux

### Các bước cài đặt

#### Bước 1: Cài đặt Node.js

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

# Xác minh cài đặt
node --version
```

#### Bước 2: Cài đặt OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

#### Bước 3: Xác minh cài đặt

```bash
openclaw --version
```

#### Bước 4: Khởi tạo cấu hình ban đầu

```bash
openclaw onboard
```

---

## 2.1 Yêu cầu hệ thống & Chuẩn bị

### Điều kiện để triển khai trên đám mây

Nếu lựa chọn triển khai trên máy chủ đám mây (Cloud VPS), bạn **không cần cài đặt gì trên máy tính cá nhân**, chỉ cần:
- ✅ Một trình duyệt web bất kỳ
- ✅ Chi phí khoảng 70.000 - 150.000 VNĐ/tháng cho VPS
- ✅ Khoảng 10 phút thao tác

## Triển khai một chạm trên đám mây

> 🔥 **Ngữ cảnh phù hợp**: Không có máy Mac, cần bot hoạt động 24/7 không gián đoạn, truy cập từ nhiều thiết bị khác nhau.

### Vì sao nên chọn triển khai trên đám mây?

So với cài đặt trên máy tính cá nhân, việc triển khai trên máy chủ đám mây mang lại nhiều ưu điểm rõ rệt, như thể hiện trong Bảng 2-1.

**Bảng 2-1 Lợi thế của việc triển khai trên đám mây**

| Lợi thế | Mô tả |
|------|------|
| ⚡ **Triển khai siêu tốc** | Chỉ với vài cú click chuột, không cần thiết lập môi trường máy cục bộ |
| 💰 **Chi phí hợp lý** | Chỉ từ ~70.000 VNĐ/tháng, rẻ hơn rất nhiều so với đầu tư máy tính chuyên dụng |
| 📱 **Truy cập mọi lúc mọi nơi** | Nhắn tin tương tác qua Telegram, Lark / Feishu, WeCom từ điện thoại |
| 🔒 **Hoạt động liên tục 24/7** | Vận hành bền bỉ trên máy chủ, không lo bị gián đoạn khi tắt máy tính |
| 🎥 **Tài liệu trực quan** | Có sẵn các video và tài liệu hướng dẫn từng bước chi tiết |

### So sánh các gói máy chủ đám mây phổ biến

Dưới đây là bảng đối chiếu giữa các nhà cung cấp máy chủ nhẹ (Lighthouse/ECS) phổ biến:

**Bảng 2-2 So sánh các phương án máy chủ đám mây**

| Nhà cung cấp | Mức giá tham khảo | Băng thông | Ngữ cảnh khuyến nghị |
|------|------|------|----------|
| Tencent Cloud Lighthouse | ~70.000 VNĐ/tháng (20 tệ) | 20 Mbps | Phù hợp người dùng Telegram, WeCom, QQ |
| Volcengine (ByteDance) | ~35.000 VNĐ/tháng (9.9 tệ) | 5 Mbps | Phù hợp người dùng Lark / Feishu |
| Baidu AI Cloud | Gói thử nghiệm ưu đãi | 3-5 Mbps | Phù hợp thử nghiệm ngắn hạn |
| Alibaba Cloud | Tương đương thị trường | 5-10 Mbps | Hạ tầng đám mây toàn cầu ổn định |

### Triển khai trên Tencent Cloud Lighthouse (Khuyến nghị)

#### Bước 1: Đăng ký mua máy chủ

1. **Truy cập trang chương trình**:
   ```
   https://cloud.tencent.com/act/pro/lighthouse-moltbot
   ```

2. **Lựa chọn thông số cấu hình**:
   - Cấu hình: 2 Core CPU, 2GB RAM
   - Băng thông: 20 Mbps
   - Khu vực (Region): Khuyên chọn **Silicon Valley (Mỹ)** hoặc **Singapore / Tokyo** (truy cập các API AI quốc tế như OpenAI, Claude ổn định nhất)
   - Thời hạn: Nên mua 1 tháng để trải nghiệm trước

3. **Xác minh danh tính**:
   - Hoàn tất xác minh tài khoản cá nhân theo hướng dẫn

4. **Hoàn tất thanh toán**:
   - Nhấn "Mua ngay" và hoàn tất thanh toán
   - Chờ hệ thống tự động khởi tạo máy chủ trong khoảng 1 - 2 phút

5. **Lấy thông tin kết nối máy chủ**:
   - Truy cập trang quản trị máy chủ Lighthouse
   - Ghi lại các thông tin: Địa chỉ IP công cộng (Public IP), Tên người dùng mặc định (`lighthouse`), Mật khẩu quản trị

![Giao diện quản trị Tencent Cloud Lighthouse - Tạo máy chủ](https://upload.maynor1024.live/file/1770742212222_01-tencent-cloud-server.png)

#### 💡 Chương trình trải nghiệm máy chủ miễn phí (Tùy chọn)

> Nếu muốn trải nghiệm thử 1-3 tháng miễn phí, bạn có thể tham gia chương trình tài trợ thông qua đối tác CodeBuddy.

**Các bước thực hiện**:

1. **Đăng ký tài khoản CodeBuddy**:
   - Bản quốc tế: `https://www.codebuddy.ai/` (đăng nhập bằng Google / GitHub)
   - Bản nội địa: `https://www.codebuddy.cn/` (đăng nhập bằng số điện thoại)

2. **Nhận quà tặng máy chủ**:
   - Sau khi đăng nhập, vào mục nhận quà trải nghiệm máy chủ 1 tháng
   - Tích lũy hoạt động điểm danh đủ 7 ngày để được gia hạn thêm 2 tháng

3. **Cài lại hệ điều hành thành mẫu OpenClaw**:
   - Đăng nhập bảng điều khiển máy chủ: `https://console.cloud.tencent.com/`
   - Vào mục máy chủ Lighthouse
   - Chọn "Cài lại hệ điều hành" (Reinstall OS)
   - Chọn mục mẫu ứng dụng (Application Template) → Tìm "OpenClaw"
   - Nhấn xác nhận để tự động hoàn tất

#### Bước 2: Kết nối vào máy chủ

1. **Sử dụng ứng dụng SSH client (Khuyên dùng)**:
   - Tải các ứng dụng SSH thông dụng (như Termius, Xterminal, FinalShell, PuTTY)
   - Tạo kết nối SSH mới:
     - Host: Địa chỉ IP công cộng của máy chủ
     - Port: 22
     - Username: `lighthouse`
     - Password: Mật khẩu bạn đã thiết lập

   **Hoặc sử dụng terminal nền web**:
   - Nhấp vào nút "Đăng nhập" (Login) trực tiếp trên trang quản trị đám mây để mở terminal trong trình duyệt

2. **Xác minh OpenClaw đã được cài đặt**:
   ```bash
   openclaw --version
   ```
   Nếu hiển thị phiên bản (ví dụ `2026.9.3`), OpenClaw đã sẵn sàng hoạt động!

![Hình ảnh OpenClaw image](https://upload.maynor1024.live/file/1770742213992_02-openclaw-image.png)

#### Bước 3: Cấu hình mô hình ngôn ngữ lớn (LLM)

1. **Truy cập phần quản lý ứng dụng**:
   - Nhấp vào máy chủ của bạn
   - Chuyển sang tab "Application Management" (Quản lý ứng dụng)

2. **Lựa chọn mô hình**:
   - Khuyên dùng **Kimi k2.5** hoặc **DeepSeek V3 / R1** (hiệu năng cao, chi phí tối ưu)
   - Hoặc các mô hình quốc tế như Claude, OpenAI

![Chọn nhà cung cấp AI](https://upload.maynor1024.live/file/1770742221938_03-select-ai-provider.png)

3. **Lấy API Key**:
   
   **Ví dụ với Moonshot AI (Kimi)**:
   ```
   1. Truy cập nền tảng mở: https://platform.moonshot.cn/
   2. Đăng ký / Đăng nhập tài khoản
   3. Vào mục Quản lý API (API Keys)
   4. Tạo API Key mới và sao chép mã khóa (định dạng sk-xxx)
   ```

4. **Lưu cấu hình**:
   - Dán API Key vào ô cấu hình
   - Nhấn "Lưu" (Save) và chờ hệ thống cập nhật

#### Bước 4: Kiểm tra kết nối

1. **Truy cập Web UI**:
   - Mở liên kết được cung cấp trên bảng điều khiển
   - Định dạng: `http://IP_MÁY_CHỦ:18789/?token=xxx`

2. **Gửi tin nhắn thử nghiệm**:
   ```
   Xin chào, bạn có nghe rõ tôi nói không?
   ```

![Kiểm tra đối thoại](https://upload.maynor1024.live/file/1770742223389_04-test-chat.png)

3. **Xác nhận thành công**:
   - Nếu nhận được câu trả lời từ AI, hệ thống đã vận hành hoàn hảo
   - Góc trên bên phải hiển thị tên mô hình đang sử dụng

### Ma trận sản phẩm hệ sinh thái Tencent (Cập nhật 2026)

> 💡 Vào tháng 3/2026, Tencent đã giới thiệu hệ sinh thái toàn diện xoay quanh OpenClaw. Dưới đây là định vị từng sản phẩm:

| Sản phẩm | Thể loại | Nền tảng | Trạng thái | Định vị |
|------|------|------|------|------|
| **Lighthouse** | Máy chủ Cloud | Đa nền tảng | ✅ Ổn định | Máy chủ đám mây nhẹ, tối ưu triển khai backend OpenClaw |
| **QClaw** | Ứng dụng Desktop | macOS | ✅ Public Beta | Ứng dụng desktop OpenClaw chính thức, cài đặt dùng ngay |
| **WorkBuddy** | Desktop Agent | Windows/macOS | ✅ Thử nghiệm | Trợ lý AI desktop, kết nối đa nền tảng chat đồng thời |
| **ClawBot** | Tiện ích kết nối | Đa nền tảng | ✅ Thử nghiệm | Giải pháp kết nối mở rộng cho ứng dụng chat |

**Mô hình quan hệ giữa các sản phẩm**:

```
┌─────────────────────────────────────────┐
│        Ma trận hệ sinh thái mở rộng      │
├──────────┬──────────┬───────────────────┤
│  Lighthouse │  QClaw  │    WorkBuddy      │
│(Máy chủ VPS)│(Desktop)│ (Agent đa kênh)   │
│   ↓ Triển khai ↓ Tích hợp   ↓ Tích hợp    │
│  Backend OpenClaw ───→ Nhân OpenClaw Core │
│              ↑                          │
│         ClawBot (Plugin kết nối)        │
└──────────┴──────────┴───────────────────┘
```

**Gợi ý lựa chọn**:
- **Người dùng cá nhân trên macOS**: Thử nghiệm QClaw để cài nhanh không cần cấu hình máy chủ
- **Cần kết nối đồng thời nhiều kênh nhắn tin**: Chọn WorkBuddy
- **Cần hệ thống chạy 24/7 ổn định**: Chọn máy chủ đám mây Lighthouse

### Triển khai trên Volcengine (ByteDance)

Nếu bạn chủ yếu sử dụng nền tảng Lark / Feishu, Volcengine là giải pháp tối ưu chi phí:

1. **Truy cập trang sự kiện**:
   ```
   https://www.volcengine.com/activity/clawdbot
   ```

2. **Lợi thế chi phí**:
   - Khoảng ~35.000 VNĐ/tháng (9.9 tệ/tháng)
   - Cấu hình 2 Core CPU, 2GB RAM, băng thông 5 Mbps
   - Quy trình thao tác tương tự các nền tảng đám mây khác

### Triển khai trên Baidu AI Cloud (Gói dùng thử)

1. **Truy cập trang khuyến mãi**:
   ```
   https://cloud.baidu.com/product/BCC/moltbot.html
   ```

2. **Đặc điểm**:
   - Chi phí khởi điểm cực thấp cho tháng đầu
   - Cung cấp sẵn các mô hình ERNIE / Qianfan
   - Phù hợp cho mục đích nghiên cứu ngắn hạn

### Triển khai trên Alibaba Cloud (Tùy chọn)

1. **Truy cập trang triển khai**:
   ```
   https://www.aliyun.com/activity/ecs/clawdbot
   ```

2. **Thao tác**:
   - Chọn máy chủ Simple Application Server (SAS)
   - Chọn hình ảnh hệ thống OpenClaw và tạo phiên bản

![Alibaba Cloud Server](https://upload.maynor1024.live/file/1770742237148_05-aliyun-server.png)

### Video hướng dẫn chính thức

Các hướng dẫn bằng video trực quan:
- **Triển khai OpenClaw một chạm và tích hợp WeCom / QQ**: https://cloud.tencent.com/developer/video/85003 (Thời lượng: ~10 phút)
- **Triển khai OpenClaw và kết nối Feishu / DingTalk**: https://cloud.tencent.com/developer/video/85055 (Thời lượng: ~10 phút)

### Triển khai trên máy chủ sẵn có của bạn

Nếu bạn đã có sẵn máy chủ Linux (Ubuntu/Debian):
- Thực hiện chạy script cài đặt tự động tương tự phần [Linux triển khai cục bộ](#linux-triển-khai-cục-bộ).

### Các câu hỏi thường gặp về triển khai đám mây

**Q1: Dữ liệu trên máy chủ đám mây có an toàn không?**
- ✅ Dữ liệu được lưu trữ trên phiên bản máy chủ riêng biệt của bạn
- ✅ Chỉ có bạn nắm giữ khóa SSH và mật khẩu quản trị
- ✅ Bạn có thể đặt mật khẩu mã hóa truy cập Web UI

**Q2: Tôi có thể hủy dịch vụ bất cứ lúc nào không?**
- ✅ Hoàn toàn chủ động; bạn có thể xóa hoặc tắt máy chủ bất cứ lúc nào mà không bị ràng buộc

**Q3: Làm thế nào để điều khiển từ điện thoại?**
- Kết nối bot với Telegram, Lark / Feishu hoặc Discord để nhận và gửi thông tin mọi lúc mọi nơi

---

## Cài đặt nhanh qua script nội địa (Khuyến nghị)

> 🇨🇳 **Dành cho người dùng cần tốc độ cao**: Sử dụng script cài đặt tự động với máy chủ gương (mirror), tối ưu tốc độ mạng và đi kèm giao diện thân thiện.

### Lợi thế của bộ cài đặt nhanh

Bộ cài đặt này sở hữu các ưu thế nổi bật như trình bày trong Bảng 2-3.

**Bảng 2-3 Ưu thế của bộ cài đặt nhanh**

| Ưu thế | Mô tả |
|------|------|
| ⚡ **Tốc độ cao** | Sử dụng các cụm máy chủ gương, tải gói cực nhanh |
| 🌐 **Đa ngôn ngữ** | Hỗ trợ đầy đủ giao diện tiếng Anh, tiếng Trung và hướng dẫn chi tiết |
| 📦 **Một chạm tự động** | Tự động tải và thiết lập toàn bộ các gói phụ thuộc |
| 🎯 **Dùng được ngay** | Đi kèm cấu hình định tuyến cho các nhà cung cấp phổ biến |
| 💰 **Tối ưu chi phí** | Thiết lập mặc định hướng tới các mô hình chi phí thấp |

![image-20260213122830687](https://upload.maynor1024.live/file/1770956917086_image-20260213122830687.png)

### Điều kiện tiên quyết

**Môi trường bắt buộc**:
- Node.js 26 (khuyên dùng) hoặc Node 24.16+ (bắt buộc)
- pnpm (tùy chọn, khuyến nghị nếu muốn biên dịch từ mã nguồn)

**Cấu hình khuyến nghị**:
- Khóa tìm kiếm Brave Search API (dùng cho tính năng duyệt web tự động)
- Có thể cấu hình sau qua lệnh `openclaw configure --section web`

**Hệ điều hành**:
- macOS: Cần cài đặt Xcode Command Line Tools (`xcode-select --install`)
- Windows: Bắt buộc sử dụng WSL2 (Ubuntu), không nên dùng CMD trực tiếp
- Linux: Ubuntu 20.04+, Debian 11+, CentOS Stream 8+

### Bắt đầu nhanh

#### Cài đặt trên macOS / Linux

```bash
# Sử dụng script cài đặt chính thức
curl -fsSL https://clawd.org.cn/install.sh | bash
```

#### Cài đặt trên Windows

Mở PowerShell với quyền Administrator:

```powershell
# Sử dụng script cài đặt PowerShell
iwr -useb https://clawd.org.cn/install.ps1 | iex
```

> ⚠️ **Lưu ý cho người dùng Windows**: Khuyến nghị cài đặt WSL2 (Ubuntu) để đảm bảo độ tương thích tốt nhất.

**Các bước cài đặt qua WSL2**:
```powershell
# 1. Cài đặt WSL2
wsl --install

# 2. Khởi động lại máy tính

# 3. Mở cửa sổ WSL2 Ubuntu và chạy lệnh cài đặt của Linux
curl -fsSL https://clawd.org.cn/install.sh | bash
```

#### Cài đặt toàn cục qua trình quản lý gói (Phương án thay thế)

Nếu việc chạy script tự động bị lỗi mạng, bạn có thể cài đặt toàn cục qua npm hoặc pnpm:

```bash
# Cài đặt qua npm
npm install -g openclaw-cn@latest

# Hoặc cài đặt qua pnpm (Khuyên dùng)
pnpm add -g openclaw-cn@latest
```

### Chạy trình hướng dẫn thiết lập

Sau khi cài đặt xong, hãy khởi chạy trình hướng dẫn:

```bash
# Khởi chạy trình hướng dẫn và cài đặt dịch vụ nền (daemon)
openclaw-cn onboard --install-daemon
```

### Quy trình các bước của trình hướng dẫn

Trình hướng dẫn sẽ dẫn dắt bạn qua các lựa chọn:

**1. Chọn chế độ Gateway**:
- Local Gateway (Khuyên dùng): Dịch vụ Gateway chạy trực tiếp trên máy của bạn
- Remote Gateway: Kết nối tới Gateway chạy trên máy chủ đám mây

**2. Cấu hình xác thực (Authentication)**:
- Đăng nhập tài khoản API Key cho nhà cung cấp mô hình (OpenAI, Anthropic, Google, DeepSeek...)
- Hỗ trợ thiết lập khóa API lưu trữ an toàn

**3. Lựa chọn nhà cung cấp AI**:
- Khuyên dùng: DeepSeek, Kimi, GLM-4, Qwen (chi phí cực rẻ)
- Lựa chọn cao cấp: Claude 3.5 Sonnet, GPT-4o / GPT-5

**4. Cấu hình nền tảng nhắn tin** (Tùy chọn):
- WhatsApp: Quét mã QR để liên kết
- Telegram: Nhập mã Bot Token từ BotFather
- Discord: Nhập mã Bot Token
- Lark / Feishu, WeCom, DingTalk: Nhập App ID và App Secret tương ứng

**5. Cài đặt dịch vụ nền tự khởi động (Daemon)** (Khuyên dùng):
- macOS: Quản lý bởi launchd
- Linux / WSL2: Quản lý bởi systemd
- Môi trường runtime: Node.js (khuyên dùng cho WhatsApp / Telegram)

**6. Khóa Token Gateway**:
- Trình hướng dẫn sẽ tự động tạo một chuỗi mã xác thực (Token) an toàn
- Lưu trữ trong mục `gateway.auth.token` để bảo vệ kết nối Web UI

### Lưu ý về vị trí lưu trữ xác thực

- **Đường dẫn Anthropic / Custom**: Khóa API được lưu trữ tập trung
- Hồ sơ xác thực: `~/.openclaw/agents/<agentId>/agent/auth-profiles.json`
- Thông tin OAuth (nếu dùng): `~/.openclaw/credentials/oauth.json`

### Khởi động dịch vụ Gateway

Nếu đã đăng ký dịch vụ chạy nền, Gateway sẽ tự khởi chạy:

```bash
# Kiểm tra trạng thái hoạt động của Gateway
openclaw-cn gateway status
```

**Khởi chạy thủ công ở chế độ foreground (xem log trực tiếp)**:

```bash
# Chạy ở tiền cảnh và hiển thị chi tiết log
openclaw-cn gateway --port 18789 --verbose
```

**Truy cập Dashboard**:

Địa chỉ cục bộ: `http://127.0.0.1:18789/`

Nếu có cấu hình Token bảo vệ, hãy nhập mã token vào trang cài đặt giao diện điều khiển (lưu dưới dạng `connect.params.auth.token`).

### Xác minh nhanh trong 2 phút

```bash
# Kiểm tra trạng thái chung
openclaw-cn status

# Kiểm tra sức khỏe dịch vụ
openclaw-cn health
```

### Ghép đôi & Kết nối giao diện chat

#### WhatsApp (Đăng nhập qua mã QR)

```bash
# Đăng nhập WhatsApp
openclaw-cn channels login
```
Mở ứng dụng WhatsApp trên điện thoại → Cài đặt (Settings) → Thiết bị đã liên kết (Linked Devices) → Quét mã QR hiển thị trên màn hình terminal.

#### Telegram / Discord / Kênh khác

Thêm kênh thủ công nếu không qua trình hướng dẫn:

**Telegram**:
```bash
openclaw-cn channels add \
  --channel telegram \
  --token "YOUR_BOT_TOKEN"
```

**Discord**:
```bash
openclaw-cn channels add \
  --channel discord \
  --token "YOUR_BOT_TOKEN"
```

### Cơ chế phê duyệt tin nhắn riêng (Pairing Approval)

Chính sách bảo mật mặc định: Người lạ gửi tin nhắn riêng (DM) lần đầu sẽ nhận được mã số ghép đôi (pairing code). Bot sẽ tạm thời không trả lời cho đến khi quản trị viên phê duyệt.

Để phê duyệt:

```bash
# Xem danh sách yêu cầu ghép đôi đang chờ
openclaw-cn pairing list whatsapp

# Phê duyệt mã ghép đôi
openclaw-cn pairing approve whatsapp <code>
```

### Chạy từ mã nguồn (Dành cho nhà phát triển)

Nếu bạn muốn tùy biến mã nguồn OpenClaw:

```bash
# Clone kho lưu trữ
git clone https://github.com/clawdbot/clawdbot.git
cd clawdbot

# Cài đặt phụ thuộc
pnpm install

# Build giao diện UI (tự cài đặt phụ thuộc UI ở lần đầu)
pnpm ui:build

# Biên dịch toàn bộ dự án
pnpm build

# Khởi chạy trình hướng dẫn thiết lập
openclaw-cn onboard --install-daemon
```

### Xác minh từ đầu đến cuối (End-to-End Verification)

Mở một cửa sổ dòng lệnh mới và gửi tin nhắn kiểm tra:

```bash
# Gửi tin nhắn thử nghiệm
openclaw-cn message send --target +15555550123 --message "Hello from OpenClaw"
```

**Mẹo gỡ lỗi hữu ích**:
- `openclaw-cn status --all`: Xuất báo cáo tổng quan chi tiết nhất
- `openclaw-cn health`: Lấy snapshot tình trạng sức khỏe từ Gateway
- `openclaw-cn status --deep`: Kiểm tra chuyên sâu các thành phần

### Vị trí các tệp cấu hình quan trọng

> 📖 **Xem thêm**: Cấu trúc chi tiết được trình bày tại [Hướng dẫn đầy đủ về cấu trúc tệp cấu hình](../config-file-structure.md).

```bash
# Tệp cấu hình chính
~/.openclaw/openclaw.json

# Cấu hình hồ sơ xác thực
~/.openclaw/agents/<agentId>/agent/auth-profiles.json

# Thông tin chứng chỉ OAuth cũ
~/.openclaw/credentials/oauth.json

# Tệp nhật ký ghi log
~/.openclaw/logs/gateway.log
```

### Các sự cố thường gặp

**Q1: Cài đặt thất bại do phiên bản Node.js?**

```bash
# Kiểm tra phiên bản Node (yêu cầu Node 24.16+ hoặc 26+)
node --version

# Nâng cấp nhanh qua nvm
nvm install 24
nvm use 24
```

**Q2: Làm sao để cập nhật bản mới nhất?**

```bash
# Chạy lại script cài đặt tự động
curl -fsSL https://clawd.org.cn/install.sh | bash
```

**Q3: Gỡ cài đặt hoàn toàn ra sao?**

```bash
# Dừng dịch vụ đang chạy
openclaw-cn gateway stop

# Gỡ bỏ gói npm toàn cục
npm uninstall -g openclaw-cn

# Xóa toàn bộ dữ liệu cấu hình (Tùy chọn)
rm -rf ~/.openclaw
```

---

## Triển khai Cloudflare Workers (Nâng cao)

> ☁️ **Tăng tốc mạng biên toàn cầu**: Triển khai OpenClaw thông qua Cloudflare Workers để tận hưởng mạng phân phối biên toàn cầu.

### Vì sao nên chọn Cloudflare Workers?

Mô hình Serverless trên Cloudflare Workers mang lại các lợi thế được tóm tắt trong Bảng 2-4.

**Bảng 2-4 Lợi thế của Cloudflare Workers**

| Lợi thế | Mô tả |
|------|------|
| 🌍 **Tăng tốc toàn cầu** | Vận hành trên mạng lưới biên của Cloudflare trải rộng hơn 300 thành phố |
| 💰 **Chi phí kiểm soát** | Bắt đầu từ $5/tháng với gói Workers Paid, hoạt động 24/7 |
| 🔒 **Bảo mật chuẩn doanh nghiệp** | Tích hợp sẵn xác thực Cloudflare Zero Trust (Access) |
| ⚡ **Triển khai tự động** | Dùng template một chạm, hoàn thành trong 10 phút |
| 📦 **Không cần bảo trì máy chủ** | Kiến trúc không máy chủ (Serverless), không lo vá lỗi OS |

### Điều kiện chuẩn bị

**Yêu cầu bắt buộc**:
- Tài khoản Cloudflare hoạt động bình thường
- Gói dịch vụ Cloudflare Workers Paid ($5/tháng)
- Thẻ thanh toán quốc tế (Visa / Mastercard) để kích hoạt gói dịch vụ

> 💡 **Tham khảo chi phí thực tế**: Xem chi tiết tại [Thảo luận GitHub: What's the cost running it 24/7 for a month](https://github.com/cloudflare/moltworker/issues/76).

### Các bước triển khai

#### Bước 1: Triển khai Moltworker bằng nút một chạm

1. **Truy cập đường dẫn triển khai**:
   ```
   https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/moltworker
   ```

2. **Thiết lập mã khóa Gateway Token**:
   - Bắt buộc phải thay đổi và lưu trữ an toàn biến `MOLTBOT_GATEWAY_TOKEN`
   - Đây là mã khóa duy nhất để đăng nhập trang quản trị sau này

![Triển khai Cloudflare Workers](https://upload.maynor1024.live/file/1770956993044_webp)

#### Bước 2: Chờ quá trình biên dịch (Build) hoàn tất

- Thời gian biên dịch thường mất khoảng 5 - 10 phút
- Sau khi hoàn thành, hệ thống sẽ tự động chuyển hướng về trang dự án

![Quá trình build](https://upload.maynor1024.live/file/1770956995188_webp-20260213122951843)

#### Bước 3: Cấu hình Zero Trust Access

Để truy cập giao diện quản trị an toàn, bạn cần cấu hình hai biến: `CF_ACCESS_AUD` và `CF_ACCESS_TEAM_DOMAIN`.

1. **Tạo ứng dụng trong Zero Trust**:
   - Điều hướng tới `Zero Trust` → `Access` → `Applications`
   - Chọn loại ứng dụng "Self-hosted"

![Tạo ứng dụng Access](https://upload.maynor1024.live/file/1770957006656_1770956995941_webp-20260213122946760)

2. **Cấu hình tên miền và phiên làm việc**:
   - Đặt tên miền phụ theo ý muốn hoặc dùng tên miền mặc định của Worker
   - Thiết lập Session Duration dài (ví dụ 1 tháng) để tránh phải đăng nhập lại liên tục

3. **Lấy các giá trị biến cấu hình**:
   - `CF_ACCESS_AUD`: Lấy trong phần Application Audience (AUD) sau khi lưu ứng dụng
   - `CF_ACCESS_TEAM_DOMAIN`: Trong phần Cài đặt của Zero Trust, định dạng `xxxxxx.cloudflareaccess.com`

#### Bước 4: Cấu hình kho lưu trữ đối tượng Cloudflare R2

OpenClaw cần kho R2 để duy trì trạng thái dữ liệu lâu dài. Bạn cần cấu hình 3 biến:
- `CF_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`

1. **Lấy Account ID**:
   - Truy cập mục R2 → Overview trên thanh bên Cloudflare
   - Sao chép Account ID ở khung thông tin bên phải

![Lấy Account ID](https://upload.maynor1024.live/file/1770957013012_webp-20260213123002670)

2. **Tạo mã khóa API R2 Token**:
   - Nhấp vào "Manage R2 API Tokens" → Chọn "Create API Token"
   - Phân quyền: Object Read & Write (Đọc & Ghi đối tượng)

![Phân quyền R2 Token](https://upload.maynor1024.live/file/1770957013719_webp-20260213123006410)

3. **Lưu trữ cặp khóa**:
   - Ghi lại cẩn thận Access Key ID và Secret Access Key

![Lưu trữ khóa bí mật](https://upload.maynor1024.live/file/1770957016450_webp-20260213123010373)

#### Bước 5: Thêm biến môi trường và triển khai lại

1. Vào `Workers` → `Settings` → `Variables and Secrets`
2. Nhập đầy đủ 6 biến:
   - `MOLTBOT_GATEWAY_TOKEN`
   - `CF_ACCESS_AUD`
   - `CF_ACCESS_TEAM_DOMAIN`
   - `CF_ACCOUNT_ID`
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
3. Nhấn "Deploy" để tái triển khai và áp dụng cấu hình

![Thêm biến môi trường](https://upload.maynor1024.live/file/1770957030499_webp-20260213123020335)

### Truy cập và quản trị

Sau khi triển khai xong, bạn có thể truy cập qua:

**Địa chỉ Worker** (Kèm token):
```
https://moltbot-sandbox.xxxxxxxx.workers.dev?token=MOLTBOT_GATEWAY_TOKEN
```

**Bảng quản trị Admin**:
```
https://moltbot-sandbox.xxxxxxxx.workers.dev/_admin/
```

![Trang quản trị Admin](https://upload.maynor1024.live/file/1770957055794_webp-20260213123047239)

### Các thao tác cơ bản

```bash
# Xem mô hình đang dùng
/model

# Đổi sang mô hình khác
/model minimax/MiniMax-M2.1

# Đặt lệnh tự khởi động khi Worker bật
set model minimax/MiniMax-M2.1

# Kết nối terminal từ xa tới Gateway
openclaw gateway login --url https://moltbot-sandbox.xxxxxxxx.workers.dev
```

### Kinh nghiệm phòng tránh lỗi (Troubleshooting)

- **Lỗi đổi mô hình trong tệp json không có tác dụng**: Trên môi trường Cloudflare Workers, hãy dùng lệnh `set model <tên-mô-hình>` trực tiếp trong khung chat thay vì cố sửa tệp json.
- **Worker bị lỗi build**: Tuyệt đối không thay đổi biến hệ thống `Build Token` nội bộ của Cloudflare.
- **Không vào được trang `/_admin/`**: Kiểm tra lại cấu hình Zero Trust Access và giá trị biến `CF_ACCESS_AUD`.

---

## Triển khai Docker (Tùy chọn)

> 🐳 **Lựa chọn cho lập trình viên**: Triển khai qua Docker mang lại môi trường hoàn toàn cô lập, sạch sẽ và dễ dàng di chuyển giữa các máy chủ.

### Vì sao nên chọn Docker?

Những ưu điểm nổi bật của phương thức triển khai Docker được thể hiện trong Bảng 2-5.

**Bảng 2-5 Lợi thế khi triển khai bằng Docker**

| Lợi thế | Mô tả |
|------|------|
| 🔒 **Môi trường cô lập** | Không ảnh hưởng đến các phần mềm khác trên máy tính của bạn |
| 📦 **Cài đặt trọn gói** | Tích hợp sẵn Node.js và mọi thư viện cần thiết bên trong container |
| 🔄 **Nâng cấp đơn giản** | Chỉ cần một câu lệnh để tải phiên bản mới nhất và khởi động lại |
| 🌐 **Đa nền tảng** | Cấu hình chạy đồng nhất trên Windows, macOS và máy chủ Linux |
| 🚀 **Khởi chạy tức thì** | Vận hành toàn bộ hệ thống chỉ trong vòng 5 phút |

### Điều kiện tiên quyết: Cài đặt Docker

**macOS**:
```bash
# Tải Docker Desktop từ trang chủ:
# https://www.docker.com/products/docker-desktop

# Hoặc cài đặt qua Homebrew:
brew install --cask docker
```

**Windows**:
```bash
# Tải Docker Desktop từ trang chủ:
# https://www.docker.com/products/docker-desktop

# Kích hoạt WSL2 nếu chưa bật:
wsl --install
```

**Linux (Ubuntu)**:
```bash
# Cài đặt Docker bằng script chính thức
curl -fsSL https://get.docker.com | sh

# Khởi động dịch vụ Docker
sudo systemctl start docker
sudo systemctl enable docker

# Thêm người dùng hiện tại vào nhóm docker để chạy không cần sudo
sudo usermod -aG docker $USER
```

**Xác minh cài đặt Docker**:
```bash
docker --version
# Màn hình sẽ hiển thị: Docker version 24.x.x hoặc cao hơn
```

### Bắt đầu nhanh

#### Cách 1: Sử dụng script cài đặt tự động (Khuyên dùng cho người mới)

Chỉ một dòng lệnh duy nhất để tải và thiết lập toàn bộ môi trường container:

```bash
curl -fsSL https://clawd.org.cn/install.sh | bash
```

Sau khi hoàn tất, mở trình duyệt truy cập: `http://127.0.0.1:18789/` để sử dụng.

#### Cách 2: Triển khai thủ công bằng Docker Compose (Dành cho người dùng nâng cao)

**Bước 1: Tạo thư mục làm việc**

```bash
mkdir -p ~/openclaw-docker
cd ~/openclaw-docker
```

**Bước 2: Tạo tệp biến môi trường `.env`**

```bash
cat > .env << 'EOF'
# Cấu hình hình ảnh container (Image)
OPENCLAW_IMAGE=jiulingyun803/openclaw-cn:latest

# Thư mục lưu trữ dữ liệu bền vững
OPENCLAW_CONFIG_DIR=./data/.openclaw
OPENCLAW_WORKSPACE_DIR=./data/clawd

# Cổng mạng Gateway
OPENCLAW_GATEWAY_PORT=18789
OPENCLAW_BRIDGE_PORT=18790
OPENCLAW_GATEWAY_BIND=lan
OPENCLAW_GATEWAY_TOKEN=your-secure-token-here

# Tích hợp Claude (Tùy chọn)
CLAUDE_AI_SESSION_KEY=
CLAUDE_WEB_SESSION_KEY=
CLAUDE_WEB_COOKIE=
EOF
```

**Bước 3: Tạo tệp `docker-compose.yml`**

```yaml
services:
  openclaw-cn-gateway:
    image: ${OPENCLAW_IMAGE:-jiulingyun803/openclaw-cn:latest}
    user: node:node
    environment:
      HOME: /home/node
      TERM: xterm-256color
      OPENCLAW_GATEWAY_TOKEN: ${OPENCLAW_GATEWAY_TOKEN}
      CLAUDE_AI_SESSION_KEY: ${CLAUDE_AI_SESSION_KEY}
      CLAUDE_WEB_SESSION_KEY: ${CLAUDE_WEB_SESSION_KEY}
      CLAUDE_WEB_COOKIE: ${CLAUDE_WEB_COOKIE}
    volumes:
      - ${OPENCLAW_CONFIG_DIR:-./data/.openclaw}:/home/node/.openclaw
      - ${OPENCLAW_WORKSPACE_DIR:-./data/clawd}:/home/node/clawd
    ports:
      - "${OPENCLAW_GATEWAY_PORT:-18789}:18789"
      - "${OPENCLAW_BRIDGE_PORT:-18790}:18790"
    init: true
    restart: unless-stopped
    command:
      [
        "node",
        "dist/index.js",
        "gateway",
        "--bind",
        "${OPENCLAW_GATEWAY_BIND:-lan}",
        "--port",
        "${OPENCLAW_GATEWAY_PORT:-18789}"
      ]

  openclaw-cn-cli:
    image: ${OPENCLAW_IMAGE:-jiulingyun803/openclaw-cn:latest}
    user: node:node
    environment:
      HOME: /home/node
      TERM: xterm-256color
      BROWSER: echo
      CLAUDE_AI_SESSION_KEY: ${CLAUDE_AI_SESSION_KEY}
      CLAUDE_WEB_SESSION_KEY: ${CLAUDE_WEB_SESSION_KEY}
      CLAUDE_WEB_COOKIE: ${CLAUDE_WEB_COOKIE}
    volumes:
      - ${OPENCLAW_CONFIG_DIR:-./data/.openclaw}:/home/node/.openclaw
      - ${OPENCLAW_WORKSPACE_DIR:-./data/clawd}:/home/node/clawd
    stdin_open: true
    tty: true
    init: true
    entrypoint: ["node", "dist/index.js"]
```

**Bước 4: Khởi động container**

```bash
# Tải image mới nhất
docker compose pull

# Khởi động dịch vụ Gateway chạy nền
docker compose up -d openclaw-cn-gateway

# Theo dõi nhật ký log (Tùy chọn)
docker compose logs -f openclaw-cn-gateway
```

**Bước 5: Chạy trình hướng dẫn cấu hình qua CLI**

```bash
docker compose run --rm openclaw-cn-cli onboard
```

**Bước 6: Truy cập Web UI**

Mở trình duyệt truy cập: `http://127.0.0.1:18789/` và nhập mã token để bắt đầu sử dụng.

### Giải thích chi tiết các biến môi trường

Ý nghĩa các biến môi trường trong Docker được mô tả chi tiết tại Bảng 2-6.

| Biến môi trường | Ý nghĩa | Giá trị mặc định | Bắt buộc | Ghi chú |
|------|------|--------|------|------|
| `OPENCLAW_IMAGE` | Tên image Docker | `jiulingyun803/openclaw-cn:latest` | ❌ | Có thể chỉ định tag phiên bản cụ thể |
| `OPENCLAW_CONFIG_DIR` | Thư mục lưu cấu hình | `./data/.openclaw` | ❌ | Nơi lưu cấu hình và chứng chỉ bảo mật |
| `OPENCLAW_WORKSPACE_DIR` | Thư mục không gian làm việc | `./data/clawd` | ❌ | Nơi lưu các tệp tin do Agent thao tác |
| `OPENCLAW_GATEWAY_PORT` | Cổng dịch vụ Gateway | `18789` | ❌ | Cổng dùng để truy cập giao diện Web UI |
| `OPENCLAW_BRIDGE_PORT` | Cổng dịch vụ Bridge | `18790` | ❌ | Cổng kết nối trung gian cho client |
| `OPENCLAW_GATEWAY_BIND` | Địa chỉ mạng liên kết | `lan` | ❌ | `localhost` (chỉ máy này) / `lan` (mạng nội bộ) / `0.0.0.0` (toàn mạng) |
| `OPENCLAW_GATEWAY_TOKEN` | Mã token xác thực Gateway | Tự động sinh | ❌ | Khóa bảo vệ giao diện Web UI |

### Các thao tác thường dùng với Docker

```bash
# Kiểm tra container đang chạy
docker compose ps

# Xem log trực tiếp
docker compose logs -f openclaw-cn-gateway

# Khởi động lại Gateway
docker compose restart openclaw-cn-gateway

# Tạm dừng toàn bộ dịch vụ
docker compose down

# Cập nhật phiên bản mới nhất
docker compose pull
docker compose up -d openclaw-cn-gateway
```

### Sao lưu và khôi phục dữ liệu (Data Persistence)

Toàn bộ dữ liệu được gắn kết an toàn vào thư mục `./data/` trên máy chủ:

```bash
# Sao lưu toàn bộ dữ liệu ra tệp nén
tar -czf openclaw-backup-$(date +%Y%m%d).tar.gz ./data

# Khôi phục dữ liệu từ tệp nén
tar -xzf openclaw-backup-20260210.tar.gz
```

### Xử lý các sự cố Docker thường gặp

- **Container tự thoát ngay sau khi chạy**: Kiểm tra xem cổng `18789` có bị ứng dụng khác chiếm dụng không bằng lệnh `lsof -i :18789` hoặc đổi sang cổng khác trong tệp `.env`.
- **Lỗi từ chối quyền (Permission Denied)**: Phân quyền lại thư mục dữ liệu bằng lệnh `chmod -R 777 ./data`.
- **Không vào được Web UI**: Đảm bảo tường lửa (firewall/ufw) đã mở cổng 18789 trên máy chủ.

---

## Cập nhật và Bảo trì hệ thống

> 🔄 **Luôn giữ hệ thống cập nhật**: Thường xuyên kiểm tra và nâng cấp OpenClaw để nhận các bản vá bảo mật, sửa lỗi tương thích và tính năng mới nhất.

### Kiểm tra phiên bản

```bash
# Xem phiên bản hiện tại đang cài đặt
openclaw --version

# Kiểm tra phiên bản mới nhất trên GitHub
curl -s https://api.github.com/repos/openclaw/openclaw/releases/latest | grep tag_name
```

### Nâng cấp bản cài đặt cục bộ

```bash
# Cách 1: Chạy lệnh cập nhật chính thức (Khuyên dùng)
openclaw update

# Cách 2: Cài đặt lại từ script
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Nâng cấp môi trường Docker

```bash
# Tải image mới nhất
docker pull openclaw/openclaw:latest

# Tái tạo container với image mới
docker compose down
docker compose pull
docker compose up -d
```

### Sao lưu dữ liệu định kỳ

**Sao lưu môi trường cục bộ**:
```bash
# Nén toàn bộ thư mục cấu hình và dữ liệu
tar -czf openclaw-backup-$(date +%Y%m%d).tar.gz ~/.openclaw

# Khôi phục khi cần
tar -xzf openclaw-backup-20260210.tar.gz -C ~/
```

### Giám sát và theo dõi nhật ký hoạt động

```bash
# Xem trực tiếp log hệ thống
tail -f ~/.openclaw/logs/gateway.log

# Kiểm tra trạng thái sức khỏe của Gateway
openclaw gateway status

# Kiểm tra mức độ tiêu thụ Token API
openclaw status --usage
```

---

## Hướng dẫn cấu hình API

> OpenClaw cần kết nối với mô hình AI để hoạt động. Chúng tôi khuyến nghị kết hợp giữa các mô hình hiệu năng cao (Claude, GPT) và các mô hình giá rẻ (DeepSeek, Kimi, Qwen) để đạt hiệu quả tối ưu nhất.

### Vì sao cần cấu hình API?

Bản thân OpenClaw là một Cổng kết nối Gateway và khung điều phối Agent, không chứa sẵn trọng số mô hình:
- API chính thức quốc tế (OpenAI, Anthropic): Năng lực suy luận và lập trình đỉnh cao
- API giá rẻ (DeepSeek, Qwen, Moonshot Kimi): Chi phí cực thấp, kết nối trực tiếp mượt mà

### Phân loại cấu hình mô hình API

OpenClaw hỗ trợ hai phương thức cấu hình mô hình:

#### 1. Mô hình API tích hợp sẵn (Khuyên dùng cho người mới)

Hệ thống đã định nghĩa sẵn các tham số kỹ thuật cho các mô hình thông dụng. Bạn chỉ cần:
- ✅ Lấy khóa xác thực (API Key) từ nhà cung cấp
- ✅ Chạy trình hướng dẫn `openclaw onboard` và chọn nhà cung cấp tương ứng
- ✅ Dán API Key vào là sử dụng được ngay

![Danh sách mô hình API tích hợp sẵn](https://upload.maynor1024.live/file/1770957195044__null_)

**Mô hình quốc tế tiêu biểu**:
- 🤖 **Anthropic (Claude 3.5 Sonnet / 4.6)**: Năng lực lập trình và suy luận logic cho Agent xuất sắc nhất
- 🧠 **OpenAI (GPT-4o / GPT-5)**: Năng lực toàn diện, ổn định
- 🔷 **Google (Gemini 2.0 / 3 Pro)**: Ngữ cảnh siêu dài, xử lý đa phương thức tốt

**Mô hình tối ưu chi phí (Khuyên dùng)**:
- 🚀 **DeepSeek (V3 / R1)**: Vua hiệu năng trên giá thành, khả năng lập trình vượt trội
- 🌙 **Moonshot AI (Kimi)**: Chuyên gia xử lý tài liệu dài, ngữ cảnh 2 triệu từ
- 🎯 **Zhipu GLM**: Hiểu tiếng Việt và ngữ cảnh văn hóa Châu Á tốt
- 📚 **Qwen (Alibaba)**: Mã nguồn mở mạnh mẽ, đa dạng kích thước mô hình

#### 2. Mô hình API tùy biến (Dành cho người dùng nâng cao)

Phương thức này dành cho các trường hợp:
- Dùng các mô hình mới ra mắt chưa có sẵn trong danh mục của OpenClaw
- Kết nối tới cụm máy chủ AI nội bộ doanh nghiệp (vLLM, Ollama, TGI)
- Sử dụng các cổng trung gian ủy quyền (API Proxy, OpenRouter, OneAPI)

Bảng 2-7 so sánh chi tiết giữa hai phương thức cấu hình.

**Bảng 2-7 So sánh giữa hai phương thức cấu hình API**

| Đặc tính | Mô hình tích hợp sẵn | Mô hình tùy biến |
|------|------------|-----------|
| Độ phức tạp | ⭐ Rất đơn giản | ⭐⭐⭐ Cần chỉnh sửa tệp JSON |
| Đối tượng phù hợp | Người mới bắt đầu | Lập trình viên, doanh nghiệp |
| Phạm vi mô hình | Các mô hình phổ biến | Bất kỳ mô hình nào hỗ trợ chuẩn OpenAI |
| Phương thức thiết lập | Chọn qua trình hướng dẫn CLI | Chỉnh sửa tệp `openclaw.json` |
| Chi phí bảo trì | Rất thấp, tự cập nhật | Cần tự quản lý URL và endpoint |

---

### Hướng dẫn cấu hình API tùy biến (Chỉnh sửa tệp JSON)

Tệp cấu hình lưu trữ tại: `~/.openclaw/openclaw.json`

```bash
# Mở tệp cấu hình bằng nano hoặc VS Code
nano ~/.openclaw/openclaw.json
```

#### Cấu trúc tệp cấu hình mẫu:

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com",
        "apiKey": "sk-your-api-key-here",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "deepseek-chat",
            "name": "DeepSeek Chat",
            "contextWindow": 64000,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat"
      }
    }
  }
}
```

#### Cấu hình nhiều nhà cung cấp kèm chuỗi dự phòng (Fallback):

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com",
        "apiKey": "sk-xxx",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "deepseek-chat",
            "name": "DeepSeek Chat",
            "contextWindow": 64000,
            "maxTokens": 4096
          }
        ]
      },
      "moonshot": {
        "baseUrl": "https://api.moonshot.cn/v1",
        "apiKey": "sk-xxx",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "moonshot-v1-128k",
            "name": "Kimi 128K",
            "contextWindow": 128000,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat",
        "fallbacks": ["moonshot/moonshot-v1-128k"]
      }
    }
  }
}
```

#### Giải thích các tham số cấu hình:

| Tham số | Ý nghĩa | Ví dụ |
|------|------|------|
| `baseUrl` | Địa chỉ endpoint dịch vụ API | `https://api.deepseek.com` |
| `apiKey` | Khóa xác thực bí mật | `sk-xxx` |
| `auth` | Phương thức xác thực | `api-key` hoặc `bearer` |
| `api` | Chuẩn giao thức API | `openai-chat`, `anthropic-messages` |
| `id` | Mã định danh mô hình | `deepseek-chat` |
| `name` | Tên hiển thị trên giao diện | `DeepSeek Chat` |
| `contextWindow` | Kích thước cửa sổ ngữ cảnh | `64000` |
| `maxTokens` | Lượng token xuất tối đa | `4096` |

Sau khi sửa tệp cấu hình, hãy khởi động lại Gateway:

```bash
openclaw gateway restart
```

Kiểm tra danh sách mô hình và kết nối:

```bash
# Xem các mô hình hiện có
openclaw models list

# Thử nghiệm kết nối
openclaw models test deepseek/deepseek-chat
```

---

### Hướng dẫn chi tiết thiết lập các mô hình giá rẻ phổ biến

#### 1. Thiết lập DeepSeek (Vua hiệu năng trên giá thành)

**Đặc điểm nổi bật**:
- 💰 **Chi phí siêu rẻ**: Chỉ khoảng 3.500 VNĐ cho mỗi triệu tokens đầu vào
- 🧠 **Tư duy lập trình xuất sắc**: Rất mạnh trong viết mã và xử lý tác vụ suy luận
- 🚀 **Khả năng suy luận R1**: Hỗ trợ chuỗi suy nghĩ chuyên sâu

**Các bước đăng ký & nạp tiền**:
1. Truy cập: https://platform.deepseek.com/
2. Đăng ký tài khoản và nạp tiền (nạp tối thiểu ~35.000 - 70.000 VNĐ để kích hoạt số dư khả dụng)
3. DeepSeek tính phí theo lượng sử dụng thực tế (Pay-as-you-go), số dư tài khoản bắt buộc phải lớn hơn 0 để gọi được API

![Nền tảng DeepSeek](https://upload.maynor1024.live/file/1770957195044__null_)
![Nạp tiền tài khoản](https://my.feishu.cn/space/api/box/stream/download/asynccode/?code=OWU5ZGEzMDE0Y2YyNDhhOTYwZjliNWY0OTM1YjgzMmVfa0dlYzNvMzFvUDVuY0J3cWZ6b3VDUkNLRHpKbmhHSURfVG9rZW46UmZuamJDV29vb0Q2bXl4VHUwcWNxYWFRbnZ1XzE3NzA5NTcxNjg6MTc3MDk2MDc2OF9WNA)
![Giao diện nạp tiền DeepSeek](https://upload.maynor1024.live/file/1770961892504__null_-20260213135123663._null_)

4. Vào mục **API Keys** → Nhấp "Create API Key"
5. Đặt tên gợi nhớ và sao chép khóa API an toàn (khóa chỉ hiển thị một lần duy nhất khi tạo)

![Tạo khóa API DeepSeek](https://upload.maynor1024.live/file/1770957195220__null_-20260213123309627._null_)
![Giao diện tạo khóa API](https://upload.maynor1024.live/file/1770961848240_1770957195220__null_-20260213123309627._null_)
![Lưu trữ khóa API](https://upload.maynor1024.live/file/1770957204667__null_-20260213123316852._null_)

Chạy cấu hình tự động:
```bash
openclaw onboard
# Chọn QuickStart -> Chọn DeepSeek -> Dán API Key -> Hoàn tất
```

#### 2. Thiết lập Kimi / Moonshot AI (Chuyên gia ngữ cảnh siêu dài)

1. Truy cập: https://platform.moonshot.cn/
2. Đăng ký tài khoản và vào mục API Keys
3. Tạo và sao chép khóa API

![Nền tảng Kimi](https://upload.maynor1024.live/file/1770957261204__null_-20260213123415103._null_)
![Gói ưu đãi Kimi](https://my.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzk3ODdjZjE0NDY3Y2NkMTU1ZDZmMzg4YTAwYTg3ZDdfV3haZXdRMEU5OENVN0RCTzBwbmp2U2M5dU1XSm9MMWdfVG9rZW46Q0dYQWJ5NzRVbzB4MWt4b09QRmNwckUybm1lXzE3NzA5NTcyMzY6MTc3MDk2MDgzNl9WNA)
![Gói cước Allegretto Kimi](https://upload.maynor1024.live/file/1770961947439__null_-20260213135221938._null_)
![Tạo API Key Kimi](https://upload.maynor1024.live/file/1770957262024__null_-20260213123418045._null_)
![Lưu API Key Kimi](https://upload.maynor1024.live/file/1770957271422__null_-20260213123420103._null_)

#### Bảng so sánh chi phí các mô hình

| Mô hình | Giá đầu vào / 1M tokens | Giá đầu ra / 1M tokens | Ước tính chi phí hàng tháng |
|------|----------|----------|-----------|
| DeepSeek V3 | ~$0.14 (~3.500 VNĐ) | ~$0.28 (~7.000 VNĐ) | 18.000 - 80.000 VNĐ |
| Kimi K2.5 | ~$0.60 (~15.000 VNĐ) | ~$3.00 (~75.000 VNĐ) | 35.000 - 150.000 VNĐ |
| Claude 3.5 Haiku | ~$0.80 (~20.000 VNĐ) | ~$4.00 (~100.000 VNĐ) | 50.000 - 200.000 VNĐ |
| Claude 3.5 Sonnet | ~$3.00 (~75.000 VNĐ) | ~$15.00 (~375.000 VNĐ) | 150.000 - 500.000 VNĐ |

---

## Xử lý các sự cố thường gặp

### Sự cố khi cài đặt

**Q1: Phiên bản Node.js không tương thích**

```bash
# Kiểm tra phiên bản hiện tại
node --version

# Nâng cấp lên Node 24 hoặc Node 26
nvm install 24
nvm use 24
```

**Q2: Lỗi phân quyền ghi thư mục ~/.openclaw**
```bash
# macOS/Linux: Chuyển quyền sở hữu thư mục cho người dùng hiện tại
sudo chown -R $USER ~/.openclaw
```

### Sự cố về API và mô hình

**Q1: Báo lỗi API Key không hợp lệ (Unauthorized / Invalid Key)**
- Kiểm tra xem đã sao chép đủ tiền tố (ví dụ `sk-...`) chưa
- Kiểm tra xem có khoảng trắng thừa ở đầu hoặc cuối chuỗi khóa không
- Đảm bảo tài khoản nhà cung cấp còn số dư khả dụng

**Q2: Token hao hụt quá nhanh**
- Đổi mô hình chính sang DeepSeek Chat để tiết kiệm chi phí
- Giảm độ dài câu lệnh hoặc dọn dẹp các phiên hội thoại cũ

### Sự cố về dịch vụ Gateway

**Q1: Gateway không khởi động được**
```bash
# Xem chi tiết nhật ký lỗi
tail -f ~/.openclaw/logs/gateway.log

# Khởi động lại Gateway
openclaw gateway restart
```

**Q2: Trùng cổng dịch vụ 18789**
```bash
# Kiểm tra tiến trình nào đang chiếm cổng
lsof -i :18789

# Đổi sang cổng khác (ví dụ 18790)
openclaw config set gateway.port 18790
openclaw gateway restart
```

---

## Hướng dẫn nâng cấp phiên bản 2.X

> 🔄 **Giữ hệ thống cập nhật**: OpenClaw được cập nhật liên tục với các bản vá bảo mật, tối ưu kết nối đa kênh và tích hợp mô hình mới nhất.

> ⚠️ **Phiên bản chuẩn**: Tính đến **10/09/2026**, giáo trình khuyến nghị **OpenClaw v2026.9.3 (Bản ổn định)**. Trước khi nâng cấp, hãy sao lưu thư mục `~/.openclaw`. Sau khi nâng cấp, bắt buộc chạy `openclaw doctor --fix` và `openclaw update repair`.

### Lệnh kiểm tra phiên bản

```bash
npm view openclaw version
openclaw --version
```

### Những việc PHẢI LÀM trước khi nâng cấp

```bash
# 1) Sao lưu dữ liệu cấu hình và trạng thái nội bộ
cp -r ~/.openclaw ~/.openclaw.backup-$(date +%Y%m%d-%H%M%S)

# 2) Ghi lại phiên bản hiện tại
openclaw --version > ~/openclaw-version-before-upgrade.txt

# 3) Kiểm tra trạng thái dịch vụ trước nâng cấp
openclaw gateway status
openclaw channels status
```

> ⚠️ Tuyệt đối không bỏ qua bước sao lưu. Toàn bộ cấu hình, hồ sơ xác thực và lịch sử trò chuyện đều nằm trong thư mục `~/.openclaw`.

### Cách 1: Sử dụng lệnh `openclaw update` (Khuyến nghị)

```bash
# Chạy thử nghiệm để kiểm tra các bước nâng cấp (dry-run)
openclaw update --tag 2026.9.3 --dry-run

# Nâng cấp lên phiên bản khuyến nghị của giáo trình
openclaw update --tag 2026.9.3 --yes

# Hoặc theo dõi nhánh ổn định chính thức
openclaw update --channel stable --yes
```

Sau khi hoàn tất nâng cấp:

```bash
openclaw update repair
openclaw doctor --fix
openclaw gateway restart
openclaw --version
openclaw gateway status
openclaw channels status
openclaw models status
```

> **Lưu ý**: Khi nâng cấp từ các bản cũ `2026.6.x` / `2026.7.x` / `2026.8.x`, lệnh `doctor --fix` sẽ tự động xử lý chuyển đổi định tuyến OpenAI (`openai-codex/*` → `openai/*`), dọn dẹp tàn dư OpenProse, chuyển đổi lưu trữ SQLite cho hội thoại và cập nhật danh mục kỹ năng Workshop.

### Cách 2: Cài đặt cố định phiên bản qua npm (Phương án dự phòng)

```bash
# Dừng Gateway trước khi nâng cấp
openclaw gateway stop

# Cài đặt cố định bản khuyến nghị
npm install -g openclaw@2026.9.3 --allow-scripts=openclaw

# Khắc phục và đồng bộ lại trạng thái
openclaw update repair
openclaw doctor --fix

# Khởi động lại và kiểm tra
openclaw gateway restart
openclaw --version
openclaw gateway status
openclaw channels status
```

### Danh sách kiểm tra sau khi nâng cấp

Chạy bộ lệnh kiểm tra toàn diện sau:

```bash
openclaw --version
node -v
openclaw doctor
openclaw gateway status
openclaw channels status
openclaw models status
openclaw models status --probe
openclaw skills check
```

Nếu hệ thống thỏa mãn các điều kiện sau thì quá trình nâng cấp đã hoàn tất thành công:
- `openclaw --version` hiển thị đúng `2026.9.3`
- `openclaw doctor` không còn cảnh báo lỗi nghiêm trọng
- `openclaw gateway status` báo dịch vụ hoạt động bình thường
- `openclaw channels status` hiển thị đầy đủ các kênh liên kết
- `openclaw models status --probe` kết nối tốt tới các nhà cung cấp mô hình

### Các sự cố thường gặp khi nâng cấp

#### npm báo lỗi EEXIST

```bash
npm install -g openclaw@2026.9.3 --allow-scripts=openclaw --force
```

#### Gateway không khởi động được sau khi cập nhật

```bash
openclaw update repair
openclaw doctor --fix
openclaw gateway restart
tail -f ~/.openclaw/logs/gateway.log
```

#### Trùng cổng dịch vụ

```bash
lsof -i :18789
kill -9 <PID>

# Hoặc chuyển sang cổng khác
openclaw config set gateway.port 18790
openclaw gateway restart
```

### Hướng dẫn khôi phục phiên bản cũ (Rollback)

Nếu phiên bản mới phát sinh lỗi không thể khắc phục ngay, bạn có thể hoàn nguyên về bản sao lưu:

```bash
openclaw gateway stop
cp -r ~/.openclaw.backup-*/* ~/.openclaw/
npm install -g openclaw@<phiên-bản-cũ> --force
openclaw doctor
openclaw gateway restart
```

---

## Tổng kết chương

Sau khi hoàn thành chương này, bạn đã:

✅ Nắm rõ sự khác biệt giữa triển khai cục bộ và máy chủ đám mây  
✅ Hoàn tất cài đặt OpenClaw trên hệ điều hành của bạn (Mac, Windows, Linux hoặc Cloud)  
✅ Cấu hình thành công API của các mô hình AI chất lượng cao  
✅ Xác minh kết nối thành công và nắm vững quy trình bảo trì, nâng cấp hệ thống  

## Bài tập thực hành

1. Hoàn tất cài đặt OpenClaw trên thiết bị của bạn
2. Cấu hình ít nhất một nhà cung cấp API (khuyên dùng DeepSeek hoặc Claude)
3. Gửi tin nhắn thử nghiệm đầu tiên để kiểm tra phản hồi
4. Kiểm tra phiên bản hệ thống và trạng thái kết nối bằng `openclaw doctor`

---

**Chương tiếp theo**: [Chương 3: Bắt đầu nhanh](03-quick-start.md) - Bắt đầu làm việc với OpenClaw

**Trở về mục lục**: [README](../../README.md)

---

## 🌐 Đọc trực tuyến

📖 **Bạn muốn đọc chương này trên nền tảng web?**

[🔗 Đọc trực tuyến: Chương 2 - Thiết lập môi trường](https://awesome.tryopenclaw.asia/docs/01-basics/02-installation/)

Truy cập website để có trải nghiệm đọc tối ưu:
- 📱 Giao diện tương thích cho điện thoại, máy tính bảng và máy tính
- 🌙 Chế độ nền tối (Dark mode) dịu mắt
- 🔍 Tìm kiếm nội dung nhanh chóng
- 📋 Thanh điều hướng trực quan, dễ dàng chuyển đổi các chương

[🏠 Truy cập website giáo trình đầy đủ](https://awesome.tryopenclaw.asia)
