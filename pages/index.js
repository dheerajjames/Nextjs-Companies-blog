import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Main from './Main/index'

export default function Home(props) {
  return (
    <div className="main">
      {/* <Nav /> */}
      <Main />
   </div>
  )
}

