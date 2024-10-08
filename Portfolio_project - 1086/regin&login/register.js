document.addEventListener('DOMContentLoaded', function () {
    function validateForm(event) {
        event.preventDefault();

        const form = document.forms['myRegister'];
        const password = form['password'][0].value; // ดึงค่ารหัสผ่านจากฟอร์ม
        const retypePassword = form['password'][1].value; // ดึงค่าการยืนยันรหัสผ่านจากฟอร์ม
        let errorMessage = document.getElementById("errormsg"); // ตำแหน่งสำหรับแสดงข้อความแจ้งเตือน
        errorMessage.innerText = ''; // ลบข้อความแจ้งเตือนเก่าทิ้ง

        for (let i = 0; i < form.length; i++) {
            if (form[i].required && form[i].value === '') {
                errorMessage.innerText = "Please complete all required fields";
                form[i].focus();
                return false; // หยุดการส่งฟอร์ม
            }
        }

        if (password !== retypePassword) {
            errorMessage.innerText = "Password incorrect. Please verify and try again.";
            form['password'][1].focus(); // โฟกัสไปที่ช่องยืนยันรหัสผ่าน
            return false; // หยุดการส่งฟอร์ม
        }

        form.submit(); // ส่งฟอร์มเมื่อทุกอย่างถูกต้อง
    }

    const form = document.getElementById('myRegister');
    form.onsubmit = function (event) {
        validateForm(event);


    };

});
