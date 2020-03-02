/**
 *Created by Shinelon on 2020/3/1
 */
import Vue from "../src/index.js";

describe('Lifecycle', function() {
  var cb = jasmine.createSpy('cb');

  it('mounted', function() {
    new Vue({
      mounted () {
        cb()
      },
      render (h) {
        return h('div', null, 'hello' /* string as children*/)
      }
    }).$mount()

    expect(cb).toHaveBeenCalled()
  });
});