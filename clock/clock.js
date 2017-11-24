window.onload = function () {
  var s = Snap("#clockDiv");
  Snap.load("clock.svg", function(f) {
                    //Add SVG elements
                    second = f.select("#second");
                    minute = f.select("#minute");
                    hour = f.select("#hour");
                    //Run animation function for the first time
                    animateTime();
                    //Append SVG to DIV
                    s.append(f);
  });
};

function random_hour() {
  return Math.round(Math.random() * 12)
}

function random_min() {
  return Math.round(Math.random() * 60)
}

function animateTime() {
  //Get the current time
  var timeNow = new Date();
  var hours   = timeNow.getHours();
  var minutes = timeNow.getMinutes();
  var seconds = 0; //timeNow.getSeconds();

  hours = random_hour();
  minutes = random_min();
  //hours = 4;
  //minutes = 40;

  //Move second needle halfway
  second.transform('r' + (seconds*6-3) + ',200,200');
  //Animate the second needle the rest of the way
  second.animate({transform: 'r' + (seconds*6) + ',200,200'}, 500, mina.elastic);
  //Move minute needle
  minute.transform('r' + (minutes*6) + ',200,200');
  //Only animate the minute needle when the minute changes
  if(seconds == 0){minute.transform('r' + (minutes*6-3) + ',200,200');
  minute.animate({transform: 'r' + (minutes*6) + ',200,200'}, 500, mina.elastic);}
  //Allow the hour needle to move accordingly when the minutes change
  hour.transform('r' + ((hours*30)+(minutes/2)) + ',200,200');
  //Repeat this entire function every 1 second
  setTimeout("animateTime()", 10000);
}
