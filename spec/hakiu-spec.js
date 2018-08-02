import { Word } from './../src/word.js';

describe('Haiku', function() {
  it('should count the number of syllables in a sentence', function() {
    let newHaiku = new Haiku("snow falling on ground; for sure count us as seven; leaves blowing nice wind");
    expect(newHaiku.verifyLines()).toEqual(true);
  })

})
