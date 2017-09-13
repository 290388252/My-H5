/**
 *
 * Created by Administrator on 2017/9/13.
 */
window.onload = function () {
    imgLoacation('container','box')
}
function imgLoacation(parent,content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = document.documentElement.clientWidth/imgWidth;//屏幕宽度/图片宽度 = 屏幕所能盛放图片的个数
    var num = Math.floor(cols);//转化整数
    cparent.style.cssText = 'width:' + imgWidth*num + 'px;margin：0 auto;'
    var boxHeightArr = [];
    for(var i =0;i<ccontent.length;i++){
        if (i<num) {
            boxHeightArr[i] = ccontent[i].offsetHeight;
        }else {
            var minHeight = Math.min.apply(null,boxHeightArr);
            var index = getMinHeightLocation(boxHeightArr,minHeight);
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px;'
            ccontent[i].style.left = ccontent[index].offsetLeft
        }
    }
}

function getMinHeightLocation(boxHeightArr,minHeight) {
    for(var i in boxHeightArr){
        if (boxHeightArr[i] == minHeight){
            return i
        }
    }
}

function getChildElement(parent,content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName('*')
    for(var i = 0;i<allcontent.length;i++){
        if (allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr
}
