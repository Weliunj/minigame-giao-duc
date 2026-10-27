/**
 * ====================================================================
 * App.js - Điều Khiển Giao Diện & Logic Sự Kiện (UI Controller)
 * Nhiệm vụ: Lắng nghe sự kiện người dùng, quản lý State giao diện và chuyển Tab.
 * Tuân thủ quy tắc GEMINI.md: 100% sự kiện qua addEventListener, 0% inline JS.
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const sidebar = document.getElementById('appSidebar');
  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const navButtons = document.querySelectorAll('.nav-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const btnGoToQuiz = document.getElementById('btnGoToQuiz');

  /**
   * 1. Xử lý Thu gọn / Mở rộng Sidebar (Toggle Collapse)
   */
  function initSidebarToggle() {
    if (!btnToggleSidebar || !sidebar) return;

    // Đọc trạng thái đã lưu từ localStorage (nếu có)
    const savedState = localStorage.getItem('sidebar_expanded');
    if (savedState !== null) {
      if (savedState === 'false') {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
      } else {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
      }
    }

    // Bắt sự kiện click nút MENU dưới đáy
    btnToggleSidebar.addEventListener('click', () => {
      const isCurrentlyExpanded = sidebar.classList.contains('expanded');
      
      if (isCurrentlyExpanded) {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
        localStorage.setItem('sidebar_expanded', 'false');
      } else {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
        localStorage.setItem('sidebar_expanded', 'true');
      }
    });
  }

  /**
   * 2. Xử lý Chuyển Tab & Hiệu ứng "Cục hình vuông nổi lên" (Active Tab)
   */
  function switchTab(targetTabId) {
    // 2.1 Cập nhật trạng thái các nút bấm (Sidebar Buttons)
    navButtons.forEach((btn) => {
      const isTarget = btn.getAttribute('data-tab') === targetTabId;
      if (isTarget) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // 2.2 Hiển thị Panel nội dung tương ứng
    tabPanels.forEach((panel) => {
      const panelId = panel.id.toLowerCase();
      if (panelId.includes(targetTabId)) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  function initNavigation() {
    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (targetTab) {
          switchTab(targetTab);
        }
      });
    });

    // Nút tắt từ màn Home sang Quiz
    if (btnGoToQuiz) {
      btnGoToQuiz.addEventListener('click', () => {
        switchTab('quiz');
      });
    }
  }

  // Khởi chạy các module giao diện
  initSidebarToggle();
  initNavigation();
  console.log('[App] EduPlay UI initialized successfully.');
});
