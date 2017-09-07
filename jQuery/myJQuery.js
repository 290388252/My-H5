/**
 * yanchao
 * Created by Administrator on 2017/9/7.
 */
var m = jQuery.noConflict();
m.myjq = function () {
    alert('hello myjq')
}
m.fn.myjq = function () {
   m(this).text('hello')
}
