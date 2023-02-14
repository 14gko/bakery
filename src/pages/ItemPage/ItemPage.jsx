import { useState, useEffect, useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import CategoryList from '../../components/CategoryList/CategoryList'
import MenuList from '../../components/MenuList/MenuList';
import './ItemPage.css';

export default function ItemPage({menuItems, activeCat, setActiveCat, categoriesRef}) {
    // const [menuItems, setMenuItems] = useState([]);
    // const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null)
    // const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function () {
        // async function getItems() {
        //     const items = await itemsAPI.getAll();
        //     categoriesRef.current = items.reduce((cats, item) => {
        //         const cat = item.category.name;
        //         return cats.includes(cat) ? cats : [...cats, cat]
        //     }, []);
        //     setActiveCat(categoriesRef.current[0]);
        //     setMenuItems(items);
        // }
        // getItems();

        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()
    }, []);

    async function handleAddToOrder(itemId) {
        const cart = await ordersAPI.addItemToCart(itemId)
        setCart(cart)
        navigate('/bakery/cart');
      }

    return (
        <main>
            <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
            />
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder} />
        </main>

    )
}