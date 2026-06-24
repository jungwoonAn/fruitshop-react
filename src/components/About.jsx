import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        // 여기에 적은 코드는 컴포넌트 마운트 & 업데이트 마다 실행
        console.log('hello~')
        console.log(count)
        
        return () => {
            //clean up function
            console.log('1. start')
        }
    }, [count])

    return (
        <>
            <div>About</div><br />
            <Outlet />
            <button onClick={()=>{setCount(count+1)}}>클릭</button>
        </>

    )
}

export default About