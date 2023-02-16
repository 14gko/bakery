const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.delete('/cart/items/:id', ordersCtrl.removeFromCart)
// POST /api/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.get('/orders', ordersCtrl.orders);
// router.post('/orders/:id', ordersCtrl.addToOrders);
router.delete('/orders/:id', ordersCtrl.removeFromOrders)

module.exports = router;
