function scuberGreetingForFeet(distance){
  // Write your code here!
  let result
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance >= 2500) {
    result = "No can do.";
  } else {
    result = "I will gladly take your thirty bucks."
  }
  return result 
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? ("Ok, sounds good.") : ("No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    case 'thanks for everything':
      return "Bye.";
  }
}

// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });

//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });
// });
