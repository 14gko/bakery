import './LineItem.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function LineItem({ lineItem, isPaid, handleChangeQty, handleRemoveItem }) {
  return (
    <div className="border-top">
      <div className='LineItem row g-0'>
        <div className="img-fit col-md-4">
          <img src={`${lineItem.item.image}`} alt="" className='cart-img img-fluid' />
        </div>
          <div className='card-body'>
            <span className='itm-name card-title'>{lineItem.item.name}</span>
          </div>
          <div className="price-qty card-text">
            <div><span>${lineItem.item.price.toFixed(2)}</span></div>
            {!isPaid &&
              <button className='qty-btn' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}><i class="bi bi-dash-circle"></i></button>
            }
            <span id="qty">{lineItem.qty}</span>
            {!isPaid &&
              <button className='qty-btn' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}><i class="bi bi-plus-circle"></i></button>
            }
          </div>
            <button onClick={() => handleRemoveItem(lineItem.item._id)}><i className='bi bi-trash3'></i></button>
        </div>
      </div>
  );
}