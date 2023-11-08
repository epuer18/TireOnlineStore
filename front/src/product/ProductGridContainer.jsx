import AddToCart from './AddToCart.jsx';
import PropTypes from "prop-types";
const ProductGridContainer = ({ products, removeProduct, email, cart, setCart }) => {
  return (
    <ul className='gridContainer'>
      {products.map((product) => (
        <li className='item' key={product._id}>
          Name: {product.name} -- {product.width}/{product.aspectRatio}R{product.diameter} - ${product.price}{' '}
          <button onClick={() => removeProduct(product._id)}>Delete</button>
          <AddToCart product_id={product._id} email={email} cart={cart} setCart={setCart}/>
        </li>
      ))}
    </ul>
  );
};

ProductGridContainer.propTypes = {
  products: PropTypes.array,
  removeProduct: PropTypes.func,
  email: PropTypes.string,
  cart: PropTypes.array,
  setCart: PropTypes.func,
}
export default ProductGridContainer;
