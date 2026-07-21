const {
    calculateTotal,
    calculateBalance
} = require("../assets/js/calculations");


test("calculates income total correctly", () => {

    const incomes = [1000, 250, 50];

    expect(calculateTotal(incomes)).toBe(1300);

});


test("calculates expenses correctly", () => {

    const expenses = [100, 50, 25];

    expect(calculateTotal(expenses)).toBe(175);

});


test("calculates final balance correctly", () => {

    expect(calculateBalance(1300, 175)).toBe(1125);

});