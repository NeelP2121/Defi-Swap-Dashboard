import { useState, useEffect } from "react"
import Header from "../../components/Header"
import CoinDetails from "../../components/CoinDetails"


const Price = () => {
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice]= useState('')

     useEffect(()=>{
        getUrlData()
    }), []

    const getUrlData = async () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)

        setCoinName(urlParams.get('coin'))
        setCoinSymbol(urlParams.get('symbol'))
        setPrice(urlParams.get('price'))

    }
    return (
        <div>
            <Header/>
            <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol}/>
        </div>
    )
}

export default Price