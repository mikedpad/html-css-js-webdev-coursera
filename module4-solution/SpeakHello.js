(function () {
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = 'Hello';

  // Expose the speak method to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + ' ' + name);
  };

  // Assign helloSpeaker to the global window object
  window.helloSpeaker = helloSpeaker;
})();
