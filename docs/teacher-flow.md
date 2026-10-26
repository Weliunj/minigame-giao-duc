# 👩‍🏫 Quy Trình Vận Hành Dành Cho Giáo Viên (Teacher Flow)

Tài liệu này mô tả chi tiết quy trình chuẩn bị bài giảng, tạo nội dung tương tác và tổ chức hoạt động lớp học với nền tảng **EduPlay AI**.

---

## 🎯 1. Chuẩn Bị Trước Giờ Học (Preparation Phase)

```mermaid
graph TD
    A[Bắt đầu chuẩn bị] --> B[Nhập chủ đề bài học & Cấp học]
    B --> C{Phương thức tạo câu hỏi?}
    C -->|Dùng AI| D[Bấm 'Tạo Câu Hỏi Bằng AI']
    C -->|Tự biên tập| E[Bấm 'Thêm câu hỏi mới']
    C -->|Mẫu có sẵn| F[Chọn bộ đề mẫu nhanh]
    D --> G[Xem trước & Tinh chỉnh nội dung]
    E --> G
    F --> G
    G --> H[Tự động tạo ảnh minh họa AI]
    H --> I[Xuất file JSON dự phòng]
    I --> J[Sẵn sàng trình chiếu trên lớp]
```

### Bước 1: Khởi động Bảng Điều Khiển (Teacher Dashboard)
- Giáo viên truy cập vào tab **"Bảng Điều Khiển"** trên màn hình.
- Nhập **Tên bài học / Chủ đề** (ví dụ: *"Các Hành Tinh Trong Hệ Mặt Trời"*, *"Động vật hoang dã Châu Phi"*, *"Từ vựng Tiếng Anh Unit 5"*).
- Chọn **Độ tuổi / Cấp học** (Mầm non, Tiểu học, THCS) và **Số lượng câu hỏi** mong muốn.

### Bước 2: Tạo Ngân Hàng Câu Hỏi Tự Động
- **Sử dụng AI thông minh:** Bấm nút **"🤖 Tạo Câu Hỏi Bằng AI"**. Hệ thống gửi prompt tối ưu đến dịch vụ AI và trả về danh sách câu hỏi 4 lựa chọn có đáp án đúng, gợi ý và từ khóa ảnh minh họa.
- **Sử dụng Bộ Đề Mẫu (Quick Presets):** Nếu không có kết nối internet hoặc muốn thử nhanh, giáo viên có thể chọn các bộ đề mẫu biên soạn sẵn (Toán vui, Khám phá Tự nhiên, Từ vựng Anh ngữ).
- **Thêm/Sửa câu hỏi thủ công:** Giáo viên có thể nhấp đúp vào bất kỳ câu hỏi nào để chỉnh sửa nội dung, đáp án hoặc thêm câu hỏi mới theo ý thích.

### Bước 3: Kiểm tra Hình Ảnh Trực Quan
- Với mỗi câu hỏi, hệ thống tự động sinh ảnh minh họa bằng AI theo phong cách minh họa giáo dục (Cute 3D illustration / Watercolor style).
- Giáo viên có thể đổi từ khóa tạo ảnh nếu muốn minh họa khác.

---

## 🏫 2. Tổ Chức Giờ Học Trên Lớp (In-Class Interaction)

### Bước 4: Thiết lập Đội Nhóm
- Chia lớp thành 2 - 4 đội (Đội Đỏ, Đội Xanh, Đội Vàng, Đội Xanh Lá).
- Bật bảng tính điểm **Team Scoreboard** trên màn hình chính.

### Bước 5: Tổ Chức Minigame 1 - Vòng Quay & Đố Vui
- Nhập danh sách tên học sinh hoặc tên đội vào ô danh sách quay.
- Nhấn **"Quay Thưởng"** (`Spin Wheel`). Vòng quay Canvas quay với âm thanh chân thực và dừng lại ngẫu nhiên ở một học sinh/đội.
- Khi chọn được người trả lời, màn hình hiển thị câu hỏi trắc nghiệm với đồng hồ đếm ngược 15-30 giây.
- Học sinh đưa ra đáp án:
  - Nếu **ĐÚNG**: Màn hình nổ pháo hoa Confetti, âm thanh chiến thắng vang lên, giáo viên bấm nút cộng điểm cho đội tương ứng.
  - Nếu **SAI**: Hiển thị giải thích chi tiết để cả lớp cùng rút kinh nghiệm.

### Bước 6: Tổ Chức Minigame 2 - Thử Thách Ghép Tranh & Từ Vựng
- Chuyển sang tab **"Ghép Tranh 3D"**.
- Cả lớp hoặc đại diện từng tổ lên tương tác với màn hình cảm ứng / máy chiếu để lật cặp thẻ tương ứng giữa hình ảnh và từ vựng/khái niệm.
- Trò chơi rèn luyện trí nhớ thị giác và tư duy liên kết trực quan.

---

## 💾 3. Lưu Trữ & Tái Sử Dụng (Data Management)

- **Lưu bộ đề:** Bấm nút **"Xuất Dữ Liệu (Export JSON)"** để tải về máy tính file bài giảng dạng `.json`.
- **Nạp lại bộ đề cũ:** Bấm **"Nhập Dữ Liệu (Import JSON)"** để mở lại bộ câu hỏi đã chuẩn bị từ trước mà không cần nhập lại.
