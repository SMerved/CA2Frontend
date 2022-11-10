import facade from "./utils/apiFacade.js";

facade.fetchCurrencies().then(res=>res.json()).then(data => console.table(Object.keys(data)))