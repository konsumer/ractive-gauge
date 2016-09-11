!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.gauge=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Ractive = window ? window.Ractive : require('ractive');
if (!Ractive && require) Ractive = require('ractive');


var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"130\" width=\"260\" version=\"1\" style=\"font-family:'lucida grande', 'lucida sans unicode', arial, helvetica, sans-serif;font-size:12;\">\n<style>\n.s0{\nfill:none;\nstroke:#a0a0a0;\n}\n.s1{\nfill:none;\nstroke-width:2;\nstroke:#c0d0e0;\n}\n.s2{\nfill:#606060;\nfont-size:11;\ntext-anchor:middle;\n}\n</style>  <g transform=\"translate(-27.063048,-25.90205)\"/>\n<g transform=\"translate(-27.063048,-25.90205)\"/>\n<text x=\"130\" visibility=\"visible\" y=\"72\" style=\"fill:#707070;text-anchor:middle\">{{label}}<tspan x=\"130\" dy=\"15\">{{value}}%</tspan></text>\n<path d=\"M22 72A150 150 0 0 1 234 72m-106 106\" visibility=\"visible\" style=\"fill:none;stroke:#c0d0e0\"/>\n<g visibility=\"visible\" transform=\"translate(-17.063048,20.09795)\" clip-path=\"none\"/>\n<g visibility=\"visible\" transform=\"translate(-17.063048,20.09795)\" clip-path=\"none\"/>\n<g transform=\"translate(-27.063048,-25.90205)\"/>\n<g transform=\"translate(-27.063048,-25.90205)\">\n<path d=\"M44 93A158 158 0 0 1 83 64l3 7A150 150 0 0 0 49 98Z\" fill=\"#fc172a\"/>\n<path d=\"M83 64A158 158 0 0 1 130 49l1 7A150 150 0 0 0 87 70Z\" fill=\"#ffe0e1\"/>\n<path d=\"m180 48a158 158 0 0 1 47 15l-3 7A150 150 0 0 0 178 56Z\" fill=\"#e3ffe1\"/>\n<path d=\"m227 64a158 158 0 0 1 40 29L261 98A150 150 0 0 0 223 70Z\" fill=\"#2cc71f\"/>\n<path d=\"M49 98 42 91\" class=\"s0\"/>\n<path d=\"M67 83 61 75\" class=\"s0\"/>\n<path d=\"M87 70 82 61\" class=\"s0\"/>\n<path d=\"m109 61-3-10\" class=\"s0\"/>\n<path d=\"m132 56-2-10\" class=\"s0\"/>\n<path d=\"m155 54 0-10\" class=\"s0\"/>\n<path d=\"m178 56 2-10\" class=\"s0\"/>\n<path d=\"m201 61 3-10\" class=\"s0\"/>\n<path d=\"m223 70 5-9\" class=\"s0\"/>\n<path d=\"m243 83 6-8\" class=\"s0\"/>\n<path d=\"m261 98 7-7\" class=\"s0\"/>\n<path d=\"M49 98 42 91\" class=\"s1\"/>\n<path d=\"m155 54 0-10\" class=\"s1\"/>\n<path d=\"m261 98 7-7\" class=\"s1\"/>\n<text y=\"84\" transform=\"matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)\" x=\"-35\" class=\"s2\">0</text>\n<text y=\"35\" x=\"155\" class=\"s2\">50</text>\n<text y=\"-135\" transform=\"matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)\" x=\"253\" class=\"s2\">100</text>\n</g>\n<g transform=\"translate(-27.063048,-10024.902)\" white-space=\"nowrap\">\n<path transform=\"translate(1,1)\" d=\"m3 0 10 0c3 0 3 0 3 3l0 10c0 3 0 3-3 3L3 16C0 16 0 16 0 13L0 3C0 0 0 0 3 0\" style=\"fill:none;stroke-opacity:0;stroke-width:5;stroke:#000\"/>\n<path transform=\"translate(1,1)\" d=\"m3 0 10 0c3 0 3 0 3 3l0 10c0 3 0 3-3 3L3 16C0 16 0 16 0 13L0 3C0 0 0 0 3 0\" style=\"fill:none;stroke-opacity:0;stroke-width:3;stroke:#000\"/>\n<path transform=\"translate(1,1)\" d=\"m3 0 10 0c3 0 3 0 3 3l0 10c0 3 0 3-3 3L3 16C0 16 0 16 0 13L0 3C0 0 0 0 3 0\" style=\"fill:none;stroke-opacity:0;stroke:#000\"/>\n<path d=\"m3 0 10 0c3 0 3 0 3 3l0 10c0 3 0 3-3 3L3 16C0 16 0 16 0 13L0 3C0 0 0 0 3 0\" style=\"fill-opacity:1;fill:#f9f9f9\"/>\n</g>\n<line x1=\"128\" y1=\"130\" x2=\"17\" y2=\"69\" transform=\"rotate({{value*1.215}}, 128,130)\" style=\"fill:none;stroke:#000\"/>\n</svg>" + "";

Ractive.components.gauge = module.exports = Ractive.extend({
  template: template,
  data: {
    label: 'gauge',
    value: 0
  }
});
},{"ractive":"ractive"}]},{},[1])(1)
});
