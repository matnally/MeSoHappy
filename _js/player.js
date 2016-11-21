
/************* START INIT *************/
var objPlayer = new Object();
    objPlayer = { //Assign functions to object
       setValues: function (strName, intDateStarted, intDateCurrent, arrDatesWorked, intDaysWorked, intHealth, intHappiness, intMoney) { //Set Object Property values
           this.name = strName;
           this.DateStarted = intDateStarted;
           this.DateCurrent = intDateCurrent;
           this.DatesWorked = arrDatesWorked;
           this.DaysWorked = intDaysWorked;
           this.Health = intHealth;
           this.Happiness = intHappiness;
           this.Money = intMoney;
       } //setValues
    }; //objPlayer


var objPlayerInstance = Object.create(objPlayer); //Create Object
    objPlayerInstance.setValues("A name" //name
                                ,new Date(2008, 10-1, 18) //DateStarted : -1 because dates start in 0 in JS
                                ,new Date(2008, 10-1, 18) //DateCurrent : -1 because dates start in 0 in JS
                                ,[] //DatesWorked
                                ,0 //DaysWorked
                                ,100 //Health
                                ,100 //Happiness
                                ,1000 //Money
                              ); //setValues
/************* END INIT *************/



/****************** START Create Inventory HTML ******************/
function createInventoryTable(arrArray) {

  var strTemp = "<div class='rTable'>";
      strTemp += createInventoryTableHeadings(arrArray);
//      strTemp += createInventoryTableContent(arrArray);
      strTemp += "<div id='divInventoryTable'></div>";
      strTemp += "</div>"; //rTable
  return strTemp;

} //function
function createInventoryTableHeadings(arrArray) {

  var strTemp = "<div class='rTableHeading'>";
  Object.keys(arrArray[0]).forEach(function (key) { //Uses the first iteration, 0, of the array to get the headings list
    strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label>"+key+"</label></div>";
  });
  strTemp += "</div>"; //rTableHeading
  strTemp += "<div class='rTableRow'>";
  Object.keys(arrArray[0]).forEach(function (key) { //Uses the first iteration, 0, of the array to get the headings list
    strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label></label></div>";
  });
  strTemp += "</div>"; //rTableHeading
  return strTemp;

} //function

function createInventoryTableContent(arrArray) {

  var strTemp = "";
  for (var i=0; i<arrArray.length; i++) { //For loop to go through array
    strTemp += "<div class='rTableRow' onClick='singleClick("+i+")' onDblClick='doubleClick("+i+")'>";
    Object.keys(arrArray[i]).forEach(function (key) {
      strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label>"+arrArray[i][key]+"</label></div>";
    });
    strTemp += "</div>"; //rTableRow
  }// For
  return strTemp;

} //function
/****************** START Create Inventory HTML ******************/
