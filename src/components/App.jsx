import { useEffect, useState } from 'react'

import Setup from '@/components/Setup'
import Channels from '@/components/Channels'
import Users from '@/components/Users'
import Chat from '@/components/Chat'
import Buttons from '@/components/Buttons'

import { socket } from '@/libs/socket'
import { WELCOME_CHANNEL } from '@/libs/constants'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [channels, setChannels] = useState([])
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [currentChannel, setCurrentChannel] = useState(WELCOME_CHANNEL)

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('session'))

    if (!session) return

    socket.auth = {
      sessionId: session.sessionId,
    }

    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (channels.length === 0) return

    const messages = channels.find(channel => channel.name === currentChannel).messages

    setMessages(messages)
  }, [channels, currentChannel])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onSession(session) {
      sessionStorage.setItem('session', JSON.stringify(session))
    }

    function onChannels(channels) {
      setChannels(channels)
    }

    function onUsers(users) {
      setUsers(users)
    }

    function onMessage(channel, message) {
      setChannels(prevChannels => {
        return prevChannels.map(prevChannel => {
          if (prevChannel.name === channel) {
            return {
              ...prevChannel,
              messages: [...prevChannel.messages, message],
            }
          } else {
            return prevChannel
          }
        })
      })
    }

    function onUserJoin(user) {
      setUsers(prevUsers => [...prevUsers, user])
    }

    function onUserDisconnect(user) {
      setUsers(prevUsers =>
        prevUsers.map(prevUser => {
          if (prevUser.userId === user.userId) {
            return user
          } else {
            return prevUser
          }
        }),
      )
    }

    function onUserLeave(user) {
      setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.userId !== user.userId))
    }

    socket.on('connect', onConnect)
    socket.on('session', onSession)
    socket.on('channels', onChannels)
    socket.on('users', onUsers)
    socket.on('message:channel', onMessage)
    socket.on('user:join', onUserJoin)
    socket.on('user:disconnect', onUserDisconnect)
    socket.on('user:leave', onUserLeave)

    return () => {
      socket.off('connect', onConnect)
      socket.off('session', onSession)
      socket.off('channels', onChannels)
      socket.off('message:channel', onMessage)
      socket.off('user:join', onUserJoin)
      socket.off('user:disconnect', onUserDisconnect)
      socket.off('user:leave', onUserLeave)
    }
  }, [])

  if (!isConnected) {
    return (
      <div className="container">
        <Setup />
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col flex-column justify-content-between d-none d-sm-flex">
          <Channels
            channels={channels}
            currentChannel={currentChannel}
            onChannelClick={setCurrentChannel}
          />
          <Buttons onDisconnect={() => setIsConnected(false)} />
        </div>
        <Chat messages={messages} currentChannel={currentChannel} />
        <Users users={users} />
      </div>
    </div>
  )
}

export default App
