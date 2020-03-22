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
    
    draw() {
        context.beginPath();
        context.arc(x, y, lightConfig.radius, 0, Math.PI*2, false);
        context.lineWidth = 10;
        context.stroke();
        if(contactA == !contactB){
            context.fillStyle = lightConfig.colorOn;
        } else{
            context.fillStyle = lightConfig.colorOff;
        }
        context.fill();
        context.closePath();
    }
}
