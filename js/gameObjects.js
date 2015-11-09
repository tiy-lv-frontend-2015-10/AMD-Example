define([
  'jquery',
  'mustache',
  'text!../templates/john.html'
], function (
  $,
  mustache,
  johnTemplate
){
  var exports = {};

  exports.init = function () {
    var template = mustache.render(johnTemplate, {john: 'John'});
    $("#player").append(template);
  }

  return exports;
})