const { test, expect } = require('@jest/globals')
const addToCart = require('../collection')

// test('test addtocart', () => {
//     let cart = ["asma"]
//     expect(cart).toHaveProperty("asma")
// })

test('test myobj', () => {
    let ob = {
        name: "asma",
        age: 21
    }
    expect(ob).toHaveProperty("age", 21)
})
test("Check for undefiend", () => {
    let a;
    expect(a).toBeUndefined();
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});
