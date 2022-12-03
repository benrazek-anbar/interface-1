let navbar = document.querySelector('.content-header .menu ');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}
let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.add('active');
}   

document.querySelector('.close').onclick = () =>{
   account.classList.remove('active');
} 

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('.close-order').onclick = () =>{
   myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('.close-shopping-cart').onclick = () =>{
   cart.classList.remove('active');
}

window.onscroll = () =>{
   account.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
}

