import { discout } from './src/utils';
import request from 'supertest';
import app from './src/app';

describe('APP', () => {
    it('discout kitna milega', () => {
        const Dis = discout(100, 10);
        expect(Dis).toBe(10);
    });
    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
