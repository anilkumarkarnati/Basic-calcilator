// Reference to the input display element
let display = document.getElementById("display");

// Appends the clicked value (number/operator) to the display
function appendValue(value) {
  display.value += value;
}

// Clears the entire display
function clearDisplay() {
  display.value = "";
}

// Deletes the last character in the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculates the result using eval(), handles errors gracefully
function calculate() {
  try {
    const result = eval(display.value); // Evaluate expression
    if (!isFinite(result)) throw new Error("Math Error"); // Check for division by zero
    display.value = result;
  } catch {
    display.value = "Error"; // If invalid expression
  }
}

// Adds keyboard support for the calculator
document.addEventListener("keydown", function (e) {
  const key = e.key;

  // Append numbers
  if (!isNaN(key)) {
    appendValue(key);
  }
  // Append decimal point
  else if (key === ".") {
    appendValue(".");
  }
  // Append operators
  else if (["+", "-", "*", "/"].includes(key)) {
    appendValue(key);
  }
  // Append parentheses
  else if (key === "(" || key === ")") {
    appendValue(key);
  }
  // Handle backspace
  else if (key === "Backspace") {
    deleteLast();
  }
  // Handle escape key to clear display
  else if (key === "Escape") {
    clearDisplay();
  }
  // Handle enter or equals to calculate
  else if (key === "Enter" || key === "=") {
    e.preventDefault(); // Prevent form submission if any
    calculate();
  }
});
