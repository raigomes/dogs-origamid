import React, { useEffect, useState } from 'react'
import Feed from '../Feed/Feed'
import { useLogin } from '../../hooks/useLogin'
import { PHOTOS_QUERY_GET } from '../../api/services'

const INITIAL_PAGE = 1

const ContaFeed = () => {
  const [photos, setPhotos] = useState(null)
  const { getUser } = useLogin()

  useEffect(() => {
    getPhotos()
  }, [])

  async function getPhotos() {
    const user = await getUser()
    const { endpoint } = PHOTOS_QUERY_GET(INITIAL_PAGE, user.id);
    const response = await fetch(endpoint);
    const data = await response.json()
    setPhotos(data)
  }
  
  return (
    <div>
        <Feed photos={photos} />
    </div>
  )
}

export default ContaFeed