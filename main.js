const rowButton = document.getElementById("row-Button");

rowButton.addEventListener("click", addNewRow);

const table = document.querySelector("table");

function addNewRow(e) {
  let newRow = table.insertRow(-1);
  let newCell = newRow.insertCell(0);
  newCell.innerHTML = "New Cell";
}
