class Light {
    constructor(x, y, firstContact, secondContact) {
        this.x = x;
        this.y = y;
        this.firstContact = firstContact;
        this.secondContact = secondContact;
        this.colorOff = '#ffffe6';
        this.colorOn = '#ffff00';
        this.strokeColor = '#000000';
        this.radius = 25;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.lineWidth = 10;
        context.strokeStyle = this.strokeColor;
        context.stroke();
        if (this.firstContact.status != this.secondContact.status) {
            context.fillStyle = this.colorOn;
        } else {
            context.fillStyle = this.colorOff;
        }
        context.fill();
        context.closePath();
    }
}
