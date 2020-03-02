/**
 *Created by Shinelon on 2020/3/1
 */
import Vue from '../src/index';
describe('Demo', function () {
  it('should Basic', function () {
    const vm = new Vue({
      data() {
        return {
          a: 0,
        }
      },
      render(h) {
        return h('button', {
          on: {
            'click': this.handleClick,
          }
        })
      },
      methods: {
        handleClick() {
          this.a ++;
        }
      }
    }).$mount();
    document.body.appendChild(vm.$el);
  });
});