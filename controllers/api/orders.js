const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  removeFromCart,
  checkout,
  orders,
  // addToOrders,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id)
  res.json(cart)
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.addItemToCart(req.params.id)
  res.json(cart)
}

async function removeFromCart(req, res){
  const cart = await Order.getCart(req.user._id)
  await cart.removeItemFromCart(req.params.id)
  res.json(cart)
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.setItemQty(req.body.itemId, req.body.newQty)
  res.json(cart)
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id)
  cart.isPaid = true
  await cart.save()
  res.json(cart)
}

async function orders(req, res){
 const orders = await Order.find({user: req.user._id})
 res.json(orders);
}

// async function index(req, res){
//   const items = await Item.find({}).sort('name').populate('category').exec();
//   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//   res.json(items);
// }

// async function addToOrders(req, res){
//   const orders = await Order.getOrders(req.user._id);
//   await orders.addOrderToHistory(req.params.id)
//   res.json(orders);
// }