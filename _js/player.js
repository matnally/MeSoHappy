
/************* START INIT *************/
var objPlayer = new Object();
    objPlayer = { //Assign functions to object
       setValues: function (intValueOne, intValueTwo, intValueThree) { //Set Object Property values
           this.valueOne = intValueOne;
           this.valueTwo = intValueTwo;
           this.valueThree = intValueThree;
       }
    };

var objPlayerInstance = Object.create(objPlayer); //Create Object
/************* END INIT *************/
