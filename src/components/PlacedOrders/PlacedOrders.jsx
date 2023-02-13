import PlacedOrdersItem from '../PlacedOrdersItem/PlacedOrdersItem'
import './PlacedOrders.css'

export default function PlacedOrders({ orders }) {
    console.log(orders)
    const placedOrdersItem = orders.map((order) =>
        <PlacedOrdersItem
            order={order}
            isPaid={order.isPaid}
            key={order._id}
        />
    )
    // console.log(orders)
    return (
        <>
            <h1>hi</h1>
            <div>
            {placedOrdersItem}
            </div>
        </>
    )
}