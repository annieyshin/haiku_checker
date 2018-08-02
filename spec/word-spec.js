import { Word } from './../src/word.js';

describe('Word', function() {
  it('should count the number of vowels in a word', function() {
    let newWord = new Word("abstract");
    expect(newWord.countVowels()).toEqual(2);
  })
  
  it('should use countSyllables to see if there are two vowels next to each other', function() {
    let newWord = new Word("look");
    expect(newWord.main()).toEqual(1)
  })

  it('should use countSyllables to see if a word ends with an e', function() {
    let newWord = new Word("splice");
    expect(newWord.main()).toEqual(1)
  })

  it('should use main to see if a word is proceeded by a vowel', function() {
    let newWord = new Word("away");
    expect(newWord.main()).toEqual(2)
  })

  it('should use main to see if a word has y in the middle', function() {
    let newWord = new Word("bayou");
    expect(newWord.main()).toEqual(2)
  })

  it('should use countSyllables to account for words ending in le', function() {
    let newWord = new Word("syllable");
    expect(newWord.main()).toEqual(3)
  })

})
