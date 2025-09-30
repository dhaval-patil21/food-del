import { useContext } from "react";
import "./PlaceOrder.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}
              </p>
            </div>
          </div>
          <Link to="/order">
            <button>PROCEED TO PAYMENT</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
