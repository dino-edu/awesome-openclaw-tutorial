# Giáo Trình Hướng Dẫn Triển Khai OpenClaw 1-Click Toàn Diện & Đơn Giản Nhất (Rất Đáng Để Lưu Lại!)

> **OpenClaw** có thể triển khai trực tiếp trên máy tính cá nhân của bạn, hoặc triển khai thông qua các nền tảng đám mây do các hãng công nghệ lớn cung cấp. Hình thức này **cực kỳ thân thiện với người mới bắt đầu**: không cần tự cấu hình mô hình phức tạp, không cần mua máy chủ riêng biệt, thậm chí không cần các bước thiết lập rườm rà — bạn chỉ cần thao tác nhấp chuột là xong. Một số nền tảng có thể yêu cầu đăng ký gói tài khoản tương ứng.
>
> 📚 **Tài liệu đầy đủ**: [Awesome OpenClaw Tutorial](https://awesome.tryopenclaw.asia/) | [GitHub Repository](https://github.com/xianyu110/awesome-openclaw-tutorial)
>
> ⭐ Nếu thấy hữu ích, đừng quên bấm Star ủng hộ dự án nhé!

---

## ✨ Hướng Dẫn Lựa Chọn Nhanh

Trước khi đi vào hướng dẫn chi tiết từng nền tảng, chúng ta hãy cùng xem qua **Bảng so sánh tổng quan giữa các nền tảng** để giúp bạn nhanh chóng chọn được phương án triển khai phù hợp nhất:

## 📋 Bảng So Sánh Tổng Quan Các Nền Tảng

| Nền tảng | Mức giá | Hạn mức miễn phí | Thời gian triển khai | Điểm khuyên dùng | Đặc điểm nổi bật |
|----------|---------|------------------|----------------------|------------------|------------------|
| **Lark / Feishu Miaoda** ⭐ | **Miễn phí** | **1 triệu Tokens / ngày** | **1 phút** | ⭐⭐⭐⭐⭐ | Đơn giản nhất, miễn phí, cực kỳ hời trong thời gian ưu đãi |
| **Baota Panel (aaPanel)** | **Plugin miễn phí** | **Có** | **5 phút** | ⭐⭐⭐⭐⭐ | Quản lý trực quan qua Panel, phù hợp cho người dùng máy chủ |
| **JVSClaw (Alibaba Cloud)** | **Mã mời (Invite)** | **14 ngày miễn phí** | **3 phút** | ⭐⭐⭐⭐⭐ | Cấp độ doanh nghiệp, sandbox đám mây, hỗ trợ di động |
| Coze OpenClaw | Từ 99 NDT/tháng (~350.000 VND) | Không | 3 phút | ⭐⭐⭐⭐ | Hệ sinh thái Agent phong phú |
| Kimi OpenClaw | ~200 NDT/tháng (~700.000 VND) | Không | 1 phút | ⭐⭐⭐⭐ | Mô hình Kimi K2.5 Thinking, điều khiển trình duyệt |
| Tencent WorkBuddy | Tặng 5.000 Credits | Tặng khi đăng ký | 5 phút | ⭐⭐⭐⭐ | Agent trên Desktop, kết nối đa nền tảng nhắn tin |
| Volcengine ArkClaw | Trả theo lưu lượng (Pay-as-you-go) | Có | 1 - 2 phút | ⭐⭐⭐ | Nền tảng từ ByteDance |
| Zhipu AutoClaw | Trả theo lưu lượng | Có | 1 phút | ⭐⭐⭐ | Tự động cấu hình Lark / Feishu |

> 💡 **Gợi ý lựa chọn**:
> - **Người hoàn toàn mới**: Lựa chọn hàng đầu là **Lark / Feishu Miaoda** (Miễn phí + Thao tác đơn giản nhất).
> - **Người dùng đã có máy chủ**: Khuyên dùng **Baota Panel (aaPanel)** (Quản lý trực quan qua giao diện web).
> - **Doanh nghiệp / Đội ngũ chuyên nghiệp**: Nên cân nhắc **JVSClaw** (Bảo mật doanh nghiệp + Hộp cát cách ly).
> - **Nhu cầu điều khiển trên di động**: Chọn **Kimi OpenClaw** hoặc **Tencent WorkBuddy**.

---

## Hướng Dẫn Triển Khai Chi Tiết

Dưới đây là các bước triển khai chi tiết và tính năng nổi bật của từng nền tảng, mời bạn lựa chọn theo nhu cầu thực tế.

---

## 1. Lark / Feishu Miaoda OpenClaw ⭐ Rất Khuyên Dùng

### 🎁 Ưu thế cốt lõi (Xem mục này trước)

| Ưu thế | Diễn giải |
|--------|-----------|
| **Hoàn toàn miễn phí** | Triển khai **hoàn toàn miễn phí** trong thời gian diễn ra chương trình |
| **Hạn mức dồi dào** | **Miễn phí 1 triệu Tokens mỗi ngày** |
| **Triển khai siêu tốc** | Hoàn tất trong vòng **1 phút** |
| **Tự động tích hợp Feishu** | Không cần cấu hình bot thủ công |
| **Số lượng giới hạn** | Giới hạn **100.000 suất** mỗi ngày |

> ⏰ **Chương trình có hạn**: Miễn phí triển khai và nhận hạn mức **1 triệu Tokens / ngày** trước **24:00 ngày 31 tháng 03 năm 2026 (giờ Bắc Kinh)**!

![](https://upload.maynor1024.live/file/1773796613888_image_16.bin)

### 🚀 Các bước triển khai 1-click

**Bước 1: Mở nền tảng Miaoda**

- Trên máy tính, truy cập: https://miaoda.feishu.cn/
- Hoặc trên điện thoại, mở ứng dụng Feishu / Lark và tìm kiếm từ khóa 「**Miaoda**」

**Bước 2: Bấm tạo mới**

![image-20260318171128098](https://upload.maynor1024.live/file/1773825102861_image-20260318171128098.png)

Tiến hành cấu hình 1-click theo hướng dẫn, **chưa đầy 1 phút** là hệ thống đã được cài đặt xong và **kết nối mượt mà vào Feishu / Lark**.

### 🧰 Điểm sáng trong trải nghiệm sử dụng

**Điểm sáng 1: Lệnh nhanh tiện lợi (Tránh ô nhiễm ngữ cảnh)**

Tại trang giao diện trò chuyện, hệ thống bổ sung thêm nút **"Lệnh nhanh" (Quick Commands)** và **"Cài đặt" (Settings)**.

| Câu lệnh | Công dụng |
|----------|-----------|
| `/new` | **Tạo phiên hội thoại mới** (Tránh làm nhiễu / ô nhiễm ngữ cảnh cũ) |
| `/stop` | **Dừng phản hồi hiện tại** (Phanh gấp lập tức khi AI đi chệch hướng) |

![](https://upload.maynor1024.live/file/1773796676348_image_28.bin)

**Điểm sáng 2: Lối vào cấu hình trực quan (Dễ dàng kiểm tra và sửa lỗi)**

Khi bấm vào Cài đặt, bạn sẽ được chuyển đến trang quản lý của Miaoda:

![](https://upload.maynor1024.live/file/1773796542584_image_4.bin)

Bạn có thể **Quản lý / Xóa** instance OpenClaw vừa tạo ngay trong Miaoda:

![](https://upload.maynor1024.live/file/1773796611375_image_17.bin)

Khi bot gặp sự cố (cần kiểm tra logs, sửa lỗi hoặc điều chỉnh config), bạn chỉ cần tìm chú 🦞 OpenClaw của mình trong Miaoda và nhấn vào Quản lý:

![](https://upload.maynor1024.live/file/1773796550312_image_6.bin)

Bạn cũng có thể tùy chỉnh thông tin bot, thêm kỹ năng (skills):

![](https://upload.maynor1024.live/file/1773796595587_image_14.bin)

Ví dụ như cài đặt để mỗi lần hoàn thành nhiệm vụ, bot sẽ đáp lại một câu: **"Đã hoàn thành thưa sếp～"**.

Bot Feishu tự động tạo cũng xuất hiện đầy đủ trong Nền tảng Mở (Open Platform), toàn bộ trải nghiệm diễn ra cực kỳ trơn tru:

![](https://upload.maynor1024.live/file/1773796782224_image_46.bin)

### 🎯 Ca thực chiến tiêu biểu

**Trường hợp 1: Tạo Bitable (Bảng đa chiều Feishu) chỉ bằng một câu nói**

![](https://upload.maynor1024.live/file/1773796924964_image_71.bin)

**Trường hợp 2: Biến video hot Douyin/TikTok thành bài viết hoàn chỉnh (Tự động tải ảnh + lưu vào Feishu Docs)**

Tải video trực tiếp thông qua kỹ năng (skill):

![](https://upload.maynor1024.live/file/1773796680324_image_29.bin)

Phân tích video, chụp lại khung hình, tạo bài viết hoàn chỉnh, lưu thẳng vào tài liệu Feishu — toàn bộ chỉ trong một luồng tác vụ duy nhất:

![](https://upload.maynor1024.live/file/1773796604495_image_15.bin)

### 📚 Tài liệu tham khảo chính thức

Tài liệu chính thức từ Feishu: [[Feishu Miaoda] Hướng dẫn triển khai OpenClaw 1-click đơn giản nhất toàn mạng | Miễn phí có hạn, kèm cách dùng nâng cao](https://larkcommunity.feishu.cn/wiki/LY1swuqTaiEOQ0kHXxzcoegMn4f)

---

## 2. Coze OpenClaw

Truy cập: https://www.coze.cn/

Đăng ký tài khoản và đăng nhập, sau đó làm theo hướng dẫn hình mũi tên để chọn triển khai 1-click:

![](https://upload.maynor1024.live/file/1773796622145_image_19.bin)

Triển khai nhanh chóng chỉ trong 3 phút:

![](https://upload.maynor1024.live/file/1773796815565_image_51.bin)

Hiện tại tính năng "Triển khai OpenClaw" đang được mở trải nghiệm cho người dùng các gói Cá nhân Nâng cao, Cá nhân Flagship, Doanh nghiệp Tiêu chuẩn và Doanh nghiệp Flagship.

![](https://upload.maynor1024.live/file/1773796720606_image_35.bin)

Gói thấp nhất là Cá nhân Nâng cao, mức giá 99 NDT/tháng (~350.000 VND), sau khi đăng ký là có thể trải nghiệm ngay.

![](https://upload.maynor1024.live/file/1773796580802_image_12.bin)

Sau khi chọn mô hình và phiên bản, bạn có thể triển khai 1-click. Khi triển khai xong:

![](https://upload.maynor1024.live/file/1773796592042_image_13.bin)

Nếu cần kết nối kênh Feishu / Lark, bạn có thể tham khảo hướng dẫn cấu hình:

Nhấp vào cấu hình để tạo mới:

![](https://upload.maynor1024.live/file/1773796939834_image_72.bin)

Thực hiện ủy quyền xác thực, chờ vài giây là bot đã được tạo thành công.

Đội ngũ Coze còn xây dựng một nền tảng giao lưu Agent cộng đồng với hơn 13.600 Agent đang hoạt động.

![](https://upload.maynor1024.live/file/1773796681475_image_30.bin)

Chúng ta hoàn toàn có thể đăng ký chú bot OpenClaw của mình lên đó, đăng bài và tương tác với các Agent khác.

Cách đăng ký cũng rất đơn giản, bạn có thể gửi prompt mẫu như sau:

```bash
Bạn hãy truy cập vào https://instreet.coze.site/skill.md để đăng ký một tài khoản InStreet, sau đó đăng bài thông báo rằng mình đã đăng ký thành công!
```

![](https://upload.maynor1024.live/file/1773796664863_image_26.bin)

---

## 3. Kimi OpenClaw

Truy cập trang chủ Kimi: https://www.kimi.com/

Nhấp chọn Kimi Claw (phiên bản OpenClaw tích hợp trên nền tảng Kimi).

![](https://upload.maynor1024.live/file/1773796744626_image_39.bin)

Chỉ cần nhấp chuột vào nút Tạo, chờ khoảng hơn 1 phút là hệ thống đã được triển khai hoàn tất.

![](https://upload.maynor1024.live/file/1773796892476_image_64.bin)

Sau đó bạn có thể tương tác trực tiếp với OpenClaw ngay trong trình duyệt web.

![](https://upload.maynor1024.live/file/1773796708028_image_33.bin)

Ở khung bên phải, bạn có thể đổi tên bot và khởi động lại dịch vụ thủ công. Cơ chế này tương đương với việc mở một môi trường hộp cát (sandbox) riêng biệt trên đám mây cho từng người dùng, rồi cài đặt OpenClaw độc lập bên trong đó.

> Lưu ý: Tính năng triển khai 1-click này yêu cầu gói Allegretto trở lên (khoảng 200 NDT/tháng ~ 700.000 VND).

Mô hình Kimi K2.5 Thinking được tự động cấu hình và liên kết trực tiếp với hạn mức thành viên Kimi Code của bạn.

Bạn có thể theo dõi chi tiết lịch sử sử dụng tại trang quản lý:

![](https://upload.maynor1024.live/file/1773796872035_image_62.bin)

Nếu bạn đã có sẵn bản OpenClaw chạy cục bộ trên máy, bạn cũng có thể cài plugin Kimi để trò chuyện với OpenClaw ngay trong giao diện Kimi.

Tuy nhiên, việc cài đặt một môi trường hoàn toàn mới và sạch sẽ trên đám mây sẽ mang lại sự thoải mái hơn: bạn muốn cài thêm skill nào tùy thích, không sợ xung đột cấu hình với bot cục bộ.

Hơn nữa, việc tích hợp vào Feishu chỉ mất chưa đầy 3 phút. Sau đó bạn có thể thêm bot vào nhóm chat để mọi người cùng thảo luận và làm việc chung.

Khi trò chuyện trong Feishu, bot sẽ gửi trước một biểu tượng cảm xúc (reaction) để xác nhận đã nhận được tin nhắn — tính năng này rất tinh tế, giúp tránh việc người dùng nghĩ hệ thống bị treo rồi gửi lại tin nhắn nhiều lần.

ClawHub là kho lưu trữ kỹ năng (skill repository) dành riêng cho OpenClaw với hàng loạt kỹ năng hữu ích:

> Địa chỉ: https://clawhub.ai/

![](https://upload.maynor1024.live/file/1773796639309_image_21.bin)

Trong KimiClaw, việc tải kỹ năng từ ClawHub rất đơn giản: bạn chỉ cần mô tả nhu cầu là bot sẽ tự động cài đặt.

Ví dụ như kỹ năng tạo ảnh bìa: chỉ cần ra lệnh cài `bananapro-image-gen` là bạn có thể tạo ngay những bức ảnh bìa tuyệt đẹp.

![](https://upload.maynor1024.live/file/1773796547519_image_5.bin)

![](https://upload.maynor1024.live/file/1773796774592_image_44.bin)

Ngoài ra, với các kỹ năng chưa có trên ClawHub, bạn chỉ cần gửi link kho lưu trữ GitHub tương ứng là bot cũng có thể cài đặt tự động.

Đặc biệt, KimiClaw có khả năng mở trình duyệt web, chụp ảnh màn hình và gửi lại thông tin bạn yêu cầu.

Dựa trên tính năng này, bạn có thể thiết lập các luồng giám sát động thái mới của các tài khoản mạng xã hội mà không cần cấu hình API phức tạp:

Nó truy cập trang web qua trình duyệt, chụp ảnh màn hình và phân tích nội dung — hệt như thao tác của một người thật, vừa an toàn tuyệt đối lại không sợ bị chặn API.

Bạn có thể tạo một tác vụ định kỳ (Cron), ví dụ cứ mỗi 2 phút vào chụp màn hình kiểm tra một lần xem có thông tin mới hay không.

Gần đây chuyên gia công nghệ AlexFinn (hơn 400.000 người theo dõi trên X/Twitter) đã chia sẻ kinh nghiệm sử dụng OpenClaw để xây dựng hệ thống "Bộ não thứ hai" (Second Brain).

![](https://upload.maynor1024.live/file/1773796843308_image_57.bin)

Vì OpenClaw có bộ nhớ liên tục (persistent memory), bạn có thể nạp toàn bộ suy nghĩ, ghi chú và ý tưởng vào bot; khi cần tổng hợp thông tin, bạn chỉ việc hỏi là có ngay câu trả lời chính xác.

Ví dụ khi ra lệnh trong Feishu, bot sẽ tự động lập trình cả một hệ thống cho bạn:

```bash
Tôi muốn xây dựng một hệ thống Bộ não thứ hai (Second Brain) để xem lại toàn bộ ghi chú, đối thoại và ký ức của chúng ta. Hãy xây dựng bằng Next.js và bàn giao ứng dụng trực tiếp cho tôi.
```

![](https://upload.maynor1024.live/file/1773796549873_image_7.bin)

Sau đó, việc của bạn chỉ là nạp mọi suy nghĩ vào KimiClaw:

```bash
Hôm nay thấy một câu nói hay, hãy ghi nhớ giúp tôi: Kiếm tiền bằng chân tay thì đọ nhau ở tầm mắt và thể lực, chăm chỉ là quan trọng nhất. Làm giàu bằng vốn thì đọ nhau ở trí lực và tâm lực, nhận thức là quan trọng nhất.
```

Mở trang web do mô hình Kimi K2.5 tạo ra:

![](https://upload.maynor1024.live/file/1773796625125_image_18.bin)

Nó ghi nhận đầy đủ lịch sử tác vụ giữa bạn và bot, biến thành một "bộ não thứ hai" vô cùng tiện ích.

#### Các bước kết nối KimiClaw với Bot Feishu:

**Bước 1: Tạo ứng dụng bot trên Feishu**
- Truy cập Nền tảng Mở Feishu: https://open.feishu.cn/app
- Bấm "Tạo ứng dụng tùy chỉnh" (Create Custom App)

![](https://upload.maynor1024.live/file/1773796802721_image_50.bin)

Điền tên ứng dụng, mô tả rồi bấm Tạo:

![](https://upload.maynor1024.live/file/1773796906426_image_67.bin)

Bấm "Thêm tính năng ứng dụng" (Add capabilities) và chọn thêm tính năng Bot:

![](https://upload.maynor1024.live/file/1773796719694_image_34.bin)

**Bước 2: Cấu hình quyền hạn (Permissions)**

Cần cấp tối thiểu các quyền sau:

![](https://upload.maynor1024.live/file/1773796757221_image_42.bin)

Bạn có thể tìm kiếm và bật quyền thủ công:

![](https://upload.maynor1024.live/file/1773796799882_image_49.bin)

Hoặc nhập trực tiếp cấu hình phân quyền JSON bên dưới:

```json
{
  "scopes": {
    "tenant": [
      "aily:file:read",
      "aily:file:write",
      "application:application.app_message_stats.overview:readonly",
      "application:application:self_manage",
      "application:bot.menu:write",
      "contact:user.employee_id:readonly",
      "corehr:file:download",
      "event:ip_list",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.members:bot_access",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:send_as_bot",
      "im:message.reactions:read",
      "im:resource"
    ],
    "user": ["aily:file:read", "aily:file:write", "im:chat.access_event.bot_p2p_chat:read"]
  }
}
```

![](https://upload.maynor1024.live/file/1773796560726_image_8.bin)

**Bước 3: Lấy App ID và App Secret**

Tại mục "Thông tin xác thực & Thông tin cơ bản", sao chép App ID và App Secret:

![](https://upload.maynor1024.live/file/1773796864723_image_61.bin)

Sau đó gửi hai thông số này cho KimiClaw.

**Bước 4: Cấu hình Sự kiện & Callback**

Sau khi KimiClaw khởi động lại, trong trang cấu hình Feishu chọn mục "Sự kiện & Callback" (Events and Callbacks), chọn chế độ **Kết nối dài (Long Connection / WebSocket)** để nhận sự kiện và bấm Lưu. Sau đó thêm sự kiện: `im.message.receive_v1`.

![](https://upload.maynor1024.live/file/1773796786174_image_47.bin)

Sau khi hoàn tất, bạn đã có thể trò chuyện trực tiếp với bot trên Feishu. Bot trên Feishu và bot trên giao diện Web là cùng một thực thể, dữ liệu hội thoại đồng bộ hoàn toàn.

---

## 4. Tencent WorkBuddy

Địa chỉ trang chủ: https://www.codebuddy.cn/work/

Đây là sản phẩm Agent dành cho Desktop do đội ngũ Tencent CodeBuddy phát triển, hỗ trợ kết nối trực tiếp với Feishu / Lark và WeCom (WeChat Doanh nghiệp).

WorkBuddy là một AI Agent desktop thuần bản địa, có thể tự động hóa rất nhiều thao tác văn phòng: phân tích dữ liệu, làm slide thuyết trình PPT, quản lý tệp tin...

![](https://upload.maynor1024.live/file/1773796826079_image_54.bin)

Đặc biệt, WorkBuddy Claw cho phép bạn điều khiển máy tính trực tiếp từ điện thoại di động thông qua WeCom, Feishu, DingTalk hoặc QQ.

![](https://upload.maynor1024.live/file/1773796518484_image_1.bin)

Mở ứng dụng WorkBuddy, bấm vào biểu tượng cá nhân ở góc trên bên phải, chọn "Cài đặt Claw":

![](https://upload.maynor1024.live/file/1773796887734_image_63.bin)

Chọn tích hợp Feishu:

![](https://upload.maynor1024.live/file/1773796915237_image_69.bin)

Hệ thống yêu cầu 2 tham số. Chúng ta sẽ vào trang quản trị Feishu Open Platform để lấy:

![](https://upload.maynor1024.live/file/1773796649783_image_23.bin)

Mở cổng phát triển Feishu, chọn tạo ứng dụng tự xây dựng của doanh nghiệp:

![](https://upload.maynor1024.live/file/1773796646570_image_24.bin)

Địa chỉ trang quản trị:
```bash
https://open.feishu.cn/app?lang=zh-CN
```

Thêm tính năng ứng dụng, chọn thêm tính năng Bot:

![](https://upload.maynor1024.live/file/1773796735712_image_37.bin)

Sau đó nhập quyền hạn hàng loạt (Batch Import Permissions):

![](https://upload.maynor1024.live/file/1773796756206_image_40.bin)

Sao chép toàn bộ khối quyền hạn JSON sau vào ô cấu hình:

```json
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "docx:document:readonly",
      "im:chat:read",
      "im:chat:update",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_users",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "application:application:self_manage",
      "cardkit:card:write",
      "cardkit:card:read"
    ],
    "user": [
      "contact:user.employee_id:readonly",
      "offline_access",
      "base:app:copy",
      "base:field:create",
      "base:field:delete",
      "base:field:read",
      "base:field:update",
      "base:record:create",
      "base:record:delete",
      "base:record:retrieve",
      "base:record:update",
      "base:table:create",
      "base:table:delete",
      "base:table:read",
      "base:table:update",
      "base:view:read",
      "base:view:write_only",
      "base:app:create",
      "base:app:update",
      "base:app:read",
      "board:whiteboard:node:create",
      "board:whiteboard:node:read",
      "calendar:calendar:read",
      "calendar:calendar.event:create",
      "calendar:calendar.event:delete",
      "calendar:calendar.event:read",
      "calendar:calendar.event:reply",
      "calendar:calendar.event:update",
      "calendar:calendar.free_busy:read",
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "contact:user:search",
      "docs:document.comment:create",
      "docs:document.comment:read",
      "docs:document.comment:update",
      "docs:document.media:download",
      "docs:document:copy",
      "docx:document:create",
      "docx:document:readonly",
      "docx:document:write_only",
      "drive:drive.metadata:readonly",
      "drive:file:download",
      "drive:file:upload",
      "im:chat.members:read",
      "im:chat:read",
      "im:message",
      "im:message.group_msg:get_as_user",
      "im:message.p2p_msg:get_as_user",
      "im:message:readonly",
      "search:docs:read",
      "search:message",
      "space:document:delete",
      "space:document:move",
      "space:document:retrieve",
      "task:comment:read",
      "task:comment:write",
      "task:task:read",
      "task:task:write",
      "task:task:writeonly",
      "task:tasklist:read",
      "task:tasklist:write",
      "wiki:node:copy",
      "wiki:node:create",
      "wiki:node:move",
      "wiki:node:read",
      "wiki:node:retrieve",
      "wiki:space:read",
      "wiki:space:retrieve",
      "wiki:space:write_only"
    ]
  }
}
```

![](https://upload.maynor1024.live/file/1773796851908_image_58.bin)

Bấm bước tiếp theo để xác nhận yêu cầu cấp quyền.

![](https://upload.maynor1024.live/file/1773796645254_image_22.bin)

Tại mục "Thông tin xác thực & Thông tin cơ bản", sao chép App ID và App Secret rồi dán vào trang cấu hình tương ứng trong WorkBuddy:

![](https://upload.maynor1024.live/file/1773796575288_image_11.bin)

![](https://upload.maynor1024.live/file/1773796729719_image_36.bin)

Bấm Đăng ký để nhận một địa chỉ Webhook, sao chép URL Webhook này:

![](https://upload.maynor1024.live/file/1773796738256_image_38.bin)

Quay lại Feishu Open Platform, vào mục "Sự kiện & Callback":

![](https://upload.maynor1024.live/file/1773796667880_image_27.bin)

> Lưu ý: Đây là bước cấu hình then chốt để bot có khả năng nhận gửi tin nhắn và tương tác thẻ thông minh trong Feishu.

Chọn gửi sự kiện về máy chủ nhà phát triển và dán URL Webhook vừa sao chép vào.

![](https://upload.maynor1024.live/file/1773796566171_image_10.bin)

Thêm sự kiện nhận tin nhắn:

![](https://upload.maynor1024.live/file/1773796898119_image_65.bin)

Tìm kiếm sự kiện "Nhận tin nhắn" và bấm thêm ngay:

![](https://upload.maynor1024.live/file/1773796820945_image_53.bin)

Tại mục cấu hình Callback, tiếp tục chọn gửi về máy chủ nhà phát triển và dán cùng địa chỉ Webhook đó:

![](https://upload.maynor1024.live/file/1773796705994_image_32.bin)

Thêm sự kiện tương tác thẻ thông minh (Card Callback):

![](https://upload.maynor1024.live/file/1773796758122_image_41.bin)

Cuối cùng, tiến hành tạo phiên bản và xuất bản ứng dụng:

![](https://upload.maynor1024.live/file/1773796815998_image_52.bin)

Điền số phiên bản, mô tả và bấm Xuất bản:

![](https://upload.maynor1024.live/file/1773796529410_image_3.bin)

Mở ứng dụng trên Feishu để bắt đầu trò chuyện với bot:

![](https://upload.maynor1024.live/file/1773796703775_image_31.bin)

Khi chat trên Feishu, bạn có thể điều khiển WorkBuddy trên máy tính. Thư mục làm việc mặc định của bot là `/WorkBuddy/Claw`.

![](https://upload.maynor1024.live/file/1773796919463_image_70.bin)

Bạn có thể làm gì với nó? Ví dụ: Đang đi ngoài đường, mở điện thoại nhắn tin bảo WorkBuddy dọn dẹp gọn gàng màn hình desktop máy tính.

WorkBuddy xử lý các tác vụ phức tạp rất tốt, chẳng hạn như tự động đọc hàng loạt tệp hóa đơn thanh toán PDF, phân loại và kết xuất bảng tính tổng hợp:

Ví dụ câu lệnh:
```bash
Hãy giúp tôi xử lý các hóa đơn trong thư mục "Chi phí liên hoan đội ngũ", các file ảnh là chi tiết thanh toán.
Hãy tạo một báo cáo tóm tắt thanh toán gồm các thông tin:
- Ngày tháng
- Tên đơn vị / Cửa hàng
- Số tiền chi tiêu
- Loại chi tiêu (Ăn uống / Đi lại / Lưu trú / Khác)
- Ghi chú

Sắp xếp theo định dạng: 2025.12.01 Tiệc liên hoan tòa nhà Nam Sơn Số tiền: 100 NDT
Cuối cùng tổng hợp số tiền theo chi tiết thanh toán và chi tiết hóa đơn, nếu có chênh lệch bất thường hãy đánh dấu nổi bật.
Bên cạnh kết quả trả lời trực tiếp, hãy xuất thêm một file Excel bàn giao cho tôi.
```

WorkBuddy sẽ tự động đọc, tính toán và xuất ra tệp Excel hoàn chỉnh.

Ngoài ra, WorkBuddy tích hợp sẵn kho Skills phong phú có thể cài đặt 1-click:

![](https://upload.maynor1024.live/file/1773796633330_image_20.bin)

Bạn không cần tự mua API key mô hình vì WorkBuddy đã tích hợp sẵn các mô hình AI hàng đầu.

![](https://upload.maynor1024.live/file/1773796527144_image_2.bin)

Khác với OpenClaw cài chay, WorkBuddy có cơ chế bảo vệ an toàn: nó chỉ giới hạn thao tác trong các thư mục được chỉ định.

Đặc biệt, **mọi người dùng CodeBuddy phiên bản nội địa đều được tặng 5.000 Credits miễn phí ngay sau khi đăng ký, không có điều kiện ràng buộc**:

```bash
Nhận ưu đãi tại: https://www.codebuddy.cn/profile/usage
```

Nhận xong là bạn đã có thể điều khiển AI làm việc từ điện thoại di động mọi lúc mọi nơi.

---

## 5. Volcengine ArkClaw (ByteDance)

Địa chỉ: https://www.volcengine.com/

![](https://upload.maynor1024.live/file/1773796780059_image_45.bin)

Bấm vào "Trải nghiệm ngay" (Experience Now):

![](https://upload.maynor1024.live/file/1773796917078_image_68.bin)

Bấm chọn "Tạo ngay" (Create Now):

![](https://upload.maynor1024.live/file/1773796828676_image_55.bin)

Chờ trong giây lát, thời gian khởi tạo dự kiến khoảng 1 - 2 phút.

![](https://upload.maynor1024.live/file/1773796760632_image_43.bin)

*Tài liệu đang tiếp tục được cập nhật...*

---

## 6. Zhipu AutoClaw (GLM)

**Địa chỉ: https://autoglm.zhipuai.cn/autoclaw/**

![](https://upload.maynor1024.live/file/1773796904961_image_66.bin)

Chọn kết nối nền tảng tin nhắn (IM):

![](https://upload.maynor1024.live/file/1773796851812_image_59.bin)

Chọn tích hợp Bot Feishu:

![](https://upload.maynor1024.live/file/1773796563471_image_9.bin)

Chọn chế độ Cấu hình Tự động (Auto Configure), sau khi đăng nhập Feishu hệ thống sẽ tự động cấu hình từ A-Z:

![](https://upload.maynor1024.live/file/1773796653127_image_25.bin)

Toàn bộ quá trình hoàn tất cực kỳ nhanh chóng:

![](https://upload.maynor1024.live/file/1773796858089_image_60.bin)

Mở Feishu là bạn đã có thể thấy bot sẵn sàng hoạt động. Toàn bộ quy trình diễn ra mượt mà và đơn giản.

![](https://upload.maynor1024.live/file/1773796833993_image_56.bin)

---

## 7. JVSClaw (Alibaba Cloud Wuying)

Khi mọi người đang hào hứng thảo luận về việc hệ sinh thái OpenClaw bùng nổ ra sao, điều tôi thực sự quan tâm lại là một câu hỏi khác: **Liệu thứ này có thực sự dùng được trong môi trường sản xuất (production) hay không?**

### Những nỗi phiền toái lúc 2 giờ sáng

Vào lúc 2 giờ 17 phút sáng thứ Ba tuần trước, chuông cảnh báo giám sát hệ thống reo inh ỏi. Tôi ngái ngủ bò dậy kiểm tra thì phát hiện một tác vụ cào dữ liệu (web scraping) đang bị kẹt cứng ở trang đăng nhập — trang web mục tiêu vừa đổi cơ chế captcha xác thực, và script của tôi cứ ngồi đó click liên tục suốt 3 tiếng đồng hồ.

Lại có lần trước giờ mở phiên giao dịch, tôi giao cho AI nhiệm vụ theo dõi biến động bất thường của một mã cổ phiếu. Kết quả là nó gom mọi dao động li ti dù là nhỏ nhất thành "bất thường" rồi bắn thông báo liên tục về máy làm điện thoại đơ cứng.

**AI Agent nghe qua thì thật hoàn hảo, nhưng khi bắt tay vào triển khai thực tế, bạn sẽ gặp 3 rào cản lớn:**
1. **Cấu hình quá rườm rà**: Máy chủ, môi trường Python, API keys...
2. **Thiết bị đầu cuối bị phân mảnh**: Đám mây không chạm được tệp cục bộ, cục bộ lại kém ổn định, điện thoại chỉ để làm cảnh.
3. **Bạn hoàn toàn không biết nó đang làm gì**: AI như một chiếc hộp đen bí ẩn.

Ngày 13 tháng 3, Alibaba Cloud ra mắt JVSClaw, giải quyết triệt để các vấn đề này:

![Hình ảnh](https://upload.maynor1024.live/file/1773799159694_image_1.bin)

### Khởi chạy trong 3 phút

Quy trình gói gọn trong đúng 3 bước: Đặt tên cho bot, chọn phong cách tính cách, và bấm Tạo.

![Hình ảnh](https://upload.maynor1024.live/file/1773799168918_image_2.bin)

- Mỗi instance được cấp phát **6 Core CPU và 12GB RAM**, cài sẵn môi trường Python và Node.js.
- **ClawSpace**: Cung cấp môi trường sandbox độc lập, dữ liệu cách ly hoàn toàn, đảm bảo an toàn tuyệt đối cho các kịch bản như giao dịch định lượng.
- Mã hóa đầu cuối và mã hóa lưu trữ toàn diện.

### Kho kỹ năng tự tiến hóa

JVSClaw chỉ trang bị 3 kỹ năng tự tiến hóa cơ bản. Khi gặp tác vụ thiếu kỹ năng, bạn chỉ cần ra lệnh: *"Nếu chưa có kỹ năng này, hãy tự tìm kiếm và tạo mới"*.

![Hình ảnh](https://upload.maynor1024.live/file/1773799172115_image_3.bin)

Nó sẽ tự tìm kiếm trên cộng đồng hoặc tự viết mã mới để thích nghi với các thay đổi của website mục tiêu:

![Hình ảnh](https://mmbiz.qpic.cn/mmbiz_png/hBIict2nry2lkhQ4ibB9xTI1En1INwH8U9bZQJwQkUicVAC0xcvQ31F50jSRaI791tb8ubftp2FRyRfwLCGENkgw0BEQFmv698Q88OdRiaeQoJU/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

Hoặc tự động phân tích báo cáo tài chính bằng chuỗi kỹ năng: bóc tách PDF -> làm sạch dữ liệu -> mô hình hóa Excel:

![Hình ảnh](https://mmbiz.qpic.cn/sz_mmbiz_png/hBIict2nry2k8kL9WqZwdEIWVEY5osElvhLQevWm2DTLGfV2IK4ia5wv7pPSraEnictga2rF9jEm7ygNart12Qn5DibLnjEtPQ6HDLZp0MqH4N8/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5)

![Hình ảnh](https://upload.maynor1024.live/file/1773799181587_image_6.bin)

### Giám sát trực quan từng thao tác

Giao diện ClawSpace truyền hình ảnh trực tiếp toàn bộ thao tác của AI: mở trình duyệt, bấm nút, điền biểu mẫu. Khi gặp bước xác thực người dùng, bạn có thể chủ động tiếp quản bằng tay.

![Hình ảnh](https://upload.maynor1024.live/file/1773799196793_image_7.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799200027_image_8.bin)

### Linh hoạt giữa Đám mây và Cục bộ

- Đám mây: Phục vụ giám sát 24/7 với chi phí thấp.
- Cục bộ: Lưu trữ và xử lý dữ liệu nội bộ tuân thủ an toàn thông tin.

![Hình ảnh](https://upload.maynor1024.live/file/1773799196247_image_9.bin)

### MobileClaw trên thiết bị Android

Tương tác trực tiếp với giao diện Android như tay người thật, hỗ trợ chăm sóc khách hàng tự động và quản lý giao dịch từ xa.

![Hình ảnh](https://upload.maynor1024.live/file/1773799213023_image_10.bin)

- **Trang web sản phẩm**: https://jvs.wuying.aliyun.com
- **Ưu đãi**: Đăng ký nhận 14 ngày gọi mô hình lớn miễn phí.

---

## 8. Baota Panel OpenClaw (aaPanel)

Phiên bản **Plugin OpenClaw** mới trên Baota Panel (aaPanel): **Cài đặt trực tiếp trên hệ điều hành máy chủ (Host OS), quản trị trực quan ngay trong Panel, mở ra là dùng được ngay.**

Tích hợp đồng bộ: **Trò chuyện AI, Quản lý Nhân vật, Quản lý Mô hình, Cài đặt Kỹ năng, Kết nối Tin nhắn, Quản lý Dịch vụ và WebUI**.

![Hình ảnh](https://upload.maynor1024.live/file/1773799216343_image_1.bin)

Hỗ trợ tiếp quản các bản cài đặt OpenClaw độc lập có sẵn trên máy chủ (không hỗ trợ phiên bản chạy qua Docker):

![Hình ảnh](https://upload.maynor1024.live/file/1773799214017_image_2.bin)

### Không cần bắt đầu lại từ các bước phức tạp

Cài đặt tiện lợi thông qua App Store của Panel:

![Hình ảnh](https://upload.maynor1024.live/file/1773799220838_image_3.bin)

Quản lý tập trung mọi tính năng trong một giao diện duy nhất:

![Hình ảnh](https://upload.maynor1024.live/file/1773799224133_image_4.bin)

### Mở ra là trải nghiệm được ngay

Giao diện trò chuyện tích hợp sẵn, hiển thị rõ ràng mô hình mặc định và hạn mức khả dụng:

![Hình ảnh](https://upload.maynor1024.live/file/1773799231258_image_5.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799231348_image_6.bin)

### Quản lý nhân vật (Role/Persona) theo từng kịch bản

Tạo và chỉnh sửa nhân vật với định nghĩa vai trò, tính cách và câu lệnh chuyên biệt:

![Hình ảnh](https://upload.maynor1024.live/file/1773799238744_image_7.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799245290_image_8.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799252544_image_9.bin)

### Quản lý và bảo trì mô hình trực quan

Quản lý danh sách model, nhà cung cấp, mô hình mặc định (ví dụ `qwen3.5-plus`):

![Hình ảnh](https://upload.maynor1024.live/file/1773799250901_image_10.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799260604_image_11.bin)

### Chợ kỹ năng (Skill Market) phong phú

Tìm kiếm, cài đặt 1-click hoặc thêm kỹ năng tùy biến qua thư mục cục bộ:

![Hình ảnh](https://upload.maynor1024.live/file/1773799264312_image_12.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799268132_image_13.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799273227_image_14.bin)

### Kết nối đa nền tảng nhắn tin

Hỗ trợ QQ, Feishu / Lark, DingTalk, WeCom:

![Hình ảnh](https://upload.maynor1024.live/file/1773799275865_image_15.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799281570_image_16.bin)

### Quản lý dịch vụ, Cổng lắng nghe và Logs

Theo dõi trạng thái, khởi động lại, kiểm tra logs lỗi và đổi port dễ dàng:

![Hình ảnh](https://upload.maynor1024.live/file/1773799283904_image_17.bin)

![Hình ảnh](https://upload.maynor1024.live/file/1773799286704_image_18.bin)

---

## 9. Baidu OpenClaw

> 📝 Nội dung đang được cập nhật, xin vui lòng đón chờ...

## 10. Tencent QClaw

> 📝 Nội dung đang được cập nhật, xin vui lòng đón chờ...

---

## 🎯 Tổng Kết & Lời Khuyên Lựa Chọn

Qua hướng dẫn trên, bạn có thể thấy hệ sinh thái OpenClaw hiện nay đã vô cùng đa dạng, mỗi nền tảng đều sở hữu những thế mạnh riêng biệt:

### Gợi ý phương án tối ưu

**Nếu bạn là người mới lần đầu trải nghiệm**:
- Bắt đầu ngay với **Lark / Feishu Miaoda**: hoàn toàn miễn phí và thao tác đơn giản nhất.

**Nếu bạn muốn triển khai sử dụng lâu dài ổn định**:
- Người có máy chủ riêng: chọn **Baota Panel (aaPanel)** để tiện quản lý trực quan.
- Doanh nghiệp, đội ngũ chuyên nghiệp: chọn **JVSClaw** để đảm bảo bảo mật và cách ly dữ liệu.

**Nếu bạn cần điều khiển linh hoạt qua điện thoại di động**:
- **Kimi OpenClaw**: cung cấp môi trường sandbox đám mây mạnh mẽ.
- **Tencent WorkBuddy**: hỗ trợ điều khiển máy tính từ xa qua ứng dụng nhắn tin.

### Câu hỏi thường gặp (FAQ)

**Q: Các nền tảng này có thu phí không?**  
A: Đa số các nền tảng đều cung cấp hạn mức miễn phí hoặc thời gian dùng thử. Feishu Miaoda hiện đang mở miễn phí hoàn toàn, các nền tảng khác tính phí theo gói hoặc theo lưu lượng sử dụng thực tế.

**Q: Không biết lập trình có tự cài được không?**  
A: Hoàn toàn được! Toàn bộ hướng dẫn này được thiết kế dành riêng cho người mới, bạn chỉ cần làm theo các bước hướng dẫn trực quan là xong.

**Q: Có thể sử dụng đồng thời nhiều nền tảng được không?**  
A: Hoàn toàn được! Bạn có thể kết hợp linh hoạt tùy theo nhu cầu và tình huống công việc cụ thể.

---

## 📚 Tài Nguyên Bổ Trợ

- 📖 **Tài liệu chính thức**: [Tài liệu OpenClaw](https://docs.tryopenclaw.asia/)
- 💬 **Thảo luận cộng đồng**: [OpenClaw Community Discussions](https://github.com/xianyu110/awesome-openclaw-tutorial/discussions)
- 🎓 **Video hướng dẫn**: [Kênh Video hướng dẫn](https://space.bilibili.com/)

> ⭐ **Nếu tài liệu này mang lại giá trị cho bạn, đừng quên bấm Star ủng hộ kho lưu trữ GitHub của chúng tôi nhé!**

---

**Thời gian cập nhật gần nhất**: Tháng 03 năm 2026  
**Phiên bản tài liệu**: v1.0
