const body = document.body;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const baseUrl = "https://itunes.apple.com/search?term=";
const searchText = urlParams.get("search");
const results = [];
const titlte_div = document.getElementById("title");
let resultShow = document.querySelector(".result_show");
let loading = true;
let title = document.createElement("h3");
let songs = document.getElementsByClassName("song");
let currentSong;

console.log(songs);

titlte_div.appendChild(title);

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
            <div class="image_wrapper"> <img src="${result.artworkUrl100}" value= "${result.previewUrl}" alt=""> </div>
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
