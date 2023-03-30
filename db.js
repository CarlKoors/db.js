// made by Carl Koors
// leaving  this would be nice
// since your here should I make this into a website so its even easier on beginners?

fs = require('fs'); // we are using the file stream since its the simplist way to mess with the file system.
path = require('path'); // because aparrently nodejs randomly forgets what dir its in.

// I have the return trues because I am not 100% sure the fs.exist, rmdir, etc, only return true or false incase of err handling.

module.exports.parse = (Database, Key) => { 
  delete require.cache[require.resolve(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'))]; // to prevent caching of each db in the require cache (this would prevent auto updating)
  return JSON.parse(JSON.stringify(require(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json')))); // returns the whole object rather than a specific key.
}

module.exports.exists = (Database, Key) => {
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false; // sometimes you try to look at a key which the db doesnt even exist.
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'))) return false; // returns the json object which is the value in the key-value db pair.
  return true;
}

module.exports.edit = (Database, Key, Value) => {
  fs.writeFileSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'),  JSON.stringify(Value, null, 2)); // saves the Value input as a json object
  return true;
}

module.exports.drop = (Database) => {
  fs.readdirSync(path.join(__dirname, '../Databases/'+Database)).forEach(file => { // this is because in linux you cant use rmdir to remove a file... IK its annoying
    if (file.includes('.')) fs.unlinkSync(path.join(__dirname, '../Databases/'+Database+'/' + file));
  });
  fs.rmdirSync(path.join(__dirname, '../Databases/'+Database)); // then we can delete the whole database structure
  return true;
}

module.exports.remove = (Database, Key) => { // in case you want to prune a db you could iterate throught the db and "remove" the null object values.
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false;
  fs.unlinkSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'));
  return true;
}

module.exports.create = (Database) => { // this just initalizes the structure ( aka the folder )
  if (fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false;
  fs.mkdirSync(path.join(__dirname, '../Databases/'+Database));
  return true;
}
