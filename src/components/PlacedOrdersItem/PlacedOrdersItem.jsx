import './PlacedOrdersItem.css';

export default function PlacedOrdersItem({order}){
    return(
        <div>
            {order.orderId}
            {order.orderTotal.toFixed(2)}
            {order.totalQty}
            <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
        </div>
    )
}