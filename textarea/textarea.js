/**
 * Created by Administrator on 2017/8/11.
 */
function saveStorage(id) {
    var target = document.getElementById(id).value;
    var time = new Date().getTime();

    localStorage().setItem(time,target);
    alert("数据已经被保存");
    loadStorage('msg');
}
function loadStorage(id) {
    var reselt = '<table border="1">';
    for (var i = 0; i<localStorage.length;i++){
        var key = localStorage.key(1);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        reselt +='<tr><td>'+'这是第'+i+'条数据</td><td>'+value+'</td><td>'+datestr+'</td></tr>'

    }
    reselt += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = reselt;
}
function cleanStorage(id) {
    localStorage.clear();
    alert("数据已经被清空");
}
