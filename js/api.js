/**
 * ====================================================================
 * Api.js - Xử Lý Kết Nối Mạng, Firebase Auth & Gọi AI
 * Nhiệm vụ: Xử lý Fetch / HTTP requests, Firebase Authentication,
 *           không thao tác trực tiếp vào DOM.
 * Tuân thủ quy tắc GEMINI.md: Mọi hàm đều bọc trong try...catch.
 * ====================================================================
 */

/**
 * Quản lý xác thực người dùng qua Firebase & Google Sign-In
 */
const AuthService = {
  auth: null,
  isInitialized: false,

  /**
   * Khởi tạo dịch vụ Firebase Auth
   */
  init() {
    try {
      if (typeof firebase === 'undefined') {
        console.warn('[Auth] Thư viện Firebase SDK chưa được tải.');
        return false;
      }

      if (!firebase.apps.length) {
        firebase.initializeApp(APP_CONFIG.FIREBASE_CONFIG);
      }

      this.auth = firebase.auth();
      this.isInitialized = true;
      console.log('[Auth] Firebase Auth đã sẵn sàng.');
      return true;
    } catch (error) {
      console.error('[Auth Init Error]:', error);
      return false;
    }
  },

  /**
   * Lắng nghe sự kiện thay đổi trạng thái đăng nhập
   * @param {Function} callback - Hàm gọi lại nhận tham số user
   */
  onAuthStateChanged(callback) {
    if (!this.isInitialized && !this.init()) return;
    this.auth.onAuthStateChanged(callback);
  },

  /**
   * Đăng nhập bằng tài khoản Google (Popup)
   * @returns {Promise<Object>} Thông tin tài khoản người dùng
   */
  async signInWithGoogle() {
    try {
      if (!this.isInitialized && !this.init()) {
        throw new Error('Firebase chưa sẵn sàng.');
      }

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      
      const result = await this.auth.signInWithPopup(provider);
      return {
        success: true,
        user: result.user
      };
    } catch (error) {
      console.error('[Google Sign-in Error]:', error);
      // Xử lý các mã lỗi phổ biến của Firebase
      let message = 'Đăng nhập không thành công. Vui lòng thử lại!';
      if (error.code === 'auth/popup-closed-by-user') {
        message = 'Bạn vừa đóng cửa sổ đăng nhập.';
      } else if (error.code === 'auth/unauthorized-domain') {
        message = 'Tên miền chưa được cấp phép trong Firebase Console.';
      }
      return {
        success: false,
        error: message
      };
    }
  },

  /**
   * Đăng xuất khỏi tài khoản
   */
  async signOut() {
    try {
      if (!this.isInitialized) return;
      await this.auth.signOut();
      return { success: true };
    } catch (error) {
      console.error('[Sign-out Error]:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Lấy người dùng hiện tại
   */
  getCurrentUser() {
    return this.auth ? this.auth.currentUser : null;
  }
};

/**
 * Quản lý gọi API AI tạo nội dung
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
      return [];
    } catch (error) {
      console.error('[API Error]:', error);
      throw new Error('Hệ thống AI đang bận, vui lòng thử lại sau.');
    }
  }
};
