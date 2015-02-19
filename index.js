var Ractive = window ? window.Ractive : require('ractive');
if (!Ractive && require) Ractive = require('ractive');

var fs = require('fs');
var template = fs.readFileSync(__dirname + '/gauge.svg', 'utf8') + "";

Ractive.components.gauge = module.exports = Ractive.extend({
  template: template,
  data: {
    label: 'gauge',
    value: 0,
    rot: 0
  },
  onrender: function(){
    this.observe('value', function(val) {
      this.set('rot', val*1.215);
    });
  }
});