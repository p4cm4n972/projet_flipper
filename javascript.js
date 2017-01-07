window.addEventListener('load', function () {

window.addEventListener('click', function () {
document.body.style.backgroundImage = "url('img/bkg.jpg')";
document.getElementById('canvas').style.backgroundImage = "url('img/font.jpg')";
document.getElementById('canvas').style.borderColor = "purple";
});


var tableauCouleur = ['Aqua','Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'Navy', 'Olive', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow'];

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var raf;

var ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: tableauCouleur[2],
    draw: function () {
        context.beginPath();
        context.arc(this.x,this.y, this.radius, 0, Math.PI*2, true);
        context.fill();
        
    }
};

function draw() {
    context.clearREct(0,0,canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy *= .99;
    ball.vy += .25;

    if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0 ) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx
    }

    raf = window.requestAnimationFrame(draw);
    }

    ball.draw();

}); //LOAD  AU CHARGEMENT
