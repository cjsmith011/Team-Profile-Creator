
function Employee(role) {
    this.role = role;
      
      if (this.role === 'intern') {
        return true;
    } else {
        return false;
    };
}


module.exports = Employee;