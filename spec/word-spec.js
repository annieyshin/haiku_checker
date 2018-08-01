import { Word } from './../src/word.js';

describe('Word', function() {
  it('should count the number of vowels in a word', function() {
    let newWord = new Word("abstract");
    expect(newWord.countSyllables()).toEqual(2);
  })
})
