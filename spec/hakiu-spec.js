import { Word } from './../src/word.js';
import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  // it('should count the number of syllables in a sentence', function() {
  //   let newHaiku = new Haiku("bob bob bob bob bob;bob bob bob bob bob bob bob;bob bob bob bob bob");
  //   expect(newHaiku.verifyLines()).toEqual(true);
  // })

  it('test 2 should count the number of syllables in a haiku', function() {
    let newHaiku = new Haiku("frog in pond his cute;leave him alone all you kid;frog need their nice boot");
    expect(newHaiku.verifyLines()).toEqual(true);
  })
  //
  // it('test 3 should fail the test for haiku due to lack of syllables', function() {
  //   let newHaiku = new Haiku("frog pond is cute;leave him alone all you kids;frogs need their nice shoes");
  //   expect(newHaiku.verifyLines()).toEqual(false);
  // })
  //
  // it('test 4 should count that plural words are checked within haiku', function() {
  //   let newHaiku = new Haiku("frog in pond is cute;leave him alone all you kids;falling leaves damn yard");
  //   expect(newHaiku.verifyLines()).toEqual(true);
  // })
  it('test 5 should count the number of syllables in a haiku', function() {
    let newHaiku = new Haiku("i am nobody;a red sinking autumn sun;took my name away");
    expect(newHaiku.verifyLines()).toEqual(true);
  })

})
