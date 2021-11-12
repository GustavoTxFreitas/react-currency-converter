import { useEffect, useState } from "react"
import Dropdown from "react-dropdown"

import { api } from "../../services/api";
import styles from "./styles.module.scss";

type CurrencyList = {
	value: string;
	label: string;
}

export function ConvertSection() {
	const [amount, setAmount] = useState(0);
	const [result, setResult] = useState(0);
	const [currencyRates, setCurrencyRates] = useState(null);
	const [currencyCodes, setCurrencyCodes] = useState(["", ""]);
	const [currencyList, setCurrencyList] = useState<CurrencyList[]>([]);


	useEffect(() => {
		async function getCurrencyList() {
			const response = await api.get('/latest/currencies.min.json');
			const currencies: CurrencyList = response.data;

			const currencyQueue: CurrencyList[] = [];

			Object.entries(currencies).forEach(([value, label]) => {
				currencyQueue.push({ value, label });
			});

			setCurrencyList(currencyQueue.sort());
		}

		getCurrencyList();
	}, []);


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
			<h2>Currency converter app</h2>

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
						placeholder="e.g.: 11,01"
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