(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(time) {
  this.time = time;
  this.isDone = false;
}

Alarm.prototype.snooze = function() {
  newTime = moment().add(5, 'm').format('hh:mm');
  return newTime;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm-clock.js":1}]},{},[2]);
