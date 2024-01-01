const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const convert = document.getElementById("convert")
const result = document.getElementById("result")

const apiKey = ""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR"

 document.addEventListener('DOMContentLoaded', function(){
 addEventListener("click", function() {
    const amountTotal = amount.value
    const currencyTotal = currency.value
    const url = apiUrl*currencyTotal

    fetch(url, {
        headers: {
            'X-Api-Key':apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate
        const resultPrice = amountTotal * rate;
        result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(2)} USD`;
    })
    .catch(error =>{
        console.error("Request failed", error);
        result.innerHTML = "As error occurred please try again later."
    })
})
  })