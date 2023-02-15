import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ItemPage from '../ItemPage/ItemPage';
import ItemDetail from '../ItemDetail/ItemDetail'
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { useNavigate} from 'react-router-dom';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null)
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat]
      }, []);
      setActiveCat(categoriesRef.current[0]);
      setMenuItems(items);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, []);

  async function handleAddToOrder(itemId, selectedSize) {
    const cart = await ordersAPI.addItemToCart(itemId, selectedSize)
    setCart(cart)
    navigate('/bakery/cart');
  }

  //ask why my placedorder page isnt working
  //ask how to find item id by the page in itemdetail

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {user ?
        <>
          <Routes>
            <Route path='/bakery' element={<HomePage />} />
            <Route path='/bakery/items' element={<ItemPage
              categoriesRef={categoriesRef}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
              menuItems={menuItems}
              handleAddToOrder={handleAddToOrder}
            />} />
            <Route path='/bakery/cart' element={<ShoppingCartPage user={user}/>} />
            <Route path='/bakery/orders' element={<OrderHistoryPage />} />
            <Route path='/bakery/items/:id' element={<ItemDetail menuItems={menuItems} handleAddToOrder={handleAddToOrder} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}