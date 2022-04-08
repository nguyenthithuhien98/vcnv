var character = document.getElementById('character');
var diem=0;

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + "px";
    }
}
// window,getComputedStylephương pháp này để lấy các kiểu CSS được tính toán của một phần tử.
// window.getComputedStyle(phần tử giả)trả về thuộc tínhh css đã chọn làm đối tượng
// getPropertyValue: lấy thuộc tính css của element
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300) {
        character.style.left = left + "px";
    }
}
document.addEventListener("keydown", (evt) => {//gọi sưj kiện

    if (evt.key === "ArrowLeft") {
        moveLeft();
    }
    if (evt.key === "ArrowRight") {
        moveRight();
    }
});
//Nếu bạn muốn truyền tham số vào thì bắt buộc bạn phải tạo một hàm khác rồi gọi nó từ hàm addEventListener().

    var block = document.getElementById('block');//lấy đối tượng
    //thêm sự kiện cho đối tượng
    block.addEventListener("animationiteration", () => {
        var random = Math.floor(Math.random() * 2);//tạo số ngẫu nhiên trong đoạn từ 0 đến 1
        left = random * 100;
        block.style.left = left + 'px';
        diem++;
    })
    setInterval(function () {
     var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
        alert("game over!"+diem+"diem");
        block.style.animation = "none";
        // none: khi animation không hoạt động thì nó sẽ giữ nguyên trạng thái bất động của phần tử, 
        // không thêm một style nào vào thành phần (mặc định).
    }
},1)

    
    



