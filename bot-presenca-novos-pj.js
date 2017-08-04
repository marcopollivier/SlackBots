var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.slackbot({
  debug: true,
})

var bot = controller.spawn({
  token: 'xxx' //TODO entrar com o token gerado pelo Slack
}).startRTM();

controller.hears(['até logo', 'já volto', 'tchau', 'terminando', 'fim'], 'direct_message,direct_mention,mention', function(bot, message) {
  bot.api.users.info({user: message.user}, function(err, info){

    var user = info.user.name;
    var helloText = "Até logo, " + user;
    bot.reply(message, helloText);

  })

});

controller.hears(['voltei', 'olá', 'oi', 'cheguei', 'iniciando', 'inicio'], 'direct_message,direct_mention,mention', function(bot, message) {
  bot.api.users.info({user: message.user}, function(err, info){

    var user = info.user.name;
    var helloText = "Olá, " + user;
    bot.reply(message, helloText);

  })

});

controller.hears(['ajuda', 'help'], 'direct_message,direct_mention,mention', function(bot, message) {

  var helloText = "HELP"
  bot.reply(message, helloText);

});
