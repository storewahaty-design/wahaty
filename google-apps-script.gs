/**
 * Wahaty — Google Sheets order logger (Google Apps Script)
 * This receives orders from your website and writes each one as a new row.
 *
 * SETUP (one time, ~5 minutes):
 * 1. Create a new Google Sheet. Name the first tab: Orders
 * 2. In the Sheet menu: Extensions > Apps Script.
 * 3. Delete any code there, paste ALL of this file, click the save (disk) icon.
 * 4. Click "Deploy" (top right) > "New deployment".
 * 5. Click the gear next to "Select type" > choose "Web app".
 * 6. Description: Wahaty orders. Execute as: Me. Who has access: Anyone.
 * 7. Click "Deploy" > "Authorize access" > choose your Google account > Allow.
 * 8. Copy the "Web app URL" it gives you (ends with /exec).
 * 9. Paste that URL into store.js:  const SHEET_ORDER_URL = "PASTE_HERE";
 * Done. Every order now adds a row to your Sheet automatically.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders")
             || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Orders");

    // Add a header row the first time
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date","Store","Name","Phone","City","Address","Items","Subtotal","Delivery","Total","Payment"]);
    }

    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      d.date || new Date(),
      d.store || "",
      d.name || "",
      d.phone || "",
      d.city || "",
      d.address || "",
      d.items || "",
      d.subtotal || "",
      d.delivery || "",
      d.total || "",
      d.payment || ""
    ]);

    return ContentService.createTextOutput("OK");
  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err);
  }
}
