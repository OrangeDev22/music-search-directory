const body = document.body;
const form_home = document.getElementById("form_home");

form_home.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href =
    "results.html?search=" + form_home.getElementsByTagName("input")[0].value;
});
