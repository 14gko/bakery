const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/cart
router.get('/', ordersCtrl.cart);
// POST /api/cart/items/:id
router.post('/items/:id', ordersCtrl.addToCart);
// POST /api/cart/checkout
router.post('/checkout', ordersCtrl.checkout);
// POST /api/cart/qty
router.put('/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;
