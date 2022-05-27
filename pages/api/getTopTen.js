export default function handler(req, res){
    const getData = async() => {
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=ff09cf95-e537-466f-9f55-95ca5988deba',
        {
            method:'GET',
            headers: {
                Accept: '*/*'
            },
        },                     
        )

        const data = await response.json()
        res.status(200).json({data})
    }
    getData()
}