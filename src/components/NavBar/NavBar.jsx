import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';

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
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            {user ?
                <>
                    &nbsp; | &nbsp;<span>Welcome, {user.name}</span>
                    &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <>
                    &nbsp; | &nbsp; <Link to="" onClick={handleLogIn}>Log In / Sign Up</Link>
                </>
            }
        </nav>
    )
}