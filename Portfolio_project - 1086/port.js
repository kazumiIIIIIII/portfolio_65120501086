// ฟังก์ชันเพื่อแสดงข้อความแจ้งเตือนเมื่อไปยังหน้าโปรเจค
window.onload = function() {
    // ตรวจสอบว่าถ้าอยู่ในหน้า projects.html
    if (window.location.pathname.includes('index.html')) {
        alert("Welcome to my portfolio!");
    } else if (window.location.pathname.includes('project.html')) {
        alert("Welcome to my project!");
    }
};



