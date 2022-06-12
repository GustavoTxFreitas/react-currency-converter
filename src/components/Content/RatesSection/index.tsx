import { useContext } from "react"
import { CurrenciesContext } from "../../../context/currencies";

import styles from "./styles.module.scss";

export function RatesSection() {
    const currencyList = useContext(CurrenciesContext);

    return (
        <section id="ratesSection">
            <h2>A beautiful data!</h2>
            <table>
                <caption>Currency valorization</caption>
                <thead>
                    <tr>
                        <th>Abbreviation</th>
                        <th>Currency Name</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currencyList.map(data => {
                            return (
                                <tr key={data.value}>
                                    <td>{data.value}</td>
                                    <td>{data.label}</td>
                                    <td>Coming soon</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}