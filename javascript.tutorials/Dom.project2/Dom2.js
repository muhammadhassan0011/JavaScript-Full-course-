"use strick";

// working with classes  .... /
// const openModel = function () {
//   modal.classList.remove("hidden");
//   // overlay.classList.remove("hidden");
// };
// const closeModel = function () {
//   modal.classList.add("hidden");
//   // overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnOpenModel.length; i++)
//   // now it's an element ..
//   // to add modal
//   btnOpenModel[i].addEventListener("click", openModel);

// // to remove modal
// btn.addEventListener("click", closeModel);
// // overlay.addEventListener("click", closeModel);

// // keydown is fired when we pressed the key
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModel();
//   }
// });

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");

const openModel = function () {
  modal.classList.remove("hidden");
};
const closeModel = function () {
  modal.classList.add("hidden");
};

for (let i = 0; i < btnOpenModel.length; i++)
  //open modal
  btnOpenModel[i].addEventListener("click", openModel);
// close modal
btn.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden"));
  closeModel();
});
