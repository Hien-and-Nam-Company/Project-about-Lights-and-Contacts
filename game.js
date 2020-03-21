var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Light Configuration
var lightConfig = {
    color: '#ffff00',
    radius: 20,
    x: 100,
    y: 100,
};

function drawLight(){
    context.beginPath();
    context.arc(lightConfig.x, lightConfig.y, lightConfig.radius, 0, Math.PI*2, false);
    context.stroke();
    context.fillStyle = lightConfig.color;
    context.fill();
    context.closePath();
}

drawLight();