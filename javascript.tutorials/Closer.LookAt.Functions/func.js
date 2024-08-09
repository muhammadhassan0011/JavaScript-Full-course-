"use strick";
/*
//--------------------------  : DEFAULT PARAMETERS : ----------------------------------------------------//
// Note : We Cannot skip arguments when we call the function------

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LIH123");
createBooking("LIH123", 2, 800);
createBooking("LIH123", 2);
createBooking("LIH123", 5);

//  TO LEAVE AS DEFAULT  :-------- or To skip a Parameter ----
createBooking("LIH123", undefined, 1000);
//   {flightNum: 'LIH123', numPassengers: 1, price: 1000}
*/

/*
//====---------------------:   HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE   : -------------------======/

const flight = "LH234";
const hassan = {
  name: "Muhammad Hassan",
  passport: 2347333490,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2347333490) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};
// checkIn(flight, hassan);
// console.log(flight);
// console.log(hassan);

// Is the same as doing : / Because they both are the same object in memory heap ...
// const flightNum = flight;
// const passenger = hassan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(hassan);
checkIn(flight, hassan);

//  IN programing there are two terms that are used all the time when dealing with functions are :  1) Passing by value    2)  Passing by reference ----   Js doesn't have passing by reference ...

// WE PASS A REFERENCE TO TNE FUNCTION BUT WE DONOT PASS WHY REFERENCE ...
*/

//

/*
// -----------==== :  FUNCTIONS ACCEPTING CALLBACK functions : =======-------------------- /
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higer-Order Function ...
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`); //      Original String: Javascript is the best!
  console.log(`Transform string: ${fn(str)}`); //   Transform string: JAVASCRIPT is the best!

  console.log(`Transformed by: ${fn.name} `); //     Transformed by: upperFirstWord
};
transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord); //  function has oneWord(Call-back) function ...

//

//[------------ : Js Uses callbacks all the time :--------]
// Advantages of call back :== 1) Call back func allow us to create abstraction
//

// 2)===        It makes it easy to split up our code into more reusable & interconnected parts
const high5 = function () {
  console.log("😡");
};
document.body.addEventListener("click", high5);
//    HigherOrderFunc......            CallBack func...
["Hassan", "Martha", "Adam"].forEach(high5); //   3 😡
*/

/*
//------------------------------  :  FUNCTIONS RETURNING FUNCTIONS  : --------------------===================/
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Muhammad");
greeterHey("Hassan");

greet("hello")("Hassan");

// ------------- : Challenge : ------------------------====
// ONe Arrow Func.. Returning another Arrow Function ...
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Muhammad Hassan");

// const greetes = greetArr("Hi");
// greetes("Wali"); //            Hi Wali
// greetes("Shah"); //            Hi Shah

// greetArr("King")("kONG");//   King kONG
//  ------------------------------  :  Chapter End : --------------------
*/

//

/*
// 0-------------------: THE CALL AND APPLY METHODS ; ------------------------------======== //
// Function methods  ARE:    1) call()   , 2) apply()  ,  3) bind()
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // Enhanced Object Litteral sYntax :------------------
  book(flightNum, name) {
    console.log(
      `${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
  //-----------------------
};
lufthansa.book(2003, "Muhammad Hassan");
lufthansa.book(100, "Ahsan Ahmed");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Cake");   does not work ,...

console.log(`==------------- : CALL METHOD : -------------==`);
// Call method : == First argument is exactly what we want the this keyword to point to ...
book.call(eurowings, 23, "Muhammad Hassan");
book.call(eurowings, 33, "Kirmani Shah");
console.log(eurowings);

book.call(lufthansa, 200, "Wali Hassan");
console.log(lufthansa);

const swiss = {
  airline: "Swiss air Lines",
  iataCode: "Lx",
  bookings: [],
};
book.call(swiss, 583, "Muhammad Ali");
console.log(swiss);

// //  Apply Method : --  Apply does-not recieve a list of arguments after the this Key word instead it takes an array of arguments ..  Same to Call method  ..
const flightData = [583, "Tonny Kakar"];
// book.apply(swiss, flightData);
console.log(swiss);

//  But this Does Not Used Now A days ,....  Infect this below is used Now :: --
book.call(swiss, ...flightData);

// console.log(`====--------- :  BIND METHOD  : -----------====`);
// ---------------------- :      BIND METHOD     : ------------------------------------=========//
const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(30, "Saad Rana");
bookLM(15, "Boom Boom");
// Parshell Aplication :: ----------
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Muhammad Hassan");
bookEW23("DJ Ahsan");

console.log(`==---------- With : EVENT LISTENERS : ----------==`);
//-- With Event Listeners ----------------===
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();           //        bind returns a new function ...
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// ------ : Partial Application  : ---- : Partial app Means that we Can preset ParaMeters ...
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //           220

const addVAT = addTax.bind(null, 0.23); //   0.23 + 0.23 * 0 =   0.23
// const addVat =  value => value + value * rate ;

console.log(addVAT(100)); //  100 + 100 * 0.23 =     123
console.log(addVAT(23)); //    23 + 23 * 0.23  =     28.29

// ========----------------  :     CHALLENGE    : -----------------------===========  /
// do the same withOut using Bind method : ----====
// const addTaxRate = (rate) => (value) => value + value * rate;

// // The  resulting func who takes in the value ...(Hint)
// const addVax2 = addTaxRate(0.23);
// console.log(addVax2(100));
// console.log(addVax2(23));

const addtaxRate = function (rate) {  //      0.5
  return function (value) {    
    return value + value * rate;
  };
};
const addVAT2 = addtaxRate(0.5);
console.log(addVAT2(50));
console.log(addVAT2(70));
*/

//

/*
//  ---------------------- :  CHALLENGE  # 1  :  ----------------------------------------==
const poll = {
  question: "What is your favourite Programming language ?",
  options: ["0: Javascript", "1: Python", "2: Java", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer :
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          "\n"
        )} \n (Write option number)`
      )
    );
    // console.log(answer);

    // Register Answer : ---
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(`${this.answers}`);
    } else if (type === "string") {
      //  Poll results are 13,2,4  ..
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const answerBtn = document.querySelector(".poll");

answerBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
//  [5, 2, 3]
//  [1, 5, 3, 9, 6, 1]
*/

//

/*
// -----------------   :  IMMEDITELY INVOKED FUNCTION EXPRESSIONS (IIFE) : --------------------==/
//  We need a function that will be execuited at once and never again :   SO  , a function  that disappears write after its called once ..

const runOnce = function () {
  console.log("This will never run again.");
};
runOnce();

// This Patteran is called immideately invoked function expression ...(IIFE)
(function () {
  console.log("This will never run again.");
  const isPrivate = 23;
  //       ...  Scope chain anly works the other way around ... All data defined inside a scope is PRIVATE  (Data is INCAPSOLATED)    ( iMp)
})(); //   ...   This will never run again.

(() => console.log("This will Also never run again."))();

// variables decleared with let , const  create their own scope insude a block..

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
console.log(notPrivate);

//  if You realy need is to execute a function just once (IIFE) IS STILL the way to go in modrenJs
*/
//

/*
//  ----------------------  :      CLOSURES      :  -----------------------------------------== /
// A closure is not a feature that we explesitely use , so we dont create closures meanualy , Closure simpley happens automatically in certain situation .. which is need to recognize those situations ...

//  CLOSURE : VE attached to the func exactly as it was at the time and place the func was created /  : 
==
const secureBooking = function () {
  let passengerCount = 0;
  // birth place of this func is secureBooking
  // A func doesNot loose connection to variables that exsisted at the function birth place..
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// booker func has excess to passenger count variable
const booker = secureBooking();
booker(); //   1 passengers
booker(); //   2 passengers
booker(); //   3 passengers

console.dir(booker);

// 1)_ Seckret of Closure :-- ANY func always was excess to the variable envourment of the excution context in which the func was created .. even after that execution context is gone ..

// 2)_  (less formal) : A Closure gives a function access to all the variable of its parent function ,even after the parent function has returned. The function keeps a reference to its outer scope , which preserves the scope chain throughout time ..

// 3)_ (less formal) : A closure makes sure that a function doesn't loose connection to variable that exsisted at the function's birth place ..  it remember the variables even after the birth is gone ...

// 4)_ (less formal) : A closure is like a backpack that a function carries around whenever it goes. This backpack has all the variables  that were present in the environment where the func was created ..

// ----: A closure is not a tangible Js object   : = We donot have mutually created closures ../ ..  We cannot evev access closed-over variables explicitly .../
*/

//

/*
// --------------------- :    MORE CLOSURE EXAMPLES    : ----------------------------------=====/
// Example # 1 : ----
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// re-assigned ..f function
h();
f();
console.dir(f);

// Example : 2  : --------
const boardPassengers = function (n, Wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    // :  IIFE
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups ,each with ${perGroup} passengers`);
  }, Wait * 1000); // takes 3 sec to run the func ... 

  console.log(`will start boarding in ${Wait} seconds`);
};
//  The closure even has priourity over the scope chain : ---  first the perGroup in the funtion is used , if it's not then Global perGroup will be used : ---

const perGroup = 1000;
boardPassengers(180, 3);
*/

//

// --------------------------===  :   CHALLENGE No # 2   : =====-------------------------------------/
// (function () {
// Now this variable is gone .. /   header is in the backpack of the below func..

//  Even , The envournment which this func here was created is already gone , it is still able to excess the variables that were created in that variable by the time , function was born ...
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

//  challenge  2 : --
///         ------------------   :  IIFE  :  ---------------------------------
let blue;

(function () {
  const header = document.querySelector("h1");
  header.style.color = "yellow";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

//  ------------------   : REVISION  : CHALLENGE  1 : ------------------------  ------------  ///

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   planes: 0,
//   // Enhanced Object Litteral sYntax :------------------
//   book(flightNum, name) {
//     console.log(
//       `${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
//   //-----------------------
// };
// // console.log(lufthansa);

// const book = lufthansa.book;

// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();           //        bind returns a new function ...
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //  --------------------   : Challenge : 1  : --------------------------------------   //
// const poll = {
//   question: "What is your favourite Programming language ?",
//   options: ["0: Javascript", "1: Python", "2: Java", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // 1
//     const answer = Number(
//       prompt(
//         `${poll.question} \n  ${poll.options.join(
//           "\n" //  new line : ---
//         )} \n (Write option number)`
//       )
//     );
//     // console.log(questions);
//     // 2 :
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// // poll.registerNewAnswer();
// // bonus  :  ----
// // poll.displayResults.call({ answers: [5, 3, 2] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
