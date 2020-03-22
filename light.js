class Light {
    constructor(x, y, firstContact, secondContact) {
        //Các thuộc tính cho bóng đèn
        this.x = x;
        this.y = y;
        this.firstContact = firstContact;
        this.secondContact = secondContact;
        this.colorOff = '#ffffe6';
        this.colorOn = '#ffff00';
        this.radius = 25;
    }
    
    draw(firstContactStatus, secondContactStatus) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context.lineWidth = 10;
        context.stroke();
        if(firstContactStatus != secondContactStatus){
            context.fillStyle = this.colorOn;
        } else{
            context.fillStyle = this.colorOff;
        }
        context.fill();
        context.closePath();
    }
}
