function charGenerator () {
  return Math.round((Math.random() * 128 + 1) % 128);
}

module.exports = charGenerator;

