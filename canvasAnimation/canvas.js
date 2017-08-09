/**
 *
 * Created by Administrator on 2017/8/9.
 */
var context , canvas;
var i;
function draw(id) {
    canvas = document.getElementById(id);
    context = canvas.getContext('2d');
    setInterval(painting,500);

    i = 0;
}
function painting() {
    context.fillStyle = 'white';
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'green';
    context.fillRect(i,0,10,10);
    i = i + 20;

    // context.fillRect(0,0,canvas.width,canvas.height);
    // context.clearRect(10,10,300,300);
}
