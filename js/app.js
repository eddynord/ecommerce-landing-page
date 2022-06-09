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


// OPEN MODAL FOR LIGHTBOX //

function openModal() {
  document.getElementById("myModal").style.display = "block";
}


// Close the Modal FOR LIGHTBOX //
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// OPEN CART//

const cart = document.getElementById('shopping-cart');
const cartModalOverlay = document.querySelector('.modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.display === 'none'){
    
    cartModalOverlay.style.display = 'block';
    
  } else {
    cartModalOverlay.style.display = 'none';
  }
})


// CLOSE CART MODAL //
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.display = 'none';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'block'
  }
})


// let cartIcon = document.getElementById('shopping-cart');
// let productCounter = document.getElementById('number');
// let addToCart = document.querySelector('.cart-btn');
// let finalPrice = document.querySelector('.final-price')






// var quantityInputs = document.getElementById('number')
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }


// var addToCartButtons = document.querySelector('.cart-btn')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }


// function quantityChanged(event) {
//       var input = event.target
//       if (isNaN(input.value) || input.value <= 0) {
//           input.value = 1
//       }
//       updateCartTotal()
//   }
  
//   function addToCartClicked(event) {
//       var button = event.target
      
     
//       var price = shopItem.querySelector('.final-price')[0].innerText
      
//       addItemToCart( price)
//       updateCartTotal()
//   }

 
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }



// Quantity Functions
//     let initialQt = 1;
//     initialQt = document.querySelector(".number") ;
//     document.querySelector(".cart-btn").addEventListener("click", () => {
//     initialQt++;
    
//     let price = 125 * initialQt;
//     document.querySelector(".final-price").innerHTML = "$" + ".00";
// })


// document.querySelector("#increase").addEventListener("click", () => {
//   initialQt++;
//   if (initialQt >= 1) {
//       initialQt = document.querySelector(".number").innerHTML;
//       let price = 125 * initialQt;
//       document.querySelector(".final-price").innerHTML = "$" + actualPrice + ".00";
     
//   }
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













