window.onload = function () {

    var group = [
        {p:[{x:0,y:0},{x:600,y:0},{x:300,y:300}],color:"#caff67"},
        {p:[{x:0,y:0},{x:300,y:300},{x:0,y:600}],color:"#67becf"},
        {p:[{x:600,y:0},{x:600,y:300},{x:450,y:450},{x:450,y:150}],color:"#ef3d61"},
        {p:[{x:450,y:150},{x:450,y:450},{x:300,y:300}],color:"#f9f51a"},
        {p:[{x:300,y:300},{x:450,y:450},{x:300,y:600},{x:150,y:450}],color:"#a54c09"},
        {p:[{x:150,y:450},{x:300,y:600},{x:0,y:600}],color:"#fa8ccc"},
        {p:[{x:600,y:300},{x:600,y:600},{x:300,y:600}],color:"#f6ca29"}
    ];
     var canvas = document.getElementById("canvas"); //获取canvas元素
     var context = canvas.getContext("2d");  //获取绘图上下文环境
     //for (var i = 0; i < group.length; i++) {
     //         draw(context, group[i]);
     //    };
     var draw = (ctxt, piece) => {
         ctxt.beginPath();  //开始路径
         ctxt.moveTo(piece.p[0].x, piece.p[0].y);  //canvas画笔移动到目标点
         piece.p.forEach(  (item) => ctxt.lineTo( item.x, item.y ) );
         ctxt.closePath();  //闭合路径
         ctxt.fillStyle = piece.color; //填充颜色
         ctxt.stroke();
         ctxt.fill(); //图形的填充
     }
     group.forEach((item) => draw(context, item));
     //function draw(ctxt, piece) {
     //   ctxt.beginPath();  //开始路径
     //   ctxt.moveTo(piece.p[0].x, piece.p[0].y);  //canvas画笔移动到目标点
     //   piece.p.forEach(  (item) => ctxt.lineTo(item.x, item.y) );
     //   ctxt.closePath();  //闭合路径
     //   ctxt.fillStyle = piece.color; //填充颜色
     //   ctxt.stroke();
     //   ctxt.fill(); //图形的填充
     //   }
 }; 