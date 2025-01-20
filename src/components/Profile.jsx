import React from 'react'
import Feed from './Feed/Feed'
import { useParams } from 'react-router-dom';
import Head from './Head';

const Profile = () => {
    const params = useParams();

  return (
    <section className="container mainSection">
        <Head title={`${params.name} | Dogs`} description="" />
        <h1 className="title">{params.name}</h1>
        <Feed />
    </section>
  )
}

export default Profile