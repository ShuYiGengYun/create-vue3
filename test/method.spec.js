/**
 *Created by Shinelon on 2020/3/1
 */
import Vue from "../src";

describe('method', function () {
  it('should Basic', function () {
    var vm = new Vue({
      methods: {
        hello() {
          return {
            self: this,
            msg: 'hello',
          }
        }
      }
    })
    var result = vm.hello();
    expect(result.self).toEqual(vm);
    expect(result.msg).toBe('hello');
  });
})