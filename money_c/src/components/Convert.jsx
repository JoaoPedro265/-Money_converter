function Convert({
  click,
  value,
  setValue,
  currency,
  selectcurrency,
  setSelectcurrency,
  result,
  setResult,
}) {
  return (
    <div className="card">
      <h1>Conversor de Moedas</h1>
      valor:
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      R$ ====
      <select
        type="text"
        onChange={(e) => {
          setSelectcurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
      </select>
      <br />
      <button onClick={currency}>Calcular</button>
      <h2>{`${value}`}R$</h2>
      <br />=<h2>{`${result}  ${selectcurrency}`}</h2>
    </div>
  );
}

export default Convert;
