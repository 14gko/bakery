import './LineItem.css';

export default function LineItem({lineItem, isPaid, handleChangeQty, handleRemoveItem}){
    return (
        <div className="LineItem">
          <img src={`${lineItem.item.image}`} alt="" className='cart-img'/>
          <div>
            <span id='item-name'>{lineItem.item.name}</span>
          </div>
          <div className="price-qty">
            <div><span>{lineItem.item.price.toFixed(2)}</span></div>
            {!isPaid &&
              <button className='qty-btn' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>−</button>
              }
            <span id="qty">{lineItem.qty}</span>
            {!isPaid &&
              <button className='qty-btn' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
            }
            <button onClick={() => handleRemoveItem(lineItem.item._id)}>x</button>
          </div>
        </div>
      );
}