// let js =  'amazing';
// console.log(40 + 8 + 23 + - 10);

// console.log('Muhammad.hassan');
// console.log(23)

// let firstName = 'Mo.hassan';
// console.log(firstName);
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'teacher';

// console.log(myFirstJob);

//  let javascriptIsFun = true;
// console.log(javascriptIsFun) ;


/*
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'hassan');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year ; 
console.log(year);
console.log(typeof year);

year = 1982
console.log(typeof year);

// this is bug  
console.log(typeof null);

*/

/*
// let age = 38;
// age = 31;

// const birthYear =  2003;
const now = 2037;
const hassanDon = now - 1991;
const ahsanDon = now - 2018;
console.log(hassanDon , ahsanDon);

console.log(hassanDon * 2, hassanDon / 10 ,2 ** 3);


const firstName = 'hassan';
const lastName = 'don'
console.log(firstName + ' ' + lastName)


let x = 10 + 5;
x += 20 ;  // x = x + 5 = 35
x *= 2;   // x = x * 2 = 70
x++;
x--;
console.log(x);

//comparision opertaors 
console.log(hassanDon > ahsanDon);
console.log(ahsanDon >= 18);

console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// console.log(25 - 10 - 5);
const averageAge = (hassanDon + ahsanDon) / 2;
console.log(hassanDon , ahsanDon ,averageAge);
*/



/*
// challenge no# 1 --------------------------------------
const massMark = 78;
const markHeigth = 1.69;
const massJohn = 92 ;
const johanHeight = 1.95;


const markBMI = massMark / markHeigth ** 2;
const johnBMI = massJohn / (johanHeight * johanHeight);
const markHigherBMI = markBMI > johnBMI;  // bolen 

console.log( markBMI , johnBMI , markHigherBMI);
*/



/*
// Strings and template literals ---------------
const firstName = 'Hassan';
const job = 'student';
const year = 2023
const birthYear = 2003;

const hassan = 'I am ' + firstName + ',' + ' I am ' + (year - birthYear) + ' years old' + job;
console.log(hassan);

const muhammadHassan = `I am ${firstName}, a ${year - birthYear} years old ${job}.`
console.log(muhammadHassan);

console.log(`string is on 
the left side .
and very fun.`)
*/



/*
// taking decisions    if / else -------------------
const age = 19 ;

if(age >= 16){
  console.log('hassan can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`hassan is too young. Wait another ${yearsLeft} years:)`)    
}

const birthYear = 2003;
let centuary;

if (birthYear <= 2005){  
     centuary = 20;
} else{
     centuary = 21;
}
console.log(centuary);
*/



/*
// challenge no#2       ---------------------------------
const massMark = 78;
const markHeigth = 1.69;
const massJohn = 92 ;
const johanHeight = 1.95;


const markBMI = massMark / markHeigth ** 2;
const johnBMI = massJohn / (johanHeight * johanHeight);
const markHigherBMI = markBMI > johnBMI;

console.log( markBMI , johnBMI , markHigherBMI);


console.log(johnBMI , markBMI);
if (markBMI > johnBMI){
    console.log(`mark BMI (${markBMI}) is higher then John(${johnBMI})` );
}  else{
  console.log(`John BMI is (${johnBMI}) higher then Mark(${markBMI}).`)
}   // challenge completed 
*/


/*
// TYPE CONVERSION  
const inputYear = '1991';
console.log(Number(inputYear) + 18);  // number() is used when string is number and addition subtraction is used in .

console.log(Number('hassan') );
console.log(typeof NaN);
 
// type corecion 
console.log('I am ' + 23 + ' years old');
console.log('40' - '20' - 2 );    // 18 
console.log('40' + '20' + 2 - 5);  // 40202
console.log(Number(40) + Number(20) + 2 );  // 62
console.log(10 / 2);   // works for all 


let n = '1' + 1;
n = n - 1;
console.log(n) ;
*/


/*
// truthy falsey values  ..............
// 5 falsey values : 0 , '', undefined, null, NaN 
console.log(Boolean(0));   // falsw
console.log(Boolean(undefined));  // false
console.log(Boolean('johan'));  // true
console.log(Boolean({}));    // true  

const money = 10; // this is truthy 
if(money){
    console.log("Don't spend it all :)");
}  else{
    console.log('you should get the job!');
}
if (height){     // this is a falsey 
let height;  
  console.log('Yey! height is defined');
} else {
 console.log('height is undefined.');
}
*/


/*
// equality operators == vs ===
const age = '18';
if(age === 18) console.log('you just became an adult')  ;
// stricked quality operator  === , in this value is fixed, become true when both values are same., does not perform type conversion..

if(age == 18) console.log('losely equal to adult');

const favourate = Number(prompt('what is your favorate number?')) ;
console.log(typeof favourate);

if (favourate === 33){
    console.log('Cool! 33 is an amazing number')
} else if(favourate === 7){
    console.log('7 is a cool number')
} else if(favourate === 9){
    console.log('9 is a cool number')
} else {
    console.log('their is no favourite number !')
}

if (favourate !== 23){  // !== stricky inequality operator ....
    console.log('why not  23 ?');
}
*/

// -----------------------========================

/*
//  LOGiCAL OPERATORS  //////////////
const hasDriversLicence = true;     // A
const hasGoodVision = true ;        // B
const isTired = false;               // C

console.log(hasDriversLicence && hasGoodVision);   // true
console.log(hasDriversLicence || hasGoodVision);  // true
console.log(!hasDriversLicence);           //false
console.log(hasDriversLicence && hasGoodVision && isTired);  //falsae

const shouldDrive = hasDriversLicence && hasGoodVision;
// if (shouldDrive){
//     console.log('Sara is able to drive');
// } else {
//     console.log("Sara can't drive....");
// }

if (hasDriversLicence && hasGoodVision && !isTired){ // true true true
    console.log('Sara is able to drive');
} else {           // Ans : Sara is able to drive
    console.log("Sara can't drive....");
}
*/

// 0000000000000000000-------------------------------------------------

/*
// CHALLENGE NO#3 ........................////////////

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins ,scoreKoalas);

// if (scoreDolphins > scoreKoalas){   // Dolphins team wins the match..
//   console.log('Dolphins team wins the match');
// } else if(scoreKoalas > scoreDolphins){ 
//      console.log('Konalas team wins the match');
// } else if(scoreDolphins === scoreKoalas){
//     console.log('Both teams win the match')
// }

 //        bonus # 1 /////////////////
const scoreDolphins = (97 + 112 + 80) / 3;  // 96.33..
const scoreKoalas = (109 + 95 + 50) / 3;   // 84.6667
console.log(scoreDolphins , scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){    //  No one wins the match
    console.log('Dolphins team wins the match...');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas team wins the match...');
}  else if(scoreDolphins === scoreKoalas){
        console.log('Both teams win the match')
}   else {
    console.log('No one wins the match')
}


// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (97 + 112 + 101) / 3;
// console.log(scoreDolphins , scoreKoalas);

// if (scoreDolphins > scoreKoalas){  //v both team wins the match
//     console.log('Dolphins team wins the match...');
// } else if(scoreKoalas > scoreDolphins){
//     console.log('Koalas team wins the match...');
// }  else if(scoreDolphins === scoreKoalas){
//         console.log('Both teams win the match')
// }   
*/

// ---------------------------===================

/*
// THE SWITCH STATEMEMNT////////////////
const day = 'thursday';

switch(day) {
    case 'monday':  // day === 'monday' 
    console.log('Plan course structure');
    console.log('Go to codding meetup');
    break;
    case'tuesday': 
    console.log('Prepair theory vedios');
    break;
    case 'wednesday':
    case 'thursday':
    console.log('Write the code examples');
    break;
    case 'friday':
        console.log('Record vedios');
    break;
    case 'saturday':
    case 'sunday':
    console.log('Enjoy the weekend');
    break;
    default:
        console.log('Not valid day:(');
} 
       // BOTH ARE SAME THINGS//////////
if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to codding meetup');
}
 else if(day === 'tuesday'){
    console.log('Prepair theory vedios');
 } else if (day === 'wednesday' || day ===  'thursday'){
    console.log('Write the code examples');
 } else if (day === 'friday'){
console.log('Record vedios');
 }  else if(day === 'saturday' || day === 'sunday' ){
    console.log('Enjoy the weekend');
 } else {
    console.log('Not valid day:(');
 }
*/

///-----------------------------=====================

/*
// ..... STATEMENTS AND EXPRESSIONS ...........////////
3 + 4  // this is expression ..
1991   // ... are expressions./
true && false &&  !false // are expression..

if (23 > 10){  // if (..){} , this is STATEMENT..
    const str = '23 is bigger.';  // expression
    // statement are the full sentences that translate ar action 
}
console.log(`I'm ${2009 - 2000} years old.`) //EXPRESSION

switch (){  // StaTEMENT 
}
*/

//-------------------------------------------===============================

/*
//  THE CONDITIONAL OPERATOR (TERNARY)..
const age = 18;   // ?  is if and : is else ,
// age >= 18 ? console.log('i like to drink COke'):
// console.log('I like to drink water');

const drink =  age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2 ;
if (age >= 19){
    drink2 = 'wine';
} else  {
      drink2  = 'water';
}
console.log(drink2);
 // using ternary oprerator ..////
console.log(`I  like to drink ${age >= 18 ? 'wine' : 'water'}`);
console.log(`I like to eat ${age >= 18 ? 'Chicken' : 'Beaf'}`);
*/



//..../////...... Challenge no# 4...///////////
// const bill = 400;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);







//  REVISION OF CHALLENGES-----------------------------------------------------------===============================================================================

//                   CHALLENGE  NO # 1      ----------------------/

// const markHeigth = 1.69;
// const massMark =  78;
// const massJohn = 92;
// const johanHeight = 1.95;

//  const johnBMI = massJohn / johanHeight ** 2 ;
// const markBMI = massMark /  (markHeigth * markHeigth);
// const markHigherBMI = markBMI > johnBMI ; 

// console.log(`Marks has the higher BMI (${markBMI} then John's BMI (${johnBMI}))`)



//                      CHALLENGE NO # 2        -----------------------/

// const markHeigth = 1.95;
// const massMark =  78;
// const massJohn = 92;
// const johanHeight = 1.69;

//  const johnBMI = massJohn / johanHeight ** 2 ;
// const markBMI = massMark /  (markHeigth * markHeigth);
// const markHigherBMI = markBMI > johnBMI ; 

// console.log(markBMI , johnBMI)
// if (markBMI > johnBMI){
//  console.log(`Marks has the higher BMI (${markBMI}) then John's BMI (${johnBMI})`)
// } else {
//     console.log(`John has the higher BMI (${johnBMI} then mark's BMI (${markBMI})`)
// }


  //                   CHALLENGE NO # 3   ..,------------------------//

//  const   scoreDolphins = (96 + 208 + 89) / 3; 
//  const  scorekaolas = (96 + 208 + 89) / 3;
//  console.log(scoreDolphins , scorekaolas)

//  if (scoreDolphins > scorekaolas && scoreDolphins >= 100 ){
//     console.log(`Dolphins team wins the match ..`)
//  } else if(scorekaolas > scoreDolphins && scorekaolas >= 100){
//   console.log(`kaolas team wins the match ..`)
//  }  else if (scoreDolphins === scorekaolas && scoreDolphins >= 100 && scorekaolas >= 100){
//    console.log(`Draw! Both Team Wins..`)
//  }
//   else {
//     console.log(`No team wins ...`)
//  }

//        CHALLENGED COMPLEDED ..../


//                    CHALLENGE NO # 4   ------------------------==-//
// solve using ternary operator .. /

// const bill = 275 ;
// const tip = bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total will be ${bill + tip} `)

//Ans :)  The bill was 275, the tip was 41.25 and the total will be 316.25  
 
 
//      SECTION 1 --- CHALENGES COMPLETED ---- : )