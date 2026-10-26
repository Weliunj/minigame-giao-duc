# 🎮 Kịch Bản & Luật Chơi Các Minigame (Minigames Specification)

Nền tảng **EduPlay AI** tích hợp hai minigame cốt lõi được thiết kế chuyên biệt cho hoạt động khởi động, ôn tập và củng cố kiến thức trong tiết học.

---

## 🎡 Minigame 1: Vòng Quay May Mắn & Đấu Trường Đố Vui (Lucky Wheel & Quiz Show)

### 1. Ý tưởng & Mục tiêu giáo dục
- **Mục tiêu:** Tạo sự bất ngờ, kích hoạt sự tập trung của toàn bộ học sinh trong lớp; kiểm tra kiến thức đa môn học mà không gây áp lực điểm số.
- **Đối tượng:** Phù hợp mọi lứa tuổi từ Mầm non đến THCS.

### 2. Thành phần trò chơi
1. **Vòng quay may mắn (Interactive Canvas Wheel):**
   - Được vẽ bằng HTML5 Canvas với các dải màu rực rỡ, độ nghiêng kim chỉ và hiệu ứng ma sát vật lý (Physics deceleration).
   - Tự động chia các nan quạt dựa trên danh sách tên học sinh hoặc tên nhóm (có thể tùy biến thêm bớt danh sách trong tích tắc).
   - Âm thanh "tách... tách... tách..." tăng dần độ hồi hộp khi bánh xe chậm lại.

2. **Khung câu hỏi Gameshow (Quiz Card):**
   - Hiển thị câu hỏi lớn, rõ nét phù hợp hiển thị trên máy chiếu lớp học.
   - Ảnh minh họa AI trực quan sinh động bên cạnh câu hỏi.
   - 4 ô đáp án tương tác (A, B, C, D) với hiệu ứng đổi màu khi chọn:
     - 🟢 **Xanh lá:** Đáp án đúng kèm pháo hoa Confetti và hiệu ứng chúc mừng.
     - 🔴 **Đỏ:** Đáp án sai, tự động làm nổi bật đáp án chính xác kèm lời giải thích ngắn gọn.

3. **Đồng hồ đếm ngược (Countdown Timer):**
   - Đếm ngược 15s / 30s với thanh tiến trình gradient thu hẹp dần.
   - Có thể tạm dừng (Pause) hoặc khởi động lại (Reset) khi giáo viên muốn giải thích thêm.

4. **Bộ nút cộng điểm nóng (Instant Team Scoring):**
   - Giáo viên có thể bấm trực tiếp nút `+10 Đỏ`, `+10 Xanh`, `+10 Vàng`, `+10 Tím` ngay trên màn hình câu hỏi.

---

## 🃏 Minigame 2: Thử Thách Ghép Tranh & Từ Vựng (Visual Matching / Memory Cards)

### 1. Ý tưởng & Mục tiêu giáo dục
- **Mục tiêu:** Tăng cường trí nhớ thị giác (Visual memory), rèn luyện kỹ năng liên kết giữa hình ảnh thực tế và thuật ngữ/từ vựng (đặc biệt hiệu quả trong môn Tiếng Anh, Khoa học Tự nhiên, Địa lý).
- **Cơ chế:** Lật thẻ bài 3D ghi nhớ vị trí (Card Flip Concentration).

### 2. Luật chơi
1. Hệ thống lấy danh sách câu hỏi / từ vựng hiện tại, tạo ra các cặp thẻ:
   - **Thẻ A:** Chứa hình ảnh minh họa sinh động (AI Generated Visual).
   - **Thẻ B:** Chứa từ vựng / khái niệm tương ứng.
2. Tất cả thẻ được úp mặt xuống và xáo trộn ngẫu nhiên trên một lưới bài (Grid layout).
3. Học sinh (hoặc từng đội) lần lượt lật 2 thẻ:
   - Nếu **Trùng khớp (Match):** Cặp thẻ phát sáng, rung nhẹ hiệu ứng thành công, âm thanh vui nhộn và cố định mặt ngửa. Đội chơi được cộng điểm thưởng.
   - Nếu **Không khớp (Mismatch):** Cả hai thẻ sẽ tự động úp lại sau 1.2 giây để người chơi ghi nhớ vị trí.
4. Trò chơi kết thúc khi toàn bộ các cặp thẻ được mở. Hệ thống chúc mừng và thống kê thời gian hoàn thành cùng số lượt lật.

---

## 🏆 3. Quy Định Tích Hợp Kỹ Thuật (Antigravity Rules Check)
- Logic game nằm hoàn toàn trong [js/app.js](file:///c:/Users/Hi/Documents/Web/js/app.js).
- Không nhúng mã JavaScript vào thẻ HTML.
- Sử dụng Web Audio API tích hợp trong `app.js` cho trải nghiệm âm thanh tức thì không phụ thuộc tải file âm thanh từ bên ngoài.
