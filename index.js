'use strict';

const Funnel = require('broccoli-funnel');
const fastbootTransform = require('fastboot-transform');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-masonry',

  treeForVendor(defaultTree) {
    let masonryJs = fastbootTransform(new Funnel(require.resolve('masonry-layout')), {
      files: ['masonry.js'],
      destDir: 'masonry'
    });

    return mergeTrees([defaultTree, masonryJs]);
  },

  included() {
    this._super(arguments);

    this.import('vendor/masonry/masonry.js');
  },
};
