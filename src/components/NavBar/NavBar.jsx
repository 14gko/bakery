import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    function handleLogIn() {
        userService.login();
    }

    return (
        <nav className="nav-container">
            <Link to="/bakery" className="link1">Home</Link>
            <Link to="/bakery/items">Menu</Link>
            <Link to="/orders/cart">Shopping Cart</Link>
            <Link to="/orders">Orders</Link>
            {user ?
                <>
                   <span className="user">Welcome, {user.name}</span>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <>
                    <Link to="" onClick={handleLogIn}>Log In / Sign Up</Link>
                </>
            }
        </nav>
    )
}