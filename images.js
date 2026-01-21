// --- CẤU HÌNH ĐƯỜNG DẪN ẢNH TẠI ĐÂY ---

// 1. Thay tên tài khoản GitHub của bạn vào đây
const GITHUB_USERNAME = "TÊN_CỦA_BẠN"; 

// 2. Thay tên Dự án (Repository) của bạn vào đây
const REPO_NAME = "TÊN_DỰ_ÁN"; 

// 3. Tự động tạo đường dẫn gốc (Không cần sửa dòng này)
const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/main/INNERLY/`;

// --- DANH SÁCH ẢNH (ID trong HTML : Tên file ảnh) ---
const imageList = {
    "img-logo":           "Logo.jpg",
    "img-hero":           "Anh mo dau.png",
    "img-journey-1":      "1. Cham.png",
    "img-journey-2":      "2. Giai toa.png",
    "img-journey-3":      "3. On dinh.png",
    "img-journey-4":      "4. Phat trien.png",
    "img-footer-life":    "Doi song.png",
    "img-footer-product": "San pham.png"
};

// --- HÀM TỰ ĐỘNG GẮN ẢNH VÀO WEB ---
document.addEventListener("DOMContentLoaded", function() {
    console.log("Đang tải ảnh từ:", BASE_URL);
    
    for (const [id, fileName] of Object.entries(imageList)) {
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = BASE_URL + fileName;
            imgElement.onerror = function() {
                console.error(`Lỗi: Không tìm thấy ảnh ${fileName}. Kiểm tra lại tên file trên GitHub!`);
                this.alt = "Ảnh đang bị lỗi hiển thị";
            };
        } else {
            console.warn(`Cảnh báo: Không tìm thấy thẻ <img> có ID là: ${id}`);
        }
    }
});
