const {Capitalize, ReverseString, Calculator} = require('./tests');

test('capitalize of the first letter', () => {
    expect(Capitalize("hello")).toBe("Hello");
});

test('reverse of the string', () => {
    expect(ReverseString("hello")).toBe('olleh');
});

test('calculator add(5,2)', () => {
    expect(Calculator.add(5,2)).toBe(7);
});

test('calculator substruct(5,2)', () => {
    expect(Calculator.substruct(5,2)).toBe(3);
});

test('calculator multiply(5,2)', () => {
    expect(Calculator.multiply(5,2)).toBe(10);
});

test('calculator divide(6,2)', () => {
    expect(Calculator.divide(6,2)).toBe(3);
});

test('calculator divide(6,0)', () => {
    expect(Calculator.divide(6,0)).toBe(false);
});