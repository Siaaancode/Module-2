/*global document, Chart*/

let expenseChart;

function createChart() {

    const ctx = document.getElementById("my-chart");

    expenseChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: [
                "Housing",
                "Council Tax",
                "Utilities",
                "Food",
                "Transportation",
                "Financial Commitments",
                "Entertainment",
                "Other"
            ],
            datasets: [{
                label: "Expenses",
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
                data: [],
                borderWidth: 5
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function updateChart(expenseTotals) {

    expenseChart.data.datasets[0].data = [
        expenseTotals.Housing,
        expenseTotals.CouncilTax,
        expenseTotals.Utilities,
        expenseTotals.Food,
        expenseTotals.Transportation,
        expenseTotals.FinancialCommitments,
        expenseTotals.Entertainment,
        expenseTotals.Other
    ];

    expenseChart.update();
}