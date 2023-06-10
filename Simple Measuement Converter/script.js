const inputMeasurement = document.getElementById('inputMeasurement');
const outputMeasurement = document.getElementById('outputMeasurement');
const conversionType = document.getElementById('conversionType');

// Function to convert measurements
function convertMeasurement() {
  const measurement = parseFloat(inputMeasurement.value);
  const selectedConversion = conversionType.value;
  let convertedMeasurement;

  switch (selectedConversion) {
    case 'teaspoon':
      convertedMeasurement = measurement * 0.333333;
      break;
    case 'tablespoon':
      convertedMeasurement = measurement * 3;
      break;
    case 'cup':
      convertedMeasurement = measurement * 236.588;
      break;
    case 'milliliter':
      convertedMeasurement = measurement * 0.00422675;
      break;
    default:
      convertedMeasurement = measurement;
      break;
  }

  outputMeasurement.textContent = convertedMeasurement.toFixed(2);
}

// Event listener for measurement and conversion type change
inputMeasurement.addEventListener('input', convertMeasurement);
conversionType.addEventListener('change', convertMeasurement);
