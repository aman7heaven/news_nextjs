import styles from '@/styles/Home.module.css'
import React from 'react'
import Navbar from '@/components/Navbar'

function Home() {
  return (
    <div className='page-container'>
        <Navbar/>
        
      <div className={styles.main}>
      
        <h1>Welcome to NewsWave</h1>

        <h3>Your one stop destination for latest news articles</h3>
      </div>

    </div>
  )
}

export default Home