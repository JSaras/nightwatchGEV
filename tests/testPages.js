module.exports = {
  'Check website is up' : function (browser) {
    browser.url('http://www.greenearthvitamins.com');
    browser.waitForElementVisible('body', 1000);
    browser.expect.element('.page-title').to.be.present;
    browser.end();
  }

};