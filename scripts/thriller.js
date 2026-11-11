import {thrillerList} from './data/thriller-data.js';

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

            <button> + Add to watchlist </button>

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

              <button> + Add to watchlist </button>

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







