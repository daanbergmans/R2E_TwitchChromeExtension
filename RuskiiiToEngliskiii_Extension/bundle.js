(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var messages = [];
var translator = new Translator();

function getLanguages() {
  translator.getListOfLanguages(function(languages) {
    languages.forEach(function(language) {
        console.log(language.name, language.language);
    });
  }, config);
}

function translate(textToConvert) {
  var config = {
    key: 'AIzaSyCaaSXwxTaRrE-dep_3Xln1KlyB33IvsYU'
  };

  var config = {
    from: 'ru',
    to: 'en',
    api_key: config.key,
    callback: function (translatedText) {
        console.log('translated text', translatedText);
    }
  };

  translator.translateLanguage(textToConvert, config);
}

function getMessages() {
  Array.prototype.forEach.call($('div.chat-line__message'), message => {
    let messageContent = $(message).find('span')[4];
    messages.push(messageContent);
  });
}

$('.r2eBtn').click(function() {
    getMessages();
});

},{}]},{},[1]);
