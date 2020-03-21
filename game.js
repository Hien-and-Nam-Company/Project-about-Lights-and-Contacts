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
        switchA: 0,
        switchB: 1,
    });
    lightList.push({
        x: 100,
        y: 260,       
        switchA: 2,
        switchB: 3,
    });
    lightList.push({
        x: 100,
        y: 370,       
        switchA: 3,
        switchB: 4,
    });

//Cấu hình cho công tắc
var switchConfig = {
    color1: '#595959',
    color2: '#ff0000',
    color3: '#00cc00',
    height: 100,
    width: 50,
};

//Tạo mảng để quản lý tất cả các công tắc
var switchList = [];

    //Thêm thông tin công tắc vào mảng (số thứ tự, vị trí, trạng thái)
    switchList.push({
        number: 0,
        x: 10,
        y: 10,
        isStatus: false,
    });
    switchList.push({
        number: 1,
        x: 140,
        y: 10,
        isStatus: true,
    });
    switchList.push({
        number: 2,
        x: 10,
        y: 210,
        isStatus: true,
    });
    switchList.push({
        number: 3,
        x: 140,
        y: 265,
        isStatus: true,
    });
    switchList.push({
        number: 4,
        x: 10,
        y: 370,
        isStatus: true,
    });

//Khởi tạo hàm vẽ MỘT bóng đèn
function drawLight(x, y, switchA, switchB){
    context.beginPath();
    context.arc(x, y, lightConfig.radius, 0, Math.PI*2, false);
    context.lineWidth = 10;
    context.stroke();
    if(switchA == !switchB){
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
            switchList[currentLight.switchA].isStatus, 
            switchList[currentLight.switchB].isStatus);
    })
}

//Khởi tạo hàm vẽ MỘT công tắc
function drawSwitch(x, y, isStatus){
    context.beginPath();
    context.rect(x, y, switchConfig.width, switchConfig.height);
    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.stroke();
    context.fillStyle = switchConfig.color1;
    context.fill();
    context.closePath();

    if(!isStatus){
        context.beginPath();
        context.rect(x, y, switchConfig.width, switchConfig.height/2);
        context.strokeStyle = 'black';
        context.stroke();
        context.fillStyle = switchConfig.color2;
        context.fill();
        context.closePath();
    } else{
        context.beginPath();
        context.rect(x, y + switchConfig.height/2, switchConfig.width, switchConfig.height/2);
        context.strokeStyle = 'black';
        context.stroke();
        context.fillStyle = switchConfig.color3;
        context.fill();
        context.closePath();       
    }
}

//Khởi tạo hàm vẽ TẤT CẢ công tắc trong mảng
function drawSwitchs(){
    switchList.forEach(function(currentSwitch){
        drawSwitch(currentSwitch.x, currentSwitch.y, currentSwitch.isStatus);
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
    context.rect(x, y, switchConfig.width, switchConfig.height);
    context.lineWidth = 10;
    context.strokeStyle = linkTarget.color;
    context.stroke();   
    context.closePath();
}

//Khởi tạo hàm kiểm tra click chuột
function checkMouseClicked(){
    canvas.onmousedown = function(mousePosition){
        if(!linkButton.isLinkFlag){
            switchList.forEach(function(currentSwitch){
                if(mousePosition.offsetX >= currentSwitch.x
                    && mousePosition.offsetX <= currentSwitch.x + switchConfig.width
                    && mousePosition.offsetY >= currentSwitch.y
                    && mousePosition.offsetY <= currentSwitch.y + switchConfig.height){
                        if(linkList.target1 != null && linkList.target2 != null){
                            if(linkList.target1 == currentSwitch.number){
                                currentSwitch.isStatus = !currentSwitch.isStatus;
                                switchList[linkList.target2].isStatus = !(switchList[linkList.target2].isStatus); 
                                drawSwitch(currentSwitch.x, currentSwitch.y, currentSwitch.isStatus);
                                drawSwitch( switchList[linkList.target2].x,  switchList[linkList.target2].y,  switchList[linkList.target2].isStatus);
                                linkList.target1 = null;
                                linkList.target2 = null;
                            } else if(linkList.target2 == currentSwitch.number){
                                currentSwitch.isStatus = !currentSwitch.isStatus;
                                switchList[linkList.target1].isStatus = !(switchList[linkList.target1].isStatus); 
                                drawSwitch(currentSwitch.x, currentSwitch.y, currentSwitch.isStatus);
                                drawSwitch( switchList[linkList.target1].x,  switchList[linkList.target1].y,  switchList[linkList.target1].isStatus);
                                linkList.target1 = null;
                                linkList.target2 = null;
                            }
                            
                        } else {
                            currentSwitch.isStatus = !currentSwitch.isStatus; 
                            linkList.target1 = null;
                            linkList.target2 = null;
                        }                       
                        drawSwitch(currentSwitch.x, currentSwitch.y, currentSwitch.isStatus);
                        //drawSwitchs();
                        drawLights();
                }
            });
        } else{
            switchList.forEach(function(currentSwitch){
                if(mousePosition.offsetX >= currentSwitch.x
                    && mousePosition.offsetX <= currentSwitch.x + switchConfig.width
                    && mousePosition.offsetY >= currentSwitch.y
                    && mousePosition.offsetY <= currentSwitch.y + switchConfig.height){                   
                        linkList.target2 = linkList.target1;                        
                        linkList.target1 = currentSwitch.number;
                        console.log(linkList.target1);
                        console.log(linkList.target2);
                        drawSwitchs();
                        if(linkList.target1!=null){
                            drawLinkTarget(switchList[linkList.target1].x, switchList[linkList.target1].y);
                        }
                        if(linkList.target2!=null){
                            drawLinkTarget(switchList[linkList.target2].x, switchList[linkList.target2].y);
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

//Khởi tạo hàm vẽ TẤT CẢ đối tượng
function draw(){
    drawLights();   
    drawSwitchs();
    drawLinkButton();
    
}

//Gọi hàm vẽ TẤT CẢ đối tượng
draw();

//Gọi hàm kiểm tra click chuột
checkMouseClicked();


