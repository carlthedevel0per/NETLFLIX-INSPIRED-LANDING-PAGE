import { scifiList } from "./data/scifi-data.js";
import { updateCartQuantity, addToCart, movieCart } from "./movieCart.js";

let movieListHTML = '';
let seriesListHTML = '';

scifiList.forEach((scifiItem) => {

  if (scifiItem.category === 'movie') {

    movieListHTML += `
    
      <div class="scifi-each-box">

          <div>

              <img src="${scifiItem.image}">

          </div>
          
          <div class="box-details">

              <h3> ${scifiItem.title} </h3>

              <p> ${scifiItem.summary} </p>

              <p> 🍅 ${scifiItem.Ratings.tomatoRating} 🍿 ${scifiItem.Ratings.popcornRating} </p>
              
              <button class="js-add-to-list-button"
              data-movie-id=${scifiItem.id}
              data-movie-title=${scifiItem.title}> + Add to  watchlist </button>

          </div>

      </div>
    
    `;

  }

  else if (scifiItem.category === 'series') {

    seriesListHTML += `
    
      <div class="scifi-each-box">

          <div>

              <img src="${scifiItem.image}">

          </div>

          <div class="box-details">

              <h3> ${scifiItem.title} </h3>

              <p> ${scifiItem.summary} </p>

              <p> 🍅 ${scifiItem.Ratings.tomatoRating} 🍿 ${scifiItem.Ratings.popcornRating}  </p> 

              <button class="js-add-to-list-button"
              data-movie-id=${scifiItem.id}
              data-movie-title=${scifiItem.title}> + Add to  watchlist </button>

          </div>

      </div>
    
    `;
  }

});

let sciFiListHTML = `

  <div class="scifi-list-movie">

      <h3 class="scifi-category"> MOVIES </h3>

      ${movieListHTML}

  </div>

  <div class="scifi-list-series">

      <h3 class="scifi-category"> SERIES </h3>

      ${seriesListHTML}

  </div>

`;

document.querySelector('.js-scifi-list').innerHTML = sciFiListHTML;

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

  const matchingItem = scifiList.filter((movieItem) => {
    return movieItem.keywords.some((keyword) => {

      return keyword.includes(inputText);

    });
  });

  let searchedMovieItem = '';
  let searchedSeriesItem = '';

  matchingItem.forEach((movieItem) => {

    if (movieItem.category === 'movie') {

      searchedMovieItem += `

        <div class="scifi-each-box">

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

        <div class="scifi-each-box">

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
    
      <div class="scifi-list-movie">

          <h3 class="scifi-category"> MOVIES </h3>

          ${searchedMovieItem}

      </div>
    
    `;

  }

  if (searchedSeriesItem) {

    searchedItemHTML += `
    
      <div class="scifi-list-movie">

          <h3 class="scifi-category"> SERIES </h3>

          ${searchedSeriesItem}

      </div>
    
    `;

  }

  document.querySelector('.js-scifi-list')
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
