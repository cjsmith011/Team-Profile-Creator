const Engineer = require('../lib/Engineer');

test('creates a new engineer', () => {
    const employee = new Engineer('engineer');

    expect(employee.role).toBe('engineer');
    
});