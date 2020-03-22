class Contact {
    constructor(x, y, isOn) {
        this.x = x;
        this.y = y;
        this.isOn = isOn;
        this.color1 = '#595959';
        this.color2 = '#ff0000';
        this.color3 = '#00cc00';
        this.height = 100;
        this.width = 50;
    }
    
    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 10;
        context.strokeStyle = 'black';
        context.stroke();
        context.fillStyle = this.color1;
        context.fill();
        context.closePath();

        if(!this.isOn){
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height/2);
            context.strokeStyle = 'black';
            context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else{
            context.beginPath();
            context.rect(this.x, this.y + this.height/2, this.width, this.height/2);
            context.strokeStyle = 'black';
            context.stroke();
            context.fillStyle = this.color3;
            context.fill();
            context.closePath();       
        }
    }
}