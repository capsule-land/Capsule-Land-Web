import Head from "next/head"
import React, { useState } from "react"
import useWallet from "use-wallet"
import { Link, withTranslation } from "../i18n"
import HeaderFooter from "../layout/HeaderFooter"
import classNames from "classnames/bind"
import styles from "../styles/home.less"
const cx = classNames.bind(styles)
import Web3 from "web3"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper/core"
SwiperCore.use([Pagination])
import ReactSeamlessScroll from "react-seamless-scroll"

const Home = ({ t }) => {
    const [introduceIndex, setIntroduceIndex] = useState(1)

    return (
        <HeaderFooter activeIndex={1}>
            <Head>
                <title>{t("title")}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.banner}>
                    <div className={styles.role_xrp}></div>
                    <div className={styles.role_eth}></div>
                    <div className={styles.role_etc}></div>
                    <div className={styles.role_doge}></div>
                    <div className={styles.role_bnb}></div>
                    <div className={styles.role_ada}></div>
                    <div className={styles.role_usdt}></div>
                    <div className={styles.role_btc}></div>
                    <div className={styles.total_data}>
                        <ul>
                            <li>
                                <i className={styles.icon_box}></i>
                                <h1>92,839,084</h1>
                                <p>total opened</p>
                            </li>
                            <li>
                                <i className={styles.icon_person}></i>
                                <h1>13,234,212</h1>
                                <p>character box</p>
                            </li>
                            <li>
                                <i className={styles.icon_sound}></i>
                                <h1>43,342,084</h1>
                                <p>voice box</p>
                            </li>
                            <li>
                                <i className={styles.icon_dress}></i>
                                <h1>32,423,123</h1>
                                <p>clothing box</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.role}>
                    <ReactSeamlessScroll mode="horizontal" style={{ width: "100%", height: "165px" }}>
                        <ul>
                            <li>
                                <div className={cx(styles.inner, styles.eth)}>
                                    <span className={styles.border}></span>
                                    <h2>ETH</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.etc)}>
                                    <span className={styles.border}></span>
                                    <h2>ETC</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.ada)}>
                                    <span className={styles.border}></span>
                                    <h2>ADA</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.btc)}>
                                    <span className={styles.border}></span>
                                    <h2>BTC</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.doge)}>
                                    <span className={styles.border}></span>
                                    <h2>DOGE</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.bnb)}>
                                    <span className={styles.border}></span>
                                    <h2>BNB</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.usdt)}>
                                    <span className={styles.border}></span>
                                    <h2>USDT</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                            <li>
                                <div className={cx(styles.inner, styles.xrp)}>
                                    <span className={styles.border}></span>
                                    <h2>XRP</h2>
                                    <span className={styles.role_bg}></span>
                                    <div className={styles.hash}>ID1234567890</div>
                                </div>
                            </li>
                        </ul>
                    </ReactSeamlessScroll>
                </div>
                <div className={styles.introduce}>
                    <div className={styles.introduce_star1}></div>
                    <div className={styles.introduce_star2}></div>
                    <div className={styles.introduce_star3}></div>
                    <div className={styles.introduce_star4}></div>
                    <div className={styles.introduce_star5}></div>
                    <div className={styles.introduce_bg}></div>
                    <ul>
                        <li className={cx(styles.btc, { active: introduceIndex == 1 })} onMouseOver={() => setIntroduceIndex(1)}></li>
                        <li className={cx(styles.eth, { active: introduceIndex == 2 })} onMouseOver={() => setIntroduceIndex(2)}></li>
                        <li className={cx(styles.bnb, { active: introduceIndex == 3 })} onMouseOver={() => setIntroduceIndex(3)}></li>
                        <li className={cx(styles.doge, { active: introduceIndex == 4 })} onMouseOver={() => setIntroduceIndex(4)}></li>
                        <li className={cx(styles.etc, { active: introduceIndex == 5 })} onMouseOver={() => setIntroduceIndex(5)}></li>
                        <li className={cx(styles.usdt, { active: introduceIndex == 6 })} onMouseOver={() => setIntroduceIndex(6)}></li>
                        <li className={cx(styles.ada, { active: introduceIndex == 7 })} onMouseOver={() => setIntroduceIndex(7)}></li>
                        <li className={cx(styles.xrp, { active: introduceIndex == 8 })} onMouseOver={() => setIntroduceIndex(8)}></li>
                    </ul>
                    <div className={styles.introduce_role}>
                        <ul>
                            <li className={cx({ show: introduceIndex == 1 })}>
                                <div className={cx(styles.figure, styles.btc, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.btc, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.btc)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 172 CM</p>
                                        <p>Blood Type: AB</p>
                                        <p>Birthday: Jan 3rd</p>
                                        <p>Constellation：Capricornus</p>
                                        <p>Favourite Food： Prawn Tempura</p>
                                        <p>Hobby： Swimming, Motoring</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Eldest daughter of the biggest family in Cryptopia. Elegant behaviors together with formidable vibes got Bitcoin dozens of wooers, yet hard to approach.
                                            Bitcoin is the actual owner of “Yo Ro Tsu Ya Bit San”but with occasional show-up.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 2 })}>
                                <div className={cx(styles.figure, styles.eth, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.eth, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.eth)}>Ethereum</div>
                                    <div className={styles.sub_title}>イーサリアム</div>
                                    <div className={styles.description}>
                                        <p>Height: 163 CM</p>
                                        <p>Blood Type: O </p>
                                        <p>Birthday: Jul 20th </p>
                                        <p>Constellation：Cancer</p>
                                        <p>Favourite Food： Takoyaki</p>
                                        <p>Hobby： Reading, Observing Sister ETC</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Elite in aristocrats academy -- C.I.L (CODE IS LAW). Girl with less words. Reading is one of the few hobbies. Holding complicated sentiment towards sister
                                            ETC.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 3 })}>
                                <div className={cx(styles.figure, styles.bnb, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.bnb, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.bnb)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 4 })}>
                                <div className={cx(styles.figure, styles.doge, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.doge, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.doge)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 5 })}>
                                <div className={cx(styles.figure, styles.etc, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.etc, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.etc)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 6 })}>
                                <div className={cx(styles.figure, styles.usdt, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.usdt, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.usdt)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 7 })}>
                                <div className={cx(styles.figure, styles.ada, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.ada, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.ada)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 8 })}>
                                <div className={cx(styles.figure, styles.xrp, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.xrp, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.xrp)}>BitCoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>跟以太坊是姐妹</p>
                                        <p>与以太坊沉稳博学完全相反</p>
                                        <p>是个活泼好动的小萝莉</p>
                                        <p>看上去像妹妹</p>
                                        <p>但实际上却是姐姐（反差萌点）</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.lucky_box}>
                    <h1></h1>
                    <div className={styles.lucky_bg}>
                        <div className={styles.lucky_cute}></div>
                        <div className={styles.roller}>
                            <ReactSeamlessScroll speed="200" mode="horizontal" style={{ width: "100%", height: "400px" }}>
                                <ul>
                                    <li className={styles.person}></li>
                                    <li className={styles.dress1}></li>
                                    <li className={styles.sound1}></li>
                                    <li className={styles.sound2}></li>
                                    <li className={styles.dress2}></li>
                                    <li className={styles.sound3}></li>
                                    <li className={styles.dress3}></li>
                                    <li className={styles.sound4}></li>
                                </ul>
                            </ReactSeamlessScroll>
                        </div>
                        <div className={styles.lucky_people}></div>
                        <div className={styles.lucky_line}></div>
                        <Link href="/store">
                            <button className={styles.lucky_open_box}></button>
                        </Link>
                    </div>
                </div>
                <div className={styles.partners}>
                    <h1>Our partners</h1>
                    <ul>
                        <li>
                            <img src="/img/partners1.png" />
                        </li>
                        <li>
                            <img src="/img/partners2.png" />
                        </li>
                        <li>
                            <img src="/img/partners3.png" />
                        </li>
                    </ul>
                </div>
            </div>
        </HeaderFooter>
    )
}

Home.getInitialProps = async () => ({
    namespacesRequired: ["common", "header", "home"],
})

export default withTranslation("home")(Home)
