import { useState } from 'react';
import './App.css'
import data from './db/data';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import About from './components/About';

function App() {
    const navigate = useNavigate();
    const [fruits, setFruits] = useState(data);
    // console.log(fruits)

    return (
        <div className="App">
            <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a onClick={() => { navigate('/') }} className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors">
                        FruitShop
                    </a>

                    <div className="flex space-x-6 ml-6 mr-auto">
                        <a onClick={() => { navigate('/') }} className="text-gray-300 hover:text-white transition-colors font-medium">
                            Home
                        </a>
                        <a onClick={() => { navigate('/detail/0') }} className="text-gray-300 hover:text-white transition-colors font-medium">
                            Detail
                        </a>
                        <a onClick={() => { navigate('/cart') }} className="text-gray-300 hover:text-white transition-colors font-medium">
                            Cart
                        </a>
                        <a onClick={() => { navigate('/about') }} className="text-gray-300 hover:text-white transition-colors font-medium">
                            About
                        </a>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home fruits={fruits} setFruits={setFruits} />}></Route>
                <Route path="/detail/:pid" element={<Detail fruits={fruits} />} />
                <Route path='/about' element={<About />}>
                    <Route path='member' element={<div>member</div>} />
                    <Route path='location' element={<div>location</div>} />
                </Route>
                <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
            </Routes>

            <footer className="bg-[#333] text-white py-5 mt-[80px] mb-0 text-center text-xs tracking-wider">
                <p>COPYRIGHT(C) 2026 Nike, Inc. All Rights Reserved</p>
            </footer>

        </div>

    );
}

export default App
