/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

const Order = Ember.Object.extend({
  unitPrice: this.unitPrice,
  quantity: this.quantity,
  orderPrice: Ember.computed('this.unitPrice','this.quantity', function(){
    return (this.unitPrice * this.quantity);
  }),
});

let hats = Order.create({
  unitPrice: 5,
  quantity: 2,
  orderPrice
});

let lamp = Order.create({
  unitPrice: 20,
  quantity: 1,
  orderPrice
});

let handTowels = Order.create({
  unitPrice: 8,
  quantity: 3,
  orderPrice
});

const Cart = Ember.Object.extend({
  let orders = [];
  addToCart: function() {
    return
  },
  totalPrice: Ember.computed('this.unitPrice','this.quantity', function(){
    return (this.unitPrice * this.quantity);
  }),
});
