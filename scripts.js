const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencyInput = document.querySelector(".input-currency")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor Real //
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas //


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.78
    const yuanChineseToday = 1.31



    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelectConverted.value == "yuanchinese") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zn-CN", {
            style: "currency",
            currency: "CNY",
        }).format(inputCurrencyValue * yuanChineseToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
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

    convertValues()
}

currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)