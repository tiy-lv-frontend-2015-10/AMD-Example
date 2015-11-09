requirejs.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'https://code.jquery.com/jquery-1.11.3.min',
        mustache: 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.0/mustache'
    }
});

define([
  'player',
  'gameObjects'
], function (
  player,
  gameObjects
){
  player.init();
  gameObjects.init();
  player.destroy();
});