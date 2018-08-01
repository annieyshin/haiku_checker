class Word {
  constructor(word) {
    this.word = word;
  }

  countVowels() { // counts instances of the 5 vowels. Does not check for 'y's
    const vowels = 'aeiou'
    const consonants = "bcdfghjklmnpqrstvwxyz"
    const y = 'y'
    let letters = this.word.split("");

    let vowelCount = 0;
    for (let i = 0; i < letters.length; ++i) {
      if (vowels.includes(letters[i])) {
        vowelCount += 1;
      }
      // for (let j = 0; j < vowels.length; ++j) {
        // if (letters[i] === vowels[j]) {
    }
    // for each letter in letters, if it is a vowel,
    // push a true, else push false
    return vowelCount
  }

  countSyllables() {
    const vowels = 'aeiou';
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const y = 'y';
    let letters = this.word.split("");
    let syllableCount = this.countVowels();

    let areLettersVowels = [];
    for (let i = 0; i < letters.length; ++i) {
      if (vowels.includes(letters[i])) {
        areLettersVowels.push(true);
      } else if (consonants.includes(letters[i])) {
        areLettersVowels.push(false);
      }
    }
    areLettersVowels.forEach(function(element, index) {
      if (element) {
        let vowelRemainder = areLettersVowels.slice(index + 1);
        if (vowelRemainder[0] === true) {
          syllableCount -= 1;
        }
      }
    })
    if (letters.slice(-1).pop() === 'e') {
      syllableCount -= 1;
    }

    let findY = letters.includes(y);
    if (findY == true) {
      true
    } else if (findY == false) {
      let indexPriorLetter = (letters.indexOf('y')) - 1;
      if (consonants.includes(letters[indexPriorLetter])) {
        syllableCount += 1
      }
    }
    return syllableCount;
  }
}

export { Word }
