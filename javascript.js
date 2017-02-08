window.addEventListener('load', function () { //CHARGEMENT (LOAD) DE LA PAGE 

    var context = document.getElementById('canvas').getContext('2d'); //DECLARATION DU CONTEXT DU CANVAS : 2D (2 DIMENSIONS)
    var mur = new Image('width: 600, height: 620');// CREATION DUN NOUVEL OBJET IMAGE 'MUR' QUI CONTIENDRA L'IMAGE  REPRESENTANT L'IMAGE DE FOND DU CANVAS
    mur.src = 'img/font.jpg';//ATTRIBUTION DE LA SOURCE DE L'IMAGE 
    //var tableauCouleur = ['Aqua', 'Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'Navy', 'Olive', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow'];
//DECALRATION VARIABLES GLOBALES
    

//DECLARATION DE L'OBJET QUI REPRESENTERA LA BALLE
    var ball = {
        x: 100,
        y: 10,
        vx: 5,
        vy: 2,
        radius: 25,
        color: 'blue',
        draw: function () {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
        }
    };
    
//DECLARATION DE L'OBJET QUI REPRESENTERA LES OBSTACLES ROND
    var pieces = {
        x: 500,
        y: 500,
        radius: 25,
        color: 'blue',
        draw: function () {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
        }
    };
   
    
    
//L'ANIMATION
    function game() {
        context.drawImage(mur, 0, 0);//DESSIN DU FOND DU CANVAS
        ball.draw();//DESSIN DE LA BALLE
        pieces.draw();//DESSIN DES OBSTACLES ROND

       
        //ALGORITHME DU MOUVEMENT DE LA BALLE
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy *= 0.99;
        ball.vy += 0.25;
        //
        var dx = (ball.x ) - (pieces.x);
        var dy = (ball.y ) - (pieces.y);
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball.radius + pieces.radius) {
            ball.vy = -ball.vy;
        }
        //
       

        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }

      


        window.requestAnimationFrame(game);
    };

    game();
})//ONLOAD
