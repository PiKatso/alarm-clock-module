function Alarm(time) {
  this.time = time;
}

Alarm.prototype.snooze = function() {
  newTime = moment().add(1, 'm').format('hh:mm');
  console.log(newTime);
  return newTime;
}

exports.alarmModule = Alarm;
