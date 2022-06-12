import { useContext, useEffect, useState } from "react"
import Dropdown from "react-dropdown"

import { CurrenciesContext } from "../../../context/currencies";
import { api } from "../../../services/api";

import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.png";

type CurrencyList = {
	value: string;
	label: string;
}

export function ConvertSection() {
	const [amount, setAmount] = useState(0);
	const [result, setResult] = useState(0);
	const [currencyRates, setCurrencyRates] = useState(null);
	const [currencyCodes, setCurrencyCodes] = useState(["", ""]);

	const currencyList = useContext(CurrenciesContext);

	useEffect(() => {
		async function getCurrencyRates(from: string) {
			if (from) {
				const response = await api.get(`/latest/currencies/${from}.min.json`)
				const rates = response.data;

				setCurrencyRates(rates[from]);
			}
		}

		getCurrencyRates(currencyCodes[0]);

	}, [currencyCodes[0]]);


	function convert(to: any) {
		if (amount > 0 && currencyRates) {
			const rate = currencyRates[to];

			setResult(amount * rate);
		}
	}

	return (
		<section id="convertSection" className={styles.convertSection}>
			<header className={styles.header}>
				<span className={styles.logo} title="software v7.0, looking at life through the eyes of a tire hub">
					<img src={Logo} alt="coin image" />
					<h1>Coinversion</h1>
				</span>
			</header>
			
			<h2>Currency converter app</h2>
			<p>And beautiful lead to fill up the void</p>

			<div className={styles.cardContainer}>

				<div className={styles.card}>
					<small>From: </small>
					<Dropdown
						options={currencyList}
						className={styles.dropdown}
						menuClassName={styles.dropdownMenu}
						placeholder="Select a currency unit"
						controlClassName={styles.dropdownControl}
						onChange={e => setCurrencyCodes(prevState => [e.value, prevState[1]])}
					/>

					<small>To: </small>
					<Dropdown
						options={currencyList}
						className={styles.dropdown}
						menuClassName={styles.dropdownMenu}
						placeholder="Select a currency unit"
						controlClassName={styles.dropdownControl}
						onChange={e => setCurrencyCodes(prevState => [prevState[0], e.value])}
					/>
				</div>

				<div className={styles.card}>
					<label htmlFor="amount">
						Enter the amount coins
						<sub> ({currencyCodes[0]})</sub>
					</label>
					<input
						type="text"
						name="amount"
						id="amount"
						className={styles.input}
						placeholder="e.g.: 11.01"
						onChange={e => setAmount(parseFloat(e.target.value))} />

					<div className={styles.resultContainer}>
						<small>Result:</small>
						{result}<sub>({currencyCodes[1]})</sub>
					</div>

					<button className={styles.convertButton} onClick={() => convert(currencyCodes[1])}>
						Convert
					</button>
				</div>
			</div>
		</section>
	)
}