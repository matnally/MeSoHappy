
function initStart() {

  //INIT

  setSlidersValues(slidersJSONtoArray(arrSliders)); //create and display items table
  //arrSliders = slidersJSONtoArray(arrSliders);
  //setSlidersValues(arrSliders);

  populateElement("elemItemsContainer", createItemsTable(itemsJSONtoArray(arrItems))); //create and display items table

}
