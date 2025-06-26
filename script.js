let input = '';

function press(val) {
  input += val;
  document.getElementById('display').value = input;
}

function clearDisplay() {
  input = '';
  document.getElementById('display').value = '';
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById('display').value = input;
}

function calculate() {
  try {
    const result = eval(input);
    document.getElementById('display').value = result;
    input = result.toString();
  } catch {
    document.getElementById('display').value = 'Error';
    input = '';
  }
}

document.addEventListener("keydown", function(e) {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    press(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
