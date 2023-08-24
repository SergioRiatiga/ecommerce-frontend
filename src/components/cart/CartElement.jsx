import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"
import './styles/cartElement.css'

const CartElement = ({prod}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
  }

  return (
    <article className="cart">
      <section className="cart__section">
        <header className="cart__header">
          <img className="cart__img" src={prod.product.productImgs[0].url} alt="" />
        </header>
        <div className="cart__namePrice">
          <h3 className="cart__name">{prod.product.title} </h3>
          <p className="cart__p">
            <span className="cart__quantity">{prod.quantity} </span> x 
            <span className="cart__price"> ${prod.product.price} </span>
          </p>
        </div>
        <button className="cart__btn" onClick={handleDelete}>
          <i className='bx bx-trash'></i>
        </button>
      </section>
      <footer className="cart__footer">
        <span className="cart__total__label">Total:</span>
        <span className="cart__total__price"> ${prod.quantity*prod.product.price}</span>
      </footer>
    </article>
  )
}

export default CartElement