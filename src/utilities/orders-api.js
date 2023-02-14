import sendRequest from './send-request';

const BASE_URL = '/api';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function removeItemFromCart(itemId){
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'DELETE');

}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrders(){
  return sendRequest(`${BASE_URL}/orders`);
}

export function addOrderToHistory(orderId){
  return sendRequest(`${BASE_URL}/orders/${orderId}`, 'POST');
}