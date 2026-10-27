# 🎓 EduPlay AI - Nền Tảng Hỗ Trợ Dạy Học & Minigame Tương Tác Dành Cho Giáo Viên

> **EduPlay AI** là nền tảng web ứng dụng Trí tuệ Nhân tạo (AI) giúp giáo viên dễ dàng tạo bài giảng sinh động, tự động sinh ngân hàng câu hỏi trắc nghiệm, tạo ảnh minh họa trực quan và tổ chức các minigame lớp học (Vòng quay may mắn, Đố vui bấm chuông, Ghép thẻ từ vựng & hình ảnh) với giao diện hiện đại, trực quan trên máy chiếu hoặc màn hình tương tác.

---

## 🌟 Tính Năng Nổi Bật

### 1. 🧙‍♂️ Bảng Điều Khiển Giáo Viên (Teacher Dashboard)
- **Tạo nội dung tự động bằng AI:** Nhập chủ đề bài học (Toán, Tiếng Anh, Khoa học, Lịch sử...), AI tự động tạo bộ câu hỏi trắc nghiệm kèm giải thích chi tiết.
- **Tự động sinh ảnh minh họa học tập:** Tích hợp AI Image Engine (Pollinations AI) sinh hình ảnh trực quan chất lượng cao theo từng từ khóa bài học hoàn toàn miễn phí.
- **Biên tập linh hoạt:** Giáo viên có thể thêm, sửa, xóa, gắn điểm thưởng, hoặc tùy chỉnh thời gian trả lời cho từng câu.
- **Xuất / Nhập dữ liệu (Export/Import):** Lưu trữ bộ đề dạng file JSON để tái sử dụng trong các tiết học sau.

### 2. 🎡 Minigame 1: Vòng Quay May Mắn & Đố Vui (Lucky Wheel & Quiz Show)
- **Vòng quay Canvas tương tác mượt mà:** Quay chọn học sinh ngẫu nhiên hoặc chọn gói điểm thưởng.
- **Chế độ Gameshow đố vui:**
  - Đồng hồ đếm ngược kịch tính (15s, 30s hoặc tùy chỉnh).
  - Tích hợp hiệu ứng âm thanh sống động (Web Audio API không phụ thuộc file ngoài: tiếng quay tích tắc, đúng chuông ngân, sai tiếng tút, pháo hoa nổ chúc mừng).
  - Hiệu ứng pháo hoa Confetti rực rỡ khi học sinh trả lời đúng.

### 3. 🃏 Minigame 2: Lật Thẻ Ghép Tranh & Từ Vựng (Visual Matching)
- **Học trực quan qua thẻ bài 3D:** Kết hợp hình ảnh sinh động do AI tạo cùng từ vựng/khái niệm tương ứng.
- **Lật thẻ ghi nhớ (Memory Flip):** Rèn luyện trí nhớ và sự tập trung cho học sinh theo nhóm hoặc cá nhân.
- **Bấm giờ và đếm số lượt lật:** Thúc đẩy tinh thần thi đua hào hứng trong lớp học.

### 4. 🏆 Bảng Tính Điểm Thi Đua Các Đội (Team Scoreboard)
- Quản lý điểm cho 4 đội (Đội Đỏ, Đội Xanh Dương, Đội Vàng, Đội Xanh Lá).
- Cộng/trừ điểm tức thì khi chơi minigame, khích lệ tinh thần đồng đội.

---

## 📂 Cấu Trúc Thư Mục Chuẩn Hóa

Dự án tuân thủ nghiêm ngặt **Bộ Quy Tắc Phát Triển Antigravity Rules**:

```text
Documents/Web/
├── .gitignore              # [BẢO MẬT] Chặn lộ API keys, file môi trường, dữ liệu nhạy cảm
├── .env.example            # [BẢO MẬT] File mẫu cấu hình biến môi trường
├── GEMINI.md               # [BẮT BUỘC] Bộ quy tắc Workspace Rules của Antigravity
├── README.md               # Tài liệu tổng quan dự án
├── docs/                   # Tài liệu chi tiết các phân hệ
│   ├── teacher-flow.md     # Quy trình thao tác của giáo viên
│   └── minigames.md        # Kịch bản và luật chơi các minigame
├── index.html              # Khung xương HTML chính (Semantic, sạch, không inline JS)
├── css/
│   └── style.css           # Toàn bộ thiết kế giao diện (Design System, Animation, 3D Card)
├── js/
│   ├── config.js           # Quản lý tập trung System Prompts, cấu hình AI, ngân hàng mẫu
│   ├── api.js              # Xử lý kết nối mạng, gọi AI sinh câu hỏi & ảnh (bọc try-catch)
│   └── app.js              # Điều khiển sự kiện UI, logic minigames, bộ phát âm thanh
└── assets/
    ├── images/             # Biểu tượng và hình ảnh tĩnh
    └── docs/               # Bản sao tài liệu tích hợp
```

---

## 🚀 Hướng Dẫn Cài Đặt & Sử Dụng

### Khởi chạy trực tiếp:
1. Dự án sử dụng chuẩn HTML5, CSS3 và Vanilla JavaScript thuần, **không cần cài đặt `npm` hay build phức tạp**.
2. Mở file [index.html](file:///c:/Users/Hi/Documents/Web/index.html) trực tiếp trên bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).
3. Hoặc chạy qua Live Server trong VS Code / Antigravity IDE.

### Bắt đầu một tiết học mẫu:
1. Vào **Bảng điều khiển giáo viên (Teacher Dashboard)**.
2. Chọn một chủ đề có sẵn (ví dụ: *Thế giới Động vật, Hệ Mặt trời, Từ vựng Tiếng Anh Trái Cây*) hoặc gõ chủ đề bất kỳ và bấm **"🤖 Tạo Câu Hỏi Bằng AI"**.
3. Bấm **"🎡 Chơi Vòng Quay & Đố Vui"** để bắt đầu chọn học sinh và giải câu đố.
4. Chuyển sang tab **"🃏 Thử Thách Ghép Tranh"** để học sinh lật thẻ từ vựng.
5. Ghi nhận điểm số cho các tổ tại **Bảng Thi Đua**.

---

## 🛡️ Cam Kết Chất Lượng Kỹ Thuật (Antigravity Rules)
- **Zero Inline JS:** 100% logic sự kiện được gán qua `addEventListener` trong `app.js`.
- **Tập trung Prompt:** Toàn bộ System Prompt được lưu tại `config.js`, không rải rác trong code.
- **Xử lý trạng thái chuẩn mực:** Nút bấm tự vô hiệu hóa (`disabled`) và hiển thị Spinner/Loading khi gọi API; hiển thị Toast thông báo lỗi thân thiện nếu mất mạng.
- **Âm thanh tự sinh (Zero External Sound Asset Dependency):** Tích hợp Web Audio API Synthesizer tạo hiệu ứng âm thanh chuyên nghiệp ngay trong trình duyệt.
