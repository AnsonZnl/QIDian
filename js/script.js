<<<<<<< HEAD
/**
 * Created by lenovo on 18/1/20 020.
 */
//    轮播
function drag(oDiv, aLi) {
    var x = 0;
    var iNow = 0;
    oDiv.addEventListener('touchstart', function (ev) {
        var id = ev.targetTouches[0].identifier;
        var disX = ev.targetTouches[0].pageX - x;
        var downX = ev.targetTouches[0].pageX;

        function fnMove(ev) {
            if (ev.targetTouches[0].identifier == id) {
                x = ev.targetTouches[0].pageX - disX;
                oDiv.style.transform = 'translateX(' + x + 'px)';
            }
        }

        function fnEnd(ev) {
            if (ev.changedTouches[0].identifier == id) {
                document.removeEventListener('touchmove', fnMove, false);
                document.removeEventListener('touchend', fnEnd, false);
                oDiv.style.transition = '0.5s all linear';
                var upX = ev.changedTouches[0].pageX;
                if (Math.abs(upX - downX) > 50) {
                    if (upX - downX < 0) {
                        iNow++;
                        if (iNow == 4) {
                            iNow = 3;
                        }
                    } else {
                        iNow--;
                        if (iNow == -1) {
                            iNow = 0;
                        }
                    }
                }
                oDiv.style.transform = 'translateX(' + -iNow * aLi.offsetWidth + 'px)';
                oDiv.addEventListener('transitionend', function () {
                    oDiv.style.transition = 'none';
                    x = -iNow * aLi.offsetWidth;
                }, false);

            }
        }

        document.addEventListener('touchmove', fnMove, false);
        document.addEventListener('touchend', fnEnd, false);
        ev.preventDefault();        //事件绑定用的阻止默认事件;
    }, false)
}
document.addEventListener('DOMContentLoaded', function () {
    var oUl = document.querySelector('#box ul');
    var aLi = oUl.children;
    drag(oUl, aLi[0]);
}, false);
//选项卡 排行榜
function tab(nav,box){
    for (i=0;i<nav.length;i++){
        nav[i].index=i;
        nav[i].onclick=function(){
            var num=parseInt(this.index);
            for (j=0;j<nav.length;j++){
                box[j].style.display="none";
                nav[j].classList.remove("hover");
            }
            box[num].style.display="block";
            nav[num].classList.add("hover");
        }
    }
}
var Pnav=document.querySelectorAll(".phb_nav");
var Pbox=document.querySelectorAll(".phb_box");
var Fnav1=document.querySelectorAll(".fltj_nav1");
var Fbox1=document.querySelectorAll(".fltj_box1");
var Fnav2=document.querySelectorAll(".fltj_nav2");
var Fbox2=document.querySelectorAll(".fltj_box2");
tab(Pnav,Pbox);
tab(Fnav1,Fbox1);
tab(Fnav2,Fbox2);
<!--时间-->
var times = document.getElementById("times");
var timesNum = Number(times.innerHTML);
var timem = document.getElementById("timem");
var timemNum = Number(timem.innerHTML);
setInterval(function () {
    if (timesNum < 60) {
        timesNum--;
        times.innerHTML = Math.abs(timesNum);
        if (timesNum == 0) {
            timemNum--;
            timem.innerHTML = timemNum;
            timesNum = 59;
            times.innerHTML = Math.abs(timesNum);
        }
    }
}, 1000);
//滑动到底部使浮层消失
var content=document.querySelector("body");

window.onscroll = function(){
    var top=document.getElementById("top");
    var btnBook=document.getElementById("btn-book");
    var t = content.scrollTop;  //离上方的距离
    var h = content.clientHeight; //可见宽度
//        console.log(t);
//        console.log(h);
    if(t==0){
        top.style.display="none";
        btnBook.style.display="block";
    }else if (t>400){
        top.style.display="block";
        btnBook.style.display="block";
    }
    if (t>3000){
        top.style.display="none";
        btnBook.style.display="none";
    }
=======
/**
 * Created by lenovo on 18/1/20 020.
 */
//    轮播
function drag(oDiv, aLi) {
    var x = 0;
    var iNow = 0;
    oDiv.addEventListener('touchstart', function (ev) {
        var id = ev.targetTouches[0].identifier;
        var disX = ev.targetTouches[0].pageX - x;
        var downX = ev.targetTouches[0].pageX;

        function fnMove(ev) {
            if (ev.targetTouches[0].identifier == id) {
                x = ev.targetTouches[0].pageX - disX;
                oDiv.style.transform = 'translateX(' + x + 'px)';
            }
        }

        function fnEnd(ev) {
            if (ev.changedTouches[0].identifier == id) {
                document.removeEventListener('touchmove', fnMove, false);
                document.removeEventListener('touchend', fnEnd, false);
                oDiv.style.transition = '0.5s all linear';
                var upX = ev.changedTouches[0].pageX;
                if (Math.abs(upX - downX) > 50) {
                    if (upX - downX < 0) {
                        iNow++;
                        if (iNow == 4) {
                            iNow = 3;
                        }
                    } else {
                        iNow--;
                        if (iNow == -1) {
                            iNow = 0;
                        }
                    }
                }
                oDiv.style.transform = 'translateX(' + -iNow * aLi.offsetWidth + 'px)';
                oDiv.addEventListener('transitionend', function () {
                    oDiv.style.transition = 'none';
                    x = -iNow * aLi.offsetWidth;
                }, false);

            }
        }

        document.addEventListener('touchmove', fnMove, false);
        document.addEventListener('touchend', fnEnd, false);
        ev.preventDefault();        //事件绑定用的阻止默认事件;
    }, false)
}
document.addEventListener('DOMContentLoaded', function () {
    var oUl = document.querySelector('#box ul');
    var aLi = oUl.children;
    drag(oUl, aLi[0]);
}, false);
//选项卡 排行榜
function tab(nav,box){
    for (i=0;i<nav.length;i++){
        nav[i].index=i;
        nav[i].onclick=function(){
            var num=parseInt(this.index);
            for (j=0;j<nav.length;j++){
                box[j].style.display="none";
                nav[j].classList.remove("hover");
            }
            box[num].style.display="block";
            nav[num].classList.add("hover");
        }
    }
}
var Pnav=document.querySelectorAll(".phb_nav");
var Pbox=document.querySelectorAll(".phb_box");
var Fnav1=document.querySelectorAll(".fltj_nav1");
var Fbox1=document.querySelectorAll(".fltj_box1");
var Fnav2=document.querySelectorAll(".fltj_nav2");
var Fbox2=document.querySelectorAll(".fltj_box2");
tab(Pnav,Pbox);
tab(Fnav1,Fbox1);
tab(Fnav2,Fbox2);
<!--时间-->
var times = document.getElementById("times");
var timesNum = Number(times.innerHTML);
var timem = document.getElementById("timem");
var timemNum = Number(timem.innerHTML);
setInterval(function () {
    if (timesNum < 60) {
        timesNum--;
        times.innerHTML = Math.abs(timesNum);
        if (timesNum == 0) {
            timemNum--;
            timem.innerHTML = timemNum;
            timesNum = 59;
            times.innerHTML = Math.abs(timesNum);
        }
    }
}, 1000);
//滑动到底部使浮层消失
var content=document.querySelector("body");

window.onscroll = function(){
    var top=document.getElementById("top");
    var btnBook=document.getElementById("btn-book");
    var t = content.scrollTop;  //离上方的距离
    var h = content.clientHeight; //可见宽度
//        console.log(t);
//        console.log(h);
    if(t==0){
        top.style.display="none";
        btnBook.style.display="block";
    }else if (t>400){
        top.style.display="block";
        btnBook.style.display="block";
    }
    if (t>3000){
        top.style.display="none";
        btnBook.style.display="none";
    }
>>>>>>> 41f0adecdadccb7b6c68cf4e1f484f074d00d6c9
};