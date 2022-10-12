//1、用windows.onload即当页面打开就做该内任务
window.onload=function (){
// 2、 因为我要操作行列行为，所以我得先用document的API取到整个table
    var table=document.getElementById("table");
// 3、我要进行每行操作点亮和熄灭，所以要的到tr节点
    var rows=table.rows;//tr的行队列
// 4、操作方法事件进行命令
    for (var i = 1; i <rows.length-1 ; i++) {
        var tr=rows[i];
        tr.onmouseover=light;
        tr.onmouseout=unlight;
        var tds=tr.cells;
        var td=tds[4];
        td.onmouseover=hand;
        var nb=tds[2];
        nb.onclick=rsnb;
        var dli =tds[4];//这里曾直接用了cells[4]，因为上面没有定义所以会错
        dli.onclick = deli;
    }
    }



function cknb(){//确保输入的是数字不是别的东西
         //数字字母上方0~9是48-57 右边键盘数字是96-105 回车是13 删除是8
         var kc=event.keyCode;
         //console.log(kc);//这句代码是将我输入的内容变成ASCI码并输出在控制台
        if ((kc>=48&&kc<=57)||(kc>=96&&kc<=105)||kc==13||kc==8){
            event.returnValue=true;
        }
}
function deli(){//删除商品，要注意一个问题就是等级层任务的管理
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        if(window.confirm("是否要删除这个商品")){
            var td=event.srcElement;
            var tr=td.parentElement;
            var table=document.getElementById("table");
            table.deleteRow(tr.rowIndex);
            upzj();
        }
    }
}
function light(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td=event.srcElement;
        var tr=td.parentElement;//得到tr节点
        tr.style.backgroundColor="navy";//背景变色了
        var tds =tr.cells;//得到一个列集合
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.color="white";//把字体颜色变成白色
        }
    }
}
function unlight(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td=event.srcElement;
        var tr=td.parentElement;//得到tr节点
        tr.style.backgroundColor="transparent";//背景变色了
        var tds =tr.cells;//得到一个列集合
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.color="black";//把字体颜色变成白色
        }
    }
}
function hand(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD") {
        var td = event.srcElement;
        td.style.cursor="hand";
    }
}
function rsnb(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td=event.srcElement;
        if (td.firstChild&&td.firstChild.nodeType==3){
           var old= td.innerText;
           td.innerHTML="<input type='text' size='4'/>";
           var input=td.firstChild;
           if (input.tagName=="INPUT"){
                input.value=old;
                input.select();
                input.onblur=upnb;
               input.onkeydown=cknb;
           }
        }
    }
}
function upnb(){//更新数量
//现在的节点是input
    if (event&&event.srcElement&&event.srcElement.tagName=="INPUT"){
    var input=event.srcElement;
    var update=input.value;//拿到框框里修改的值
    var td=input.parentElement;
    td.innerText=update;//把框框里的值给换掉
     upjg(td.parentElement);
    }
}
function upjg(tr){//更新每件货的价格
    if (tr&&tr.tagName=="TR"){
        var tds=tr.cells;
        var nb=tds[2].innerText;
        var dj=tds[1].innerText;
        var jg =parseInt(nb)*parseInt(dj);
        tds[3].innerText=jg;
        upzj();
    }
}
function upzj(){//更新总价格
    var table=document.getElementById("table");
    var rows=table.rows;
    var num=0;
    for (var i = 1; i <rows.length-1 ; i++) {
        var tr=rows[i];
        var jg=parseInt(tr.cells[3].innerText);
        num=num+jg;
    }
      rows[rows.length-1].cells[1].innerText=num;
}
function tikin(){//添加一行新的表格，这里我还不会动态更新表格，说实话不清楚现在添加的一行是动态的还是静态的？我有个设想就是在定一个大的盒子
    //先是添加行代码内嵌入我所要的功能，就像下面我直接复制粘贴上面的了。还有一个问题文本框内容会一直在，reset不知道怎么在table中使用
    var table=document.getElementById("table");
    var x=table.insertRow(2);
    var s = x.insertCell(0);
    var d = x.insertCell(1);
    var f = x.insertCell(2);
    var g = x.insertCell(3);
    var h = x.insertCell(4);
    s.innerHTML=document.getElementById("name").value;
    d.innerHTML=document.getElementById("prise").value;
    f.innerHTML=document.getElementById("number").value;
    g.innerHTML=0;
    h.innerHTML="🚮";
    var table=document.getElementById("table");
// 3、我要进行每行操作点亮和熄灭，所以要的到tr节点
    var rows=table.rows;//tr的行队列
// 4、操作方法事件进行命令
    for (var i = 1; i <rows.length-1 ; i++) {
        var tr=rows[i];
        tr.onmouseover=light;
        tr.onmouseout=unlight;
        var tds=tr.cells;
        var td=tds[4];
        td.onmouseover=hand;
        var nb=tds[2];
        nb.onclick=rsnb;
        var dli =tds[4];//这里曾直接用了cells[4]，因为上面没有定义所以会错
        dli.onclick = deli;
    }
}
function chage (){
    var input=event.srcElement;
    var update=input.value;//拿到框框里修改的值
    var td=input.parentElement;
    td.innerText=update;//把框框里的值给换掉
    upjg(td.parentElement);
}