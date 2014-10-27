function createId() {
  return Math.floor((Math.random() * 10000 + 1) % 10000);
}

module.exports = createId;