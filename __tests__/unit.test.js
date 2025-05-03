// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('valid number: xxx-xxx-xxxx', () => {
    expect(isPhoneNumber('000-000-0000')).toBe(true);
});

test('valid number: (xxx) xxx-xxxx', () => {
    expect(isPhoneNumber('(000) 000-0000')).toBe(true);
});

test('invalid number (no \'-\')', () => {
    expect(isPhoneNumber('0000000000')).toBe(false);
})

test('invalid number (letters)', () => {
    expect(isPhoneNumber('aaa-aaa-aaaa')).toBe(false);
})
