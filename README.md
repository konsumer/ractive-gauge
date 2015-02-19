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
define(['ractive', ractive-gauge'], function(Ractive, gauge){
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
	<gauge value="{{value}}" label="coolness" /><br>
	<input min="0" max="100" type="range" value="{{value}}" style="width:255px;margin-left:2.5px"/>
</script>

<script src="https://cdn.ractivejs.org/latest/ractive.min.js"></script>
<script src="http://konsumer.github.io/ractive-gauge/dist/ractive-gauge.min.js"></script>
<script>
var ractive = new Ractive({
	el: 'container',
	template: '#template',
	data: {
		value: 0
	}
});
</script>
```