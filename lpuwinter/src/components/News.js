import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems';

export default function News() {
    const [articles,setArticles] = useState([])
    const [text,setText] = useState("tesla")
   async function fetchNews(text){
     let data = await fetch(`https://newsapi.org/v2/everything?q=${text}&from=2024-12-24&sortBy=publishedAt&apiKey=0233775500c24d2bb0f582d7dcd3cdac`);
     let news = await data.json();
     setArticles(news.articles)
    
    }
    useEffect(()=>{
        fetchNews(text)
    },[text])
    // function handleSubmit(e){
    //     e.preventDefault()
    //     fetchNews(text)
    // }
    // fetchNews()
  return (
    <div>
        <form>
            <input type="text" placeholder="search" 
            onChange={(e)=>setText(e.target.value)}/>
            {/* <button type='submit'>Search</button> */}
        </form>
      {articles && articles.map(item=> <Newsitems title={item.title} description={item.description} 
      url={item.url} image={item.urlToImage}/>)}
     
    </div>
  )
}
