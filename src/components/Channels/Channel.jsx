import classNames from 'classnames'

function Channel({ isActive, name, onChannelClick }) {
  const listItemClasses = classNames({
    active: isActive,
  })

  const buttonClasses = classNames('d-flex justify-content-start bg-transparent border-0 w-100', {
    'text-secondary': !isActive,
    'text-light': isActive,
  })
  return (
    <li className={listItemClasses}>
      <button type="button" className={buttonClasses} onClick={onChannelClick}>
        <span className="text-secondary me-1">#</span>
        {name}
      </button>
    </li>
  )
}

export default Channel
