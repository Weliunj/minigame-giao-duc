# Changelog — Project

All notable changes to this project will be documented in this file. This repository adheres to **Keep a Changelog** standards and maps directly to **Conventional Commits**.

---

## Quy Tắc Cập Nhật Dành Cho AI Agent

Khi hoàn thành bất kỳ tính năng (`feat`), sửa lỗi (`fix`), tái cấu trúc (`refactor`) nào, AI Agent **BẮT BUỘC** phải cập nhật file `CHANGELOG.md` này bằng cách thêm một mục mới vào phần tương ứng theo cấu trúc:

```markdown
### [YYYY-MM-DD HH:mm] — <type>(<scope>): <short description in English>
- **Tác vụ**: Mô tả chi tiết việc đã làm.
- **Danh sách file thay đổi**:
  - `` (Dòng modified/new)
- **Ảnh hưởng**: Những tính năng hay cấu trúc nào bị ảnh hưởng.

- **Lưu ý**: log mới hãy ghi đầu file(sau nd trên).
```

---

## Nhật Ký Thay Đổi

### [2026-10-27 20:38] — feat(auth): integrate Google Sign-In with Firebase Authentication
- **Tác vụ**: Tích hợp Firebase Auth SDK v10; bổ sung nút "Đăng nhập Google" với logo Google sắc nét; tự động hiển thị Avatar thật, Tên và Email thật của người dùng khi đăng nhập; thêm nút Đăng xuất và hệ thống thông báo Toast thân thiện.
- **Danh sách file thay đổi**:
  - `js/config.js` (Thêm thông số cấu hình FIREBASE_CONFIG chính thức)
  - `js/api.js` (Thêm AuthService quản lý signInWithGoogle, signOut, onAuthStateChanged)
  - `index.html` (Thêm nút đăng nhập, avatar ảnh thật, nhúng Firebase SDK và Toast container)
  - `css/style.css` (Style cho nút Google, Avatar, nút Logout và Toast notification)
  - `js/app.js` (Kết nối sự kiện đăng nhập/đăng xuất và cập nhật giao diện thời gian thực)
- **Ảnh hưởng**: Người dùng có thể đăng nhập bằng tài khoản Google thật, sẵn sàng để đồng bộ câu hỏi và tài liệu sau này.

### [2026-10-27 18:30] — fix(ui): fix sidebar collapse animation anchoring to the left edge
- **Tác vụ**: Cố định vị trí bên trái của toàn bộ sidebar (Avatar, Icon nút bấm, Nút MENU). Khi bấm thu gọn, chỉ có mép phải co lại từ 240px về 72px; loại bỏ hoàn toàn hiện tượng căn giữa (center) hoặc giật vị trí icon.
- **Danh sách file thay đổi**:
  - `css/style.css` (Dòng 34-290: loại bỏ margin: 0 auto và justify-content: center trong trạng thái collapsed; thêm overflow: hidden)
- **Ảnh hưởng**: Hiệu ứng thu gọn/mở rộng sidebar mượt mà tự nhiên, các icon đứng im tại chỗ.

### [2026-10-27 18:20] — feat(ui): initialize project structure and collapsible sidebar navigation
- **Tác vụ**: Xây dựng cấu trúc ban đầu theo chuẩn GEMINI.md gồm Semantic HTML, CSS Dark Theme, thanh Sidebar với các tab Home, Game Quiz, Video AI có hiệu ứng cục vuông nổi lên và nút đóng mở MENU.
- **Danh sách file thay đổi**:
  - `index.html` (Khởi tạo toàn bộ khung HTML)
  - `css/style.css` (Khởi tạo hệ thống màu sắc, kiểu dáng thẻ và Sidebar)
  - `js/config.js` (Khởi tạo cấu hình hệ thống)
  - `js/api.js` (Khởi tạo dịch vụ API)
  - `js/app.js` (Lắng nghe sự kiện chuyển tab và thu gọn sidebar)
- **Ảnh hưởng**: Hoàn thành khung xương và thanh điều hướng chính của trang web.
