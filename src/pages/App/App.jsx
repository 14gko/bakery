import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import * as itemsAPI from '../../utilities/items-api'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ItemPage from '../ItemPage/ItemPage';
import ItemDetail from '../ItemDetail/ItemDetail'
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  // const [menuItems, setMenuItems] = useState([]);
  // const [activeCat, setActiveCat] = useState('');
  // const categoriesRef = useRef([]);

//   useEffect(function () {
//     async function getItems() {
//         const items = await itemsAPI.getAll();
//         categoriesRef.current = items.reduce((cats, item) => {
//             const cat = item.category.name;
//             return cats.includes(cat) ? cats : [...cats, cat]
//         }, []);
//         setActiveCat(categoriesRef.current[0]);
//         setMenuItems(items);
//     }
//     getItems();
// }, []);

//ask why my placedorder page isnt working
//ask how to find item id by the page in itemdetail

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {user ?
        <>
          <Routes>
            <Route path='/bakery' element={<HomePage/>} />
            <Route path='/bakery/items' element={<ItemPage
            // categoriesRef={categoriesRef} 
            // activeCat={activeCat}
            // setActiveCat={setActiveCat}
            // menuItems={menuItems} 
            />}/>
            <Route path='/bakery/cart' element={<ShoppingCartPage />} />
            <Route path='/bakery/orders' element={<OrderHistoryPage />} />
            <Route path='/bakery/items/:id' element={<ItemDetail />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>

      }
    </main>
  );
}