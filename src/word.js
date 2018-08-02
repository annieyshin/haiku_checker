class Word {
  constructor(word) {
    this.word = word;
    this.letters = this.word.split("");
  }

  main() {
    // account for some words ending in 's', words ending in 'le',
    let vowelCount = this.countVowels();
    let letters = this.letters;
    if (letters.slice(-1).pop() === 's') {
      // singularWord = new Word(letters.splice(-1, 1).join())
      console.log("prior to removing s from the word: " + this.word);
      this.word = letters.splice(letters.length-1, 1).join()
      console.log("removing s from the word: " + this.word);
    }
    let syllables = this.countSyllablesBasic(vowelCount)
    // 1. strip any 's' from the end
    // 2. then run 'countSyllablesBasic'
    // 3. if it ends with 'le' then add 1 to syllables
    if ((letters[letters.length-2] + letters[letters.length-1]) == 'le') {
      syllables += 1
    }
    return syllables
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

  countSyllablesBasic(vowelCount) { // checks basic functionality for vowel-dipthongs, e's at the end, and y's
    const vowels = 'aeiou';
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const y = 'y';
    let letters = this.letters;
    console.log("here is the wrod array: " + letters);
    let syllableCount = vowelCount;

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
    if (findY == false) {
      false
    } else if (findY == true) {
      let indexPriorLetter = (letters.indexOf('y')) - 1;
      if (consonants.includes(letters[indexPriorLetter])) {
        syllableCount += 1
      }
    }
    console.log(syllableCount)
    return syllableCount;
  }


}

//count vowels, account for dipthongs and e's at the end

export { Word }
