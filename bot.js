

/////////////////////////////////
/////////////////////////////////
var clientURL = 'https://www.linkedin.com/in/FOOOOOOBARRRRRRR'
/////////////////////////////////
/////////////////////////////////


var casper = require('casper').create();
var x = require('casper').selectXPath;
var user = require('./user.js')


casper.userAgent('Mozilla/4.0 (comptible; MSIE 6.0; Windows NT 5.1)')

//go to website
casper.start('https://www.linkedin.com/uas/login');

//screenshot
casper.then(function(){this.capture('./screenshots/01.png')})

//username and password
casper.then(function(){
    this.sendKeys('#session_key-login', user.email[0]);
    this.sendKeys('#session_password-login', 'PASSWORD_HERE');
})

//screenshot
casper.then(function(){this.capture('./screenshots/02.png')})

//click sign in
casper.thenClick('#login-submit')

//screenshot
casper.then(function(){this.capture('./screenshots/03.png')})

//go to user's account
casper.thenOpen(clientURL)

//screenshot
casper.then(function(){this.capture('./screenshots/04.png')})

//click endorse
casper.thenClick('#endorse-submit')

//screenshot
casper.wait(5000,function(){this.capture('./screenshots/05.png')})




casper.run();
