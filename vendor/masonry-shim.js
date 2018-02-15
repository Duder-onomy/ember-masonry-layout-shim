if (typeof FastBoot === 'undefined') {
  (function() {

    function generateModule(name, values) {
      define(name, [], function() {
        'use strict';

        return values;
      });
    }

    generateModule('masonry', { 'default': window.Masonry });
  })();
}
