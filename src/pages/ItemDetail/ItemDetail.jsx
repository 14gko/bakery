import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import * as itemsAPI from '../../utilities/items-api'
import MenuListItem from '../../components/MenuListItem/MenuListItem'
import './ItemDetail.css'

export default function ItemDetail({menuItems}){
    const [item, setItem] = useState('')
    const {id} = useParams();
    useEffect(function(){
        menuItems.forEach( item => {
            if (item._id === id){
                setItem(item);
            }})
    }, [])
    // ask how to find the item
    return(
        <div>
            <img src={`${item.image}`} alt="" />
        </div>
    )
}