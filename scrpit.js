document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();

  if (inputValue === '') {
    window.alert('Please input a value');
    return;
  }

  const normalizedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');

  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  document.getElementById('check-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('text-input').value.trim();
  
    if (inputValue === '') {
      window.alert('Please input a value');
      return;
    }
  
    const normalizedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    const isPalindrome = (str) => {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    };
  
    if (isPalindrome(normalizedValue)) {
      document.getElementById('result').textContent = `${inputValue} is a palindrome`;
    } else {
      document.getElementById('result').textContent = `${inputValue} is not a palindrome`;
    }
    