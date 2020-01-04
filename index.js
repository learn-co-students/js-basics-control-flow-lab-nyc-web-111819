function scuberGreetingForFeet(feet){
  let free = "This one is on me!"
  let thirty = 'I will gladly take your thirty bucks.'
  let no = "No can do."
  if (feet > 2500) {
    return no
  }
  else if (feet <= 200) {  
    return free
  }
  else if (feet > 2000){
    return thirty
  }
}
  

function ternaryCheckCity(city) {
  let good = "Ok, sounds good."
  let noGo = "No go."  
  return city === "NYC" ? good : noGo;
}



function switchOnCharmFromTip(tip) {
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye."
  }      
}

  
  // case 


// "Thank you so much."
// "Thank you."
// "Bye."