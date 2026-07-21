function calculateTotal(values) {

    let total = 0;

    values.forEach(function (value) {

        const amount = Number(value);

        if (!Number.isNaN(amount) && amount > 0) {
            total += amount;
        }

    });

    return total;
}


function calculateBalance(income, expenses) {

    return income - expenses;

}


module.exports = {
    calculateTotal,
    calculateBalance
};