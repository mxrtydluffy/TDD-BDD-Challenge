const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect
const assert = chai.assert
const should = chai.should()

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

// Area of a rectangle
it("Returns area of a rectangle.", () => {
  const rect_area = utils.area(4, 6);
  expect(rect_area).to.be.a('number');
  assert.equal(rect_area, 6);
})

// Perimeter of a rectangle
it("Return perimter of a rectangle.", () => {
  const perimeter = utils.perimeter(10, 6);
  expect(perimeter).to.be.a('number');
  assert.equal(perimeter, 16);
});

// Area of a circle
it("Return area of a circle.", () => {
  const circ_area = utils.circleArea(4);
  expect(circ_area).to.be.a('number');
  assert.equal(perimeter, 16);
});

// Returns null if negative values are present.
it("Return null area if w and h are negative.", () => {
  const rect_area = utils.area(-6, 4);
  expect(rect_area).to.be.a('null');
  assert.equal(rect_area, null);
});

it("Retun null perimeter if w and h are negative.", () => {
  const perimeter = utils.perimeter(-7, 2);
  expect(perimeter).to.be.a('null');
  assert.equal(perimeter, null);
});

it("Return null circle area if negative radius.", () => {
  const circ_area = utils.circleArea(-3);
  expect(circ_area).to.be.a('null');
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", () => {
  // Create and add item to the cart.
  const nintendoSwitch = utils.createItem("Switch", 599.99);
  utils.addItemToCart(nintendoSwitch);
  // Tests datatype and length of shopping cart
  const shoppingcart = utils.getShoppingCart();
  expect(shoppingcart).to.be.a("array");
  assert.equal(cart.length, 1);
});

it("Add new item to shopping cart", () => {
  // Create item, shopping cart and then add item to cart
  const newItem = utils.createItem("Item", 15.99);
  const cart = utils.getShoppingCart()
  utils.addItemToCart(newItem);
  // Cart length and its properties
  assert.equal(cart.length, 1);
  expect(cart[0]).to.be.a("object");
  expect(cart[0]).to.have.property("name", "Item");
  expect(cart[0]).to.have.property("price", 15.99);
})

it("Should add a new item to the shopping cart", () => {
  // Create items
  const newItem = utils.createItem("Item", 15.99);
  const secondItem = utils.createItem("Second Item", 8.99);
  // Get shopping cart
  const cart = utils.getShoppingCart();
  // Add items to the cart
  utils.addItemToCart(newItem);
  utils.addItemToCart(secondItem);
  // Cart Length
  const cartLength = utils.getNumItemsInCart();
  assert.equal(cartLength, 2);
});

it("Should return the number of items in the cart", () => {
  // Create items then add to cart
  const newItem = utils.createItem("Item", 15.99);
  const cart = utils.getShoppingCart();
  utils.addItemToCart(newItem);
  assert.equal(cart.length, 1);

  // Remove items from cart
  utils.removeItemFromCart(newItem);
  assert.equal(cart.length, 0);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", () => {
  const newItem = utils.createItem("Pear", 4.49);
  utils.addItemToCart(newItem);
  const cart = utils.getShoppingCart();

  // Testing
  assert.equal(cart[0].quantity, 1);

  // Test for the quantity
  utils.addItemToCart(newItem);
  assert.equal(cart[0].quantity, 2);
});

it("Should validate that an empty cart has 0 items", () => {
  const cart = utils.getShoppingCart();
  const empty_cart = utils.cartIsEmpty(cart);
  expect(empty_cart).to.be.a("boolean");
  expect(empty_cart).to.equal(true)
})

it("Should return the total cost of all items in the cart", () => {
  // Add two items to cart
  const newItem = utils.createItem("Item", 15.99);
  const secondItem = utils.createItem("Second Item", 5.99);
  utils.addItemToCart(newItem);
  utils.addItemToCart(secondItem);

  const total = utils.totalCost()
  assert.equal(total, 21.98);
});
