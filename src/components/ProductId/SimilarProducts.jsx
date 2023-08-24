import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/similarProducts.css'
import CardProduct from '../Home/CardProduct';

const SimilarProducts = ({product}) => {

  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL

  const [productsByCategory, getProductsByCategory] = useFetch(baseUrl)

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.category.id}`)
    }
  }, [product])

  return (
    <div>
      <h2 className='similarProducts__title'>Discover similar products</h2>
      <div className="card__container">
        {
          productsByCategory?.map((prod) => {
            if (product.id !== prod.id) {
              return (
                <CardProduct
                  key={prod.id}
                  prod={prod}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts