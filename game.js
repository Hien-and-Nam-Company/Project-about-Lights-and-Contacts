var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Tạo các đối tượng công tắc (tọa độ x, tọa độ y, bật?)
var contactList = [];
contactList[0] = new Contact(12, 20, 'top');
contactList[1] = new Contact(77, 20, 'mid');
contactList[2] = new Contact(142, 20, 'bot');
contactList[3] = new Contact(207, 20, 'mid');
contactList[4] = new Contact(272, 20, 'top');
contactList[5] = new Contact(337, 20, 'bot');

var answerList = [];
answerList[0] = new Contact(12, 480, 'mid');
answerList[1] = new Contact(77, 480, 'mid');
answerList[2] = new Contact(142, 480, 'mid');
answerList[3] = new Contact(207, 480, 'mid');
answerList[4] = new Contact(272, 480, 'mid');
answerList[5] = new Contact(337, 480, 'mid');

//Vẽ TẤT CẢ công tắc
function drawAllContacts() {
    contactList.forEach(function (currentContact) {
        currentContact.strokeColor = '#000000';
        currentContact.draw();
    })
}

function drawAnser() {
    answerList.forEach(function (answerList) {
        answerList.strokeColor = '#000000';
        answerList.draw();
    })
}

//Tạo các đối tượng bóng đèn (vị trí, 2 công tắc mà nó chịu tác động)
var lightList = [];
lightList[0] = new Light(100, 65, contactList[0], contactList[1]);
lightList[1] = new Light(100, 260, contactList[2], contactList[3]);
lightList[2] = new Light(100, 370, contactList[3], contactList[4]);

//Vẽ TẤT CẢ bóng đèn
function drawAllLights() {
    lightList.forEach(function (currentLight) {
        currentLight.draw();
    })
}

var ableToLink = false;

var targetList = [];

function resetLinkTarget() {
    targetList = [null, null];
}

//Kiểm tra nhấp chuột
var mouseX = null, mouseY = null;
function mousePressed() {
    canvas.onmousedown = function (mousePosition) {
        mouseX = mousePosition.offsetX;
        mouseY = mousePosition.offsetY;

        if (!ableToLink) {
            contactList.forEach(function (currentContact) {
                currentContact.onclick();
            })
            //drawAllLights();

        } else {
            contactList.forEach(function (currentContact) {
                currentContact.onTargeted();
            })
        }
    }
}

//Vẽ TẤT CẢ đối tượng
drawAllContacts();
drawAnser();
//drawAllLights();
mousePressed();