import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'

const styles = {
    trendingWrapper:'mx-auto max-w-screen-2xl',
    h1:'text-3xl text-white',
}


const Trending = () => {
    const [checked, setChecked] = useState(false)
  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Today's Cryptocurrency Prices by Market Cap</h1>

                <div className='flex'>
                    <p className='text-gray-400'>Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={()=> {setChecked(!checked)}}/>
                </div>
            </div>
            <br/>
            <div className='flex'>
                <p className='text-gray-400'>Global crypto Market cap is $1.47T.</p>
                <span>
                    {/* <Rate /> */}
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default Trending