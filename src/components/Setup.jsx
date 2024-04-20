import { socket } from '@/libs/socket'

function Setup() {
  function handleSubmit(e) {
    e.preventDefault()

    const session = JSON.parse(sessionStorage.getItem('session'))

    if (session) {
      socket.auth = {
        userId: session.userId,
        sessionId: session.sessionId,
        username: e.target.name.value,
      }
    } else {
      socket.auth = {
        username: e.target.name.value,
      }
    }

    socket.connect()
  }
  return (
    <div className="row vh-100 align-items-center justify-content-center">
      <form
        className="col-sm-6 col-lg-3 p-4 rounded"
        style={{ backgroundColor: '#36393e' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Enter username</label>
          <input type="text" id="name" className="form-control my-4" />
          <button type="submit" className="btn btn-dark">
            Connect
          </button>
        </div>
      </form>
    </div>
  )
}

export default Setup
