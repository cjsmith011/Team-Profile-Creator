const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Joe', 'intern', '2', 'joe@yahoo.com');

    expect(employee.name).toBe('Joe');
    expect(employee.role).toBe('intern');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
    
});