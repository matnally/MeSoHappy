
var arrSliders = new Array(); //Global Array to store all Products
    arrSliders = [{
                   "id": 1
                   ,"name": "rangeSlider1"
                   ,"description": "This is Slider 1 info here"
                   ,"min": 0
                   ,"max": 100
                   ,"step": 1
                   ,"value": 10
                   ,"happiness": 87
                   ,"health": 86
                  },{
                   "id": 2
                   ,"name": "rangeSlider2"
                   ,"description": "This is Slider 2 info here"
                   ,"min": 0
                   ,"max": 100
                   ,"step": 1
                   ,"value": 40
                   ,"happiness": 77
                   ,"health": 76
                  },{
                   "id": 3
                   ,"name": "rangeSlider2"
                   ,"description": "This is Slider 3 info here"
                   ,"min": 0
                   ,"max": 100
                   ,"step": 1
                   ,"value": 50
                   ,"happiness": 97
                   ,"health": 96
                 }]; //arrSliders


/************* START slider init *************/
var objSliders = new Object();
//var objSlidersInstance = new Object();
    objSliders = { //assign functions to object
       setValues: function (intID, strName, strDescription, intMin, intMax, intStep, intValue, intHappiness, intHealth) { //set Object Property values
         this.id = intID;
         this.name = strName;
         this.description = strDescription;
         this.min = intMin;
         this.max = intMax;
         this.step = intStep;
         this.value = intValue;
         this.happiness = intHappiness;
         this.health = intHealth;
       } //setValues
    }; //objSliders
/************* END slider init *************/

function slidersJSONtoArray(arrArray) {

  //transform JSON to array
  var arrTemp = [];
  for (var prop in arrArray) {
    var objSlidersInstance = Object.create(objSliders); //Create Object
    objSlidersInstance.setValues(parseInt(arrArray[prop].id)
                                ,arrArray[prop].name
                                ,arrArray[prop].description
                                ,parseInt(arrArray[prop].min)
                                ,parseInt(arrArray[prop].max)
                                ,parseInt(arrArray[prop].step)
                                ,parseInt(arrArray[prop].value)
                                ,parseInt(arrArray[prop].happiness)
                                ,parseInt(arrArray[prop].health)
                              ); //Init
    arrTemp.push(objSlidersInstance); //Write Object to Array
  } //for

  return arrTemp;

} //function

function setSlidersValues(arrArray) {

  var elems = document.getElementsByName("rangeSlider"); //get array of elements
  arrArray.forEach(function(obj, index) { //for every object in the arrArray
    //all valid properties of a range slider
    elems[index].min = obj["min"];
    elems[index].max = obj["max"];
    elems[index].step = obj["step"];
    elems[index].value = obj["value"];
  }); //forEach

  rangeSliderValuesDisplayUpdate(); //update displayed values

} //function

function rangeSliderValuesChanged(elem) {

  while (rangeSliderValuesGetTotal(elem) != 100) {
    //sliders do not add up to 100
    rangeSliderValuesAdjust(elem); //adjust sliders so all add up to 100
  }
  rangeSliderValuesDisplayUpdate(); //update displayed values

} //function

function rangeSliderValuesAdjust(elem) {

  //sliders do not add up to 100 so adjust values so they do

  var intDifference = 100 - rangeSliderValuesGetTotal(elem); //get difference
  var elems = document.getElementsByName(elem.name); //array of sliders

  switch (true) {
    case (intDifference > 0):
      //difference is positive therefore under 100
      while (intDifference > 0) {
        for (var i=0; i<elems.length; i++) {
          if ((elems[i].id != elem.id) && (rangeSliderValuesGetTotal(elem) != 100)) { //not current slider and slider totals not already 100
            document.getElementById(elems[i].id).value = parseInt(elems[i].value) + 1;
            intDifference--;
          } //if
        } //for
      } //while
    break;
    case (intDifference < 0):
      //difference is negative therefore over 100
      while (intDifference < 0) {
        for (var i=0; i<elems.length; i++) {
          if ((elems[i].id != elem.id) && (rangeSliderValuesGetTotal(elem) != 100)) { //not current slider and slider totals not already 100
            document.getElementById(elems[i].id).value = parseInt(elems[i].value) - 1;
            intDifference++;
          } //if
        } //for
      } //while
    break;
  } //switch

} //function

function rangeSliderValuesGetTotal(elem) {

  //returns total of all slider values

  var intTotal = 0;
  var elems = document.getElementsByName(elem.name); //get array of elements
  for (var i=0; i<elems.length; i++) {
    intTotal = intTotal + parseInt(elems[i].value);
  } //for
  return intTotal;

} //function

function rangeSliderValuesDisplayUpdate() {

  //updates the value displays

  var intTotal = 0;
  var elemsSliders = document.getElementsByName("rangeSlider"); //array of sliders
  var elemsInputs = document.getElementsByName("rangeSliderLabel"); //array of inputs

  for (var i=0; i<elemsSliders.length; i++) {
    //go through all slider inputs and make them equal the slider values
    elemsInputs[i].innerHTML = elemsSliders[i].value + "%";
    intTotal = intTotal + parseInt(elemsSliders[i].value); //total the total
  } //for

} //function
