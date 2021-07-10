import axios from 'axios'

export const getWBTCPrice = async () => {
  try {
    const { data } = await axios.get('https://api.0x.org/swap/v1/price?sellToken=WBTC&buyToken=USDT&sellAmount=1000000000000000000')
    return data.price
  } catch (error) {
    return 0
  }
}
