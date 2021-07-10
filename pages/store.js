import Head from "next/head";
import React, { useState } from "react";
import useWallet from "use-wallet";
import { Link, withTranslation } from "../i18n";
import HeaderFooter from "../layout/HeaderFooter";
import classNames from "classnames/bind";
import styles from "../styles/store.less";
const cx = classNames.bind(styles);
import Web3 from 'web3';
import ReactSeamlessScroll from "react-seamless-scroll"
import Timer from "react-compound-timer"
 
const Home = ({ t }) => {
   const [speed,setSpeed] = useState(200)
   const [showDrewBox, setShowDrewBox] = useState(false)
   const [openBox, setOpenBox] = useState(false)
   const [activeBox, setActiveBox] = useState(false)
   const [activeBoxStyle, setActiveBoxStyle] = useState(false)
   const [cardShow, setCardShow] = useState(false)

   const drewAnimation = ()=>{
        let speedUp = true;
        window.speed = 1000;
        window.timer = setInterval(() => {
        //    console.log(speed)
           if (window.speed <= 4000 && speedUp) {
               window.speed = window.speed + 5
               console.log(window.speed)
               setSpeed(window.speed)
           }
           if (window.speed >= 4000) {
               speedUp = false
           }
            if (window.speed > 0 && !speedUp) {
                window.speed = window.speed - 5
                console.log(window.speed)
                setSpeed(window.speed)
            }
            if(window.speed == 0){
                setTimeout(()=>{
                     window.clearInterval(window.timer)
                     setOpenBox(false)
                     setCardShow(true)
                },1000)
            }
       }, 10)
   }

  return (
      <HeaderFooter activeIndex={2}>
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div className={styles.wrapper}>
              <div className={styles.advise}>
                  <div className={styles.title}>New activity begins!</div>
                  <div className={styles.timer}>
                      <Timer
                          formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
                          initialTime={new Date("Thu, 29 July 2021 13:00:00 GMT").getTime() - new Date().getTime()}
                          lastUnit="d"
                          direction="backward"
                      >
                          {() => (
                              <React.Fragment>
                                  <Timer.Days />:<Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
                              </React.Fragment>
                          )}
                      </Timer>
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
              <ul className={styles.capsule_list}>
                  <li onClick={() => setShowDrewBox(true)}>
                      <b className={styles.box}></b>
                      <i>
                          <Timer
                              formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
                              initialTime={new Date("Thu, 29 July 2021 13:00:00 GMT").getTime() - new Date().getTime()}
                              lastUnit="d"
                              direction="backward"
                          >
                              {() => (
                                  <React.Fragment>
                                      Remaining:
                                      <Timer.Days />
                                      D <Timer.Hours />
                                      H <Timer.Minutes />
                                      Min <Timer.Seconds />S
                                  </React.Fragment>
                              )}
                          </Timer>
                      </i>
                      <button onClick={() => setShowDrewBox(true)}>PLAY</button>
                  </li>
                  <li className={styles.store_capsule2}>
                      <i>
                          <Timer
                              formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
                              initialTime={new Date("Thu, 29 July 2021 13:00:00 GMT").getTime() - new Date().getTime()}
                              lastUnit="d"
                              direction="backward"
                          >
                              {() => (
                                  <React.Fragment>
                                      Remaining:
                                      <Timer.Days />
                                      D <Timer.Hours />
                                      H <Timer.Minutes />
                                      Min <Timer.Seconds />S
                                  </React.Fragment>
                              )}
                          </Timer>
                      </i>
                      <button onClick={() => setShowDrewBox(true)}>PLAY</button>
                  </li>
              </ul>
              <div className={cx(styles.drew, { show: showDrewBox })}>
                  <button
                      onClick={() => {
                          setShowDrewBox(false)
                          setOpenBox(false)
                          setActiveBox(false)
                          setActiveBoxStyle(false)
                          setCardShow(false)
                          clearInterval(window.timer)
                      }}
                  >
                      返回
                  </button>
                  <div className={styles.capsule_wrapper}>
                      {cardShow && <div className={cx(styles.drew_result, "animate__animated", { animate__zoomIn: cardShow })}></div>}
                      {!cardShow &&
                      <video
                          onTimeUpdate={(e) => {
                              const time = e.nativeEvent.srcElement.currentTime
                              console.log(time)
                              if (time > 0.5) {
                                  setOpenBox(true)
                                  drewAnimation()
                              }
                          }}
                      >
                          <source src="/img/animation.mp4" type="video/mp4"></source>
                      </video>
                      }
                      <div
                          className={cx(styles.capsule, { active: activeBoxStyle }, "animate__animated", { animate__headShake: activeBox })}
                          onClick={() => {
                              var v = document.getElementsByTagName("video")[0]
                              v.play()
                          }}
                          //   onClick={() => {
                          //       setActiveBox(true)
                          //       setTimeout(() => {
                          //           setActiveBoxStyle(true)
                          //       }, 1000)
                          //       setTimeout(() => {
                          //           setOpenBox(true)
                          //           drewAnimation()
                          //       }, 2000)
                          //   }}
                      >
                          <div className={cx(styles.lucky_bg, { show: openBox }, "animate__animated", { animate__zoomIn: openBox })}>
                              <div className={styles.lucky_cute}></div>
                              <div className={styles.roller}>
                                  <ReactSeamlessScroll speed={speed} mode="horizontal" style={{ width: "100%", height: "400px" }}>
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
                              {/* <button className={styles.lucky_open_box}></button> */}
                          </div>
                      </div>
                  </div>
                  <div className={styles.capsule_content}>
                      <div className={styles.inner}>
                          <div className={styles.prize_list}>
                              <ul>
                                  <li className={styles.gold}>
                                      <h1 className={cx(styles.card, styles.eth)}></h1>
                                      <h2>ETH</h2>
                                  </li>
                                  <li>
                                      <h1 className={cx(styles.card, styles.dress1)}></h1>
                                      <h2>校服</h2>
                                  </li>
                                  <li>
                                      <h1 className={cx(styles.card, styles.dress2)}></h1>
                                      <h2>和服</h2>
                                  </li>
                                  <li>
                                      <h1 className={cx(styles.card, styles.sound1)}></h1>
                                      <h2>问候 - 花泽香菜</h2>
                                  </li>
                                  <li>
                                      <h1 className={cx(styles.card, styles.sound2)}></h1>
                                      <h2>生日 - 花泽香菜</h2>
                                  </li>
                              </ul>
                          </div>
                          <div className={styles.rank}>
                              <h1>Rank</h1>
                              <ul>
                                  <li className={styles.prize1}>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                                  <li className={styles.prize2}>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                                  <li className={styles.prize3}>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                                  <li>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                                  <li>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                                  <li>
                                      <span>Jack</span>
                                      <b>2323</b>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </HeaderFooter>
  )
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "home"],
});


export default withTranslation("home")(Home);
