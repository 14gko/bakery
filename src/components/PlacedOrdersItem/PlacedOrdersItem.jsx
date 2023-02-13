import './PlacedOrdersItem.css';

export default function PlacedOrdersItem({order}){
    return(
        <div>
            <div>{order._id}</div>
        </div>
    );
}