var Ractive = window ? window.Ractive : require('ractive');
if (!Ractive && require) Ractive = require('ractive');

var template = require('./gauge.svg.txt');

Ractive.components.gauge = Ractive.extend({
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