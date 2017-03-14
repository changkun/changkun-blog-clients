var Application = require('spectron').Application
var assert = require('assert')

describe('application launch', function() {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: '/Users/changkun/Documents/Git/changkun-blog-clients/desktop/dist/mac/test.app/Contents/MacOS/test'
    })
    return this.app.start()
  })

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function() {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })
})



