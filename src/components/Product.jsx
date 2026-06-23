import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = (props) => {
    const navigate = useNavigate()
    const {id, imgUrl, title, price} = props.fruit

    return (
        <div className="flex flex-col items-center" onClick={()=>{navigate('/detail/' + (id-1))}}>
            <img src={import.meta.env.BASE_URL + imgUrl} alt="상품1" className="w-4/5 h-auto rounded-lg mb-3" />
            <h4 className="text-lg font-bold text-gray-900">{title}</h4>
            <p className="text-gray-500 mt-1">{price}</p>
        </div>
    )
}

export default Product