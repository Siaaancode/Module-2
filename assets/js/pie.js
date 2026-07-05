//Chart structure
const ctx = document.getElementById("my-chart");

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: ['Total'],
            backgroundColor: [
                '#373F51',
                '#535E79',
                '#6D7B9C',
                '#8691AC',
                '#8CBA80',
                '#ABCDA2',
                '#C3DBBD',
                '#DBE9D8'
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5,
        }],
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
                        family: 'Roboto Mono, monospace',
                    },
                },
            },
        },
    },
});

function getExpenseCategoryTotals() {

    const expenses = document.querySelectorAll(".expense-row");

    const totals = {
        "Housing": 0,
        "Council tax": 0,
        "Utilities": 0,
        "Food": 0,
        "Transportation": 0,
        "Financial commitments": 0,
        "Entertainment": 0,
        "Other": 0
    };

    expenses.forEach(row => {

        const amount = Number(row.querySelector(".amount-number-expense").value) || 0;
        const category = row.querySelector(".categories-expense").value;

        if (totals[category] !== undefined) {
            totals[category] += amount;
        }
    });

    return totals;
}

function updateChart() {

    const totals = getExpenseCategoryTotals();

    myChart.data.datasets[0].data = [
        totals["Housing"],
        totals["Council tax"],
        totals["Utilities"],
        totals["Food"],
        totals["Transportation"],
        totals["Financial commitments"],
        totals["Entertainment"],
        totals["Other"]
    ];

    myChart.update();
}

document.addEventListener("input", (event) => {
    if (event.target.matches(".amount-number-expense")) {
        expenseTotal();
        updateChart();
    }
});

document.addEventListener("change", (event) => {
    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
        updateChart();
    }
});