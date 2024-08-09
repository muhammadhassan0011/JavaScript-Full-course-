"use strict"; //use this to avoid bugs in code
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest)  hasDriversLicence = true;
if (hasDriversLicence) console.log('i can drive :D');
*/

/*
// FUNCTIONS / is a piece of code that we can reuse over and over again in our code. it hold's complete lines of code://
function logger(){
    console.log('My name is Muhammad Hassan');
}

// Calling / runnning / invoking the function :
logger();  

function fruitProcessors(apples, oranges){    // prameters are like variables that are spicified only to the function...    
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}    
// Calling / runnning / invoking the function :
const fruitJuice = fruitProcessors(5, 0);
console.log(fruitJuice);  //  Juice with 5 apples and 0 oranges
// Calling the function  : 

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);  //Juice with 2 apples and 4 oranges

function  Foodies(cake , juice){
    const food = `I have eaten ${cake} cakes and ${juice} juices in party.`;
    return food ;
}
 const foodeat = Foodies(2 ,8);
 console.log(foodeat);
*/

/*
//  FUNCTION DECLARATION VS EXPRESSIONS..........///

// this is function declearation../
function calcAge1(birthYear){
return 2023 - birthYear;
}
  

 //FUNCTION expression..//     expression produce values ..Function is also value ..   is more convenient  then  delecration./
 const calcAge2 =  function (birthYear){  // this variable will be the function & Expression. function without name is Anonumas function
    return 2023 - birthYear;
}  

const calcAge3 = function(birthYear){
    return 2023 - birthYear;
}
const age1 = calcAge1(2003)
const Age2 = calcAge2(2003);   // ANS:) 20
const age3 = calcAge3(2002);
console.log(age1 ,Age2 ,age3);  // 20  20  21  
*/

/*
// ARROW function is a special form of function expression that is shorter and faster to write../    => this is return

//    ARROW FUNCTION :)..
const calcAge4 =  birthYear => 2023 - birthYear;
const Age4 = calcAge4(2003);
console.log(Age4);

//  Exam 2
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear; //2023 - 2003 = 20 
    const retirement = 60 - age;  // 60 - 20 = 40 ans :)
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(2003, 'Muhammad Hassan'));  // Muhammad Hassan retires in 40 years.
console.log(yearUntilRetirement(2004, ' Ahsan'));          //  Ahsan retires in 41 years.
*/

/*
// Function Calling other Functions..//
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessors(apples, oranges){      // 2, 3  
const applePieces = cutFruitPieces(apples);     // 2 * 4 = 8
const orangePieces = cutFruitPieces(oranges);   // 3 * 4 = 12

    // const juice = `Juice with ${apples} apples and ${oranges} oranges`
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice; //  ANS:)  Juice with 8 pieces of apple and 12 pieces of orange.
}  
console.log(fruitProcessors(2, 3));
*/

/*
//  REVIEWING FUNCTIONS ............//////
// function expression..//
const calcAge = function(birthYear){ // THIS ALSO becomes 2003../
return 2023 - birthYear;  //2023 - 2003 = 20 
} 
const yearUntilRetirement = function(birthYear, firstName) {
   const age = calcAge(birthYear); // calcAGE(2003) ;
    const retirement = 60 - age;  

    if(retirement > 38){
        console.log(`${firstName} retires in ${retirement} years.`) ;
       return  retirement;
    } else {
         console.log(`you will not be retired soon !`);
         return retirement;
    }
}
console.log(yearUntilRetirement(2003, 'Muhammad Hassan'));  // Muhammad Hassan retires in 40 years.
console.log(yearUntilRetirement(2000, 'Ahsan'));    //  you will not be retired soon !
*/

/*
//   CODDING CHALLENGE NO# 1..   PART 2 ......//  
const calcAverage = (a ,b ,c) => (a + b + c) / 3;

//   Test : 1
let  scoreDolphins = calcAverage(44, 23, 71);
let  scoreKoalas = calcAverage(65,  54 , 49) ;
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
   if (avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins wins the Match (${scoreDolphins} vs ${scoreKoalas})`);
   } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas wins the Match (${scoreKoalas} vs ${scoreDolphins} )`);
   }  else{
      console.log('No team wins.... ')
   }
}
  checkWinner(scoreDolphins ,scoreKoalas) ;   // these function are all independent from  another.




 // arrow function   test #  2  ...//
 const calcAverage = (score1 , score2 , score3) => (score1 + score2 + score3) / 3 ;
  let teamDolphins = calcAverage(85, 54 , 41);   // 60
  let teamKoalas = calcAverage(23 , 34 , 27);   // 28

  console.log(teamDolphins , teamKoalas);  

 const checkWinner = function(avgDolphins , avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
       return `teamDolphins win the Match (${avgDolphins} vs ${avgKoalas})`;
    } else if(avgKoalas >= 2 * avgDolphins){
        return `teamKoalas win the Match (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return'No team wins....';
    }
 } 
 console.log(checkWinner(teamDolphins, teamKoalas)) ;  //  teamDolphins win the Match (60 vs 28)

 //  test 1 //
  teamDolphins = calcAverage(44 ,23 , 71);
  teamDolphins = calcAverage(65 ,54 , 49);
 console.log(teamDolphins, teamKoalas) ;
 console.log(checkWinner(teamDolphins, teamKoalas)) ;
*/

/*
// INTRODUCTION TO ARRAYS  ..........////   
// Arraws are data structures , is like  a big container into which we can through variables and then later reference them :)
// We cannot do operation in an array..,
const friend1 = 'Hassan';
const friend2 = 'Wali';
const friend3 = 'Hussain'

const friends = ['Hassan' , 'Wali' , 'Hussain'];  //litteral sayntax..
console.log(friends);

const years = new Array(2003, 2005 ,2007,2009 , 2013);
console.log(friends[0])  // Hassan
console.log(friends[2])  // Hussain

console.log(friends.length);   //ANS:) 3 , its not zero based../
console.log(friends[friends.length - 1]) // ONLY EXPRESSIONS ARE ALLOWED ..  //lenght is used to get the last element of an array..

friends[2] = 'Ahsan' ;
console.log(friends);  // array is not a premitive value , so we can change or mutiate it while using const..//

// friends = ['Bob' , 'Alice']   can't do this ../

const firstName = 'Muhammad';
const hassan = [firstName , 'Hassan' , 2023 - 2003, 'teacher' , friends];
console.log(hassan.length)  ;

//   EXCERSIZE.. //
const calcAge = function (birthYear){
    return 2023 - birthYear;
}
const birthYear = [2003, 2005 ,2007,2009 ,2013];
const age1 =  calcAge(years[0]);
const age2 =  calcAge(years[1]);
const age3 =  calcAge(years[years.length - 1]);
console.log(age1 , age2, age3);  // 20 18 10  /

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];   // (3) [20, 18, 10]  same ans ../
console.log(ages); 

let newArray = num.concat(num2)
console.log(newArray)  // it join's two arrays into one array
let b = num.toString() // b is now a string..
 console.log(b);

*/

// ----------------------------------------------------

/*
//   BASIC , ARRAY OPERATION (METHODS)  .. ///
//   .push()
const friends = ['Hassan' , 'Wali' , 'Hussain'];  //litteral sayntax..f
const newLength = friends.push('Bilal');     // push function adds the element to the last of array and also returs a value   //
console.log(friends);   //  results :) ['Hassan', 'Wali', 'Hussain', 'Bilal']

// .unshilf()  
friends.unshift('Cake');  // used to add element to the first of an array..//
console.log(friends);  // then result will :)     ['Cake', 'Hassan', 'Wali', 'Hussain', 'Bilal']

//.pop()    // which is opposite to push()  function ,  used to remove the element to  the last of an array/
friends.pop();   // bilal will removed.. Last
const pooped =  friends.pop();  // it will returns the removed element ../
console.log(pooped);     // (5) ['Cake', 'Hassan', 'Wali', 'Hussain', 'Bilal']    // Hussain
console.log(friends);   //  ['Cake', 'Hassan', 'Wali']

friends.shift();  //  to remove the element to the first of an array .. /
console.log(friends);  // :)   ['Hassan', 'Wali'] 

console.log(friends.indexOf('Wali')); // 1

console.log(friends.includes('Wali')); //  :) true    // used to weather an element is in array or not // if it was in than ans is true or otherwise  false /

friends.push(23);   
console.log(friends.includes(23))   // :) true  //  does not do type conversion,,is a stricked equality..,  does not do type conversion,,is a stricked equality/ is also BOOLEAN .. 

if (friends.includes('Wali')){
    console.log('you bhave a friend called Wali.')  
} else {
    console.log('No friend here ..')
}
// TRUE .., you bhave a friend called Wali. :)
*/

// /****************************************** */

/*
//   Codding Challenge no # 2    .., Part # 2 ..//



const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
}
// arrow function ..
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2 ;

// by using array :)
const bills = [125 , 555 , 44]; // :) 18.75 , 111 , 8.8 //125 * 0.15 , 555 * 0.2, 44 * 0.15 .../
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

console.log(bills , tips);


//  bonas tip :+)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]];
console.log(totals);  // :) [143.75, 666, 88] 
*/

//------------------********************************

/*
// INTRODUCTION TO OBJECTS :+)
// This is also a DATA STRUCTURE ..// in object we can define key value pairs: WE USE objects to essentially group together  different varialbles that belong together ..we use objects for unstructured data ,,. and  Array for ordered / structured data:)
const hassanShah = [
    'Muhammad',
    'Hassan',
    '2023 - 2003',
    
    ['Wali , Ahsan , Arshad']
];
//  this is called OBJECT LITTERAL SYNTAX :(
const hassan = {  // hassan has 5 properties .. / 
    firstName : 'Muhammad',
    lastName :  'Hassan',
    age : 2023 - 2003,
    friends : ['Wali , 'Ahsan' , 'Arshad']
}
*/

//  **************************-------------------------

/*
// DOT VS BRACKET NOTATION   .....//no
// . is used for real final property name and not a computed property name :)

const hassan = {  // hassan has 5 properties .. / 
    firstName : 'Muhammad',
    lastName :  'Hassan',
    age : 2023 - 2003,
    job : 'teacher' , 
    friends : ['Wali' , 'Ahsan' , 'Arshad']
}

// console.log(hassan.lastName);         // Hasssan
// console.log(hassan['lastName']);       // Hasssan

// const nameKey = 'Name';
// console.log(hassan['first' + nameKey]);   //Muhammad
// console.log(hassan['last' + nameKey]);   // Hassan

// undefined is what we get when we try to acess a property on an object that does not exists ... 
const interstedIn =  prompt('What do you want to Know about hassan? Choose between firstName,lastName,age,job and friends');

if (hassan[interstedIn]){
    console.log(hassan[interstedIn]);
}  else {
    console.log('There is no such Answe here  ... ')
}
hassan.location = 'Lahore';
hassan['Gmail'] = 'hmo40016@gmail.com';
console.log(hassan);


// Challenge  / / 
console.log(`${hassan.lastName} has ${hassan.friends.length} friends , and his best friend is called ${hassan.friends[0]}`);  //
// . , []  both are left to right  //
// ANS :)  Hassan has 3 friends , and his best friend is called Wali
*/

// ------------------------------------======================

/*
//  OBJECTS METHODS //
// objects can hold different type of data , arraws and even holds objects inside objects ../

const hassan = {  
    firstName : 'Muhammad', // STRING
    lastName : 'Hassan',  // STRING
    birthYear :  2003,  // NUMBER
    Job : 'teacher',   // STRING
    friends :['Hassan' , 'Ahsan' , 'Cake'] , // ARRAY
    hasDriversLicence : true  ,  // B0OLEAN
    
    // calcAge : function(birthYear) {  // FUNCTION 
    //     return 2023 - birthYear;
    // }


  // .this   keyword or valiable  is equal to the object on which the method is called .. or it's equal to the object calling the method :)
//     calcAge : function() {   
//         return 2023 - this.birthYear; // this, points to hassan 
//     }
// };  
    calcAge : function() {   
    //    this.age = 2023 - this.birthYear;
        return 2023 - this.birthYear; // this, points to hassan 
    },

   getSummery : function(){
    return `${this.lastName} is a ${this.calcAge()}-years old ${this.Job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
   }
}

// AN function that is Attached To an OBJECT IS called Method :+)
// most efficient solution ........
console.log(hassan.calcAge());  // 20
// console.log(hassan.age);  // 20
// console.log(hassan['calcAge'](2003));  // :) 20


//   CHALENGE  .............////////../.../
console.log(hassan.getSummery());   



// ***********************------------------------------------********



//   Challenge no # 3  
// const mark = {
//     fullName : 'Mark Miller',
//     mass     : 78 ,
//     height   : 1.69 ,

//     calcBMI : function(){
//      this.bmi = this.mass / this.height ** 2 ;
//      return this.bmi ; 
//     }
// }

const john  = {
    fullName : 'John Smith',
    mass     : 92 ,
    height   : 1.92 ,

    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2 ;
        return this.bmi ; 
       }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi , john.bmi);

if(mark.bmi > john.bmi){ 
    console.log(`${(mark.fullName)}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`) 
} else {
    console.log(`${(john.fullName)}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`) 
}

*/

// ------------------------------===================================

// Loops & FUNCTIONS
// we use loopsto perform repeated  actions :)

// types of LOOPS in JAVASCRIPT :)
//  (for loop) : loop a block of code number ofd times .
// (for in) : Loops through the key of an object .
//  (for of): loops through the values of an object .
// (While loop): loops a block based on a specific condition.
// (do while loop ) : While loop variant which runs atleast once .

//---------------------------------------------------------==========================

/*
//      ITERATION : THE FOR looop  :
 // we use loops to perform repeated  actions :)
   
  // types of LOOPS in JAVASCRIPT :)
//  (for loop) : loop a block of code number ofd times .
// (for in) : Loops through the key of an object .
//  (for of): loops through the values of an object .
// (While loop): loops a block based on a specific condition.
// (do while loop ) : While loop variant which runs atleast once . 

// for loop  // keep running while condition is  TRUE ..
// for (let rep = 1 ; rep <= 10 ; rep++){
//     console.log(`lifting weight repetition ${rep}`)
// }

//  ---------------------------------------------=======------/


//      Looping Arrays , Breaking and Continuing  .../ 
const hassan = [
    'Muhammad',
    'Hassan',
    2023 - 2003,
    ['Wali' , 'Ahsan' , 'Arshad'],  
    'teacher',
    true
];
const types = [];

for (let i = 0; i < hassan.length ; i++ ){
    console.log(hassan[i], typeof hassan[i]);
   
    // filling types array
    // types[i] = typeof hassan[i];
    types.push(typeof hassan[i])
}
console.log(types);


const years1 = [2000, 2010 , 2016 , 2009];
const ages1 = [];
for (let i = 0; i < years1.length ; i++){
 ages1.push(2023 - years1[i])   /// i means array //
}
console.log(ages1);



//  continue and break  /////////////////
// console.log('------------ ONLY STRINGS -------------');
// for (let i = 0; i < hassan.length ; i++ ){
//     if(typeof hassan[i] !== 'string') continue ; 
       
//         console.log(hassan[i], typeof hassan[i]);
//     }
    
 
    for (let i = 0; i < hassan.length ; i++ ){
        if(typeof hassan[i] !== 'string') break ; 
           
            console.log(hassan[i], typeof hassan[i]);
        }
*/

////---------------------------------------------==================

/*
//     LOOPING BACKWARDS AND LOOPS IN LOOPS      -----------------== //
const hassan = [
    'Muhammad',
    'Hassan',
    2023 - 2003,
    'teacher',
    ['Wali' , 'Ahsan' , 'Arshad']
];

for(let i = hassan.length - 1; i >= 0;  i--){
console.log(i ,hassan[i]);  // counter val    , array value..
}
// this will reverse the loop 



 LOOPING INSIDE A LOOP   -------------------------------------//
for (let excercise = 1 ; excercise < 4 ; excercise++){
   console.log(`---------Excercise ${excercise}` );

   for(let rep = 1 ; rep < 6; rep++){
  console.log(`Excercise${excercise}: lefting weight repetation ${rep}`)
   }
}
we end up with 15 repetation  //
*/

//----------------------------------------------===========

/*z
//        The    While Loop   ---------------------//
// in while lopp  if the condition is true then the code will execute continuesly .. / first condition will check then block runs ..//
// Note if the condition never become false , the loop will never end and this might crash the runtime .. 


for (let rep = 1 ; rep <= 10; rep++){
    console.log(`lefting weight repetation ${rep}`)
     };
     let rep = 1 ;
     while (rep <= 10){
        console.log(` lefting weight repetation ${rep}`);
        rep++;
     };
           Math.trunc()  gives ramdom number between 0 and 6
     let dice = Math.trunc(Math.random() * 6) + 1 ;
     console.log(dice);

     while(dice !== 6){
        console.log(`You rolled a ${dice}`)
        dice = Math.trunc(Math.random() * 6) + 1 ;

        if (dice === 6 ) console.log('Loop is about to end ...')
     }
    */

///--------------------------------------------------------------

/*
//              Challenge NO # 4 ----------------------===============

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 :  bill * 0.2;

const  bills = [22 , 295 , 176 , 440 , 37 , 105 , 10 , 1100 , 86 , 52];
const tips = [];
const totals  = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);    //  i means  array  ..
     tips.push(tip) ;
     totals.push(tip + bills[i]);
} 
console.log(bills , tips , totals);

   

const calcAverage = function(arr){     // arr as  argument .. 
    let sum = 0;
    for(let i = 0; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2,3,7]));   // 4
console.log(calcAverage(totals));   // 275.19
console.log(calcAverage(tips));    // 42.89 
*/

////-------------------------REVISION OFR CHALLENGES // -----------
//                           CHALLENGE NO# 1 ----------------------//

// const calcAverage = (a, b ,c) => (a + b + c) / 3;

// const  teamDolphins = calcAverage(44, 663 , 71);
// const teamKoalas = calcAverage(65 , 54 , 49);
// console.log(teamDolphins ,teamKoalas);

// const checkWinner = function(avgDolphins,avgKoalas){

// if (avgDolphins >= avgKoalas * 2 ){
//   return `Dolphin's team wins the Match..(${avgDolphins} vs ${avgKoalas})`
// } else if (avgKoalas >= avgDolphins * 2 ){
//   return  `Koalas's team wins the Match..(${avgDolphins} vs ${avgDolphins} )`;
// } else {
//     return `No team wins the match.. !`
// }
// }
// console.log(checkWinner(teamDolphins,teamKoalas));
// //  Dolphin's team wins the Match..(259.3333333333333 vs 56)

//                    CHALLENGE NO # 2   -------------------------==//

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 :  bill * 0.2;
// const bill = calcTip(100);

// const bills = [125 , 555 , 44];
// const tips  = [calcTip(bills[0]) , calcTip(bills[1]) , calcTip(bills[2])];

// const total = [bills[0] + tips[0] , bills[1] +  tips[1] , bills[2] + tips[2]];

// console.log(bills , tips , total);
// console.log(`there bill is (${bills}) , tip is (${tips}) and the total was (${total}).`)

//                Challenge No # 3 -------------------------==============//

// const mark = {
//     fullName : 'Mark Miller',
//     mass     : 78 ,
//     height   : 1.69 ,

//     calcBMI : function(){
//      this.bmi = this.mass / this.height ** 2 ;
//      return this.bmi ;
//     }
// }

// const john  = {
//     fullName : 'John Smith',
//     mass     : 92 ,
//     height   : 1.92 ,

//     calcBMI : function(){
//         this.bmi = this.mass / this.height ** 2 ;
//         return this.bmi ;
//        }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi , john.bmi);

// if(mark.bmi > john.bmi){
//     console.log(`${(mark.fullName)}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else {
//     console.log(`${(john.fullName)}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

//-------------    CHALLENGE NO # 4    ---------============/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals)); // 2751.9 / 10  =    275.19
console.log(calcAverage(tips)); //   428.9 / 10  =   42.89
