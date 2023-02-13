const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.get('/orders', ordersCtrl.orders);
// router.post('/orders/:id', ordersCtrl.addToOrders);

module.exports = router;
