import {useEffect, useRef, useState} from 'react';
import * as ordersAPI from '../../utilities/orders-api'
import * as itemsAPI from '../../utilities/items-api'
import NewOrder from '../../components/NewOrder/NewOrder'

export default function ShoppingCartPage(){
    const [cart, setCart] = useState(null);

    useEffect(function () {
        async function getCart() {
          const cart = await ordersAPI.getCart()
          setCart(cart)
        }
        getCart()
    
      }, []);

    return <NewOrder order={cart}/>
}