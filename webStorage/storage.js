/**
 *
 * Created by Administrator on 2017/8/11.
 */
function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    sessionStorage.setItem("mess",str);
}
function loadStorage(id) {
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("mess");
    target.innerHTML = msg;

}
function saveStorage2(id) {
    var target = document.getElementById(id);
    var str = target.value;
    localStorage.setItem("mess",str);
}
function loadStorage2(id) {
    var target = document.getElementById(id);
    var msg = localStorage.getItem("mess");
    target.innerHTML = msg;

}
