class Word {
  constructor(word) {
    this.word = word;
  }

  countVowels() { // counts instances of the 5 vowels. Does not check for 'y's
    const vowels = 'aeiou'
    const consonants = "bcdfghjklmnpqrstvwxyz"
    const y = 'y'
    let letters = this.word.split("");

    let vowel_count = 0;
    for (let i = 0; i < letters.length; ++i) {
      if (vowels.includes(letters[i])) {
        vowel_count += 1;
      }
      // for (let j = 0; j < vowels.length; ++j) {
        // if (letters[i] === vowels[j]) {
    }
    // for each letter in letters, if it is a vowel,
    // push a true, else push false
    return vowel_count
  }

  countSyllables() {
    const vowels = 'aeiou'
    const consonants = "bcdfghjklmnpqrstvwxyz"
    const y = 'y'
    let letters = this.word.split("");

    let syllable_count = this.countVowels()

    let areLettersVowels = []
    for (let i = 0; i < letters.length; ++i) {
      if (vowels.includes(letters[i])) {
        areLettersVowels.push(true)
      } else if (consonants.includes(letters[i])) {
        areLettersVowels.push(false)
      }
    }
    return areLettersVowels
  }
}

export { Word }
