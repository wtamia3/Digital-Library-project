const request = require('supertest');
const app = require('../app');

describe('Books Controller', () => {
    it('should create a new book', async () => {
        const res = await request(app)
            .post('/books')
            .send({ title: '1984', author: 'George Orwell', genre: 'Fiction' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('1984');
    });
});
