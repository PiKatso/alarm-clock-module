Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  alarms = [];
  $("#alarm-form").submit(function(e){
    e.preventDefault();
    newAlarm = new Alarm($("#input-time").val());
    alarms.push(newAlarm);
    $("#input-time").val("");
  });

  alarmReset = false;
  setInterval(function(){
    $('#time').text(moment().format('LTS'));
    alarms.forEach(function(alarm) {
      if(alarm.time == moment().format('hh:mm') && (alarm.isDone === false)){
        alarm.isDone = true;
        var snooze = confirm("Want to snooze?");
        if(snooze === true) {
          snoozeTime = alarm.snooze();
          alarm.time = snoozeTime;
          alarm.isDone = false;
          snooze = false;
        }
      }
    });
  }, 1000);
});
