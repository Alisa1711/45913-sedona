var link=document.querySelector(".button.big.brown"),form=document.querySelector(".appointment-form");form.classList.add("appointment-form-hide");link.addEventListener("click",function(a){a.preventDefault();form.classList.toggle("appointment-form-hide")});
