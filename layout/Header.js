import styles from '../styles/layout.less'
import React, { useState, useEffect } from "react"
import {  Link, withTranslation } from '../i18n'
import Wallet from '../components/wallet'
import Locales from '../components/locales'
import classNames from "classnames/bind"
import { Affix } from "rsuite"
const cx = classNames.bind(styles)

const Header = (props) => {
    const { activeIndex } = props
    console.log(activeIndex == 1)
    useEffect(async () => {
        initNetWork()
    }, [])

    const initNetWork = async () => {
        let ethereum = window.ethereum

        const data = [
            {
                chainId: "0x61",
                // chainId: "0x38",
                chainName: "BSC Test Mainnet",
                nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                },
                rpcUrls: ["https://data-seed-prebsc-2-s1.binance.org:8545"],
                // rpcUrls: ["https://bsc-dataseed.binance.org"],
                blockExplorerUrls: ["https://bscscan.com/"],
            },
        ]

        /* eslint-disable */
        const tx = await ethereum.request({ method: "wallet_addEthereumChain", params: data }).catch()
        if (tx) {
            console.log(tx)
        }
    }

    return (
        // <Affix>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.logo}></div>
                    <div className={styles.tools}>
                        <ul className={styles.nav}>
                            <Link href="/">
                                <li>
                                    <i className={cx(styles.home, { active: activeIndex == 1 })}></i>
                                </li>
                            </Link>
                            <Link href="/store">
                                <li>
                                    <i className={cx(styles.store, { active: activeIndex == 2 })}></i>
                                </li>
                            </Link>
                            <Link href="/about">
                                <li>
                                    <i className={cx(styles.about, { active: activeIndex == 3 })}></i>
                                </li>
                            </Link>
                        </ul>
                        <Wallet />
                    </div>
                </div>
                {props.children}
            </header>
        // </Affix>
    )
}


export default withTranslation('header')(Header)
