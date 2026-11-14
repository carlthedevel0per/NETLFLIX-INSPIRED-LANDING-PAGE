import {animeList} from "./data/anime-data.js";
import { addToCart, movieCart, updateCartQuantity } from "./movieCart.js";

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

              <button class="js-add-to-list-button"
              data-movie-id=${animeItem.id}
              data-movie-title=${animeItem.title}> + Add to  watchlist </button>

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

              <button class="js-add-to-list-button"
              data-movie-id=${animeItem.id}
              data-movie-title=${animeItem.title}> + Add to  watchlist </button>

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

updateCartQuantity();

document.querySelectorAll('.js-add-to-list-button').forEach((button) => {
  button.addEventListener('click', () => {
    const movieId = button.dataset.movieId;
    const movieTitle = button.dataset.movieTitle;

    addToCart(movieId, movieTitle);
    updateCartQuantity();
    console.log(movieCart);
  })

});

