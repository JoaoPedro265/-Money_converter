import { useState } from "react";
import Convert from "./components/Convert";
const apiUrl = import.meta.env.VITE_API_URL; //importando variaveis de ambiente

function App() {
  const [value, setValue] = useState(""); //valor digitado
  const [selectcurrency, setSelectcurrency] = useState("USD"); //moeda a ser convertida
  const [result, setResult] = useState(null); //valor da conversao
  const currency = async () => {
    console.log(value);
    console.log(selectcurrency);
    try {
      const response = await fetch(`${apiUrl}/latest/${selectcurrency}`);
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
