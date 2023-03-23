import React from 'react'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link';

function error() {
  return (
    <div className={styles.main}>
       <h1>Error! 404. Page Not Found</h1> 
    
    <Link href="/"><Button className={styles.bt} variant="contained">Contained</Button></Link>  
      
    </div>
  )
}

export default error;