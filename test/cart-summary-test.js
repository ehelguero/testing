var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('./../src/cart-summary');

describe('CartSummary', function(){
  it('getSubtotal() should return 0 if no items are passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.equal(0);
  });

  it('getSubtotal() should return the sum of the price and quantity for all items', function(){
    //pasar objetos
    var cartSummary = new CartSummary([
      {
        name: 'box',
        price: 10,
        quantity: 1,
      },
      {
        name: 'tshirt',
        price: 20,
        quantity: 2,
      }
    ]);
    // que devuelva el total
    expect(cartSummary.getSubtotal()).to.equal(50);
  })
})
