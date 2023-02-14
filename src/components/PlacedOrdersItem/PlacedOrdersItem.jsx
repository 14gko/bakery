import './PlacedOrdersItem.css';

export default function PlacedOrdersItem({order, isPaid, setActiveOrder, activeOrder }){
    return(
        <div 
        onClick={() => setActiveOrder(order)}
        className={order === activeOrder ? 'selected' : ''}>
            {order.orderId}
            {order.orderTotal.toFixed(2)}
            {order.totalQty}
            <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
        </div>
    )
}