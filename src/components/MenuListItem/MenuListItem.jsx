import {Link} from 'react-router-dom'
import './MenuListItem.css';

export default function MenuListItem({menuItem, handleAddToOrder}){
    return(
        <Link to={`/bakery/items/${menuItem._id}`} className="MenuListItem card">
            <div className='image-container'>
                <img src={`${menuItem.image}`} alt="" />
            </div>
            <div className="name">{menuItem.name}</div>
            <div> {menuItem.price}</div>
            <button onClick={() => handleAddToOrder(menuItem._id)}>ADD</button>
        </Link>
    );
}