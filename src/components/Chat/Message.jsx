import dateFormat from 'dateformat'

function Message({ username, timestamp, content }) {
  const date = dateFormat(timestamp, "yyyy'-'mm'-'dd' 'HH':'mm")

  const avatarUrl = `https://api.dicebear.com/8.x/bottts/svg?size=32&seed=${username}`

  return (
    <div className="row m-2">
      <img src={avatarUrl} alt="avatar" className="col-auto align-self-start p-0 me-1" />
      <div className="col p-2 bg-dark rounded">
        <div className="d-flex justify-content-between mb-1">
          <div>
            <span className="me-2">{username}</span>
            <span className="text-secondary" style={{ fontSize: '0.7rem' }}>
              {date}
            </span>
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
