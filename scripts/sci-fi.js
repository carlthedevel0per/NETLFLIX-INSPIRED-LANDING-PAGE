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

