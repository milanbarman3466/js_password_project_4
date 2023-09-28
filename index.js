let passwordGet = document.querySelector("#ps");
let IconGet = document.querySelector("#icon");

IconGet.addEventListener("click", function () {
  if (passwordGet.type === "password") {
    passwordGet.type = "text";
    IconGet.classList.remove("ri-eye-off-line");
    IconGet.classList.add("ri-eye-line");
  } else {
    passwordGet.type = "password";
    IconGet.classList.remove("ri-eye-line");
    IconGet.classList.add("ri-eye-off-line");
  }
});
