"use strict";
// ________________________ :   Asynchronous JavaScript , AJAX and APIs : __________//
// Summary :  Asynchronous programming is all about coordinating the behaviour of our program over a certain perioud of time ___ means : Not occurring at the same time.

// Fact CallBack func alone doesNot make code  Asynchronous ___
// objects made from a classcan be seen as self-Contained encapulated piece of softWare that other piece of softWare can Intract with : CALLED ==> API

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ______________________________ : Lectures : ______________________________//
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////===========>  True Way to write : ==>
const renderCountry = function (data, className = "") {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
}; // insertAdjacentText does not create new html elements __

//

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // Api that we use should have CORS set to  (Yes/Unknown) :_-
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send(); //  Asynchronous non-blocking Behaviour __
  //   console.log(request.responseText);

  // here we send of request  that request then fetches the data in the background , one that is Done it will emmit the load event : as soon the data arrives then below callBack func will be called ___-
  request.addEventListener("load", function () {
    //   console.log(this.responseText);

    // Convert that in Js Object : == > JSON : Big string of text ___>
    const [data] = JSON.parse(this.responseText); // destructuring to get the Object_
    console.log(data);

    const html = `  //  WRONG PATTREN ==>  RIGHT IS ON TOP >> 
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("pakistan");
getCountryData("usa");
getCountryData("norway");
// we will have two AJAX call happening at the same time  And so whatEver one arrives first, will then fire the load event first ___ and so if te first one is USA the It will be printed on Project ----

// If we want this in Predefined Order then we had to chain the requests  Means : make the second req only after the first req has finished ___  IN ==> NEXT LECTURE :
*/

//

/////////// ___________________________ : WELCOME to CallBack Hell : ___________________________________________ ////////////////////////////////////

/*  
// ---------- >
const getCountryNeighbour = function (country) {
  const request = new XMLHttpRequest(); // Api that we use should have CORS set to  (Yes/Unknown) :_===== >   AJAX CALL (1)
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send(); //  Asynchronous non-blocking Behaviour __
  //   console.log(request.responseText);

  // here we send of request  that request then fetches the data in the background , one that is Done it will emmit the load event : as soon the data arrives then below callBack func will be called ___-
  request.addEventListener("load", function () {
    //   console.log(this.responseText);

    // Convert that in Js Object : == > JSON : Big string of text ___>
    const [data] = JSON.parse(this.responseText); // destructuring to get the Object_
    console.log(data);

    // Render country (1) :
    renderCountry(data);

    // Get Neighbour country (2):   /-> Use optional Chaining to account for countries with no borders property : __
    // const [neighbour] = data.borders;
    const neighbour = data?.[0];

    if (!neighbour) return; //  if country don't have neighbours the simply return __
    // if neighour does EXISTS then the second === >> AJAX call (2) :
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("laod", function () {
      // so we have one callback inside anotherOne ___
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data, "neighbour");
    });
  });
};

getCountryNeighbour("pakistan");

// CALLBACK HELL : ==> makes code messy  : (imp : makes code harder to maintain, and very difficult to underStand  & reason about __)
setTimeout(() => {
  console.log(`1 sec passed`);
  setTimeout(() => {
    console.log(`2 sec passed`);
    setTimeout(() => {
      console.log(`3 sec passed`);
      setTimeout(() => {
        console.log(`4 sec passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

////// ________________________________ : PROMISES AND THE FETCH API : __________________________________________________ ////////////////////
//  const request = new XMLHttpRequest(); // Api that we use should have CORS set to  (Yes/Unknown) :_-
//  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//  request.send();  INSTEAD WE DO  ==== >

// const request = fetch("https://restcountries.com/v3.1/name/$usa");
// console.log(request);
// // CONSUMING PROMISES : == >
// const getCountryData = function (country) {
//   // in then method we need to callback func.. that we want to be exicuted as soon as the promise is actually fullfilled , recives one argument as it's called by Js and that arrgument is resulting value of the Fullfilled Promise  ___ :>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // this is how we handle fullfilled promise __>
//       console.log(response);
//       return response.json(); // json() is Asynchronous func also (return new promise)
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// CONSUMING PROMISES : == >  ///////////////////////////////////////////  === >

// const getCountryData = function (country) {
//   // in then method we need to callback func.. that we want to be exicuted as soon as the promise is actually fullfilled , recives one argument as it's called by Js and that arrgument is resulting value of the Fullfilled Promise  ___ :>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (response) =>
//         // this is how we handle fullfilled promise __>
//         response.json() // json() is Asynchronous func also (return new promise) so we can call the then method om that ___>
//     )
//     .then((data) => renderCountry(data[0]));
// };

// fetch only rejects when there is No internet Connection ___ :
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         //  throw : will immediately terminate the current function Like : return
//         throw new Error(`Country not found! ${response.status}`);
//       return response.json();
//     })
//     //   (err) => alert(err) Intead of Callback func-- we add catch method at the end of the Chain __ :>
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = "nereeff";

//       if (!neighbour) return;

//       // country: 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       // whatEver we return from promise will become the fullfilled value of the promise __ >
//       // Any Error will cause any promise to reject, here we are creating Our own ERROR to reject the promise on Purpose __ >
//     })
//     .then((response) => {
//       if (!response.ok)
//         //  throw : will immediately terminate the current function Like : return
//         throw new Error(`Country not found! ${response.status}`);
//       return response.json();
//     }) // Only call when promise is fullfilled
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       // only called when promise is rejected __> catch
//       console.error(`${err} $$$`);
//       renderError(`SomeThing went wrong $$ ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // use finally for something that always needs to happen no matter result of promise/ EXample : hide the rotating Spinner __ > Only work when catch also returns promise ==>
// };

// catch method at end of chain will bacically catch any errors that occur in any place in this promise chain , no matter where that is __>
// Also display Error message for User To See __

// want to Stimulate that the page was first still loaded but then as the user does the request without Internet ten we want to See the Error happening __:)

// ____________________________________________________________________________________________________________________________/////////////////////////////

//

/////// _________________________ Throwing Errores Manually :___________________________ //////////////////
//====================================== >>
// Used helper Function to wrap up the fetch,the error handling,& conversion to JSON : ==>   MOST IMPORTANT .. >  ALWAYS USED IN ( REAL WORLD : PROJECTS)___
// const getJSON = function (url, errorMsg = "SomeThing went Wrong!") {
//   return fetch(url).then((response) => {
//     if (!response.ok)
//       //  throw : will immediately terminate the current function Like : return
//       throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };
// // TakeAway : WhenEver we Want to create some Error that we want to handle down in the catch handler , all we need is to throw, and Create new error : ==>
// const getCountryData = function (country) {
//   // country 1 >  // using helper function >
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     "Country not found!"
//   )
//     .then((data) => {
//       // callled when promise is fullfilled __> then
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);
//       // const neighbour = "nereeff";
//       // Creating real Error Message : > IMP for (Real World Projects) :)
//       if (!neighbour) throw new Error("No neighbour found!");

//       // country: 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not Found!"
//       );
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       // only called when promise is rejected __> catch
//       // console.error(`${err} $$$`);  ____________ >
//       // catch method at end of chain will bacically catch any errors that occur in any place in this promise chain , no matter where that is __>
//       renderError(`SomeThing went wrong $$ ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// call func__ when user clicks on Button
// btn.addEventListener("click", function () {
//   getCountryData("australia"); // austrialia gas no neighbour __>
//   // getCountryData("pakistan");
// });

/*
//////// ________________________________ : CODDING CHALANGE # 1 : ______________________________________________________ //////////////////
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      // console.log(response);   // No Error here  ok : true    ==> 100%
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`you are in ${data.country} ${data.city}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found! ${response.status}`);
      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} ^^`));
};

whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);
*/

//

/*
//////// _____________________  : EVENT LOOP In PRACTICE : === >
console.log(`Test start`);
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve(`Resolved promise 1`).then((res) => console.log(res));
console.log(`Test End`);
// allows us to create a Promise that is Immediately resolves . Immediately (has sucess value)

Promise.resolve(`Resolved promise 2`).then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log(`Test end`);  
//  Proves : Zero seconds that we have are not a guarantee . ==> Cannot do highPrecision things using JavaScript _____________ :>  
*/

//

/*
////////// _________________________ :  BUILDING A SIMPLE PROMISE : __________________________________________________ ////////////////////////
// Promises are special kind of Objects in Javascript __
// ENCAPSULATING Asynchronous Behavior into Promise __
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lotter draw is happening #`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // wins lottory : fullfilled promise > in order to fullfilled the promise we use resolve function. // calling resolve func__ like this will mark Promise as fullfilled promise, which we can also say resolve Promise :>
      resolve(`You WIN $$`);
    } else {
      reject(new Error(`You last your money $$`));
    }
  }, 2000);
});
// we created an executed func__ which is gonna be called by Promise constructor as soon as it runs ___ / Consumming Promise  : === >
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying means : convert callBack based asynchronous behavior to promise based ____ >     Now :
// :> Promisifing setTimeout func__ and creating a wait func___>
const wait = function (seconds) {
  // creating Function that RETURNs new Promise__
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//All this return new promise so we can call then method: Consuming Promise
wait(2)
  .then(() => {
    console.log(`1 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`4 sec passed`);
    return wait(1);
  });
// INSTEAD OF THIS (CALLBACK HELL) WE CAN DO this asynchronous Behavior__ :>

// setTimeout(() => {
//   console.log(`1 sec passed`);
//   setTimeout(() => {
//     console.log(`2 sec passed`);
//     setTimeout(() => {
//       console.log(`3 sec passed`);
//       setTimeout(() => {
//         console.log(`4 sec passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Creating fullfilled or rejected Promise :__ > resolve immediately
Promise.resolve(`abc`).then((x) => console.log(x));
Promise.reject(new Error(`PROBLEM!`)).catch((x) => console.error(x));
*/

//

/*
//////// _________________ :   PROMISIFYING THE GEOLOCATION API : __________________________________________________ ///////////////////

// (GREAT Opportunity : TO promisify a callBack based API, to a Promise based API)

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   // geolocation : callBack based API
    //   // first for sucess , second for Error
    //   (position) => resolve(position),
    //   (error) => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((position) => console.log(position));

// Taking TO NextLevel :=>
const whereAmI = function () {
  getPosition()
    .then((position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      console.log(response); // No Error here  ok : true    ==> 100%
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/pakistan`);
    })
    .then((response) => {
      // console.log(response);
      if (!response.ok)
        throw new Error(`Country not found! ${response.status}`);
      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} ^^`));
};
btn.addEventListener("click", whereAmI);
*/

//

/*
//////////////// ______________________ : Challenge # 2 : _____________________________________________________________//////////////////

// Challenge is on The (Js.Projects) Folder => (Aysnchronous.JS) file ...
*/

/*
////// _________________ : CONSUMING PROMISES WITH ASYNC/AWAIT : _________________________________________ /////////////////////////////
// Better Way to consuming Promises : === >
// Now  this is Asynchronous Func__ : A function will keep running in the background while performing the Code that inside of it, then when the function is done,  it Automatically returns Promise :==>
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// fetch(`https: //restcountries.com/v3.1/name/${country}`).then((res) =>
//   console.log(res)
// );  SAME AS BELOW : == > res

// Async await is simply syntactic sugar over (the then method in promises) , consuming promises.. (behind the sences we are still using Promises) == >

const whereAmI = async function () {
  try {
    // GEOLOCATION : >
    const pos = await getPosition();
    // console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;
    // REVERSE GeoCodding API == >
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem in getting location data*`);

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data : >
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem in getting Country !`);
    const data = await res.json(); // returns another Promise ==>
    // console.log(data);

    renderCountry(data[0]);

    // wanted to return string based on geocoding data :>
    return `You are in ${dataGeo.city}, ${dataGeo.country} `;
    // reason of returning string => js has no way of knowing what will be returned from this function. SO, therefore all that this function does return  is a promise __ (:(imp):) value that we return from func will become fullfilled value of promise(string) that is returned by the async func__
  } catch (err) {
    console.error(err);
    renderError(` ** ${err.message} `);

    // Reject promise returned from async func__
    // if we want be able to catch that error here, then we would have to rethrow:(throwing error again so we can then propagate it down) that error __>
    throw err;
  }
};

// RETURNING VALUES FROM Async Function : >
console.log(`1 : Will get location`);
// const city = whereAmI();
// console.log(city); // async func always returns Promise __

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.log(`2: ${err.message} *`))
//   // if wanted to fix,not the error, but fact that 3 is printed before 2 ==>
//   .finally(() => console.log(`3: Finished getting location`));

// ASYNC IIFE == >
(async function () {
  try {
    // like : then
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    // like : catch
    console.log(`2: ${err.message} *`);
  } // like : finally >
  console.log(`3: Finished getting location `);
})();

// ERROR-HANDLING using TRY_CATCH : == >// Using TRY CATCH for handling REAL error in ASYNC func__ :>

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
 */

//

/*
/// ______________________________ : Running Promises in Parallel : ____________________________________ ///////////////////////////////
// wanted to get data of three Countries at same time but in which the order that the data arrives does not matter at all __ >
const getJSON1 = function (url, errorMsg = "SomeThing went Wrong!") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restco4untries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcou6ntries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcoun9tries.com/v3.1/name/${c3}`);
    // console.log(...data1.capital, ...data2.capital, ...data3.capital);

    // Instead of running them in sequence, we can actually run them in parallel(all at same time):) this will save Valuable loading time :>
    const [data] = await Promise.all([getJSON1(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON1(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON1(`https://restcountries.com/v3.1/name/${c3}`)]
    );

    console.log(data.map(([el]) => el.capital));
    // when you have to do multiple Asynchronous func__ at same time , and operations that don't depend on one another, then always run them in (PARALLEL) : == >
  } catch (err) {
    console.error(`${err}* occured!`);
  } finally {
    console.log(`Finished the function execution!`);
  }
};
get3Countries("canada", "pakistan", "japan");

//    ANOTHER WAY OF GETTING CAPITALS : === >
const getJSON2 = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  if (!res.ok) throw new Error(`${res.status} **`);
  return res.json();
};

const getCapitals = async function (...countries) {
  try {
    let promises = [];
    countries.forEach((country) => promises.push(getJSON2(country)));
    const data = (await Promise.all(promises)).flat();
    const capitals = data.flatMap((country) => country.capital);
    console.log(capitals);
    return capitals;
  } catch (err) {
    throw new Error(err);
  }
};
getCapitals("japan", "pakistan", "india", "russia", "canada", "taiwan");
*/

//

/*
//// _______ : Other Promise Combinators:(race, allSettled and any) : _________________________________________________ ///////////////////
// Promise.race : just like all combinators, recives  an array of promises and it also returns a promise. promise returnes by (Promise.race) is settled as soon as one of the input promises settles(that a value is available) but doesn't matters if promise got rejected or fullfilled __
// Promise.race : very usefull to prevent against never ending promises or also very long running promises.
const getJSON = function (url, errorMsg = "SomeThing went Wrong!") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
// // === :) Promise.race : the first settled promise wins the race __>
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy}`),
//     getJSON(`https://restcountries.com/v3.1/name/canada}`),
//     getJSON(`https://restcountries.com/v3.1/name/japan}`),
//   ]);
//   console.log(res[0]);
// })();

// Creating special timeout promise, which automatically rejects after a certain time has passed.
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      return reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};
// only want to wait for 3 seconed ___ >
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/italy}`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

// const getTimer = async function () {
//   try {
//     const get = await Promise.race([
//       getJSON(`https://restcountries.com/v3.1/name/italy}`),
//       timeout(0.0),
//     ]);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getTimer();

// Promise.allSettled :>)
// ___ : it takes in an array of promises again, and it will simply return an array of all the settled promises. (NO MATTER: if promises got rejected or not)

// Similar to Promise.all in reguard that it also return an array of all the results, (Difference ==> (Promise.all) => will short circuit as soon as one promise rejects, (Promise.allSettled) => simply never short circuits. ) => returns all results of all Promises ___ >

// Promise.allSettled :>)
Promise.allSettled([
  Promise.resolve("sucsess"),
  Promise.reject("ERROR"),
  Promise.reject("Another success"),
]).then((res) => console.log(res));

// Promise.any :) ES2021 > Takes in array of multiple promises and will then return the first fullfilled promise,__ simply ignore rejected promises
Promise.any([
  Promise.resolve("sucsess"),
  Promise.reject("ERROR"),
  Promise.reject("Another success"),
]).then((res) => console.log(res));
/// ====>> Most important are Promise.all , ___.race : ====<<
*/

//

////_________________________ : Challenge # 3 : _________________________________________ /////////////////////////
// Challenge is on The (Js.Projects) Folder => (Aysnchronous.JS) file ...
