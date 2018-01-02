
module.exports = {
  'load the page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    browser
      .url('http://localhost:8080/#/to-do')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'My To Do List')
      .assert.containsText('li', 'buy food')
  },
  'add Elements to the list': function (browser) {
    const text = 'Night Watch'
    browser
      .setValue('input[type=text]', text)
      .click('button[name=add]')
      .pause(1000)
      .assert.containsText('ul', text)
      .end()
  }
}
