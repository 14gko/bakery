import { useEffect, useRef, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api'
import * as itemsAPI from '../../utilities/items-api'
import NewOrder from '../../components/NewOrder/NewOrder'
import { useNavigate } from 'react-router-dom';

export default function ShoppingCartPage() {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()

    }, []);

    async function handleRemoveItem(itemId){
        const cart = await ordersAPI.removeItemFromCart(itemId)
        setCart(cart)
    }

    async function handleChangeQty(itemId, newQty){
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout(){
        await ordersAPI.checkout();
        navigate('/bakery/orders')
    }

    return (
        <>
            <h1 className='page-title'>Shopping Cart</h1>
            <NewOrder order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} handleRemoveItem={handleRemoveItem} />
        </>

    )
}