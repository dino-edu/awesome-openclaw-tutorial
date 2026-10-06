/**
 * Ví dụ Skill tra cứu thời tiết OpenClaw (Weather Skill Example)
 *
 * Đây là ví dụ thực tế về kỹ năng tra cứu thời tiết, minh họa cách xây dựng một Skill hoàn chỉnh.
 *
 * @module weather-skill
 * @version 1.0.0
 */

module.exports = {
  // Metadata của Skill
  name: 'weather-query',
  version: '1.0.0',
  description: 'Trợ lý tra cứu thời tiết, hỗ trợ xem thông tin thời tiết và dự báo theo thành phố',
  author: 'OpenClaw Tutorial',
  category: 'utility',
  tags: ['weather', 'query', 'utility'],

  // Cấu hình Skill
  config: {
    enabled: true,
    options: {
      // Thành phố mặc định
      defaultCity: 'Hà Nội',
      // API key (cần cấu hình trong openclaw.json)
      apiKey: process.env.WEATHER_API_KEY || '',
      // API endpoint (Ví dụ)
      apiEndpoint: 'https://api.weatherapi.com/v1'
    }
  },

  /**
   * Khởi tạo Skill
   */
  async init(context) {
    this.logger = context.logger;
    this.config = { ...this.config, ...context.config };
    this.logger.info('Khởi tạo Skill tra cứu thời tiết thành công');
  },

  /**
   * Xử lý tin nhắn người dùng
   */
  async handleMessage(message, context) {
    // Trích xuất tên thành phố
    const city = this.extractCity(message) || this.config.options.defaultCity;

    try {
      // Lấy thông tin thời tiết
      const weather = await this.getWeather(city);

      // Định dạng phản hồi
      return {
        success: true,
        message: this.formatWeather(weather),
        data: weather
      };
    } catch (error) {
      this.logger.error('Lấy thông tin thời tiết thất bại:', error);
      return {
        success: false,
        message: `Lấy thông tin thời tiết cho ${city} thất bại: ${error.message}`
      };
    }
  },

  /**
   * Trích xuất tên thành phố từ câu hỏi
   * @param {string} message - Tin nhắn người dùng
   * @returns {string|null} Tên thành phố
   */
  extractCity(message) {
    // Khớp mẫu câu hỏi thời tiết tiếng Việt và tiếng Anh
    const patterns = [
      /(?:thời tiết|dự báo thời tiết)(?:\s+(?:tại|ở|cho))?\s+([A-Za-zÀ-ỹ\s0-9]{2,20})/i,
      /(?:tra cứu|xem|kiểm tra)?\s*thời tiết\s+([A-Za-zÀ-ỹ\s0-9]{2,20})/i,
      /weather\s+(?:in\s+)?([A-Za-z\s0-9]{2,20})/i
    ];

    for (const pattern of patterns) {
      const match = message.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    return null;
  },

  /**
   * Lấy dữ liệu thời tiết
   * @param {string} city - Tên thành phố
   * @returns {Promise<Object>} Dữ liệu thời tiết
   */
  async getWeather(city) {
    // Kiểm tra API key
    if (!this.config.options.apiKey) {
      // Trả về dữ liệu giả lập (dùng cho demo)
      return this.getMockWeather(city);
    }

    try {
      // Gọi API thực tế (Ví dụ)
      // const url = `${this.config.options.apiEndpoint}/current.json?key=${this.config.options.apiKey}&q=${encodeURIComponent(city)}`;
      // const response = await fetch(url);
      // const data = await response.json();
      // return this.parseWeatherData(data);

      // Tại đây sử dụng dữ liệu giả lập
      return this.getMockWeather(city);
    } catch (error) {
      throw new Error(`Gọi API thất bại: ${error.message}`);
    }
  },

  /**
   * Tạo dữ liệu thời tiết giả lập
   * @param {string} city - Tên thành phố
   * @returns {Object} Dữ liệu thời tiết giả lập
   */
  getMockWeather(city) {
    const conditions = ['Nắng ráo', 'Nhiều mây', 'Âm u', 'Mưa nhỏ', 'Mưa rào', 'Có giông'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 15) + 20; // 20-35 độ C

    return {
      city: city,
      condition: randomCondition,
      temperature: randomTemp,
      humidity: Math.floor(Math.random() * 40) + 50, // 50-90%
      wind: Math.floor(Math.random() * 5) + 1, // Cấp 1-5
      updateTime: new Date().toLocaleString('vi-VN')
    };
  },

  /**
   * Định dạng thông tin thời tiết hiển thị
   * @param {Object} weather - Dữ liệu thời tiết
   * @returns {string} Chuỗi hiển thị định dạng
   */
  formatWeather(weather) {
    return `📍 Thời tiết tại ${weather.city}

🌡️ Nhiệt độ: ${weather.temperature}°C
☁️ Trạng thái: ${weather.condition}
💧 Độ ẩm: ${weather.humidity}%
💨 Cấp gió: Cấp ${weather.wind}

🕐 Thời gian cập nhật: ${weather.updateTime}`;
  },

  /**
   * Phân tích dữ liệu phản hồi từ API
   * @param {Object} data - Dữ liệu trả về từ API
   * @returns {Object} Dữ liệu thời tiết chuẩn hóa
   */
  parseWeatherData(data) {
    return {
      city: data.location.name,
      condition: data.current.condition.text,
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
      updateTime: new Date().toLocaleString('vi-VN')
    };
  },

  /**
   * Hướng dẫn sử dụng Skill
   */
  getHelp() {
    return `Hướng dẫn sử dụng Trợ lý Tra cứu Thời tiết:

📌 Các mẫu câu truy vấn hỗ trợ:
• "Thời tiết Hà Nội hôm nay thế nào?"
• "Dự báo thời tiết ở Đà Nẵng"
• "Thời tiết TP.HCM ngày mai"
• "weather in Tokyo"

📌 Thông tin trả về:
• Nhiệt độ hiện tại
• Trạng thái bầu trời (nắng, mưa, mây...)
• Độ ẩm không khí
• Cấp độ gió
• Thời gian cập nhật

📌 Cấu hình chi tiết:
Khai báo API Key trong tệp openclaw.json:
{
  "skills": {
    "weather-query": {
      "apiKey": "your-api-key-here"
    }
  }
}`;
  },

  /**
   * Dọn dẹp tài nguyên Skill khi dừng
   */
  async cleanup() {
    this.logger.info('Dọn dẹp Skill tra cứu thời tiết hoàn tất');
  }
};
