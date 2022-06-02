let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
 
}



function openModal() {
  document.getElementById("myModal").style.display = "block";
}


// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}




// /* SLIDER SECTION */



// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   slides[slideIndex-1].style.display = "block";
  
// }
















// // ADD TO CART //

// const cart = document.getElementById('shopping-cart');
// const cartModalOverlay = document.querySelector('.modal-overlay');

// cart.addEventListener('click', () => {
//   if (cartModalOverlay.style.transform === 'translateX(-200%)'){
//     cartModalOverlay.style.transform = 'translateX(0)';
//   } else {
//     cartModalOverlay.style.transform = 'translateX(-200%)';
//   }
// })


// // end of open cart modal

// // close cart modal
// const closeBtn = document.querySelector ('#close-btn');

// closeBtn.addEventListener('click', () => {
//   cartModalOverlay.style.transform = 'translateX(-200%)';
// });

// cartModalOverlay.addEventListener('click', (e) => {
//   if (e.target.classList.contains('cart-modal-overlay')){
//     cartModalOverlay.style.transform = 'translateX(-200%)'
//   }
// })
// // // end of close cart modal

// // // add products to cart
// const addToCart = document.getElementsByClassName('cart-btn');
// const productRow = document.getElementsByClassName('product-row');

// for (var i = 0; i < addToCart.length; i++) {
//   button = addToCart[i];
//   button.addEventListener('click', addToCartClicked)
// }

// function addToCartClicked (event) {
//   button = event.target;
//   var cartItem = document.querySelector('product-image');
//   var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
//   var imageSrc = cartItem.getElementsByClassName('')[0].src;
//   addItemToCart (price, imageSrc);
//   updateCartPrice()
// }

// function addItemToCart (price, imageSrc) {
//   var productRow = document.createElement('div');
//   productRow.classList.add('product-row');
//   var productRows = document.getElementsByClassName('product-rows')[0];
//   var cartImage = document.getElementsByClassName('shopping-cart');
  
//   for (var i = 0; i < cartImage.length; i++){
//     if (cartImage[i].src == imageSrc){
//       alert ('This item has already been added to the cart')
//       return;
//     }
//   }
  
//   var cartRowItems = `
//   <div class="product-row">
//         <img class="cart-image" src="${imageSrc}" alt="">
//         <span class ="cart-price">${price}</span>
//         <input class="product-quantity" type="number" value="1">
//         <button class="remove-btn">Remove</button>
//         </div>
        
//       `
//   productRow.innerHTML = cartRowItems;
//   productRows.append(productRow);
//   productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
//   productRow.getElementById('number')[0].addEventListener('change', changeQuantity)
//   updateCartPrice()
// }








// // /* INPUT SECTION */

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


