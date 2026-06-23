import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const {pid} = useParams()
    const {fruits} = props
    console.log(pid)

    return (
        <div className="max-w-7xl mx-auto px-4 w-full py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full">
                    <img src={import.meta.env.BASE_URL + fruits[pid].imgUrl} alt="상품 이미지" className="w-full h-auto" />
                </div>

                <div className="pt-5 md:pt-0 space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">{fruits[pid].title}</h4>
                    <p className="text-gray-600 leading-relaxed">{fruits[pid].content}</p>
                    <p className="text-xl font-semibold text-gray-900">{fruits[pid].price}원</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-md active:scale-95 transform">
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Detail