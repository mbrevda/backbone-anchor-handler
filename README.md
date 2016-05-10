# Backbone Anchor Handler
Catch anchor clicks and try routing them via Backbone.js

# About
[![wercker status](https://app.wercker.com/status/38960b0e893d351226f3fe365f31caa5/s/master "wercker status")](https://app.wercker.com/project/bykey/38960b0e893d351226f3fe365f31caa5)

Simple library to catch clicks on anchor links and attempts to route them via [Backbone.js](http://backbonejs.org/).

# Installation
```
npm install --save backbone-anchor-handler
```

# Usage
```js
var anchorHandler = require('backbone-anchor-handler'),
    Backbone = require('backbone');

anchorHandler.init(Backbone)
```

Thats all! Now your all set to have you links routed via Backbone!
