// * ex01: output your name
// Write a program to console your name on the output.
// console.log("Vrushali Sirsath")
// document.write("Om")
// a = prompt("Give me your name.")
// alert(a)

//------------------------------------*-*-*-----------------------------------------------

// ex02: read the name of your user
// A program to read input from your user. Output this name. Use readlineSync() for this

// var readlineSync = require('readline-sync');
// var username = readlineSync.question('May I have your name ?');
// console.log(username)

//------------------------------------*-*-*-----------------------------------------------

//ex03: welcome your user
// A program to take a string. And add "Welcome" to it. Then console it.
// var city = require('readline-sync')
// var display = city.question("Where you want to go ?");
// console.log("Welcome To " + display)            // string concatenation

//------------------------------------*-*-*-----------------------------------------------

// ex04: do it all together
// A program to take your user's name. Then welcome them.

// var name = require('readline-sync');
// var n = name.question("What is your name? ");
// var printMessage = "Welcome," + n;          // string concatenation
// console.log(printMessage);

//------------------------------------*-*-*-----------------------------------------------

// ex05: print right/wrong if greater than 25
// Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

// var readAge = require('readline-sync');
// var age = readAge.question("Am I older than 25 ? : ");

// if(age == "yes")
//   console.log("you are right");
// else
//   console.log("you are wrong")

//------------------------------------*-*-*-----------------------------------------------

//ex06: increment score if the right answer
// Ask your user if your hometown is Bokaro (or your city) and this time increment a variable based on the right answer. Also, console the score this time.

// var score=0;
// var readnumber = require('readline-sync') 
// var num = readnumber.question("Enter Even number : ")
// if(num%2 == 0)
// {
//   console.log("You are Right ! , User Enter Even Number")
//   score++;
//   console.log("Score = " + score)
// }
// else
// {
//   console.log("You are Wrong ! , User Not Enter Even Number")
//   score--;
//   console.log("Score = " + score)
// }

//------------------------------------*-*-*-----------------------------------------------

//ex07: function to add two numbers
// Take two numbers and add them. Put this entire thing in a function add() and return the result

// function add(n1, n2)             //function define
// {
//   console.log(num1, num2)
//   var sum = n1 + n2;
//   return sum;
// }
// var takenum = require('readline-sync')
// var num1 = takenum.question("Enter first number : ");
// var num2 = takenum.question("Enter second number : ");
// console.log(num1, num2)
// var result = add(num1, num2);                //function call
// console.log("Sum = " + result)


// //write a function to find product of 2 number
// function product(a,b)
//   {
//     return a*b;
//   }
// var ans = product(5,7);
// console.log("Product of a & b is " + ans);

//------------------------------------*-*-*----------------------------------------------

// ex08: function to check the answer
// Your function should take a question and the right answer.
// Ask your user to answer the question.
// check the answer and increment score (global variable)
// tell your user whether the answer was correct or not

// var readlineSync = require('readline-sync')
// var score=0;

// function play(question,answer)
//   {
//     var username = readlineSync.question(question);

//     if(username == answer)
//     {
//       console.log('You were right');
//       score++;
//     }
//     else{
//        console.log('You were Wrong');
//       score--;
//     }
//   }

// play("What is my name ? : " , "Vrushali Sirsath");
// play("Where do I work ? " , "College")
// play("Where do I live ? " , "Amravati")
// console.log("Your score is : " + score)


//------------------------------------*-*-*----------------------------------------------

// ex09: print your name 5 times
// print your name 5 times by calling console.log()
// use for loop to do this
// BONUS (optional): Print the number with your name


// for(var i=1;i<=5;i++)
// {
//   console.log("Vrushali")
// }

//------------------------------------*-*-*----------------------------------------------

// homework: star pattern
// challenge
// a program to take input number from user and print stars like this. The below pattern // will be printed when the user enters 5.

// *
// **
// ***
// ****
// *****

// var takeNum = require('readline-sync')
// var num = takeNum.question("Enter a number : ")

// for(var i=1;i<=num;i++)
//   {
//     for(var j=1;j<=i;j++) 
//       {
//         console.log("*")
//       }
//     console.log("\r\n")
//   }

//------------------------------------*-*-*----------------------------------------------

//ex10: list grocery items to buy
// prepare a list of grocery items to buy.
// add 5 items
// print the first item on the list.
// print the third item on the list.
// print the last item on the list.
// syntax :var arrayName = [valueOne, valueTwo, valueThree];


// var groceryList = ["milk","rava","pasta","pav","maggie"]
// console.log(groceryList[0]);
// console.log(groceryList[2]);
// console.log(groceryList[4]);


//------------------------------------*-*-*----------------------------------------------

//ex11: print every item on the list
// Take the list you made in the last exercise. Now, use a for loop to print every item.

// function log(data)
//   {
//     console.log(data);
//   }

// for(var i=0;i<groceryList.length;i++)
//   {
//     log(groceryList[i]);
//   }

//------------------------------------*-*-*----------------------------------------------

//ex12: club info about a superhero together 
//Create two objects and put information about two superheros: superman and batman. Get familiarity with the syntax. Read and understand what's written in understanding section.

// var superman = {
//   name:"SuperMan",
//   power:"Flight",
//   costumeColor:"blue",
//   strength:10000,
//   intelligence:100
// }

// var batman = {
//   name:"BatMan",
//   power:"martial arts",
//   costumeColor:"black",
//   strength:100,
//   intelligence:100
// }

// console.log(superman.power);
// console.log(superman.strength)

// console.log(batman.power);
// console.log(batman.strength)

// console.log(superman.strength > batman.strength)
//------------------------------------*-*-*----------------------------------------------

// create a array of superhero objects, then print name and costumecolor of every superhero in the list.

// var superheroes = [superman,batman]
// for(var i=0;i<superheroes.length;i++)
//   {
//     var currentHero = superheroes[i];     //array index based access

//     console.log(currentHero.name);
//     console.log(currentHero.costumeColor);
//     console.log("--------------------");
//   }

//------------------------------------*-*-*----------------------------------------------

// ex13: put a list of questions together
// hint: there's an error in these objects
// if you copy/paste blindly it won't work

// questionOne = {
//   question: "Who is my favorite superhero?"
//   answer: "Dhruv"
// }

// questionTwo = {
//   question: "Which is my favorite sad song?"
//   answer: "Channa Meraya"
// }

// ","comma is missing in above code

//------------------------------------*-*-*----------------------------------------------

// ex14: club everything to make the game
// use question list and function to put together a quiz


var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " to DO YOU KNOW VRUSHALI ?");

//play a function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right!!");
    score++;
  }
  else {
    console.log("Wrong!!");
  }

  console.log("Current score : ", score);
  console.log("----------------------")
}

// array of objects

var questions = [{
  question: "Where do I live? : ",
  answer: "Amravati"
},
{
  question: "What I want to become in my future? : ",
  answer: "Software Developer"
},
{
  question: "Which Programming language that i like most! : ",
  answer: "JAVA"
},
{
  question: "How many projects I have made till now ? :",
  answer: "2"
},
{
  question: "Which is my favorite Actress of Indian Telivision? : ",
  answer: "Tejaswi Prakash"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}



//------------------------------------*-*-*----------------------------------------------

// ex15: print the final score to the user
// In your program, create a data structure to hold high scores.
//Show the user his score and high scores.
//Ask the user to send a screenshot if he has beaten the score.


console.log("Yaa! , You SCORED : ", score)

//------------------------------------*-*-*----------------------------------------------


