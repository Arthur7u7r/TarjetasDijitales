/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
//console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
// $('button').click(function(){
// $('button').toggleClass('active');
//  $('.title').toggleClass('active');
//  $('nav').toggleClass('active');
// });

/**
 * It gets the parent of the element that is clicked and sets the background image of the parent to the
 * image of the card that was clicked.
 * @param elem - The element to be clicked.
 */

function getParent(elem) {
  var parent = elem.parentNode.parentNode;
  var parentStyle = getComputedStyle(parent);
  var tarjetaUrl = (parentStyle.backgroundImage).toString().substring(59);
  if(elem.parentNode.className == 'product-info-hover'){
    window.open("/plantillaDigital.html","_self");
    console.log((getComputedStyle(parent).backgroundImage).toString().substring(59));
  }
  localStorage.setItem("imageUrl", tarjetaUrl);
  //elem.parentNode.parentNode.style.backgroundImage = "url('https://static.quieroinvitar.com/templates/403.png')";
}

/* Adding a class to each element in the product-grid class. */
//https://stackoverflow.com/questions/55941321/css-select-same-class-names-and-assign-different-properties
/*document.querySelectorAll('.product-grid .product-container')
  .forEach(function(el, i) {
    el.className += ' child'+(i+1);
  /* Getting the background images of the products and adding them to an array. */
const setProductImages = () => {
  let tarjetas = document.querySelectorAll('.product-container');
  
  const tarjetasUrl = [
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/403.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/57.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/151.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/135.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/320.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/402.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/23.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/10.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/111.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/199.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/220.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/120.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/121.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/299.png')",
        "linear-gradient(0deg, rgba(4, 4, 4, 0%), rgba(4, 4, 4, 0%)), url('https://static.quieroinvitar.com/templates/400.png')"
    ];
  tarjetas.forEach((tarjeta, i)=> {
    i++;               
    tarjeta.style.background = tarjetasUrl[i];
    tarjeta.style.backgroundSize = 'cover'
    
  });
};
setProductImages();