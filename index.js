function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride > 2500) {
    return 'No can do.'
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride <= 400) {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let message
  city === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.';
  return message
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message
  switch (tip) {
    case "generous":
      message = "Thank you so much."
      break;
    case "not as generous":
      message = "Thank you."
      break;
    default:
      message = "Bye."
      break;
  }
  return message
}