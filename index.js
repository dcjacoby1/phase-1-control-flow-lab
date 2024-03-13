function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
    return ('This one is on me!');
  } else if (someValue > 400 && someValue <= 2000){
    return ('That will be twenty bucks.');
  } else if (someValue > 2000 && someValue <= 2500){
    return ('I will gladly take your thirty bucks.');
  } else {
    return ('No can do.');
  }
}
function ternaryCheckCity(someValue) {
  return someValue === "NYC" ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(someValue){
  // Write your code here!
    let response;
  switch (someValue){
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
      default:
        response = 'Bye.'

  }
  return response;
}

