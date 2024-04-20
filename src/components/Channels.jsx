import classNames from 'classnames'

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

            const listItemClasses = classNames({
              active: isActive,
            })

            const buttonClasses = classNames(
              'd-flex justify-content-start bg-transparent border-0 w-100',
              {
                'text-secondary': !isActive,
                'text-light': isActive,
              },
            )
            return (
              <li key={channel.id} className={listItemClasses}>
                <button
                  type="button"
                  className={buttonClasses}
                  onClick={() => onChannelClick(channel.name)}
                >
                  <span className="text-secondary me-1">#</span>
                  {channel.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Channels
