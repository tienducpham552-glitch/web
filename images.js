// images.js

// --- CẤU HÌNH CHẾ ĐỘ ẢNH ---
// Khi nào có ảnh thật trên GitHub, bạn đổi dòng này thành: useRealImages = true;
const useRealImages = false; 

// --- CẤU HÌNH GITHUB (Để dành cho sau này) ---
const GITHUB_USERNAME = "tienducpham552-glitch"; 
const REPO_NAME = "web"; 
const GITHUB_BASE = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/main/INNERLY/`;

// --- DANH SÁCH ẢNH TẠM THỜI (PLACEHOLDER) ---
// Dùng dịch vụ placehold.co để tạo ảnh tự động với kích thước và màu sắc chuẩn
const placeholderList = {
    "img-logo":           "https://placehold.co/200x80/4A90E2/FFFFFF/png?text=INNERLY+LOGO",
    "img-hero":           "https://placehold.co/800x400/E8F5E9/4A90E2/png?text=Anh+Mo+Dau+(Banner)",
    
    // 4 Ảnh hành trình (Mỗi ảnh một màu cho đẹp)
    "img-journey-1":      "https://placehold.co/400x300/4A90E2/FFFFFF/png?text=1.+Cham",
    "img-journey-2":      "https://placehold.co/400x300/F5A623/FFFFFF/png?text=2.+Giai+Toa",
    "img-journey-3":      "https://placehold.co/400x300/27ae60/FFFFFF/png?text=3.+On+Dinh",
    "img-journey-4":      "https://placehold.co/400x300/e74c3c/FFFFFF/png?text=4.+Phat+Trien",
    
    // Ảnh Footer
    "img-footer-life":    "https://placehold.co/400x300/34495e/FFFFFF/png?text=Doi+Song+Hoc+Duong",
    "img-footer-product": "https://placehold.co/400x300/34495e/FFFFFF/png?text=Bo+San+Pham"
};

// --- DANH SÁCH TÊN FILE THẬT (Để dành khi bạn upload ảnh) ---
const realImageList = {
    "img-logo":           "Logo.jpg",
    "img-hero":           "Anh mo dau.png",
    "img-journey-1":      "1. Cham.png",
    "img-journey-2":      "2. Giai toa.png",
    "img-journey-3":      "3. On dinh.png",
    "img-journey-4":      "4. Phat trien.png",
    "img-footer-life":    "Doi song.png",
    "img-footer-product": "San pham.png"
};

// --- HÀM TỰ ĐỘNG GẮN ẢNH ---
document.addEventListener("DOMContentLoaded", function() {
    // Chọn danh sách ảnh dựa trên chế độ
    const currentList = useRealImages ? realImageList : placeholderList;
    const baseUrl = useRealImages ? GITHUB_BASE : "";

    console.log(`Đang tải ảnh ở chế độ: ${useRealImages ? "ẢNH THẬT" : "ẢNH TẠM (Placeholder)"}`);

    for (const [id, value] of Object.entries(currentList)) {
        const imgElement = document.getElementById(id);
        if (imgElement) {
            // Nếu là ảnh thật thì nối thêm Base URL, nếu ảnh tạm thì dùng luôn link
            imgElement.src = baseUrl + value;
        }
    }
});
