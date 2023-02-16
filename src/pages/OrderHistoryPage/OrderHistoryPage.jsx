import { useState, useEffect } from 'react';
import { checkToken } from "../../utilities/users-service"
import * as ordersAPI from '../../utilities/orders-api'
import PlacedOrders from '../../components/PlacedOrders/PlacedOrders'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import './OrderHistoryPage.css'
// import order from '../../../models/order';

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState('');

    useEffect(function () {
        async function getOrders() {
            const orders = await ordersAPI.getOrders()
            // const selectedOrder = orders.find(order => order.orderId === )
            setOrders(orders);
            console.log(orders)
            setActiveOrder(orders[0]);
            // console.log('hello world')
            // ordersAPI.getOrders().then(res => console.log(res))
        }
        getOrders()
    }, []);

    async function handleSelectOrder(order) {
        if (order === activeOrder) {
            setActiveOrder(order)
        }
    }

    async function handleRemoveOrder(orderId){
        const order = await ordersAPI.removeItemFromOrders(orderId)
        setOrders(order)
    }

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <div>
            <h1 className="page-title">Order History</h1>
            <hr className="margin-btm-0"/>
            <div className='OrderHistory'>
                    <PlacedOrders orders={orders} activeOrder={activeOrder} setActiveOrder={setActiveOrder} />
                <aside className='order-details'>
                    <OrderDetail orders={orders} activeOrder={activeOrder} handleRemoveOrder={handleRemoveOrder}/>
                </aside>
            </div>
        </div>
    )
}