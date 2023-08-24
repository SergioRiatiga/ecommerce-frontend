import { useSelector } from "react-redux"
import CartElement from "../../components/cart/CartElement";
import './styles/cartMenu.css'
import usePurchase from "../../hooks/usePurchase";

const CartMenu = () => {
  
  const cart = useSelector((states) => states.cart)

  const totalPrice = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity *cv.product.price
    return acc + subTotal
  },0)

  const { makePurchase } = usePurchase()

  const handlePurchase = () => {
    makePurchase()
  }

  return (
    <section className="cartMenu">
        <h2 className="cartMenu__title">Shopping cart</h2>
        <div className="cartMenu__container">
          {
            cart.map((prod) => (
              <CartElement
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
      <footer className="cartMenu__footer">
        <div className="cartMenu__totalPrice">
          <span className="cartMenu__totalPrice__label">Total: </span> <span className="cartMenu__totalPrice__value">${totalPrice} </span>
        </div>
        <button onClick={handlePurchase} className="cartMenu__btn">Purchase</button>
      </footer>
    </section>
  )
}

export default CartMenu