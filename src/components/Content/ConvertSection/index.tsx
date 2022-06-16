import { useContext, useEffect, useState } from "react";
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
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const currencyList: CurrencyList[] = useContext(CurrenciesContext);

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


  function convert(currency: any) {
    if (amount > 0 && currencyRates) {
      const rate = currencyRates[currency];

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

      <main>
        <h2 className={styles.title}>Currency converter app</h2>
        <p className={styles.lead}>And beautiful lead to fill up the void</p>

        <form>
          <small>From: </small>
          <Dropdown
            options={currencyList}
            className={styles.dropdown}
            menuClassName={styles.dropdownMenu}
            placeholder="Select a currency unit"
            controlClassName={styles.dropdownControl}
            onChange={e => setFromCurrency(e.value)}
          />

          <small>To: </small>
          <Dropdown
            options={currencyList}
            className={styles.dropdown}
            menuClassName={styles.dropdownMenu}
            placeholder="Select a currency unit"
            controlClassName={styles.dropdownControl}
            onChange={e => setToCurrency(e.value)}
          />

          <label htmlFor="amount">
            Enter the amount coins in {fromCurrency || "decimal"}
          </label>


          <input
            id="amount"
            className={styles.input}
            placeholder="e.g.: 121.01"
            onChange={e => setAmount(parseFloat(e.target.value))} />

          <span className={styles.resultContainer}>
            Result: {result}
            <sub>{toCurrency}</sub>
          </span>

          <button className={styles.convertButton} onClick={() => convert(toCurrency)}>
            Convert
          </button>
        </form>
      </main>
    </section>
  )
}