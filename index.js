function scuberGreetingForFeet(someValue){
  // Write your code here!
  let statement;

  if (someValue <= 400) {
    statement = 'This one is on me!';
  }

  if (someValue > 2000) {
    statement = 'I will gladly take your thirty bucks.';
  }
  
  if (someValue > 2500) {
    statement = 'No can do.';
  }

  return statement;

  // switch (someValue) {
  //   case (someValue <= 400):
  //     statement = 'This one is on me!';
  //     break;
  //   case (someValue > 2000):
  //     statement = 'I will gladly take your thirty bucks.';
  //     break;
  //   case (someValue > 2500):
  //     statement = 'No can do.';
  //     break;
  // } 
  // return statement;
}

function ternaryCheckCity(city){
  // Write your code here!

  let response; 

  (city == 'NYC') ? (response = 'Ok, sounds good.') : (response = 'No go.');

  return response;
}

function switchOnCharmFromTip(desc) {
  // Write your code here!
  
  let response

  if (desc === 'generous') {
    response = 'Thank you so much.';
  } else if (desc === 'not as generous') {
    response = 'Thank you.';
  } else {
    response = 'Bye.';
  }
  
  return response;

  // switch (desc) {
  //   case "generous":
  //     response = "Thank you so much.";
  //     break;
  //   case "not as generous":
  //     response = "Thank you";
  //     break;
  //   default:
  //     response = "Bye.";
  // }

  // return response;

}