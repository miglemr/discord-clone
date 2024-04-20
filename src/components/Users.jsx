import classNames from 'classnames'

function Users({ users }) {
  return (
    <div className="col d-none d-sm-block">
      <header>
        <h6 className="text-secondary text-uppercase mt-4">Users</h6>
      </header>
      <ul className="d-flex flex-column ps-0">
        {users.map(user => {
          const emojiClasses = classNames('ms-1', {
            offline: !user.connected,
          })

          return (
            <li key={user.userId} className="d-flex align-items-center mb-1">
              <span>{user.username}</span>
              <span className={emojiClasses} style={{ fontSize: '0.6em' }}>
                🟢
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Users
