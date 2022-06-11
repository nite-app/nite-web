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
