"use strick";
/*
//  ----------------------------  :    SIMPLE ARRAY METHODS     :   -------------------------------=/
// Methods are simpley functions that we can call on objects  (func attached to Objects)

// =====-------------- :  REVISIION  OF (ARRAY METHODS)  :    ------------------------------------====

//   SLICE   ----    this method does not mutate/Change the array
let arr = ["a", "b", "c", "d", "e"];
// do not count by index in array methods
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //                'e' wil not be includes
console.log(arr.slice(0, 1)); //                  first element
console.log(arr.slice(-1)); //                  last el
console.log(arr.slice(1, -2)); //              ['b', 'c']
console.log(arr.slice()); //                   ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //                     ['a', 'b', 'c', 'd', 'e']

//  SPLICE
console.log(`==-------------------    : SPLICE :   -------------------==`);
// Work same as slice ,but does actually change the original Array ...  IT takes part of the array and returns it and then the original array itself loses this part that was extracted ...
// console.log(arr.splice(2));
arr.splice(-1); //                  ['a', 'b', 'c', 'd']
arr.splice(1, 2); //                b , c are deleted   /        position 1 & del two elements
console.log(arr); //                        ['a', 'd'] -

console.log(`----------------------- :  REVERSE  : ---------------------==`);
//  REVERSE ---   this method does mutate/Change the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); //                ['f', 'g', 'h', 'i', 'j']

console.log(`----------------------  :  CONSAT  :  ----------------------==`);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters); //                        ['a', 'b', 'c', 'd', 'e', 'j', 'g', 'h', 'i', 'j']
console.log(...arr, ...arr2); //                  a b c d e j g h i j
//  Both of these :---  give us same result and does not mutate/Change array

console.log(`----------------------  : JOIN  : ---------------------------==`);
//   JOIN
console.log(letters.join(" ")); //             a b c d e j g h i j
*/

//
/*
// //////////////////  ---------------------------     : THE NEW AT METHOD   :   -------------------------=----===///////////////////////
// AT method  : is prefect for method chaining :  to get  any type of element of [array / String]
const arr = [23, 11, 64];
console.log(arr[0]); //                    23
console.log(arr.at(0)); //                 23

console.log(arr[arr.length - 1]); //    to get last element of array   /  64
console.log(arr.slice(-1).join()); //              64
console.log(arr.slice(-1)[0]); //                  64
// more convienent way   ---------------------=== :
console.log(arr.at(-1)); //                        64

console.log("Hassan".at(0)); //                     H
console.log("Hassan".at(-1)); //                    n
*/

//

/*
//////////////////// ====---------------------- :    LOOPING ARRAYS : FOREACH     : -----------------------===//////////////////////////////////////////

// by USING for of :  -----------  :: Order of arguments does  matters the most ::----

// BOTH (for of) & (forEach) works as a same   :

// for (const movement of movements) {

const movements = [200, 450, 400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) { //  index ,  element 
  // it will return an array of arrays ---
  if (movement > 0) {
    console.log(`Movement ${i} : You deposited ${movement}`);
  } else {
    //  Math.abs() to  take the absolte value --- & REMOVES the SIGN :
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
//  NOW BY USING : --------------- :    forEach    : -------------- :
// forEach :--  is a higher order function & requires a call back function  ...

//  it loop over the array & in each ideration it will execute this callback function & also it will pass in the current element of the array as argument  :--------------------
//
//
// (FOREACH) : it passes in the element & index & current array that we are looping  ... //  -----------  :: Order of arguments doesn't matters  ::----
console.log(
  `---------------------------    : ForEach :    -----------------------------`
);
movements.forEach(function (mov, i, arr) {
  //                Elements , Index , & Current Array  ----

  if (mov > 0) {
    console.log(`Movement ${i + 1} : You deposited ${mov}`);
  } else {
    //  Math.abs() to  take the absolte value --- & REMOVES the SIGN :
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
  }
});
//  We tell forEach that in each ideration it should lock one of these two strings here to cl()

// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function(3000)
//  and so on  --------   :

//  DIFFERENCE OF (for of  & forEach)  : ----------------------
//  The [continue & break] statement donot work in  (forEach loop) / always loop over the    entire array

//  If you want to [ Break out ] of a loop then  you have to keep Using (FOR OF) Loop ...
*/

//

/*
///////////////////////  ====------------------------  :  FOREACH WITH MAPS AND SETS    : -------------------====/////////////////////////////
//        ----------------- ::  for each working With (MAPS & SETS)   :: ------------
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "RS"]);
console.log(currenciesUnique); //            {'USD', 'GBP', 'EUR', 'RS'}

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`); // So key is same as value ... But the ...
});
*/

//

/*
//  //////////////////////-------------------  : CHALLENGE # 1 :   ------------------------------------------==7////////////////////////////////////
const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogJulia, dogKate) {
  // 1)  create Shallow_copy of Jullia array, /  remove (first ,last 2 elements)..
  const dogJuliaCorrected = dogJulia.slice(1, 3);
  console.log(dogJuliaCorrected); //     [5, 2]

  //  2)  Create array of Both Julia & Kate Dogs together ...
  const dogs = dogJuliaCorrected.concat(dogKate); //  ... (OR)  ....
  //   const dogs = [...Julia, ...Kate];
  console.log(dogs); //           [3, 5, 2, 12, 7, 4, 1, 15, 8, 3]

  //  3)  log the puppy to the console
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult , and is ${age} years old 🐕`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 😞`);
    }
  });
};
checkDogs(Julia, Kate);
// Dog number 1 is an adult , and is 5 years old 🐕
// Dog number 2 is still a puppy 😞
// Dog number 3 is an adult , and is 4 years old 🐕
// Dog number 4 is still a puppy 😞
// Dog number 5 is an adult , and is 15 years old 🐕
// Dog number 6 is an adult , and is 8 years old 🐕
// Dog number 7 is an adult , and is 3 years old 🐕
*/

//

/*
////////////////  ------------------  :  DATA TRANSFORMATION : MAP , FILTER , REDUCE  : -------------------------------------------==/.////////////////////
//  MAP : returns a new array containing the results of appying an an operation on all original array elements ...  / Creates a brand new array based on the original array ..

// FILTER : returns a new array containing the array elements that pased a specified test condition ... / elements for which the condition is true will be included in a new array that filter method returns and all other elements are filtered out ... So not included in new array

// REDUCE : Boils ("reduce") all the array elements down to one single value  (e.g : adding all elements together)


////////////////////////////  ------------------------      : MAP  METHOD :       ----------------------------------------//////////////////////////////// ////
//  MAP : returns a new array containing the results of appying an an operation on all original array elements ...  / Creates a brand new array based on the original array ..

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//  This is functional programing ...

// const movementsToUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsToUsd = movements.map((mov) => mov * eurToUsd);

console.log(movements); ///    [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsToUsd);

// const movementsToUsdfor = [];
// for (const mov of movements) {
//   movementsToUsdfor.push(mov * eurToUsd);
//   console.log(movementsToUsdfor);
// }

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrawal"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
//  [
//    "Movement 1 : You deposited 200",
//    "Movement 2 : You deposited 450",
//    "Movement 3 : You withdrawal 400",
//    "Movement 4 : You deposited 3000",
//    "Movement 5 : You withdrawal 650",
//    "Movement 6 : You withdrawal 130",
//    "Movement 7 : You deposited 70",
//    "Movement 8 : You deposited 1300",
//  ];
*/

//

/*
//////////////// ------------------------    ==:     FILTER METHOD     :== ----------------------------------------------------------- ------------- ///////////////
/ FILTER : returns a new array containing the array elements that pased a specified test condition ... / elements for which the condition is true will be included in a new array that filter method returns and all other elements are filtered out ... So not included in new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); //        [200, 450, 3000, 70, 1300]

//  Now By using FOR OF Loop ..
const deposits1 = [];
for (const mov of movements) {
  if (mov > 0) deposits1.push(mov);
}
console.log(deposits1); //      [200, 450, 3000, 70, 1300]

// filter with arrow func ...  => this will also return ...
const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal); //     [-400, -650, -130]
*/

//

/*
////////////  -----------------------------------------     :  REDUCE METHOD   : -----------------------------------------------  /////////////////////////
// REDUCE : Boils ("reduce") all the array elements down to one single value  (e.g : adding all elements together) ....  Call-back function of reduce method the first parameter is accumulator.. is like a snowball that keeps accumulating the value that we want to return ...

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// accmulator => SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc} `);
//   return acc + cur;
// }, 0);

// by using arrow func ...
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); //     3840

// Doing the same thing with for of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); //   840

// to get Maximium value of the movements array ...
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); //    3000
*/

//

/*
/////////----------------------------------      ===: CHALLENGE # 2 :===   ---------------------------------------///////////////////
const Age1 = [5, 2, 4, 1, 15, 8, 3];
const Age2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAges.filter((dogAdlt) => dogAdlt >= 18);
  // const average =
  //   adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  const average = adultDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // CALCULATING THE AVERAGE ...  OF 2 , 3     Solving Below...
  // ===  (2 + 3) / 2  = 2.5        / OR /       2/2 + 2/3 = 2.5

  console.log(humanAges);
  console.log(adultDogs);
  console.log(average);
};
const avg1 = calcAverageHumanAge(Age1);
// [36, 4, 32, 2, 76, 48, 28]
// [36, 32, 76, 48, 28]
// 44
const avg2 = calcAverageHumanAge(Age2);
// [80, 40, 56, 36, 40, 2, 32]
//  [80, 40, 56, 36, 40, 32]
//  47.333333333333336
*/

//

/*
/////////////////////  -------------------------== : THE MAGIC OF CHAINING METHODS  : -----------------------===/////////////////////////
// We can only Chain a Method After anOther one if the first one returns an array .. Facts of Chaining ::  1) We should not overUse Chaining and try to optumize it Cuz Chaining tones of methods one after the other an cause real performance issues if we had really huge arrays ... 2) It is Bad Practice in Javacript to Chain Methods that mutate the underline original array... like (SPLICE METHOD) OR (REVERCE METHOD) in Large Scale Application...

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
//  PIPE=LINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })

  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); //  5522.000000000001
*/

/*
//////////////////////  -----------------------------------  :   CHALLENGE # 3   : ------------------------------------------- ////////////////////////////////////////
// PERFORM THE CHALLENGE # 2 BY USING ARROW FUNC...  CHAINING ....
const Age1 = [5, 2, 4, 1, 15, 8, 3];
const Age2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const humanAges = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((dogAdlt) => dogAdlt >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(humanAges);
};
const avg1 = calcAverageHumanAge(Age1);
const avg2 = calcAverageHumanAge(Age2);
*/

//

//==-///////////////////////////////////////////////////////////////////////////////////////////////////////////// :   PROJECT : "BANKLIST" APP   : /////////////////////////---== /
// Data : ------
const account1 = {
  owner: "Muhammad Hassan",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Ahsan Ahmed",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Wali Shah",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Hussain Hassan",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
//    now , Lets do DOMMANUPLATION : --------------
const displayMovements = function (movements, sort = false) {
  // containerMovements.innerHTML = "";
  // Create Copy with a Slice Method ...
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //   ----  CallBack func...
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
              <div class="movements-div">
             <p class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</p>
              </div>
              <p class="movements__value">${mov} €</p>
            </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//  Calculate the Deposit & Withdrawal and add them to the Balance_value
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// .... DISPLAY SUMMERY ....
const calcDisplaySummary = function (acc) {
  // calc all deposits and add them to display:-- IN
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} €`;

  // calc all withdrawls and add them to display:-- OUT
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outResult = `${Math.abs(out)} €`;
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
  labelSumInvest.textContent = `${intrest} €`;
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

// ... EVENT HANDLERS ...
let currentAcc;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from Submitting ...
  e.preventDefault();

  //  main point ==>
  currentAcc = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAcc);
  // using optional chaining ?
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // display UI and WELCOME message ...
    labelWelcome.textContent = `Welcome back, ${
      //  welcome message
      currentAcc.owner.split(" ")[0]
    } !`;
    containerApp.style.opacity = 100; // To display App ...

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

  const amount = Number(inputTransferAccount.value);
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

    //  Update UI ...
    updateUI(currentAcc);
  }
});

// LOAN BTN == RULE : Bank only grants Loan if there is at least one deposit of the 10% of the requested Loan amount ... / ... if there is any deposit greater or equal 10% of the requested amount of loan ...

// ... when ever we see ( any ) it means there is a good useCase of (SOME METHOD) ...
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcc.movements.some((mov) => mov >= amount * 0.1)) {
    // ... 0.1 stands of 10% ... some is perfect to test someThing

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
    Number(inputClosePin.value) === currentAcc.pin
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

  displayMovements(currentAcc.movements, !sorted); // !sorted = True
  sorted = !sorted;
});

//////////////////////////////////////////////////////////// Banklist  //////////////////APP   /////////////////////////////////////////////  ////////////// ///////////////////////////////////// END     /////////////////////////////////////////////////////////////

//

//

/*
//////////////////////// ------------------------------------   :  FIND METHOD  : -------------------------------------   ////////////////////////////////////////////
// We can use FIND METHOD to retrieve (get or bring something back from somewhere) one element of an array based on a condition --- ALso accepts the condition, CallBack func.. like other array methods ...
// (OR)......
//  ---/--- Returns the value of the first element in the array where predicate is true, and undefined otherwise.----/  BIT simular to Filter Method : difference ::==
// filter return all the elements that match the condition : WHILE :-  FIND only returns First one : --

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithrawal = movements.find((mov) => mov < 0);
console.log(firstWithrawal); //   -400

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Muhammad Hassan");
console.log(account); //   {owner: 'Muhammad Hassan', movements: Array(8), interestRate: 1.2, pin: 1111, username: 'mh'}

// CHALLENGE ---- (Now Do the Same By using FOR OF) loop ----
for (const acc of accounts) {
  if (acc.owner === "Muhammad Hassan") {
    console.log(acc); //   {owner: 'Muhammad Hassan', movements: Array(8), interestRate: 1.2, pin: 1111, username: 'mh'}
  }
}
// the goal of find method is to find one element ....
*/

//

////////////////////////////   -------------------------------   : THE FIND-INDEX METHOD  : ----------------------------------------------   /////////////////////////////////////////////
// FINDINDEX  : works the same as (find method)  , but it return the index of the found element and not the element itself ...

// Both (find , FindIndex) methods get also excess to the current index and the current entire array .///...  (find , FindIndex) were added to JS ES6 // not work in super old Browsers ...

//

/*
///////////////////////////    --------------------------------  : ( SOME & EVERY ) METHODS  : -------------------------------      ////////////////////////////////

//       -----------  : SOME MOTHOD  :  -----------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements); // true
//... this is ONLY for testing EQUALITY ...
console.log(movements.includes(-130)); // includes returns true if any value in an array is exactly equal to -130 ...  ,

//  ... Can specify CONDITION Also ...
console.log(movements.some((mov) => mov === -130)); //  true

const anyDeposits = movements.some((mov) => mov > 0);
const anyDeposits0 = movements.some((mov) => mov > 5000);
console.log(anyDeposits); // true
console.log(anyDeposits0); // false

//          -----------  :  EVERY METHOD  : --------------------
// EVERY : only return true if all of the elements in the array satisfy the condition that we passed in ...
// ... if every element passes the test in our callback func.. only then the EVERY method returns true

console.log(movements.every((mov) => mov > 0)); //           false
console.log(account4.movements.every((mov) => mov > 0)); //  true

// ... Sperate CALLBACK .../ (IMP) IN DONT REPEAT YOUR-Self /...
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); //  [200, 450, 3000, 70, 1300]
*/

//

/*
///////////////////// ---------------------------     : FLAT & FLATMAP :      ----------------------------------------------/////////////////////////////////
// Flat removes the nested array and flated the array ..
const arr = [[1, 2, 3], [4, 5, 6], 7, , 8];
console.log(arr.flat()); //   [1, 2, 3, 4, 5, 6, 7, 8]
const arrDrop = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDrop.flat(2)); // so , it goes to second level of nesting ...

const accountMovements = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(accountMovements);

//  ... FLATMAP ...
const accountMovements1 = accounts
  .flatMap((acc) => acc.movements) // ... FlatMap also does maping ...
  .reduce((acc, mov) => acc + mov, 0);
console.log(accountMovements);
console.log(accountMovements1);

// FlatMap also does one-Level deep and we cannot Changge it ....

*/

//

/*
////////////////////////////  -----------------------------------  SORTING ARRAY : --------------------------------  /////////////////////////////

// Sort also mutates the original array ..
const owners = ["Hassan", "Wali", "Ahsan", "Hussain"];
console.log(owners.sort());

// NUMBER
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// if we return someThing less then zero (< 0) , Then A will be before B .../ if (> 0) B will be before A ... /...  SORT THEM IN ASSENDING ORDER ,...
// return < 0,  A , B (Keep order)
// return > 0,  B , A (Switch order)

// ... ASSENDING ...
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); //  [-650, -400, -130, 70, 200, 450, 1300, 3000]

// ... DESENDING ...
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements); //   [3000, 1300, 450, 200, 70, -130, -400, -650]

// Sort method dont work  with an array of numbers and strungs
*/

//

/*
//////////////////////  -------------------------------------- :  MORE WAYS OF CREATING & FILLING ARRAYS  :  -------------------------  //////////////////////////////////

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

///// ... EMPTY ARRAY +  ----- ( FILL METHOD ) ------- /////

// Generating ARRAYS Programactically ... / Cannot use Methods in it  Except (FILL METHOD)
const x = new Array(7);
console.log(x);

// x.fill(1);    //  [1, 1, 1, 1, 1, 1, 1]     ..../ just used as slice metod ...
// x.fill(1, 3);    //  [empty × 3, 1, 1, 1, 1]

x.fill(1, 3, 5); //  [empty × 3, 1, 1, empty × 2]
arr.fill(23, 2, 6); // [1, 2, 23, 23, 23, 23, 7]
console.log(x);
console.log(arr);

/////////  -----------:  ARRAY.FROM  :---------  //////////
// x.fill(1);    //  [1, 1, 1, 1, 1, 1, 1]     ..../ just used as slice metod ..
const y = Array.from({ length: 7 }, () => 1); // same as shown above
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // this callBack func.. is exactly like Map Method ...
console.log(z);

//  secretNumber = Math.trunc(Math.random() * 100 + 1);
const hundredDiceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 100 + 1)
);
console.log(hundredDiceRolls);
// (100) [95, 1, 7, 39, 82, 63, 75, 8, 32, 89, 7, 63, 78, 91, 80, 64, 93, 74, 18, 32, 6, 99, 37, 77, 37, 56, 76, 52, 70, 88, 61, 84, 11, 69, 60, 49, 4, 52, 25, 29, 67, 70, 52, 24, 68, 4, 37, 32, 85, 18, 97, 37, 97, 72, 61, 73, 37, 32, 2, 12, 10, 44, 95, 55, 84, 29, 11, 100, 35, 59, 87, 80, 99, 99, 86, 69, 27, 38, 10, 100, 16, 30, 18, 86, 75, 93, 44, 16, 52, 20, 63, 43, 9, 3, 94, 65, 52, 73, 72, 63]

// REAL USECASE OF (ARRAY.FROM)
// Array.FROM is introduced in Js InOrder to create arrays from array like structures ...
// Iderables (Map , Sets , strings) should be converted into Real arrays using Array.FROM ..

// NOdeList: is like an ARRAY which contains the Selected elements ... doesn't have Most of the array methods like (Map or Reduce) ...
// WE Have to convert NodeList into an Array ... FOR THAT (ARRAY.FROM) is PERFECT ...

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
    // Converting the Row element to it's textContent and replacing the € to Nothing ...
  );
  console.log(movementsUI);

  //  ... (OR) ... This also creates New Array  ... but have to do maping seperatly ...
  // const movementsUI2 = [...document.querySelectorAll(".movements__value")];
  // console.log(movementsUI2);
});
*/

//

/*
/////////////////// --------------------------- :   WHICH ARRAY METHOD TO USE ?   :---------------------------  /////////////////////////////
 ----------- : TO mutate Original array : ----------: 
ADD TO ORIGINAL ARRAY : ---
 .push(end)  , unshift(start) ,  

 REMOVE FROM ORIGINAL :
 .pop(end) , .shift(start) , .splice(any)

 OTHERS :  reverse , .sort , .fill 

 
 ----------- : A NEW ARRAY    : -------------- 
COMPUTING FROM ORIGINAL :          FLATTENING THE ORIGINAL :
map(loop)                           .FLAT  ,  flatMap    

filter using condition :        PORTION OF ORIGINAL :       ADDING ORIGINAL TO OTHER : 
filter                          .slice                       .concat()


  ------------ : AN ARRAY INDEX  : ------------
  Based on Condition : INDEXOF  ,    Based ON test condition : FINDINDEX   

  AN ARRAY ELEMENT : 
  BASED ON TEST CONDITION :  FIND 
  
  -------------  : KNOW IF ARRAY INCLDES  -------------  
  Based on value :   
   includes  
*/

//

/*
/////////////////////    --------------------------------    : ARRAY METHODS PRACTICE : --------------------------   //////////////////////////////////////

// 1) = Calculate how much money has been deposited in total in the bank : ---
// const bankDepositSum = accounts.map((mov) => mov.movements).flat();

const bankDepositSum = accounts
  .flatMap((mov) => mov.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum); // 25180

// 2) Count How many deposits, there have been in the bank with atleast 1000 EUR
// const NumDeposits = accounts
//   .flatMap((mov) => mov.movements)
//   .filter((mov) => mov >= 1000).length;
// console.log(NumDeposits);

// NOW USING REDUCE ---
const NumDeposits1000 = accounts
  .flatMap((mov) => mov.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);   (instead we use):--
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(NumDeposits1000); //    6

let a = 10;
// console.log(a++); // 10   : the _++  operator does increment the value but it return the previous value ... WE use (PREFIX ++_)  operator ...
// console.log(a);   11
console.log(++a); // 11   :   THE Prefixed ++ operator

// 3) : Create a new OBJECT instead of just a number or a String : ---

// -- : CREATE an object which contains the sum of the deposits & withdrawals using the (reduce method) // SO calculate these two sums all at the same time all in one goal ...

//

const { deposits, withdrawals } = (sum2 = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (sums, mov) => {
      sums[mov > 0 ? "deposits" : "withdrawals"] += mov;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  ));
console.log(deposits, withdrawals);
console.log(sum2);

// 4) :  Create a simple function to convert any string to a title-Case  :---

// TITLE-CASE means that all the words in a sentence are capitalized except for some of them ===  LIKE : ---- (this is a nice title => This Is a Nice Title )  ----
const convertTitleCase = function (title) {
  const expections = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];

  const capitalized = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return capitalized(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a Long title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
// This Is a Nice Title
//  This Is a Long Title but Not Too Long
//   And Here Is Another Title with an Example

// -------  :  Rveise  :  ------------
// 4) :  Create a simple function to convert any string to a title-Case  :---
console.log(`----------------  :   Revise  :  --------------------  : `);

// const convertTitleCase1 = function (title) {
//   const expections1 = ["and", "to", "play", "in", "much", "eat", "is", "likes"];
//   const toUppercase = (str) => str[0].toUpperCase() + str.slice(1);
//   const titleCase1 = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       expections1.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(" ");

//   return toUppercase(titleCase1);
// };
// console.log(convertTitleCase1("king LiKes To EaT Banana So MucH"));
// console.log(convertTitleCase1("and hussain LiKes To Play FreeFire"));
// console.log(convertTitleCase1("queen Is VeRy BeauTiful IN the WhoLe PaLaCe"));

console.log(
  `-------- : Create a new OBJECT instead of just a number or a String : ---------`
);
//-- : CREATE an object which contains the sum of the deposits & withdrawals using the (reduce method) // SO calculate these two sums all at the same time all in one goal ...

const account = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (sums, mov) => {
      sums[mov > 0 ? "deposits" : "withdrawals"] += mov;
      return sums;
    },
    {
      deposits: 0,
      withdrawals: 0,
    }
  );
console.log(account);

*/

//

/*
////////////////////////////// =  --------------------------   :  CHALLENGE # 4 : ----------------------------------------   = ///////////////////////////////////////
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// : 1 )
dogs.forEach(function (mov) {
  return (mov.recFood = Math.trunc(mov.weight ** 0.75 * 28));
});
console.log(dogs);

// : 2 )   FIND Sarah's dog : wheather its eating to much or too less :
const SarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(SarahDog);
console.log(
  `Sarah dog is eating ${
    SarahDog.curFood > SarahDog.recFood ? "Too Much" : "Too Less"
  }`
); //  Sarah dog is eating Too Much

// 3 )  So we are comparing the curFood to recFood  --
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch); //    ['Matilda', 'Sarah', 'John']

const ownersDogTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersDogTooLittle); //   ['Alice', 'Bob', 'Michael']

// 4 )  :
console.log(`"${ownersEatTooMuch.join(" ")}'s dogs eat too much !`);
console.log(`"${ownersDogTooLittle.join(" ")}'s dogs eat too Little !`);

// 5) : if dog is eating same amount of food then log true or false to console : --
// SOME METHOD RETURNS TRUE IF ONE OF THE ELELMENT in array SATISFIES THE CONDITION : ---

console.log(dogs.some((dog) => dog.curFood === dog.recFood)); //  false

// 6 ) Log To CONSOLE Wheather There is any Dog That is (eating OK amount of Food ): ---
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
//  {weight: 32, curFood: 340, owners: Array(1), recFood: 376}

// 7 ) Create an array of dogs that are eating OKAY Amount of food : --
const dogOkAmount = dogs.filter(checkEatingOkay);

console.log(dogOkAmount); //

// 8 ) Create a Shallow Copy of Dogs array sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's obect :-- )
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - a.curFood);
console.log(dogsCopy);
*/

//

//

//

//

//  ----------------------    : challenge # 1   :   REVISION  :  ----------------------  //
// Julia and  Kate _
//  1 :--
// const juliadogs = [3, 5, 2, 12, 7];
// const katedogs = [4, 1, 15, 8, 3];
// const juliadogs2 = [9, 16, 6, 8, 3];
// const katedogs2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const copyJulia = dogsJulia.slice(1, 3);

//   //2  :
//   const collectedArray = copyJulia.concat(dogsKate);
//   // 3 :
//   console.log(collectedArray);
//   // 4 :
//   collectedArray.forEach(function (mov, i) {
//     if (mov >= 3) {
//       console.log(`Dog number ${i + 1} is an Adult and is ${mov} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy `);
//     }
//   });
// };
// checkDogs(juliadogs2, katedogs2);

//

// -------------------------------- : Challenge : 2 ---------------------------------  //
// const dogsAges = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageAge = function (ages) {
//   // 1
//   const avghuman = ages.map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4));
//   console.log(avghuman); // [36, 4, 32, 2, 76, 48, 28]
//   // 2
//   const lessDogs = avghuman.filter((dog) => dog >= 18);
//   console.log(lessDogs); //  [36, 32, 76, 48, 28]
//   // 3
//   const calchumanAge = lessDogs.reduce(
//     (acc, dog , _) => acc + dog / lessDogs.length,
//     lessDogs[0]
//   );
//   console.log(calchumanAge);
// };
// calcAverageAge(dogsAges);
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////  :  CONVERTING  AND CHECKING  NUMBERS :  /////////////////

/*
/////////////////////////////// =  --------------------------   :  CHALLENGE # 4 : ----------------------------------------   = ///////////////////////////////////////
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// 1 :) --
dogs.forEach(function (mov) {
  return (mov.recFood = Math.trunc(mov.weight ** 0.75 * 28));
});
console.log(dogs);
// 2 :) --  FIND sarah dog
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog);
console.log(
  `Sarah dog is Eating too ${
    sarahDog.curFood > sarahDog.recFood ? "Much" : "Little"
  }`
);
//  3 : --
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);
// Eat Too Less : --
const ownersEatTooLess = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLess);

// 4 : ) --
console.log(
  `${ownersEatTooMuch.join(" ")} eat too Much AND ${ownersEatTooLess.join(
    " "
  )} eat too Less `
);
//  5 : if the dog is eating same amount of food as recFood --
console.log(`${dogs.some((dog) => dog.curFood === dog.recFood)}`);

//  6 : __)
console.log(
  `${dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )}`
);

const okDogsOwners = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(okDogsOwners));
// 7 : __ )
const okayFoodDogs = dogs.filter(okDogsOwners);
console.log(okayFoodDogs);
// 8 :  // split will mutate the array so we use slice  to create shallow  copy...
const copyDogs = dogs.slice().sort((a, b) => a.curFood - b.recFood);
console.log(copyDogs); // ... small to big ...
*/
