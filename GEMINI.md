# 📜 BỘ QUY TẮC PHÁT TRIỂN DỰ ÁN (ANTIGRAVITY WORKSPACE RULES)

> **Phạm vi áp dụng:** File này áp dụng cho toàn bộ AI Agent khi đọc, viết, chỉnh sửa hoặc kiểm thử mã nguồn trong workspace `Documents/Web/`.

---

## 1. QUẢN LÝ PHÂN CẤP THƯ MỤC (DIRECTORY ARCHITECTURE)
AI Agent bắt buộc phải tuân thủ nghiêm ngặt cây thư mục chuẩn hóa dưới đây. **TUYỆT ĐỐI KHÔNG ĐƯỢC** tự ý tạo file rải rác ở thư mục gốc (Root).

```text
Documents/Web/
├── GEMINI.md               # [BẮT BUỘC] Bộ quy tắc cốt lõi (Workspace Rules)
├── README.md               # Tài liệu tổng quan dự án (Mục đích, tính năng, hướng dẫn)
├── docs/                   # Tài liệu nghiệp vụ & kịch bản chi tiết
│   ├── teacher-flow.md     # Quy trình bài giảng & luồng giáo viên
│   └── minigames.md        # Kịch bản các minigame lớp học
├── index.html              # Trang chủ giao diện (HTML tĩnh, Semantic, không inline JS)
├── css/
│   └── style.css           # Toàn bộ CSS (Design system, Biến màu, 3D animations)
├── js/
│   ├── config.js           # Quản lý tập trung System Prompt ẩn, API URLs, Defaults
│   ├── api.js              # Xử lý kết nối mạng, gọi AI sinh câu hỏi & ảnh
│   └── app.js              # Xử lý sự kiện UI, logic trò chơi, Canvas, âm thanh
└── assets/
    ├── images/             # Ảnh tĩnh, icon, biểu tượng SVG/PNG
    └── docs/               # Bản sao tài liệu tích hợp
```

---

## 2. NGUYÊN TẮC PHÂN TÁCH MÃ NGUỒN (SEPARATION OF CONCERNS)
1. **Tuyệt đối 0% mã Inline:**
   - Cấm viết mã JavaScript trực tiếp vào file HTML (ví dụ: cấm dùng `onclick="..."`, `onchange="..."`, hoặc thẻ `<script>` logic dài dòng trong `index.html`).
   - 100% sự kiện phải được lắng nghe thông qua `addEventListener` trong file `js/app.js`.
2. **Tách biệt nhiệm vụ rõ ràng giữa các file JS:**
   - `index.html`: Chỉ chứa khung cấu trúc HTML ngữ nghĩa (Semantic HTML), id rõ ràng, nhúng các file script ở cuối thẻ `<body>`.
   - `js/config.js`: Chỉ chứa hằng số cấu hình, danh sách đề mẫu, và toàn bộ System Prompts.
   - `js/api.js`: Chỉ chuyên trách gọi API (Fetch/HTTP), không thao tác vào DOM. Trả về dữ liệu thô (raw data) hoặc báo lỗi.
   - `js/app.js`: Chỉ làm nhiệm vụ điều khiển giao diện (UI event listeners), gọi hàm từ `api.js`, quản lý State và render giao diện.

---

## 3. QUẢN LÝ CÂU LỆNH ẨN & CẤU HÌNH AI (PROMPT & CONFIG MANAGEMENT)
1. **Tập trung hóa Prompt:**
   - Toàn bộ System Prompt, luật sinh câu hỏi, từ khóa tối ưu phong cách minh họa ("cute 3d cartoon", "educational illustration", "clean background") phải được khai báo dạng hằng số (`const`) trong `js/config.js`.
2. **Cấm Hardcode:**
   - Nghiêm cấm viết chết (hardcode) các chuỗi Prompt trong các hàm sự kiện tại `js/app.js` hay `js/api.js`. Khi muốn đổi phong cách AI, chỉ cần sửa một nơi duy nhất là `config.js`.

---

## 4. XỬ LÝ LỖI & TRẠNG THÁI GIAO DIỆN (STATE & ERROR HANDLING)
1. **Trạng thái chờ (Loading State):**
   - Khi đang gọi API AI, bắt buộc phải vô hiệu hóa nút bấm (`button.disabled = true`) và hiển thị hiệu ứng xoay (spinner) hoặc dòng chữ thông báo rõ ràng để người dùng không bấm liên tục.
2. **Bọc bắt lỗi mạng (Error Catching):**
   - Mọi hàm gọi API trong `js/api.js` bắt buộc phải bọc trong khối `try...catch` và thiết lập thời gian timeout hợp lý (15 giây).
3. **Thông báo thân thiện (User-Friendly Toast/Alert):**
   - Khi API gặp sự cố (mất mạng, server bận), phải hiển thị thông báo lỗi tiếng Việt dễ hiểu trên giao diện (ví dụ: *"Hệ thống AI đang bận, vui lòng thử lại sau"*).
   - Tuyệt đối không để ứng dụng bị treo, đơ hoặc chỉ báo lỗi ẩn trong Developer Console.

---

## 5. THẨM MỸ & TRẢI NGHIỆM NGƯỜI DÙNG (DESIGN & USER EXPERIENCE)
1. **Thiết kế ấn tượng (Rich Aesthetics):**
   - Sử dụng bảng màu EdTech hiện đại (Dark Indigo/Slate, kết hợp các điểm nhấn rực rỡ tím neon, hồng, ngọc bích, vàng hổ phách).
   - Sử dụng Typography hiện đại từ Google Fonts (`Outfit`, `Plus Jakarta Sans`).
2. **Tương tác sống động:**
   - Tích hợp hiệu ứng pháo hoa Confetti khi học sinh trả lời đúng.
   - Tích hợp âm thanh tương tác tức thì bằng Web Audio API (không phụ thuộc file âm thanh MP3 bên ngoài).
   - Thẻ bài minigame có hiệu ứng lật 3D CSS mượt mà.

---

## 6. QUY TẮC THỰC THI & KIỂM TRA TRƯỚC KHI BÀN GIAO
1. Mỗi file JavaScript khi tạo hoặc cập nhật đều phải có phần ghi chú (Comment Header) ở đầu file giải thích rõ nhiệm vụ của file.
2. Kiểm tra kỹ đường dẫn nhúng file (`href="css/style.css"`, `<script src="js/config.js">`) để đảm bảo chạy mượt trên mọi môi trường cục bộ (Local / Live Server) mà không phát sinh lỗi 404.
