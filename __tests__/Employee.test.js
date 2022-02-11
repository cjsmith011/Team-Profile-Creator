const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('intern', '10');

    expect(employee.role).toBe('intern');
    expect(employee.id).toEqual(any(Number));
});