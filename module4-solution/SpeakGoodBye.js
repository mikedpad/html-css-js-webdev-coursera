(function () {
  // Create empy object
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = 'Good Bye';

  // Expose the speak method to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + ' ' + name);
  };

  // Assign byeSpeaker to the global window object
  window.byeSpeaker = byeSpeaker;
})();
