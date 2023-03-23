import React from 'react'
import styles from '@/styles/toolbar.module.css'
import Link from 'next/link'



const Category = () => {
  return (
    <div className={styles.filter}>
         <h3 class={styles.hvr}><Link href="/feed/1">All</Link></h3>
         <h3 class={styles.hvr}><Link href="/business/1">Business</Link></h3>
         <h3 class={styles.hvr} ><Link href="/sports/1">Sports</Link></h3>
         <h3 class={styles.hvr} ><Link href="/entertainment/1">Entertainment</Link></h3>
         <h3 class={styles.hvr} ><Link href="/technology/1">Technology</Link></h3>
    </div>
  )
}
export default Category;