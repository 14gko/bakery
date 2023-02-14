import {useState, useEffect} from 'react';
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
            setActiveOrder(orders[0]);
        }
        getOrders()
    }, []);

    async function handleSelectOrder(order){
        if (order === activeOrder){
            setActiveOrder(order)
        }
    }

    async function handleCheckToken(){
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1 className="page-title">Order History</h1>
            <PlacedOrders orders={orders} activeOrder={activeOrder} setActiveOrder={setActiveOrder}/>
            <OrderDetail orders={orders} activeOrder={activeOrder}/>
        </>
    )
}