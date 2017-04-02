function User(id, name) {
  this.id = id;
  this.name = name;
}

User.prototype.getUser = function() {
  return {id: this.id, name: this.name};
}

User.prototype.group = {id: 'group01', name: 'friend'};

User.prototype.printUser = function() {
  console.log('user: %s, group: %s', this.name, this.group.name);
}

module.exports = new User('test01', 'kei');