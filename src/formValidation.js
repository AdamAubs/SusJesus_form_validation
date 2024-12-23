import { showError, clearError } from "./utils/error.js";

export function validateForm() {
  // const form = document.querySelector(".validation-form");
  const number = document.getElementById("validation-number");
  const word = document.getElementById("validation-word");
  const color = document.getElementById("validation-color");
  const range = document.getElementById("validation-range");

  const numberError = document.querySelector("#validation-number + span.error");
  const wordError = document.querySelector("#validation-word + span.error");
  const rangeError = document.querySelector("#validation-range + span.error");
  const colorError = document.querySelector("#validation-color + span.error");

  // Input Event Listeners
  number.addEventListener("input", () => {
    console.log(number.value);
    // Check if the number is negative
    const value = parseFloat(number.value);
    // If value is negative, invalidate the input
    if (value < 0) {
      // Manually set validity to invalid
      number.setCustomValidity("validation is never negative :(");
      showError(number, numberError, "validation is never negative :(");
    } else {
      // Reset custom validity and check if input is valid
      number.setCustomValidity("");
      if (number.validity.valid) {
        clearError(numberError);
      } else {
        showError(number, numberError, getNumberErrorMessage(number));
      }
    }
  });

  word.addEventListener("input", () => {
    if (word.validity.valid) clearError(wordError);
    else showError(word, wordError, getWordErrorMessage(word));
  });

  range.addEventListener("input", () => {
    console.log(`${range.value}`);

    // Custom validation for range
    const value = parseInt(range.value, 10);
    const minValue = 10; // Minimum valid value
    const maxValue = 10; // Maximum valid value

    // Check if the value is within the allowed range
    if (value >= minValue && value <= maxValue) {
      clearError(rangeError); // If valid, clear the error
    } else {
      showError(
        range,
        rangeError,
        `SusJesus only accepts values between ${minValue} and ${maxValue}.`
      );
    }
  });

  color.addEventListener("input", () => {
    if (color.validity.valid) {
      clearError(numberError);
    } else {
      showError(color, colorError, getColorErrorMessage(color));
    }
  });

  // Form Submission (not needed since form is never being submitted)
  // form.addEventListener("submit", (event) => {
  //   if (
  //     !number.validity.valid ||
  //     !word.validity.valid ||
  //     !range.validity.valid ||
  //     !color.validity.valid
  //   ) {
  //     event.preventDefault(); // Prevent submission if invalid
  //     showError(); // Display error message
  //   } else {
  //     event.preventDefault(); // Prevent default submission
  //   }
  // });

  function getNumberErrorMessage(number) {
    if (number.validity.valueMissing)
      return "You need to enter a validation number.";
    if (number.validity.typeMismatch)
      return "Entered value needs to be an number.";

    return "";
  }

  function getWordErrorMessage(word) {
    if (word.validity.valueMissing)
      return "You need to enter a word that makes you feel validated.";
    if (word.validity.tooShort)
      return `Validation should be at least ${word.minLength} characters.`;
    return "";
  }

  function getColorErrorMessage(color) {
    if (color.validity.valueMissing)
      return "SusJesus needs a color to validate you.";

    return "";
  }
}
