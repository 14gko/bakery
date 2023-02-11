// import './LineItem.css';

export default function LineItem({lineItem, isPaid}){
    return (
        <div className="LineItem">
          <div>{lineItem.item.emoji}</div>
          <div>
            <span>{lineItem.item.name}</span>
            <span>{lineItem.item.price.toFixed(2)}</span>
          </div>
          <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
            {!isPaid &&
              <button>−</button>
              }
            <span>{lineItem.qty}</span>
            {!isPaid &&
              <button>+</button>
            }
          </div>
          <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
        </div>
      );
}