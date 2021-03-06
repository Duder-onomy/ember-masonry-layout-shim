ember-masonry-layout-shim
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/Duder-onomy/ember-masonry-layout-shim.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Duder-onomy/ember-masonry-layout-shim.svg?branch=master)](https://travis-ci.org/Duder-onomy/ember-masonry-layout-shim)

[![npm version](https://badge.fury.io/js/ember-masonry-layout-shim.svg)](https://badge.fury.io/js/ember-masonry-layout-shim)

This shims the world famous [Masonry-Layout](https://www.npmjs.com/package/masonry-layout);
[Example](https://masonry.desandro.com/);

This shim will not load Masonry during fastboot.


Installation
------------------------------------------------------------------------------

```
ember install ember-masonry-layout-shim
```


Usage
------------------------------------------------------------------------------

```javascript
import Masonry from 'masonry';
```

Follow the docs for 'vanilla js' (here)[https://github.com/desandro/masonry#initialize];


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-masonry-layout-shim`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
