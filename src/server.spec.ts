import { myFunction } from "./server";

describe('Development Environment Configuration', () => {
    it('should return a myFunction string ', () => {
        expect(myFunction()).toBe('Configured environment OK');
    });
});