// add solution here
function theBeatlesPlay(musicians, instruments){
  var concert = [];
  var length = musicians.length
  
  // Loop through each musician
  for (i=0; i < length; i++){
    let musician = musicians[i]
    let instrument = instruments[i]
    let action = musician + " plays " + instrument
    concert.push(action)
  }
  return concert
}

