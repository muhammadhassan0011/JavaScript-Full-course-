"use strict";

// __________  :  Managing WorkOut Data : Creating Classes : ___________  //
// Never directly create WorkOut , instead always create running or cycling Object == >
class WorkOut {
  date = new Date();
  // create good and Unique ID numbers  / always use Libraries :==>
  // id = (Date.now() + "").slice(-10); // date = convert into String = take the last 10 Numbers : For taking  (Time Stamp)
  constructor(coords, distance, duration) {
    // this.date  = ...
    // this.id    = ...
    this.coords = coords;
    this.distance = distance; // in km
    this.duration = duration; //  in  min
  }
  _setDescription() {
    // prettier-ignore : to avoid code in Line : ==>
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } / ${this.date.getDate()}`;
  } // now whenEver the new Object is created , the discription should be set..
}

class Running extends WorkOut {
  type = `running`;
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    // min / Km :>
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends WorkOut {
  type = `cycling`;
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycle1);

///______: USING THE GEOLOCATION API :_________
// let map, mapEvent; // global variable ;

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// _________ :  refacturing for Project architecture : _________________//
// ____________ :  APPLICATION ARCHITECTURE : ______________________________ //
class App {
  // private : == >
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();

    form.addEventListener("submit", this._newWorkout.bind(this)); //
    // 2 problems : trying to use to variables that does not exists in current scope : map and mapEvent

    // changing the input message when selecting cycling / running : ==> so we have to toggle on both class :
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      // this._loadMap should be treated as a regular function call not as method call / in regular func this keyword will be undefined ___
      // Solution : manually bind this keyword to whatever we need ___
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // will return a new func...
        function () {
          alert("Could not get your position !");
        }
      );
  }

  _loadMap(position) {
    // taking the current location ____ >
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    console.log(this);
    // inplementing coords here for location
    this.#map = L.map("map").setView(coords, 13); // something must wrong
    //   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { another theme of tiles // fr/hot to change the layer
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // using (on) method on the map as an event-listener used to activate the click location pointer(marker) : === >
    // Handling clicks on map
    this.#map.on("click", this._showForm.bind(this)); // idera : when leaflet calls here it will do so with a special map event.  (event created by leaflet)

    // L.marker(coords) // inplementing coords here for location
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; // error   reason:__Incorrectly set this keyword__
    form.classList.remove("hidden");
    inputDistance.focus(); // for input blinking_ when we click the map __
  }

  _hideForm() {
    // Empty the inputs ___
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        "";
    form.style.display = `none`;
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest(`.form__row`).classList.toggle("form__row--hidden"); // closest selects parents not children __
    inputCadence.closest(`.form__row`).classList.toggle("form__row--hidden"); // closest selects parents not children __
  }

  _newWorkout(e) {
    // Using helper func (validInput) to check if all the values are number & (allPositive) func.. to check if all numbers are positive :  number > 0
    const validInput = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // if activity running, create cycling object ___
    if (type === "running") {
      const cadence = +inputCadence.value;

      // Check if data is valid : // Check if data is valid : using Guard clause :==> Checking for opposite of what we are intrested in and if that opposite is true , then simply return func.. immediately.
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert(`Inputs have to be positive Number`);
      //  want an Array

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if activity cycling , create cycling object ___
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      // Check if data is valid :
      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert(
          `Inputs :>(distance, duration): have to be positive Number`
        );
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array ___
    this.#workouts.push(workout);
    console.log(workout);
    // Render workout on map as worker
    this._renderWorkoutMarker(workout); // not a call back func  so This will be a current Object__
    // Render workout on list ___
    this._renderWorkout(workout);

    // Hide Form + Clear input fields __
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`, // workout.type = 'running' , `cycling`
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "#"}  ${workout.description}`
      )
      .openPopup(); // adds marker to map
  }

  ////////////////////////////////// ______ RENDERING - WORKOUT ________________//
  _renderWorkout(workout) {
    // now replace with real data : == >
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === "running" ? "🏃‍♂️" : "#"
            }</span>
            <span class="workout__value">${workout.distance}</span> 
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;
    if (workout.type === `running`)
      html += `
  <div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
            </div>
            </li>
            `;
    if (workout.type === `cycling`)
      html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li> -->
          `;
    // afterend : Add the new element as a sibling element at the end of the form __ :
    form.insertAdjacentHTML("afterend", html);
  }
}
//
const app = new App(); // does not need any parameters / in order to trigger geoLocation API _getPosition() method needs to be called : __

// _____ : Displaying a MAP MARKER : ____________ //
// takes input to call-back function , secoond will be arrow func

// __________________________ : Displaying a MAP USING LEAFLET LIABRARY : _____________________________________________ /////////////////////////////////
// Using leaflet liabrary : _____________

// for submitting the form input data __  EventLisner on ENTER :-->
