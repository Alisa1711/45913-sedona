var link = document.querySelector(".button.big.brown");
var form = document.querySelector(".appointment-form");
form.classList.add("appointment-form-hide");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("appointment-form-hide");
});
