var score=0;
var userName=prompt('may i know your name?= ')
console.log('Welcome '+userName+' to Batman Quiz by Fandome')
console.log('---------------------------------------------')

function play(question,answer) {
  var userAnswer=prompt(question);
  if (userAnswer===answer){
    console.log('correct')
    score+=1
  }else{
    console.log('wrong')
  }
  console.log(score)
  console.log('---------------')
  
}
 var questionOne={
  question:'what is Batmans Real name= ',
  answer:'Bruce wayne'
};
var questionTwo={
  question:'what is batmans cave name is = ',
  answer:'Batcave'
};
var questionThree={
  question:'how many robins did Batman work with so far = ',
  answer:'4'
};
var questionFour={
  question:'Who is the arch enemy of batman ',
  answer:'Joker'
};
var questionFive={
  question:'Does Batman kills=',
  answer:'No'
};
var a=[questionOne,questionTwo,questionThree,questionFour,questionFive];
for(let i=0;i<a.length;i++){
var currentQuestion=a[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log('---------------')
console.log('thank you for your time   ')
console.log('have a nice day!!')