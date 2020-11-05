const fs = require('fs');

// We add a newline character to the command line argument
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
