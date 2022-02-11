
function Employee(name = '') {
    this.name - name;

    this.role = ['Employee', 'Intern', 'Engineer', 'Manager'];
    this.id = id;
    this.email = email;

    //returns an object with employee properties
    Employee.prototype.getName = function() {
        return {
            name: this.name,
        }
    }

    Employee.prototype.getId = function() {
        return {
            id: this.id,
        }
    }

    Employee.prototype.getEmail = function() {
        return {
            email: this.email,
        }
    }

    Employee.prototype.getRole = function() {
        return {
            role: this.role,
        }
    }
}


module.exports = Employee;