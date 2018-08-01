import { Word } from './../src/word.js';

describe('Word', function() {
  it('should count the number of vowels in a word', function() {
    let newWord = new Word("abstract");
    expect(newWord.countVowels()).toEqual(2);
  })

  // it('should count Syllables and return areLettersVowels', function() {
  //   let newWord = new Word("plate");
  //   expect(newWord.countSyllables()).toEqual([false, false, true, false, true])
  // })

  it('should use countSyllables to see if there are two vowels next to each other', function() {
    let newWord = new Word("look");
    expect(newWord.countSyllables()).toEqual(1)
  })

  it('should use countSyllables to see if a word ends with an e', function() {
    let newWord = new Word("splice");
    expect(newWord.countSyllables()).toEqual(1)
  })

  it('should use countSyllables to see if a word ends with an y', function() {
    let newWord = new Word("away");
    expect(newWord.countSyllables()).toEqual(2)
  })

})
