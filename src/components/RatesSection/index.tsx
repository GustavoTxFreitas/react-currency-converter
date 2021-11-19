import { useContext } from "react"
import { CurrenciesContext } from "../../context/currencies";

import styles from "./styles.module.scss";

export function RatesSection() {
    const currencyList = useContext(CurrenciesContext);

    return (
        <section id="ratesSection">
            <h2>A beautiful data!</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                        <th>Valorização</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currencyList.map(data => {
                            return (
                                <tr key={data.value}>
                                    <td>{data.value}</td>
                                    <td>{data.label}</td>
                                    <td>xxx</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}