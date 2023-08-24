import { useEffect } from 'react'
import usePurchase from '../hooks/usePurchase'
import './styles/purchasesPage.css'
import PurchseCard from '../components/Purchases/PurchseCard'

const PurchasesPage = () => {

  const { purchases, getAllPurchases} = usePurchase()

  useEffect(() => {
    getAllPurchases()
  }, [])

  return (
    <div className='purchase'>
      <h2 className='purchase__title'> My purchases</h2>
      <div className='purchase__cards__container'>
        {
          purchases?.map((prod) => (
            <PurchseCard
            key={prod.id}
            prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PurchasesPage