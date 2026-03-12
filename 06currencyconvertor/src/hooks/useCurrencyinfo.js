/************* Custom Hooks Design starts ******** */

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    //**useEffect hook ((callback) => {what you want to do} , [dependency Array])
    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;

/************* Custom Hooks Design ends ******** */