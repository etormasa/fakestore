import { useContext, useState } from "react";
import { ProductsContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Products() {
  const { products } = useContext(ProductsContext);
  const {
    cartItems,
    addToCart,
    increment,
    decrement
  } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter((product) => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getCartItem = (id) => cartItems.find(item => item.id === id);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Products</h2>

      {/* Filtro de categoría */}
      <div className="mb-4 d-flex justify-content-center">
        <select
          className="form-select w-50"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid de productos */}
      <div className="row">
        {currentProducts.map((product) => {
          const itemInCart = getCartItem(product.id);
          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ objectFit: "contain", height: "200px" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">
                    <small className="text-muted">{product.category}</small>
                  </p>

                  {itemInCart ? (
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => decrement(product.id)}
                      >
                        -
                      </button>
                      <span>{itemInCart.quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => increment(product.id)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-success mt-2"
                      onClick={() => addToCart(product)}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Link para volver a Home */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Products;
