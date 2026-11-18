import { koreanList } from "./data/korean-data.js";
import { movieCart, addToCart, updateCartQuantity } from "./movieCart.js";

let movieListHTML = '';
let seriesListHTML = '';

koreanList.forEach((koreanItem) => {

  if (koreanItem.category === 'movie') {

    movieListHTML += `
    
      <div class="korean-each-box">

          <div>

              <img src="${koreanItem.image}">

          </div>
          
          <div class="box-details">

              <h3> ${koreanItem.title} </h3>

              <p> ${koreanItem.summary} </p>

              <p> 🍅 ${koreanItem.Ratings.tomatoRating} 🍿 ${koreanItem.Ratings.popcornRating} </p> 

              <button class="js-add-to-list-button"
              data-movie-id=${koreanItem.id}
              data-movie-title=${koreanItem.title}> + Add to  watchlist </button>

          </div>

      </div>
    
    `;

  }

  else if (koreanItem.category === 'series') {

    seriesListHTML += `
    
      <div class="korean-each-box">

          <div>

              <img src="${koreanItem.image}">

          </div>

          <div class="box-details">

              <h3> ${koreanItem.title} </h3>

              <p> ${koreanItem.summary} </p>

              <p> 🍅 ${koreanItem.Ratings.tomatoRating} 🍿 ${koreanItem.Ratings.popcornRating}  </p> 

              <button class="js-add-to-list-button"
              data-movie-id=${koreanItem.id}
              data-movie-title=${koreanItem.title}> + Add to  watchlist </button>

          </div>

      </div>
    
    `;
  }

});

let koreanListHTML = `

  <div class="korean-list-movie">

      <h3 class="korean-category"> K-MOVIES </h3>

      ${movieListHTML}

  </div>

  <div class="korean-list-series">

      <h3 class="korean-category"> K-DRAMA </h3>

      ${seriesListHTML}

  </div>

`;

document.querySelector('.js-korean-list').innerHTML = koreanListHTML;

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

  const matchingItem = koreanList.filter((movieItem) => {
    return movieItem.keywords.some((keyword) => {

      return keyword.includes(inputText);

    });
  });

  let searchedMovieItem = '';
  let searchedSeriesItem = '';

  matchingItem.forEach((movieItem) => {

    if (movieItem.category === 'movie') {

      searchedMovieItem += `

        <div class="korean-each-box">

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

        <div class="korean-each-box">

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
    
      <div class="korean-list-movie">

          <h3 class="korean-category"> K-MOVIES </h3>

          ${searchedMovieItem}

      </div>
    
    `;

  }

  if (searchedSeriesItem) {

    searchedItemHTML += `
    
      <div class="korean-list-series">

          <h3 class="korean-category"> K-MOVIES </h3>

          ${searchedSeriesItem}

      </div>
    
    `;

  }

  document.querySelector('.js-korean-list')
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

