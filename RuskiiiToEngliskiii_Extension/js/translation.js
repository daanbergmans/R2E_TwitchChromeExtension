function getLanguages() {
  translator.getListOfLanguages(function(languages) {
    languages.forEach(function(language) {
        console.log(language.name, language.language);
    });
  }, config);
}

function getMessagesAndTranslate() {
  Array.prototype.forEach.call($('div.chat-line__message'), message => {
    let chatMessage = $(message).find('span')[4];

    $.post( "http://localhost:3000/translation", { textToTranslate: chatMessage.textContent })
    .done(function( data ) {
      chatMessage.textContent = data;
    });
  });
}

$('.r2eBtn').click(function() {
    getMessagesAndTranslate();
});
