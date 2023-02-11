import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ItemPage from '../ItemPage/ItemPage';
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {user ?
        <>
          <Routes>
            <Route path='/bakery' element={<HomePage/>} />
            <Route path='/bakery/items' element={<ItemPage/>}/>
            <Route path='/orders/cart' element={<ShoppingCartPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>

      }
    </main>
  );
}