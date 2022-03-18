const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector(".nav-link");
const formCheck = document.querySelector("#fcheckbox");
const formSubmitBtn = document.getElementById("fSubmitBtn");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menuToggle.classList.toggle("toggle");
});

formCheck.addEventListener("change", function() {
    if (this.checked == true) {
        formSubmitBtn.disabled = false;
    } 
    if (this.checked == false) {
        formSubmitBtn.disabled = true;
    }
});

formSubmitBtn.addEventListener("click", () => {
    alert("Subscribed!")
});