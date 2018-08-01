class Word {
  constructor(word) {
    this.word = word;
  }

  countSyllables() {
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    const y = ['y'];
    let letters = this.word.split("");


    if (!(letters.includes(y[0]))) {
      let syllable_count = 0;
      for (let i = 0; i < letters.length; ++i) {
        for (let j = 0; j < vowels.length; ++j) {
          if (letters[i] === vowels[j]) {
            console.log(letters[i]);
            syllable_count += 1;
          }
        }
      }
      return syllable_count;
    }
  }
}

export { Word }
