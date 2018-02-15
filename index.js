'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const funnel = require('broccoli-funnel');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const map = require('broccoli-stew').map;
const resolve = require('resolve');

module.exports = {
  name: 'ember-masonry',

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      funnel(this.masonryJs, {
        destDir: 'masonry-layout',
        include: [new RegExp(/\.js$/)],
        exclude: ['tests', 'ender', 'package'].map(
          key => new RegExp(key + '.js$')
        )
      })
    );

    return map(
      mergeTrees(trees),
      content => `if (typeof FastBoot === 'undefined') { ${content} }`
    );
  },

  included() {
    this._super(arguments);
    this.masonryJs = new UnwatchedDir(path.dirname(
      resolve.sync('masonry-layout', { basedir: this.project.root })
    ));
    this.import('vendor/masonry-layout/masonry.js');
  },
};
