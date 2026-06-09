const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencyInput = document.querySelector(".input-currency")



function convertValues() {

    const inputCurrencyValue = Number(currencyInput.value)

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas //

    const fromCurrency = currencySelectConvert.value
    const toCurrency = currencySelectConverted.value


    const rates = {
     dolar: 5.2,
     euro: 6.2,
     libra: 6.78,
     yuanchinese: 1.31,
     real: 1,
    }

    const valueInBRL = inputCurrencyValue * rates[fromCurrency]
    const convertedValue = valueInBRL / rates[toCurrency]

    currencyValueToConvert.innerHTML = formatCurrency (
        inputCurrencyValue,
        fromCurrency,
    )

    currencyValueConverted.innerHTML = formatCurrency (
        convertedValue,
        toCurrency,
    )



}

function formatCurrency (value, currency) {
    const formats = {
        real: {
            locale: "pt-BR",
            currency: "BRL"
        },

        dolar: {
            locale: "en-US",
            currency: "USD"
        },

        euro: {
            locale: "de-DE",
            currency: "EUR"
        },

        libra: {
            locale: "en-GB",
            currency: "GBP"
        },

        yuanchinese: {
            locale: "zh-CN",
            currency: "CNY"
        },


    }


    return new Intl.NumberFormat(
        formats[currency].locale,
        {
            style: "currency",
            currency: formats[currency].currency
        }
    ).format(value)
}

    function changeCurrencyConvert() {
    const currencyNameConvert = document.querySelector(".currency-convert")
    const currencyImageConvert = document.querySelector(".currency-img-br")

    if (currencySelectConvert.value == "dolar") {
        currencyNameConvert.innerHTML = " Dólar americano "
        currencyImageConvert.src = "./assets/Bandeira EUA.png"
        currencyInput.placeholder = "US$ 10.000,00"
    }

    if (currencySelectConvert.value == "real") {
        currencyNameConvert.innerHTML = "Real brasileiro"
        currencyImageConvert.src = "./assets/Bandeira Brasil.png"
         currencyInput.placeholder = "R$ 10.000,00"
    }

    if (currencySelectConvert.value == "euro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/Bandeira Euro.png"
        currencyInput.placeholder = "€ 10.000,00"
    }

    if (currencySelectConvert.value == "libra") {
        currencyNameConvert.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/Bandeira Libra.png"
        currencyInput.placeholder = "£ 10.000,00"
    }

    if (currencySelectConvert.value == "yuanchinese") {
        currencyNameConvert.innerHTML = "Yuan Chinês"
        currencyImageConvert.src = "./assets/yen_icon.png"
        currencyInput.placeholder = "元 10.000,00"
    }

}

function changeCurrencyConverted() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelectConverted.value == "dolar") {
        currencyName.innerHTML = " Dólar americano "
        currencyImage.src = "./assets/Bandeira EUA.png"
        
    }

    if (currencySelectConverted.value == "euro") {
        currencyName.innerHTML = " Euro "
        currencyImage.src = "./assets/Bandeira Euro.png"
    }

    if (currencySelectConverted.value == "libra") {
        currencyName.innerHTML = " Libra "
        currencyImage.src = "./assets/Bandeira Libra.png"
    }

    if (currencySelectConverted.value == "yuanchinese") {
        currencyName.innerHTML = " Yuan Chinês "
        currencyImage.src = "./assets/yen_icon.png"
    }


    if (currencySelectConverted.value == "real") {
        currencyName.innerHTML = " Real brasileiro "
        currencyImage.src = "./assets/Bandeira Brasil.png"
    }

    convertValues()
}
currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)