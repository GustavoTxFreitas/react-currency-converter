import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type CurrencyList = {
  value: string;
  label: string;
}

type CurrencyProvider = {
  children: ReactNode
}

export const CurrenciesContext = createContext([{} as CurrencyList]);

export function CurrencyProvider(props: CurrencyProvider) {
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
    console.log(currencyList);
  }, []);


  return (
    <CurrenciesContext.Provider value={ currencyList }>
      {props.children}
    </CurrenciesContext.Provider>
  )

}








