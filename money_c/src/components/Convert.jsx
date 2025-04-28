import Card from "@mui/material/Card";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

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
    <Card
      variant="outlined"
      sx={{
        width: 350,
        margin: "100px auto",
        padding: 3,
        borderRadius: 4,
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2, // espaço entre os itens
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Conversor de Moedas</h1>

      <TextField
        fullWidth
        required
        label="Valor em R$"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="select-currency-label">Moeda</InputLabel>
        <Select
          labelId="select-currency-label"
          id="select-currency"
          value={selectcurrency}
          label="Moeda"
          onChange={(e) => setSelectcurrency(e.target.value)}
        >
          <MenuItem value="USD">Dólar (USD)</MenuItem>
          <MenuItem value="EUR">Euro (EUR)</MenuItem>
          <MenuItem value="GBP">Libra (GBP)</MenuItem>
          <MenuItem value="JPY">Iene (JPY)</MenuItem>
          <MenuItem value="AUD">Dólar Australiano (AUD)</MenuItem>
        </Select>
      </FormControl>

      <Button
        onClick={currency}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
      >
        Converter
      </Button>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <h2>{`${value || 0}`} R$</h2>
        <h3>=</h3>
        <h2>{`${result || 0} ${selectcurrency || ""}`}</h2>
      </div>
    </Card>
  );
}

export default Convert;
