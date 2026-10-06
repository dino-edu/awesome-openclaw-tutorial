---
layout: default
title: Tìm kiếm nâng cao
---

<div class="search-container">
  <div class="search-box">
    <input type="text" id="search-input" placeholder="Tìm kiếm nội dung giáo trình..." autocomplete="off">
    <button id="search-button">🔍 Tìm kiếm</button>
  </div>

  <div id="search-stats"></div>
  <div id="search-results"></div>
</div>

<style>
.search-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.search-box {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

#search-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid #0d7377;
  outline: none;
  transition: all 0.3s;
}

#search-input:focus {
  border-color: #0f3460;
  box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
}

#search-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(120deg, #0f3460, #0d7377);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}

#search-button:hover {
  background: linear-gradient(120deg, #0d2a4f, #0a5f63);
  transform: scale(1.05);
}

#search-stats {
  margin-bottom: 1rem;
  color: #0d7377;
  font-weight: bold;
  font-size: 1.1rem;
}

#search-results {
  min-height: 200px;
}

.search-hint {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  padding: 4rem 0;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #ddd;
}

.search-result-item {
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: #ffffff;
  border: 1px solid #e1e4e8;
  border-left: 4px solid #0d7377;
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.search-result-item:hover {
  background: #f6f8fa;
  border-left-color: #0f3460;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.search-result-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.search-result-title a {
  color: #0f3460;
  text-decoration: none;
  transition: color 0.3s;
}

.search-result-title a:hover {
  color: #0d7377;
}

.search-result-excerpt {
  color: #586069;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.search-result-meta {
  font-size: 0.85rem;
  color: #0d7377;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  background: #f8f9fa;
  border-radius: 8px;
  line-height: 1.8;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #0d7377;
  font-size: 1.2rem;
  font-weight: bold;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

mark {
  background-color: #fff3cd;
  padding: 0.1em 0.3em;
  border-radius: 3px;
  font-weight: bold;
  color: #856404;
}

@media (max-width: 768px) {
  .search-box {
    flex-direction: column;
  }

  #search-input {
    border-radius: 8px 8px 0 0;
  }

  #search-button {
    border-radius: 0 0 8px 8px;
  }

  .search-result-item {
    padding: 1rem;
  }

  .search-result-title {
    font-size: 1.1rem;
  }
}
</style>

<script>
(function() {
  let searchData = [];
  let isLoading = false;

  // Phân tách từ khóa (hỗ trợ tiếng Việt, tiếng Anh và tiếng Trung)
  function tokenize(text) {
    text = text.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/g, ' ');

    const tokens = [];
    const words = text.split(/\s+/).filter(w => w.length > 0);

    words.forEach(word => {
      if (/[\u4e00-\u9fa5]/.test(word)) {
        // Tiếng Trung: phân tách theo ký tự và cặp ký tự
        for (let i = 0; i < word.length; i++) {
          tokens.push(word[i]);
          if (i < word.length - 1) {
            tokens.push(word.substr(i, 2));
          }
        }
      } else {
        // Tiếng Việt / Tiếng Anh: thêm nguyên từ
        tokens.push(word);
      }
    });

    return [...new Set(tokens)]; // Loại bỏ trùng lặp
  }

  // Tính điểm phù hợp
  function calculateScore(doc, queryTokens) {
    let score = 0;
    const title = (doc.title || '').toLowerCase();
    const excerpt = (doc.excerpt || '').toLowerCase();
    const content = (doc.content || '').toLowerCase();
    const fullText = title + ' ' + excerpt + ' ' + content;

    queryTokens.forEach(token => {
      // Khớp tiêu đề (trọng số cao nhất)
      if (title.includes(token)) {
        score += 10;
        if (title === token) score += 5; // Khớp hoàn toàn
      }

      // Khớp trích dẫn
      if (excerpt.includes(token)) {
        score += 3;
      }

      // Khớp nội dung
      if (content.includes(token)) {
        score += 1;
      }

      // Đếm tần suất xuất hiện
      const count = (fullText.match(new RegExp(token, 'g')) || []).length;
      score += Math.min(count, 5); // Tối đa 5 điểm
    });

    return score;
  }

  // Đánh dấu nổi bật từ khóa
  function highlightKeywords(text, queryTokens) {
    queryTokens.forEach(token => {
      const regex = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      text = text.replace(regex, '<mark>$1</mark>');
    });
    return text;
  }

  // Thực hiện tìm kiếm
  function performSearch(query) {
    if (!query || query.trim() === '') {
      document.getElementById('search-results').innerHTML =
        '<p class="search-hint">💡 Vui lòng nhập từ khóa tìm kiếm</p>';
      document.getElementById('search-stats').innerHTML = '';
      return;
    }

    if (searchData.length === 0) {
      document.getElementById('search-results').innerHTML =
        '<p class="loading">⏳ Đang tải chỉ mục tìm kiếm, vui lòng chờ...</p>';
      return;
    }

    document.getElementById('search-results').innerHTML =
      '<p class="loading">🔍 Đang tìm kiếm...</p>';

    // Phân tách từ khóa
    const queryTokens = tokenize(query);
    console.log('Từ khóa tìm kiếm:', queryTokens);

    // Tính điểm từng tài liệu
    const results = searchData.map(doc => ({
      ...doc,
      score: calculateScore(doc, queryTokens)
    })).filter(doc => doc.score > 0);

    // Sắp xếp theo điểm số giảm dần
    results.sort((a, b) => b.score - a.score);

    // Hiển thị kết quả
    if (results.length === 0) {
      document.getElementById('search-stats').innerHTML = '😕 Không tìm thấy nội dung phù hợp';
      document.getElementById('search-results').innerHTML = `
        <div class="no-results">
          <p>Không tìm thấy nội dung chứa "<strong>${query}</strong>"</p>
          <p>💡 Gợi ý tìm kiếm:</p>
          <ul style="text-align: left; display: inline-block;">
            <li>Thử từ khóa ngắn gọn hơn</li>
            <li>Thử dùng từ đồng nghĩa (ví dụ: "cài đặt" → "deploy", "setup")</li>
            <li>Tìm bằng từ khóa kỹ thuật (ví dụ: "API", "Skills")</li>
          </ul>
          <p style="margin-top: 1rem;">
            <a href="/">Xem mục lục giáo trình</a> ·
            <a href="/appendix/A-command-reference.html">Bảng tra cứu lệnh</a>
          </p>
        </div>
      `;
      return;
    }

    // Hiển thị thống kê
    document.getElementById('search-stats').innerHTML =
      `✨ Tìm thấy ${results.length} kết quả liên quan`;

    // Hiển thị kết quả (tối đa 50 kết quả)
    let html = '';
    results.slice(0, 50).forEach((result, index) => {
      const title = highlightKeywords(result.title || 'Chưa đặt tên', queryTokens);
      const excerpt = highlightKeywords(
        (result.excerpt || '').substring(0, 200) +
        ((result.excerpt || '').length > 200 ? '...' : ''),
        queryTokens
      );

      // Nhãn danh mục
      let categoryBadge = '';
      if (result.category) {
        const categoryMap = {
          'docs': '📚 Tài liệu',
          'appendix': '📖 Phụ lục',
          'examples': '💡 Ví dụ',
          'guide': '🎯 Hướng dẫn',
          'root': '🏠 Trang chủ'
        };
        const categoryName = categoryMap[result.category] || result.category;
        categoryBadge = `<span style="display: inline-block; padding: 0.2rem 0.5rem; background: #e1f5fe; color: #0277bd; border-radius: 3px; font-size: 0.85rem; margin-right: 0.5rem;">${categoryName}</span>`;
      }

      html += `
        <div class="search-result-item">
          <div class="search-result-title">
            <span style="color: #999; margin-right: 0.5rem;">${index + 1}.</span>
            ${categoryBadge}
            <a href="${result.url}">${title}</a>
          </div>
          ${excerpt ? `<div class="search-result-excerpt">${excerpt}</div>` : ''}
          <div class="search-result-meta">📄 ${result.url}</div>
        </div>
      `;
    });

    if (results.length > 50) {
      html += `<p style="text-align: center; color: #666; margin-top: 2rem;">Hiển thị 50 kết quả đầu tiên trong tổng số ${results.length} kết quả</p>`;
    }

    document.getElementById('search-results').innerHTML = html;
  }

  // Tải dữ liệu chỉ mục tìm kiếm
  async function loadSearchData() {
    if (isLoading) return;
    isLoading = true;

    const searchFiles = [
      '/search-index-expanded.json',
      '/search-index.json',
      '/search.json'
    ];

    for (const file of searchFiles) {
      try {
        console.log(`🔍 Đang thử tải: ${file}`);
        const response = await fetch(file);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data || data.length === 0) {
          throw new Error('Dữ liệu tìm kiếm rỗng');
        }

        searchData = data;
        console.log(`✅ Tải thành công chỉ mục tìm kiếm: ${file}`, `Tổng cộng ${data.length} tài liệu`);
        isLoading = false;
        return;

      } catch (error) {
        console.error(`❌ Tải thất bại (${file}):`, error);
        continue;
      }
    }

    // Tất cả các file đều tải thất bại
    console.error('❌ Tất cả các file chỉ mục tìm kiếm đều tải thất bại');
    document.getElementById('search-results').innerHTML = `
      <div class="no-results">
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">😕 Tính năng tìm kiếm tạm thời chưa khả dụng</p>
        <p>Nguyên nhân có thể do:</p>
        <ul style="text-align: left; display: inline-block;">
          <li>Trang web đang được khởi tạo, vui lòng thử lại sau</li>
          <li>Lỗi kết nối mạng</li>
          <li>Vấn đề bộ nhớ đệm (cache) trình duyệt</li>
        </ul>
        <p style="margin-top: 1.5rem;">
          <button onclick="location.reload()" style="padding: 0.5rem 1rem; background: #0d7377; color: white; border: none; border-radius: 4px; cursor: pointer;">
            🔄 Tải lại trang
          </button>
        </p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #999;">
          Hoặc truy cập trực tiếp <a href="/" style="color: #0d7377;">Mục lục giáo trình</a>
        </p>
      </div>
    `;
    isLoading = false;
  }

  // Khởi tạo
  document.addEventListener('DOMContentLoaded', function() {
    loadSearchData();

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
      performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });

    // Tìm kiếm theo thời gian thực (debounce)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const query = this.value;

      if (query.length === 0) {
        document.getElementById('search-results').innerHTML =
          '<p class="search-hint">💡 Vui lòng nhập từ khóa tìm kiếm</p>';
        document.getElementById('search-stats').innerHTML = '';
        return;
      }

      if (query.length >= 2) {
        searchTimeout = setTimeout(() => performSearch(query), 300);
      }
    });

    // Kiểm tra tham số URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
      searchInput.value = queryParam;
      performSearch(queryParam);
    }
  });
})();
</script>
