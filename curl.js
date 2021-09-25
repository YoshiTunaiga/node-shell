const request = require('request');
module.exports = function () {
  process.stdin.on('data', (data) => {
    const curlCmd = data.toString().trim().split(' ');
    // console.log(curlCmd[0]);
    // console.log(curlCmd[1]);
    // only if cat has been called
    if (curlCmd[0] === 'curl') {
      request(curlCmd[1], function (_, _, body) {
        console.log(body);
        process.stdout.write("\nprompt > ");
      })
    }
  })
}
