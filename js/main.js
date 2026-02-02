const inputCheckBox = document.querySelector(".input");
const moonSunImg = document.querySelector(".moon-sun-img");

const SUN_IMG = "assets/images/sun-svgrepo-com.svg";
const MOON_IMG = "assets/images/moon-svgrepo-com.svg";

const savedMode = localStorage.getItem("bodyBgMode");

if (savedMode === "dark") {
  document.body.classList.add("dark");
  moonSunImg.src = SUN_IMG;
  inputCheckBox.checked = true;
} else {
  document.body.classList.remove("dark");
  moonSunImg.src = MOON_IMG;
  inputCheckBox.checked = false;
}

inputCheckBox.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark");
    moonSunImg.src = SUN_IMG;
    localStorage.setItem("bodyBgMode", "dark");
  } else {
    document.body.classList.remove("dark");
    moonSunImg.src = MOON_IMG;
    localStorage.setItem("bodyBgMode", "light");
  }
});
