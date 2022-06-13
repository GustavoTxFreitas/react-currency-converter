import { VscGithubInverted } from "react-icons/vsc";

import styles from "./styles.module.scss";

export function Widget() {
    return (
        <a
            target="_blank"
            className={styles.github}
            href="https://github.com/GustavoTxFreitas">

            <VscGithubInverted
                size={22}
                className={styles.icon}
                title="Minha conta no Github" />

            <span
                className={styles.text}>
                GustavoTxFreitas
            </span>
        </a>

    )
}