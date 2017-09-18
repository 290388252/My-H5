/**
 * Created by Administrator on 2017/9/15.
 */
$(document).ready(function () {
   $(window).on('load',function () {
    imgLoaction();
    var imgData = {'data':[{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'19.jpg'}]};
    window.onscroll = function () {
        if (scrollside()){
            $.each(imgData.data,function (index,value) {
                var box = $('<div>').addClass('box').appendTo($('#container'));
                var content = $('<div>').addClass('box_img').appendTo(box);
                $('<img>').attr('src','images/'+$(value).attr('src')).appendTo(content);
            });
            imgLoaction();
        }
    }
   })
});

function scrollside() {
    var box = $('.box');
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<documentHeight+scrollHeight)?true:false;
}

function imgLoaction() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function (index,value) {
        var boxHeight = box.eq(index).height();
        if (index < num){
            boxArr[index] = boxHeight;
        }else {
         var minboxHeight = Math.min.apply(null,boxArr);
         var minboxIndex = $.inArray(minboxHeight,boxArr);
         $(value).css({
             'position':'absolute',
             'top':minboxHeight,
             'left':box.eq(minboxIndex).position().left
         });
         boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}
