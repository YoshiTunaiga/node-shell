const fs = require('fs');

module.exports = function () {
  // process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
    const lscmd = data.toString().trim();
    // only if ls has been called
    if (lscmd === "ls") {
      fs.readdir('./', 'utf8', (err, files) => {
        // console.log(files);
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join('  '));
          process.stdout.write("\nprompt > ");
        }
      })
    }
  })
};

