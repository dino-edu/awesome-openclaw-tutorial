#!/bin/bash

# Kịch bản sao lưu cấu hình OpenClaw
# Cách sử dụng: ./backup-config.sh

BACKUP_DIR="$HOME/.openclaw/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/openclaw-config-backup-$TIMESTAMP.tar.gz"

# Tạo thư mục sao lưu nếu chưa có
mkdir -p "$BACKUP_DIR"

echo "Bắt đầu sao lưu cấu hình OpenClaw..."
echo "Thời gian sao lưu: $(date)"
echo "Vị trí sao lưu: $BACKUP_FILE"

# Nén sao lưu tệp cấu hình
tar -czf "$BACKUP_FILE" -C "$HOME/.openclaw" openclaw.json

if [ $? -eq 0 ]; then
  echo "✓ Sao lưu thành công!"
  echo "Tệp sao lưu: $BACKUP_FILE"
  echo "Kích thước tệp: $(du -du "$BACKUP_FILE" | cut -f1)"

  # Giữ lại các bản sao lưu trong 30 ngày gần nhất
  find "$BACKUP_DIR" -name "openclaw-config-backup-*.tar.gz" -mtime +30 -delete
  echo "Đã dọn dẹp các bản sao lưu cũ quá 30 ngày"
else
  echo "✗ Sao lưu thất bại!"
  exit 1
fi
