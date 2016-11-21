
function initStart() {

  //INIT

  setSlidersValues(slidersJSONtoArray(arrSliders)); //create and display items table

  populateElement("elemItemsContainer", createItemsTable(itemsJSONtoArray(arrItems))); //create and display items table

  //update display labels in page
  document.getElementById("labDateCurrent").innerHTML = objPlayerInstance.DateStarted.toString().split(" ").slice(0, 4).join(" "); //current date
  document.getElementById("labDateWorked").innerHTML = objPlayerInstance.TimeWorked + " days worked"; //current date
  //profile updates
  document.getElementById("labHealth").innerHTML = objPlayerInstance.Health;
  document.getElementById("labHappiness").innerHTML = objPlayerInstance.Happiness;
  document.getElementById("labMoney").innerHTML = objPlayerInstance.Money;

  populateElement("elemInventoryContainer", createInventoryTable(itemsJSONtoArray(arrItems))); //create and display items table

} //function
