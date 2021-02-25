const body = document.body;
const form_home = document.getElementById("form_home");

form_home.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form working");
  window.location.href =
    "results.html?search=" + form_home.getElementsByTagName("input")[0].value;
});
