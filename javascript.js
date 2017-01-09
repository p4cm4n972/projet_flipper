window.addEventListener('load', function () {

var tableauCouleur = ['Aqua','Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'Navy', 'Olive', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow'];
var clickOn = false;

window.addEventListener('click', function () {
    if (!clickOn) { 
document.body.style.backgroundImage = "url('img/bkg.jpg')";
document.getElementById('canvas').style.borderColor = "purple";



var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var nbAlea = function () {
    var nb = 0 + ((tableauCouleur.length-1) - 0 + 1) * Math.random();
    return Math.floor(nb);
};

var ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    color: tableauCouleur[nbAlea()],
    draw: function () {
        context.beginPath();
        context.arc(this.x,this.y, 50/2, 0, Math.PI*2);
        context.closePath ();
        context.fillStyle = this.color;
        context.fill();
        
    }
};

function draw() {
    var linear = context.createLinearGradient(0, 0, 600, 650);
    linear.addColorStop(0, '#F909CD');
    linear.addColorStop(1, '#32CDFC');
    context.fillStyle = linear;
    context.fillRect(0, 0, 600, 650);
    
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy *= 0.99;
    ball.vy += 0.25;

    if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0 ) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx
    }

    window.requestAnimationFrame(draw);
    }

    ball.draw();
    draw();
    clickOn = true;
    }
});

}); //LOAD  AU CHARGEMENT
