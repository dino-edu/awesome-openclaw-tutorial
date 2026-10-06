#!/bin/bash

# Kịch bản xử lý tệp tin hàng loạt theo lô
# Cách sử dụng: ./batch-process-files.sh <source_directory> <target_directory>

if [ $# -lt 2 ]; then
  echo "Cách sử dụng: ./batch-process-files.sh <thư_mục_nguồn> <thư_mục_đích>"
  echo "Ví dụ: ./batch-process-files.sh ./input ./output"
  exit 1
fi

SOURCE_DIR="$1"
TARGET_DIR="$2"

# Tạo thư mục đích nếu chưa có
mkdir -p "$TARGET_DIR"

echo "Bắt đầu xử lý tệp tin hàng loạt..."
echo "Thư mục nguồn: $SOURCE_DIR"
echo "Thư mục đích: $TARGET_DIR"

# Lặp và xử lý tất cả các tệp
for file in "$SOURCE_DIR"/*; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "Đang xử lý tệp: $filename"

    # Bạn có thể thêm logic xử lý riêng tại đây
    # Ví dụ: Sao chép tệp sang thư mục đích
    cp "$file" "$TARGET_DIR/"

    # Ví dụ: Sử dụng công cụ AI để xử lý tệp
    # openclaw chat "Hãy xử lý tệp $filename, tạo bản tóm tắt và trích xuất thông tin then chốt"

    # Ví dụ: Sử dụng OpenClaw xử lý
    # RESULT=$(openclaw file "$file" "Phân tích nội dung của tệp này")
    # echo "$RESULT" > "$TARGET_DIR/${filename}.analysis.txt"
  fi
done

echo "✓ Xử lý hoàn tất!"
echo "Số tệp đã xử lý: $(ls -1 "$TARGET_DIR" | wc -l)"
