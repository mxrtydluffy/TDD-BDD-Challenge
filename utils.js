// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // Should return the area unless detects negative values.
  if (Math.sign(w) < 0 || Math.sign(h) < 0) {
    return null;
  } else {
    return w * h;
  }
}

const perimeter = (w, h) => {
  // Should return the perimeter unless detects negative values.
  if (Math.sign(w) < 0 || Math.sign(h) < 0) {
    return null;
  } else {
    const perimter = (2 * w) + (2 * h);
    return perimeter;
  }
}

const circleArea = r => {
  // Should return the area of the circle (pi * r^2) unless detects negative values.
  if (Math.sign(r) < 0) {
    return null;
  } else {
    const area = Math.PI * Math.pow(r, 2);
    return area;
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item);
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length;
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.indexOf(item);
  if (index > -1) {
    shoppingCart.splice(index, 1);
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
