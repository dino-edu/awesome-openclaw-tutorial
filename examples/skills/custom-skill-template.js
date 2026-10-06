/**
 * Mẫu khung phát triển Skill tùy biến OpenClaw (Custom Skill Template)
 *
 * Đây là mẫu hoàn chỉnh để phát triển Skill, bao gồm tất cả các hook vòng đời cần thiết và best practices.
 *
 * @module custom-skill-template
 * @version 1.0.0
 */

module.exports = {
  // Metadata của Skill
  name: 'my-custom-skill',
  version: '1.0.0',
  description: 'Kỹ năng tùy biến của tôi',
  author: 'Your Name',
  category: 'utility',

  // Tùy chọn cấu hình Skill
  config: {
    // Cấu hình mặc định
    enabled: true,
    // Có thể ghi đè các cấu hình này trong openclaw.json
    options: {
      // Ví dụ: Endpoint API
      apiEndpoint: 'https://api.example.com',
      // Ví dụ: Cài đặt thời gian chờ (timeout)
      timeout: 5000
    }
  },

  /**
   * Hook khởi tạo Skill
   * @param {Object} context - Đối tượng ngữ cảnh OpenClaw
   */
  async init(context) {
    this.logger = context.logger;
    this.config = context.config;
    this.logger.info('Khởi tạo Skill thành công');
  },

  /**
   * Hook xử lý thông điệp
   * @param {string} message - Tin nhắn của người dùng
   * @param {Object} context - Ngữ cảnh tin nhắn
   * @returns {Promise<Object>} Kết quả xử lý
   */
  async handleMessage(message, context) {
    this.logger.info('Đã nhận tin nhắn:', message);

    // Phân tích ý định người dùng
    const intent = this.parseIntent(message);

    // Thực thi hành động tương ứng theo ý định
    switch (intent.type) {
      case 'query':
        return await this.handleQuery(intent.params, context);
      case 'action':
        return await this.handleAction(intent.params, context);
      default:
        return {
          success: false,
          message: 'Rất tiếc, tôi chưa hiểu rõ yêu cầu này'
        };
    }
  },

  /**
   * Phân tích ý định của người dùng
   * @param {string} message - Tin nhắn của người dùng
   * @returns {Object} Kết quả phân tích ý định
   */
  parseIntent(message) {
    // Khớp từ khóa đơn giản (hỗ trợ cả tiếng Việt và từ khóa phổ biến)
    if (message.includes('tra cứu') || message.includes('tìm kiếm') || message.includes('query') || message.includes('search')) {
      return {
        type: 'query',
        params: { query: message.replace(/tra cứu|tìm kiếm|query|search/gi, '').trim() }
      };
    } else if (message.includes('thực thi') || message.includes('chạy') || message.includes('run') || message.includes('execute')) {
      return {
        type: 'action',
        params: { action: message.replace(/thực thi|chạy|run|execute/gi, '').trim() }
      };
    }
    return { type: 'unknown' };
  },

  /**
   * Xử lý yêu cầu truy vấn
   * @param {Object} params - Tham số truy vấn
   * @param {Object} context - Ngữ cảnh
   * @returns {Promise<Object>} Kết quả truy vấn
   */
  async handleQuery(params, context) {
    try {
      // Gọi API bên ngoài hoặc thực thi logic truy vấn
      const result = await this.fetchData(params.query);

      return {
        success: true,
        data: result,
        message: `Truy vấn thành công: ${result}`
      };
    } catch (error) {
      this.logger.error('Truy vấn thất bại:', error);
      return {
        success: false,
        error: error.message,
        message: 'Truy vấn thất bại, vui lòng thử lại sau'
      };
    }
  },

  /**
   * Xử lý yêu cầu hành động
   * @param {Object} params - Tham số hành động
   * @param {Object} context - Ngữ cảnh
   * @returns {Promise<Object>} Kết quả thực thi hành động
   */
  async handleAction(params, context) {
    try {
      // Thực thi hành động
      const result = await this.executeAction(params.action);

      return {
        success: true,
        data: result,
        message: `Thực thi thành công: ${result}`
      };
    } catch (error) {
      this.logger.error('Thực thi thất bại:', error);
      return {
        success: false,
        error: error.message,
        message: 'Thực thi thất bại, vui lòng thử lại sau'
      };
    }
  },

  /**
   * Lấy dữ liệu (Phương thức mẫu)
   * @param {string} query - Chuỗi truy vấn
   * @returns {Promise<string>} Kết quả truy vấn
   */
  async fetchData(query) {
    // Hiện thực hóa logic lấy dữ liệu của bạn tại đây
    // Ví dụ: Gọi API
    // const response = await fetch(`${this.config.options.apiEndpoint}/query?q=${encodeURIComponent(query)}`);
    // return await response.json();

    // Ví dụ đơn giản: Trả về chuỗi kết quả
    return `Kết quả truy vấn "${query}"`;
  },

  /**
   * Thực thi hành động (Phương thức mẫu)
   * @param {string} action - Mô tả hành động
   * @returns {Promise<string>} Kết quả thực thi
   */
  async executeAction(action) {
    // Hiện thực hóa logic thực thi hành động của bạn tại đây
    return `Đã thực thi hành động: ${action}`;
  },

  /**
   * Hook dọn dẹp tài nguyên Skill khi dừng
   */
  async cleanup() {
    this.logger.info('Dọn dẹp Skill hoàn tất');
  }
};
