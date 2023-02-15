import './OrderDetail.css'

export default function OrderDetail({ orders, activeOrder }) {
    const [orderDetails, setOrderDetails] = '';
    const order = orders.filter(order => order.orderId === activeOrder.orderId)
    // console.log(order)
    const lineItems = async () => {
        const order = await order[0].lineItems.item.map(item => {
            return (
                <div>
                    {item.name}
                    {item.qty}
                </div>
            )
            setOrderDetails(order)
            // console.log(orderDetails)
        }
        )
    }
    // console.log(orderDetails)

return (
    <>
        {
            order.length === 0 ?
                <h1>Loading...</h1>
                :
                <>
                    <h1>Order#:{order[0].orderId}</h1>
                    <div>{lineItems}</div>
                </>
        }
    </>
)
}