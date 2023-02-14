import PlacedOrdersItem from '../PlacedOrdersItem/PlacedOrdersItem'
import './PlacedOrders.css'

export default function PlacedOrders({ orders, activeOrder, setActiveOrder }) {
    const placedOrdersItem = orders.map((order) =>
        <PlacedOrdersItem
            order={order}
            isPaid={order.isPaid}
            key={order._id}
            setActiveOrder={setActiveOrder}
            activeOrder={activeOrder}
        />
    )
    // console.log(activeOrder)
    return (
        <>
            <h1>hi</h1>
            <div>
            {placedOrdersItem}
            </div>
        </>
    )
}