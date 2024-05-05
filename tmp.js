function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;

    switch(unit) {
        case 'celsius':
            convertedTemperature = celsiusToFahrenheit(temperatureInput);
            break;
        case 'fahrenheit':
            convertedTemperature = fahrenheitToCelsius(temperatureInput);
            break;
        case 'kelvin':
            convertedTemperature = kelvinToCelsius(temperatureInput);
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)}°`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
