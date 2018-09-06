/*
* @Author: ZX
* @Date:   2018-09-06 14:27:04
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-06 14:29:44
*/
function banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass="active",second="2000") {
    //2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
    let now=0;
    let next=0;

    //开关：控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true，可以点击左右箭头
    let flag=true;
    let t=setInterval(move,second);
    function move() {
            next++;
            if(next==imgs.length){
                next=0;
            }
            //确保下一张图的位置永远在最右侧
            imgs[next].style.left=widths+"px";
            // imgs[now].style.left=-widths+"px";
            // imgs[next].style.left=0+"px";
            animate(imgs[now],{left:-widths});
            animate(imgs[next],{left:0},function () {
                flag=true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now=next;
        }
    //左箭头
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        //确保下一张图的位置永远在最右侧
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    leftBtn.onclick=function () {
        //判断开关是否开启
        //开关开启，则！flag=false,不执行return,执行 flag=false和
        // move，move执行完flag=true
        //开关关闭的时候，不要点击
        //flag=false !flag=true
        //如果（）中的表达式值为false，不执行if条件语句
        //如果（）中的表达式值为true，执行if条件语句
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    }
    rightBtn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,second);
    }

    //鼠标移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            if(flag){
                for(let j=0;j<dots.length;j++){
                    dots[j].classList.remove(activeClass);
                    imgs[j].style.left=widths+"px";
                }
                dots[i].classList.add(activeClass);
                imgs[i].style.left=0;
                now=i;
                next=i;
            }
        }
    }

    //窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
    //窗口获得焦点时，继续时间间隔函数
    window.onfocus=function () {
        t=setInterval(move,second);
    }
}