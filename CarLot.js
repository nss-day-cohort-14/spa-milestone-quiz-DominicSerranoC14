// The first IIFE should add a public function
// (e.g. loadInventory) that loads the inventory.json
// file and stores the inventory in a private variable.
// It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var CarLot = (function () {
  var inventory = [];
  var containerDiv = document.getElementById('container');
  var outputDiv = document.getElementById('row');

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

        callback();
      });
    },//end loadInventory method

    //method that will print the loaded XHR request
    buildInventory: function () {
      console.log(CarLot.getInventory());
      console.log(inventory[0].cars)
      //loop that loops through inventory and writes each car
      //object to page
        // for (let i = 0; inventory[0].cars.length; i++) {
          for(let j = 0; inventory[i].cars[j].length; j++) {
          let list = inventory[i].cars[j];
          let htmlstring = "";
          htmlstring += `<div class="cards">`;
          htmlstring += `<p>${list.make}:  `;
          htmlstring += `${list.model}</p>`;
          htmlstring += `<p>${list.year}  `;
          htmlstring += `${list.price}  `;
          htmlstring += `${list.color}</p>`;
          htmlstring += `<input type="checkbox" checked disabled>`;
          htmlstring += `${list.purchased}</input>`;
          htmlstring += `<p>${list.description}</p>`;
          htmlstring += `</div>`;
          outputDiv.innerHTML = htmlstring;
          console.log(htmlstring);
          console.log(outputDiv);
        };//end second for loop

      };//end first for loop

    }//end buildInventory method

  }//end return and initializing object

})();
