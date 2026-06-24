import React from 'react'

const Veggie = (props) => {
    const {imgUrl, title, content, price} = props.veggie

    return (
        <div className="flex flex-col items-center text-center p-4">
            <img
                src={import.meta.env.BASE_URL + imgUrl}
                className="w-4/5 h-auto rounded-xl shadow-sm mb-4 object-cover transform hover:scale-102 transition-transform duration-300"
                alt='item2'
            />
            <h5 className="text-lg font-bold text-gray-900 tracking-tight">
                {title}
            </h5>
            <p className="text-sm text-gray-500 mt-1 max-w-[250px] line-clamp-2">
                {content}
            </p>
            <p className="text-base font-bold text-gray-900 mt-2">
                {price}원
            </p>
        </div>
    )
}

export default Veggie