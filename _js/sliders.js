
/************* START INIT *************/
var objSliders = new Object();
    objSliders = { //assign functions to object
       Init: function () { //set Object Property values
         this.min = 0;
         this.max = 100;
         this.step = 1;
         this.value = [10, 40, 50];
       }
    };
var objSlidersInstance = Object.create(objSliders); //create Object instance
    objSlidersInstance.Init(); //call object init
/************* END INIT *************/


function rangeSliderValuesInit() {

  var elems = document.getElementsByName("rangeSlider"); //get array of elements
  for (var i=0; i<elems.length; i++) { //loop through elements and assign defaults
    elems[i].min = objSlidersInstance.min;
    elems[i].max = objSlidersInstance.max;
    elems[i].step = objSlidersInstance.step;
    elems[i].value = objSlidersInstance.value[i];
  } //for
  rangeSliderValuesDisplayUpdate(); //update displayed values

}

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
