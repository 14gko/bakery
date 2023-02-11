const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/cart');

// GET /api/orders/cart
router.get('/', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;
