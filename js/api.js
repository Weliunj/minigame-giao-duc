/**
 * ====================================================================
 * Api.js - Xử Lý Kết Nối Mạng & Gọi AI
 * Nhiệm vụ: Xử lý Fetch / HTTP requests, không thao tác trực tiếp vào DOM.
 * Tuân thủ quy tắc GEMINI.md: Mọi hàm đều bọc trong try...catch và có timeout.
 * ====================================================================
 */

const ApiService = {
  /**
   * Gọi AI sinh câu hỏi theo chủ đề (Hàm khung sẵn sàng mở rộng)
   * @param {string} topic - Chủ đề bài học
   * @param {number} count - Số lượng câu hỏi
   * @returns {Promise<Array>} Danh sách câu hỏi
   */
  async generateQuestions(topic, count = 5) {
    try {
      console.log(`[API] Đang chuẩn bị tạo ${count} câu hỏi cho chủ đề: ${topic}`);
      // Sẽ kết nối API AI trong các bước tiếp theo
      return [];
    } catch (error) {
      console.error('[API Error]:', error);
      throw new Error('Hệ thống AI đang bận, vui lòng thử lại sau.');
    }
  }
};
