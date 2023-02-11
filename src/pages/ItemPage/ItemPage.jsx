import {useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import './ItemPage.css';

export default function ItemPage(){
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);

    useEffect(function(){
        async function getItems(){
            const items = await itemsAPI.getAll();
            //maybe add categoriesref
            setMenuItems(items);
        }
        getItems();
        async function getCart(){
            const cart = await ordersAPI.getCart()
            setCart(cart);
        }
        getCart();
    })

    return;
}