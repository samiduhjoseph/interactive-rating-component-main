"use strict";
let ratingButtons = document.querySelectorAll(".rating__button--style");
let submitButton = document.querySelector(".rating__submit");
let submittedPage = document.querySelector(".rating--submit");
let ratingPage = document.querySelector(".rating");
let ratingValue = document.querySelector(".value");

let value;
ratingButtons.forEach((element) => {
  //get the value of the button
  element.addEventListener("click", (event) => {
    value = Number(event.target.id);
  });
});

submitButton.addEventListener("click", () => {
  //   console.log(value);
  ratingValue.textContent = value;
  submittedPage.classList.add("active");
  ratingPage.classList.add("inactive");
});
