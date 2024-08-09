"use strick";
//  ----------    PART 7  (Data Structures , Modren Operators and Strings): -----------------==/

/*
///        -------------         ARRAY DESTRUCTURING   -------------------===  /
// Destructuring is to break a complex data structure down into a smaller data structure like variable --- /
//DESTRUCTURING :)  A way of unpacking values from an array or an object into seperate variables ... /

const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  startMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "Russia Salled"],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const [x, y, z] = arr; // destructuring ..
console.log(x, y, z); //  2, 3, 4

// const [first, Second] = resturant.categories;     // Italian  Vegetarian
// const [first, , Second] = resturant.categories; //  Italian Organic

let [main, secondary] = resturant.categories;
console.log(main, secondary);

// switching variables ...
// const temp = main; //  Italian
// main = secondary; //  Vegetarian
// secondary = temp;
// console.log(main, secondary);   //  Vegetarian  Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // same ans :)   Vegetarian  Italian

// Recieve 2 return values from a function ...
const [stater, mainCourse] = resturant.order(2, 0);
console.log(stater, mainCourse); //  Garlic Bread  Pizza

// one array inside another .. nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //  (2) [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); //  2 5 6

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);   // 8 9 1    and 1 will be default value ../ 
*/

/*
//=======-----------------------------------------------     Destructuring Objects     -------------------------------------------------========  //
const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  startMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "Russia Salled"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },

  // Defalt values ... (if not called then :--)
  orderedDelivery: function ({
    starterIndex = 1, // Seamon
    mainIndex = 0, // Pizza
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.startMenu[starterIndex]} and ${this.mainmenu[mainIndex]}  will be delivered ${address} at ${time}.`
    );
  },
};

resturant.orderedDelivery({
  time: "22:30",
  address: "near Lahore Hotel",
  starterIndex: 2, // Garlic Bread
  mainIndex: 2, // Cake
});

resturant.orderedDelivery({
  address: "near Lahore Hotel",
  starterIndex: 1,
}); // rder recieved Seamon and Pizza  will be delivered near Lahore Hotel at 20:00.

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: Hours,
  categories: tags,
} = resturant;

// Defualt Values ...
const { menu = [], startMenu: starter = [] } = resturant; // to set a default value ../
console.log(menu, starter);
//

// Mutating Variables  :
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a,b} = obj;  // this will get Unexpected token
({ a, b } = obj);
console.log(a, b); // 23 7
//

// Nested Objects ..../
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11  23
*/
/*
//--------------------------------------     THE SPREAD OPERATOR   ================--------------------------------------------// 
// SO we can use the spread operator whenever we would otherwise write multiple values seperated by commas,,
// the spread operator takes all the elements from the array and also doesn't create new variables
// advantages :   1) create shallow copies of arrays    2) to merge two arrays together.. 3)  to unpack elements into an array...

const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  starterMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "Russia Salled"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },

  // Defalt values ... (if not called then :--)
  orderedDelivery: function ({
    starterIndex = 1, // Seamon
    mainIndex = 0, // Pizza
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.startMenu[starterIndex]} and ${this.mainmenu[mainIndex]}  will be delivered ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //  [1, 2, 7, 8, 9]


const newArray = [1, 2, ...arr]; // [7, 8, 9] will be added ...
console.log(newArray);
console.log(...newArray); //   1 2 7 8 9

const newMenu = [...resturant.mainmenu, "Chineese"]; //  adds Chineese to the current element
console.log(newMenu);

const mainMenuCopy = [...resturant.mainmenu]; // simular to object.assign

//

// join two arrays together  CHALLENGE ....//

// function main1(starter, main) {
//   return [...starter, ...main];
// }
const starterMenu = ["Cold Drink", "Seamon", "Garlic Bread"];
const mainMenu = ["Pizza", "Pasta", "Cake", "Russia Salled"];
const main = [...starterMenu, ...mainMenu]; // both will added togethera', 'Pasta', 'Cake', 'Russia Salled']
console.log(main); // proved : ['Cold Drink', 'Seamon', 'Garlic Bread', 'Pizz

// or  (((())))

const menu = [...resturant.starterMenu, ...resturant.mainmenu];
console.log(menu); // proved : ['Cold Drink', 'Seamon', 'Garlic Bread', 'Pizza', 'Pasta', 'Cake', 'Russia Salled']   more convinent

// Iterables: arrays , strings , maps ,sets. Not Objects ../
// note : Multiple values seperated by a comma(,) are usual only expected when we pass argumnets into a function or when we build new array ../
const str = "hassan";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

//    Real World Example ...
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];
// // console.log(ingredients);
// resturant.orderPasta(...ingredients);

//-------------OBJECTS
const newResturant = {
  foundIn: 1998,
  ...resturant,
  founder: "Muhammad Hassan",
};
console.log(newResturant);

const resturantCopy = { ...resturant };
resturantCopy.name = "Pizza Hut";
console.log(resturant.name); //              Pizza Point
console.log(resturantCopy.name); //          Pizza Hut
*/

/*
// ========--------------------------------    REST PATTERN & PARAMETERS   -----------------=================================//
// To pack elements into an array // uses same syntax as Spread(...) to collect multiple elements , condence them  or pack them all into an array    // collect the elements that are unused in the destructuring assignment ...
// rest syntax collect all the array elements after the last variable and doesn't include any skipped elements , ,    rest element must be the last element/
const resturant1 = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  starterMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "RussianSalled"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },

  // Defalt values ... (if not called then :--)
  orderedDelivery: function ({
    starterIndex = 1, // Seamon
    mainIndex = 0, // Pizza
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.startMenu[starterIndex]} and ${this.mainmenu[mainIndex]}  will be delivered ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//   DESTRUCTURING :) 1

// Spred buz on the right side of the =
const arr = [1, 2, ...[3, 4]];

// REST buz on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

const [x, , y, ...otherfood] = [
  //  rest element must be the last element/
  ...resturant1.mainmenu,
  ...resturant1.starterMenu,
];
console.log(x, y, otherfood); // Pizza Cake  ['RussianSalled', 'Cold Drink', 'Seamon', 'Garlic Bread']

// Objects  example
const { sat, ...weekdays } = resturant1.openingHours;
console.log(weekdays); //   {thu: {…}, fri: {…}}

// 2) Fnctions  example
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
add(...x1); // 35

// orderPizza :
resturant1.orderPizza("mushrooms", "onions", "cheese", "ketchup", "Garlic");
// mushrooms   ['onions', 'cheese', 'ketchup', 'Garlic']
resturant1.orderPizza("mushroom");

//  the Spread & Rest syntax both looks exactly the same but work in oposite ways depending on where we used  , Spread OPERATOR is used where we would orhterwise write values seperated by a comma(,)  OTHERHAND   Rest Pattren is used where we would otherwise write variable names seperated by commas(,) Not VALES seperated by commas(,)

// ------------------------      SHORT CIRCUITING (&& AND ||)    ------------------------===/
const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  starterMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "RussianSalled"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },

  // Defalt values ... (if not called then :--)
  orderedDelivery: function ({
    starterIndex = 1, // Seamon
    mainIndex = 0, // Pizza
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.startMenu[starterIndex]} and ${this.mainmenu[mainIndex]}  will be delivered ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// LOGICAL OPERATORS :  Can use any data type, return Any Data type, and do Short-Circuiting

//             -----------                 ||          --------------------------======
console.log("------------------   ||   -------------------------");
console.log(3 || "hassan"); //  3
console.log("" || "hassan"); //  hassan
console.log(undefined || null); // null

console.log(undefined || 0 || "" || "hello" || 23 || null); // hello

// resturant.numGuests = 23;
const guests1 = resturant.numGuests ? resturant.numGuests : 10; // ans: 10
console.log(guests1);

const guests2 = resturant.numGuests || 10; // ans: 10
console.log(guests2);
console.log("/-------------------    &&   ---------------------/");

//----------------------------------        &&           --------------------------======
// && operator short-circuit when the first value is falsey , immidately returns that falsey value without evaluatimg the second operant// only true if all operants are true ..
console.log(0 && "Hassan"); // false
console.log(7 && "Wali"); // true
console.log(8 && "Wali"); // true

console.log("Hello" && 23 && null && "Jonas"); // contains false (null) , don't looks further...
if (resturant.orderPizza) {
  resturant.orderPizza("Mushroom", "Spinach");
}
//  (MORE CONVINENT WAY) we can say :
resturant.orderPizza && resturant.orderPizza("Mushroom", "spinash");

//  SUMERIZE :   || (operator) return first truthy value of all operants or otherwise last value if all are falsey
//  && (Operator) : return first falsey value or the last falsey value if all are true

//
console.log("---------:NULLISH Coalescing Operator:---------");
//----------------------- :    THE NULLISH Coalescing Operator  : ------------------=======//
//  Find value of 0   ...../
resturant.numGuests = 0;
const guests4 = resturant.numGuests || 10;
console.log(guests4);
//   THE NULLISH Coalescing Operator  : nullish values are null, undefined (NOT 0 or "")
const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect);

*/

/*
// ---------------------: CHALLENGE NO # 1   :-----------------------------============//
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Vegeta",
      "Wali",
      "Ahsan",
      "Lambu",
      "Dolly",
      "Shami",
      "Kami",
      "Momu",
      "Tomy",
      "kaka",
      "Chuza",
    ],
    [
      "Goku",
      "Kakarot",
      "Mobi",
      "Suno",
      "Gohan",
      "Goget",
      "Buu",
      "Motu",
      "Sasa",
      "Malu",
      "Chankana",
    ],
  ],
  score: "4:0",
  scored: ["Chuza", "Kami", "Lambu", "Ahsan"],
  date: "Aug 8th, 2003",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1)
// const player1 = game.players[0];
// const player2 = game.players[1];
const [player1, player2] = game.players;

// 2)
const [gk1, ...fieldplayers1] = player1;
const [gk2, ...fieldplayers2] = player2;

// 3 )
const allPlayers = [...player1, ...player2]; // (22 players)

// 4 )
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// players1Final.push("Thiago", "Coutinho", "Perisic");
console.log(players1Final);

// 5)
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1,draw,team2);  //  1.33 ,3.25, 6.5
//---------: (OR) :-----------------
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2); // 1.33 3.25 6.5

// 6)
const printGoals = function (...players) {
  console.log(`${players.length} goals are scored by ${players}`);
  // console.log(`${scored} scored the goals.`);
};
printGoals(...game.scored);

// 7 )
team1 < team2 && console.log(`Team1 is more likely to win.`);
team1 > team2 && console.log(`Team2 is more likely to win.`);
team1 === team2 && console.log(`Both team wins thw Match..`);
// 0----------------------:    Challenge Completed !   :---------------------=   /
*/

//[--------------------
/*
//   -----------------: LOOPING  ARRAY : THE FOR OFF LOOP------------------------------//
// ------------------------ : ENHANCED OBJECT LITERALS :------------------------------===/
const weekdays = ["Mon", "Thues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  starterMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "RussianSalled"],

  // ES6 ENHNCED OBJECT ITTERALS   ----------------
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainmenu[mainIndex]];
  },
  // ES6 ENHNCED OBJECT ITTERALS   ----------------
  // Defalt values ... (if not called then :--)
  orderedDelivery({
    starterIndex = 1, // Seamon
    mainIndex = 0, // Pizza
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.startMenu[starterIndex]} and ${this.mainmenu[mainIndex]}  will be delivered ${address} at ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...resturant.starterMenu, ...resturant.mainmenu];

for (const item of menu) {
  console.log(item);
}

// entries returns the index number and elements itself ..
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log(resturant);

console.log("----------------- OPTIONAL CHAINING(?) ----------");
//=======-------------------:  OPTIONAL CHAINING(?): -----------------------=============//
// The optional Chaining(?.) tests if the value on the left does exists ...
if (resturant.openingHours && resturant.openingHours.mon) {
  console.log(resturant.openingHours.mon.open);
}
//  With Optional Chaning   ------------------------===
console.log(resturant.openingHours.mon?.open);
console.log(resturant.openingHours?.mon?.open);
//--
const days = ["Mon", "Thues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

for (const day of days) {
  // ?. if open exists ...
  const open = resturant.openingHours[day]?.open ?? "closed"; // nullish colleshing
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(resturant.orderHassan?.(0, 1) ?? "Method doesn't exists..");
//  Method doesn't exists..

// Array :  use to check if an array is empty : ---  ?
const users = [
  { name: "Hassan", email: "hmo40016@gmail.com" }, // --- hmo40016@gmail.com ---
  { gmail: "kingjoker", pass: "donkeyraja" },
];
console.log(users[0]?.email ?? "dont exists");
console.log(users[1]?.gmail ?? "User array empty");

console.log(
  "------: LOOPING OBJECT5: OBJECT KEYS.VALES.AND ENTRIES :-----------"
);

//------------------------=====:  LOOPING OBJECT5:  OBJECT KEYS.VALES.AND ENTRIES :=====-----------------------------/
// Properties Names :==

const properties = Object.keys(openingHours);
console.log(properties); // ['Thurs', 'Fri', 'Sat']
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES:...
const values = Object.values(openingHours);
console.log(values);
// 0:{open: 12, close: 23}
// 1:{open: 11, close: 23}
//  2:{open: 0, close: 24}

// entries returns the index number and elements itself ..
// ENTRIES()
const entries = Object.entries(openingHours);
console.log(entries);
// Loop over object ../
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close on ${close}`);
}
// On Thurs we open at 12 and close on 23
// On Fri we open at 11 and close on 23
// On Sat we open at 0 and close on 24
*/

/*
//================------------------------: CHALLENGE # 2 :-------------------------=========/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Vegeta",
      "Wali",
      "Ahsan",
      "Lambu",
      "Dolly",
      "Shami",
      "Kami",
      "Momu",
      "Tomy",
      "kaka",
      "Chuza",
    ],
    [
      "Goku",
      "Kakarot",
      "Mobi",
      "Suno",
      "Gohan",
      "Goget",
      "Buu",
      "Motu",
      "Sasa",
      "Malu",
      "Chankana",
    ],
  ],
  score: "4:0",
  scored: ["Chuza", "Kami", "Lambu", "Ahsan"],
  date: "Aug 8th, 2003",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers: {
    Ahsan: 2,
    Lambu: 1,
    Chuzza: 1,
  },
};

// 1):
const gameSr = game.scored;
for (const [i, players] of gameSr.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

// 2)  Find The Avarage ----:
const odds = Object.values(game.odds);
let average = 0;
console.log(odds);
for (const odd of odds) {
  average += odd; //             all are added together one by one//
  // console.log(average);
  average /= odds.length; //      1.33/3   3.693..4/ 3  7.7357../3
}

// 3)  Print the odds to console ...
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
// Odd of victory Bayern Munich: 1.33
// Odd of Draw: 3.25
// Odd of victory Borrussia Dortmud: 6.5

// Bonus:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// So The solution is to loop over the array and add the element as an object properties , and then incerease the count as we encounter a new occurence of a certain element :
*/

//

/*
// ----------------------------------   : Sets  : -------------------------------====--------------//
// Set is a collection of unique values :--- Can never have any dublicates -are also iderables  --in set there are no Indexes no way of getting vales out of a set----=
// Sets are not intended to replace arrays at all..
const orderSet = new Set([
  "Cheese",
  "Shawarma",
  "Cheese",
  "Shawarma",
  "Cheese",
  "Shawarma",
]);
console.log(orderSet); //                {'Cheese', 'Shawarma'}
console.log(new Set("Hassan")); //       {'H', 'a', 's', 'n'}
console.log(orderSet.size); //             2    *unique meals*
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet); //                {'Cheese', 'Shawarma', 'Garlic Bread'}
orderSet.delete("Cheese");
console.log(orderSet); //                 {'Shawarma', 'Garlic Bread'}

for (const order of orderSet) console.log(order);

// Example
const staff = ["Water", "Chief", "Water", "Manager", "Chief", "Water"];
const staffUnique = [...new Set(staff)]; //  ['Water', 'Chief', 'Manager']
console.log(staffUnique); //               {'Water', 'Chief', 'Manager'}
console.log(
  new Set(["Water", "Chief", "Water", "Manager", "Chief", "Water"]).size
); //                                   (3) ['Water', 'Chief', 'Manager']
console.log(new Set(staff).size); //           3
console.log(new Set("MuhammadHassan").size); // 9
*/

//
/*
//------------------------==: MAPS: FANDAMENTALS :==-------------------------------------------------/
// Map is a data Structure that we can use to map values to keys
// data is stored in key value pairs in maps and the keys can have any type..
// Calling the set Method will return a new set ..
const rest = new Map();
rest.set("name", "Muhammad Hassan");
rest.set(1, "Japan,America");
rest.set(2, "Afganistan, Kashmir");

rest
  .set("Categories", ["Shawarma", "Garlic Bread", "Cake"])
  .set("open", 10)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");

console.log(rest.get("name")); //        Muhammad Hassan
console.log(rest.get(true));  //           We are open :D

const time = 21 ; 
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// We are open :D

console.log(rest.has("Categories")); //   true
rest.delete(2);
console.log(rest.size); //           7
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

console.log(rest.get(arr)); //             Test
*/

/*
//====--------------------------- MAPS: ITERATION   -------------------------------------============/
const resturant = {
  name: "Pizza Point",
  location: "Street no# 10 , House no# 101 , Near Lahore",
  categories: ["Italian", "Vegetarian", "Organic"],
  starterMenu: ["Cold Drink", "Seamon", "Garlic Bread"],
  mainmenu: ["Pizza", "Pasta", "Cake", "RussianSalled"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct Answer"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map ...  obect into iterable..
const restHours = Object.entries(resturant.openingHours);
console.log(restHours);
const hoursMap = new Map(restHours);
console.log(hoursMap);

// Quiz App :-- ===   destructring  ...
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt("Your Answer:"));
// console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert map to array...
console.log(...question);
console.log(...question.keys()); //       question 1 2 3 correct true false
console.log(...question.values()); // What is the best programming language in the world? C Java Javascript 3 correct Answer Try again!
*/

//---------------------------------------------------------------------------------------

//  Arrays or sets    /   Objects or Maps

/*
//-------------------------: CHALLENGE NO# 3 : -------------------------------======================//

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1)---
// const events = gameEvents.values();
// const uniqueEvents = new Set(events);
// console.log(uniqueEvents); //    {'GOAL', 'Substitution', 'Yellow card', 'Red card'}    (OR)

// Unpacking them
const events = [...new Set(gameEvents.values())];
console.log(events); //            {'GOAL', 'Substitution', 'Yellow card', 'Red card'}

// 2):---
// uniqueEvents.delete("Yellow card");
// console.log(uniqueEvents); //        {'GOAL', 'Substitution', 'Red card'}     (OR)

gameEvents.delete(64);
console.log(gameEvents);

// 3 :)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// ); //                 An event happened, on average, every 9 minutes

// Bonus :)
const time = [...gameEvents.keys()].pop();
console.log(time); //                    92
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); //                  An event happened, on average, every 9.2 minutes

// 4)
for (const [min, value] of gameEvents) {
  const half = min > 45 ? "SECOND" : "FIRST";
  console.log(`[${half} HALF] ${min}: ${value}`);
}

// Example like this
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "Draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
*/

//

/*
//------------------------------===: WORKING WITH STRINGS - PART 1 : ---------------===============/
const airLine = "TAP Air Pakistan";
const plane = "A320";

console.log(plane[0]); //      A
console.log(plane[1]); //      3
console.log("B737"[0]); //     2
console.log("B737"[0]); //     B

console.log(airLine.length); //  16
console.log("B737".length); //    4

console.log(airLine.indexOf("A")); //       1
console.log(airLine.lastIndexOf("P")); //   8
console.log(airLine.indexOf("Air")); //     4

console.log(airLine.slice(4));
// The length of the extrcted string is always gona be end - beginning (7 - 4) = 3
console.log(airLine.slice(4, 7)); //                           Air

console.log(airLine.slice(0, airLine.indexOf(" "))); //       TAP
console.log(airLine.slice(0, airLine.lastIndexOf(" ") + 2)); //    TAP Air P

console.log(airLine.slice(-2)); //        an
console.log(airLine.slice(1, -3)); //  AP Air Pakis

//  Real World Example ------===

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`Congratulation you got the Middle seat`);
  } else {
    console.log(`You got the last seat`);
  }
};
checkMiddleSeat("11B"); //     Congratulation you got the Middle seat
checkMiddleSeat("23C"); //        You got the last seat
checkMiddleSeat("3E"); //     Congratulation you got the Middle seat


// BOXING PROCESS : When-ever we call a method on a string js will automatically(behind the seens) convert that string premative to string object with the same content and then its on that method where the methods are called..

// All string methods return prematives..even if called on a string object // --
*/

//

/*
//---------------------------======: WORKING WITH STRINGS - PART 2 : --------------------===============/
const airLine = "TAP Air Pakistan";

console.log(airLine.toUpperCase()); //              TAP AIR PAKISTAN
console.log(airLine.toLowerCase()); //              tap air pakistan

// FIx the Capitalization in name : -------
const passenger = "HasSAn"; // Want this   (Hassan)
// First convert it to lower case;
const passLower = passenger.toLowerCase();
const passCorrect = passLower.slice(0, 1).toUpperCase() + passLower.slice(1);
console.log(passCorrect); //                        Hassan

//  Compairing user-input email  ...
const email = "hmo40016@gmail.com";
const loginEmail = "  HMO40016@Gmail.com \n";
// Solve :--
// const emailLower = loginEmail.toLowerCase();
// const trimEmail = emailLower.trim(); // will remove the empety,extra spaces..
// console.log(trimEmail); //                       'hmo40016@gmail.com'

//     (OR).......
//  trim()...
// NOW  solve it in a single line form (more efficently):--
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //                  'hmo40016@gmail.com'
console.log(email === normalizedEmail); //        true

// The replace method is also case-sensetive ...  replace()
// Replacing parts of strings ...
const priceGB = "288,97&";
const priceUs = priceGB.replace("&", "$").replace(",", ".");
console.log(priceUs); //                          288.97$

const announcement =
  "All passengers come to boarding door 23. Baording door 23!";
console.log(announcement.replace("door", "Gate").replace("door", "Gate"));
//     All passengers come to boarding Gate 23. Baording Gate 23!         (OR)......

// By Regular Expression ...
console.log(announcement.replace(/door/g, "Gate")); // g stands for 'Global'
//     All passengers come to boarding Gate 23. Baording Gate 23!

//--------

// Booleans /..  includes(), startswith() and endswith() /..
const myName = "Muhammad Hassan";
console.log(myName.includes("Muhammad")); //       true
console.log(myName.includes("MH")); //             false
console.log(myName.startsWith("Mu")); //           true
console.log(myName.startsWith("Hassan")); //       false
console.log(myName.endsWith("Hassan")); //         true

if (myName.startsWith("Muhammad") && myName.endsWith("Hassan")) {
  console.log("Correct Name!"); //                  Correct Name!
}

console.log("---------------: Practice Set : -----------------/");
// Practice Excercise ...
const checkBagger = function (items) {
  const bagger = items.toLowerCase();
  if (bagger.includes("knife") || bagger.includes("gun")) {
    console.log("You are NOT allowed in abroad");
  } else {
    console.log("Congrats! WELCOME aboard");
  }
};

checkBagger("I have a laptop, some Food and a pocket Knife"); //You are NOT allowed in abroad
checkBagger("Socks and camera"); //                            Congrats! WELCOME aboard
checkBagger("Got some snacks and a gun for protection"); //    You are NOT allowed in abroad
*/

//+

/*
//--------------------------======:  WORKING WITH STRINGS - PART 3 : ---------------==========/
// Split() : allows us to split a string a string into multiple parts based on a divider string....
//  ----(MOST IMPORTANT)----   //  split()  &  join()
console.log("a+very+nice+string".split("+")); //        ['a', 'very', 'nice', 'string']
console.log("Muhammad Hassan".split(" ")); //           ['Muhammad', 'Hassan']

const [firstName, lastName] = "Muhammad Hassan".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //                                Mr Muhammad HASSAN

// EXAMPLE  REAL-World
// const CapitalizedName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };
// CapitalizedName("muhammad hassan ahsan ahmed"); //         Muhammad Hassan Ahsan Ahmed
// CapitalizedName("sheikh saad"); //                         Sheikh Saad

const capitalName = function (name) {
  const names = name.toLowerCase().split(" ");
  const upperCase = [];

  for (const n of names) {
    // upperCase.push(n.slice(0, 1).toUpperCase() + n.slice(1));
    upperCase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperCase.join(" "));
};
capitalName("muhammad HaSSan DON ShaH");

// Padding ---
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Hassan".padStart(25, "+").padEnd(30, "-"));

// example ----
const maskCreditCard = function (number) {
  // when of the operants of '+' sign is a string it will convert all the operants to string
  // const str = String() ;      instead : --
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(44332233556)); //   *******3556
console.log(maskCreditCard("44332233556")); // *******3556

// repeat : allows us to repeat the same string in multiple times...   repeat()
const badWheather = "Bad weather... All Departunes Delayed... ";
console.log(badWheather.repeat(5));

// Bad weather... All Departunes Delayed...Bad weather... All Departunes Delayed...Bad weather... All Departunes Delayed...Bad weather... All Departunes Delayed...Bad weather... All Departunes Delayed...

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"💛".repeat(n)}`);
};
planesInLine(5); //     There are 5 planes in line 💛💛💛💛💛
planesInLine(3); //     There are 3 planes in line 💛💛💛
*/

//

// -------------------------= : CHALLENGE NO # 4 : ====--------------------------------------/

// CONVERT (Hassan_Shah) into camelCase => 'hassanShah'  (task)---
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   const textarea = document.querySelector(".text").value;
//   const rows = textarea.split("\n");

//   for (const [i, el] of rows.entries()) {
//     const [first, second] = el.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"⚽".repeat(i + 1)}`);
//   }
// });

//

//  -----------------------    : String Method Practice :    ------------------------------------------=/
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis23236639885;12:30";

//
const getcode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";"); // --- : destructuring : ---
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )} ${getcode(from)} ${getcode(to)} (${time.replace(":", "h")})`.padStart(47);

  console.log(output);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//    🔴 Delayed arrival from HEL to FAO (12h05)
//             Departure from FAO to LIS (12h30)

//

//------------------------------==: CHALLENGE REVISION : ==----------------------------------------/
// --------------------------------===: CHALLENGE No# 1 : ===--------------------------------------/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Vegeta",
      "Wali",
      "Ahsan",
      "Lambu",
      "Dolly",
      "Shami",
      "Kami",
      "Momu",
      "Tomy",
      "kaka",
      "Chuza",
    ],
    [
      "Goku",
      "Kakarot",
      "Mobi",
      "Suno",
      "Gohan",
      "Goget",
      "Buu",
      "Motu",
      "Sasa",
      "Malu",
      "Chankana",
    ],
  ],
  score: "4:0",
  scored: ["Chuza", "Kami", "Lambu", "Ahsan"],
  date: "Aug 8th, 2003",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers: {
    Ahsan: 2,
    Lambu: 1,
    Chuzza: 1,
  },
};
// 1 ) create variables for each..
const player1 = game.players[0];
const player2 = game.players[1];

// 2 )   // => by using ...rest
const [gk1, ...fieldplayers1] = player1;
const [gk2, ...fieldplayers2] = player2;

// 3 ) create array of all players =>  by using  ...spread operator
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4 ) ADD  three more players to team1
const players1Final = [...player1, "kkkk", "Kaku", "somnu"];
console.log(players1Final);

// 5 ) crete variable for each odd : --
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2); //         1.33 3.25 6.5

// 6) create a function that recieve an arbitary numbers of player names :--
const printGoals = function (...players) {
  console.log(`${players.length} are scored by ${players}`);
  // console.log(`${scored} goals are scored. `);
};
printGoals(...game.scored); // 4 are scored by Chuza,Kami,Lambu,Ahsan

// 7 )  team with lower odds more likely to win =>  ...
team1 < team2 && console.log(`team1 wins wins the match`);
team1 > team2 && console.log(`team2 wins wins the match`);
team1 === team2 && console.log("CONGRATS! Both teams win!");
//        team1 wins wins the match
*/

// ----------------------------------:   CHALLENGE # 2   : ----------------------------------------//

/*
// 1 )  LOOP TO PRINT EACH PLAYERS NAME TO CONSOLE : ---
const scoreStr = game.scored;
for (const [i, players] of scoreStr.entries()) {
  console.log(`Goals ${i + 1}: ${players}`);
}

// 2 )
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
} //     1.33   3.6933333333333334    7.731111111111111
// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },

// 3) print the 3 odds to the console ...
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${str}: ${odd}`);
}

// Bonas ..
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(`${player} : ${scorers[player]}`);
}
*/

//

//=-------------------------------===: CHALLENGE # 3  : ===-----------------------------------------------//
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
// 1)
// const events = gameEvents.values();
// const unique = new Set(events);
// console.log(unique);
// OR
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2)..
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// ); //     An event happened, on average, every 9 minutes

// // 4)=--
// for (const [min, events] of gameEvents) {
//   const value = min > 45 ? "Second" : "First";
//   console.log(`[${value} HALF] ${min} : ${events}`);
// }
//  [First HALF] 17 : GOAL
//  [First HALF] 36 : Substitution
//  [Second HALF] 47 : GOAL
//  [Second HALF] 61 : Substitution
//  [Second HALF] 69 : Red card
//  [Second HALF] 70 : Substitution
//  [Second HALF] 72 : Substitution
//  [Second HALF] 76 : GOAL
//  [Second HALF] 80 : GOAL
//  [Second HALF] 92 : Yellow card

// ====---------------------------------:    CHALLENGE # 4    : ---------------------------------------=====/

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   const textarea = document.querySelector(".text").value;
//   // const text = textarea.split("\n");

//   // for (const [i, el] of text.entries()) {
//   //   const [first, second] = el.trim().toLowerCase().split("_");

//   //   const output = `${first}${second.replace(
//   //     second.slice(0, 1),
//   //     second.slice(0, 1).toUpperCase()
//   //   )}`;
//   //   console.log(`${output.padEnd(20)}${"😝".repeat(i + 1)}`);
//
// }  OR -----------------------------

//   const text = textarea.split(`\n`);

//   for (const [i, el] of text.entries()) {
//     const [first, second] = el.trim().toLowerCase().split("_");

//     const output = `${first}${
//       second.slice(0, 1).toUpperCase() + second.slice(1)
//     }`;
//     console.log(`${output.padEnd(20)}${"😝".repeat(i + 1)}`);
//   }
// });

/*
//  --------------------------------  : Challange repeating again : ----------------------------------------------------------------------------------------------------------------------------   ///////////////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Vegeta",
      "Wali",
      "Ahsan",
      "Lambu",
      "Dolly",
      "Shami",
      "Kami",
      "Momu",
      "Tomy",
      "kaka",
      "Chuza",
    ],
    [
      "Goku",
      "Kakarot",
      "Mobi",
      "Suno",
      "Gohan",
      "Goget",
      "Buu",
      "Motu",
      "Sasa",
      "Malu",
      "Chankana",
    ],
  ],
  score: "4:0",
  scored: ["Chuza", "Kami", "Lambu", "Ahsan"],
  date: "Aug 8th, 2003",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers: {
    Ahsan: 2,
    Lambu: 1,
    Chuza: 1,
  },
};
//  1 :
const scoreStr = game.scored;
for (const [i, el] of scoreStr.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// 2 : )
let average = 0;
const avgOdd = Object.values(game.odds);
console.log(avgOdd);
for (const odd of avgOdd) average += odd;
average /= avgOdd.length;
console.log(average); //  3.6933333333333334

// 3 : )
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr}: ${odd}`);
}
*/

//
/*             challenge 3  --------------
const gameEvents1 = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1 :
// const events = gameEvents1.values();
// const unique = new Set(events);
// console.log(unique);

const events1 = [...new Set(gameEvents1.values())];
console.log(events1);

// 2 :
gameEvents1.delete(64);
console.log(gameEvents1);

// 3 :
console.log(`An event happened, every ${90 / gameEvents1.size} minute`);

// 4 : --  Destructuring  : ==
for (const [min, event] of gameEvents1) {
  const value = min > 45 ? `SECOND` : `FIRST`;
  console.log(`[${value} HALF]  ${min} : ${event}`);
}
*/

// -----------------------------   : Challenge 4 : ------------------------
