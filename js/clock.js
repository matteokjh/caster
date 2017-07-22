var canvas = document.getElementById("canvas");
var cxt = canvas.getContext("2d");
cxt.lineWidth = 3;//针粗
var now = new Date();
var second = now.getSeconds();
var minute = now.getMinutes();
var hour = now.getHours();

/*刻度*/
function kedu() {
    var x, y;
    var x1, y1;
    for (i = 0; i < 12; i++) {
        x = 200 * Math.sin(2 * Math.PI / 360 * 30 * i);//增量
        y = 200 * (1 - Math.cos(2 * Math.PI / 360 * 30 * i));
        cxt.beginPath();
        cxt.moveTo(250 + x, 50 + y);//起始点以12点开始
        cxt.lineTo(250 + x - 25 * Math.sin(2 * Math.PI / 360 * i * 30), 50 + y + 25 * Math.cos(2 * Math.PI / 360 * i * 30));//数学 数学
        cxt.closePath();
        cxt.strokeStyle = "rgba(255,255,255,.8)"
        cxt.stroke();
    }

    for (i = 1; i < 60; i++) {
        x1 = 200 * Math.sin(2 * Math.PI / 360 * 6 * i);
        y1 = 200 * (1 - Math.cos(2 * Math.PI / 360 * 6 * i));
        cxt.beginPath();
        cxt.moveTo(250 + x1, 50 + y1);
        cxt.lineTo(250 + x1 - 10 * Math.sin(2 * Math.PI / 360 * i * 6), 50 + y1 + 10 * Math.cos(2 * Math.PI / 360 * i * 6));
        cxt.closePath();
        cxt.strokeStyle = "rgba(255,255,255,.5)"
        cxt.stroke();
    }//注意sin和cos内参数为弧度而非角度
    
}
//画画
function draw( s,m,h ) {
    var secondX, secondY, minuteX, minuteY, hourX, hourY;

    //底圆
    cxt.beginPath();
    cxt.arc(250, 250, 201, 0, Math.PI * 2);
    cxt.closePath();
    cxt.fillStyle = '#A8E6CF';
    cxt.fill();

    /*刻度*/
    kedu();

    //秒针
    secondX = 250 + Math.sin(s * 2 * 6 * Math.PI / 360) * 160;
    secondY = 250 - Math.cos(s * 2 * 6 * Math.PI / 360) * 160;
    cxt.beginPath();
    cxt.moveTo(250, 250);
    cxt.lineTo(secondX, secondY);//200
    cxt.closePath();
    cxt.strokeStyle = "#9E579D"
    cxt.stroke();

    //分针
    minuteX = 250 + Math.sin(m * 2 * 6 * Math.PI / 360) * 145;
    minuteY = 250 - Math.cos(m * 2 * 6 * Math.PI / 360) * 145;
    cxt.beginPath();
    cxt.moveTo(250, 250);
    cxt.lineTo(minuteX, minuteY);//150
    cxt.closePath();
    cxt.strokeStyle = "#574B90"
    cxt.stroke();

    //时针
    hourX = 250 + Math.sin( ( h + m / 60 ) * 2 * 30 * Math.PI / 360) * 100; 
    hourY = 250 - Math.cos( ( h + m / 60 ) * 2 * 30 * Math.PI / 360) * 100; 
    cxt.beginPath();
    cxt.moveTo(250, 250);
    cxt.lineTo(hourX, hourY);//100
    cxt.closePath();
    cxt.strokeStyle = "#303A52";
    cxt.stroke();

    //中间点
    cxt.beginPath();
    cxt.arc(250, 250, 10, 0, Math.PI * 2);
    cxt.closePath();
    cxt.fillStyle = '#D6E6F2';
    cxt.fill();//填充

}
/*清除*/
function clear() {
    cxt.clearRect(0, 0, 500, 500);//不要用fillRect
}
//画画
draw(second,minute,hour);//先画一次

//计时器
var clock = setInterval(function () {
    now = new Date();
    second = now.getSeconds();
    minute = now.getMinutes();
    hour = now.getHours();
    clear();
    draw(second,minute,hour);
}, 1000);

