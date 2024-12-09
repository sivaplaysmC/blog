function toggleOutput(button) {
  const outputDiv = button.previousElementSibling;
  if (outputDiv.style.maxHeight) {
    outputDiv.style.maxHeight = '';
    button.textContent = 'Show Less';
  } else {
    outputDiv.style.maxHeight = '4.5em';
    button.textContent = 'Show More';
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.terminal-output').forEach(outputDiv => {
    if (outputDiv.scrollHeight > 72) {
      const toggleButton = outputDiv.nextElementSibling;
      toggleButton.style.display = 'inline';
    }
  });
});
