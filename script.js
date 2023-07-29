function converter(number) {
    let kilometres = number;
    let miles = kilometres * 1.60934;
    return miles.toFixed(0); // For this project I don't want any decimal spaces
}

function convertInputToMiles() {
    const inputElement = document.getElementById('inputNumber');
    const inputValue = inputElement.value;

    if (inputValue !== '') {
        const number = parseFloat(inputValue);
        const miles = converter(number);
        const resultElement = document.getElementById('result');
        resultElement.textContent = "The distance of " + number + " kms is around " + miles + " miles.";
    } else {
        alert("Please enter a valid number.");
    }
}
