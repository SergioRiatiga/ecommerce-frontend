import { useState } from 'react';
import './styles/productInfo.css'
import { useDispatch } from 'react-redux';
import { postCartThunk } from '../../store/slices/cart.slice';

const ProductInfo = ({product}) => {

  const [quantity, setQuantity] = useState(1)

  const handleMinus = () => {
    if (quantity - 1 >= 1 ) {
      setQuantity((state) => state - 1 )
    }
  }

  const handleAdd = () => setQuantity((state) => state + 1 )

  const dispatch = useDispatch()

  const handleAddToCart =() => {
    dispatch(postCartThunk(product, quantity))
  }

  return (
    <article className='prodcutInfo'>
      <h3 className='productInfo__brand'>{product?.brand} </h3>
      <h2 className='productInfo__name'>{product?.title} </h2>
      <p className='productInfo__description'>{product?.description}</p>
      <footer className='prproductInfo__footer'>
        <ul className='productInfo__list'>
          <li className='productInfo__item'>
            <span className='productInfo__item-label'>Price</span>
            <span className='productInfo__item-value'>${product?.price}</span>
          </li>
          <li className='productInfo__item'>
            <span className='productInfo__item-label'>Quantity</span>
            <div className='productInfo__item-counter'>
              <div className='productInfo__counterMinus' onClick={handleMinus}><i className='bx bx-minus'></i></div>
              <div className='productInfo__counterQuantity' >{quantity} </div>
              <div className='productInfo__counterPlus' onClick={handleAdd}><i className='bx bx-plus'></i></div>
            </div>
          </li>
        </ul>
        <button  onClick={handleAddToCart} className='productInfo__btn'>Add to cart <i className='bx bx-cart'></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo