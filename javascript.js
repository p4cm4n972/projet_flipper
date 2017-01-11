window.addEventListener('load', function () {

    var mur = new Image('width: 600, height: 620');
    mur.src = 'img/font.jpg';
    var tableauCouleur = ['Aqua', 'Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'Navy', 'Olive', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow'];
    var x = 100;
    var y = 10;
    var vx = 5;
    var vy = 2;
    var q = 170;
    var s = 580;
    var u = 430;
    var v = 580;




    function game() {

        var context = document.getElementById('canvas').getContext('2d');

        context.drawImage(mur, 0, 0);

        context.beginPath();
        context.rect(q, s, 100, 15);
        context.closePath();
        context.fillStyle = 'yellow';
        context.fill();
        
        context.beginPath();
        context.rect(u, v, -100, 15);
        context.closePath();
        context.fillStyle = 'yellow';
        context.fill();

        context.beginPath();
        context.arc(x, y, 40 / 2, 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = 'blue';
        context.fill();
        x += vx;
        y += vy;
        vy *= 0.99;
        vy += 0.25;

        if (y + vy > canvas.height || y + vy < 0) {
            vy = -vy;
        }
        if (x + vx > canvas.width || x + vx < 0) {
            vx = -vx;
        }

        if (q < x + 15 && q + 100 > x && 580 < y + 15 && 15 + 580 > y) {
            vy *= -1.2;
        }
        if (u < x + 15 && u + 100 > x && 580 < y + 15 && 15 + 580 > y) {
            vy *= -1.2;
        }

        window.onkeydown = function (event) {
            var code = event.keyCode;
            switch (code) {
                case 37:
                    context.rotate(Math.PI / 2);
                    break;
                case 39:
                    q += 12;
                    break;

            }
        }

        window.requestAnimationFrame(game);
    };


    window.addEventListener('click', function () {
        document.body.style.margin = '20px';
        document.getElementById('canvas').style.borderColor = "purple";
        var laDivDemonBouton = document.createElement('div');
        laDivDemonBouton.id = 'maDiv';
        laDivDemonBouton.style.position = 'absolute';
        laDivDemonBouton.style.margin = 'auto';
        laDivDemonBouton.style.display = 'block';
        var monBouton = document.createElement('button');
        monBouton.id = 'monBouton';
        monBouton.style.backgroundColor = 'purple';
        laDivDemonBouton.appendChild(monBouton);
        document.body.appendChild(laDivDemonBouton);
        document.getElementById('monBouton').innerHTML = 'play';
        document.getElementById('monBouton').addEventListener('click', function () {
            laDivDemonBouton.style.display = 'none';

            return game();
        })
    })

})//ONLOAD

