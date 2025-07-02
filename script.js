const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const CurrencyValueToConvert = document.querySelector(".montante-real"); // Valor Real
  const CurrencyValueConverted = document.querySelector(".montante"); // Outras Moedas
  console.log(inputCurrencyValue, currencySelect.value);
  const dolarToday = 5.0; // Valor do Dólar hoje
  // Valor do Euro hoje
  const euroToday = 6.0;

  let convertedValue;

  if (currencySelect.value === "US$ Dólar americano") {
    convertedValue = inputCurrencyValue / dolarToday;
  } else if (currencySelect.value === "€ Euro") {
    convertedValue = inputCurrencyValue / euroToday;
  }

  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertValues);
