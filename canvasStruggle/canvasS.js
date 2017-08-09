/**
 *
 * Created by chao on 2017/8/8.
 */
function draw(Id) {
    var canvas = document.getElementById(Id);
    var context = canvas.getContext('2d');
    context.fillStyle = "red";
    context.fillRect(0,0,400,300);
    context.fill();
    context.strokeStyle = "black";
    context.strokeRect(30,30,100,80);
    context.lineWidth = 2;
    context.stroke();
}
//add by yanchao on 20170809
function drawCircle(id) {
    var canvas1 = document.getElementById(id);
    var context1 = canvas1.getContext('2d');
    context1.fillStyle = "white";
    context1.fillRect(0,0,400,400);
    for (var i = 0; i < 8; i++){
        context1.beginPath();
        context1.arc(i*20,i*20,i*10,0,Math.PI*2,true);
        context1.closePath();
        context1.fillStyle = "rgba(255,0,0,0.25)";
        context1.fill();
        context1.strokeStyle = "red";
        context1.lineWidth = 1;
        context1.stroke();
    }
}
