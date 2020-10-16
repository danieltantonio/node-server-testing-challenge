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
            .send({ name: 'Not Daniel' })   
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.status).toBe(201);
                expect(res.body[1].name).toBe("Not Daniel");
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

    describe('DELETE /', () => {
        it('Should delete a user from memory', () => {
            return supertest(server)
            .delete('/1')
            .then(res => {
                expect(res.status).toBe(202);
                expect(res.body.length).toBe(1);
            })
        });

        it('Should return a 400 error if user is not found', () => {
            return supertest(server)
            .delete('/126378')
            .then(res => {
                expect(res.status).toBe(400);
            })
        });

    })
});