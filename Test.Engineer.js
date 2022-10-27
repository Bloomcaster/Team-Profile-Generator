
const Engineer = require ('../lib/Engineer');
const engineer = new Engineer('tahlia', '007', 'tbolden13@gmail.com', '123');

test('check value for following objects', () => {
    expect(engineer.name).toBe('tahlia');
    expect(engineer.id).toBe('007');
    expect(engineer.email).toBe('tbolden13@gmail.com');
    expect(engineer.officeNumber).toBe('007');
});

test('check value from getName()', () => {
    expect(engineer.getName ()).toBe('tahlia');
});

test('check value from getId()', () => {
    expect(engineer.getId ()).toBe('007');
});

test('check value from email()', () => {
    expect(engineer.email).toBe('tbolden13@gmail.com');
});

test('check value for officeNumber()', () => {
    expect(engineer.officeNumber).toBe('123');
});