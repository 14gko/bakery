import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom'
import * as itemsAPI from '../../utilities/items-api'
import MenuListItem from '../../components/MenuListItem/MenuListItem'
import Select from "react-select";
import './ItemDetail.css'

export default function ItemDetail({ menuItems, handleAddToOrder }) {
    const [item, setItem] = useState('')
    const [selectedSize, setSelectedSize] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(function () {
        menuItems.forEach(item => {
            if (item._id === id) {
                setItem(item);
            }
        })
    })

    // const handleChange = (selectedOption) => {
    //     item.size = selectedOption;
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const item = {
    //         ...item,
    //         size: selectedSize.value,
    //     }
    //     console.log('hi', item.size)
    //     setItem(formData)
    // }
    const handleChange = (selectedOption) => {
        setSelectedSize(selectedOption)
        // console.log('hi', selectedOption)
    }
    // async function handleAddToOrder(itemId) {
    //     const cart = await ordersAPI.addItemToCart(itemId)
    //     setCart(cart)
    //     navigate('/bakery/cart');
    //   }
    // ask how to find the item
    // (selectedOption) => setSelectedSize(selectedOption)
    console.log(item.category)
    return (
        <div className='item-det-container'>
            <div className="img-container">
                <img className="detail-img" src={`${item.image}`} alt="" />
            </div>
            <div className='item-det'>
                <Link id="back-btn" to='/bakery/items'><i class="bi bi-arrow-left"></i></Link>
                <h1 className='item-name'>{item.name}</h1>
                <div className='price-avail'>
                    <div className='space-between'>Price:<span>${item.price}</span></div>
                    {item.availability ?
                        <div className='space-between'>Availability: <span>In Stock</span></div>
                        :
                        <div className='space-between'>Availability: <span>Out of Stock</span></div>
                    }
                </div>
                <div>
                    <form className='detail-form'>
                        {item.category === 'Cakes' ? 
                        <Select className='form-ele' name="size" options={item.size} onChange={handleChange} />
                        :
                        <>
                        <br /><br />
                        </>
                        }
                        <button className='btn-detail' onClick={() => handleAddToOrder(item._id)}>Add To Cart <i class="bi bi-cart"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}