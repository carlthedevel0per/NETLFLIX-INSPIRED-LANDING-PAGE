import { scifiList } from "./data/scifi-data.js";

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

              <button> + Add to watchlist </button>

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

              <button> + Add to watchlist </button>

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

