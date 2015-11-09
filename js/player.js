define([
  'jquery',
  'mustache',
  'text!../templates/player.html'
], function (
  $,
  m,
  testTemplate
){
  var exports = {};

  exports.init = function () {
    var template = m.render(testTemplate, {word: 'Hello World'});

    $("#player").append(template);
  };

  exports.destroy = function () {
    console.log("boom");
  };

  return exports;
})