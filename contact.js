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

    clicked() {
        if (this.isPointed()) {
            if (this == linkTarget[0]) {
                this.status = !this.status;
                linkTarget[1].status = !linkTarget[1].status;
                resetLinkTarget();
                drawAllContacts();
                // this.draw();
                // linkTarget[1].draw();
            } else if (this == linkTarget[1]) {
                this.status = !this.status;
                //this.draw();
                linkTarget[0].status = !linkTarget[0].status;
                resetLinkTarget();
                drawAllContacts();
                //linkTarget[0].draw();
            } else {
                this.status = !this.status;
                this.draw();
            }

        }
    }

    clickedLinkTarget() {
        if (this.isPointed()) {
            if (linkTarget[0] == this) {
                linkTarget[0] = null;
                linkTarget[1] = null;
                drawAllContacts();
            }

            linkTarget[0] = linkTarget[1];
            linkTarget[1] = this;
            this.strokeColor = '#0000ff';
            this.draw();


            if (linkTarget[0] != null) {
                drawAllContacts();
                linkTarget[0].strokeColor = '#0000ff';
                linkTarget[0].draw();
                linkTarget[1].strokeColor = '#0000ff';
                linkTarget[1].draw();
            }

            if (linkTarget[0] == linkTarget[1] && linkTarget[1] == this) {
                linkTarget[0] = null;
                linkTarget[1] = null;
                drawAllContacts();
            }
        }
    }
}
