function scuberGreetingForFeet(someValue){
 if (someValue <= 400)
 return 'This one is on me!';
 else if (someValue >= 400 && someValue <= 2000)
 return 'That will be twenty bucks.';
 else if (someValue >= 2000 && someValue <= 2500)
 return 'I will gladly take your thirty bucks.';
 else if (someValue >= 2500)
 return 'No can do.';
}

function ternaryCheckCity(city){
let response = city == "NYC" ? "Ok, sounds good." : "No go.";
return response;
}

function switchOnCharmFromTip(tip){
switch(tip){
  case "generous" :
    return ("Thank you so much.");
    case "not as generous" :
      return ("Thank you.");
      default :
      return ("Bye.");
      break;
}
}