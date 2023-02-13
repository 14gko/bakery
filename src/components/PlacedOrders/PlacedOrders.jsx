import './PlacedOrders.css'
export default function PlacedOrders({orders}){
    const PlacedOrdersItem = orders.map(order => 
        <PlacedOrdersItem
            order={order}
            key={order._id}
        />
        )
    return(
        <div>{PlacedOrdersItem}</div>
    )
}