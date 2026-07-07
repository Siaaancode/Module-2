// Adds new input when icon is clicked
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
    `;

    document.getElementById("income-list").appendChild(newRow);
}
document.getElementById("icon-income").addEventListener("click", addInputIncome);

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
            <option value="Council tax">Council tax</option>
            <option value="Utilities">Utilities</option>
            <option value="Food">Food / Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Financial commitments">Debt / Loan Payments</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
        </select>
    `;

    document.getElementById("expense-list").appendChild(newRow);
}
document.getElementById("icon-expense").addEventListener("click", addInputExpense);


// Calculates the total of income

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


// Calculates the total of expenses

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


// Calculates the total of both income and expenses

function breakdownOfTotals() {

    const incomeInput = document.getElementById("total-income-input");
    const expenseInput = document.getElementById("total-expense-input");
    const finalBreakdownTotal = document.getElementById("breakdown-total-input");

    const total =
        Number(incomeInput.value) -
        Number(expenseInput.value);

    finalBreakdownTotal.value = total;

}

// Save income with localStorage functions 

function saveIncome() {

    const rows = document.querySelectorAll(".income-row");
    const incomes = [];

    rows.forEach(row => {

        incomes.push({
            description: row.querySelector(".income-description").value,
            amount: Number(row.querySelector(".amount-number-income").value),
            category: row.querySelector(".categories-income").value
        });
    });

    localStorage.setItem("incomeData", JSON.stringify(incomes));
}

document.addEventListener("input", (event) => {
    if (
        event.target.matches(".income-description") ||
        event.target.matches(".amount-number-income")
    ) {
        saveIncome();
        incomeTotal();
    }
});

document.addEventListener("change", (event) => {
    if (event.target.matches(".categories-income")) {
        saveIncome();
        incomeTotal();
    }
});

// Load income with localStorage functions 
function loadIncome() {

    const savedData = localStorage.getItem("incomeData");
    if (!savedData) return;

    const incomes = JSON.parse(savedData);

    const incomeList = document.getElementById("income-list");
    incomeList.innerHTML = "";

    incomes.forEach(item => {

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
            <option value="Employment" ${item.category === "Employment" ? "selected" : ""}>Employment income</option>
            <option value="Self-employment" ${item.category === "Self-employment" ? "selected" : ""}>Self-employment</option>
            <option value="Pension" ${item.category === "Pension" ? "selected" : ""}>Pension</option>
            <option value="State benefits" ${item.category === "State benefits" ? "selected" : ""}>State benefits</option>
            <option value="Other" ${item.category === "Other" ? "selected" : ""}>Other</option>
        </select>`;

        incomeList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    loadIncome();
    incomeTotal();
});


// Save expense with localStorage functions 

function saveExpense() {

    const rows = document.querySelectorAll(".expense-row");
    const expenses = [];

    rows.forEach(row => {

        expenses.push({
            description: row.querySelector(".expense-description").value,
            amount: Number(row.querySelector(".amount-number-expense").value),
            category: row.querySelector(".categories-expense").value
        });
    });

    localStorage.setItem("expenseData", JSON.stringify(expenses));
}

document.addEventListener("input", (event) => {
    if (
        event.target.matches(".expense-description") ||
        event.target.matches(".amount-number-expense")
    ) {
        saveExpense();
        expenseTotal();
    }
});

document.addEventListener("change", (event) => {
    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
    }
});


// Load expense with localStorage functions 

function loadExpense() {

    const savedData = localStorage.getItem("expenseData");
    if (!savedData) return;

    const expenses = JSON.parse(savedData);

    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach(item => {

        expenseIndex += 1;

        const descId = `income-description-${expenseIndex}`;
        const amountId = `income-amount-${expenseIndex}`;
        const categoryId = `income-category-${expenseIndex}`;

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
            <option value="Housing" ${item.category === "Housing" ? "selected" : ""}>Rent / Mortgage</option>
            <option value="Council tax" ${item.category === "Council tax" ? "selected" : ""}>Council tax</option>
            <option value="Utilities" ${item.category === "Utilities" ? "selected" : ""}>Utilities</option>
            <option value="Food" ${item.category === "Food" ? "selected" : ""}>Food / Groceries</option>
            <option value="Transportation" ${item.category === "Transportation" ? "selected" : ""}>Transportation</option>
            <option value="Financial commitments" ${item.category === "Financial commitments" ? "selected" : ""}>Debt / Loan Payments</option>
            <option value="Entertainment" ${item.category === "Entertainment" ? "selected" : ""}>Entertainment</option>
            <option value="Other" ${item.category === "Other" ? "selected" : ""}>Other</option>
        </select>`;

        expenseList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    loadExpense();
    expenseTotal();
});