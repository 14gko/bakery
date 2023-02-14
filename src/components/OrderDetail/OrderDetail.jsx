import './OrderDetail.css'

export default function OrderDetail({ orders, activeOrder }) {
    const order = orders.filter(order => order.orderId === activeOrder.orderId)
    console.log(order)
    const lineItems = async () => { await order[0].lineItems.item.map(item =>
        {return(
        <li>
            {item.name}
            {item.qty}
        </li>
        )}
    )}

    return (
        <>
        {
            order.length === 0 ?
                <h1>Loading...</h1>
                :
                <>
                    <hr />
                    <h1>Order#:{order[0].orderId}</h1>
                    <div>{lineItems}</div>
                </>
        }
        </>
    )
}