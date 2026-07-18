/*global document, localStorage, Chart*/
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
        <label for="${amountId}" class="visually-hidden">Income amount</label>
        <input id="${amountId}" class="amount-number-income" type="number" placeholder="e.g. 100.00"
            oninput="incomeTotal()">

        <label for="${categoryId}" class="visually-hidden">Income categories</label>
        <select id="${categoryId}" class="categories-income" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Employment">Employment income</option>
            <option value="Self-employment">Self-employment</option>
            <option value="Pension">Pension</option>
            <option value="State benefits">State benefits</option>
            <option value="Other">Other</option>
        </select>

        <div class="remove-icons">
        <button type="button" class="remove-income" aria-label="Remove income input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
        `;

    const removeButton = newRow.querySelector(".remove-income");

    removeButton.addEventListener("click", function () {
        newRow.remove();
        incomeIndex-= 1;
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
        <input id="${descId}" class="expense-description" type="text" placeholder="e.g. Rent">
        <label for="${amountId}" class="visually-hidden">Expense amount</label>
        <input id="${amountId}" class="amount-number-expense" type="number" placeholder="e.g. 100.00"
            oninput="expenseTotal()">

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

        <div class="remove-icons">
            <button type="button" class="remove-expense" aria-label="Remove expense input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
        </div>
        `;

    const removeButton = newRow.querySelector(".remove-expense");

    removeButton.addEventListener("click", function () {
        newRow.remove();
        expenseIndex-= 1;
        saveExpense();
        expenseTotal();
    });

    document.getElementById("expense-list").appendChild(newRow);
}
document.querySelector(".add-expense").addEventListener("click", addInputExpense);

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

    let total = 0;
    let i;

    for (i = 0; i < incomes.length; i += 1) {
        total += Number(incomes[i].value) || 0;
    }

    totalIncomeInput.value = total;
    breakdownOfTotals();
}

// Calculates the total of expenses
function expenseTotal() {

    const expenses = document.getElementsByClassName("amount-number-expense");
    const totalExpenseInput = document.getElementById("total-expense-input");

    let total = 0;
    let i;

    for (i = 0; i < expenses.length; i += 1) {
        total += Number(expenses[i].value) || 0;
    }

    totalExpenseInput.value = total;
    breakdownOfTotals();
}

// Save income with localStorage functions
function saveIncome() {

    const rows = document.querySelectorAll(".income-row");
    const incomes = [];

    rows.forEach(function (row) {

        incomes.push({
            description: row.querySelector(".income-description").value,
            amount: Number(row.querySelector(".amount-number-income").value),
            category: row.querySelector(".categories-income").value
        });
    });

    localStorage.setItem("incomeData", JSON.stringify(incomes));
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

    rows.forEach(function (row) {

        expenses.push({
            description: row.querySelector(".expense-description").value,
            amount: Number(row.querySelector(".amount-number-expense").value),
            category: row.querySelector(".categories-expense").value
        });
    });

    localStorage.setItem("expenseData", JSON.stringify(expenses));
}

//Expense input added, updates
document.addEventListener("input", function (event) {
    if (
        event.target.matches(".expense-description") ||
        event.target.matches(".amount-number-expense")
    ) {
        saveExpense();
        expenseTotal();
    }
});
//Change to expense input, updates
document.addEventListener("change", function (event) {
    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
    }
});

//Pie Chart
const ctx = document.getElementById("my-chart");

const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [{
            label: ["Total"],
            backgroundColor: [
                "#373F51",
                "#535E79",
                "#6D7B9C",
                "#8691AC",
                "#8CBA80",
                "#ABCDA2",
                "#C3DBBD",
                "#DBE9D8"
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5
        }]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "Roboto Mono, monospace"
                    }
                }
            }
        }
    }
});

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

// Update chart
function updateChart() {

    const totals = getExpenseCategoryTotals();

    myChart.data.datasets[0].data = [
        totals.Housing,
        totals.CouncilTax,
        totals.Utilities,
        totals.Food,
        totals.Transportation,
        totals.FinancialCommitments,
        totals.Entertainment,
        totals.Other
    ];

    myChart.update();
}

//Input added, updates
document.addEventListener("input", function (event) {
    if (event.target.matches(".amount-number-expense")) {
        expenseTotal();
        updateChart();
    }
});

//Change to input, updates
document.addEventListener("change", function (event) {
    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
        updateChart();
    }
});

// Load income with localStorage functions
function loadIncome() {

    const savedData = localStorage.getItem("incomeData");
    if (!savedData) {
        return;
    }

    const incomes = JSON.parse(savedData);

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
        <input id="${descId}" class="income-description" type="text" value="${item.description}">

        <label for="${amountId}" class="visually-hidden">Income amount</label>
        <input
        id="${amountId}" class="amount-number-income"
        type="number" value="${item.amount}"
        >

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

            <div class="remove-icons">
                <button type="button" class="remove-income" aria-label="Remove income input">
                <i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
            `;

        row.querySelector(".remove-income").addEventListener("click", function () {
            row.remove();
            incomeIndex--;
            saveIncome();
            incomeTotal();
        });

        incomeList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    loadIncome();
    incomeTotal();
});

// Load expense with localStorage functions
function loadExpense() {

    const savedData = localStorage.getItem("expenseData");
    if (!savedData) {
        return;
    }

    const expenses = JSON.parse(savedData);

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
        >

        <label for="${amountId}" class="visually-hidden">Expense amount</label>
        <input id="${amountId}" class="amount-number-expense" type="number" value="${item.amount}"
        >

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

        <div class="remove-icons">
            <button type="button" class="remove-expense" aria-label="Remove expense input">
            <i class="fa-solid fa-x fa-2xl"></i></button>
        </div>`;

        row.querySelector(".remove-expense").addEventListener("click", function () {
            row.remove();
            expenseIndex--;
            saveExpense();
            expenseTotal();
        });

        expenseList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    loadExpense();
    expenseTotal();
    updateChart();
});