import { removeOppositeChars } from './challenge-2';

describe('getClosestValue', () => {
    it('should remove opposite, adjacent characters', () => {
        expect(removeOppositeChars('aA')).toBe('');
    });

    it('should remove opposite, adjacent characters recursively', () => {
        expect(removeOppositeChars('abBA')).toBe('');
    });

    it('should not remove opposite, but different characters', () => {
        expect(removeOppositeChars('abAB')).toBe('abAB');
    });

    it('should not remove characters of the same case', () => {
        expect(removeOppositeChars('aabAAB')).toBe('aabAAB');
    });

    it('should return the correct solution for "dabAcCaCBAcCcaDA"', () => {
        expect(removeOppositeChars('dabAcCaCBAcCcaDA')).toBe('dabCBAcaDA');
    });
});
