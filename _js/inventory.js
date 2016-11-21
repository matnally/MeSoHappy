
function InventoryTableAdd(intID) {

  //populates inventory table

  var strTemp = document.getElementById("divInventoryTable").innerHTML;

  strTemp += "<div class='rTableRow'>";
  Object.keys(arrItems[intID]).forEach(function (key) {
    strTemp += "<div class='rTableCell"+checkIfHidden(key)+"'><label>"+arrItems[intID][key]+"</label></div>";
  });
  strTemp += "</div><!-- rTableRow -->";

  populateElement("divInventoryTable", strTemp); //Show Product details

} //function


/*

remove item
decrease item count?

*/
