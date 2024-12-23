import "./css/styles.css";
import jesusForegroundImage from "./images/1_jesus.png";
import cloudsBackgroundImage from "./images/background_clouds.jpg";
import susJesusThoughtBubbleImage from "./images/sus_jesus_thought_bubble.png";
import downArrow from "./images/down_arrow.png";
import findSusJesusOneImage from "./images/validation_pics/find_the_cat_under_the_tree_1.JPG";
import { validateForm } from "./formValidation";

export default function initialPageLoad() {
  // Get the content div
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear existing content

  // Main content div
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  // Single image of background clouds
  const cloudsBackgroundImg = document.createElement("img");
  cloudsBackgroundImg.classList.add("clouds-background-image");
  cloudsBackgroundImg.src = cloudsBackgroundImage;
  cloudsBackgroundImg.alt = "Clouds Background Image";
  mainContentDiv.appendChild(cloudsBackgroundImg);

  // Jesus foreground image
  const susJesusForegroundImg = document.createElement("img");
  susJesusForegroundImg.classList.add("sus-jesus-foreground-image");
  susJesusForegroundImg.src = jesusForegroundImage;
  susJesusForegroundImg.alt = "Sus Jesus foreground Image";
  mainContentDiv.appendChild(susJesusForegroundImg);

  // Sus Jesus thought bubble
  const susJesusThoughtBubbleImg = document.createElement("img");
  susJesusThoughtBubbleImg.classList.add("sus-jesus-thought-bubble-image");
  susJesusThoughtBubbleImg.src = susJesusThoughtBubbleImage;
  susJesusThoughtBubbleImg.alt = "Sus Jesus Thought Bubble";
  mainContentDiv.appendChild(susJesusThoughtBubbleImg);

  const susJesusThoughtBubbleText = document.createElement("p");
  susJesusThoughtBubbleText.classList.add("sus-jesus-thought-bubble-text");
  susJesusThoughtBubbleText.textContent = "Hello, I am SusJesus";
  mainContentDiv.appendChild(susJesusThoughtBubbleText);

  // Title
  const title = document.createElement("p");
  title.textContent = "Welcome to the Form of Validation";
  title.classList.add("main-title");
  mainContentDiv.appendChild(title);

  // Down arrow
  const downArrowImg = document.createElement("img");
  downArrowImg.classList.add("down-arrow-image");
  downArrowImg.src = downArrow;
  downArrowImg.alt = "Down arrow";
  mainContentDiv.appendChild(downArrowImg);

  contentDiv.appendChild(mainContentDiv);

  // Create the validation form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  // Call function to render the form
  renderValidationForm(formContainer, contentDiv);

  console.log("Initial page loaded");
}

function renderValidationForm(formContainer, contentDiv) {
  const validationDisclaimer = document.createElement("p");
  validationDisclaimer.classList.add("validation-disclaimer");
  validationDisclaimer.textContent =
    "To be deemed valid, you must complete the self-validation form below. If you fail to follow through as instructed, you will, unfortunately, remain invalid. PROCEED ONLY IF YOU WISH TO RECEIVE VALIDATION!";
  validationDisclaimer.setAttribute("aria-live", "polite"); // Add aria-live attribute
  formContainer.appendChild(validationDisclaimer);

  const validationForm = document.createElement("form");
  validationForm.classList.add("validation-form");
  validationForm.noValidate = true;

  // Number input
  const numberLabel = document.createElement("label");
  numberLabel.setAttribute("for", "validation-number");
  const numberSpan = document.createElement("span");
  numberSpan.textContent = "Please enter the number that validates you:";
  numberLabel.appendChild(numberSpan);
  const numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.id = "validation-number";
  numberInput.name = "valid-number";
  numberInput.required = true;
  numberLabel.appendChild(numberInput);
  const numberError = document.createElement("span");
  numberError.classList.add("error");
  numberError.setAttribute("aria-live", "polite");
  numberLabel.appendChild(numberError);
  validationForm.appendChild(numberLabel);

  // Word input
  const wordLabel = document.createElement("label");
  wordLabel.setAttribute("for", "validation-word");
  const wordSpan = document.createElement("span");
  wordSpan.textContent = "What is one word that makes you feel validated?";
  wordLabel.appendChild(wordSpan);
  const wordInput = document.createElement("input");
  wordInput.type = "text";
  wordInput.id = "validation-word";
  wordInput.name = "validation-word";
  wordInput.minLength = 2;
  wordInput.maxLength = 50;
  wordInput.required = true;
  wordLabel.appendChild(wordInput);
  const wordError = document.createElement("span");
  wordError.classList.add("error");
  wordError.setAttribute("aria-live", "polite");
  wordLabel.appendChild(wordError);
  validationForm.appendChild(wordLabel);

  // Range input
  const rangeLabel = document.createElement("label");
  rangeLabel.setAttribute("for", "validation-range");
  const rangeSpan = document.createElement("span");
  rangeSpan.textContent =
    "On a scale from 1 to 10, how would you rate SusJesus?";
  rangeLabel.appendChild(rangeSpan);
  const rangeInput = document.createElement("input");
  rangeInput.type = "range";
  rangeInput.id = "validation-range";
  rangeInput.name = "validation-range";
  rangeInput.min = 1;
  rangeInput.max = 10;
  rangeInput.step = 1;
  rangeInput.required = true;
  // Create the datalist
  const rangeDatalist = document.createElement("datalist");
  rangeDatalist.id = "validation-scale";

  // Add options to the datalist
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.label = i;
    rangeDatalist.appendChild(option);
  }

  // Set the list attribute to associate the datalist with the input
  rangeInput.setAttribute("list", "validation-scale");

  // Create range scale labels below the input (to visually display numbers)
  const scaleContainer = document.createElement("div");
  scaleContainer.classList.add("range-scale-labels");

  for (let i = 1; i <= 10; i++) {
    const scaleLabel = document.createElement("span");
    scaleLabel.textContent = i;
    scaleContainer.appendChild(scaleLabel);
  }

  rangeLabel.appendChild(rangeInput);
  const rangeError = document.createElement("span");
  rangeError.classList.add("error");
  rangeError.setAttribute("aria-live", "polite");
  rangeLabel.appendChild(rangeError);
  validationForm.appendChild(rangeDatalist);
  validationForm.appendChild(rangeLabel);
  validationForm.appendChild(scaleContainer);

  // Color input
  const colorLabel = document.createElement("label");
  colorLabel.setAttribute("for", "validation-color");
  const colorSpan = document.createElement("span");
  colorSpan.textContent =
    "Please enter the color that makes you feel validated:";
  colorLabel.appendChild(colorSpan);
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.id = "validation-color";
  colorInput.name = "validation-color";
  colorInput.required = true;
  colorLabel.appendChild(colorInput);
  const colorError = document.createElement("span");
  colorError.classList.add("error");
  colorError.setAttribute("aria-live", "polite");
  colorLabel.appendChild(colorError);
  validationForm.appendChild(colorLabel);

  // Append form to the container
  formContainer.appendChild(validationForm);
  contentDiv.appendChild(formContainer);

  const cloudsBackgroundImg = document.createElement("img");
  cloudsBackgroundImg.classList.add("clouds-background-image-validation-form");
  cloudsBackgroundImg.src = cloudsBackgroundImage;
  cloudsBackgroundImg.alt = "Clouds Background Image";
  formContainer.appendChild(cloudsBackgroundImg);

  validateForm(contentDiv);

  findSusJesus(contentDiv, formContainer);
}

function findSusJesus(contentDiv, formContainer) {
  const findSusJesusContainer = document.createElement("div");
  findSusJesusContainer.classList.add("find-sus-jesus-container");

  const cloudsBackgroundImg = document.createElement("img");
  cloudsBackgroundImg.classList.add(
    "clouds-background-image-find-sus-jesus-form"
  );
  cloudsBackgroundImg.src = cloudsBackgroundImage;
  cloudsBackgroundImg.alt = "Clouds Background Image";
  findSusJesusContainer.appendChild(cloudsBackgroundImg);

  const rulesForFinding = document.createElement("p");
  rulesForFinding.classList.add("rules-for-finding");
  rulesForFinding.textContent =
    "To be validated, you must find both the cat and SusJesus within the allotted time. Failure to do so will result in the chosen validation being read back to you 1000 times the validation number you choose.";
  // Add the rules for finding Sus Jesus game
  formContainer.appendChild(rulesForFinding);

  contentDiv.appendChild(findSusJesusContainer);

  // Create the container for the game timer
  const timerDiv = document.createElement("div");
  timerDiv.classList.add("timer-div");

  // Create timer text
  const timerText = document.createElement("p");
  timerText.classList.add("timer-text");
  timerText.textContent = "Time Left: 5";

  timerDiv.appendChild(timerText);
  findSusJesusContainer.appendChild(timerDiv);

  const startRoundOneBtn = document.createElement("button");
  startRoundOneBtn.classList.add("round-start-btn");
  startRoundOneBtn.textContent = "Start Search Timer";
  findSusJesusContainer.appendChild(startRoundOneBtn);

  enableButtonOnFormCompletion(startRoundOneBtn);

  startRoundOneBtn.addEventListener("click", () => {
    startRoundOne(findSusJesusContainer);
  });
}

function enableButtonOnFormCompletion(startRoundOneBtn) {
  const formInputs = document.querySelectorAll("input");

  const checkFormValidity = () => {
    const isFormValid = Array.from(formInputs).every((input) =>
      input.checkValidity()
    );

    if (isFormValid) {
      startRoundOneBtn.disabled = false; // Enable the button
      startRoundOneBtn.textContent = "Start Search Timer"; // Update text
    } else {
      startRoundOneBtn.disabled = true; // Disable the button
      startRoundOneBtn.textContent =
        "Fill out form above to start search timer"; // Update text
    }
  };

  // Initially disable the button and set text
  startRoundOneBtn.disabled = true;
  startRoundOneBtn.textContent = "Fill out form above to start search timer";

  // Attach event listeners to all form inputs
  formInputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });
}

function startRoundOne(findSusJesusContainer) {
  const gameCanvas = document.createElement("div");
  gameCanvas.classList.add("game-canvas");
  findSusJesusContainer.appendChild(gameCanvas);

  const findSusJesusOneImg = document.createElement("img");
  findSusJesusOneImg.classList.add("find-sus-jesus-one-img");
  findSusJesusOneImg.src = findSusJesusOneImage;
  findSusJesusOneImg.alt = "Find Sus Jesus Image One";
  gameCanvas.appendChild(findSusJesusOneImg);

  const susJesusHotSpotImg = document.createElement("img");
  susJesusHotSpotImg.classList.add("sus-jesus-hot-spot");
  susJesusHotSpotImg.src = jesusForegroundImage;
  susJesusHotSpotImg.alt = "Sus Jesus Hot Spot";
  susJesusHotSpotImg.setAttribute("data-spot", "susJesus");

  const catHotSpot = document.createElement("div");
  catHotSpot.classList.add("cat-hot-spot");
  catHotSpot.setAttribute("data-spot", "cat");

  gameCanvas.appendChild(susJesusHotSpotImg);
  gameCanvas.appendChild(catHotSpot);

  let hotspotsFound = {
    susJesus: false,
    cat: false,
  };

  [susJesusHotSpotImg, catHotSpot].forEach((hotspot) => {
    hotspot.addEventListener("click", (event) => {
      const spotName = event.target.getAttribute("data-spot");

      if (!hotspotsFound[spotName]) {
        hotspotsFound[spotName] = true;

        updateProgressIndicator(spotName);

        // Check if all hotspots are found
        if (Object.values(hotspotsFound).every((found) => found)) {
          stopTimer(); // Stop the timer when both are found
          showCongratsMessage("You are valid! Have a good day :)!", () => {
            console.log("All hotspots found! Game over.");
          });
        }
      }
    });
  });

  // Disable the button after it's clicked
  const startRoundOneBtn =
    findSusJesusContainer.querySelector(".round-start-btn");
  startRoundOneBtn.disabled = true;

  // Start the timer
  const timerDiv = findSusJesusContainer.querySelector(
    ".timer-div .timer-text"
  );

  startTimer(timerDiv, 5, handleTimeUp);
}

function updateProgressIndicator(spotName) {
  // Find the element associated with the found hotspot
  const hotspotElement = document.querySelector(`[data-spot="${spotName}"]`);

  // Apply a highlight style to the found hotspot
  if (hotspotElement) {
    hotspotElement.style.border = "3px solid green"; // Example: Green border to highlight
    hotspotElement.style.opacity = "0.8"; // Example: Slightly dim background
    hotspotElement.style.transition = "all 0.3s ease"; // Smooth transition for visual effect
  }
}

function showCongratsMessage(message) {
  // Find the container where the picture is located
  const findSusJesusContainer = document.querySelector(
    ".find-sus-jesus-container"
  );

  // Create the message element
  const congratsMessageElement = document.createElement("p");
  congratsMessageElement.classList.add("congrats-message"); // Add a class for styling
  congratsMessageElement.textContent = message; // Set the message text

  // Append the message below the picture
  findSusJesusContainer.appendChild(congratsMessageElement);
}

let timerInterval;
function startTimer(timerDiv, duration, onTimeUp) {
  let timeLeft = duration;
  timerInterval = setInterval(() => {
    console.log(timeLeft);
    if (timeLeft > 0) {
      timeLeft--;
      timerDiv.textContent = `Time Left: ${timeLeft}`;
    } else {
      clearInterval(timerInterval);
      onTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  console.log("Timer Stopped");
}

function handleTimeUp() {
  const validationValue = 1000; // Example: Retrieve the validation value from user input
  const message = `You failed to find Sus Jesus and the cat. Your are invalid :( ${
    validationValue * 1000
  }`;
  renderInvalidPage();
}

function renderInvalidPage() {
  const contentDiv = document.getElementById("content");

  // Get the user's validation number from the form
  const validationNumber = parseInt(
    document.getElementById("validation-number").value
  );
  const validationWord = document.getElementById("validation-word").value;
  const validationColor = document.getElementById("validation-color").value;

  contentDiv.innerHTML = "";
  // Check if the validation number is valid (positive number) and the word is filled
  if (validationNumber && validationWord) {
    const calculatedValue = validationNumber * 1000; // Multiply number by 1000
    const invalidMessage = document.createElement("p");
    invalidMessage.classList.add("invalid-message-description");
    invalidMessage.textContent = `You were warned! I will now repeat your validation word ("${validationWord}") ${
      validationNumber * 1000
    } times (validation number * 1000), or until you leave.`;

    contentDiv.appendChild(invalidMessage);

    contentDiv.style.backgroundColor = validationColor;

    // Create the message element
    const message = `Your "${validationWord}!"`;

    // Set an interval to add the message every second
    let messageCount = 0;

    // Create the interval
    const intervalId = setInterval(() => {
      // Create a new message element
      const messageElement = document.createElement("p");
      messageElement.classList.add("invalid-message");
      messageElement.textContent = message; // Set the message text

      // Append the message to the content div
      contentDiv.appendChild(messageElement);

      messageCount++; // Increment message counter

      // Stop the interval after the validation number is reached
      if (messageCount >= calculatedValue) {
        clearInterval(intervalId);
      }
    }, 1000); // 1000 milliseconds = 1 second

    // Push state into the history for the invalid page
    const state = { page: "invalid" };
    history.pushState(state, "", "/invalid");
  } else {
    // Handle the case where validation number or word is missing
    const errorMessage =
      "Really? You thought you didn't have to fill out the validation form in order to be considered valid? Please go back and fill out the validation form. You are being reset...";
    const errorMessageElement = document.createElement("p");
    errorMessageElement.classList.add("error-message");
    errorMessageElement.textContent = errorMessage;
    contentDiv.appendChild(errorMessageElement);

    // Create a countdown timer element
    const errorCountDownTimer = document.createElement("div");
    errorCountDownTimer.classList.add("error-count-down");
    errorCountDownTimer.textContent = "Time left to reset: 5 seconds";
    contentDiv.appendChild(errorCountDownTimer);

    // Countdown timer logic
    let countdownTime = 10; // Countdown from 10 seconds
    const countdownInterval = setInterval(() => {
      countdownTime--;
      errorCountDownTimer.textContent = `Time left to reset: ${countdownTime} seconds`;

      // When countdown reaches 0, clear the interval and reload the page
      if (countdownTime <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        initialPageLoad(); // Reload the initial page
      }
    }, 1000); // Update every 1 second

    // Reset the page after 10 seconds (handled by the interval)
    // Ensures the page reloads even if setInterval is stopped
    setTimeout(() => {
      clearInterval(countdownInterval); // Stop the countdown (just in case)
      initialPageLoad(); // Reload the initial page after the timer ends
    }, 10000); // 10 seconds
  }
}

// Use built-in browser to handle navigating back a page if user ends up on the
// dreaded "invalid page"
// Listen for changes in the history state
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.page === "invalid") {
    // If the user navigates back to the invalid page, render the invalid state
    renderInvalidPage();
    // Prevent going back to invalid page
    history.replaceState({ page: "invalid" }, "", "/invalid");
  } else {
    // If it's the initial page, re-render it
    initialPageLoad();
  }
});
