import classNames from 'classnames'

function User({ username, isConnected }) {
  const emojiClasses = classNames('ms-1', {
    offline: !isConnected,
  })

  return (
    <li className="d-flex align-items-center mb-1">
      <span>{username}</span>
      <span className={emojiClasses} style={{ fontSize: '0.6em' }}>
        🟢
      </span>
    </li>
  )
}

export default User
