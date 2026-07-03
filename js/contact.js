document.addEventListener('DOMContentLoaded', () => {
  const messageBox = document.getElementById('message');
  const fakeCaret = document.getElementById('fake-caret');
  const maxHeight = 320; // must match max-height in contact.css

  if (messageBox && fakeCaret) {
    const updateCaret = () => {
      const isEmpty = messageBox.value.length === 0;
      const isFocused = document.activeElement === messageBox;

      fakeCaret.classList.toggle('is-visible', isEmpty && isFocused);
      messageBox.style.caretColor = isEmpty ? 'transparent' : '#333';
    };

    messageBox.addEventListener('focus', updateCaret);
    messageBox.addEventListener('blur', updateCaret);
    messageBox.addEventListener('input', () => {
      updateCaret();

      messageBox.style.height = 'auto';
      const newHeight = Math.min(messageBox.scrollHeight, maxHeight);
      messageBox.style.height = newHeight + 'px';
      messageBox.style.overflowY =
        messageBox.scrollHeight > maxHeight ? 'auto' : 'hidden';
    });
  }
});