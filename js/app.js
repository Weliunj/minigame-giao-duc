/**
 * ====================================================================
 * App.js - Điều Khiển Giao Diện & Logic Sự Kiện (UI Controller)
 * Nhiệm vụ: Lắng nghe sự kiện người dùng, quản lý State giao diện,
 *           chuyển Tab và xác thực Firebase Google Sign-In.
 * Tuân thủ quy tắc GEMINI.md: 100% sự kiện qua addEventListener, 0% inline JS.
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements - Navigation & Sidebar
  const sidebar = document.getElementById('appSidebar');
  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const navButtons = document.querySelectorAll('.nav-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const btnGoToQuiz = document.getElementById('btnGoToQuiz');

  // DOM Elements - User Profile & Auth
  const userAvatar = document.getElementById('userAvatar');
  const avatarInitial = document.getElementById('avatarInitial');
  const avatarPhoto = document.getElementById('avatarPhoto');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const btnLogout = document.getElementById('btnLogout');
  const authActionBox = document.getElementById('authActionBox');
  const btnLoginGoogle = document.getElementById('btnLoginGoogle');
  const toastContainer = document.getElementById('toastContainer');

  /**
   * 1. Hiển thị thông báo Toast thân thiện (User-Friendly Toast)
   */
  function showToast(message, type = 'info', duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon tương ứng
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  /**
   * 2. Xử lý Thu gọn / Mở rộng Sidebar (Toggle Collapse)
   */
  function initSidebarToggle() {
    if (!btnToggleSidebar || !sidebar) return;

    // Đọc trạng thái đã lưu từ localStorage
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
   * 3. Xử lý Chuyển Tab & Hiệu ứng "Cục hình vuông nổi lên" (Active Tab)
   */
  function switchTab(targetTabId) {
    // 3.1 Cập nhật trạng thái các nút bấm (Sidebar Buttons)
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

    // 3.2 Hiển thị Panel nội dung tương ứng
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

  /**
   * 4. Quản lý Đăng Nhập Google qua Firebase Auth
   */
  function initAuthentication() {
    // Lắng nghe trạng thái đăng nhập từ Firebase
    AuthService.onAuthStateChanged((user) => {
      if (user) {
        // Đã đăng nhập: Cập nhật giao diện với thông tin thật
        console.log('[Auth] Người dùng hiện tại:', user.email);
        
        if (user.photoURL) {
          avatarPhoto.src = user.photoURL;
          avatarPhoto.style.display = 'block';
          avatarInitial.style.display = 'none';
        } else {
          avatarPhoto.style.display = 'none';
          avatarInitial.style.display = 'block';
          avatarInitial.textContent = (user.displayName || user.email || 'U').charAt(0).toUpperCase();
        }

        userName.textContent = user.displayName || 'Giáo viên';
        userEmail.textContent = user.email;
        userEmail.title = user.email;

        if (btnLogout) btnLogout.style.display = 'flex';
        if (authActionBox) authActionBox.style.display = 'none';
      } else {
        // Chưa đăng nhập: Trả về trạng thái Khách
        console.log('[Auth] Chưa có người dùng đăng nhập.');
        avatarPhoto.style.display = 'none';
        avatarInitial.style.display = 'block';
        avatarInitial.textContent = '?';

        userName.textContent = 'Chưa đăng nhập';
        userEmail.textContent = 'Tài khoản Khách';
        userEmail.title = 'Đăng nhập để đồng bộ dữ liệu';

        if (btnLogout) btnLogout.style.display = 'none';
        if (authActionBox) authActionBox.style.display = 'block';
      }
    });

    // Bắt sự kiện bấm nút "Đăng nhập Google"
    if (btnLoginGoogle) {
      btnLoginGoogle.addEventListener('click', async () => {
        btnLoginGoogle.disabled = true;
        const originalText = btnLoginGoogle.querySelector('.btn-text');
        if (originalText) originalText.textContent = 'Đang kết nối...';

        showToast('Đang mở cửa sổ đăng nhập Google...', 'info');
        const res = await AuthService.signInWithGoogle();

        btnLoginGoogle.disabled = false;
        if (originalText) originalText.textContent = 'Đăng nhập Google';

        if (res.success) {
          showToast(`Xin chào ${res.user.displayName || 'thầy/cô'}! Đăng nhập thành công.`, 'success');
        } else {
          showToast(res.error || 'Đăng nhập thất bại.', 'error');
        }
      });
    }

    // Bắt sự kiện bấm nút "Đăng xuất"
    if (btnLogout) {
      btnLogout.addEventListener('click', async () => {
        btnLogout.disabled = true;
        await AuthService.signOut();
        btnLogout.disabled = false;
        showToast('Bạn đã đăng xuất tài khoản.', 'info');
      });
    }

    // Bấm vào avatar khi sidebar thu gọn cũng mở đăng nhập nếu chưa login
    if (userAvatar) {
      userAvatar.addEventListener('click', () => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser && btnLoginGoogle) {
          btnLoginGoogle.click();
        }
      });
    }
  }

  // Khởi chạy tất cả các module
  initSidebarToggle();
  initNavigation();
  initAuthentication();
  console.log('[App] EduPlay UI & Firebase Auth initialized successfully.');
});
