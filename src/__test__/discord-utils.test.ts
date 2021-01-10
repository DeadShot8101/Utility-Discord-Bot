import {
  isCustomEmoji,
  isEmoji,
  getResolvableEmoji,
} from '../discord-utils';

describe('discord-utils', () => {
  describe('isCustomEmoji', () => {
    it('works for regular', () => {
      expect(isCustomEmoji('<:foo_bar:1234>')).toBe(true);
    });
    it('works for animated', () => {
      expect(isCustomEmoji('<a:foo_bar:1234>')).toBe(true);
    });
    it('rejects unicode emojis', () => {
      expect(isCustomEmoji('👍')).toBe(false);
    });
  });
  describe('isEmoji', () => {
    it('works for regular custom', () => {
      expect(isEmoji('<:foo_bar:1234>')).toBe(true);
    });
    it('works for animated custom', () => {
      expect(isEmoji('<a:foo_bar:1234>')).toBe(true);
    });
    it('works for unicode emojis', () => {
      expect(isEmoji('👍')).toBe(true);
    });
    it('rejects random strings', () => {
      expect(isEmoji('foobar')).toBe(false);
    });
  });
  describe('getResolvableEmoji', () => {
    it('works for regular custom emojis', () => {
      expect(getResolvableEmoji('<:foo_bar:1234>')).toBe('1234');
    });
    it('works for animated custom emojis', () => {
      expect(getResolvableEmoji('<:foo_bar:1234>')).toBe('1234');
    });
    it('works for unicode emojis', () => {
      expect(getResolvableEmoji('👍')).toBe('👍');
    });
  });
});
