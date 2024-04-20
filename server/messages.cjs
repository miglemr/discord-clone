const { generateRandomId } = require('./utils.cjs')

module.exports = {
  buildMessage: (session, timestamp, content) => {
    return {
      id: generateRandomId(),
      userId: session.userId,
      username: session.username,
      timestamp,
      content,
    }
  },
}
