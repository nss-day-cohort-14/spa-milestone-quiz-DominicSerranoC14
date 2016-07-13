var CarLot = (function(carBorder) {

//function that sets background and border width when you click
//on a car card
carBorder.highlightCard = function(car, color) {
  carBorder.resetStyle();
  car.classList.add('highlight-card');
  car.setAttribute('style', `background: ${color}`);
  //set border color with function call
  carBorder.setBorder();

},// end of highlightCard method


carBorder.resetStyle = function() {
  currentCars = carBorder.getCarsFromDom();
  for (var i = 0; i < currentCars.length; i++) {
    currentCars[i].classList.remove('highlight-card');
    currentCars[i].removeAttribute('style');
  }//end for loop

}// end carBorder.resetStyle function

return carBorder;

})( CarLot );//end of IIFE
