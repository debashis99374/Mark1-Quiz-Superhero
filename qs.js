var score=0;
var response="";


console.log("this is a quiz about batman");
var userName=prompt("what may i call you sir?=");
console.log("welcome "+userName+" to batman quiz");
console.log("---------------------");
 function play(question,answer){
   var userAnswer=prompt(question);
   if(userAnswer===answer){
      response="Correct";
     score+=1;
   }else{
     response="wrong"
   }
   console.log(response);
   console.log("score is = "+ score);
   console.log("---------------------");
 };

var questionOne={
  question:"whats Batmans true name?=",
  answer:"Bruce Wayne"
};
  var questionTwo={
  question:"whats Batmans fathers name?",
  answer:"Thomas Wayne"
};
var questionThree={
  question:'how many robins did Batman work with so far ? ',
  answer:'4'
};



var questionFour={
  question:'Who is the arch enemy of batman? ',
  answer:'Joker'
};
var questionFive={
  question:'Does Batman kills?',
  answer:'No'
};
var questionSix={
  question:'Does Batman uses Guns?',
  answer:'No'
};
var questionSeven={
  question:'What is Batmans Mother s name?' ,
  answer:'Martha Wayne'
};
var questionEight={
  question:'What is Batmans Buttler s name?',
  answer:'Alfred'
};
var questionNine={
  question:'Is Bruce Orphan?',
  answer:'Yes'
};
var questionTen={
  question:'Is Batman the Greatest Superhero?',
  answer:'Yes'
};
  var listOfQuestions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
 for(let i=0;i<listOfQuestions.length;i++){
   
   play(listOfQuestions[i].question,listOfQuestions[i].answer);
 }

console.log("Thank you for your Time "+userName+" Sir");
   console.log("Have aNice Day!!!");
console.log("--------------------------END----------------------------------------------------------------------------------------------")
