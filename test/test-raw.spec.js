/**
 *Created by Shinelon on 2020/3/1
 */
import Vue from '../src/index';
describe('Raw vnode render', () => {
  it('should basic use', function () {
    const vm = new Vue({
      render(h){
        return h('div', null, [
            h('span', null, 'HellWorld')
        ]);
      }
    }).$mount();
    expect(vm.$el.tagName).toBe('DIV');
    expect(vm.$el.textContent).toBe('HellWorld');
  });
})