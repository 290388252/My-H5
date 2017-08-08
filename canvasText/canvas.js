/**
 *
 * Created by chao on 2017/8/8.
 */
function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(0,0,800,300);
    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    // context.textBaseline = 'top'//基准线 top middle hanging bottom alphabetic  x轴
    // context.textAlign = 'start' //基准线 start left end right center y轴
    context.font = 'bold 40px 微软雅黑';
    context.fillText('我是一名程',50,50);
    context.strokeText('我是一名程序',100,150);
    context.fillText('我是一名程序员',150,250);
}