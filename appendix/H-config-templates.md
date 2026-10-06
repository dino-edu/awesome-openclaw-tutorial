# Phụ lục H: Mẫu Tệp Cấu Hình và Ví Dụ Thực Tế

> 📝 **Sẵn sàng sử dụng ngay**: Bạn có thể sao chép trực tiếp các mẫu cấu hình này để nhanh chóng thiết lập và vận hành OpenClaw.

---

## 📋 Mục lục

- [Mẫu cấu hình cơ bản](#mẫu-cấu-hình-cơ-bản)
- [Mẫu cấu hình API](#mẫu-cấu-hình-api)
- [Mẫu cấu hình tích hợp đa nền tảng](#mẫu-cấu-hình-tích-hợp-đa-nền-tảng)
- [Mẫu cấu hình Skills](#mẫu-cấu-hình-skills)
- [Mẫu cấu hình tự động hóa](#mẫu-cấu-hình-tự-động-hóa)
- [Mẫu cấu hình nâng cao & tối ưu](#mẫu-cấu-hình-nâng-cao--tối-ưu)
- [Cấu hình hoàn chỉnh cho môi trường sản xuất](#cấu-hình-hoàn-chỉnh-cho-môi-trường-sản-xuất)
- [Công cụ hỗ trợ kiểm tra và sinh cấu hình](#công-cụ-hỗ-trợ-kiểm-tra-và-sinh-cấu-hình)

---

## 🎯 Mẫu cấu hình cơ bản

### 1. Cấu hình tối giản (Khuyên dùng cho người mới)

**Đường dẫn tệp**: `~/.openclaw/config.json`

```json
{
  "gateway": {
    "mode": "local",
    "port": 18789,
    "bind": "127.0.0.1"
  },
  "models": {
    "default": "deepseek-chat",
    "providers": {
      "deepseek": {
        "apiKey": "YOUR_DEEPSEEK_API_KEY",
        "baseURL": "https://api.deepseek.com"
      }
    }
  },
  "workspace": {
    "path": "~/Documents/OpenClaw"
  }
}
```

**Hướng dẫn sử dụng**:
1. Thay thế `YOUR_DEEPSEEK_API_KEY` bằng API Key thực tế của bạn
2. Lưu vào tệp `~/.openclaw/config.json`
3. Khởi chạy Gateway bằng lệnh `openclaw gateway run` hoặc `openclaw daemon start`

---

### 2. Cấu hình cơ bản đầy đủ

```json
{
  "gateway": {
    "mode": "local",
    "port": 18789,
    "bind": "127.0.0.1",
    "ssl": {
      "enabled": false
    },
    "cors": {
      "enabled": true,
      "origins": ["http://localhost:3000"]
    }
  },
  "models": {
    "default": "deepseek-chat",
    "streaming": true,
    "timeout": 60000,
    "providers": {
      "deepseek": {
        "apiKey": "YOUR_DEEPSEEK_API_KEY",
        "baseURL": "https://api.deepseek.com",
        "models": {
          "deepseek-chat": {
            "maxTokens": 4000,
            "temperature": 0.7
          }
        }
      }
    }
  },
  "workspace": {
    "path": "~/Documents/OpenClaw",
    "autoCreate": true
  },
  "files": {
    "searchPaths": [
      "~/Documents",
      "~/Desktop"
    ],
    "excludePaths": [
      "~/.ssh",
      "~/Documents/Private"
    ],
    "excludePatterns": [
      "node_modules",
      ".git",
      "*.log"
    ]
  },
  "cache": {
    "enabled": true,
    "ttl": 3600,
    "maxSize": 1000
  },
  "logging": {
    "level": "info",
    "file": "~/.openclaw/logs/gateway.log"
  }
}
```

---

## 🔑 Mẫu cấu hình API

### 1. Cấu hình API đơn lẻ (DeepSeek)

```json
{
  "models": {
    "default": "deepseek-chat",
    "providers": {
      "deepseek": {
        "apiKey": "sk-xxx",
        "baseURL": "https://api.deepseek.com",
        "models": {
          "deepseek-chat": {
            "maxTokens": 4000,
            "temperature": 0.7
          },
          "deepseek-coder": {
            "maxTokens": 8000,
            "temperature": 0.2
          }
        }
      }
    }
  }
}
```

---

### 2. Cấu hình đa API kết hợp (Khuyến nghị)

```json
{
  "models": {
    "default": "deepseek-chat",
    "code": "deepseek-coder",
    "longContext": "kimi",
    "vision": "gpt-4-vision",
    "providers": {
      "deepseek": {
        "apiKey": "sk-xxx",
        "baseURL": "https://api.deepseek.com",
        "models": {
          "deepseek-chat": {
            "maxTokens": 4000,
            "temperature": 0.7
          },
          "deepseek-coder": {
            "maxTokens": 8000,
            "temperature": 0.2
          }
        }
      },
      "moonshot": {
        "apiKey": "sk-xxx",
        "baseURL": "https://api.moonshot.cn",
        "models": {
          "kimi": {
            "maxTokens": 200000,
            "temperature": 0.7
          }
        }
      },
      "openai": {
        "apiKey": "sk-xxx",
        "baseURL": "https://api.openai.com",
        "models": {
          "gpt-4-vision": {
            "maxTokens": 4000,
            "temperature": 0.7
          }
        }
      }
    }
  }
}
```

---

### 3. Cấu hình dịch vụ API chuyển tiếp trung gian (Relay API)

```json
{
  "models": {
    "default": "gpt-3.5-turbo",
    "providers": {
      "relay": {
        "apiKey": "YOUR_RELAY_API_KEY",
        "baseURL": "https://api.relay-service.com/v1",
        "models": {
          "gpt-3.5-turbo": {
            "maxTokens": 4000,
            "temperature": 0.7
          },
          "gpt-4": {
            "maxTokens": 8000,
            "temperature": 0.7
          },
          "claude-3-opus": {
            "maxTokens": 4000,
            "temperature": 0.7
          }
        }
      }
    }
  }
}
```

---

### 4. Định tuyến mô hình thông minh (Smart Model Routing)

```json
{
  "models": {
    "routing": {
      "enabled": true,
      "rules": [
        {
          "condition": "tokens < 500",
          "model": "deepseek-chat",
          "description": "Tác vụ ngắn đơn giản"
        },
        {
          "condition": "tokens >= 500 && tokens < 2000",
          "model": "gpt-3.5-turbo",
          "description": "Tác vụ mức trung bình"
        },
        {
          "condition": "tokens >= 2000",
          "model": "gpt-4",
          "description": "Tác vụ suy luận phức tạp"
        },
        {
          "condition": "hasImage",
          "model": "gpt-4-vision",
          "description": "Thấu cảm và phân tích hình ảnh"
        },
        {
          "condition": "isCode",
          "model": "deepseek-coder",
          "description": "Viết và gỡ lỗi mã nguồn"
        }
      ]
    }
  }
}
```

---

## 📱 Mẫu cấu hình tích hợp đa nền tảng

### 1. Cấu hình Bot Lark / Feishu

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "appId": "cli_xxx",
      "appSecret": "xxx",
      "verificationToken": "xxx",
      "encryptKey": "xxx",
      "webhookUrl": "https://your-domain.com/webhook/feishu",
      "features": {
        "streaming": true,
        "fileUpload": true,
        "imageRecognition": true
      },
      "filters": {
        "onlyMentions": true,
        "ignoreGroups": ["Nhóm buôn chuyện"],
        "keywords": ["openclaw", "trợ giúp"]
      }
    }
  }
}
```

---

### 2. Cấu hình Bot WeCom (WeChat Doanh nghiệp)

```json
{
  "channels": {
    "wecom": {
      "enabled": true,
      "corpId": "ww123456",
      "agentId": "1000001",
      "secret": "xxx",
      "token": "xxx",
      "encodingAESKey": "xxx",
      "webhookUrl": "https://your-domain.com/webhook/wecom",
      "features": {
        "fileUpload": true,
        "imageRecognition": true
      }
    }
  }
}
```

---

### 3. Cấu hình Bot DingTalk

```json
{
  "channels": {
    "dingtalk": {
      "enabled": true,
      "appKey": "xxx",
      "appSecret": "xxx",
      "agentId": "xxx",
      "webhookUrl": "https://your-domain.com/webhook/dingtalk",
      "features": {
        "fileUpload": true
      }
    }
  }
}
```

---

### 4. Cấu hình Bot Telegram

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
      "webhookUrl": "https://your-domain.com/webhook/telegram",
      "features": {
        "streaming": true,
        "fileUpload": true,
        "imageRecognition": true
      },
      "allowedUsers": [
        123456789,
        987654321
      ]
    }
  }
}
```

---

### 5. Cấu hình đa Agent phân công theo nhiệm vụ

```json
{
  "agents": {
    "work": {
      "name": "Trợ lý Công việc",
      "model": "gpt-4",
      "workspace": "~/Documents/Work",
      "channels": ["feishu"],
      "systemPrompt": "Bạn là một trợ lý công việc chuyên nghiệp, chịu trách nhiệm xử lý các tác vụ nghiệp vụ văn phòng.",
      "skills": [
        "@openclaw/skill-file-search",
        "@openclaw/skill-calendar",
        "@openclaw/skill-email"
      ]
    },
    "personal": {
      "name": "Trợ lý Cá nhân",
      "model": "deepseek-chat",
      "workspace": "~/Documents/Personal",
      "channels": ["telegram"],
      "systemPrompt": "Bạn là người bạn trợ lý cá nhân thân thiện, hỗ trợ giải quyết các vấn đề trong đời sống hàng ngày.",
      "skills": [
        "@openclaw/skill-web-search",
        "@openclaw/skill-weather",
        "@openclaw/skill-news"
      ]
    },
    "code": {
      "name": "Trợ lý Lập trình",
      "model": "deepseek-coder",
      "workspace": "~/Projects",
      "channels": ["telegram"],
      "systemPrompt": "Bạn là một kỹ sư phần mềm cao cấp, thành thạo nhiều ngôn ngữ lập trình và kiến trúc hệ thống.",
      "skills": [
        "@openclaw/skill-github",
        "@openclaw/skill-code-review",
        "@openclaw/skill-documentation"
      ]
    }
  }
}
```

---

## 🧩 Mẫu cấu hình Skills

### 1. Cấu hình Skills cơ bản

```json
{
  "skills": {
    "enabled": true,
    "autoUpdate": false,
    "directory": "~/.openclaw/skills",
    "installed": [
      "@openclaw/skill-file-search",
      "@openclaw/skill-web-search",
      "@openclaw/skill-calendar"
    ],
    "priority": [
      "@openclaw/skill-file-search",
      "@openclaw/skill-web-search",
      "@openclaw/skill-calendar"
    ]
  }
}
```

---

### 2. Cấu hình Skills chi tiết kèm tham số

```json
{
  "skills": {
    "enabled": true,
    "autoUpdate": true,
    "updateSchedule": "0 3 * * 0",
    "directory": "~/.openclaw/skills",
    "registry": {
      "@openclaw/skill-calendar": {
        "version": "1.1.0",
        "enabled": true,
        "config": {
          "provider": "apple",
          "defaultCalendar": "Công việc"
        }
      }
    }
  }
}
```

---

## 🔄 Mẫu cấu hình tự động hóa

### 1. Cấu hình tác vụ định kỳ (Cron Automation)

```json
{
  "automation": {
    "enabled": true,
    "tasks": [
      {
        "name": "Bản tin AI hàng ngày",
        "schedule": "0 9 * * *",
        "action": "sendMessage",
        "params": {
          "channel": "feishu",
          "message": "Vui lòng tổng hợp bản tin thị trường AI hôm nay"
        }
      },
      {
        "name": "Báo cáo tổng kết tuần",
        "schedule": "0 18 * * 5",
        "action": "sendMessage",
        "params": {
          "channel": "feishu",
          "message": "Vui lòng lập báo cáo tổng kết công việc tuần này"
        }
      },
      {
        "name": "Sao lưu định kỳ",
        "schedule": "0 2 * * *",
        "action": "runCommand",
        "params": {
          "command": "tar -czf ~/backups/openclaw-$(date +%Y%m%d).tar.gz ~/.openclaw"
        }
      }
    ]
  }
}
```

---

### 2. Giám sát website tự động (Website Monitor)

```json
{
  "monitoring": {
    "enabled": true,
    "sites": [
      {
        "name": "Trang chủ OpenClaw",
        "url": "https://openclaw.ai",
        "interval": 3600,
        "selector": ".version",
        "notify": {
          "channel": "feishu",
          "message": "Trang chủ OpenClaw vừa có cập nhật mới: {content}"
        }
      },
      {
        "name": "Tin tức Claude API",
        "url": "https://www.anthropic.com/news",
        "interval": 7200,
        "selector": "article:first-child",
        "notify": {
          "channel": "telegram",
          "message": "Claude vừa có thông báo mới: {title}"
        }
      }
    ]
  }
}
```

---

### 3. Giám sát hệ thống tệp cục bộ (File Watcher)

```json
{
  "fileWatcher": {
    "enabled": true,
    "watches": [
      {
        "path": "~/Documents/Invoices",
        "pattern": "*.pdf",
        "action": "processInvoice",
        "notify": {
          "channel": "feishu",
          "message": "Hóa đơn mới đã được xử lý: {filename}"
        }
      },
      {
        "path": "~/Downloads",
        "pattern": "*.zip",
        "action": "autoExtract",
        "destination": "~/Documents/Extracted"
      }
    ]
  }
}
```

---

## ⚙️ Mẫu cấu hình nâng cao & tối ưu

### 1. Tối ưu hóa hiệu năng (Caching & Queue)

```json
{
  "performance": {
    "cache": {
      "enabled": true,
      "type": "redis",
      "redis": {
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "ttl": 3600
      }
    },
    "rateLimit": {
      "enabled": true,
      "maxRequests": 100,
      "window": 60000
    },
    "concurrency": {
      "maxConcurrent": 10,
      "queue": {
        "enabled": true,
        "maxSize": 100
      }
    }
  }
}
```

---

### 2. Cấu hình an ninh chuyên sâu

```json
{
  "security": {
    "authentication": {
      "enabled": true,
      "type": "jwt",
      "secret": "YOUR_SECRET_KEY",
      "expiresIn": "7d"
    },
    "authorization": {
      "enabled": true,
      "roles": {
        "admin": {
          "permissions": ["*"]
        },
        "user": {
          "permissions": [
            "read:files",
            "write:files",
            "execute:skills"
          ]
        }
      }
    },
    "encryption": {
      "enabled": true,
      "algorithm": "aes-256-gcm",
      "key": "YOUR_ENCRYPTION_KEY"
    },
    "firewall": {
      "enabled": true,
      "allowIPs": [
        "127.0.0.1",
        "192.168.1.0/24"
      ],
      "denyIPs": []
    }
  }
}
```

---

### 3. Cấu hình giám sát số liệu và cảnh báo (Prometheus Metrics)

```json
{
  "monitoring": {
    "enabled": true,
    "metrics": {
      "enabled": true,
      "port": 9090,
      "path": "/metrics"
    },
    "healthCheck": {
      "enabled": true,
      "port": 8080,
      "path": "/health"
    },
    "alerts": {
      "enabled": true,
      "channels": ["email", "feishu"],
      "rules": [
        {
          "metric": "cpu_usage",
          "threshold": 80,
          "duration": 300,
          "message": "Mức sử dụng CPU vượt quá 80%"
        },
        {
          "metric": "memory_usage",
          "threshold": 90,
          "duration": 300,
          "message": "Mức chiếm dụng bộ nhớ RAM vượt quá 90%"
        },
        {
          "metric": "error_rate",
          "threshold": 5,
          "duration": 60,
          "message": "Tỷ lệ lỗi hệ thống tăng bất thường"
        }
      ]
    }
  },
  "logging": {
    "level": "info",
    "format": "json",
    "outputs": [
      {
        "type": "file",
        "path": "~/.openclaw/logs/gateway.log",
        "rotation": {
          "maxSize": "10M",
          "maxFiles": 10,
          "compress": true
        }
      },
      {
        "type": "console",
        "colorize": true
      }
    ]
  }
}
```

---

### 4. Sao lưu và phục hồi dữ liệu tự động

```json
{
  "backup": {
    "enabled": true,
    "schedule": "0 2 * * *",
    "destination": "~/openclaw-backups",
    "retention": {
      "daily": 7,
      "weekly": 4,
      "monthly": 12
    },
    "include": [
      "~/.openclaw/config.json",
      "~/.openclaw/skills",
      "~/.openclaw/data"
    ],
    "exclude": [
      "~/.openclaw/logs",
      "~/.openclaw/cache"
    ],
    "compression": {
      "enabled": true,
      "algorithm": "gzip"
    },
    "encryption": {
      "enabled": true,
      "key": "YOUR_BACKUP_ENCRYPTION_KEY"
    },
    "remote": {
      "enabled": false,
      "type": "s3",
      "bucket": "openclaw-backups",
      "region": "ap-southeast-1",
      "accessKeyId": "xxx",
      "secretAccessKey": "xxx"
    }
  }
}
```

---

## 📦 Cấu hình hoàn chỉnh cho môi trường sản xuất

```json
{
  "gateway": {
    "mode": "production",
    "port": 18789,
    "bind": "0.0.0.0",
    "ssl": {
      "enabled": true,
      "cert": "/etc/ssl/certs/openclaw.crt",
      "key": "/etc/ssl/private/openclaw.key"
    },
    "cors": {
      "enabled": true,
      "origins": ["https://openclaw.yourdomain.com"]
    }
  },
  "models": {
    "default": "deepseek-chat",
    "code": "deepseek-coder",
    "longContext": "kimi",
    "streaming": true,
    "timeout": 60000,
    "routing": {
      "enabled": true,
      "rules": [
        {
          "condition": "tokens < 500",
          "model": "deepseek-chat"
        },
        {
          "condition": "tokens >= 500 && tokens < 2000",
          "model": "gpt-3.5-turbo"
        },
        {
          "condition": "tokens >= 2000",
          "model": "gpt-4"
        }
      ]
    },
    "providers": {
      "deepseek": {
        "apiKey": "${DEEPSEEK_API_KEY}",
        "baseURL": "https://api.deepseek.com"
      },
      "moonshot": {
        "apiKey": "${MOONSHOT_API_KEY}",
        "baseURL": "https://api.moonshot.cn"
      },
      "openai": {
        "apiKey": "${OPENAI_API_KEY}",
        "baseURL": "https://api.openai.com"
      }
    }
  },
  "workspace": {
    "path": "/data/openclaw/workspace",
    "autoCreate": true
  },
  "files": {
    "searchPaths": [
      "/data/openclaw/documents"
    ],
    "excludePaths": [
      "/data/openclaw/private"
    ],
    "index": {
      "enabled": true,
      "incremental": true,
      "schedule": "0 2 * * *"
    }
  },
  "channels": {
    "feishu": {
      "enabled": true,
      "appId": "${FEISHU_APP_ID}",
      "appSecret": "${FEISHU_APP_SECRET}",
      "features": {
        "streaming": true,
        "fileUpload": true
      }
    }
  },
  "skills": {
    "enabled": true,
    "autoUpdate": true,
    "updateSchedule": "0 3 * * 0"
  },
  "automation": {
    "enabled": true,
    "tasks": [
      {
        "name": "Bản tin tổng hợp ngày",
        "schedule": "0 9 * * *",
        "action": "sendMessage",
        "params": {
          "channel": "feishu",
          "message": "Tổng hợp bản tin ngành AI hôm nay"
        }
      }
    ]
  },
  "performance": {
    "cache": {
      "enabled": true,
      "type": "redis",
      "redis": {
        "host": "localhost",
        "port": 6379
      }
    }
  },
  "security": {
    "authentication": {
      "enabled": true,
      "type": "jwt",
      "secret": "${JWT_SECRET}"
    },
    "firewall": {
      "enabled": true,
      "allowIPs": ["10.0.0.0/8"]
    }
  },
  "monitoring": {
    "enabled": true,
    "metrics": {
      "enabled": true,
      "port": 9090
    },
    "alerts": {
      "enabled": true,
      "channels": ["email"]
    }
  },
  "logging": {
    "level": "info",
    "format": "json",
    "outputs": [
      {
        "type": "file",
        "path": "/var/log/openclaw/gateway.log",
        "rotation": {
          "maxSize": "10M",
          "maxFiles": 10
        }
      }
    ]
  },
  "backup": {
    "enabled": true,
    "schedule": "0 2 * * *",
    "destination": "/backup/openclaw",
    "retention": {
      "daily": 7,
      "weekly": 4,
      "monthly": 12
    }
  }
}
```

---

## 🔧 Công cụ hỗ trợ kiểm tra và sinh cấu hình

### Script kiểm tra tính hợp lệ của tệp cấu hình

```bash
#!/bin/bash
# Tên tệp: validate-config.sh

CONFIG_FILE="$HOME/.openclaw/config.json"

echo "Đang kiểm tra tệp cấu hình: $CONFIG_FILE"

# 1. Kiểm tra sự tồn tại của tệp
if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ Tệp cấu hình không tồn tại!"
  exit 1
fi

# 2. Kiểm tra tính hợp lệ của định dạng JSON
if ! jq empty "$CONFIG_FILE" 2>/dev/null; then
  echo "❌ Lỗi định dạng cú pháp JSON!"
  exit 1
fi

echo "✅ Cú pháp JSON hoàn toàn hợp lệ."

# 3. Kiểm tra các trường bắt buộc
required_fields=("gateway" "models" "workspace")
for field in "${required_fields[@]}"; do
  if ! jq -e ".$field" "$CONFIG_FILE" >/dev/null 2>&1; then
    echo "❌ Thiếu trường bắt buộc: $field"
    exit 1
  fi
  echo "✅ Trường hợp lệ: $field"
done

echo "✅ Kiểm tra cấu hình thành công! Sẵn sàng khởi chạy."
```

### Script hỗ trợ sinh cấu hình tương tác

```bash
#!/bin/bash
# Tên tệp: generate-config.sh

echo "======================================"
echo "    Trình Sinh Cấu Hình OpenClaw      "
echo "======================================"

# Nhập các thông tin cơ bản
read -p "Chọn chế độ triển khai (local/cloud): " mode
mode=${mode:-local}

read -p "Cổng kết nối Gateway (mặc định 18789): " port
port=${port:-18789}

read -p "Chọn mô hình mặc định (deepseek-chat/gpt-3.5-turbo): " model
model=${model:-deepseek-chat}

read -p "Nhập API Key tương ứng: " api_key

# Tự động tạo tệp cấu hình JSON
mkdir -p ~/.openclaw
cat > ~/.openclaw/config.json << EOF
{
  "gateway": {
    "mode": "$mode",
    "port": $port,
    "bind": "127.0.0.1"
  },
  "models": {
    "default": "$model",
    "providers": {
      "deepseek": {
        "apiKey": "$api_key",
        "baseURL": "https://api.deepseek.com"
      }
    }
  },
  "workspace": {
    "path": "~/Documents/OpenClaw"
  }
}
EOF

echo "✅ Đã tạo thành công tệp cấu hình tại: ~/.openclaw/config.json"
```

---

## 📚 Tài liệu tham khảo liên quan

- [Chương 2: Thiết lập môi trường](../docs/01-basics/02-installation.md)
- [Chương 11: Cấu hình nâng cao](../docs/03-advanced/11-advanced-configuration.md)
- [Phụ lục E: Tra cứu nhanh các sự cố thường gặp](E-common-problems.md)
- [Phụ lục F: Kinh nghiệm tránh lỗi và thực hành tốt nhất](F-best-practices.md)

---

**Cập nhật lần cuối**: 14/02/2026
