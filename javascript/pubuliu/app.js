/**
 *
 * Created by Administrator on 2017/9/13.
 */
window.onload = function () {
    imgLoacation('container','box');
    var imgData = {'data':[{'src':'12.jpg'},{'src':'22.jpg'},{'src':'32.jpg'},{'src':'42.jpg'},{'src':'52.jpg'},{'src':'62.jpg'},]}
    window.onscroll = function () {
        if (checkFlag()){
            var cparent = document.getElementById('container');
            for(var i = 0;i<imgData.data.length;i++){
                var ccontent = document.createElement('div');
                ccontent.className = 'box';
                cparent.appendChild(ccontent);
                var boxing = document.createElement('div');
                boxing.className = 'box_img';
                ccontent.appendChild(boxing);
                var img = document.createElement('img');
                img.src = 'images/' + imgData.data[i].src;
                boxing.appendChild(img);
            }
            imgLoacation('container','box');
        }
    };
};

function checkFlag() {
    var cparent = document.getElementById('container');
    var ccontent = getChildElement(cparent,'box');
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (lastContentHeight < (scrollTop + pageHeight)){
        return true;
    }
}

function imgLoacation(parent,content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = document.documentElement.clientWidth/imgWidth;//屏幕宽度/图片宽度 = 屏幕所能盛放图片的个数
    var num = Math.floor(cols);//转化整数
    cparent.style.cssText = 'width:' + imgWidth*num + 'px;margin:0 auto;';
    console.log(cparent.style.cssText);
    var boxHeightArr = [];
    for(var i =0;i<ccontent.length;i++){
        if (i<num) {
            boxHeightArr[i] = ccontent[i].offsetHeight;
        }else {
            var minHeight = Math.min.apply(null,boxHeightArr);
            var index = getMinHeightLocation(boxHeightArr,minHeight);
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[index].offsetLeft+'px';
            boxHeightArr[index] = boxHeightArr[index] + ccontent[i].offsetHeight;
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
    var allcontent = parent.getElementsByTagName('*');
    for(var i = 0;i<allcontent.length;i++){
        if (allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr
}
