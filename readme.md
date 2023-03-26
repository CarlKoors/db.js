# DB.js

  Hello! Db.js is a simple to setup and use database system.<br>
You can use it with anything nodejs. Its designed to seperate each<br>
key into it's own json file. Allowing multiple keys to be written to at<br>
the same time without risking Database truncation.

>File Structure

* Project Folder
  - Databases (Required Folder)
  - Modules (or whatever, it doesnt matter)
    - db.js
  - main.js
  
require('*WHATEVER FOLDER\db.js*');
  
## Documentation

  Let's assume that db.js is stored in Modules, and <br>
main.js is stored in the subdirectory.

>How to create a database

This is actually really simple as the create function only<br>
takes one variable and thats the name of the database as a <br>
string.
Example
main.js
```
const db = require('./Modules/db.js');
db.create('Balances');
```
>Adding your first entry.

Entries are stored as Key-Value pairs. The key pointing to a file,<br>
and the value being a json object. The function you use is edit as it<br>
can be used to create and edit key values.
Example
main.js
```
const db = require('./Modules/db.js');
db.create('Balances');
// remember the edit function only takes strings
let jsonObject = {
  "Checking": "100",
  "Savings": "1"
};
db.edit('Balances', 'Bob', jsonObject);
```
You can also do it in a one liner like this.
```
const db = require('./Modules/db.js');
db.create('Balances');
// one liner
db.edit('Balances', 'Bob', JSON.stringify({"Checking": "100","Savings": "1"}));
```
>Modifying and Reading Values

This is super simple as the parse function returns the json object<br>
which is stored in the Key file.
```
let bobsBalance = db.parse('Balances', 'Bob');
```
You can now modify the json object like this.
```
bobsBalance.Checking = bobsBalance.Checking+1;
// or even this way
bobsBalance['Checking']+=1;
```
REMEMBER TO SAVE YOUR WORK
```
db.edit('Balances', 'Bob', bobsBalance);
```
>Checking if a Database or Key exists.

This is super simple to check if a key exists.
```
db.exists('Balances', 'Tony'); // would return false
db.exists('notarealdb', 'Bob'); // would return false
db.exists('Balances', 'Bob'); // would return true
```
>How to remove a key and drop a database.
 
Again super basic function with only string params.
```
// to remove a specific key.
db.remove('Balances', 'Bob'); // Bobs gone
// to remove an entire database.
db.drop('Balances');
```
Thats it you can now build a huge database with ease.
