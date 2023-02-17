import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import CategoryList from '../../components/CategoryList/CategoryList'
import MenuList from '../../components/MenuList/MenuList';
import './ItemPage.css';

const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(query))
}

export default function ItemPage({ menuItems, activeCat, setActiveCat, categoriesRef, handleAddToOrder }) {
    const [query, setQuery] = useState('');
    // const [menuItems, setMenuItems] = useState([]);
    // const [activeCat, setActiveCat] = useState('');
    // const [cart, setCart] = useState(null)
    // const categoriesRef = useRef([]);
    // const navigate = useNavigate();

    // useEffect(function () {
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

    //     async function getCart() {
    //         const cart = await ordersAPI.getCart()
    //         setCart(cart)
    //     }
    //     getCart()
    // }, []);

    return (
        <>
            <div className='search-container'>
                <form className='search-bar'>
                    <input type="text" placeholder={`Search in ${activeCat}`} onChange={e => setQuery(e.target.value)} />
                    <button className="search-btn" type="submit"><i class="bi bi-search-heart"></i></button>
                </form>
            </div>

            <main className='item-page'>
                <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />
                <MenuList
                    menuItems={menuItems.filter(item => item.category.name === activeCat)}
                    handleAddToOrder={handleAddToOrder}
                    getFilteredItems={getFilteredItems}
                    query={query}
                />
            </main>
        </>

    )
}