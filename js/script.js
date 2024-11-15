const startDate = new Date("March 1, 2019"); // Ngày yêu nhau
const countdownElement = document.getElementById("countdown");
const clockElement = document.getElementById("clock");

function updateCountdown() {
    const currentDate = new Date();
    const diffTime = currentDate - startDate; // Tính chênh lệch thời gian giữa ngày hiện tại và ngày bắt đầu

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Tính số ngày
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Tính giờ
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60)); // Tính phút
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000); // Tính giây

    countdownElement.textContent = `Yêu ${days} ngày!`;

    // Hiển thị thời gian đếm giờ (giờ:phút:giây)
    clockElement.textContent = `Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây`;
}

window.onload = function() {
    var videos = document.querySelectorAll("video"); // Lấy tất cả các video trên trang

    videos.forEach(function(video) {
        // video.muted = true; // Tắt tiếng video nếu cần
        video.play(); // Tự động phát video khi trang được tải
    });
};



setInterval(updateCountdown, 1000); // Cập nhật mỗi giây
updateCountdown(); // Gọi lần đầu tiên khi trang được tải