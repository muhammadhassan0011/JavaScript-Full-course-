"use strick";
/*
// How js Works  BEHIND the Seen .../
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    //Hassan are 20, born in 2003
    console.log(output);
    // inner Scope ../ Child scope
    if (birthYear >= 2003 && birthYear <= 2003) {
      var Muslim = true;
      //  CreatingNew Variable with sAMe name as outer scope's variable :)
      const firstName = "WALI";

      // REassigning outer scope's variable :
      const str = `OH, you are Muslim, ${firstName}`;
      // const / let are block scoped so console dont work outside the scope ../
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "New Output!";
    }
    console.log(Muslim);
    console.log(output);
    // console.log(str); //  don't work here ..
    // This will be found CUZ this isn't block scoped , are function scoper ../
  }
  printAge();

  return age;
}

const firstName = "Hassan";
calcAge(2003);
*/

//------------------------------------------==================================/

/*
// ------------------------- 9 HOISTING & TDZ in PRactice ---------------------=====/
// hoisting with variables ../
console.log(me); // undefined ...
// console.log(job);
// console.log(year);

var me = "hassan";
let job = "teacher";
const year = 2003;

// Any variable decleared with  var will be hoisted and set to (undefined) ../
//  ... with FUNCTION ../
console.log(addDecl(2, 3)); // 5  / so we are able to call the function declearation before it was defined in the code .. /
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // undfined../

//  EXAMPLE ----------------/
if (!numProducts) deleteShopCart(); // All products deleted ..

var numProducts = 10;

function deleteShopCart() {
  console.log("All products deleted ..");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); //error
console.log(z === window.z); //error
*/

//----------------------------------------------------0============================/

/*
//-----------------------------  THE THIS KEYWORD  ------------==================/
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined ../
};
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  // arrow function doen't get his own this keyword../ usses  the LIXICAL this keyword .../  (window)
  console.log(2023 - birthYear);
  // console.log(this);
};
calcAgeArrow(2007);

//------------------

const hassan = {
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year); //  ans 1: 34   & //  ans) ..37 - ..17 = 20
  },
};
hassan.calcAge();

const sister = {
  year: 2017,
};

sister.calcAge = hassan.calcAge;
//  the this keyword always points the object that is calling the method :) so Its dynamic and depends how function is called../ 
sister.calcAge(); //

const f = hassan.calcAge;
f();
*/

//-----------------------------------------------------===================================//
/*
// ------------------------Regular Function vs Arrow Function ---------------------------//
const hassan = {
  firstName: "Hassan",
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year); //  ans 1: 34   & //  ans) ..37 - ..17 = 20

    // ------ Solution 1
    // const self = this;
    // const isMuslim = function () {
    //   console.log(self);
    //   console.log(self.year >= 2000 && self.year <= 2006);  // true
    //   // console.log(this.year >= 2000 && this.year <= 2006);  // false
    // };

    //----- Solution 2
    const isMuslim = () => {
      console.log(this);
      console.log(this.year >= 2000 && this.year <= 2006); // true
      // console.log(this.year >= 2000 && this.year <= 2006);  // false
    };
    isMuslim(); // rule says: inside a regular function call , the this keyword must me undefined ../
  },

  great: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // Hey undefined .../
  },
};
hassan.great(); // Hey undefined  // Arrow function does not get its own keyword ../
hassan.calcAge();

//  -------         -  Arguments  Keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8, 12);

var addArrow = (a, b) => {
  return a + b;
};
addArrow(2, 5, 6, 8);
*/

// ---------------------------------------------==============================/

/*
//---------------------PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)  ------------=====/
// premetives are numbers , strings , boleans  etc ...

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: "Hassan",
  age: 20,
};
const friend = me;
friend.age = 27;
console.log("friend", friend);
console.log("Me", me);
*/

/*
//       ---------------------------    PRIMITIVES VS OBJECTS in PRACTICE -------------//
//Premitive types
let lastName = "Muhammad";
let oldLastName = lastName; // Muhammad
lastName = "Hassan"; //  Hassan
// console.log(lastName, oldLastName);

// Reference type ... /
const aysha = {
  firstName: "Syeda",
  lastName: "Aysha",
  age: 27,
};
const marriedAysha = aysha;
marriedAysha.lastName = "Rimsha";
console.log("Before Marrige", aysha);
console.log("After marriage", marriedAysha);
// so if we change property on marriedAysha it will also change on aysha itself ../

//==================================================
// Coping OBJECTs .../
const aysha2 = {
  firstName: "Syeda",
  lastName: "Aysha",
  age: 27,
  family: ["Hassan", "Wali", "Ahsan"],
};
const ayshaCopy = Object.assign({}, aysha2); // Object.assign only creates shalow copy not a deep clone . shalow copy:) only copy the properties in the first level / Deep clone : will copy everything ../
ayshaCopy.lastName = "Sufia";

ayshaCopy.family.push("Marry");
ayshaCopy.family.push("booby");

console.log("Before marriage", aysha2);
console.log("After marriage", ayshaCopy);
*/
