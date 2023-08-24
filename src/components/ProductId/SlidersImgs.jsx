import { useState } from 'react'
import './styles/slidersImgs.css'

const SlidersImgs = ({product}) => {

  const [indexImg, setIndexImg] = useState(0)

  const styleMovable = {
    transform: `translateX(calc((-${indexImg}/ 3)*100%))`
  }

  const handlePrev =() => {
    if (indexImg - 1 >= 0) {
      setIndexImg(indexImg - 1)      
    }else{
      setIndexImg(2)
    }
  }

  const handleNext =() => {
    if (indexImg + 1 <= 2) {
      setIndexImg(indexImg + 1)      
    }else{
      setIndexImg(0)
    }
  }

  return (
    <>
      <div className='slider'>
        <button onClick={handlePrev} className='slider__btn slider__left'><i className='bx bx-chevron-left'></i></button>
        <div style={styleMovable} className='slider__movable'>
          {
            product?.productImgs.map((imgInfo) => (
              <div className='slider__imgContainer' key={imgInfo.id}> 
                <img className='slider__img' src={imgInfo.url} alt="" />
              </div>
            ) )
          }
        </div>
        <button onClick={handleNext} className='slider__btn slider__right'><i className='bx bx-chevron-right' ></i></button>
      </div>
      <div className='slider__footerContainer'>
        <div className='slider__footer'>
          {
            product?.productImgs.map((imgInfo, i) => (
              <div 
                className={`slider__footerImgContainer ${i=== indexImg?'slider__imgActive':''}`} 
                key={imgInfo.id}
                onClick={() => setIndexImg(i)}
              > 
                <img className='slider__img' src={imgInfo.url} alt="" />
              </div>
            ) )
          }
        </div>
      </div>
    </>
    
  )
}

export default SlidersImgs