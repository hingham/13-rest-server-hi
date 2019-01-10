'use strict';

let categories = require('../models/categories.js');
let sanitize = require('../models/sanitize.js');


describe('categories', () =>{
  describe('sanitize', ()=>{
    it('accepts proper data', ()=>{
      let fakeData = {
        name: 'banana',
        display: 'banana',
        description: 'yellow',
        id: '10'
      }

      let result = sanitize(fakeData);
      expect(result.name).toEqual('banana');
    });

    it('does not accept improper data', ()=>{

    });

  });
});

