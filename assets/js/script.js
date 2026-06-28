// Adds new input when icon is clicked

function addInputIncome() {
    const newRow = document.createElement("div");

    newRow.classList.add("income-row");
    newRow.innerHTML = `
    <input class="income-description" type="text" placeholder="e.g. Salary">
    <input class="amount-number-income" type="number" placeholder="e.g. £100.00" oninput="incomeTotal()" >
    <select class="category-selector" type="text" name="categories" required>
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

// Code for expenses

function addInputExpense() {
    const newRow = document.createElement("div");

    newRow.classList.add("expense-row");
    newRow.innerHTML = `
    <input class="expense-description" type="text" placeholder="e.g. Rent">
    <input class="amount-number-expense" type="number" placeholder="e.g. £100.00" oninput="expenseTotal()">
    <select class="category-selector" type="text" name="categories" required>
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

// if total is + display message suggest saving calculator


// if total is -  suggest expenses to cut


// Save income with localStorage functions 

function saveIncome() {

    const rows = document.querySelectorAll(".income-row");
    const incomes = [];

    rows.forEach(row => {

        incomes.push({
            description: row.querySelector(".income-description").value,
            amount: Number(row.querySelector(".amount-number-income").value),
            category: row.querySelector(".category-selector").value
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
    if (event.target.matches(".category-selector")) {
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

        const row = document.createElement("div");
        row.classList.add("income-row");

        row.innerHTML = `
        <input
        class="income-description"
        type="text"
        value="${item.description}"
        >
        
        <input
        class="amount-number-income"
        type="number"
        value="${item.amount}"
        >
        
        <select class="category-selector" name="categories" required>
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
document.addEventListener("DOMContentLoaded", loadIncome);

loadIncome();
incomeTotal();


// Save expense with localStorage functions 

function saveExpense() {

    const rows = document.querySelectorAll(".expense-row");
    const expenses = [];

    rows.forEach(row => {

        expenses.push({
            description: row.querySelector(".expense-description").value,
            amount: Number(row.querySelector(".amount-number-expense").value),
            category: row.querySelector(".category-selector").value
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
    if (event.target.matches(".category-selector")) {
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

        const row = document.createElement("div");
        row.classList.add("expense-row");

        row.innerHTML = `
        <input
        class="expense-description"
        type="text"
        value="${item.description}"
        >
        
        <input
        class="amount-number-expense"
        type="number"
        value="${item.amount}"
        >
        
        <select class="category-selector" name="categories" required>
            <option value="" disabled selected>Categories</option>
            <option value="Employment" ${item.category === "Employment" ? "selected" : ""}>Employment income</option>
            <option value="Self-employment" ${item.category === "Self-employment" ? "selected" : ""}>Self-employment</option>
            <option value="Pension" ${item.category === "Pension" ? "selected" : ""}>Pension</option>
            <option value="State benefits" ${item.category === "State benefits" ? "selected" : ""}>State benefits</option>
            <option value="Other" ${item.category === "Other" ? "selected" : ""}>Other</option>
        </select>`;

        expenseList.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", loadExpense);

loadExpense();
expenseTotal();