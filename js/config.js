/**
 * ====================================================================
 * Config.js - Quản Lý Tập Trung Cấu Hình & Prompt AI
 * Nhiệm vụ: Khai báo hằng số hệ thống, dữ liệu mẫu, và prompt tạo câu hỏi.
 * Tuân thủ quy tắc GEMINI.md: Tuyệt đối không hardcode prompt trong logic UI.
 * ====================================================================
 */

const APP_CONFIG = {
  APP_NAME: 'EduPlay AI',
  VERSION: '1.0.0',
  DEFAULT_TIMER_SECONDS: 20,
  
  // Trạng thái thu gọn mặc định của Sidebar
  SIDEBAR_DEFAULT_EXPANDED: true,
  
  // Cấu hình Firebase Authentication
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDcOOQixhq7pEWVZ7roEF63ykRxzS7miQ4",
    authDomain: "eduplay-bede5.firebaseapp.com",
    projectId: "eduplay-bede5",
    storageBucket: "eduplay-bede5.firebasestorage.app",
    messagingSenderId: "215449941224",
    appId: "1:215449941224:web:0f0b6ff61e3f7ca617455d",
    measurementId: "G-HB0W9NQ38L"
  },

  // Bộ đề mẫu thử nghiệm nhanh (Quick Presets)
  PRESETS: {
    MATH_FUN: 'Toán vui nhanh trí',
    NATURE_EXPLORER: 'Khám phá tự nhiên',
    ENGLISH_VOCAB: 'Từ vựng Tiếng Anh'
  }
};

// Đóng băng object để tránh vô tình bị ghi đè
Object.freeze(APP_CONFIG);
