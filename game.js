var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Tạo các đối tượng công tắc (tọa độ x, tọa độ y, bật?)
var contactList = [];
    contactList[0] = new Contact(10, 10, false);
    contactList[1] = new Contact(140, 10, true);
    contactList[2] = new Contact(10, 210, true);
    contactList[3] = new Contact(140, 265, true);
    contactList[4] = new Contact(10, 370, true);

//Vẽ TẤT CẢ công tắc
function drawContacts(){ 
    contactList.forEach(function(currentContact){
        currentContact.strokeColor = '#000000';
        currentContact.draw();
    })
}

//Tạo các đối tượng bóng đèn (vị trí, 2 công tắc mà nó chịu tác động)
var lightList = [];
lightList[0] = new Light(100, 65,  contactList[0], contactList[1]);
lightList[1] = new Light(100, 260, contactList[2], contactList[3]);
lightList[2] = new Light(100, 370, contactList[3], contactList[4]);

//Vẽ TẤT CẢ bóng đèn
function drawLights(){
    lightList.forEach(function(currentLight){
        currentLight.draw();
    })
}

//Tạo đối tượng Link
var isLinkFlag = false;
link = new Link(250, 50, false);
var linkTarget = [null, null];

//Vẽ đối tượng Link
function drawLinkButton(){
    link.drawButton();
}

//Kiểm tra nhấp chuột
var mouseX = null, mouseY = null;
function mousePressed(){
    canvas.onmousedown = function(mousePosition){
        mouseX = mousePosition.offsetX;
        mouseY = mousePosition.offsetY;  
        
        if(!isLinkFlag){
            contactList.forEach(function(currentContact){
                currentContact.clicked();
            })
            drawLights();

            if(linkTarget[0] == null || linkTarget[1 == null]){
                linkTarget[0] = null;
                linkTarget[1] = null;
                drawContacts();
            }
        } else{
            contactList.forEach(function(currentContact){
                currentContact.clickedLinkTarget();
            })      
        }
        link.clicked();
    }
}

//Vẽ TẤT CẢ đối tượng
drawContacts();
drawLights();
drawLinkButton();

mousePressed();