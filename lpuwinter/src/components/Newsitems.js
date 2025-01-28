import React from 'react'

export default function Newsitems({title,description,image,url}) {
  return (
    <div>
      <img src={image ? image : "https://c.ndtvimg.com/2025-01/orrit8bg_hardik-pandya_625x300_22_January_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"} width='150px' height="150px" alt={title}/>
      <h1>{title?title.slice(0,30):"No Title Available"}</h1>
      <p>{description?description.slice(0,60):"NO description "}</p>
      <a href={url}>Read More</a>
    </div>
  )
}
