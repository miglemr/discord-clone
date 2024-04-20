const { generateRandomId } = require('./utils.cjs')

module.exports = {
  initializeChannel: name => {
    const channel = {
      id: generateRandomId(),
      name,
      messages: [],
    }

    return channel
  },
}
