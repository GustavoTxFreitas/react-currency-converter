import styles from "./styles.module.scss";
import LogoImage from "../../assets/logo.png"
import { VscGithubInverted } from "react-icons/vsc";


export function Header() {
    return (
        <header>
            <div className={styles.logoContainer} title="software v7.0, looking at life through the eyes of a tire hub">
                <img src={LogoImage} alt="coin image" className="logoImage" />
                <h1>Coinversion</h1>
            </div>

            <nav>
                <ul className={styles.navigationContainer}>
                    <li>
                        <a href="#convertSection">Convert Now!</a>
                    </li>
                    <li>
                        <a href="#aboutMe">About Me</a>
                    </li>
                    <li>
                        <a href="#ratesSection">Currency Rates</a>
                    </li>
                    <li>
                        <a href="https://github.com/GustavoTxFreitas">
                            <span>
                                <VscGithubInverted size={24} />
                            </span>
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}