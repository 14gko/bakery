import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty, handleRemoveItem }) {
  return (
    <div className="LineItem card mb-3">
      <div className='row g-0'>
        <div className="img-fit col-md-4">
          <img src={`${lineItem.item.image}`} alt="" className='cart-img img-fluid rounded-start' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <span id='item-name card-title'>{lineItem.item.name}</span>
          </div>
          <div className="price-qty card-text">
            <div><span>${lineItem.item.price.toFixed(2)}</span></div>
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
      </div>
    </div>
  );
}