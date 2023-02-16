import './OrderDetail.css'

export default function OrderDetail({ orders, activeOrder, handleRemoveOrder }) {
    const [orderDetails, setOrderDetails] = '';
    const order = orders.filter(order => order.orderId === activeOrder.orderId)
    console.log(order)
    const lineItems = async () => {
        const order = await order[0].lineItems.map(item => {
            return (
                <div>
                    {item.item.name}
                    {item.qty}
                </div>
            )
            setOrderDetails(order)
            // console.log(orderDetails)
        }
        )
    }
    lineItems().then(items => console.log(items))
    return (
        <>
            {
                order.length === 0 ?
                    <h1>Loading...</h1>
                    :
                    <>
                        <h2 className='margin-top-5'>Order#: {order[0].orderId}</h2>
                        <div className='left-align padding-2'>Date Placed: {new Date(order[0].updatedAt).toLocaleDateString()}</div>
                        <br />
                        <hr />
                        <br />
                        <div>{lineItems}
                            {order[0].lineItems.map(item => {
                                return (
                                    <div className='flex-box'>
                                        <img className="img-fluid order-img" src={`${item.item.image}`} />
                                        <div className="width-15vw">
                                            <div>{item.item.name}</div>
                                            <div>Quantity: {item.qty}</div>
                                            <div>Price: {item.item.price} (x{item.qty})</div>
                                        </div>
                                    </div>
                                )
                            })}
                            <br />
                            <div className='left-align padding-2'>Total Items: {order[0].totalQty} <span className='float-right'>Total Price: ${order[0].orderTotal.toFixed(2)}</span></div>
                            <br />
                            <hr />
                            <button onClick={() => handleRemoveOrder(order[0]._id)}>cancel?</button>
                        </div>
                    </>
            }
        </>
    )
}