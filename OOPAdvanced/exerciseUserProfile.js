/*
Create a class UserProfile that encapsulates a user's profile information.

This class should have fields for username, email, and birthdate.
Use getters and setters to validate that the username is a non-empty string,
the email includes an '@' symbol, and the birthdate is a valid date string.

If the username is an empty string or not a string - throw an error with
the message of 'Invalid username.'

If the email does not include a @ character - throw an error with
the message of 'Invalid email.'

If the birthdate is not a valid date string (for example '1990-01-01') - throw an error with
the message of 'Invalid birthdate.'
*/

class UserProfile {
  #username;
  #email;
  #birthdate;

  constructor (username, email, birthdate) {
    this.#username = username;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  get username () {
    return this.#username;
  }

  get email () {
    return this.#email;
  }

  get birthdate () {
    return this.#birthdate;
  }

  set username (value) {
    if (typeof value !== 'string' || !value) {
      throw new Error('Invalid username.');
    }
    this.#username = value;
  }

  set email (value) {
    if (typeof value !== 'string' || !value?.includes('@')) {
      throw new Error('Invalid email.');
    }
    this.#email = value;
  }

  set birthdate (value) {
    if (typeof value !== 'string' || isNaN(new Date(value).getTime())) {
      throw new Error('Invalid birthdate.');
    }
    this.#birthdate = value;
  }
}