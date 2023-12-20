export const AuthUrl = "https://stoxafx.vercel.app/";
export const url  = "http://127.0.0.1:8000/";


export const coinJson = [
    {
        name : 'Bitcoin',
        id : 'BTC',
        rate : 4000,
        roi: '5%-12%',
        start : 5,
        end : 12,
        duration : 'one Month'
    },
    {
        name : 'Cardano',
        id : 'ADA',
        rate : 0.52,
        roi: '2%-9%',
        start : 2,
        end : 9,
        duration : 'one Month'
    },
    {
        name : 'Etherum',
        id : 'ETH',
        rate : 2036,
        roi: '4%-10%',
        start : 4,
        end : 10,
        duration : 'one Month'
    },
    {
        name : 'Solana',
        id : 'Sol',
        rate : 67.4,
        roi: '4%-9%',
        start : 4,
        end : 9,
        duration : 'one Month'
    },
    {
        name : 'Dogecoin',
        id : 'DOGE',
        rate : 0.099,
        roi: '5%-12%',
        start : 5,
        end : 12,
        duration : 'one Month'
    },
    {
        name : 'Tether',
        id : 'USDT',
        rate : 1,
        roi: '5%-10%',
        start : 5,
        end : 10,
        duration : 'one Month'
    },
    {
        name : 'Tron',
        id : 'TRX',
        rate : 0.114,
        roi: '5%-12%',
        start : 5,
        end : 12,
        duration : 'one Month'
    }
]


export const getAccount = ()=>{
    let account = window.localStorage.getItem('account')
    return JSON.parse(account)
}

export const getUser = ()=>{
    let user = window.localStorage.getItem('user')
    return JSON.parse(user)
}