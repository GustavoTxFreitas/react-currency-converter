import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png"
import { VscGithubInverted } from "react-icons/vsc";


export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogoContainer} title="software v7.0, looking at life through the eyes of a tire hub">
                <img src={Logo} alt="coin image" className={styles.headerLogoImage} />
                <h1 className={styles.headerLogoTitle}>Coinversion</h1>
            </div>

            <nav className={styles.navigation}>
                <ul className={styles.navigationContainer}>
                    <li className={styles.navigationItem}>
                        <a className={styles.navigationLink} href="#convertSection">Convert Now!</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a className={styles.navigationLink} href="#aboutMe">About Me</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a className={styles.navigationLink} href="#ratesSection">Currency Rates</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a className={styles.navigationLink} target="_blank" href="https://github.com/GustavoTxFreitas">
                            <VscGithubInverted size={20} className={styles.navigationIcon} />
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}