/* Adds new input when icon is clicked */
/* Code for incomes */
function addInputIncome () {
    const newRow = document.createElement("div");

    newRow.innerHTML = `
    <input type="text" placeholder="e.g. Salary">
    <label>£</label>
    <input type="number" placeholder="Amount">
    `;

    const container = document.getElementById("income-list");

    container.appendChild(newRow);
}
document.getElementById("icon-income").addEventListener("click", addInputIncome);

/* Code for expenses */
function addInputExpense () {
    const newRow = document.createElement("div");

    newRow.innerHTML = `
    <input type="text" placeholder="e.g. Food">
    <label>£</label>
    <input type="number" placeholder="Amount">
    `;

    const container = document.getElementById("expense-list");

    container.appendChild(newRow);
}
document.getElementById("icon-expense").addEventListener("click", addInputExpense);

/* Calculates the total of income */
/* Insert code here */
function incomeTotal() {

}
/* Calculates the total of expenses */
/* Insert code here */
function expenseTotal() {

}
/* Calculates the total of income both income and expenses */
/* Insert code here */
function breakdownOfTotals() {

}