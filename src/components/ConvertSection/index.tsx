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
    const [baseCode, setBaseCode] = useState("");
    const [resultCode, setResultCode] = useState("");
    const [currencyList, setCurrencyList] = useState<CurrencyList[]>([]);


    useEffect(() => {
        async function getCurrencies() {
            const response = await api.get('/latest/currencies.min.json');
            const currencies = response.data;

            const currencyQueue: CurrencyList[] = [];

            Object.entries(currencies).forEach(([value, label]) => {
                currencyQueue.push({ value, label });
            });

            setCurrencyList(currencyQueue);
        }

        getCurrencies();
    }, []);


    async function convert() {
        const response = await api.get(`/latest/currencies/${baseCode}/${resultCode}.json`);
        const rate = response.data[resultCode];

        setResult(amount * rate);
        alert(result);
    }

    return (
        <section id="convertSection">
            <h2>Currency Converter App</h2>

            <div className="amountInput">
                <label htmlFor="amount">Enter the amount coins</label>
                <input
                    type="text"
                    name="amount"
                    id="amount"
                    onChange={e => setAmount(parseFloat(e.target.value))} />
            </div>

            <div className="dropdownContainer">
                <small>From: </small>
                <Dropdown
                    options={currencyList}
                    placeholder="Select a currency unit"
                    onChange={e => setBaseCode(e.value)}
                />
            </div>


            <div className="dropdownContainer">
                <small>To: </small>
                <Dropdown
                    options={currencyList}
                    placeholder="Select a currency unit"
                    onChange={e => setResultCode(e.value)}
                />
            </div>

            <button onClick={() => convert()}>Convert</button>
        </section>
    )
}