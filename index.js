function countLettersInWords() {
    const numberToWords = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred',
      1000: 'thousand',
    };
  
    function numberToWordsInEnglish(number) {
      if (number < 20) {
        return numberToWords[number];
      } else if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const ones = number % 10;
        return numberToWords[tens] + ' ' + numberToWords[ones];
      } else if (number < 1000) {
        const hundreds = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
          return numberToWords[hundreds] + ' ' + numberToWords[100];
        } else {
          return (
            numberToWords[hundreds] +
            ' ' +
            numberToWords[100] +
            ' and ' +
            numberToWordsInEnglish(remainder)
          );
        }
      } else {
        return numberToWords[1] + ' ' + numberToWords[1000];
      }
    }
  
    let totalLetters = 0;
  
    for (let i = 1; i <= 1000; i++) {
      const words = numberToWordsInEnglish(i);
      const letters = words.replace(/[^a-zA-Z]/g, '').length;
      totalLetters += letters;
    }
  
    return totalLetters;
  }
  
  console.log(countLettersInWords()); // Output: 21124
  