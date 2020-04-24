
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0;i<names.length;i++) {
 var n=names[i];
 n=n.toLowerCase();
  var c=n.charAt(0);
  if (c=='j') {
    gb.speak(names[i]);
  }
   else {
    h.speak(names[i]);
  }
}
})();