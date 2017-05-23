Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  alarm = new Alarm("");
  $("#alarm-form").submit(function(e){
    e.preventDefault();
    alarm.time = $("#input-time").val();
    $("#input-time").val("");
  });

  alarmReset = false;
  setInterval(function(){
    $('#time').text(moment().format('LTS'));
    if(alarm.time == moment().format('hh:mm') && (alarmReset === false)){
      alert("WHOOP WHOOP!");
      alarmReset = true;
    }
  }, 1000);
});
