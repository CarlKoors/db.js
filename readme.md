* DB.js
  Hello! Db.js is a simple to setup and use database system.<br>
You can use it with anything nodejs. Its designed to seperate each<br>
key into it's own json file. Allowing multiple keys to be written to at<br>
the same time without risking Database truncation.

> File Structure
<br>
* Project Folder<br>
  - Databases (Required Folder)<br>
  - Modules (or whatever, it doesnt matter)<br>
    - db.js<br>
  - main.js<br>
 <br>
  
  require('*WHATEVER FOLDER\db.js*');
  
  ** Documentation
    Let's assume that db.js is stored in Modules, and <br>
  main.js is stored in the subdirectory.
  <br>
  > How to create a database
  <br>
  
