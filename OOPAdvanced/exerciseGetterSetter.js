class User {
  constructor (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  set fullName (name) {
    const [firstName, lastName] = name.split(/\s+/);
    this.firstName = firstName ?? '';
    this.lastName = lastName ?? '';
  }
}