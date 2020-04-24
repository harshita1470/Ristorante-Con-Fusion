// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2



(function(window) {
	var h={};
var speakWord = "Hello";
h.speak =function (name) {
  console.log(speakWord + " " + name);
}
window.h=h;
})(window);

