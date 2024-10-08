function loginLoad() {
    
    let btn = document.getElementById("myLogin");
    btn.onsubmit = checkLogin;
}

function checkLogin() {
   
    const queryString = window.location.search;
    console.log(queryString);
    const URLParams = new URLSearchParams(queryString);
    const username = URLParams.get('username')
    console.log(username);
    
    const password = URLParams.get('password')
    console.log(password);

    const username_re = document.forms['myLogin']['username'].value;
    const password_re = document.forms['myLogin']['password'].value;
    // ข้อมูลผู้ใช้ที่ลงทะเบียน
    // const registeredUser = {
    //     username: "", // ชื่อผู้ใช้ที่ลงทะเบียน
    //     password: ""   // รหัสผ่านที่ลงทะเบียน
    // };

    // ตรวจสอบข้อมูลผู้ใช้
     if (username === username_re && password ===password_re) {
         alert("login successful");
         return true; // ล็อกอินสำเร็จ
     } else {
        // alert("Username or password incorrect. Please try again");
        alert("Username or Password incorrect. Please try again");
        return false; // ล็อกอินไม่สำเร็จ
     }
}
