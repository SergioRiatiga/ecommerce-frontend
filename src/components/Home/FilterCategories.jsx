import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/filterCategories.css'
import { getAllProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"

const FilterCategories = () => {

  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL

  const [ categories, getAllCategories ] = useFetch(baseUrl)

  useEffect(() => {
    getAllCategories('/categories')
  }, [])

  const dispatch = useDispatch()
  
  const handleFilterCategory = (id) => {
    if (id) {
      const url =`${BASE_URL}/products?categoryId=${id}`
      dispatch(getAllProductsThunk(url))
    } else {
      dispatch(getAllProductsThunk())
    }
  }
    

  return (
    <article className="categories">
      <h3 className="categories__name">Categories</h3>
      <ul className="categories__list">
        <li className="categories__item" onClick={() => handleFilterCategory()}>All</li>
        {
          categories?.map((category) => (
            <li className="categories__item" 
            onClick={() => handleFilterCategory(category.id)} 
            key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

export default FilterCategories