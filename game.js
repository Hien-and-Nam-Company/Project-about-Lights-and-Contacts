var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function drawContacts(){
    //Tạo các đối tượng công tắc (tọa độ x, tọa độ y, bật?)
    contact1 = new Contact(10, 10, false);
    contact2 = new Contact(140, 10, true);
    contact3 = new Contact(10, 210, true);
    contact4 = new Contact(140, 265, true);
    contact5 = new Contact(10, 370, true);
    //Vẽ 5 công tắc
    contact1.draw();
    contact2.draw();
    contact3.draw();
    contact4.draw();
    contact5.draw();
}

function drawLights(){
    //Thông tin bóng đèn (vị trí, 2 công tắc mà nó chịu tác động)
    light1 = new Light(100, 65, contact1, contact2);
    light2 = new Light(100, 260, contact3, contact4);
    light3 = new Light(100, 370, contact4, contact5);

    //Vẽ 3 bóng đèn
    light1.draw(light1.contactA.isOn, light1.contactB.isOn);
    light2.draw(light2.contactA.isOn, light2.contactB.isOn);
    light3.draw(light3.contactA.isOn, light3.contactB.isOn);
}

//Khởi tạo hàm vẽ TẤT CẢ items
function draw(){
    drawContacts();
    drawLights();   
    // drawLinkButton();
    
}

//Gọi hàm vẽ TẤT CẢ đối tượng
draw();

//Gọi hàm kiểm tra click chuột
// checkMouseClicked();


