var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Cấu hình cho bóng đèn
var lightConfig = {
    colorOff: '#ffffe6',
    colorOn: '#ffff00',
    radius: 25,
};

//Tạo mảng để quản lý tất cả bóng đèn
var lightList = [];

    //Thêm thông tin bóng đèn vào mảng (vị trí, 2 công tắc mà nó chịu tác động)
    lightList.push({
        x: 100,
        y: 65,       
        contactA: 0,
        contactB: 1,
    });
    lightList.push({
        x: 100,
        y: 260,       
        contactA: 2,
        contactB: 3,
    });
    lightList.push({
        x: 100,
        y: 370,       
        contactA: 3,
        contactB: 4,
    });

//Cấu hình cho công tắc
var contact = {
    colorOn: '#595959',
    colorOff: '#ff0000',
    color3: '#00cc00',
    height: 100,
    width: 50,
};

//Tạo mảng để quản lý tất cả các công tắc
var contactList = [];

    //Thêm thông tin công tắc vào mảng (vị trí, trạng thái)
    contactList.push({
        x: 10,
        y: 10,
        isOn: false,
    });
    contactList.push({
        x: 140,
        y: 10,
        isOn: true,
    });
    contactList.push({
        x: 10,
        y: 210,
        isOn: true,
    });
    contactList.push({
        x: 140,
        y: 265,
        isOn: true,
    });
    contactList.push({
        x: 10,
        y: 370,
        isOn: true,
    });

//Khởi tạo hàm vẽ MỘT bóng đèn
function drawLight(x, y, contactA, contactB){
    context.beginPath();
    context.arc(x, y, lightConfig.radius, 0, Math.PI*2, false);
    context.lineWidth = 10;
    context.stroke();
    if(contactA == !contactB){
        context.fillStyle = lightConfig.colorOn;
    } else{
        context.fillStyle = lightConfig.colorOff;
    }
    context.fill();
    context.closePath();
}

//Khởi tạo hàm vẽ TẤT CẢ bóng đèn trong mảng
function drawLights(){
    lightList.forEach(function(currentLight){
        drawLight(currentLight.x, currentLight.y, 
            contactList[currentLight.contactA].isOn, 
            contactList[currentLight.contactB].isOn);
    })
}

//Khởi tạo hàm vẽ MỘT công tắc
function drawcontact(x, y, isOn){
    context.beginPath();
    myRect = context.rect(x, y, contact.width, contact.height);
    context.lineWidth = 10;
    context.stroke();
    context.fillStyle = contact.colorOn;
    context.fill();
    context.closePath();

    if(!isOn){
        context.beginPath();
        context.rect(x, y, contact.width, contact.height/2);
        context.stroke();
        context.fillStyle = contact.colorOff;
        context.fill();
        context.closePath();
    } else{
        context.beginPath();
        context.rect(x, y + contact.height/2, contact.width, contact.height/2);
        context.stroke();
        context.fillStyle = contact.color3;
        context.fill();
        context.closePath();       
    }
}

//Khởi tạo hàm vẽ TẤT CẢ công tắc trong mảng
function drawcontacts(){
    contactList.forEach(function(currentcontact){
        drawcontact(currentcontact.x, currentcontact.y, currentcontact.isOn);
    });
}

//Khởi tạo hàm kiểm tra MỖI công tắc khi NHẤN CHUỘT tại vị trí BẤT KÌ trong Canvas
function checkcontactClicked(){
    canvas.onmousedown = function(mousePosition){
        contactList.forEach(function(currentcontact){
            if(mousePosition.offsetX >= currentcontact.x
                && mousePosition.offsetX <= currentcontact.x + contact.width
                && mousePosition.offsetY >= currentcontact.y
                && mousePosition.offsetY <= currentcontact.y + contact.height){
                    currentcontact.isOn = !currentcontact.isOn;
                    drawcontact(currentcontact.x, currentcontact.y, currentcontact.isOn);
                    drawLights();
            } 
        })          
    }
}

//Khởi tạo hàm vẽ TẤT CẢ đối tượng
function draw(){
    drawLights();   
    drawcontacts();
}

//Gọi hàm vẽ TẤT CẢ đối tượng
draw();

//Gọi hàm kiểm tra công tắc có được nhấn hay không?
checkcontactClicked();
