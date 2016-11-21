
function workMonth(intMonths) {

  var datDate = objPlayerInstance.DateCurrent;
      datDate.setMonth(datDate.getMonth() + parseInt(intMonths)); //add N months to current date

  objPlayerInstance.DateCurrent = datDate; //update object
  populateElement("labDateCurrent", objPlayerInstance.DateCurrent.toString().split(" ").slice(0, 4).join(" ")); //Show Product details
  objPlayerInstance.DaysWorked = getExactNumberDaysWorked(objPlayerInstance.DateStarted, objPlayerInstance.DateCurrent); //update object
  populateElement("labTotalDaysWorked", "Total Days worked : " + objPlayerInstance.DaysWorked); //Show Total Days worked
  populateElement("labTotalMonthsWorked", "Total Months worked : " + objPlayerInstance.DatesWorked.length); //Show Total months worked
  populateElement("labTotalYearsWorked", "Total Years worked : " + (objPlayerInstance.DatesWorked.length/12).toFixed(2)); //Show Total months worked

} //function

function getExactNumberDaysWorked(from, to) {

  var arrTemp = [];
  var datFrom = new Date(from);
  var datTo = new Date(to);
  var fromYear =  datFrom.getFullYear();
  var toYear =  datTo.getFullYear();
  var diffYear = (12 * (toYear - fromYear)) + datTo.getMonth();
  var fromMonth = parseInt(datFrom.getMonth() + 1); //+1 because dates start in 0 in JS
  var intTotalDaysWorked = 0;

  for (var i=fromMonth; i<=diffYear; i++) {

    //have to do this as JAN comes back as 0SSSS
    if ([i%12] == 0) {
      arrTemp.push([12] + " " + Math.floor(fromYear+(i/12)));
      intTotalDaysWorked = intTotalDaysWorked + parseInt(getDaysInMonth([12], Math.floor(fromYear+(i/12))));
    } else {
      arrTemp.push([i%12] + " " + Math.floor(fromYear+(i/12)));
      intTotalDaysWorked = intTotalDaysWorked + parseInt(getDaysInMonth([i%12], Math.floor(fromYear+(i/12))));
    } //if

  } //for

  objPlayerInstance.DatesWorked = []; //clear object
  objPlayerInstance.DatesWorked = arrTemp; //update object

  return intTotalDaysWorked;

} //function

//Month is 1 based
function getDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
} //function
