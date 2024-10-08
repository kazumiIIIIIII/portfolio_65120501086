let timer;  // ตัวแปรเก็บการอ้างอิงตัวจับเวลา
let timeLeft = 30; 
let squaresLeft;  // ตัวแปรสำหรับเก็บจำนวนสี่เหลี่ยม
let interval;  // ตัวแปรเก็บการตั้งค่าเวลา

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    const squareCount = document.getElementById("squareCount").value;  // รับค่าจำนวนสี่เหลี่ยม
    const gameBoard = document.getElementById("gameBoard");  // อิงไปกระดานเกม
    const resultMessage = document.getElementById("resultMessage");  // อิงไปข้อความผลลัพธ์

    gameBoard.innerHTML = "";  // ล้างกระดาน
    resultMessage.innerText = "";  // ล้างข้อความ

    squaresLeft = squareCount;  // กำหนดค่าจำนวนสี่เหลี่ยมที่กำหนด
    timeLeft = 30;  // รีเซ็ตเวลาที่เหลือ
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;  // อัปเดตการแสดงผลเวลา

    // ขนาดเริ่มต้นของกระดานเกม
    const squareSize = 50;  // ขนาดของแต่ละสี่เหลี่ยม
    const squaresPerRow = 5;  // จำนวนสี่เหลี่ยมต่อแถว
    const rows = Math.ceil(squareCount / squaresPerRow);  // คำนวณจำนวนแถว
    const newHeight = rows * squareSize;  // คำนวณความสูงใหม่ของกระดานเกม

    // ขยายกระดานเกมให้ใหญ่ขึ้นตามจำนวนสี่เหลี่ยม
    gameBoard.style.height = `${newHeight}px`;  // ตั้งความสูงใหม่
    gameBoard.style.transition = "height 0.5s ease-in-out";  // เพิ่มการเปลี่ยนแปลง

    for (let i = 0; i < squareCount; i++) {  // วนลูปตามสี่เหลี่ยมที่กำหนด
        const square = document.createElement("div");  // สร้าง div ใหม่สำหรับสี่เหลี่ยม
        square.classList.add("square");  // จัดรูปแบบ
        square.style.backgroundColor = document.getElementById("squareColor").value;  // ใช้สีที่เลือก

        // สุ่มตำแหน่งให้สี่เหลี่ยม
        square.style.left = Math.random() * (gameBoard.clientWidth - squareSize) + "px";
        square.style.top = Math.random() * (newHeight - squareSize) + "px"; 

        square.addEventListener("click", removeSquare);  // เพิ่ม Listener สำหรับคลิกที่สี่เหลี่ยม
        gameBoard.appendChild(square);  // เพิ่มสี่เหลี่ยมลงในกระดานเกม
    }

    clearInterval(interval);  // เคลียร์เวลาก่อนหน้า
    interval = setInterval(updateTimer, 1000);  
}

function removeSquare() {
    this.remove();  // ลบสี่เหลี่ยมที่ถูกคลิก
    squaresLeft--;  // ลดจำนวนลง

    if (squaresLeft === 0) {  
        clearInterval(interval);  
        document.getElementById("resultMessage").innerText = "You Win!"; 
    }
}

function updateTimer() {
    timeLeft--; 
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;  // บอกการแสดงเวลาที่เหลือ

    if (timeLeft === 0) {  
        clearInterval(interval); 
        if (squaresLeft > 0) { 
            document.getElementById("resultMessage").innerText = "Time's Up! You Lose!";  
        }
    }
}
