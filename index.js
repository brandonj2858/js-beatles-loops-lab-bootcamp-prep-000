function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var funfacts = []
  let i = 0
  while (i < facts.length) {
    funfacts.push(`${facts[i]}!!!`)
    i++
  }
  return funfacts
}

function iLoveTheBeatles(number) {
  var howmuch = []
   
  do {howmuch.push("I love the Beatles!")
    number++
  }
  while (number < 15)
 
  return howmuch}

  
  

