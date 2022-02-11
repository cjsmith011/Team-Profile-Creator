function Employee(role) {
    this.role = role;
      
      if (this.role === 'employee') {
        return true;
    } else {
        return false;
    };
}


module.exports = Employee;