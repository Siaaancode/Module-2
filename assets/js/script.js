/*global document, localStorage*/
/* Validation for income row */
function validateIncomeRow(row) {

    const description = row.querySelector(".income-description");
    const amount = row.querySelector(".amount-number-income");
    const category = row.querySelector(".categories-income");
    const errorMessage = row.querySelector(".input-error");

    if (!errorMessage) {
        return false;
    }

    errorMessage.textContent = "";

    if (description.value.trim() === "") {
        errorMessage.textContent = "Please enter an income description.";
    } else if (amount.value === "" || Number(amount.value) <= 0) {
        errorMessage.textContent = "Please enter a valid amount.";
    } else if (category.value === "") {
        errorMessage.textContent = "Please select an income category.";
    }

    if (errorMessage.textContent !== "") {
        errorMessage.classList.add("visible");
        return false;
    }

    errorMessage.classList.remove("visible");
    return true;
}

/* Validation for expense row */
function validateExpenseRow(row) {

    const description = row.querySelector(".expense-description");
    const amount = row.querySelector(".amount-number-expense");
    const category = row.querySelector(".categories-expense");
    const errorMessage = row.querySelector(".input-error");

    if (!errorMessage) {
        return false;
    }

    errorMessage.textContent = "";

    if (description.value.trim() === "") {
        errorMessage.textContent = "Please enter an expense description.";
    } else if (amount.value === "" || Number(amount.value) <= 0) {
        errorMessage.textContent = "Please enter a valid amount.";
    } else if (category.value === "") {
        errorMessage.textContent = "Please select an expense category.";
    }

    if (errorMessage.textContent !== "") {
        errorMessage.classList.add("visible");
        return false;
    }

    errorMessage.classList.remove("visible");
    return true;
}

// Calculates the total of both income and expenses
function breakdownOfTotals() {

    const incomeInput = document.getElementById("total-income-input");
    const expenseInput = document.getElementById("total-expense-input");
    const finalBreakdownTotal = document.getElementById("breakdown-total-input");

    const total = Number(incomeInput.value) - Number(expenseInput.value);

    finalBreakdownTotal.value = total;
}

// Calculates the total of income
function incomeTotal() {

    const incomes = document.getElementsByClassName("amount-number-income");
    const totalIncomeInput = document.getElementById("total-income-input");
    const emptyMessage = document.getElementById("income-empty-message");

    let total = 0;
    let validIncomeExists = false;
    let i;

    for (i = 0; i < incomes.length; i += 1) {

        const amount = Number(incomes[i].value);

        if (!Number.isNaN(amount) && amount > 0) {
            total += amount;
            validIncomeExists = true;
        }
    }

    totalIncomeInput.value = total.toFixed(2);

    if (!validIncomeExists) {
        emptyMessage.classList.add("visible");
    } else {
        emptyMessage.classList.remove("visible");
    }

    breakdownOfTotals();
}

// Calculates the total of expenses
function expenseTotal() {

    const expenses = document.getElementsByClassName("amount-number-expense");
    const totalExpenseInput = document.getElementById("total-expense-input");
    const emptyMessage = document.getElementById("expense-empty-message");

    let total = 0;
    let validExpenseExists = false;
    let i;

    for (i = 0; i < expenses.length; i += 1) {

        const amount = Number(expenses[i].value);

        if (!Number.isNaN(amount) && amount > 0) {
            total += amount;
            validExpenseExists = true;
        }
    }

    totalExpenseInput.value = total.toFixed(2);

    if (!validExpenseExists) {
        emptyMessage.classList.add("visible");
    } else {
        emptyMessage.classList.remove("visible");
    }

    breakdownOfTotals();
}

// Save income with localStorage functions
function saveIncome() {

    const rows = document.querySelectorAll(".income-row");
    const incomes = [];

    let valid = true;

    rows.forEach(function (row) {

        if (validateIncomeRow(row)) {

            incomes.push({
                description: row.querySelector(".income-description").value,
                amount: Number(row.querySelector(".amount-number-income").value),
                category: row.querySelector(".categories-income").value
            });
        } else {
            valid = false;
        }
    });

    if (!valid) {
        return;
    }

    try {
        localStorage.setItem("incomeData", JSON.stringify(incomes));
    } catch (error) {
        console.error("Unable to save income data:", error);
    }
}

//Income input added, updates
document.addEventListener("input", function (event) {
    if (
        event.target.matches(".income-description") ||
        event.target.matches(".amount-number-income")
    ) {
        saveIncome();
        incomeTotal();
    }
});
//Change to income input, updates
document.addEventListener("change", function (event) {
    if (event.target.matches(".categories-income")) {
        saveIncome();
        incomeTotal();
    }
});

// Save expense with localStorage functions
function saveExpense() {

    const rows = document.querySelectorAll(".expense-row");
    const expenses = [];

    let valid = true;

    rows.forEach(function (row) {

        if (validateExpenseRow(row)) {

            expenses.push({
                description: row.querySelector(".expense-description").value,
                amount: Number(row.querySelector(".amount-number-expense").value),
                category: row.querySelector(".categories-expense").value
            });
        } else {
            valid = false;
        }
    });

    if (!valid) {
        return;
    }

    try {
        localStorage.setItem("expenseData", JSON.stringify(expenses));
    } catch (error) {
        console.error("Unable to save expense data:", error);
    }
}

//Expense input added, updates
document.addEventListener("input", function (event) {

    if (
        event.target.matches(".expense-description") ||
        event.target.matches(".amount-number-expense")
    ) {
        saveExpense();
        expenseTotal();
        updateChart(getExpenseCategoryTotals());
    }

});

//Change to expense input, updates
document.addEventListener("change", function (event) {

    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
        updateChart(getExpenseCategoryTotals());
    }

});

// Adds new income input when icon is clicked
let incomeIndex = 1;

function addInputIncome() {
    incomeIndex += 1;

    const descId = `income-description-${incomeIndex}`;
    const amountId = `income-amount-${incomeIndex}`;
    const categoryId = `income-category-${incomeIndex}`;

    const newRow = document.createElement("div");
    newRow.classList.add("income-row");

    newRow.innerHTML = `
    <label for="${descId}" class="visually-hidden">Income description</label>
        <input id="${descId}" class="income-description" type="text" placeholder="e.g. Salary">
        <label for="${amountId}" class="visually-hidden">Income amount required</label>
        <input id="${amountId}" class="amount-number-income" type="number" placeholder="e.g. 100.00" min="0" step="0.01" required>

        <label for="${categoryId}" class="visually-hidden">Income categories</label>
        <select id="${categoryId}" class="categories-income" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Employment">Employment income</option>
            <option value="Self-employment">Self-employment</option>
            <option value="Pension">Pension</option>
            <option value="State benefits">State benefits</option>
            <option value="Other">Other</option>
        </select>

        <div class="input-error" role="alert"></div>

        <div class="remove-icons">
        <button type="button" class="remove-income" aria-label="Remove income input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
        `;

    const removeButton = newRow.querySelector(".remove-income");

    removeButton.addEventListener("click", function () {
        newRow.remove();
        saveIncome();
        incomeTotal();
    });

    document.getElementById("income-list").appendChild(newRow);
}
document.querySelector(".add-income").addEventListener("click", addInputIncome);

// Code for expenses
let expenseIndex = 1;

function addInputExpense() {
    expenseIndex += 1;

    const descId = `expense-description-${expenseIndex}`;
    const amountId = `expense-amount-${expenseIndex}`;
    const categoryId = `expense-category-${expenseIndex}`;

    const newRow = document.createElement("div");
    newRow.classList.add("expense-row");

    newRow.innerHTML = `
    <label for="${descId}" class="visually-hidden">Expense description</label>
        <input id="${descId}" class="expense-description" type="text" placeholder="e.g. Rent" required>
        <label for="${amountId}" class="visually-hidden">Expense amount</label>
        <input id="${amountId}" class="amount-number-expense" type="number" placeholder="e.g. 100.00" min="0" step="0.01" required>

        <label for="${categoryId}" class="visually-hidden">Expense categories</label>
        <select id="${categoryId}" class="categories-expense" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Housing">Rent / Mortgage</option>
            <option value="CouncilTax">Council tax</option>
            <option value="Utilities">Utilities</option>
            <option value="Food">Food / Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="FinancialCommitments">Debt / Loan Payments</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
        </select>

        <div class="input-error" role="alert"></div>

        <div class="remove-icons">
            <button type="button" class="remove-expense" aria-label="Remove expense input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
        </div>
        `;

    const removeButton = newRow.querySelector(".remove-expense");

    removeButton.addEventListener("click", function () {
        newRow.remove();
        saveExpense();
        expenseTotal();
        updateChart(getExpenseCategoryTotals());
    });

    document.getElementById("expense-list").appendChild(newRow);
}
document.querySelector(".add-expense").addEventListener("click", addInputExpense);

//Collects categories information
function getExpenseCategoryTotals() {

    const expenses = document.querySelectorAll(".expense-row");

    const totals = {
        "Housing": 0,
        "CouncilTax": 0,
        "Utilities": 0,
        "Food": 0,
        "Transportation": 0,
        "FinancialCommitments": 0,
        "Entertainment": 0,
        "Other": 0
    };

    expenses.forEach(function (row) {

        const amount = Number(row.querySelector(".amount-number-expense").value) || 0;
        const category = row.querySelector(".categories-expense").value;

        if (totals[category] !== undefined) {
            totals[category] += amount;
        }
    });

    return totals;
}

// Load income with localStorage functions
function loadIncome() {

    let incomes = [];

    try {

        const savedData = localStorage.getItem("incomeData");

        if (!savedData) {
            return;
        }
        incomes = JSON.parse(savedData);

        if (!Array.isArray(incomes)) {
            return;
        }

    } catch (error) {
        console.error("Unable to load income data:", error);
        return;
    }

    const incomeList = document.getElementById("income-list");
    incomeList.innerHTML = "";

    incomes.forEach(function (item) {

        incomeIndex += 1;

        const descId = `income-description-${incomeIndex}`;
        const amountId = `income-amount-${incomeIndex}`;
        const categoryId = `income-category-${incomeIndex}`;

        const row = document.createElement("div");
        row.classList.add("income-row");

        row.innerHTML = `
        <label for="${descId}" class="visually-hidden">Income description</label>
        <input id="${descId}" class="income-description" type="text" value="${item.description}" required>

        <label for="${amountId}" class="visually-hidden">Income amount</label>
        <input
        id="${amountId}" class="amount-number-income"
        type="number" value="${item.amount}"
        min="0" step="0.01" required>

        <label for="${categoryId}" class="visually-hidden">Income categories</label>
        <select id="${categoryId}" class="categories-income" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Employment" ${(
            item.category === "Employment"
            ? "selected"
            : ""
        )}>Employment income</option>
            <option value="Self-employment" ${(
            item.category === "Self-employment"
            ? "selected"
            : ""
        )}>Self-employment</option>
            <option value="Pension" ${(
            item.category === "Pension"
            ? "selected"
            : ""
        )}>Pension</option>
            <option value="State benefits" ${(
            item.category === "State benefits"
            ? "selected"
            : ""
        )}>State benefits</option>
            <option value="Other" ${(
            item.category === "Other"
            ? "selected"
            : ""
        )}>Other</option>
            </select>

            <div class="input-error" role="alert"></div>

            <div class="remove-icons">
                <button type="button" class="remove-income" aria-label="Remove income input">
                <i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
            `;

        row.querySelector(".remove-income").addEventListener("click", function () {
            row.remove();
            saveIncome();
            incomeTotal();
        });

        incomeList.appendChild(row);
    });
}

// Load expense with localStorage functions
function loadExpense() {

    let expenses = [];

    try {

        const savedData = localStorage.getItem("expenseData");
        if (!savedData) {
            return;
        }

        expenses = JSON.parse(savedData);

        if (!Array.isArray(expenses)) {
            return;
        }

    } catch (error) {
        console.error("Unable to load expense data:", error);
        return;
    }

    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach(function (item) {

        expenseIndex += 1;

        const descId = `expense-description-${expenseIndex}`;
        const amountId = `expense-amount-${expenseIndex}`;
        const categoryId = `expense-category-${expenseIndex}`;

        const row = document.createElement("div");
        row.classList.add("expense-row");

        row.innerHTML = `
        <label for="${descId}" class="visually-hidden">Expense description</label>
        <input id="${descId}" class="expense-description" type="text" value="${item.description}"
        required >

        <label for="${amountId}" class="visually-hidden">Expense amount</label>
        <input id="${amountId}" class="amount-number-expense" type="number" value="${item.amount}"
        min="0" step="0.01" required>

        <label for="${categoryId}" class="visually-hidden">Expense categories</label>
        <select id="${categoryId}" class="categories-expense" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Housing" ${(
            item.category === "Housing"
            ? "selected"
            : ""
        )}>Rent / Mortgage</option>
            <option value="CouncilTax" ${(
            item.category === "CouncilTax"
            ? "selected"
            : ""
        )}>Council tax</option>
            <option value="Utilities" ${(
            item.category === "Utilities"
            ? "selected"
            : ""
        )}>Utilities</option>
            <option value="Food" ${(
            item.category === "Food"
            ? "selected"
            : ""
        )}>Food / Groceries</option>
            <option value="Transportation" ${(
            item.category === "Transportation"
            ? "selected"
            : ""
        )}>Transportation</option>
            <option value="FinancialCommitments" ${(
            item.category === "FinancialCommitments"
            ? "selected"
            : ""
        )}>Debt / Loan Payments</option>
            <option value="Entertainment" ${(
            item.category === "Entertainment"
            ? "selected"
            : ""
        )}>Entertainment</option>
            <option value="Other" ${(
            item.category === "Other"
            ? "selected"
            : ""
        )}>Other</option>
        </select>

        <div class="input-error" role="alert"></div>

        <div class="remove-icons">
            <button type="button" class="remove-expense" aria-label="Remove expense input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
        </div>`;

        row.querySelector(".remove-expense").addEventListener("click", function () {
            row.remove();
            saveExpense();
            expenseTotal();
            updateChart(getExpenseCategoryTotals());
        });

        expenseList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function () {

    createChart();

    loadIncome();
    loadExpense();

    incomeTotal();
    expenseTotal();

    updateChart(getExpenseCategoryTotals());

});