'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const Funnel = require('broccoli-funnel');
const fastbootTransform = require('fastboot-transform');
const resolve = require('resolve');

module.exports = {
  name: 'ember-masonry-layout-shim',

  treeForVendor(existingTree) {
    let trees = [];

    if (existingTree) {
      trees.push(existingTree);
    }

    let masonryPath = path.join(path.dirname(
      resolve.sync('masonry-layout', { basedir: this.project.root })
    ), 'dist');

    masonryPath = fastbootTransform(new Funnel(masonryPath, {
      files: ['masonry.pkgd.min.js'],
      destDir: 'masonry-layout'
    }));

    trees.push(masonryPath);

    return new mergeTrees(trees);
  },

  included() {
    this._super(arguments);
    this.import('vendor/masonry-layout/masonry.pkgd.min.js');

    this.import('vendor/masonry-shim.js', {
      exports: {
        masonry: ['default']
      }
    });
  },
};
