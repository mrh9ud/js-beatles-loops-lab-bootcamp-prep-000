// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i <= musicians.length - 1; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.concat("I love the Beatles!");
  } while (number < 15) {
    array.push(15 - number);
    i++;
  }
  return array
}



