var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


function drawContacts(){
//Tạo các đối tượng công tắc (tọa độ x, tọa độ y, bật?)
contact1 = new Contact(10, 10, false);
contact2 = new Contact(140, 10, true);
contact3 = new Contact(10, 210, true);
contact4 = new Contact(140, 265, true);
contact5 = new Contact(10, 370, true);

contact1.draw();
contact2.draw();
contact3.draw();
contact4.draw();
contact5.draw();
}

//Khởi tạo hàm vẽ TẤT CẢ items
function draw(){
    // drawLights();   
    drawContacts();
    // drawLinkButton();
    
}

//Gọi hàm vẽ TẤT CẢ đối tượng
draw();

//Gọi hàm kiểm tra click chuột
checkMouseClicked();


