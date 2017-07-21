module.exports = {
  'Check homepage is up' : function (browser) {
    browser.url('http://www.greenearthvitamins.com');
    browser.waitForElementVisible('body', 1000);
    browser.expect.element('.page-title').to.be.present;
  },
  
  'Check What Is Guyabano page load' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/what-is-guyabano/')
    .waitForElementVisible('body', 1000)
    .assert.title('What is Soursop? — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check know your supp is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/know-your-supplement/')
    .waitForElementVisible('body', 1000)
    .assert.title('Know Your Supplement — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check products is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/products/')
    .waitForElementVisible('body', 1000)
    .assert.title('Products — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check our story is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/our-story/')
    .waitForElementVisible('body', 1000)
    .assert.title('Our Story — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check the team is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/the-team/')
    .waitForElementVisible('body', 1000)
    .assert.title('The Team — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check soursop-plantation is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/soursop-plantation/')
    .waitForElementVisible('body', 1000)
    .assert.title('Soursop Plantation — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check factory is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/factory/')
    .waitForElementVisible('body', 1000)
    .assert.title('PT Guyabano Global Indonesia — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check city-of-praise is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/city-of-praise/')
    .waitForElementVisible('body', 1000)
    .assert.title('City of Praise — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check sponsor is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/sponsor/')
    .waitForElementVisible('body', 1000)
    .assert.title('Student Sponsor — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check contact-us is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/contact-us/')
    .waitForElementVisible('body', 1000)
    .assert.title('Contact Us — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check returns-and-refunds is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/returns-and-refunds/')
    .waitForElementVisible('body', 1000)
    .assert.title('Returns and Refunds — Green Earth Vitamins - Natural Soursop Products')
  },

  'Check terms-conditions is loading' : function (browser) {
   browser
    .url('https://www.greenearthvitamins.com/terms-conditions/')
    .waitForElementVisible('body', 1000)
    .assert.title('Terms & Conditions — Green Earth Vitamins - Natural Soursop Products')

    .end();
  },
};