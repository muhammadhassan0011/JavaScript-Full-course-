"use strick";

/*
// We work for a company building a smart home thermometer . Our most recent task is this : Given an array of a tempratures of on day , calculate the temprature amplitude. Keep in mind that sometimees there might be a sensor error ;
const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem :
// What is temp amplitude ? Answer: defrence betweeen higher and lower temp.
// -How to compute max and min tempratures ?
// - What's a sensor error ? And What to do ?

// Breaking up into sub-problems   -------
// --How to ignore errors ?
// -- Find Max value in the temp array
// --- Find the min Value in the temp array
// --- Subtract Min for Max (amplitude) and return it :

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== "number") continue;

    if (currtemp > max) max = currtemp;
    if (currtemp < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

// :) PROBLEM # 2 )  function should recieve two arrays of tempratures ... /

// 1) Understanding the problem ..
// With 2 arrays , should we implement functionality twice?   ans) NO! Just merge 2 arrays


// BREAKING INTO SUB - Problems
// --How to merge Two arrays --


const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== "number") continue;

    if (currtemp > max) max = currtemp;
    if (currtemp < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// -------------------------------------------========================

/*
// --------------------- DEBUGGING  ------------------------------//
const measureHassan = function () {
  //  by using object  ....
  const measurement = {
    type: "temp",
    unit: "celsius",
    // fix
    // value: Number(prompt("Degrees celceus")), // anything inside prompt is string.
    value: 10,
  };
  console.table(measurement); // gives the console in a tabular form..
  //   console.log(measureHassan.value);
  const hassan = measurement.value + 273;
  return hassan;
};
//  A)  IDENTIFY THE BUG :
console.log(measureHassan());

//   USING A DEBUGGER  .................
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== "number") continue;

    if (currtemp > max) max = currtemp;
    if (currtemp < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// IDENTIFY BUG
console.log(amplitudeBug);
*/

///                        CHALLENGE NO# 1      DEBUGGING -----------------------------//

// 1) Understanding the problem
//-- Array Transformed into string, seperated by ...
//-- What is the X days ?  Ans:)  index + 1

// 2) Brealing Down into sub-Problems:
//  Transform the array into string
// Transform each elemenents to string with *C
//-- String needs to contain day (index + 1)
//-- Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // [17, 21, 23];
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `; //    i = array
  }
  console.log("..." + str);
  // ...17°C in 1 days... 21°C in 2 days... 23°C in 3 days...
};
printForecast(data1);
