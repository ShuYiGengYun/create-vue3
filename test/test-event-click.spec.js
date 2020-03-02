import Vue from "../src/index.js";

describe('Event test', function() {
  it('Basic', function() {
    var cb = jasmine.createSpy('cb');
    var callback = function () {
      console.log(111);
    }

    var vm = new Vue({
      render (h) {
        return h('button', {
          class: 'btn',
          on: { 'click': callback }
        }, 'HelloWorld')
      },
    }).$mount()

    document.body.appendChild(vm.$el)
    const btn = document.querySelector('.btn')
    expect(btn.tagName).toEqual('BUTTON')
    btn.click()
  });
}); 