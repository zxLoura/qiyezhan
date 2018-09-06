/*
* @Author: ZX
* @Date:   2018-09-04 13:45:13
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-06 14:45:26
*/
window.onload=function(){



    let imgs=document.querySelectorAll(".bannerImg");
    let dots=document.querySelectorAll(".dot");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".more-left")[0];
    let rightBtn=document.querySelectorAll(".more-right")[0];
    let widths=parseInt(getComputedStyle(imgs[0],null).width);

     console.log(widths);
    console.log(imgs,dots,banner,leftBtn,rightBtn);
   

    banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,"active");



}