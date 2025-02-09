import React, { useEffect, useState } from 'react'
import FeedList from '../Feed/FeedList'
import { useLogin } from '../../hooks/useLogin'

const ContaFeed = () => {
  const [userId, setUserId] = useState(null)
  const { getUser } = useLogin()

  useEffect(() => {
    async function setUser(){
      const user = await getUser()
      setUserId(user.id)
    }
    setUser()
  }, [])
  
  if(!userId) return null

  return (
    <FeedList user={userId} />
  )
}

export default ContaFeed