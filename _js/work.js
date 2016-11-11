

function workMonth(intMonths) {

  var datDate = objPlayerInstance.DateCurrent;
      datDate.setMonth(datDate.getMonth() + parseInt(intMonths));
      //datDate = datDate.toString().split(" ").slice(0, 4).join(" ");

  objPlayerInstance.DateCurrent = datDate; //update object
  document.getElementById("labDateCurrent").innerHTML = objPlayerInstance.DateCurrent.toString().split(" ").slice(0, 4).join(" "); //display in label

  updateTimeWorked(); //we updated the date, so update the time worked

}
function updateTimeWorked() {

  var datWorkStarted = objPlayerInstance.DateStarted;
  var datWorkCurrent = objPlayerInstance.DateCurrent;

  var intTimeDiff = Math.floor(datWorkCurrent.getTime() - datWorkStarted.getTime()); //get difference in seconds
  var intDiffDays = 1000 * 60 * 60 * 24; //work out diff in days

  var intDays = (intTimeDiff / intDiffDays);
  var intMonths = (intDays / 31); //difference in months (1 month = 31 days)
  var intYears = (intMonths / 12); //differnece in years

  objPlayerInstance.TimeWorked = "Date difference (roughly) : " + intDays + " days or " + intMonths.toFixed(2) + " months or " + intYears.toFixed(2) + " years";
  document.getElementById("labDateWorked").innerHTML = objPlayerInstance.TimeWorked; //display in label

}
