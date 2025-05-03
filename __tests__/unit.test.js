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

test('invalid number: no \'-\'', () => {
    expect(isPhoneNumber('0000000000')).toBe(false);
});

test('invalid number: letters', () => {
    expect(isPhoneNumber('aaa-aaa-aaaa')).toBe(false);
});


// isEmail tests
test('valid email', () => {
    expect(isEmail('gmail@gmail.com')).toBe(true);
});

test('valid email', () => {
    expect(isEmail('u_c_s_d@ucsd.edu')).toBe(true);
});

test('invalid email: no @', () => {
    expect(isEmail('yal103ucsd.edu')).toBe(false);
});

test('invalid email: no domain', () => {
    expect(isEmail('gmail@.com')).toBe(false);
});