const body = document.body;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const baseUrl = "https://itunes.apple.com/search?term=";
const searchText = urlParams.get("search");
const results = [];
let resultShow = document.querySelector(".result-show");
let loading = true;
let title = document.createElement("h3");
body.prepend(title);

const fetchData = async () => {
  const url = `${baseUrl}${searchText}&attribute=mixTerm&media=music`;
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {
      const { results, resultCount } = json;
      title.innerText = `Search Results: ${resultCount}`;
      results.forEach((result) => {
        let show = `
        <div class = "song">
            <img src="${result.artworkUrl100}" value= "${result.previewUrl}" alt="">
            <h3> ${result.artistName} </h3>
            <h2> ${result.trackName} </h2>
            <audio controls class = "play">
            <source value="" src="${result.previewUrl}" type="audio/mpeg">
        </div>
        `;
        resultShow.insertAdjacentHTML("beforeEnd", show);
      });
      loading = false;
    });
};

fetchData();
