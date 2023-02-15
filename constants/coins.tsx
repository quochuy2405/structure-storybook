import Ethereum from '@/assets/svg/coins/Ethereum'
import { ReactElement } from 'react'
import { GrBitcoin } from 'react-icons/gr'
import { SiBinance } from 'react-icons/si'

// export const coins: Array<IIconInfoProps> = [
//   {
//     icon: <Cardano />,
//     name: 'Cardano'
//   },
//   {
//     icon: <Cronos />,
//     name: 'Cronos'
//   },
//   {
//     icon: <GrBitcoin size={20} />,
//     name: 'Bitcoin'
//   },
//   {
//     icon: <Ethereum />,
//     name: 'Ethereum'
//   },
//   {
//     icon: <Huobi />,
//     name: 'Huobi'
//   },
//   {
//     icon: <OpenSea />,
//     name: 'OpenSea'
//   },
//   {
//     icon: <PanCake />,
//     name: 'PanCake'
//   },
//   {
//     icon: <Phantom />,
//     name: 'Phantom'
//   },
//   {
//     icon: <Polygon />,
//     name: 'Polygon'
//   },
//   {
//     icon: <Ripple />,
//     name: 'Ripple'
//   },
//   {
//     icon: <Solana />,
//     name: 'Solana'
//   },
//   {
//     icon: <Solanart />,
//     name: 'Solanart'
//   },
//   {
//     icon: <TRON />,
//     name: 'TRON'
//   },
//   {
//     icon: <Uniswap />,
//     name: 'Uniswap'
//   },
//   {
//     icon: <Cardano />,
//     name: 'Cardano'
//   },
//   {
//     icon: <Cronos />,
//     name: 'Cronos'
//   },
//   {
//     icon: <GrBitcoin size={20} />,
//     name: 'Bitcoin'
//   },
//   {
//     icon: <Ethereum />,
//     name: 'Ethereum'
//   },
//   {
//     icon: <Huobi />,
//     name: 'Huobi'
//   },
//   {
//     icon: <OpenSea />,
//     name: 'OpenSea'
//   },
//   {
//     icon: <PanCake />,
//     name: 'PanCake'
//   },
//   {
//     icon: <Phantom />,
//     name: 'Phantom'
//   },
//   {
//     icon: <Polygon />,
//     name: 'Polygon'
//   },
//   {
//     icon: <Ripple />,
//     name: 'Ripple'
//   },
//   {
//     icon: <Solana />,
//     name: 'Solana'
//   },
//   {
//     icon: <Solanart />,
//     name: 'Solanart'
//   },
//   {
//     icon: <TRON />,
//     name: 'TRON'
//   },
//   {
//     icon: <Uniswap />,
//     name: 'Uniswap'
//   },
//   {
//     icon: <Cardano />,
//     name: 'Cardano'
//   },
//   {
//     icon: <Cronos />,
//     name: 'Cronos'
//   },
//   {
//     icon: <GrBitcoin size={20} />,
//     name: 'Bitcoin'
//   },
//   {
//     icon: <Ethereum />,
//     name: 'Ethereum'
//   },
//   {
//     icon: <Huobi />,
//     name: 'Huobi'
//   },
//   {
//     icon: <OpenSea />,
//     name: 'OpenSea'
//   },
//   {
//     icon: <PanCake />,
//     name: 'PanCake'
//   },
//   {
//     icon: <Phantom />,
//     name: 'Phantom'
//   },
//   {
//     icon: <Polygon />,
//     name: 'Polygon'
//   },
//   {
//     icon: <Ripple />,
//     name: 'Ripple'
//   },
//   {
//     icon: <Solana />,
//     name: 'Solana'
//   },
//   {
//     icon: <Solanart />,
//     name: 'Solanart'
//   },
//   {
//     icon: <TRON />,
//     name: 'TRON'
//   },
//   {
//     icon: <Uniswap />,
//     name: 'Uniswap'
//   },
//   {
//     icon: <Cardano />,
//     name: 'Cardano'
//   },
//   {
//     icon: <Cronos />,
//     name: 'Cronos'
//   },
//   {
//     icon: <GrBitcoin size={20} />,
//     name: 'Bitcoin'
//   },
//   {
//     icon: <Ethereum />,
//     name: 'Ethereum'
//   },
//   {
//     icon: <Huobi />,
//     name: 'Huobi'
//   },
//   {
//     icon: <OpenSea />,
//     name: 'OpenSea'
//   },
//   {
//     icon: <PanCake />,
//     name: 'PanCake'
//   },
//   {
//     icon: <Phantom />,
//     name: 'Phantom'
//   },
//   {
//     icon: <Polygon />,
//     name: 'Polygon'
//   },
//   {
//     icon: <Ripple />,
//     name: 'Ripple'
//   },
//   {
//     icon: <Solana />,
//     name: 'Solana'
//   },
//   {
//     icon: <Solanart />,
//     name: 'Solanart'
//   },
//   {
//     icon: <TRON />,
//     name: 'TRON'
//   },
//   {
//     icon: <Uniswap />,
//     name: 'Uniswap'
//   },
//   {
//     icon: <Cardano />,
//     name: 'Cardano'
//   },
//   {
//     icon: <Cronos />,
//     name: 'Cronos'
//   },
//   {
//     icon: <GrBitcoin size={20} />,
//     name: 'Bitcoin'
//   },
//   {
//     icon: <Ethereum />,
//     name: 'Ethereum'
//   },
//   {
//     icon: <Huobi />,
//     name: 'Huobi'
//   },
//   {
//     icon: <OpenSea />,
//     name: 'OpenSea'
//   },
//   {
//     icon: <PanCake />,
//     name: 'PanCake'
//   },
//   {
//     icon: <Phantom />,
//     name: 'Phantom'
//   },
//   {
//     icon: <Polygon />,
//     name: 'Polygon'
//   },
//   {
//     icon: <Ripple />,
//     name: 'Ripple'
//   },
//   {
//     icon: <Solana />,
//     name: 'Solana'
//   },
//   {
//     icon: <Solanart />,
//     name: 'Solanart'
//   },
//   {
//     icon: <TRON />,
//     name: 'TRON'
//   },
//   {
//     icon: <Uniswap />,
//     name: 'Uniswap'
//   }
// ]

export const coinIcons: Record<string, ReactElement> = {
  bitcoin: <GrBitcoin size={20} color="orange" />,
  ethereum: <Ethereum />,
  binance: <SiBinance size={20} color="orange" />
}
export const coinMarket: Record<string, ReactElement> = {
  btc: <GrBitcoin size={20} color="orange" />,
  eth: <Ethereum />,
  bnb: <SiBinance size={20} color="orange" />
}
export const subTitle: Record<string, string> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  binance: 'BNB'
}
export const urls: Record<string, string> = {
  bitcoin: 'btc',
  ethereum: 'eth',
  binance: 'bnb'
}

export const fullNameCoins: Record<string, string> = {
  btc: 'Bitcoin',
  eth: 'Ethereum',
  bnb: 'Binance'
}

export const urlCoins: Record<string, string> = {
  btc: 'bitcoin',
  eth: 'ethereum',
  bnb: 'binance'
}
