const Intern = require('../lib/Intern');

test('creates a new intern', () => {
    const employee = new Intern('intern');

    expect(employee.role).toBe('intern');
    
});