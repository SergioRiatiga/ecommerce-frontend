import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct";
import './styles/home.css'
import { useState } from "react";
import FilterCategories from "../components/Home/FilterCategories";
import FilterPrice from "../components/Home/FilterPrice";

const Home = () => {

  const [isCloseFilter, setIsCloseFilter] = useState(true)

  const handleOpenFilter = () => {
    if (isCloseFilter) {
      return setIsCloseFilter(false)
    } return setIsCloseFilter(true)
  }

  const [inputValue, setInputValue] = useState('')

  const [priceMinMax, setPriceMinMax] = useState({
    min:0,
    max: Infinity,
  })

  const products = useSelector((states) => states.products)

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }

  const cbFilter = (prod) => prod.title.toLowerCase().includes(inputValue)

  const cbFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price
    const condMax = prod.price <= priceMinMax.max 
    return condMin && condMax
  }

  return (
    <div className="home__container">
      <aside className={`home__filter ${isCloseFilter ?'home__filter__close':''}`}>
        <FilterPrice priceMinMax={priceMinMax} setPriceMinMax={setPriceMinMax} />
        <FilterCategories/>
      </aside>
      <div className="home__searchCard">
        <div className="home__search">
          <label className="home__search__label" htmlFor="">Search</label>
          <input value={inputValue} className="home__search__input" onChange={handleSearchName} type="text" />
        </div>
        <button onClick={handleOpenFilter} className="home__btnfilter">Filters<i className='bx bx-filter-alt'></i> </button>
        <div className="card__container">
          {
            products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
              <CardProduct
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home