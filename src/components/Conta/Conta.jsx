import { useContext, useEffect, useState } from 'react'
import styles from './Conta.module.css'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Dashboard from '../../img/dashboard.svg?react'
import Bars from '../../img/bars.svg?react'
import Plus from '../../img/plus.svg?react'
import Exit from '../../img/exit.svg?react'
import UserContext from '../../UserContext'
import Head from '../Head'

const Conta = () => {
  const [title, setTitle] = useState("")
  const { sair } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    switch(location.pathname) {
      case "/conta" : 
        setTitle("Minha Conta")
        break
      case "/conta/estatisticas":
        setTitle("Estatísticas")
        break
      case "/conta/postar":
        setTitle("Poste Sua Foto")
        break
      default:
        throw new Error("Rota Inválida")
    }
    
  }, [location])

  return (
    <section className="container">
      <Head title="Minha Conta | Dogs" description="" />
      <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <nav className={styles.nav}>
          <NavLink to="/conta" end><Dashboard /></NavLink>
          <NavLink to="/conta/estatisticas"><Bars /></NavLink>
          <NavLink to="/conta/postar"><Plus /></NavLink>
          <button onClick={sair}><Exit /></button>
        </nav>
      </header>
      <Outlet />
    </section>
  )
}

export default Conta