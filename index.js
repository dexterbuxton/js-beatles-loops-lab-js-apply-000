// add solution here
function theBeatlesPlay(musicians, instruments){
  var concert = [];
  var length = musicians.length;
  
  // Loop through each musician
  for (i=0; i < length; i++){
    let musician = musicians[i];
    let instrument = instruments[i];
    let action = musician + " plays " + instrument;
    concert.push(action);
  }
  return concert;
}

function johnLennonFacts(facts){
  var length = facts.length;
  var excitingFacts = [];
  for (i=0; i < length; i++) {
    let newFact = facts[0] + "!!!";
    excitingFacts.push(newFact);
  }
  return excitingFacts;
}

function iLoveTheBeatles(number){
  
}