import React from 'react'
import Product from './Product'

const Home = (props) => {
    const { fruits } = props

    return (
        <>
            <div className="slider"></div>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        fruits.map(fruit =>
                            <Product fruit={fruit} key={fruit.id} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home