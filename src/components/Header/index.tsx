import styles from './styles.module.scss'

export function Header() {
    return (
        <header>
            <h1>Coinversion</h1>
            <nav>
                <ul>
                    <li>
                        <a href="convertSection">Convert Now!</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Currency Rates</a>
                    </li>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}