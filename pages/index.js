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
                                    <div className={cx(styles.title, styles.bnb)}>Binance Coin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 158 CM</p>
                                        <p>Blood Type: A</p>
                                        <p>Birthday: Jul 8th </p>
                                        <p>Constellation：Cancer</p>
                                        <p>Favourite Food： Pizza of Hodler’s </p>
                                        <p>Hobby：Fashionable clothing, Hiphop, Coding</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Young programming expert working at Sci-Gulf. Always treated as high school student by mistake due her fashionable wearings. Core member of Cryptopia
                                            Security Committee. Like to spend leisure time in Buidl for books on coding. A big fan of Hodler’s.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 4 })}>
                                <div className={cx(styles.figure, styles.doge, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.doge, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.doge)}>Dogecoin</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 160 CM</p>
                                        <p>Blood Type: AB</p>
                                        <p>Birthday: Dec 12th </p>
                                        <p>Constellation：Sagittarius</p>
                                        <p>Favourite Food： Sukiyaki </p>
                                        <p>Hobby：Cats</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Daughter of the founder of Cryptopia’s biggest car manufacturer — Dogesla. Beloved sweetie of her father. Atmosphere balancer of all kinds of groups.
                                            Proficient in different kind of memes. Has a unique style of talking. Always teased by others due to short tail. Has raised many cats. Will drive CyberTruck
                                            slinkingly for a ride sometimes.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 5 })}>
                                <div className={cx(styles.figure, styles.etc, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.etc, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.etc)}>Ethereum Classic</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 155 CM</p>
                                        <p>Blood Type: A </p>
                                        <p>Birthday: Jul 24th </p>
                                        <p>Constellation：Leo</p>
                                        <p>Favourite Food： Katsudon </p>
                                        <p>Hobby：Playing on swing, Sleeping with Moony</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Sister of ETH. Contrast to ETH’s being staid and erudite, ETC is a lively and energetic Loli. Elder sister of ETH while looks like younger sister. Prefer to
                                            spend more time with Moony.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 6 })}>
                                <div className={cx(styles.figure, styles.usdt, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.usdt, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.usdt)}>Tether</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 172 CM</p>
                                        <p>Blood Type: O</p>
                                        <p>Birthday: Nov 26th </p>
                                        <p>Constellation：Sagittarius</p>
                                        <p>Favourite Food： Ramen </p>
                                        <p>Hobby：Making Money</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Famous banker of Block Street. Equipped herself with luxuries from top to toe. Though very rich, USDT pinches pennies for most cases. Has a special personal
                                            hobby of getting things done without giving bucks. Always uses calculator to count gains and losses. Single, desperate for love! Smart as she is, USDT is
                                            accidentally vulnerable to men’s tricks.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 7 })}>
                                <div className={cx(styles.figure, styles.ada, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.ada, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.ada)}>Cardano</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 178 CM</p>
                                        <p>Blood Type: AB</p>
                                        <p>Birthday: Jul 8th </p>
                                        <p>Constellation：Cancer</p>
                                        <p>Favourite Food： Bentou of Chain Store </p>
                                        <p>Hobby：Sword Collection</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Postgraduate of University of Cryptopia. Peaceful and considerate together with traditional and conservative. Like wearing Kimono. Insanely fond of swords
                                            and have a house of sword collection, thus to be regarded as “Dangerous” as XRP. Doing part time at Bit Yo Ro Tsu Ya during leisure time.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={cx({ show: introduceIndex == 8 })}>
                                <div className={cx(styles.figure, styles.xrp, "animate__slideInLeft", "animate__animated", "animate__fast")}></div>
                                <div className={cx(styles.figure_bg, styles.xrp, "animate__fadeIn", "animate__animated", "animate__delay-1s")}></div>
                                <div className={cx(styles.text, "animate__slideInRight", "animate__animated", "animate__fast")}>
                                    <div className={cx(styles.title, styles.xrp)}>Ripple</div>
                                    <div className={styles.sub_title}>ビットコイン</div>
                                    <div className={styles.description}>
                                        <p>Height: 168 CM</p>
                                        <p>Blood Type: B</p>
                                        <p>Birthday: Apr 18th </p>
                                        <p>Constellation：Aries</p>
                                        <p>Favourite Food： Dry Martini </p>
                                        <p>Hobby：Gun Collection</p>
                                        <p>Introduction：</p>
                                        <p>
                                            Daughter of the founder of famous consortium in Cryptopia. Japan-American parentage. Looking indifferent by the appearance but actually easy to approach.
                                            Hobbyist of Guns. Always like to take out guns to explain the structures which always arouse chaos without being aware of it. Fond of different kind of
                                            cocktails, Dry Martini especially.
                                        </p>
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
                            <img src="/img/Hashpalette_logo.svg" />
                        </li>
                        <li>
                            <img src="/img/logo_hashport.svg" />
                        </li>
                        <li>
                            <img src="/img/logo_linku.svg" />
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
