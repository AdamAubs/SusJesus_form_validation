export function showError(type, errorSpan, message) {
  console.log(message);
  if (message) {
    errorSpan.textContent = message;
    // Add the `active` class
    errorSpan.className = "error active";
  }
}

export function clearError(errorSpan) {
  errorSpan.textContent = ""; // Clear error message
  errorSpan.className = "error"; // Remove `active` class to hide error
}
