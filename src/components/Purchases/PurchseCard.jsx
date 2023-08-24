import './styles/purchaseCard.css'

const PurchseCard = ({prod}) => {

  return (
    <article className='card'> 
      <img className='card__img' src={prod.product.images[0].url} alt="" />
      <p className='card__name'>{prod.product.title} </p>
      <div className='card__quantityPrice'>
        <span className='card__quantity'>{prod.quantity} </span> x <span className='card__price'>{Math.round(prod.product.price)} </span>
      </div>
    </article>
  )
}

export default PurchseCard