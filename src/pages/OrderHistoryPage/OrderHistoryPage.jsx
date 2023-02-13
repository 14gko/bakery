import {useState, useEffect} from 'react';
import { checkToken } from "../../utilities/users-service"
import * as ordersAPI from '../../utilities/orders-api'
import PlacedOrders from '../../components/PlacedOrders/PlacedOrders'
import './OrderHistoryPage.css'

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState(null);

    useEffect(function () {
        async function getOrders() {
            const orders = await ordersAPI.getOrders()
            setOrders(orders)
        }
        getOrders()
    }, []);

    async function handleCheckToken(){
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1 className="page-title">Order History</h1>
            <PlacedOrders orders={orders}/>
        </>
    )
}