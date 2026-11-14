export let movieCart = JSON.parse(localStorage.getItem('movieCart'));

if (!movieCart) {

  movieCart = [

    {
      movieId: "thriller1",
      movieTitle: "FRACTURED"
    },
    {
      movieId: "korean1",
      movieTitle: "moving"
    },
    {
      movieId: "scifi1",
      movieTitle: "AVENGERS: INFINITY WAR"
    }

  ]

}

export function addToCart(movieId, movieTitle) {

  let newItem = true;

  movieCart.forEach((movieItem) => {

    if (movieId === movieItem.movieId) {
      newItem = false;
    }

  });

  if (newItem) {
    movieCart.push({
      movieId: movieId,
      movieTitle: movieTitle
  });
  }

  saveToStorage();


}

export function updateCartQuantity() {

  let cartQuantity = 0;

  movieCart.forEach((movieItem) => {

    movieItem = 1;

    cartQuantity += movieItem;

  });

  saveToStorage();

  document.querySelector('.js-cart-text').innerHTML = cartQuantity;

}


function saveToStorage() {
  localStorage.setItem('movieCart', JSON.stringify(movieCart));
}



