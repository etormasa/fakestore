import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const {
    cartItems,
    increment,
    decrement,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-100">

      <h2 className="mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="list-group-item d-flex flex-wrap justify-content-between align-items-center"
              >
                {/* Imagen y título */}
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginRight: "15px"
                    }}
                  />
                  <div>
                    <strong>{item.title}</strong>
                    <br />
                    <small className="text-muted">Cantidad: {item.quantity}</small>
                  </div>
                </div>

                {/* Controles y eliminar */}
                <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Totales */}
          <div className="mb-4">
            <h5>Total Items: <strong>{totalItems}</strong></h5>
            <h5>Total price: <strong>${totalPrice}</strong></h5>
          </div>

          <button className="btn btn-warning" onClick={clearCart}>
            Empty cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
