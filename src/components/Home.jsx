import React, { useState } from 'react'
import Product from './Product'
import Title from './Title'
import data2 from '../db/data2'
import Veggie from './Veggie'
import axios from 'axios'

const Home = (props) => {
    const { fruits, setFruits } = props
    // console.log(props)  // {fruits: Array(9), setFruits: f}
    const [veggies, setVeggies] = useState(data2)
    const [count, setCount] = useState(1)

    const sort = (index) => {
        let copy = []

        if (index === 'title') {
            copy = [...fruits].sort((a, b) => (a.title > b.title) ? 1 : -1)
        } else if (index === 'asc') {
            copy = [...fruits].sort((a, b) => (a.price > b.price) ? 1 : -1)
        } else if (index === 'desc') {
            copy = [...fruits].sort((a, b) => (a.price < b.price) ? 1 : -1)
        }

        setFruits(copy)
    }

    const moreVeggies = () => {
        if (count === 1) {
            axios.get('https://jungwoonan.github.io/react_data/veggie2.json')
                .then((result) => {
                    console.log(result)
                    let copy = [...veggies, ...result.data]
                    setVeggies(copy)
                    setCount(2)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else if (count === 2) {
            axios.get('https://jungwoonan.github.io/react_data/veggie3.json')
                .then((result) => {
                    console.log(result)
                    let copy = [...veggies, ...result.data]
                    setVeggies(copy)
                    setCount(3)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            alert('더 이상 상품이 없습니다.')
        }
    }

    return (
        <>
            <div className="slider"></div>

            <Title tindex='1' />

            <div className="flex flex-wrap justify-center gap-2 my-6">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700" onClick={() => {
                    sort('title')
                }}>
                    이름순 정렬
                </button>

                <button className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-gray-600" onClick={() => {
                    sort('asc')
                }}>
                    낮은가격순 정렬
                </button>

                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-green-700" onClick={() => {
                    sort('desc')
                }}>
                    높은가격순 정렬
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        fruits.map(fruit =>
                            <Product fruit={fruit} key={fruit.id} />
                        )
                    }
                </div>
            </div>

            <Title tindex='2' />

            <div className="flex justify-center my-6">
                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors active:bg-green-700 shadow-sm" onClick={moreVeggies}>
                    + 3개 상품 더 보기
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        veggies.map(veggie =>
                            <Veggie veggie={veggie} key={veggie.id} />
                        )
                    }
                </div>
            </div>


        </>
    )
}

export default Home