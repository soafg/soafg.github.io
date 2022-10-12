window.onload=function (){
//    当页面加载完成就绑定我们所需要的事件
//    根据id获取表格
    var boxsise =document.getElementById("boxSide");//因为要操纵行和列，就要拿到table元素
//    获取table中的所有行
    var rows =boxsise.rows;
    for (var i = 0; i < rows.length; i++) {
         var tr = rows[i];//得到行数组中的一行
         tr.onmouseover=showBgc;//这两个方法不能带（），该处把方法当成事件使用而不是进行赋值
         tr.onmouseout=clearBgc;
         var cells=tr.cells;//拿该行中的所有列，返回列数组
         var show=cells[5];//单独对其中一个列格子操作
         show.onmouseover=showHand;//绑定操作一列鼠标的移动到上面就变样式
         var power=cells[4];
         power.onclick=changeMark;
    }
}



//当鼠标悬浮进行颜色变换
function showBgc(){
if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
    var td =event.srcElement;
    var tr =td.parentElement;
    tr.style.backgroundColor="navy";
    var tds =tr.cells;
    for (var i =0;i<tds.length;i++){
        tds[i].style.color= "white";
    }
}
}

function clearBgc(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td =event.srcElement;
        var tr =td.parentElement;
        tr.style.backgroundColor="transparent";//转换为透明色
        var tds =tr.cells;
        for (var i =0;i<tds.length;i++){
            tds[i].style.color= "black";
        }
    }
}

function showHand(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td =event.srcElement;
        // var tr =td.parentElement;
         td.style.cursor="hand";//改变鼠标样式

    }

}

function changeMark(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){//判断当前节点是否是TD
        var node =event.srcElement;//取node变量接这个节点
        if (node.firstChild&&node.firstChild.nodeType==3){//判断当前有节点且是文本节点，以防点击非文本内容节点直接清空了文本框
            var oldpower=node.innerText;//innerText表示设置或获取当前节点的内部文本
            node.innerHTML="<input type='text' size='4'/>";//键入HTML代码创建文本框
            var input=node.firstChild;//判断他的子节点（下一个节点）是不是INPUT
            if (input.tagName=="INPUT"){
                input.value=oldpower;
                //选中输入框内的文本
                input.select();
                //输入绑定事件取消焦点
                input.onblur=updateMark;
            }
        }
    }
}

function updateMark(){
    if (event&&event.srcElement&&event.srcElement.tagName=="INPUT"){
        var input=event.srcElement;
        var update=input.value;
        var pratd=input.parentElement;
        pratd.innerText=update;
    }
}
/*
1、Js的定义方法，不需要修饰符，不需要返回值，形参也不需要确定类，js是弱类型语言
2、需要清楚到底要调用什么进行方法的编写  event  当前发生的事件
                                     event.srcElement  事件源
                                     event.srcElement.tagName=="TD" 事件源的标签
                                     由于练习中的表格若移动到tr（行）必定在td（列）的格子上所以会返回TD
3、alert（）弹出一个提示框展示内容
4、我们要让是什么工具就用什么代码格式，所以我们在html文件中尽量少使用其他语言的代码
   所以使用windows.onload=function(){ } 表示当页加载完成需要绑定各种事件
5、cursor 表示可以改变鼠标的样式
6、innerText表示设置或获取当前节点的内部文本
7、innerHTML表示设置当前节点的HTML
8、节点.firstChild.nodeType==1 元素节点
                            3  文本节点
9、节点.firstChild 拿当前节点的下一个节点 如 td.firstChild其实就是input   <td><input type='text' size='4'/></td>。
  */
