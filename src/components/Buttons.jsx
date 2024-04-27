import { socket } from '@/libs/socket'

function Buttons({ onDisconnect }) {
  function handleDisconnect() {
    socket.disconnect()

    onDisconnect()
  }

  function handleLeave() {
    socket.emit('user:leave')

    sessionStorage.clear('session')

    onDisconnect()
  }

  return (
    <div className="mb-4">
      <button className="btn btn-sm btn-outline-light me-1" onClick={handleDisconnect}>
        Disconnect
      </button>
      <button className="btn btn-sm btn-outline-light" onClick={handleLeave}>
        Leave
      </button>
    </div>
  )
}

export default Buttons
