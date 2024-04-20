import { useState } from 'react'

import { socket } from '@/libs/socket'

function Input({ currentChannel }) {
  const [content, setContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const timestamp = new Date()

    socket.emit('message:channel:send', currentChannel, timestamp, content)

    setContent('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex">
        <label htmlFor="message" />
        <input
          type="text"
          className="form-control flex-grow-1 me-1"
          id="message"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Send
        </button>
      </div>
    </form>
  )
}

export default Input
