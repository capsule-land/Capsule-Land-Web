import Head from "next/head"
import { useEffect } from "react"
import useWallet from "use-wallet"
import { Link, withTranslation } from "../i18n"
import HeaderFooter from "../layout/HeaderFooter"
import classNames from "classnames/bind"
import { confirmAlert } from 'react-confirm-alert'
import { ToastContainer, toast } from 'react-toastify'
import styles from "../styles/about.less"

const Home = ({ t }) => {
  const { account, ethereum } = useWallet()

   useEffect(async () => {

       var oUl = document.getElementById("wrapper"),
           l = oUl.offsetWidth / 2,
           t = oUl.offsetHeight / 2,
           aLi = document.getElementById("people"),
           aLi2 = document.getElementById("text")
       oUl.onmousemove = function (ev) {
           var oEv = ev || event,
               iL = oEv.clientX,
               iT = oEv.clientY
           console.log(iL, iT)

           aLi.style.left = ((iL - l) / 100) * 4 + "px"
           aLi.style.top = ((iT - t) / 70) * 4 + "px"
           aLi2.style.left = ((iL - l) / 100) * 4 + "px"
           aLi2.style.top = ((iT - t) / 70) * 4 + "px"
       }
       //   const { data } = await getTotalValueLocked()
       //   setTotalValueLocked(data.data)
   }, [])

  return (
      <HeaderFooter activeIndex={3}>
          <ToastContainer />
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div id="wrapper" className={styles.wrapper}>
              <div className={styles.content}>
                  <div id="people" className={styles.people}></div>
                  <div id="text" className={styles.text}>
                      <div className={styles.title}>
                          <h1>About</h1>
                          <h2>について</h2>
                      </div>
                      <div className={styles.description}>
                          <p>
                              Capsule Land is a Gachapon circulation platform specialized in ACGN IPs. ACGN NFT cards are circulated via synthesis, auction, lottery, etc. Trading market would be
                              established to facilitate card exchanging between users thus to unleash the cryptic value of IP.
                          </p>
                          <p>All the NFTs of Capsule Land could be circulated via most mainnets like Ethereum, BSC, FLOW, etc.</p>
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
