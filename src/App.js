import "./index.css";
import {useState} from 'react';
import {movies}  from './movies' ;

export default function App() {

const cards=[
  {
  title:"Saaho",
  rating:"It's show time!",
  pic:"https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg"
},
{
  title:"Rashe Shyam",
  rating:"I wont tell you!",
  pic:"https://m.media-amazon.com/images/M/MV5BZDQ5YjAxMmYtOGM3Zi00MWU2LWJmOTMtZjhhYjkyNGQ1NjE3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_QL75_UX380_CR0,4,380,562_.jpg"
},
{
  title:"Baahubali 2 -The conclusion",
  rating:"Jhai Mahishmathi!!",
  pic:"https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg"
}

]




  return(
    <div>
      <h1>Book My Movie</h1>
   <div className="cards">
     {movies.items.map(x =>(
      <Card title={x.title}  rating={x.imDbRating} pic={x.image} description={x.plot}/>
     ) )}
     
    </div>
    </div>
  )

}


function Card({title,rating,pic,description}){
 
  return(
    <div className="card  text-center">
      <img className="card-img-top"  src={pic}/>
      <div className="card-body">
        <div className="title">{title}</div>
        <div className="contents">
        <div> IMBD rating: ⭐ {rating}</div>
        <div className="description">{description}</div>
        <a href="https://c.tenor.com/j0aqC3WGwWcAAAAd/nenu-maree-antha-vedava-la.gif" target={"_blank"}><button className="btn btn-success">Book tickets</button></a>
        <Likeb/>
        </div>
      </div>
      
    </div>
  )
}

function Likeb(){
  const [like,setLike]=useState(0)
  const [dislike,setDislike]=useState(0)
    return(
      <div>
        <button className="btn btn-primary" onClick={()=>{setLike(like+1)}}>👍{like}</button>
        <button className="btn btn-primary" onClick={()=>{setDislike(dislike+1)}}>👎{dislike}</button>
      </div>
      )
}














//JSX -- js XML  - JSX will be converted to javascript
//webpack + babel

//className - className="" in JS - reserved keyword
// {} = Template syntax
// props -object - you can pass like an argument in a function
