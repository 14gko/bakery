import './OrderDetail.css'

export default function OrderDetail({orders, activeOrder}){
    const order = orders.filter(order => order.orderId === activeOrder.orderId)
    const lineItems = order[0].lineItems.map(item =>
        <li>
            {item.item.name}
            {item.qty}
        </li>
        )
    console.log(order[0].lineItems)
    console.log(order)
    return(
        <div>
            <hr />
            <h1>Order#:{order[0].orderId}</h1>
            <div>{lineItems}</div>

        </div>
    )
}