const { models, syncAndSeed } = require('../../server/db');
const { User } = models;
const expect = require('chai').expect;

describe('models', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('User', ()=> {
    it('there are 3 users', ()=> {
      return User.findAll()
        .then( users => expect(users.length).to.equal(3));
    });
  });
});
