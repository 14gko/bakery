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
            <Link to="/bakery/orders">Orders</Link>
            {user ?
                <>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                    <Link to="/bakery/cart"><i class="bi bi-cart"></i></Link>
                </>
                :
                <>
                    <Link to="" onClick={handleLogIn}>Log In / Sign Up</Link>
                </>
            }
        </nav>
    )
}