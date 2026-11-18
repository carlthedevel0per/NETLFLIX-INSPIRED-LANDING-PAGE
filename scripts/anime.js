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

addToWatchlistButtons();

updateCartQuantity();



function addToWatchlistButtons() {

  document.querySelectorAll('.js-add-to-list-button')
    .forEach((button) => {
    button.addEventListener('click', () => {
      const movieId = button.dataset.movieId;
      const movieTitle = button.dataset.movieTitle;

      addToCart(movieId, movieTitle);
      updateCartQuantity();
    });

  });

}



function searchFunction() {

  const inputText = document.querySelector('.js-input-box').value.toLowerCase();

  const matchingItem = animeList.filter((movieItem) => {
    return movieItem.keywords.some((keyword) => {

      return keyword.includes(inputText);

    });
  });

  let searchedMovieItem = '';
  let searchedSeriesItem = '';

  matchingItem.forEach((movieItem) => {

    if (movieItem.category === 'movie') {

      searchedMovieItem += `

        <div class="anime-each-box">

            <div>

                <img src="${movieItem.image}">

            </div>

            <div class="box-details">

                <h3> ${movieItem.title} </h3>

                <p> ${movieItem.summary} </p>

                <p> 🍅 ${movieItem.Ratings.tomatoRating} 🍿 ${movieItem.Ratings.popcornRating}  </p> 

                <button class="js-add-to-list-button"
                data-movie-id=${movieItem.id}
                data-movie-title=${movieItem.title}> + Add to  watchlist </button>

            </div>

        </div>
      
      
      `;

    }

    else if (movieItem.category === 'series') {

      searchedSeriesItem += `

        <div class="anime-each-box">

            <div>

                <img src="${movieItem.image}">

            </div>

            <div class="box-details">

                <h3> ${movieItem.title} </h3>

                <p> ${movieItem.summary} </p>

                <p> 🍅 ${movieItem.Ratings.tomatoRating} 🍿 ${movieItem.Ratings.popcornRating}  </p> 

                <button class="js-add-to-list-button"
                data-movie-id=${movieItem.id}
                data-movie-title=${movieItem.title}> + Add to  watchlist </button>

            </div>

        </div>
      
      
      
      `;

    }

  });

  let searchedItemHTML = '';

  if (searchedMovieItem) {

    searchedItemHTML += `
    
      <div class="anime-list-movie">

          <h3 class="anime-category"> MOVIES </h3>

          ${searchedMovieItem}

      </div>
    
    `;

  }

  if (searchedSeriesItem) {

    searchedItemHTML += `
    
      <div class="anime-list-movie">

          <h3 class="anime-category"> SERIES </h3>

          ${searchedSeriesItem}

      </div>
    
    `;

  }

  document.querySelector('.js-anime-list')
    .innerHTML = searchedItemHTML;

  addToWatchlistButtons();


}

document.querySelector('.js-search-button')
  .addEventListener('click', () => {

    searchFunction();
    document.querySelector('.js-input-box').value = '';
    document.querySelector('.js-banner-section').innerHTML = '';

  });

document.querySelector('.js-input-box')
  .addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
      searchFunction();
      document.querySelector('.js-input-box').value = '';
      document.querySelector('.js-banner-section').innerHTML = '';
    }

  });
