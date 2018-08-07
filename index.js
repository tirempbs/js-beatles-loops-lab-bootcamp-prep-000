// add solution here
function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (let i = 0; i < musicians.length; i++) {
      strings.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  let i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}` + "!!!");
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(i) {
 var love = [];
 var n = 0;
 function increment() {
   n = n + 1;
 }
 do {
   love.push("I love the Beatles!");
   i++;
 } while (i + increment() < 15);
 return love;
}