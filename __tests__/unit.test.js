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

// isStrongPassword tests
test('valid password', () => {
    expect(isStrongPassword('aaa0')).toBe(true);
});

test('valid password: max length', () => {
    expect(isStrongPassword('abcdEfGhIjKlMnO')).toBe(true);
});

test('invalid password: too short', () => {
    expect(isStrongPassword('a12')).toBe(false);
});

test('invalid password: starts with number', () => {
    expect(isStrongPassword('1abcde')).toBe(false);
});

// isDate tests
test('valid date', () => {
    expect(isDate('01/01/2025')).toBe(true);
});

test('valid date', () => {
    expect(isDate('1/1/2025')).toBe(true);
});

test('invalid date: wrong separator', () => {
    expect(isDate('01-01-2025')).toBe(false);
});

test('invalid date: wrong year length', () => {
    expect(isDate('01-01-25')).toBe(false);
});

// isHexColor tests
test('valid hex color: 6 digits', () => {
    expect(isHexColor('afe')).toBe(true);
});

test('valid hex color: 3 digits', () => {
    expect(isHexColor('aabbcc')).toBe(true);
});

test('invalid hex color: too long', () => {
    expect(isHexColor('aabbccc')).toBe(false);
});

test('invalid hex color: wrong character', () => {
    expect(isHexColor('zzxxyy')).toBe(false);
});