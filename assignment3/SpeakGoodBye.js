(function (window)
{ var gb={};
var speakWord = "Good Bye";
gb.speak= function (name) {
  console.log(speakWord + " " + name);
}
 window.gb=gb;
})(window);

