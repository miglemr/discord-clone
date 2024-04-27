import Message from './Message'
import Input from './Input'

function Chat({ messages, currentChannel }) {
  return (
    <div className="col-12 col-sm-6 py-4" style={{ backgroundColor: '#36393e' }}>
      <div className="d-flex flex-column justify-content-between" style={{ height: '88vh' }}>
        <div>
          <header>
            <span className="pe-1 text-secondary d-inline">#</span>
            <h5 className="d-inline">{currentChannel}</h5>
          </header>
        </div>
        <div className="scrollbar my-2">
          {messages.map(message => {
            return (
              <Message
                key={message.id}
                username={message.username}
                timestamp={message.timestamp}
                content={message.content}
              />
            )
          })}
        </div>
      </div>
      <Input currentChannel={currentChannel} />
    </div>
  )
}

export default Chat
