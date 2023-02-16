import { Link } from "react-router-dom"
import { useState } from 'react'
import * as userService from '../../utilities/users-service';
import CategoryList from "../CategoryList/CategoryList";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
// import ProfileMenu from "../ProfileMenu/ProfileMenu";
import './NavBar.css'

export default function NavBar({ user, setUser, categoriesRef, activeCat, setActiveCat }) {
    const [open, setOpen] = useState(false)
    const [openProfile, setProfileOpen] = useState(false);
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
        <>
            <nav className="nav-container">
                <div>
                    <Link to="/bakery" className="menu">Home <i class="bi bi-cup-hot"></i></Link>
                    <span className="menu nav-menu" onClick={() => setOpen((open => !open))}>Menu <i class="bi bi-clipboard-heart"></i></span>
                </div>
                <div className={`dropdown-cat dropdown-li ${open ? 'active' : 'inactive'}`}>
                    <DropdownMenu activeCat={activeCat} setActiveCat={setActiveCat} setOpen={setOpen} open={open} />
                </div>
                <span className="menu" onClick={() => setProfileOpen((open => !open))}>Account <i class="bi bi-person"></i></span>
                <div onClick={() => setProfileOpen(false)} className={`dropdown-profile dropdown-li ${openProfile ? 'active' : 'inactive'}`}>
                    <Link className="cart-btn" to="/bakery/cart">Cart <i class="bi bi-cart"></i></Link>
                    <Link to="/bakery/orders">Orders <i class="bi bi-basket3-fill"></i></Link>
                    {user ?
                        <>
                            <Link to="" onClick={handleLogOut}>Log Out <i class="bi bi-person-fill"></i></Link>
                        </>
                        :
                        <>
                            <Link to="" onClick={handleLogIn}>Log In / Sign Up <i class="bi bi-person-fill"></i></Link>
                        </>
                    }
                    {/* <ProfileMenu /> */}
                </div>
            </nav>
        </>
    )
}