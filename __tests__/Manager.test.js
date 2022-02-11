const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('employee');

    expect(employee.role).toBe('employee');
    
});