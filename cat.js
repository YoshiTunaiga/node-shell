const fs = require('fs');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const catCmd = data.toString().trim().split(' ');
    // only if cat has been called
    if (catCmd[0] === 'cat') {
      fs.readFile(`/Users/gisseldiaz/Desktop/Fullstack/Junior-Exercises/node-shell/${catCmd[1]}`, 'utf8', (err, data) => {
        if (err) throw err;
        else console.log(data)
      } )
    }
  })
}