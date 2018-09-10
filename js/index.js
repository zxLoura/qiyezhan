/*
* @Author: ZX
* @Date:   2018-09-04 13:45:13
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-09 17:39:15
*/
window.onload=function(){
    let wh=window.innerHeight;
    let floor=document.querySelectorAll(".floor");
    let back=document.querySelector(".back");
    // console.log(back);

    let arr=[];
    for(let i=0;i<floor.length;i++){
        // console.log(floor[i].offsetTop);
        arr.push(floor[i].offsetTop);
    }
    // console.log(arr);
    window.onscroll=function () {
        //获取距顶部的距离
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        // console.log(bh);
        //遍历每一楼
        arr.forEach(function (value,index) {
            // console.log(value, index);
            //if浏览器窗口的高度+滚动的距离>大于楼层距顶部的距离
            if(wh+bh>=value+300){
                floor[index].style.opacity=1;
             
            }
        })

        if(bh>=800){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
        
    }


     back.onclick=function () {
        animate(document.body,{scrollTop:0},600);
        animate(document.documentElement,{scrollTop:0},600);
    }

    
    
    
   






}