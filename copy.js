function copyToClipboard(text, button, original) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  button.textContent = 'Copied!';

  setTimeout(function() {
    button.textContent = original;
  }, 300);
}