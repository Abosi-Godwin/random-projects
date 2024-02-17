import {products} from "/shopping cart/modules/products.js";

import cartItems from "/shopping cart/modules/cart.js";


const addToCart = newItem => {
  cartItems.push(newItem)
}

const newCartItem1 = {
    title: 'Sneakers',
    price: 59.99,
    quantity: 23,
    description: 'An excellent sneaker for any type of Weather.',
    sku: 'HD345678',
    quantityInCart: 3
  
}

addToCart(newCartItem1)
console.log(cartItems);
console.log(products);