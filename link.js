function handleButtonLink() {
    ableToLink = true;
    hideElement('buttonLink');
    showElement('buttonTieUp');
    showElement('buttonSwitch');
}

function handleButtonBack(){
    ableToLink = false;
    showElement('buttonLink');
    hideElement('buttonTieUp');
    hideElement('buttonSwitch');
}

function handleButtonTieUp() {

}

function handleButtonSwitch(){
    if (this == targetList[0]) {
        this.status = !this.status;
        targetList[1].status = !targetList[1].status;
        resetLinkTarget();
        drawAllContacts();
    }
    if (this == targetList[1]) {
        this.status = !this.status;
        targetList[0].status = !targetList[0].status;
        resetLinkTarget();
        drawAllContacts();
    }
}


// function handleButtonLink() {
//     isLinkFlag = !isLinkFlag;
//     if (isLinkFlag) {
//         showElement('buttonUnlink');
//         showElement('buttonSwitch');
//     } else {
//         hideElement('buttonUnlink');
//         hideElement('buttonSwitch');
//     }
// }





// function makeContactsLinked()

// function handleButtonUnLink() {
//     resetLinkTarget();
//     drawAllContacts();
//     showElement('buttonSwitch');
// }


// class Link {
//     constructor(x, y, status) {
//         this.x = x;
//         this.y = y;
//         this.isSelected = status;
//         this.width = 100;
//         this.height = 50;
//         this.color1 = '#e6e6ff';
//         this.color2 = '#0000ff';
//         this.strokeColor = '#000000';
//     }

//     isPointed() {
//         return (mouseX >= this.x && mouseX <= this.x + this.width
//             && mouseY >= this.y && mouseY <= this.y + this.height)
//     }

//     drawButton() {
//         // Draw the border
//         context.beginPath();
//         context.rect(this.x, this.y, this.width, this.height);
//         context.lineWidth = 10;
//         context.strokeStyle = 'black';
//         context.stroke();
//         if (!this.isSelected) {
//             context.fillStyle = this.color1;
//         } else {
//             context.fillStyle = this.color2;
//         }
//         context.fill();
//         context.closePath();

//         // Draw the text
//         context.beginPath();
//         context.font = '30px Comic Sans MS';
//         if (!this.isSelected) {
//             context.fillStyle = 'black';
//             context.fillText('LINK', this.x + 12, this.y + 35);
//         } else {
//             context.fillStyle = 'white';
//             context.fillText('OK!', this.x + 22, this.y + 35);
//         }
//         context.closePath();
//     }

//     clicked() {
//         if (this.isPointed()) {
//             this.isSelected = !this.isSelected;
//             isLinkFlag = this.isSelected;
//             link.drawButton();

//             //Trường hợp người chơi chỉ chọn 1 Target --> không thực hiện Link
//             if (!isLinkFlag) {
//                 if (targetList[0] == null || targetList[1] == null) {
//                     targetList[0] = null;
//                     targetList[1] = null;
//                     drawContacts();
//                 }
//             }
//         }
//     }
// }