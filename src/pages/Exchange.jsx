import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function Exchange(props) {
    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [amount, setAmount] = useState(0)
    const [converted, setConverted] = useState(0)

    const updateTo = (evt) => {
        const value = evt.target.value
        setTo(value);
    }
    const updateFrom = (evt) => {
        const value = evt.target.value
        setFrom(value);
    }
    const updateAmount = (evt) => {
        const value = evt.target.value
        setAmount(value);
    }

    const convert = (evt) => {
    evt.preventDefault()
        facade.fetchExchange(to, from, amount).then((res)=> setConverted(res.result))
    }

    return (
        <div>
            <form onSubmit={convert}>
                <input type="text" onChange={updateFrom} name="fromInput" placeholder="From" value={from}/>
                <input type="text" onChange={updateTo} name="toInput" placeholder="To" value={to}/>
                <label>{from}:
                <input type="number" onChange={updateAmount} name="amountInput" placeholder="0,00" value={amount}/>
                </label>
                <button type="submit">Convert</button>
            </form>
            <p>{converted} {to}</p>
        </div>
    );
}

export default Exchange;