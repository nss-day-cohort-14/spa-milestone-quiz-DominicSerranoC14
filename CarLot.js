// The first IIFE should add a public function
// (e.g. loadInventory) that loads the inventory.json
// file and stores the inventory in a private variable.
// It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var CarLot = (function () {
  var inventory = [];
  var containerDiv = document.getElementById('main');
  var outputDiv = document.getElementById('output');

  return {
    getInventory: function () {
      return inventory;
    },

    //method that loads and stores the XHR request in an array
    loadInventory: function (callback) {
      //create new XHR request
      var inventoryLoader = new XMLHttpRequest();

      //get request/object
      inventoryLoader.open("GET", "inventory.json");

      //send request
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        //store and parse the responseText from the XHR request
        var data = JSON.parse(event.target.responseText);
        inventory.push(data);
        populatePage(callback);
      });
    },//end loadInventory method

    //method that will print the loaded XHR request to page
    buildInventory: function () {
      //loop that loops through inventory and writes each car
      //object to page
      var htmlstring = "";
      var id = 0;
        for (let i = 0; i < inventory[0].cars.length; i++) {
          var list = inventory[0].cars[i];
          htmlstring += `<div id="card--${id}" class="col-md-3 cards">`;
          htmlstring += `<p>${list.make}:  `;
          htmlstring += `${list.model}</p>`;
          htmlstring += `<p>${list.year}</p>  `;
          htmlstring += `<p>${list.price}</p>  `;
          htmlstring += `<p id="color--${id}">${list.color}</p>`;
          htmlstring += `<input type="checkbox" disabled>`;
          htmlstring += `Purchased: ${list.purchased}</input>`;
          htmlstring += `<p>${list.description}</p>`;
          htmlstring += `</div>`;
          id++;
          outputDiv.innerHTML = htmlstring;
        };//end second for loop

    }//end buildInventory method



  }//end return and initializing object

})();
