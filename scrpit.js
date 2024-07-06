document.getElementById('check-btn').addEventListener('click', function() {
    var inputValue = document.getElementById('text-input').value.trim();

    if (inputValue === '') {
        alert('Please input a value');
         return;
    }

     var normalizedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');

    function isPalindrome(str) {
         var reversedStr = str.split('').reverse().join('');
         return str === reversedStr;
    }

    if (isPalindrome(normalizedValue)) {
        document.getElementById('result').textContent = inputValue + ' is a palindrome';
    } else {
        document.getElementById('result').textContent = inputValue + ' is not a palindrome';
    }
        });