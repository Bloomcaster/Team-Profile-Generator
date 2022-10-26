
const Intern = require ('../lib/Intern');
const intern = new Intern('tahlia', '007', 'tbolden13@gmail.com', 'UW');

test('check value for Engineer object', () => {
    expect(intern.name).toBe('tahlia');
    expect(intern.id).toBe('007');
    expect(intern.email).toBe('tbolden13@gmail.com');
    expect(intern.school).toBe('UW');
});

test('check value from getName()', () => {
    expect(intern.getName ()).toBe('tahlia');
});

test('check value from getId()', () => {
    expect(intern.getId ()).toBe('007');
    
});

test('check value from getEmail()', () => {
    expect(intern.getEmail ()).toBe('tbolden13@gmail.com');

});

test('check value from getSchool()', () => {
    expect(intern.getSchool ()).toBe('UW');

});