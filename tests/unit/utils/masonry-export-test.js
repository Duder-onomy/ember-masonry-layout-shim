import { test, module } from 'qunit';
import Masonry from 'masonry';

module('Unit | masonry exports');

test('Masonry exports', (assert) => {
  assert.ok(Masonry, 'Masonry exports an object');
});
