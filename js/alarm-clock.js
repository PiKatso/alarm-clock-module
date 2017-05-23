function Alarm(time) {
  this.time = time;
  this.isDone = false;
}

Alarm.prototype.snooze = function() {
  newTime = moment().add(5, 'm').format('hh:mm');
  return newTime;
};

exports.alarmModule = Alarm;
