// IIFE to call the speak method of the helloSpeaker and byeSpeaker objects
(function () {
  // The array of names
  var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];

  // Loop over the names array and say either 'Hello' or 'Good Bye'
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    // If the first letter of the current name is 'j' or 'J',
    // say 'Good Bye' with the name.
    // Else, say 'Hello' with the name.
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
