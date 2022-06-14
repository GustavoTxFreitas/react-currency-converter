import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { CurrencyList, CurrencyProviderProps } from "../types/types";

export const CurrenciesContext = createContext([{} as CurrencyList]);

export function CurrencyProvider(props: CurrencyProviderProps) {
  const [currencyList, setCurrencyList] = useState<CurrencyList[]>([]);

  useEffect(() => {
    async function getCurrencyList() {
      const { data } = await api.get<CurrencyList>('/latest/currencies.min.json');
      const currencyQueue: CurrencyList[] = [];

      Object.entries(data).forEach(([value, label]) => {
        currencyQueue.push({ value, label });
      });

      setCurrencyList(currencyQueue.sort());
    }

    getCurrencyList();
    console.log(currencyList);
  }, []);


  return (
    <CurrenciesContext.Provider value={currencyList}>
      {props.children}
    </CurrenciesContext.Provider>
  )

}








