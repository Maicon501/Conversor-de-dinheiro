const convertButton = document.querySelector(".convert-button");

function convertVelues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const CurrencyValueToConvert = document.querySelector(".montante-real"); // Valor Real
  const CurrencyValueConverted = document.querySelector(".montante"); // Outras Moedas

  const dolarToday = 5.5;

  const convertedValue = inputCurrencyValue / dolarToday;

  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertVelues);
