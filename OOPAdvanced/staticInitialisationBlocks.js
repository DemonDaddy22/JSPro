class MyDatabase {
  static {
    // This gets triggered when the CLASS IS INITIALISED, and not with every instance initialisation
    // We can use this to set up some complex logic or bootstrapping the system

    // this refers to the constructor object of the class

    this.makeConnection();
  }

  static makeConnection () {
    console.log('Connection established');
  }
}

/**
 * eg.
 * 
 * const db1 = new MyDatabase();
 * const db2 = new MyDatabase();
 */