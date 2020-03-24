class Contact {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.color1 = '#595959';
        this.color2 = '#ff0000';
        this.color3 = '#00cc00';
        this.strokeColor = '#000000';
        this.height = 100;
        this.width = 50;
    }

    isPointed() {
        if (mouseX >= this.x && mouseX <= this.x + this.width
            && mouseY >= this.y && mouseY <= this.y + this.height) {
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

        if (!this.status) {
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height / 2);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else {
            context.beginPath();
            context.rect(this.x, this.y + this.height / 2, this.width, this.height / 2);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color3;
            context.fill();
            context.closePath();
        }
    }

    handleOnclick() {
        if (this.isPointed()) {
            if (this == targetList[0]) {
                this.status = !this.status;
                targetList[1].status = !targetList[1].status;
                resetLinkTarget();
                drawAllContacts();
            } else if (this == targetList[1]) {
                this.status = !this.status;
                targetList[0].status = !targetList[0].status;
                resetLinkTarget();
                drawAllContacts();
            } else {
                this.status = !this.status;
                this.draw();
            }

        }
    }

    clickedLinkTarget() {
        if (this.isPointed()) {
            if (targetList[0] == this) {
                targetList[0] = null;
                targetList[1] = null;
                drawAllContacts();
            }

            targetList[0] = targetList[1];
            targetList[1] = this;
            this.strokeColor = '#0000ff';
            this.draw();


            if (targetList[0] != null) {
                drawAllContacts();
                targetList[0].strokeColor = '#0000ff';
                targetList[0].draw();
                targetList[1].strokeColor = '#0000ff';
                targetList[1].draw();
            }
        }

        if (targetList[0] == null && targetList[1] == null) {
            showElement('buttonSwitch');
        } else if (targetList[0] == null || targetList[1] == null) {
            hideElement('buttonSwitch');
        } else if (targetList[0] == targetList[1]) {
            hideElement('buttonSwitch');
        } else {
            showElement('buttonSwitch');
        }
    }
}
