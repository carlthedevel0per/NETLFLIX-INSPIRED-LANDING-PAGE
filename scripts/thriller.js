import {thrillerList} from './data/thriller-data.js';
import { movieCart, addToCart, updateCartQuantity } from './movieCart.js';

let movieListHTML = '';
let seriesListHTML = '';

thrillerList.forEach((thrillerItem) => {
  
  if (thrillerItem.category === 'movie') {

    movieListHTML += `
    
    <div class="thriller-each-box">

        <div>

            <img src="${thrillerItem.image}">

        </div>
        
        <div class="box-details">

            <h3> ${thrillerItem.title} </h3>

            <p> ${thrillerItem.summary} </p>

            <p> 🍅 ${thrillerItem.Ratings.tomatoRating} 🍿 ${thrillerItem.Ratings.popcornRating} </p> 

            <button class="js-add-to-list-button"
            data-movie-id=${thrillerItem.id}
            data-movie-title=${thrillerItem.title}> + Add to watchlist </button>

        </div>

    </div>
  
    
    `;
    
  }

  else if (thrillerItem.category === 'series') {

    seriesListHTML += `
    
      <div class="thriller-each-box">

          <div>

              <img src="${thrillerItem.image}">

          </div>
          
          <div class="box-details">

              <h3> ${thrillerItem.title} </h3>

              <p> ${thrillerItem.summary} </p>

              <p> 🍅 ${thrillerItem.Ratings.tomatoRating} 🍿 ${thrillerItem.Ratings.popcornRating} </p> 

              <button class="js-add-to-list-button"
              data-movie-id=${thrillerItem.id}
              data-movie-title=${thrillerItem.title}> + Add to watchlist </button>

          </div>

      </div>
    
    `;
  
  }


});

let thrillerListHTML = `

  <div class="thriller-list-movie">

    <h3 class="thriller-category"> MOVIES </h3>

    ${movieListHTML}

  </div>

  <div class="thriller-list-series">

    <h3 class="thriller-category"> SERIES </h3>

    ${seriesListHTML}

  </div>
  
`; 

document.querySelector('.js-thriller-list-section').innerHTML = thrillerListHTML;

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

  const matchingItem = thrillerList.filter((movieItem) => {
    return movieItem.keywords.includes(inputText);
  }); 

  if (matchingItem.length === 0) {
    alert("Sorry, we don't have that. Try searching it to other genres.");
    return;
  }

  let searchedMovieItem = '';
  let searchedSeriesItem = '';

  matchingItem.forEach((movieItem) => {

    if (movieItem.category === 'movie') {

      searchedMovieItem += `
      
        <div class="thriller-each-box">

            <div>

                <img src="${movieItem.image}">

            </div>
            
            <div class="box-details">

                <h3> ${movieItem.title} </h3>

                <p> ${movieItem.summary} </p>

                <p> 🍅 ${movieItem.Ratings.tomatoRating} 🍿 ${movieItem.Ratings.popcornRating} </p> 

                <button class="js-add-to-list-button"
                data-movie-id=${movieItem.id}
                data-movie-title=${movieItem.title}> + Add to watchlist </button>

            </div>

        </div>
    
      `;

    }

    else if (movieItem.category === 'series') {

      searchedSeriesItem += `
      
        <div class="thriller-each-box">

            <div>

                <img src="${movieItem.image}">

            </div>
            
            <div class="box-details">

                <h3> ${movieItem.title} </h3>

                <p> ${movieItem.summary} </p>

                <p> 🍅 ${movieItem.Ratings.tomatoRating} 🍿 ${movieItem.Ratings.popcornRating} </p> 

                <button class="js-add-to-list-button"
                data-movie-id=${movieItem.id}
                data-movie-title=${movieItem.title}> + Add to watchlist </button>

            </div>

        </div>
    
      `;

    } 

  });

  let searchedItemHTML = '';

  if (searchedMovieItem) {

    searchedItemHTML = `
    
      <div class="thriller-list-movie">

        <h3 class="thriller-category"> MOVIES </h3>

        ${searchedMovieItem}

      </div>
    
    `;

  }

  if (searchedSeriesItem) {

    searchedItemHTML = `
    
      <div class="thriller-list-series">

        <h3 class="thriller-category"> SERIES </h3>

        ${searchedSeriesItem}

      </div>
    
    `;

  }

  document.querySelector('.js-thriller-list-section').innerHTML = searchedItemHTML;

  addToWatchlistButtons();

}


  document.querySelector('.js-search-button')
  .addEventListener('click', () => {
    
    searchFunction();
    document.querySelector('.js-input-box').value = '';
  
  });

  document.querySelector('.js-input-box')
  .addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {

      searchFunction();
      document.querySelector('.js-input-box').value = '';

    }
  
  });












