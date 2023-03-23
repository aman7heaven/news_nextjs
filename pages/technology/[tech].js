import React from 'react'
import axios from 'axios'
import styles from '@/styles/Feed.module.css'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import  Category  from '../../components/Category'
import {SearchBar} from '../../components/SearchBar'

const Feed = ({pageNumber, articles}) => {
    const router=useRouter();
  return (
    
    <div>
     <Navbar/>
     <Category/>
     <SearchBar/>
     <div className={styles.main}>
      {articles.map((article,index)=>{
         return (
           <div key={index} className={styles.post}>
             <h1 onClick={()=>{window.location.href=article.url}}>{article.title}</h1>
             <p>{article.description}</p>

        {(!!article.urlToImage && <img src={article.urlToImage}/>)}
        <hr/>
           </div>
         )
      })}
    </div>
    <div className={styles.paginator}>
        <div onClick={()=>{
            if(pageNumber>1){
              router.push(`/feed/${pageNumber-1}`).then(()=>window.scrollTo(0,0));
            }
        }}  className={pageNumber===1?styles.disabled:styles.active}>
            Previous Page
        </div>
        <div>
            #{pageNumber}
        </div>

        <div onClick={()=>{
            if(pageNumber<5){
              router.push(`/feed/${pageNumber+1}`).then(()=>window.scrollTo(0,0));
            }
        }}  className={pageNumber===5?styles.disabled:styles.active}>
            Next Page
        </div>
        
    </div>
    </div>
  )
}

export const getServerSideProps=async pageContext=>{
    const pageNumber=Number(pageContext.query.tech);
   

    if(!pageNumber || pageNumber<1 || pageNumber>5){
        return{
            props:{
                articles:[],
                pageNumber:1,
            }
        }
    }

    const apiResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=5&page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.key}`,
        },
      }
    );

    const { articles } = apiResponse.data;

    return {
      props: {
        articles,
        pageNumber,
      },
    };

};

export default Feed;
