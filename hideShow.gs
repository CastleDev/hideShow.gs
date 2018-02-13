//Script for hiding expired weeks on a cleaning scheme and function for displaying all.

function onOpen() {
  // get the app active sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // creates the menu
  var menu = [{name: "Skjul gamle uker", functionName: "hideRows"},
    {name: "Vis alle", functionName: "showRows"}];

  // add menu to bar
  ss.addMenu("Vis/Skjul", menu);
}

// Function for hiding all colums of expired weeks
function hideRows() {
    // get the app active sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // Don't forget the UI 
  var ui = SpreadsheetApp.getUi();

  // get the app active sheet
  var sheet = ss.getSheets()[0];

  // Get the weeknumber from cell value calculated by date
  var weekNumber = ss.getRange('C2').getValue()-1;
  
  
  // Number of rows to hide at each itteration
  var numberOfRows = 4;
  // The row to start hiding from
  var startRow = 5;
  
  // itterate through rows
  for(var i=1; i<weekNumber; i++) {
    var countRows = numberOfRows * weekNumber;
        sheet.hideRows(startRow, countRows);
  }
}

// Function to show all rows in sheet that are hidden by hideRows function
function showRows() {
  // get the app active sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // get sheet specifics
  var sheet = ss.getSheets()[0];

  // get max rows of sheet
  var maxRows = sheet.getMaxRows();
  
  // show all columns
  sheet.showRows(1, maxRows);
}
