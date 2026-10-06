import re
import pytest
from scripts.generate_search_index import extract_title

def test_chapter_title_extraction():
    patterns = r'^(?:第[\dIVX]+章|Chương\s+[\dIVX\d]+)[：:]\s*'
    raw_title = "Chương 1: Giới thiệu về OpenClaw"
    cleaned = re.sub(patterns, '', raw_title).strip()
    assert cleaned == "Giới thiệu về OpenClaw"

def test_script_extract_title_vietnamese_chapter():
    content = "# Chương 1: Giới thiệu về OpenClaw\n\nNội dung chi tiết..."
    title = extract_title(content)
    assert title == "Giới thiệu về OpenClaw"

def test_script_extract_title_vietnamese_appendix():
    content = "# Phụ lục A: Bảng tra cứu lệnh\n\nDanh sách lệnh..."
    title = extract_title(content)
    assert title == "Bảng tra cứu lệnh"

def test_script_extract_title_chinese_compatibility():
    content = "# 第1章：OpenClaw简介\n\n正文内容..."
    title = extract_title(content)
    assert title == "OpenClaw简介"
