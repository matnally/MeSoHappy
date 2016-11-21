
var arrItems = new Array(); //Global Array to store all Products
    arrItems = [{
                   "id": 1
                   ,"name": "Hot Chocolate"
                   ,"description": "Hot chocolate, also known as hot cocoa, drinking chocolate or just cocoa is a heated beverage consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and often sugar."
                   ,"type": "Beverage"
                   ,"quantity": 27
                   ,"price": 2.50
                   ,"happiness": 1
                   ,"health": 5
                  },{
                   "id": 2
                   ,"name": "Coffee"
                   ,"description": "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant."
                   ,"type": "Beverage"
                   ,"quantity": 73
                   ,"price": 3
                   ,"happiness": 11
                   ,"health": 5
                  },{
                   "id": 3
                   ,"name": "Tea"
                   ,"description": "Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia."
                   ,"type": "Beverage"
                   ,"quantity": 16
                   ,"price": 2.70
                   ,"happiness": 111
                   ,"health": 5
               }]; //array


/************* START INIT *************/
var objItems = new Object();
    objItems = { //Assign functions to object
       setValues: function (intID, strName, strDescription, strType, intQuantity, intPrice, intHappiness, intHealth) { //Set Object Property values
           this.id = intID;
           this.name = strName;
           this.description = strDescription;
           this.type = strType;
           this.quantity = intQuantity;
           this.price = intPrice;
           this.happiness = intHappiness;
           this.health = intHealth;
       } //setValues
    }; //objItems
/************* END INIT *************/


function itemsJSONtoArray(arrArray) {

  //transform JSON to array
  var arrTemp = [];
  for (var prop in arrArray) {
    var objItemsInstance = Object.create(objItems); //Create Object
        objItemsInstance.setValues(arrArray[prop].id
                                    ,arrArray[prop].name
                                    ,arrArray[prop].description
                                    ,arrArray[prop].type
                                    ,arrArray[prop].quantity
                                    ,arrArray[prop].price //Init
                                    ,arrArray[prop].happiness
                                    ,arrArray[prop].health
                                  ); //setValues
    arrTemp.push(objItemsInstance); //Write Object to Array
  } //for

  return arrTemp;

} //function


/****************** START Create HTML ******************/
function createItemsTable(arrArray) {

  var strTemp = "<div class='rTable'>";
      strTemp += createTableHeadings(arrArray);
      strTemp += createTableContent(arrArray);
      strTemp += "</div>"; //rTable
  return strTemp;

} //function
function createTableHeadings(arrArray) {

  var strTemp = "<div class='rTableHeading'>";
  Object.keys(arrArray[0]).forEach(function (key) { //Uses the first iteration, 0, of the array to get the headings list
    strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label>"+key+"</label></div>";
  });
  strTemp += "</div>"; //rTableHeading
  return strTemp;

} //function
function createTableContent(arrArray) {

  var strTemp = "";
  for (var i=0; i<arrArray.length; i++) { //For loop to go through array
    strTemp += "<div class='rTableRow' onClick='singleClick("+i+")' onDblClick='InventoryTableAdd("+i+")'>";
    Object.keys(arrArray[i]).forEach(function (key) {
      strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label>"+arrArray[i][key]+"</label></div>";
    });
    strTemp += "</div>"; //rTableRow
  }// For
  return strTemp;

} //function
function checkIfHidden(strString) {

  //check if table cell should have a class of hidden

  var strTemp = "";
  switch (true) {
    case (strString == "id") :
      strTemp = " hidden";
    break;
    case (strString == "description") :
      strTemp = " hidden";
    break;
  }
  return strTemp;

} //function
/****************** END Create HTML ******************/

function singleClick(intID) {

  var strTemp = "<div class='rTable'>";

      strTemp += "<div class='rTableHeading'>";
      strTemp += "<p>"+arrItems[intID].name+"</p>";
      strTemp += "</div><!-- rTableHeading -->";

      strTemp += "<div class='rTableRow'>";
        strTemp += "<div class='rTableCell'>";
        strTemp += "<p>"+arrItems[intID].description+"</p>";
        strTemp += "<p>"+arrItems[intID].quantity+"</p>";
        strTemp += "<p>"+arrItems[intID].price+"</p>";
        strTemp += "<p>"+arrItems[intID].happiness+"</p>";
        strTemp += "<p>"+arrItems[intID].health+"</p>";
        strTemp += "</div><!-- rTableCell -->";
      strTemp += "</div><!-- rTableRow -->";

      strTemp += "</div><!-- rTable -->";

  populateElement("elemItemDetailsContainer", strTemp); //Show Product details

} //function
