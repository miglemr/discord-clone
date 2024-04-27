import User from './User'

function Users({ users }) {
  return (
    <div className="col d-none d-sm-block">
      <header>
        <h6 className="text-secondary text-uppercase mt-4">Users</h6>
      </header>
      <ul className="d-flex flex-column ps-0">
        {users.map(user => (
          <User key={user.userId} username={user.username} isConnected={user.connected} />
        ))}
      </ul>
    </div>
  )
}

export default Users
