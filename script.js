// Exchange rates (to USD for simplicity)
const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.75
};

function convertCurrency() {
    // Get selected currency
    const selectedCurrency = document.getElementById("currency").value;

    // Asset value in USD (fixed)
    const assetValue = 1000;

    // Convert asset value to selected currency
    const convertedValue = assetValue * exchangeRates[selectedCurrency];

    // Display the result
    document.getElementById("assetValue").textContent = assetValue;
    document.getElementById("convertedValue").textContent = convertedValue.toFixed(2);
}
