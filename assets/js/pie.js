/*global document, Chart*/

let expenseChart;

function createChart() {

    const ctx = document.getElementById("my-chart");

    expenseChart = new Chart(ctx, {
        data: {
            datasets: [{
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
    borderWidth: 5,
    data: [],
    label: "Expenses"
            }],
        },
        options: {
            animation: false,
            maintainAspectRatio: false,
            responsive: true
        },
        type: "doughnut"
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
