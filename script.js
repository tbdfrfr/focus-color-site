function updateBodyFocus() {
  const isFocused = document.hasFocus() && !document.hidden;
  document.body.classList.toggle('focused', isFocused);
  document.body.classList.toggle('unfocused', !isFocused);
}
window.addEventListener('focus', updateBodyFocus);
window.addEventListener('blur', updateBodyFocus);
document.addEventListener('visibilitychange', updateBodyFocus);
window.addEventListener('DOMContentLoaded', updateBodyFocus);
