function displayCanvas(){
  var canvasHTML = document.getElementById('myCanvas');
  var contextHTML = canvasHTML.getContext('2d');
  contextHTML.strokeRect(0,0,canvasHTML.width,canvasHTML.height);

  var radiusClock = canvasHTML.width/2 - 10; //Расчет координат центра и радиуса часов
  var xCenterClock = canvasHTML.width/2;
  var yCenterClock = canvasHTML.height/2;

  contextHTML.fillStyle= "#ffffff";//Очитска Экрана
  contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);

  contextHTML.strokeStyle = '#000000';// Рисуем контур часов
  contextHTML.lineWidth = 1;
  contextHTML.beginPath();
  contextHTML.arc(xCenterClock,yCenterClock, radiusClock, 0, 2*Math.PI, true);
  contextHTML.moveTo(xCenterClock,yCenterClock);
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем рисочки часов
  var radiusNum //Рисуем расположения рисочек
  for(var tm = 0;tm < 60; tm++){
    contextHTML.beginPath();
    if(tm % 5 == 0) {radiusNum = radiusClock - 20;}
    else{radiusNum = radiusClock - 10;}//Для выделения часовых рисочек
    contextHTML.moveTo(xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2),
    yCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2));

    contextHTML.lineTo(xCenterClock + radiusClock * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2),
                       yCenterClock - radiusClock * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2));

        contextHTML.stroke();
        contextHTML.closePath();
  }
  //Рисуем стрелки
  var lengthSeconds = radiusNum - 10;
  var lengthMinutes = radiusNum - 15;
  var lengthHour = lengthMinutes / 1.5;
  var d = new Date();
  var t_sec = 6*d.getSeconds();
  var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
  var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());
//Рисуем секунды
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#FF0000";
  contextHTML.moveTo(xCenterClock,yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
                     yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
  contextHTML.stroke();
  contextHTML.closePath();
//Рисуем минуты
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#000000";
  contextHTML.lineWidth = 3;
  contextHTML.moveTo(xCenterClock,yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
                     yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем часы
  contextHTML.beginPath();
  contextHTML.lineWidth = 5;
  contextHTML.moveTo(xCenterClock,yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
                     yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
  contextHTML.stroke();
  contextHTML.closePath();
  //Рисуем центр часов
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#000000";
  contextHTML.fillStyle = '#ffffff';
  contextHTML.lineWidth = 3;
  contextHTML.arc(xCenterClock, yCenterClock, 5 ,0, 2*Math.PI, true);
  contextHTML.stroke();
  contextHTML.fill();
  contextHTML.closePath();

  return;
}

window.onload = function(){
  window.setInterval(
    function(){
      displayCanvas();
    }
  , 1000);
}

/*var canvas = document.getElementById("box");
    context = canvas.getContext("2D");

    circle = new Path2D();
    circle.arc(150,150,150,0, 2 * Math.PI);

    var R = 300 / 2,  d, angle, px, py, qx, qy
    for(d = 0; d < 60;++d ){
      angle = (d / 60)*(2 * Math.PI);
      px = Math.cos(angle) * R;
      py = -Math.sin(angle) * R;
      qx = 0.9 * px;
      qy = 0.9 * py;

    line = new Path2D();
     line.moveTo(px, py);
     line.lineTo(qx, qy);
    }
    var date = new Date(),
       hours, minutes, seconds;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hoursAngle = ((hours%12) / 12) * (2 * Math.PI);
    minutesAngle = (minutes / 60) * (2 * Math.PI);
    secondsAngle = (seconds / 60) * (2 * Math.PI);

    hoursAngle = Math.PI / 2 - hoursAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    secondsAngle = Math.PI / 2 - secondsAngle;

    px = Math.cos(hoursAngle) * R;
    py = -Math.sin(hoursAngle) * R;
    line.moveTo(150, 150);
    line.lineTo(px, py);

    px = Math.cos(minutesAngle) * R;
    py = -Math.sin(minutesAngle) * R;
    line.moveTo(150, 150);
    line.lineTo(px, py);

    px = Math.cos(secondsAngle) * R;
    py = -Math.sin(secondsAngle) * R;
    line.moveTo(150, 150);
    line.lineTo(px, py);


  function drawWatch() {
      context.clearRect(0,0,300,300);
      circle = new Path2D();
      circle.arc(150,150,150,0, 2 * Math.PI);

      var R = 300 / 2,  d, angle, px, py, qx, qy
      for(d = 0; d < 60;++d ){
        angle = (d / 60)*(2 * Math.PI);
        px = Math.cos(angle) * R;
        py = -Math.sin(angle) * R;
        qx = 0.9 * px;
        qy = 0.9 * py;

      line = new Path2D();
       line.moveTo(px, py);
       line.lineTo(qx, qy);
      }
      var date = new Date();
         hours, minutes, seconds;
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();

      hoursAngle = ((hours%12) / 12) * (2 * Math.PI);
      minutesAngle = (minutes / 60) * (2 * Math.PI);
      secondsAngle = (seconds / 60) * (2 * Math.PI);

      hoursAngle = Math.PI / 2 - hoursAngle;
      minutesAngle = Math.PI / 2 - minutesAngle;
      secondsAngle = Math.PI / 2 - secondsAngle;

      px = Math.cos(hoursAngle) * R;
      py = -Math.sin(hoursAngle) * R;
      line.moveTo(150, 150);
      line.lineTo(px, py);

      px = Math.cos(minutesAngle) * R;
      py = -Math.sin(minutesAngle) * R;
      line.moveTo(150, 150);
      line.lineTo(px, py);

      px = Math.cos(secondsAngle) * R;
      py = -Math.sin(secondsAngle) * R;
      line.moveTo(150, 150);
      line.lineTo(px, py);

      setTimeout(drawWatch, 1000);
    }

 drawWatch();
*/
