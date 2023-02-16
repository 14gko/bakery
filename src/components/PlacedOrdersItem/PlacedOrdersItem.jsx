import './PlacedOrdersItem.css';

export default function PlacedOrdersItem({ order, isPaid, setActiveOrder, activeOrder }) {

    /* <div id='placed-order'>
               <hr />
               <span>Order: {order.orderId}</span>
           </div>
           <span onClick={() => setActiveOrder(order)} className={order === activeOrder ? 'selected' : ''}>
               <i class="bi bi-search"></i>
           </span>
           <div>Total: {order.orderTotal.toFixed(2)}</div>
           <div>Item Quantity: {order.totalQty}</div>
           <div>Date Placed: {new Date(order.updatedAt).toLocaleDateString()}</div>
       </div> */

    return (
        <>
            {isPaid ?
                <>
                    <table>
                        <tr>
                            <th>Order: {order.orderId}</th>
                            <th onClick={() => setActiveOrder(order)} id="right-align" className={(order === activeOrder ? 'selected' : '')}><i class="bi bi-search"></i></th>
                        </tr>
                        <tr>
                            <td>Date Placed: </td>
                            <td className='right-align'>{new Date(order.updatedAt).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Item Quantity:</td>
                            <td className='right-align'>{order.totalQty}</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td className='right-align'>${order.orderTotal.toFixed(2)}</td>
                        </tr>
                    </table>
                    <hr />
                </>
                :
                ''
            }
        </>
    )
}
