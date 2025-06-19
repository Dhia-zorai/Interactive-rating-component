const ratingButtons = document.querySelectorAll(".ratings button");
let selectedRating = null;

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    ratingButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-checked", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-checked", "true");
    selectedRating = btn.textContent;
  });
});

const submit = document.querySelector(".submit");
const rating_state = document.querySelector(".rating-state");
const thankyou = document.querySelector(".thankyou");
let selection = document.querySelector(".selection");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  rating_state.classList.add("active");
  thankyou.classList.add("active");
  selection.innerHTML = selectedRating;
});
