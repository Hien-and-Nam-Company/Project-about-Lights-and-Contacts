class Light {
    constructor(x, y, contactA, contactB) {
        //Cấu hình cho bóng đèn
        this.x = x;
        this.y = y;
        this.contactA = contactA;
        this.contactB = contactB;
        this.colorOff = '#ffffe6';
        this.colorOn = '#ffff00';
        this.radius = 25;
    }
    
    draw(isContactAOn, isContactBOn) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context.lineWidth = 10;
        context.stroke();
        if(isContactAOn == !isContactBOn){
            context.fillStyle = this.colorOn;
        } else{
            context.fillStyle = this.colorOff;
        }
        context.fill();
        context.closePath();
    }
}
