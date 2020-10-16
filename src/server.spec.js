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

    describe('POST /', () => {
        it('Should post a user to memory.', () => {
            return supertest(server)
            .post('/')
            .send({ name: 'Daniel' })   
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.status).toBe(201);
            });
        })

        it('Should return a 400 error if missing field', () => {
            return supertest(server)
            .post('/')
            .send({})
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.status).toBe(400);
            });
        })
    })
});