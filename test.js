const app = require('supertest')(require('./app'));
const expect = require('chai').expect;

describe('our app', ()=> {
  describe('GET /', ()=> {
    it('returns hello world', ()=> {
      return app.get('/')
        .expect(200)
        .then( response => {
          expect(response.text).to.equal('hello world!');
        });
    });
  });
});
