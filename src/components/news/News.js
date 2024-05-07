import React, { useEffect, useState } from 'react'
import "./News.css"
const News = () => {

    const [myNews , setMyNews ] = useState([]);
    const fetchData = async () => {
        let resonse = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7745f1c43cfa4349ad67dc6ed6d8e282")
        let data = await resonse.json()
        setMyNews(data.articles);
    }
    console.log(myNews);
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div className='maindiv'>
    <>
    {
    
        myNews.map((ele) => {
            console.log(ele)
            return(
                <>
                
                    <div class="card" style={{width: "300px", height: "400px",marginLeft: "5rem"}}>
                        <img src={ele.urlToImage == null ? "https://www.newsviewsnetwork.com/wp-content/uploads/Top-Headlines-2.jpg" : ele.urlToImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{ele.author}</h5>
                            <p class="card-text">{ele.title}</p>
                            <a href={ele.url} target='_blank'>Read more</a>
                        </div>
                    </div>
               
                </>
            )
        })
    
    }
       
    </>
    </div> 
  )
}

export default News