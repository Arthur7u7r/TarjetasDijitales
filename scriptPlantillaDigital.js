/* A function that is executed when the page is loaded. */
window.onload = function () {
  setImageOnProduct();
  if(document.getElementById('selected').style.backgroundImage == ""){
        window.open("/index.html","_self");
  }
  else if(document.getElementById('selected').style.backgroundImage != ""){
    console.log('😎'); 
  }
}
/**
  * It sets the background image of the selected product to the imageUrl stored in local storage.
*/
var setTarjetaUrl = localStorage.getItem("imageUrl"); 
function setImageOnProduct(){
  //console.log(setTarjetaUrl);
  document.getElementById('selected').style.backgroundImage = setTarjetaUrl;
}