//==-///////////////////////////////////////////////////////////////////////////////////////////////////////////// :   PROJECT : "BANKLIST" APP   : /////////////////////////---== /

//   DIFFERENT DATA ! Create movement Dates , currency and locate ../////

//

//

//

////////// -------   :    Data    :   ------ //////////////////////////
const account1 = {
  owner: "Muhammad Hassan",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    "2022-10-21T21:01:11.118Z",
    "2022-10-24T07:19:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2024-02-20T10:11:59.604Z",
    "2024-02-21T17:01:17.194z",
    "2024-02-21T23:36:17.929Z",
    "2024-02-19T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "ur-PK",
};

const account2 = {
  owner: "Ahsan Ahmed",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2022-11-19T29:15:17.815Z",
    "2022-11-19T04:48:17.724Z",
    "2023-01-19T05:04:18.635Z",
    "2023-02-19T14:18:19.543Z",
    "2023-03-19T16:33:20.453Z",
    "2024-02-18T14:43:21.463Z",
    "2024-02-20T18:49:22.373Z",
    "2024-02-22T12:01:23.183Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const accounts = [account1, account2];

//   Elemensts  : ----------------
const labelWelcome = document.querySelector(".welcome");
const labelData = document.querySelector(".date");
const labelBalance = document.querySelector(".balance_value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInvest = document.querySelector(".summary__value--intrest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".input_user");
const inputLoginPin = document.querySelector(".input_pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAccount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//    -----------------   : CREATING DOM ELEMENTS   :  -----------------------------        /

//    now , Lets do DOMMANUPLATION :   ----- : function for Dates :   --------
const formatMovementDate = function (date, locale) {
  // new Date(acc.movementsDates[i]) : like this = Sat Oct 22 2022 02:01:11 GMT+0500  , currentAcc.locale :>
  const calcdaysPassed = (date1, date2) =>
    //  new Date  , new Date(acc.movementsDates[i]);
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); //  (date2 - date1) : gives us miliSeconds  / (1000 * 60 * 60 * 24)) to convert miliseconds into days __>
  // (1000 * 60 * 60 * 24)) converts them :==>  milisec to seconds /... minutes /... hours / ... days :>

  // ---- :  calculating how many days passed since the current date and the between the date we are working with  : -----
  const daysPassed = calcdaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday ";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); //this is zero based , so we will add 1
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date); // formation of date :
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  // Create Copy with a Slice Method ...
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  //   ----  CallBack func...
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    console.log(date);
    const displayDate = formatMovementDate(date, acc.locale); // to convert into real date :>
    console.log(displayDate);

    const html = `
    <div class="movements__row">
    <div class="movements-div">
      <p class="movements__type movements__type--${type}">${i + 1} ${type}</p>
         <p class="movements__date">${displayDate}</p>
              </div>
              <p class="movements__value">${mov.toFixed(2)} €</p>
            </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// console.log(1000 * 60 * 60 * 24);
// console.log(new Date(1000 * 60 * 60 * 24));

//  Calculate the Deposit & Withdrawal and add them to the Balance_value
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};
// .... DISPLAY SUMMERY ....
const calcDisplaySummary = function (acc) {
  // calc all deposits and add them to display:-- IN
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income.toFixed(2)} €`;

  // calc all withdrawls and add them to display:-- OUT
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outResult = `${Math.abs(out.toFixed(2))} €`;
  labelSumOut.textContent = outResult;

  // calc all deposits and * by 1.2% of bank-intrest
  const intrest = acc.movements
    .filter((mov) => mov > 0)
    // only if one intrest is atleast 1 then it will be added to Total..
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInvest.textContent = `${intrest.toFixed(2)} €`;
};

const CreateUserNames = function (acs) {
  acs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.slice(0, 1)) // to take first letter ...
      .join("");
  });
};
CreateUserNames(accounts);

//  Updated UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// ------ : FAKE ALWAYS LOGGED IN : === :  CURRENT BALANCE  : ===
// currentAcc = account1;
// updateUI(currentAcc);
// containerApp.style.opacity = 100; // display APP ---

//  day / month / year

// -------- : EXPERIMENTING WITH THE API : ------------- API Covers the code : ( 225 - 230 )
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // can also use :   2-digit    // "numeric",
  year: "numeric", // can also use :   2-digit
  weekday: "long",
};
const locale = navigator.language;
// console.log(locale);

labelData.textContent = new Intl.DateTimeFormat(
  // "ur-PK",
  locale,
  options
).format(now);
// all this creates a new formater and on that formater we can call format ---------- // USE ISO LANGUAGE CODE TABLE   to do this  ... .DateTimeFormat("en-US")  : API :
// ------------- :   API END   :  -----------------

let currentAcc;

// ... EVENT HANDLERS ...
btnLogin.addEventListener("click", function (e) {
  // Prevent form from Submitting ...
  e.preventDefault();

  currentAcc = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAcc);
  // using optional chaining ?
  if (currentAcc?.pin === +inputLoginPin.value) {
    // display UI and WELCOME message ...
    labelWelcome.textContent = `Welcome back, ${
      //  welcome message
      currentAcc.owner.split(" ")[0]
    } !`;
    containerApp.style.opacity = 100; // To display App ...

    // all this creates a new formater and on that formater we can call format ---------- // USE ISO LANGUAGE CODE TABLE   to do this  ... .DateTimeFormat("en-US")  : API :
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long", // can also use :   2-digit    // "numeric",
      year: "numeric", // can also use :   2-digit
      // weekday: "long",
    };
    // const locale = navigator.language;
    // console.log(locale);
    // ------------- :   API END   :  -----------------

    labelData.textContent = new Intl.DateTimeFormat(
      // "ur-PK",
      currentAcc.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // this is zero based , so we will add 1
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // `${day}/${month}/${year}, ${hour}:${min}`;

    // Claer Input Fields ...
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAcc);
  }
});

// ... TRANSFER MONEY ...
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault(); //  to prevent form .. reload delay ../

  const amount = +inputTransferAccount.value;
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAccount.value = inputTransferTo.value = ""; // To  clear  input field..

  if (
    amount > 0 &&
    recieverAcc &&
    currentAcc.balance >= amount &&
    recieverAcc?.username !== currentAcc.username // using ? to check if , exists ..
  ) {
    //  DONG THE TRANSFER ...
    currentAcc.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Add Transfer dates : --
    currentAcc.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    //  Update UI ...
    updateUI(currentAcc);
  }
});

// LOAN BTN == RULE : Bank only grants Loan if there is at least one deposit of the 10% of the requested Loan amount ... / ... if there is any deposit greater or equal 10% of the requested amount of loan ...

// ... when ever we see ( any ) it means there is a good useCase of (SOME METHOD) ...
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); //  to round value Down

  if (amount > 0 && currentAcc.movements.some((mov) => mov >= amount * 0.1)) {
    // ... 0.1 stands of 10% ... some is perfect to test someThing

    // Add loan  dates : --
    currentAcc.movementsDates.push(new Date().toISOString());

    // ADD the movement
    currentAcc.movements.push(amount);

    // Update UI
    updateUI(currentAcc);
  }
  inputLoanAmount.value = "";
});

// CLOSE BTN
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  //  ... Check if the credintials are correct ...
  if (
    inputCloseUsername.value === currentAcc.username &&
    +inputClosePin.value === currentAcc.pin
  ) {
    // return the index of the found element and not the element itself ...
    const index = accounts.findIndex(
      (acc) => acc.username === currentAcc.username
    );
    console.log(index);

    //   Delete Account ..
    accounts.splice(index, 1); // ... remove 1 element ...

    //  ... Hide UI ...
    containerApp.style.opacity = 0;

    // Clear input field ...
    inputCloseUsername.value = inputClosePin.value = "";
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAcc, !sorted); // !sorted = True
  sorted = !sorted;
});
//////////////////////////////////////////////////////////// Banklist  //////////////////APP   /////////////////////////////////////////////  ////////////// ///////////////////////////////////// END     ////////////////////

/////////////////////////////////  :  LECTURES : -------------- /////////////////////////////
/*
//  ---------------------   : CONVERTING AND CHECKING NUMBERS  : ------------------------ //
// Numbers are always stored in binary formate :
console.log(23 === 23.0);
// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// CONVERTING STRING TO NUMBER ---
console.log(Number("23")); // INSTEAD WE USE :
console.log(+"23");

// Parsing  : ----   Trys to get away from unnecessory symboles that are not Numbers --
console.log(Number.parseInt("30px", 10)); //  30
console.log(Number.parseInt("x23", 10)); //

// -======= Reades  the decimal number from the string  : ( MORE CONVINIENT )  ========
console.log(Number.parseInt("2.5rem")); //   2
console.log(Number.parseFloat("2.5rem")); //  2.5 // should be used (When ever you need to read a value out ofa string , ex : comming from CSS:())

//  used to CHECK IF VALUE  IS NOT A NUMBER :
console.log(Number.isNaN(20)); //  false
console.log(Number.isNaN("20")); //  false
console.log(Number.isNaN(+"20x")); // not a number will be true

console.log(Number.isNaN(20 / 0)); // INFINITY =  false

// ===== used to CHECK IF VALUE  IS  A NUMBER or NOT: ( MORE CONVINIENT )  ========
console.log(Number.isFinite(20)); // INFINITY =  true
console.log(Number.isFinite("20")); //  false
console.log(Number.isFinite(20 / 0)); //  false
console.log(Number.isFinite(+"20X")); //  false

console.log(Number.isInteger(20)); //  true
console.log(Number.isInteger(23.0)); //  true
console.log(Number.isInteger(23 / 0)); //  false
*/

//

/*
// -------------------------  : MATH AND ROUNDING  : -----------------------------------//u
// USED to to Take the SQUARE- ROOT :
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 2));

//  To get Maximium value of in more values  ---
console.log(Math.max(1, 2, 3, 4, 52, 33, 55)); //  55
console.log(Math.max(1, 2, "23", 4, 52, 33, 55)); //  55
console.log(Math.max(1, 2, "23x", 4, 52, 33, 55)); //  NaN

//  To get Minimium value of in more values  ---
console.log(Math.min(1, 2, 3, 4, 52, 33, 55)); //  1

// CALCULATE THE RADIUS OF CIRCLE with 10px
console.log(Math.PI * Number.parseFloat("10px") ** 2); //  314.1592653589793

// To get ramdom values :
console.log(Math.trunc(Math.random() * 6) + 1);

// ramdom INTEGERS BetwEEn Two Values --- :
const ramdomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // Math.floor works the same as trunc ... More convienient ..  also works with negative integers
// 0 ... 1 => 0 ... (max - min) => min...max
console.log(ramdomInt(10, 20));

//////// -----------------     ROUNDING INTEGERS    ---------------------------------- ////
console.log(`------------------  : ROUNDING INTEGERS : ----------------------`);
// all these method also do type conversion : ---
console.log(Math.trunc(23.3)); //  to remove any decimal part ---
console.log(Math.round(23.5));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.3));

//////// -----------------   :  ROUNDING decimals  :    ---------------------------------- ////
console.log((2.7).toFixed(0)); // always returns a string not a number
console.log((2.7).toFixed(3)); // always returns a string not a number
console.log((2.345).toFixed(2)); // always returns a string not a number
console.log(+(2.345).toFixed(2)); // + will convert a string to a number
*/

//

/*
//  ----------------------------  : THE REMAINDER OPERATOR ( % ) : ---------------------------- //
// REMAINDER OPERTOR simply return the remainder of a division : ===  %
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5   /  5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(10 % 7); // 2
console.log((8 / 3).toFixed(3)); //  8 = 2 * 3 + 2   == 2.667

//  checking if a Number is EVEN or ODD : ---
console.log(6 % 2); // 0 :  so it's ODD
console.log(7 % 2); // 1 :  so it's EVEN

// FUNCTION for checking if a Number is EVEN or ODD : ---
const isEven = (n) => n % 2 === 0;
console.log(isEven(22)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true

// NOTE:   WhenEver the result of the remainder operator is 0 , that means that first number is completely divisible by second one ...

//  function to change color of every second row of the movements  : --

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orange";
    // 0  2  4  6
    if (i % 3 === 0) row.style.backgroundColor = "pink";
    // 0  3  6  9
  });
});
*/

//

/*
///////////////////////////////////  ----------------------   :  NUMERIC SEPERATOR  ( _ ) :  ---------=====   ( NOT IMPORTANT)    //////////////////////////////////////////////////////
// TO FORMATE NUMBERS IN a WAY THAT IT IS EASIER FOR US OR THE OTHER DEVELOPERS TO READ & UNDERSTAND  : ==   ( _ )  But cant be used in the string ... 

const diameter = 287_460_000_000;
console.log(diameter);

const price = 343_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 15_00;
console.log(transferFee1, transferFee2);
// const PI = 2._1212;   (Not allowed)

console.log(Number("23_00")); // NaN
console.log(parseInt("23_00"));
*/
//

/*
/////////////////////////// ---------------------------------- :  WORKING WITH BIGINT  : --------------------------------------------  ///////////////////////////////////////////
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// Creating BigInt numbers :
console.log(12343445753333533348845555553323444n);
console.log(BigInt(5323444));

// Operations .....
console.log(10000000n + 100000n);
console.log(22278787879090122130n * 188233450n); //  420806946516804600446310845207632200n

const huge = 202343343343345663234013n;
const num = 23;
console.log(huge * BigInt(num));

// EXCEPTION
console.log(20n > 15); // true
console.log(20n === 15); // false
console.log(typeof 20n); // bigint
console.log(20n == "20"); // true

// logical operators are one exception and other exception are when we do string concatination  -----

console.log(huge + "is evry Big !!!");

// DIVISIONS
console.log(12n / 3n); // so it simpaly cuts the decimal parts off ---
console.log(10 / 3);
*/

//

//////////////////////////////////  ----------------------------  : CREATING DATES  :  ----------------------------------------------------   :  ////////////////////////////////////////

//   CREATE A DATE :
// const date = new Date();
// console.log(date);

// console.log(new Date("Sun Jan 14 2024 12:23:37")); //
// console.log(new Date("December 24, 2024")); //
// console.log(new Date("nov 28, 2015")); //
// console.log(new Date(account1.movementsDates[7]));
// console.log(new Date(account2.movementsDates[7]));

// console.log(new Date(2023, 0, 19, 23, 5, 23)); // year - month - date - hours : minutes : sec...
// // console.log(new Date(2023, 10, 31)); // year - month - date   / so JS will auto-Correct Date :

// // console.log(new Date(0)); //   Thu Jan 01 1970 05:00:00 GMT+0500
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //  SPICIAL TYPE OF OBJECTS :

//  WORKING with DATES : ----
// const future = new Date(2023, 10, 19, 15, 23);
// console.log(future); //                     Sun Nov 19 2023 23:00:00 GMT+0500
// console.log(future.getFullYear()); // never use (getYear)  --
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getDay());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // -- very useful when you want to convert the date in string --
// console.log(future.getTime());

// console.log(new Date(1700389380000)); // so we get the same DATE AS FUTURE --- Time Stamp --

// console.log(Date.now()); // TO get the time stamp of current DATE  ---
// future.setFullYear(2040);
// console.log(future); //   Mon Nov 19 2040 23:00:00 GMT+0500   / now years are changed ....

//

////////////////////////// z; ----------------------- :   OPERATIONS WITH DATES    : -------------------------------------------------  /////////////////////////////////////////

// const future = new Date(2023, 10, 19, 15, 23); // we can conveert a timestap into number to perform calculation on it
// console.log(Number(+future));

// //  Creating a function that takes in two dates and return the number of days that pass between these  two dates ------ //

// const calcdaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// //DIVIDING :: --  1000  to convert into : MILIsec.. TO seconds ,  60 to convert into minutes / 60 to convert into hours / 24 to convert into days ...
// const day1 = calcdaysPassed(new Date(2023, 3, 14), new Date(2023, 3, 23));
// console.log(day1);

// // ----------------------------------  :  INTERNATIONLiZATION NUMBERS (Intl)
// const num = 3884764.23;
// const option = {
//   style: "currency", //  THRE STYLES : ( unit__ , percent ,__ currency  also define the currency __)
//   unit: "mile-per-hour",
//   currency: "PKR",
//   // useGrouping: false,  for avoiding space
// };

// console.log("US:", new Intl.NumberFormat("en-US", option).format(num));
// console.log("GERMANY:", new Intl.NumberFormat("de-DE", option).format(num));
// console.log("Syeria:", new Intl.NumberFormat("ar-SY", option).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, option).format(num)
// );

/*
//////////////-------- ": TIMERS IN JS ::> SETTIMEOUT / SETINTERVAL "  -------------------------/////////////////
// SETTIMEOUT : runs just once after a defined time :
// SETINTERVAL : Keeps running forever until we stop it ...
// recieve a callback func...

// const ingredients = ["olives", "spinach"];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`my name is Muhammad Hassan ${ing1} and ${ing2}`),
//   2500, // selecting mili-seconds for setTimeout func...
//   // "olives",
//   // "spinach",
//   ...ingredients
// );
// console.log(`waiting...`);
// // code Execution wil be continues and doesnot stop ... setTimeout

// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
//  if the ingredients includes spinach then clearTimeout // we stored the result of the timeout func.. which is the pizzaTimer then we use it to clear the Timeout ... then we use use that variable to delete the timer SO we use (clearTimer)

// SO Implementing this TO the  BtnLoan  to PROVE the Loan in 3 sec...

//  __________   if we want to run a function over & over again ( every 5 or 10 minutes) then we use :  SETINTERVAL::===>

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
// ----- : CLOCK Challenge  : ----
const clock1 = setInterval(function () {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(`${hours}:${mins}:${seconds}`);
}, 1000);
console.log(clock1);

// Clock 2 :
const clock2 = setInterval(function () {
  const date = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  console.log(
    new Intl.DateTimeFormat(navigator.language, options).format(date)
  );
}, 1000);
console.log(clock2);
*/

//
