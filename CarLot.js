// The first IIFE should add a public function
// (e.g. loadInventory) that loads the inventory.json
// file and stores the inventory in a private variable.
// It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var CarLot = (function () {
  var inventory = [];
  var containerDiv = document.getElementById('container');

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
      });
    },//end loadInventory method

    //method that will print the loaded XHR request
    buildInventory: function (callback) {

      //loop that loops through inventory and writes each car
      //object to page
      for ( let i = 0; i < inventory.length; i++ ) {
        console.log(inventory[i].cars);
        for (let j = 0; inventory[i].cars[j]; j++) {
          var cars = inventory[i].cars[j];          // for ( key in cars ) {
          cars.make;
          cars.model;
          cars.year;
          cars.price;
          cars.color;
          cars.purchased;
          cars.description;
        }
        }
      };//end for loop

    }//end buildInventory method

  };//end return and initializing object

})();
