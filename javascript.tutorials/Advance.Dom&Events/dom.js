"use strict";

///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////  :   LECTURES    : -----------------/////////////////////////////

/*
//    SELECTING CREATING & DELETING ELEMENTS : ------------
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons); // gives us HTML collection >.. so we get all the buttons  /  if DOM changes then this Collecion also Updated autoMatically ...

console.log(document.getElementsByClassName(`btn`));

//  CREATING & INSERTING ELEMENTS : ---
// .insertAdjacentHTML
const message = document.createElement(`div`); // Its just an object that represent DOM element : ---
message.classList.add(`cookie-message`);
message.innerHTML = `WE use Cookies for improving functionality and analytics! <button class='btn btn--close-cookie'> Got it </button> `;

// header.prepend(message); // adds the element as the first child of header ..
header.append(message); // adds the element as the last child of header ..
// header.append(message.cloneNode(true)); // adds the element as the Both child of header ..

// header.before(message);
// header.after(message);

document
  .querySelector(`.btn--close-cookie`)
  .addEventListener("click", function () {
    message.remove(); // new  way...
    // message.parentElement.removeChild(message); // Old way to remove element
  });
///////////////////  ------------------  :  STYLES. ATTRIBUTES AND CLASSES  : ==================================/////////////////////////////////////////
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;
console.log(message.style.color);
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
// so we can only get the style which we already selected in the css ...
console.log(getComputedStyle(message).color); // rgb(149, 146, 146)  so this the real style as appeaers on the page ...
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty(`--color-primary`, `orangered`); // so we can easily change style by passing Name of Property & Value : ---

//  ----  : Attributes : ------
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute("designer"));
logo.getAttribute("company", "Bankist");
// logo.setAttribute("src");
console.log(logo.src); // get absolute version
console.log(logo.getAttribute("src")); // get relative version

const link = document.querySelector(".nav__link--btn");
console.log(link.href); //  return the Absolute URL ...
console.log(link.getAttribute("href")); // simply returns URL as we wroted in HTML

//  ---- : Data Atribute  : ------
console.log(logo.dataset.versionNumber); // 3.0 //  => starts with the word data- and then what ever we want ... we use them alot when wework with the UI, specially when we need to store data in the UI(HTML code) ... 

// classes ...  you can add multiple class by passing in multiple values ... 
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains() // not includes .. 
*/

/*
//////////////////// ---------------  : TYPES OF EVENTS & EVENT HANDLERS  :  --------------------------------------------------------- ////////////////////////
const h1 = document.querySelector("h1");
// addEventListener :1) allows us to add multiple event-Linsers to same Event :  2( 2) we can remove the event-Handler in case when we Dont NEED it anymore ...

// h1.addEventListener("mouseenter", function (e) {
//   // new way ...
//   alert(`addevenLisner: Great !`);
// }); // so when we hover on h1 alert will be popped-up ...

const alertH1 = function (e) {
  alert(`addEvaddevenLisner: Great !entLisner : Great`);
};
h1.addEventListener(`mouseenter`, alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   // old way
//   alert(`onmouseenter: Guess GG!`);
// };
*/

/*
//////////////////////  -------------------  : Event Propagation in Practice  : -------------------------------------------  /////////////////////////////////////
// : The event actually happens at the document rude and from there it travels Down to the target element ... and then it bubbles up (events also happens in the parent element)..

//  rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); // To generate ramdom Intteger
const ramdomColor = () => `rgb(${randomInt(0, 255)} , ${randomInt(0, 255)})`;
console.log(ramdomColor());

document.querySelector(`.nav__link`).addEventListener("click", function (e) {
  this.style.backgroundColor = ramdomColor();
  console.log(`link`, e.target);
  console.log(e.currentTarget === this);

  // STOP Event propagation ...
  //   e.stopPropagation(); // So we stop the event and this can't go Further ...
});
document.querySelector(`.nav__links`).addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = ramdomColor();
    console.log(`CONTAINER`, e.target);
  },
  false
); // wil be default ...
document.querySelector(`.nav`).addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = ramdomColor();
    console.log(`NAV`, e.target);
  },
  true
); // if true , then Event Handler no-Longer Listen to the Bubbling events but instead to Capturing events ... So NAV will be on the top ...
*/

/*
///////// ---------------------------------- : DOM TRAVERSING  : --------------------------------------  ///////////////////////////////////

const h1 = document.querySelector("h1");

// these two element are direct children of h1 , but would go down as deep as possible ...
//  Going downwards ...
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes); // TEXT , ELEMENTS , COMMENTS ...
console.log(h1.children); // ONLY WORKS FOR (DIRECT CHILDREN)...
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards parents ...
console.log(h1.parentNode); // similur to childNode                           <div class="header__title">…</div>
console.log(h1.parentElement);

//lets on-page we have multiple headers.. with same class of header, but we want to find that a parent element of h1 : then we can use (closest ) :
h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)"; // opposite of querySelector ... (finds parents , no matter how far up in the DOM Tree)...

// Going Sideways : Siblings ...
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(0.5)`;
});
*/

//

// // <<<<<<<<, ====================================== : LifeCycle DOM Events : -----------------------------------=================== ______________>>>>>>>>>>>>
// // Not wait for anything
// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log(`HTML parsed and DOM tree Built!`, e);
// });

// // load event is fired by the window as soon as not only the HTML is parsed,
// window.addEventListener("load", function (e) {
//   console.log(`Page fully loaded`, e);
// });

// // window.addEventListener("beforeunload", function (e) {
// //   // to get conform leave or Reload popup ...
// //   e.preventDefault();
// //   console.log(e);
// //   e.returnValue = "";
// // });

//

// <<< ============================= : DEFER AND ASYNC SCRIPT LOSDING  : ============================================ >>>

// ONLY MODREN BROWSERS SUPPORT THEM : ==
// AYSNC :
//Script are feched aynchronously and executed immediatly ..
// Usually DOMConteentLoaded does not wait for an async script //
// Script  not guaranted to execuite in Order ,..

// DEFER : --
// Using differ in the HTML head is overall the best solution  ...
//Script are feched aynchronously and ececuted after HTML completely parsed ..
// Script are execuited in Order ,...

//    -----------------------------------------------------------------------------------------------------------------------------

// Modal window
////////////////////////////////////////////////////////////////////////////////////////////////////     :    [PROJECT WEBSITE ]
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal); // Instead we do :
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// IMPLEMENTING SMOOTH SCROLLING : -----
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener("click", function (e) {
  const slcoords = section1.getBoundingClientRect();
  console.log(slcoords); // x : position which is measured from the left side,     y: measured from top -----

  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (x/y)`, window.pageXOffset, pageYOffset);
  // get current scroll position

  // console.log(
  //   `heigth/width veiwport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling ... We determined the absolute position of this element relative to the document ...
  //   window.scrollTo({
  //     left: slcoords.left + window.pageXOffset,
  //     top: slcoords.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });

  // modren way :--
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////  ----------- : SMOOTH Page Navigation : --------////////
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event-Listener to common parent element
// 2. Determine what element originated the event / IMPLEMENTING SMOOTH behaviour to the nav__link ...

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching Strategy ..
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Building A Tabbed Component : ----
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`); // NodeList

tabsContainer.addEventListener("click", function (e) {
  // need a way to find btn-element whenever we clicked on the span-element ..
  //   const clicked = e.target.parentElement;

  // closest() :=> helpful in event-delegation (makes us easy to dynamically get the element that we are intrested ... )
  const clicked = e.target.closest(`.operations__tab`);
  //   console.log(clicked);

  // Gaurd clause ...  More Modren way ...
  if (!clicked) return; // when we have null (falsey value) then !clicked(not Falsey) will become true  :> and none of the code that's after it will be executed..

  // before add this class, we will simply remove it on all of the tabs.
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // removing the active class for all of them before then adding it to the one that we're intrested in..  // ACTIVATE TAB ...
  clicked.classList.add(`operations__tab--active`);

  // Activate content area ...
  console.log(clicked.dataset.tab);
  // when we click on one button then other0ne moves down ...
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

//  Menu Fade Animation .... ==>  Passing Arguments to Event Handlers ...
//  mouseover(simular to mouseenter)  -=> difference : mouseenter does not bubble
// mouseenter opposite is ==> mouseleave ./ mouseover opposite is mouseout ...

//  FUnction for refacturing ...
const handleHover = function (e) {
  console.log(this); //this === e.currentTarget

  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const Siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    Siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Js expects here a function, not regular value ... So the Solution of this problem whould to still have a callback function here,which Js will then CALL for us when ever the event happens ...
// 1 WAY : ---------
// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });

//  2 : -----Now doing with Bind method : Created a copy of function that it'called on,and it will set the this keyword in this fuction call.. to whatEvery value that we pass into bind() : returns new function
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
//    SO this teaches how we can pass events into handler func...

// // __________________ STICKY NAVIGATION ........ THE SCROLL EVENT =>
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function () {
//   // calculate Dynamically...
//   console.log(this.window.scrollY);
//   // then we want to add 'sticky' class ...
//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
// // So this event will be fired each time when we scroll our page ...

// << ====================== : A Better Way : The Intersection Observer API : ============================================ >>
// const obsCallback = function (entries, observer) {
//   // So this callback func will get called each time that the observed element(target elment) is intersecting the root element at the threshold that we defined ...
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOption = {
//   root: null, // observe our target-element intersecting the entire viewport , all right ..
//   threshold: [0, 0.2], // % of intersection at which the observer callback will be called,
// };
// const Observer = new IntersectionObserver(obsCallback, obsOption);
// Observer.observe(section1);

const header = document.querySelector(".header");
// Calculating height dynamically ...
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // cuz we are intrested in the intire viewPort ..
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// <<<< ---------- : REVEALING ELEMENTS ON SCROLL : ------------------------------===========================>>>
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [enter] = entries;
  // console.log(enter);

  if (!enter.isIntersecting) return; //  If not intersecting then return  right Away ...
  enter.target.classList.remove("section--hidden");
  observer.unobserve(enter.target);
};

//Need a way of Knowing which is the section that actually intersacted the viewport ... So we use (TARGET) ..
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // viewport
  threshold: 0.15, // something > 0 ,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add(`section--hidden`);
});

// ------------ : LAZY LOADING IMAGE                       =============================================== >>>

// <<< ------------------------ : BUILDING SLIDER COMPONENT : PART 1  : -----------------------========== >>>
