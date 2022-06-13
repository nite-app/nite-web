function sendMail() {
  var link =
    "mailto:info@niteapp.cf" +
    "?cc=commercial@niteapp.cf" +
    "&subject=" +
    encodeURIComponent(document.getElementById("subjecttxt").value) +
    "&body=" +
    encodeURIComponent(document.getElementById("msgtxt").value);
  window.location.href = link;
}

const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobilenav.classList.toggle("is-active");
});
