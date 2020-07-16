/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
let age = 12;
if (age < votingAge){
    console.log('false');
}else{
  console.log('true');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var number1 = 1;
var number2 = 3;
console.log(number1+number2);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


var x = parseInt("1999");
console.log(x);




//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a * b;
}
console.log(multiply(3,4));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogyearcalculator(humanage){
    return humanage * 7;
  }
  console.log (dogyearcalculator(10));
  


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogfeeder(weight,DogAge){
  if(DogAge >= 1 && weight <= 5){
    return weight * 0.05;
  }else if(DogAge >= 1 && weight >= 6 && weight <= 10){
    return weight * 0.04;
  }else if(DogAge >= 1 && weight >= 11 && weight <=15){
    return weight * 0.03;  
  }else if(DogAge >= 1 && weight > 15){
    return weight * 0.02;
  }else if(DogAge >= .16  && DogAge <= 0.33){
    return weight * 0.10;
  }else if(DogAge >= .33  && DogAge <= 0.58){
    return weight * 0.10;
  }else if(DogAge >= 0.58  && DogAge <= 1){
    return weight * 0.10;
  }else{
    console.log("Invalid entry");
  }
}
  console.log(dogfeeder(15,1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computerChoice = Math.random();
if(computerChoice <= 0.33){
   computerChoice = "rock";
}else if(computerChoice <= 0.67){
  computerChoice = "paper";
}else{
  computerChoice = "sissors";
}

function game(userChoice,computerChoice){
  if(userChoice === computerChoice){
    return "It's a tie!"
  }else if(userChoice === "rock" && computerChoice === "sissors"){
    return "You win"
  }else if(userChoice === "paper" && computerChoice === "rock"){
    return "You win"
  }else if(userChoice === "sissors" && computerChoice == "paper"){
    return "You win"
  }else {
    return "You lose"
  }
}
  console.log(game("rock",computerChoice));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function KMtoMilesConverter(KM){
  return KM * 0.621371;
}

console.log(KMtoMilesConverter(2));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function FeetToCentimetersConverter(feet){
    return feet * 30.48;
}
    console.log(FeetToCentimetersConverter(4));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
 

function annoyingSong(count){
for(i = count; i > 0; i--){
  console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall");
}
}
console.log(annoyingSong(10));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades(num1){
    if(num1 >= 90){
      console.log("A")
    }else if(num1 >= 80){
      console.log("B")
    }else if(num1 >= 70){
      console.log("C")
    }else if(num1 >= 60){
      console.log("D")
    }else {(num1 < 60)
      console.log("F")
    }
}
    
    console.log(grades(83));


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
