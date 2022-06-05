// SLIDER SECTION //

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

// INPUT SECTION //

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




// OPEN MODAL//

// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }


// Close the Modal
// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }


// OPEN CART//

// const cart = document.getElementById('shopping-cart');
// const cartModalOverlay = document.querySelector('.modal-overlay');

// cart.addEventListener('click', () => {
//   if (cartModalOverlay.style.transform === 'translateX(-200%)'){
//     cartModalOverlay.style.transform = 'translateX(0)';
//   } else {
//     cartModalOverlay.style.transform = 'translateX(-200%)';
//   }
// })


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



// // // add products to cart
// Quantity Functions
// let initialQt = 1;
// document.querySelector(".cart-btn").addEventListener("click", () => {
//     initialQt++;
//     document.querySelector(".number").innerHTML = initialQt;
//     let price = 125 * initialQt;
//     document.querySelector(".product-price").innerHTML = "$" + actualPrice + ".00";
    
    
// })
// document.querySelector("#decrease").addEventListener("click", () => {
//     initialQt--;
//     if (initialQt >= 1) {
//         document.querySelector(".number").innerHTML = initialQt;
//         let price = 125 * initialQt;
//         document.querySelector(".product-price").innerHTML = "$" + actualPrice + ".00";
//     }
// })


// CART FUNCTION //

// document.querySelector("#shopping-cart").addEventListener("click", () => {
//   let cartDiv = document.querySelector(".cart-modal");
//   if (cartDiv.style.display == 'none') {
//       cartDiv.style.display = "block";
//   } else {
//       cartDiv.style.display = "none";
//   }
// })

//Add to cart Function 
// document.querySelector(".cart-btn").addEventListener("click", () => {
//   document.querySelector(".modal-overlay").style.display = "block";
//   document.querySelector(".cart-is-empty").style.display = "none";
//   document.querySelector(".cart-modal").style.display = "block";
//   let Qt = document.querySelector("#number").innerHTML;
//   let cartQt = document.querySelector(".product-rows");
//   cartQt.innerHTML = Qt;

//   document.querySelector(".total").style.display = "block";

//   let totalPrice = document.querySelector(".product-price").innerHTML;
  
//   totalPriceCart.innerHTML = totalPrice;
// })

//Remove from cart Function 
// document.querySelector(".delete-item").addEventListener("click", (e) => {
//   let deleteButton = e.target;
//   deleteButton.parentElement.parentElement.remove();
//   document.querySelector(".empty").style.display = 'block';
//   document.querySelector(".quantity").style.display = "none";

// })













