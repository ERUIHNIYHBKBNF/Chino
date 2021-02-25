function pushAlert() {
    alert("没有写｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡");
}

function submitFrom() {
    alert("并没有提交什么_(:з」∠)_");
}

function noFunciton() {
    alert("并没有这个功能qwq");
}

function noImg() {
    alert("找不到好康的轮播图｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡");
}
//显示返回顶部按钮
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("sc-back").style.visibility = "visible";
    } else {
        document.getElementById("sc-back").style.visibility = "hidden";
    }
};
//返回顶部
function backTop() {
    var timer = setInterval(() => {
        if (!document.documentElement.scrollTop) {
            clearInterval(timer);
        }
        document.documentElement.scrollTop -= 10;
    }, 1);
}

//右侧菜单-APP下载
function showAppDownload() {
    document.getElementById("APP-download").style.display = "flex";
}

function unshowAppDownload() {
    document.getElementById("APP-download").style.display = "none";
}
//顶部菜单内容显示
function showMenuContent(num) {
    var contents = document.getElementsByClassName("menu-content");
    contents[num].style.display = "block";
}

function unshowMenuContent() {
    var contents = document.getElementsByClassName("menu-content");
    for (i = 0; i < contents.length; i++)
        contents[i].style.display = "none";
}
//表单内容切换
function changeFrom(num) {
    var froms = document.getElementsByClassName("info-content");
    var btns = document.getElementsByClassName("info-selection");
    for (i = 0; i < froms.length; i++) {
        froms[i].style.display = "none";
        btns[i].style.backgroundColor = "bisque";
    }
    froms[num].style.display = "block";
    btns[num].style.backgroundColor = "navajowhite";
}
//输入框内容交换
function exchangeText() {
    var inputs = document.getElementsByClassName("positionInput");
    var tmp = inputs[0].value;
    inputs[0].value = inputs[1].value;
    inputs[1].value = tmp;
}
//轮播图
var imgWidth = [1920, 1920, 2560, 1920, 2560];
var base = [0, 1920, 3840, 6400, 8320]; //类似前缀和的东西，偏移量公式中的base
var now = 1; //now第几张图
var imgBox = document.getElementById("img-box");
const EPS = 1e-10;

function judge() { //判断到头
    if (now == 0) {
        document.getElementById("img-box").style.right = "calc(6400px + 1920px / 2 - 50%)";
        now = 3;
    }
    if (now == 4) {
        document.getElementById("img-box").style.right = "calc(1920px + 1920px / 2 - 50%)";
        now = 1;
    }
    colorNode(now - 1);
}

function colorNode(to) { //小圆点颜色变化
    var nodes = document.getElementsByClassName("img-control");
    for (i = 0; i < nodes.length; i++)
        nodes[i].style.backgroundColor = "darkgray";
    nodes[to].style.backgroundColor = "lightgray";
}

function moveTo(to) { //暂时还没有轮播图
    var nowOffset = base[now] + imgWidth[now] / 2,
        toOffset = base[to] + imgWidth[to] / 2,
        step = (toOffset - nowOffset) / 1;
    var timer = setInterval(() => {
        nowOffset += step;
        document.getElementById("img-box").style.right = "calc(" + nowOffset + "px - 50%)";
        if (Math.abs(nowOffset - toOffset) <= EPS) {
            clearInterval(timer);
            now = to;
            judge();
        }
    }, 1);
}

function moveLeft() {
    moveTo(now - 1);
}

function moveRight() {
    moveTo(now + 1);
}

setInterval(() => { //自动切换
    moveRight();
}, 5000);

//最新发布-常见问题-信用信息切换与按钮样式改变
function showContent(num) {
    var contents = document.getElementsByClassName("b3-content");
    for (i = 0; i < contents.length; i++)
        contents[i].style.display = "none";
    contents[num].style.display = "flex";
    var tabs = document.getElementsByClassName("b3-tab");
    for (i = 0; i < tabs.length; i++)
        tabs[i].style.border = "none";
    tabs[num].style.border = "2px solid gray";
}