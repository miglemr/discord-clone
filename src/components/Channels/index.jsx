import Channel from './Channel'

function Channels({ channels, currentChannel, onChannelClick }) {
  return (
    <div>
      <header>
        <h6 className="text-secondary text-uppercase font-weight-bold mt-4">Text channels</h6>
      </header>
      <div>
        <ul className="ps-0">
          {channels.map(channel => {
            const isActive = currentChannel === channel.name

            return (
              <Channel
                key={channel.id}
                isActive={isActive}
                name={channel.name}
                onChannelClick={() => onChannelClick(channel.name)}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Channels
