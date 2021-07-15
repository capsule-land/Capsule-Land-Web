import Head from "next/head";
import React, { useState } from "react";
import useWallet from "use-wallet";
import { Link, withTranslation } from "../i18n";
import HeaderFooter from "../layout/HeaderFooter";
import classNames from "classnames/bind";
import styles from "../styles/backpack.less";
const cx = classNames.bind(styles);
import Web3 from 'web3';
import { confirmAlert } from "react-confirm-alert"


 
const Home = ({ t }) => {
    const [tabIndex,setTabIndex] = useState(1)
    const [selectDress,setSelectDress] = useState(0)
    const [selectVoice, setSelectVoice] = useState(0)
    const [showDetail,setShowDetail] = useState(false)
    const [showSynthetic, setShowSynthetic] = useState(false)

    const changeDress = (index) => {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className={styles.confirmAlert}>
                            <h1>Are you sure you want to replace it?</h1>
                            <p className={styles.center}>
                                <button
                                    onClick={() => {
                                        setSelectDress(index)
                                        onClose()
                                    }}
                                >
                                    OK
                                </button>
                                <button onClick={onClose}>Cancel</button>
                            </p>
                        </div>
                    )
                },
            })
    }

    const changeVoice = (index) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className={styles.confirmAlert}>
                        <h1>Are you sure you want to replace it?</h1>
                        <p className={styles.center}>
                            <button
                                onClick={() => {
                                    setSelectVoice(index)
                                    onClose()
                                }}
                            >
                                OK
                            </button>
                            <button onClick={onClose}>Cancel</button>
                        </p>
                    </div>
                )
            },
        })
    }
    
  return (
      <HeaderFooter activeIndex={1}>
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div className={styles.wrapper}>
              <div className={cx(styles.box, { detail: showDetail })}>
                  <div className={styles.figure_description}>
                      <b onClick={() => setShowDetail(false)}>返回</b>
                      <h1>
                          <i className={styles.figure_description_l}></i>
                          <span>USDT</span>
                          <i className={styles.figure_description_r}></i>
                      </h1>
                      <h2>
                          <span>CV：林薇</span>
                          <i></i>
                      </h2>
                      <p>
                          Block Street
                          金融街的著名拜金银行家，一身顶级奢侈品。虽然很有钱，但对每一分钱都会精打细算，并将白嫖视为毕生爱好。常年拿着计算器计算各种事物的价值与得失。单身，期待爱情，平日里精明的她却意外地非常容易被男人骗。
                      </p>
                      <div className={styles.synthetic_box}>
                          <ul className={styles.synthetic_list}>
                              <li>
                                  <h1 className={cx(styles.card, { dress1: selectDress == 1 }, { dress2: selectDress == 2 })}></h1>
                                  <h3>服装</h3>
                              </li>
                              <li>
                                  <h1 className={cx(styles.card, { sound1: selectVoice == 1 }, { sound2: selectVoice == 2 })}></h1>
                                  <h3>音效</h3>
                              </li>
                          </ul>
                          <button
                              className={styles.synthetic_btn}
                              onClick={() => {
                                  setShowDetail(false)
                                  setShowSynthetic(true)
                              }}
                          >
                              合成
                          </button>
                      </div>
                  </div>
                  <div
                      className={cx(styles.figure, styles.usdt)}
                      onClick={() => {
                          if (!showSynthetic) {
                              setShowDetail(true)
                          }
                      }}
                  >
                      {showSynthetic && (
                          <div className={styles.figure_tools}>
                              <b
                                  onClick={(event) => {
                                      setShowSynthetic(false)
                                      setShowDetail(true)
                                      event.stopPropagation()
                                  }}
                              >
                                  返回
                              </b>
                              <ul className={styles.list}>
                                  <li>
                                      <h1 className={cx(styles.card, { dress1: selectDress == 1 }, { dress2: selectDress == 2 })}></h1>
                                      <h2>服饰</h2>
                                  </li>
                                  <li>
                                      <h1 className={cx(styles.card, { voice1: selectVoice == 1 }, { voice2: selectVoice == 2 })}></h1>
                                      <h2>声音</h2>
                                  </li>
                              </ul>
                          </div>
                      )}
                  </div>
                  <div className={styles.backpack}>
                      <div className={styles.title}>
                          <span>背包</span>
                          <b>knapsack</b>
                      </div>
                      <dl>
                          <dt className={cx({ active: tabIndex == 1 })} onClick={() => setTabIndex(1)}>
                              <i className={styles.role}></i>
                              <p>人物</p>
                          </dt>
                          <dt className={cx({ active: tabIndex == 2 })} onClick={() => setTabIndex(2)}>
                              <i className={styles.dress}></i>
                              <p>饰品</p>
                          </dt>
                          <dt className={cx({ active: tabIndex == 3 })} onClick={() => setTabIndex(3)}>
                              <i className={styles.sound}></i>
                              <p>声音</p>
                          </dt>
                      </dl>
                      {tabIndex == 1 && (
                          <ul className={styles.list}>
                              <li>
                                  <h1 className={cx(styles.card, styles.eth)}></h1>
                                  <h2>ETH</h2>
                              </li>
                              <li>
                                  <h1 className={cx(styles.card, styles.bnb)}></h1>
                                  <h2>BNB</h2>
                              </li>
                              <li>
                                  <h1 className={cx(styles.card, styles.btc)}></h1>
                                  <h2>BTC</h2>
                              </li>
                              <li>
                                  <h1 className={cx(styles.card, styles.ada)}></h1>
                                  <h2>ADA</h2>
                              </li>
                          </ul>
                      )}
                      {tabIndex == 2 && (
                          <ul className={styles.list}>
                              <li onClick={() => changeDress(1)}>
                                  <h1 className={cx(styles.card, styles.dress1)}></h1>
                                  <h2>校服</h2>
                              </li>
                              <li onClick={() => changeDress(2)}>
                                  <h1 className={cx(styles.card, styles.dress2)}></h1>
                                  <h2>和服</h2>
                              </li>
                          </ul>
                      )}
                      {tabIndex == 3 && (
                          <ul className={styles.list}>
                              <li onClick={() => changeVoice(1)}>
                                  <h1 className={cx(styles.card, styles.sound1)}></h1>
                                  <h2>问候 - 花泽香菜</h2>
                              </li>
                              <li onClick={() => changeVoice(2)}>
                                  <h1 className={cx(styles.card, styles.sound2)}></h1>
                                  <h2>生日 - 花泽香菜</h2>
                              </li>
                          </ul>
                      )}
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
