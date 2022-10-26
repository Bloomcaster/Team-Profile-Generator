
const Manager = require('../lib/Manager');
const manager = new Manager('tahlia', '007', 'tbolden13@gmail.com', '123');

test('check value for manager object', () => {
    expect(manager.name).toBe('tahlia');
    expect(manager.Id).toBe('007');
    expect(manager.email).toBe('tbolden13@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('check value for getName()', () => {
    expect(manager.getName ()).toBe('tahlia');
});

test('check value for getId()', () => {
    expect(manager.getId ()).toBe('007');
});

test('check value for getEmail()', () => {
    expect(manager.getEmail ()).toBe('tbolden13@gmail.com');
});

test('check value for getOfficeNumber()', () => {
    expect(manager.getOfficeNumber ()).toBe('123');
});

test('check value for getRole()', () => {
    expect(manager.getRole ()).toBe('Manager');
});