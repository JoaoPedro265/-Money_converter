import { useState } from "react";
import Convert from "./components/Convert";

function App() {
  const [value, setValue] = useState(""); //valor digitado
  const [selectcurrency, setSelectcurrency] = useState("USD"); //moeda a ser convertida
  const [result, setResult] = useState(null); //valor da conversao
  console.log(selectcurrency);
  const currency = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${selectcurrency}`
      );
      const data = await response.json();
      let value_formated = data.rates.BRL * value;
      let value_int = Number(value_formated.toFixed(2));
      setResult(value_int);
    } catch (error) {
      console.error("Erro ao buscar taxas:", error);
    }
  };

  return (
    <Convert
      {...{
        value,
        setValue,
        currency,
        selectcurrency,
        setSelectcurrency,
        result,
      }}
    />
  );
}

export default App;
