//for user story (1)
//allows user to create new row by clicking button on page

const rowButton = document.getElementById("row-Button");

const myTable = document.getElementById("myTable");

rowButton.addEventListener("click", newRow);

function newRow() {
  let row = document.createElement("tr");
  let rowCell = document.createElement("td");
  row.className = "new-Row";
  rowCell.innerHTML = "New Row";
  myTable.append(row);
  row.append(rowCell);
}

//for user story (2)
//Allows user to create new column by clicking button on page

const colButton = document.getElementById("column-Button");

//const col = document.querySelector(".row");

colButton.addEventListener("click", addNewColumn);

function addNewColumn() {
  //let newColumn = document.createElement("tr");
  let newColCell = document.createElement("td");
  let newCol = myTable.querySelector(".new-Row");
  newColCell.innerHTML = "New Column";
  newCol.append(newColCell);
}

// 3. remove row

const removeRowButton = document.getElementById("remove-row-button");

removeRowButton.addEventListener("click", removeRow);

let amountofRows = 1;

function removeRow() {
  //grab the main grid
  let lastRow = document.getElementById("myTable");
  lastRow.deleteRow(-1);

  amountofRows--;
}
