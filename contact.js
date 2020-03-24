class Contact {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.color1 = '#595959';
        this.color2 = '#ff0000';
        this.color3 = '#00cc00';
        this.color4 = 'yellow';
        this.strokeColor = '#000000';
        this.height = 100;
        this.width = 50;
        this.isTargeted = false;
    }

    isPointed() {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        }
        return false;
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 10;
        context.strokeStyle = this.strokeColor;
        context.stroke();
        context.fillStyle = this.color1;
        context.fill();
        context.closePath();

        if (this.status == 'top') {
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else if (this.status == 'mid') {
            context.beginPath();
            context.rect(this.x, this.y + this.height / 3, this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color3;
            context.fill();
            context.closePath();
        } else {
            context.beginPath();
            context.rect(this.x, this.y + 2 * (this.height / 3), this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color4;
            context.fill();
            context.closePath();
        }
    }

    drawOnTargeted() {
        this.strokeColor = '#0000ff';
        this.draw();
    }

    shift() {
        if (this.status == 'top') {
            this.status = 'mid';
        } else if (this.status == 'mid') {
            this.status = 'bot';
        } else {
            this.status = 'top';
        }
    }

    onclick() {
        if (this.isPointed()) {
            this.isTargeted = true;
            this.drawOnTargeted();
            targetList.push(this);
        }
    }
}



//     onTargeted() {
//         if (this.isPointed()) {
//             if (targetList[0] == this) {
//                 targetList[0] = null;
//                 targetList[1] = null;
//                 drawAllContacts();
//             }

//             targetList[0] = targetList[1];
//             targetList[1] = this;
//             this.strokeColor = '#0000ff';
//             this.draw();


//             if (targetList[0] != null) {
//                 drawAllContacts();
//                 targetList[0].strokeColor = '#0000ff';
//                 targetList[0].draw();
//                 this.drawOnTargeted();
//             }
//         }

//         if (targetList[0] == null && targetList[1] == null) {
//             showElement('buttonSwitch');
//         } else if (targetList[0] == null || targetList[1] == null) {
//             hideElement('buttonSwitch');
//         } else if (targetList[0] == targetList[1]) {
//             hideElement('buttonSwitch');
//         } else {
//             showElement('buttonSwitch');
//         }
//     }

// }