import {movieCart, updateCartQuantity, saveToStorage} from "./movieCart.js";
import {thrillerList} from "./data/thriller-data.js";
import {koreanList} from "./data/korean-data.js";
import {animeList} from "./data/anime-data.js";
import {scifiList} from "./data/scifi-data.js";

updateCartQuantity();

function renderWatchlistHTML() {

    let watchlistHTML = '';

    /*
    function categoryIdentifier(item, watchlistHTML) {

        if (item.movieId === item.id && item.category === 'movie') {

        watchlistHTML += `
        
            <div class="watchlist-container">

            <img src="${item.image}">

            <div class="watchlist-details">

                <div class="watchlist-specific-info">

                    <h2> ${item.title}<b> ${item.hours} </b> </h2>
                    <a href="${item.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${item.director} </p>
                    <p> Stars: ${item.stars} </p>
                    <p> Release date: ${item.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button"> REMOVE </button>

                </div>

            </div>

        </div>
        
        `;

        }

        else if ((item.movieId === item.id && item.category === 'series')) {

        watchlistHTML += `
        
            <div class="watchlist-container">

                <img src="${item.image}">

                <div class="watchlist-details">

                    <div class="watchlist-specific-info">

                        <h2> ${item.title}<b> ${item.episodes} </b> </h2>
                        <a href="${item.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                        <p> Directed by: ${item.director} </p>
                        <p> Stars: ${item.stars} </p>
                        <p> Release date: ${item.releaseDate} </p>

                    </div>

                    <div class="watchlist-button">

                        <button class="actual-button"> REMOVE </button>

                    </div>

                </div>

            </div>
        
        `;

        }
    }
    */


    movieCart.forEach((movieItem) => {

    thrillerList.forEach((thrillerItem) => {

        if (movieItem.movieId === thrillerItem.id && thrillerItem.category === 'movie') {

        watchlistHTML += `
        
            <div class="watchlist-container">

            <img src="${thrillerItem.image}">

            <div class="watchlist-details">

                <div class="watchlist-specific-info">

                    <h2> ${thrillerItem.title}<b> ${thrillerItem.hours} </b> </h2>
                    <a href="${thrillerItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${thrillerItem.director} </p>
                    <p> Stars: ${thrillerItem.stars} </p>
                    <p> Release date: ${thrillerItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${thrillerItem.id}"> REMOVE </button>

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
                        <a href="${thrillerItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                        <p> Directed by: ${thrillerItem.director} </p>
                        <p> Stars: ${thrillerItem.stars} </p>
                        <p> Release date: ${thrillerItem.releaseDate} </p>

                    </div>

                    <div class="watchlist-button">

                        <button class="actual-button js-remove-button"
                        data-movie-id="${thrillerItem.id}"> REMOVE </button>

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
                    <a href="${koreanItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${koreanItem.director} </p>
                    <p> Stars: ${koreanItem.stars} </p>
                    <p> Release date: ${koreanItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${koreanItem.id}"> REMOVE </button>

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
                    <a href="${koreanItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${koreanItem.director} </p>
                    <p> Stars: ${koreanItem.stars} </p>
                    <p> Release date: ${koreanItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${koreanItem.id}"> REMOVE </button>

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
                    <a href="${scifiItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${scifiItem.director} </p>
                    <p> Stars: ${scifiItem.stars} </p>
                    <p> Release date: ${scifiItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${scifiItem.id}"> REMOVE </button>

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
                    <a href="${scifiItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${scifiItem.director} </p>
                    <p> Stars: ${scifiItem.stars} </p>
                    <p> Release date: ${scifiItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${scifiItem.id}"> REMOVE </button>

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
                    <a href="${animeItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${animeItem.director} </p>
                    <p> Stars: ${animeItem.stars} </p>
                    <p> Release date: ${animeItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${animeItem.id}"> REMOVE </button>

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
                    <a href="${animeItem.trailer}" class="trailer-button" target="_blank"> ▶ TRAILER </a>
                    <p> Directed by: ${animeItem.director} </p>
                    <p> Stars: ${animeItem.stars} </p>
                    <p> Release date: ${animeItem.releaseDate} </p>

                </div>

                <div class="watchlist-button">

                    <button class="actual-button js-remove-button"
                    data-movie-id="${animeItem.id}"> REMOVE </button>

                </div>

            </div>

        </div>
        
        `;

        }

    });
    
    });


    document.querySelector('.js-watchlist-section').innerHTML = watchlistHTML;

}

renderWatchlistHTML();
addRemoveButtons();

function addRemoveButtons() {

    document.querySelectorAll('.js-remove-button')
        .forEach((button) => {

            button.addEventListener('click', () => {
                const movieId = button.dataset.movieId;

                let newCart = [];

                movieCart.forEach((item) => {

                    if (item.movieId !== movieId) {
                        newCart.push(item);
                    }

                });

                movieCart.length = 0;

                newCart.forEach((item) => {
                    movieCart.push(item);
                });

                saveToStorage();

                renderWatchlistHTML();
                addRemoveButtons();
                updateCartQuantity();


            });

    });

}