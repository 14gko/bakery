import './NewOrder.css';
import LineItem from '../../components/LineItem/LineItem'

export default function NewOrder({ order, handleCheckout, handleChangeQty, handleRemoveItem }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            key={item._id}
            handleChangeQty={handleChangeQty}
            handleRemoveItem={handleRemoveItem}
        />
    )

    return (
        <div className='new-order'>
            <div className="lineitem-grid">
                <div className="lineitem-container">
                    {lineItems.length ?
                        <>
                            <div id='order-id'>Order#: {order._id}</div>
                            {lineItems}
                            <section className="total">
                                <div>
                                    Total: ${order.orderTotal.toFixed(2)}
                                </div>
                                <button
                                    className='checkout-button right-align'
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            </section>
                        </>
                        :
                        <div>Your Shopping Cart is Empty</div>
                    }
                </div>
            </div>
        </div>
    )
}