const supertest = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('Should return with 200', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
});