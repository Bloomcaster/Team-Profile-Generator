
const Employee = require ('../lib/Emloyee');
const employee = new Employee ('tahlia', '007', 'tbolden13@gmail.com');

test ('testing contructor values' () = {
    expect (employee.name).toBe('tahlia');
    expect (employee.id).toBe('007');
    expect (employee.email).toBe('tbolden13@gmail.com');
});

test ('checking value from get')