import { useForm } from "react-hook-form";
import "./styles/filterPrice.css";

const FilterPrice = ({priceMinMax, setPriceMinMax}) => {

  const {register, reset,handleSubmit} = useForm()

  const submit = (data) => {
    const min = data.from.trim() === ''? 0 : +data.from
    const max = data.to.trim() === ''? Infinity : +data.to

    setPriceMinMax({min, max})
  }

  const handleClearFilter = () => {
    setPriceMinMax({
      min: 0,
      max: Infinity
    })
    reset({
      from: '',
      to: '',
    })
  }

  return (
    <article className="price">
      <h3 className="price__name">Price</h3>
      <form className="price__form" onSubmit={handleSubmit(submit)}>
        <div className="price__containerInput">
          <label className="price__label" htmlFor="from">From</label>
          <input className="price__input" {...register('from')} type="number" id="from"/>
        </div>
        <div className="price__containerInput">
          <label className="price__label" htmlFor="to">To</label>
          <input className="price__input" {...register('to')} type="number" id="to"/>
        </div>
        <button className="price__btn">Filter price</button>
      </form>
      {
        priceMinMax.min !== 0 || priceMinMax.max !== Infinity? <p className="price__p">From {priceMinMax.min} to {priceMinMax.max} <span onClick={handleClearFilter} className="price__pX"><i className='bx bx-x'></i></span></p> : ''
      }
      
    </article>
  );
};

export default FilterPrice;
