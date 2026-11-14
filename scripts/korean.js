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