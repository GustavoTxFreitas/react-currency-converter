import { useContext, useEffect, useRef, useState } from "react";
import Dropdown from "react-dropdown";

import { CurrenciesContext } from "../../../context/currencies";
import { CurrencyList } from "../../../types/types";
import { api } from "../../../services/api";

import Logo from "../../../assets/logo.png";
import styles from "./styles.module.scss";

export function ConvertSection() {
  const [currencyRates, setCurrencyRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState(0);

  const currencyList: CurrencyList[] = useContext(CurrenciesContext);
  const inputElement = useRef<HTMLInputElement>(null);


  useEffect(() => {
    async function getCurrencyRates(currency: string) {
      if (currency) {
        const response = await api.get(`/latest/currencies/${currency}.min.json`)
        const rates = response.data;

        setCurrencyRates(rates[currency]);
      }
    }

    getCurrencyRates(fromCurrency);
  }, [fromCurrency]);


  const convert = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const amount = parseFloat(inputElement.current!!.value);
    const currency = toCurrency;

    if (amount > 0 && currencyRates) {
      const rate = currencyRates[currency];

      setResult(amount * rate);
    }
  }

  return (
    <section id="convertSection">
      <header className={styles.header}>
        <img src={Logo} alt="coin image" />
        <h1 title="software v7.0, looking at life through the eyes of a tire hub">Coinversion</h1>
      </header>

      <main>
        <h2 className={styles.title}>Currency converter app</h2>
        <p className={styles.lead}>And beautiful lead to fill up the void</p>

        <div>
          <small className={styles.label}>From: </small>
          <Dropdown
            options={currencyList}
            className={styles.dropdown}
            menuClassName={styles.dropdownMenu}
            placeholder="Select a currency unit"
            controlClassName={styles.dropdownControl}
            onChange={e => setFromCurrency(e.value)}
          />

          <small className={styles.label}>To: </small>
          <Dropdown
            options={currencyList}
            className={styles.dropdown}
            menuClassName={styles.dropdownMenu}
            placeholder="Select a currency unit"
            controlClassName={styles.dropdownControl}
            onChange={e => setToCurrency(e.value)}
          />
        </div>

        <form onSubmit={convert}>
          <label
            className={styles.label}
            htmlFor="amount">
            Enter the amount coins in {fromCurrency.toUpperCase() || "decimal"}
          </label>

          <input
            id="amount"
            ref={inputElement}
            className={styles.input}
            placeholder="e.g.: 121.01" />

          <input type="submit" value="Convert" />
        </form>

        <span className={styles.resultContainer}>
          Result: {result}
          <sub>{toCurrency}</sub>
        </span>
      </main>
    </section>
  )
}