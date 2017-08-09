/**
 *
 * Created by Administrator on 2017/8/9.
 */
function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = 'gray';
    context.fillRect(0,0,450,350);
    window.location = canvas.toDataURL('image/jpeg');
}
