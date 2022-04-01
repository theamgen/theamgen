$(document).ready(function() {
  function makeTimer() {
    var endTime = new Date("april 01, 2022 00:00:00");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var Xmas95 = new Date('December 25, 2022 23:15:30');
    var hour = Xmas95.getHours();
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $(".timer .days").html( days + "<span>D</span>");
    $(".timer .hours").html( hours + "<span>H</span>");
    $(".timer .minutes").html(minutes + "<span>M</span>" );
    $(".timer .seconds").html(seconds + "<span>S</span>");
  }
  setInterval(function() {
    makeTimer();
  }, 1000);
});