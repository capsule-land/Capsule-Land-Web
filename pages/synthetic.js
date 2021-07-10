import Head from "next/head";
import React, { useState } from "react";
import useWallet from "use-wallet";
import { Link, withTranslation } from "../i18n";
import HeaderFooter from "../layout/HeaderFooter";
import classNames from "classnames/bind";
import styles from "../styles/synthetic.less"
const cx = classNames.bind(styles);
import Web3 from 'web3';
 
const Home = ({ t }) => {
    const [tabIndex,setTabIndex] = useState(1)
  return (
      <HeaderFooter amctiveIndex={1}>
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div className={styles.wrapper}>
              <div className={styles.synthetic}>
                  <div className={styles.figure_description}>
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
                                  <h1></h1>
                                  <h3>服装</h3>
                              </li>
                              <li>
                                  <h1></h1>
                                  <h3>音效</h3>
                              </li>
                          </ul>
                          <button className={styles.synthetic_btn}>合成</button>
                      </div>
                  </div>
                  <div className={cx(styles.figure, styles.usdt)}></div>
              </div>
          </div>
      </HeaderFooter>
  )
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "home"],
});


export default withTranslation("home")(Home);
