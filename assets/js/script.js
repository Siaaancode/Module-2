/* Adds new input when icon is clicked */

function addInputIncome() {
    const newRow = document.createElement("div");

    newRow.innerHTML = `
    <input type="text" placeholder="e.g. Salary">
    <input class="amount-number-income" type="number" placeholder="e.g. £100.00" oninput="incomeTotal()" >
    <select id="category-selector" type="text" name="categories" required>
    <option value="" disabled selected>Categories</option>
    <option value="Employment">Employment income</option>
    <option value="Self-employment">Self-employment</option>
    <option value="Pension">Pension</option>
    <option value="State benefits">State benefits</option>
    <option value="Other">Other</option>
    </select>
    `;

    const container = document.getElementById("income-list");

    container.appendChild(newRow);
}
document.getElementById("icon-income").addEventListener("click", addInputIncome);


/* Code for expenses */

function addInputExpense() {
    const newRow = document.createElement("div");

    newRow.innerHTML = `
    <input type="text" placeholder="e.g. Rent">
    <input class="amount-number-expense" type="number" placeholder="e.g. £100.00" oninput="expenseTotal()">
    <select id="category-selector" type="text" name="categories" required>
    <option value="" disabled selected>Categories</option>
    <option value="Housing">Rent / Mortgage</option>
    <option value="Council tax">Council tax</option>
    <option value="Utilities">Utilities</option>
    <option value="Food">Food / Groceries</option>
    <option value="Transportation">Transportation</option>
    <option value="Financial commitments">Debt / Loan Payments</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Other">Other</option>
    </select>
    `;

    const container = document.getElementById("expense-list");

    container.appendChild(newRow);
}
document.getElementById("icon-expense").addEventListener("click", addInputExpense);


/* Calculates the total of income */

function incomeTotal() {

    const incomes = document.getElementsByClassName("amount-number-income");
    const totalIncomeInput = document.getElementById("total-income-input");

    let total = 0;

    for (let i = 0; i < incomes.length; i++) {
        total += Number(incomes[i].value) || 0;
    }

    totalIncomeInput.value = total;
    breakdownOfTotals();
}


/* Calculates the total of expenses */

function expenseTotal() {

    const expenses = document.getElementsByClassName("amount-number-expense");
    const totalExpenseInput = document.getElementById("total-expense-input");

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += Number(expenses[i].value) || 0;
    }

    totalExpenseInput.value = total;
    breakdownOfTotals();
}


/* Calculates the total of both income and expenses */

function breakdownOfTotals() {

    const incomeInput = document.getElementById("total-income-input");
    const expenseInput = document.getElementById("total-expense-input");
    const finalBreakdownTotal = document.getElementById("breakdown-total-input");

    const total =
        Number(incomeInput.value) -
        Number(expenseInput.value);

    finalBreakdownTotal.value = total;

}
console.log(breakdownOfTotals());

/* if total is + display message suggest saving calculator */


/* if total is -  suggest expenses to cut */
