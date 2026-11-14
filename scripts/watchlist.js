import {movieCart, updateCartQuantity} from "./movieCart.js";
import {thrillerList} from "./data/thriller-data.js";
import {koreanList} from "./data/korean-data.js";
import {animeList} from "./data/anime-data.js";
import {scifiList} from "./data/scifi-data.js";

updateCartQuantity();

let watchlistHTML = '';

movieCart.forEach((movieItem) => {

  thrillerList.forEach((thrillerItem) => {

     if (movieItem.movieId === thrillerItem.id && thrillerItem.category === 'movie') {

      watchlistHTML += `
      
        <div class="watchlist-container">

          <img src="${thrillerItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${thrillerItem.title}<b> ${thrillerItem.hours} </b> </h2>
                  <a href="${thrillerItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${thrillerItem.director} </p>
                  <p> Stars: ${thrillerItem.stars} </p>
                  <p> Release date: ${thrillerItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      `;

     }

     else if ((movieItem.movieId === thrillerItem.id && thrillerItem.category === 'series')) {

      watchlistHTML += `
      
        <div class="watchlist-container">

            <img src="${thrillerItem.image}">

            <div class="watchlist-details">

                <div class="watchlist-specific-info">

                    <h2> ${thrillerItem.title}<b> ${thrillerItem.episodes} </b> </h2>
                    <a href="${thrillerItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                    <p> Directed by: ${thrillerItem.director} </p>
                    <p> Stars: ${thrillerItem.stars} </p>
                    <p> Release date: ${thrillerItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button"> REMOVE </button>

                </div>

            </div>

        </div>
      
      `;

     }

  });

  koreanList.forEach((koreanItem) => {

    if (movieItem.movieId === koreanItem.id && koreanItem.category === 'movie') {

      watchlistHTML += `
      
        <div class="watchlist-container">

          <img src="${koreanItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${koreanItem.title}<b> ${koreanItem.hours} </b> </h2>
                  <a href="${koreanItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${koreanItem.director} </p>
                  <p> Stars: ${koreanItem.stars} </p>
                  <p> Release date: ${koreanItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      `;

     }

     else if (movieItem.movieId === koreanItem.id && koreanItem.category === 'series') {

      watchlistHTML += `

      <div class="watchlist-container">

          <img src="${koreanItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${koreanItem.title}<b> ${koreanItem.episodes} </b> </h2>
                  <a href="${koreanItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${koreanItem.director} </p>
                  <p> Stars: ${koreanItem.stars} </p>
                  <p> Release date: ${koreanItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      
      `;

     }

  });

  scifiList.forEach((scifiItem) => {

    if (movieItem.movieId === scifiItem.id && scifiItem.category === 'movie') {

      watchlistHTML += `
      
        <div class="watchlist-container">

          <img src="${scifiItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${scifiItem.title}<b> ${scifiItem.hours} </b> </h2>
                  <a href="${scifiItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${scifiItem.director} </p>
                  <p> Stars: ${scifiItem.stars} </p>
                  <p> Release date: ${scifiItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      `;

     }

     else if (movieItem.movieId === scifiItem.id && scifiItem.category === 'series') {

      watchlistHTML += `

      <div class="watchlist-container">

          <img src="${scifiItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${scifiItem.title}<b> ${scifiItem.episodes} </b> </h2>
                  <a href="${scifiItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${scifiItem.director} </p>
                  <p> Stars: ${scifiItem.stars} </p>
                  <p> Release date: ${scifiItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      
      `;

     }

  });

  animeList.forEach((animeItem) => {

    if (movieItem.movieId === animeItem.id && animeItem.category === 'movie') {

      watchlistHTML += `
      
        <div class="watchlist-container">

          <img src="${animeItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${animeItem.title}<b> ${animeItem.hours} </b> </h2>
                  <a href="${animeItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${animeItem.director} </p>
                  <p> Stars: ${animeItem.stars} </p>
                  <p> Release date: ${animeItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      `;

     }

     else if (movieItem.movieId === animeItem.id && animeItem.category === 'series') {

      watchlistHTML += `
      
        <div class="watchlist-container">

          <img src="${animeItem.image}">

          <div class="watchlist-details">

              <div class="watchlist-specific-info">

                  <h2> ${animeItem.title}<b> ${animeItem.episodes} </b> </h2>
                  <a href="${animeItem.trailer}" class="trailer-button"> ▶ TRAILER </a>
                  <p> Directed by: ${animeItem.director} </p>
                  <p> Stars: ${animeItem.stars} </p>
                  <p> Release date: ${animeItem.releaseDate} </p>

              </div>

              <div class="watchlist-button">

                  <button class="actual-button"> REMOVE </button>

              </div>

          </div>

      </div>
      
      `;

     }

  });
 
});

document.querySelector('.js-watchlist-section').innerHTML = watchlistHTML;