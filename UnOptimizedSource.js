var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Cấu hình cho công cụ Link
var linkButton = {
    x: 250,
    y: 50,
    width: 100,
    height: 50,
    color1: '#e6e6ff',
    color2: '#0000ff',
    isLinkFlag: false,
}

var linkTarget = {
    color: '#0000ff',
}

var linkList = {
    target1: null,
    target2: null,
}

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


//Tạo các đối tượng công tắc (tọa độ x, tọa độ y, bật?)
contact1 = new Contact(10, 10, false);
contact2 = new Contact(140, 10, true);
contact3 = new Contact(10, 210, true);
contact4 = new Contact(140, 265, true);
contact5 = new Contact(10, 370, true);

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


//Khởi tạo hàm vẽ TẤT CẢ công tắc trong mảng
function drawContacts(){

    contactList.forEach(function(currentcontact){
        drawContact(currentcontact.x, currentcontact.y, currentcontact.isOn);
    });
}

//Khởi tạo hàm vẽ Link Button
function drawLinkButton(){
    context.beginPath();
    context.rect(linkButton.x, linkButton.y, linkButton.width, linkButton.height);
    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.stroke();
    if(!linkButton.isLinkFlag){
        context.fillStyle = linkButton.color1;
    } else{
        context.fillStyle = linkButton.color2;
    }
    context.fill();
    context.closePath();

    context.beginPath();
    context.font = "30px Comic Sans MS";
    if(!linkButton.isLinkFlag){
        context.fillStyle = 'black';
    } else{
        context.fillStyle = 'white';
    }
    context.fillText("LINK", linkButton.x+12, linkButton.y+35);
    context.closePath();
}

function drawLinkTarget(x, y){
    context.beginPath();
    context.rect(x, y, contact.width, contact.height);
    context.lineWidth = 10;
    context.strokeStyle = linkTarget.color;
    context.stroke();   
    context.closePath();
}

//Khởi tạo hàm kiểm tra click chuột
function checkMouseClicked(){
    canvas.onmousedown = function(mousePosition){
        if(!linkButton.isLinkFlag){
            contactList.forEach(function(currentcontact){
                if(mousePosition.offsetX >= currentcontact.x
                    && mousePosition.offsetX <= currentcontact.x + contact.width
                    && mousePosition.offsetY >= currentcontact.y
                    && mousePosition.offsetY <= currentcontact.y + contact.height){
                        if(linkList.target1 != null && linkList.target2 != null){
                            if(linkList.target1 == currentcontact.number){
                                currentcontact.isOn = !currentcontact.isOn;
                                contactList[linkList.target2].isOn = !(contactList[linkList.target2].isOn); 
                                drawContact(currentcontact.x, currentcontact.y, currentcontact.isOn);
                                drawContact( contactList[linkList.target2].x,  contactList[linkList.target2].y,  contactList[linkList.target2].isOn);
                                linkList.target1 = null;
                                linkList.target2 = null;
                            } else if(linkList.target2 == currentcontact.number){
                                currentcontact.isOn = !currentcontact.isOn;
                                contactList[linkList.target1].isOn = !(contactList[linkList.target1].isOn); 
                                drawContact(currentcontact.x, currentcontact.y, currentcontact.isOn);
                                drawContact( contactList[linkList.target1].x,  contactList[linkList.target1].y,  contactList[linkList.target1].isOn);
                                linkList.target1 = null;
                                linkList.target2 = null;
                            }
                            
                        } else {
                            currentcontact.isOn = !currentcontact.isOn; 
                            linkList.target1 = null;
                            linkList.target2 = null;
                        }                       
                        drawContact(currentcontact.x, currentcontact.y, currentcontact.isOn);
                        //drawContacts();
                        drawLights();
                }
            });
        } else{
            contactList.forEach(function(currentcontact){
                if(mousePosition.offsetX >= currentcontact.x
                    && mousePosition.offsetX <= currentcontact.x + contact.width
                    && mousePosition.offsetY >= currentcontact.y
                    && mousePosition.offsetY <= currentcontact.y + contact.height){                   
                        linkList.target2 = linkList.target1;                        
                        linkList.target1 = currentcontact.number;
                        console.log(linkList.target1);
                        console.log(linkList.target2);
                        drawContacts();
                        if(linkList.target1!=null){
                            drawLinkTarget(contactList[linkList.target1].x, contactList[linkList.target1].y);
                        }
                        if(linkList.target2!=null){
                            drawLinkTarget(contactList[linkList.target2].x, contactList[linkList.target2].y);
                        }
                } 
            });
        }
        if(mousePosition.offsetX >= linkButton.x
            && mousePosition.offsetX <= linkButton.x + linkButton.width
            && mousePosition.offsetY >= linkButton.y
            && mousePosition.offsetY <= linkButton.y + linkButton.height){
                linkButton.isLinkFlag = !linkButton.isLinkFlag;
                drawLinkButton();
        }            
    }
}

//Khởi tạo hàm vẽ TẤT CẢ items
function draw(){
    drawLights();   
    drawContacts();
    drawLinkButton();
    
}

//Gọi hàm vẽ TẤT CẢ đối tượng
draw();

//Gọi hàm kiểm tra click chuột
checkMouseClicked();


