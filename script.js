/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './node_modules/particles.js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// wow js initialization
new WOW().init();