
const Employee = require ('../lib/Emloyee');
const employee = new Employee ('tahlia', '007', 'tbolden13@gmail.com');

test ('testing contructor values', () => {
    expect(employee.name).toBe('tahlia');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('tbolden13@gmail.com');
});

test ('checking values from constructor', () => {
    expect(employee.name).toBe('tahlia');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('tbolden13@gmail.com');
});

test('check value from getName ()', () => {
    expect(employee.getName ()).toBe('tahlia');
});

test('check value from getId ()', () => {
    expect(employee.getId ()).toBe('007');
});

test('check value from getEmail ()', () => {
    expect(employee.getEmail ()).toBe('tbolden13@gmail.com');
});

test('check value from getRole ()', () => {
    expect(employee.getRole ()).toBe('Employee');
});