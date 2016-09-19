# ractive-gauge

A simple UV-type meter for Ractive

[![npm version](https://badge.fury.io/js/ractive-gauge.svg)](http://badge.fury.io/js/ractive-gauge)

See a demo, [here](http://konsumer.github.io/ractive-gauge/).

## install

### nodejs/webpack/browserify

```
npm install --save ractive-gauge
```

### bower

```
bower install --save ractive-gauge
```

then, in your code:

```javascript
var Ractive = require('ractive')
require('ractive-gauge');
```

### requirejs

Put `dist/ractive-gauge.js` in your require path, then you can do this:

```javascript
define(['ractive', 'ractive-gauge'], function(Ractive, gauge){
    // do stuff
});
```

### plain browser global

You can use a CDN:

```html
<script src="http://konsumer.github.io/ractive-gauge/dist/ractive-gauge.min.js"></script>
```

or alternately use one of the files in `dist/`, locally.


## usage

```html
<div id="container"></div>

<script id='template' type='text/ractive'>
	<gauge value="{{coolness}}" label="coolness" /><br>
	<input min="0" max="100" type="range" value="{{coolness}}" style="width:255px;margin-left:2.5px"/>
</script>

<script src="https://cdn.ractivejs.org/latest/ractive.min.js"></script>
<script src="https://konsumer.github.io/ractive-gauge/dist/ractive-gauge.min.js"></script>
<script>
var ractive = new Ractive({
	el: 'container',
	template: '#template',
	data: {
		coolness: 0
	}
});
</script>
```

### styling

You can use a custom SVG, and rebuild with `npm run build` or, if you don't need to change the overall look, but just want to change some colors, put this in your app's CSS, and change any values you like:

```css
.mark1 {
  fill: none;
  stroke: #a0a0a0;
}
.mark2 {
  fill: none;
  stroke: #c0d0e0;
}
.center {
  fill: none;
  stroke: #c0d0e0;
}
.number {
  fill: #606060;
}
.low {
  fill: #fc172a;
}
.medlow{
  fill: #ffe0e1;
}
.medhi {
  fill: #e3ffe1;
}
.hi {
  fill: #2cc71f;
}
.needle {
  fill: none;
  stroke: black;
}
.label {
  fill: #707070;
}
.value {
  fill: #707070;
}
```

### development

You can run `npm start` to run a devlopment server to try out ideas while developing. Just edit `index.js` and changes will live-reload.

To build the minified/compiled versions run `npm run build`.