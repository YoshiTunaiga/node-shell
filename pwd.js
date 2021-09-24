module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    // only if pwd has been called
    if (cmd === "pwd") {
      process.stdout.write(__dirname);
      process.stdout.write('\nprompt > ');
    }
  })
};
