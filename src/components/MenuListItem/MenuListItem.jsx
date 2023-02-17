import {Link} from 'react-router-dom'
import './MenuListItem.css';

export default function MenuListItem({menuItem, handleAddToOrder}){
    return(
        <Link to={`/bakery/items/${menuItem._id}`} className="MenuListItem card-menu">
            <div className='image-container'>
                <img className='card-img-top item-img responsive-img' src={`${menuItem.image}`} alt="" />
            </div>
            <div className="card-title">{menuItem.name}</div>
            <div className="card-text">Price: ${menuItem.price}</div>
        </Link>
    );
}