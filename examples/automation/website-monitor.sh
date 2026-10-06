#!/bin/bash

# Kịch bản giám sát nội dung website
# Giám sát thay đổi nội dung trên trang chỉ định, gửi thông báo khi phát hiện thay đổi
# Cách sử dụng: ./website-monitor.sh <url> <keyword> <notification_method>

if [ $# -lt 2 ]; then
  echo "Cách sử dụng: ./website-monitor.sh <url> <keyword> [notification_method]"
  echo "Ví dụ: ./website-monitor.sh https://example.com 'ra mắt sản phẩm mới' feishu"
  exit 1
fi

URL="$1"
KEYWORD="$2"
NOTIFICATION="${3:-console}"
HASH_FILE="/tmp/website-monitor-$(echo "$URL" | md5sum | cut -d' ' -f1).hash"

echo "Giám sát website: $URL"
echo "Từ khóa: $KEYWORD"
echo "Phương thức thông báo: $NOTIFICATION"

# Lấy nội dung trang web
CURRENT_CONTENT=$(curl -s "$URL" | grep -o "$KEYWORD" | head -1)

# Tính toán mã hash của nội dung
CURRENT_HASH=$(echo "$CURRENT_CONTENT" | md5sum | cut -d' ' -f1)

# Kiểm tra xem đã có lịch sử ghi nhận chưa
if [ -f "$HASH_FILE" ]; then
  PREVIOUS_HASH=$(cat "$HASH_FILE")

  # So sánh giá trị hash
  if [ "$CURRENT_HASH" != "$PREVIOUS_HASH" ]; then
    echo "⚠ Phát hiện thay đổi! Xuất hiện từ khóa '$KEYWORD'"
    echo "Thời gian: $(date)"

    # Gửi thông báo
    case "$NOTIFICATION" in
      feishu)
        # Gửi thông báo Lark / Feishu
        echo "Đang gửi thông báo Lark/Feishu..."
        # curl -X POST "https://open.feishu.cn/open-apis/bot/v2/hook/your-webhook" \
        #   -H "Content-Type: application/json" \
        #   -d "{\"msg_type\":\"text\",\"content\":{\"text\":\"Website $URL phát hiện thay đổi: $KEYWORD\"}}"
        ;;
      console)
        # Thông báo ra console
        echo "📢 Thông báo: Website $URL phát hiện thay đổi: $KEYWORD"
        ;;
    esac
  else
    echo "✓ Không có thay đổi"
  fi
else
  echo "Chạy lần đầu tiên, đang thiết lập baseline ban đầu"
fi

# Lưu giá trị hash hiện tại
echo "$CURRENT_HASH" > "$HASH_FILE"
