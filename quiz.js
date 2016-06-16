function populatePage () {
  // Loop over the inventory and populate the page
  CarLot.buildInventory();

  //call functions to add event listeners for cards
  CarLot.activateEvents();

  CarLot.userInputListener();

  CarLot.changeDescription();

}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
