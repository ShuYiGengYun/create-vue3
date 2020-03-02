/**
 *Created by Shinelon on 2020/3/1
 */

import Vue from '../src/index';
describe('Watch data change', function () {
  it('should cb is called', function () {
    var vm = new Vue({
      data() {
        return {
          a: 2,
        }
      }
    })
    vm.a = 3;
    vm.$watch('a', function (pre, value) {
      expect(pre).toEqual(2);
    })
  });
})