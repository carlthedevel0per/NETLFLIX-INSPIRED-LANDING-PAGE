import {animeList} from "./data/anime-data.js";

let movieListHTML = '';
let seriesListHTML = '';

animeList.forEach((animeItem) => {

  if (animeItem.category === 'movie') {

    movieListHTML += `
    
      <div class="anime-each-box">

          <div>

              <img src="${animeItem.image}">

          </div>
          
          <div class="box-details">

              <h3> ${animeItem.title} </h3>

              <p> ${animeItem.summary} </p>

              <p> 🍅 ${animeItem.Ratings.tomatoRating} 🍿 ${animeItem.Ratings.popcornRating} </p> 

              <button> + Add to watchlist </button>

          </div>

      </div>
    
    `;

  }

  else if (animeItem.category === 'series') {

    seriesListHTML += `
    
      <div class="anime-each-box">

          <div>

              <img src="${animeItem.image}">

          </div>

          <div class="box-details">

              <h3> ${animeItem.title} </h3>

              <p> ${animeItem.summary} </p>

              <p> 🍅 ${animeItem.Ratings.tomatoRating} 🍿 ${animeItem.Ratings.popcornRating}  </p> 

              <button> + Add to watchlist </button>

          </div>

      </div>
    
    `;
  }

});

let animeListHTML = `

  <div class="anime-list-movie">

      <h3 class="anime-category"> MOVIES </h3>

      ${movieListHTML}

  </div>

  <div class="anime-list-series">

      <h3 class="anime-category"> SERIES </h3>

      ${seriesListHTML}

  </div>

`;


document.querySelector('.js-anime-list').innerHTML = animeListHTML;

