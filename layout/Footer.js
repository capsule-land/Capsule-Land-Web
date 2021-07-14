import { withTranslation } from '../i18n'
import styles from '../styles/layout.less'

const Footer = ({ t }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <i></i>
                <ul>
                    <li className={styles.reddit}></li>
                    <li className={styles.telegram}></li>
                    <li className={styles.twitter}></li>
                    <li className={styles.github}></li>
                    <li className={styles.medium}></li>
                    <li className={styles.discord}></li>

                </ul>
            </div>
        </footer>
    )
}

export default withTranslation('header')(Footer)