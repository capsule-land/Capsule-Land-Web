import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { UseWalletProvider } from 'use-wallet'

const MyApp = ({ Component, pageProps }) => (
    <UseWalletProvider
        chainId={97}
        connectors={{
            walletconnect: { rpcUrl: "https://data-seed-prebsc-2-s1.binance.org:8545" },
        }}
    >
        <Component {...pageProps} />
    </UseWalletProvider>
)

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
