# 📜 BỘ QUY TẮC PHÁT TRIỂN DỰ ÁN (ANTIGRAVITY WORKSPACE RULES)

> **Phạm vi áp dụng:** File này áp dụng cho toàn bộ AI Agent khi đọc, viết, chỉnh sửa hoặc kiểm thử mã nguồn trong workspace `Documents/Web/`.

---

## 1. QUẢN LÝ PHÂN CẤP THƯ MỤC (DIRECTORY ARCHITECTURE)
AI Agent bắt buộc phải tuân thủ nghiêm ngặt cây thư mục chuẩn hóa dưới đây. **TUYỆT ĐỐI KHÔNG ĐƯỢC** tự ý tạo file rải rác ở thư mục gốc (Root).

```text
Documents/Web/
├── .gitignore              # [BẢO MẬT] Chặn commit API keys, file .env, dữ liệu nhạy cảm
├── .env.example            # [BẢO MẬT] File mẫu cấu hình biến môi trường
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

---

## 7. QUẢN LÝ BẢO MẬT, API KEYS & AN TOÀN DỮ LIỆU HỌC ĐƯỜNG (SECURITY & PRIVACY)
1. **Bảo vệ API Keys & Thông tin nhạy cảm:**
   - **Tuyệt đối cấm commit API Keys:** Không được ghi cứng (hardcode) bất kỳ Private Key, Token hoặc mật khẩu nào vào các file frontend (`js/`, `index.html`) được đẩy lên Git.
   - Bắt buộc duy trì file `.gitignore` để chặn toàn bộ các file nhạy cảm: `.env`, `*.secret`, `api-keys.json`, dữ liệu cá nhân học sinh.
   - Luôn cung cấp file mẫu `.env.example` để hướng dẫn người dùng cấu hình môi trường mà không làm rò rỉ khóa thực tế.
2. **Quyền riêng tư học sinh (Student Data Privacy):**
   - Danh sách lớp học, họ tên, điểm số học sinh phải được lưu trữ cục bộ (`localStorage` của trình duyệt hoặc file bộ nhớ tạm của giáo viên), TUYỆT ĐỐI không gửi kèm thông tin định danh cá nhân của học sinh trong các câu prompt gửi lên server AI từ xa.
3. **Chính sách kho lưu trữ (Repository Privacy):**
   - Nếu dự án có chứa thông tin trường lớp thực tế hoặc giáo án nội bộ chưa công bố: **Bắt buộc cài đặt Repository ở chế độ Private**.
   - Nếu công khai mã nguồn (Public Repo): Chỉ sử dụng các API miễn phí không cần key (như Pollinations AI) hoặc cơ chế BYOK (Bring Your Own Key - giáo viên tự nhập key cá nhân vào cài đặt trình duyệt để lưu tại LocalStorage máy mình).

---

## 8. QUY CHUẨN THIẾT KẾ ĐA THIẾT BỊ (RESPONSIVE & ADAPTIVE UX)
1. **Kiến trúc Responsive một Codebase duy nhất:**
   - Sử dụng CSS Media Queries (`@media`) để tự động thích ứng với mọi kích thước màn hình mà không cần duy trì 2 trang web riêng biệt.
2. **Tiêu chuẩn Breakpoints:**
   - **Máy tính / Màn hình máy chiếu ($\ge 1024px$):** Bố cục đa cột (Split-screen), Vòng quay Canvas to rõ ($380px - 450px$), phông chữ câu hỏi lớn ($1.3rem - 1.5rem$) đảm bảo học sinh ngồi cách 5 - 7 mét vẫn đọc rõ.
   - **Máy tính bảng (Tablet $768px - 1023px$):** Bố cục co giãn 2 cột linh hoạt.
   - **Điện thoại di động ($< 768px$):** Chuyển sang bố cục 1 cột (Single Column / Stacked), menu điều hướng chuyển xuống sát đáy (Bottom Navigation) thuận tiện cho ngón tay cái.
3. **Tiêu chuẩn tương tác cảm ứng (Touch Target):**
   - Mọi nút bấm, ô lựa chọn đáp án trên màn hình cảm ứng phải đạt kích thước tối thiểu **$48px \times 48px$** (chuẩn W3C Web Accessibility) với khoảng cách an toàn tối thiểu $8px$ để chống bấm nhầm.
   - Nhận diện thiết bị cảm ứng thông qua CSS `(pointer: coarse)` để tự động tăng kích thước vùng bấm.


