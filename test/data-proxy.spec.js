/**
 *Created by Shinelon on 2020/3/1
 */

import Vue from '../src/index';
describe('Proxy test', function() {
  it('should proxy vm._data.a = vm.a', function() {
    var vm = new Vue({
      data () {
        return {
          a: 2
        }
      }
    });
    expect(vm.a).toEqual(2);
  });
});