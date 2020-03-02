/**
 *Created by Shinelon on 2020/2/29
 */
import KarmaConf from '../karma.conf';
describe('Karma test', function () {
  it('babel-loader test', function () {
    expect(typeof KarmaConf).toEqual('function')
  })
})