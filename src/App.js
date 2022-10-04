import "./index.css";
import {useState} from 'react';


export default function App() {
   
  const element=[
    [
    {name:"Single User",bl:"true"},
    {name:"5GB Storage",bl:"true"},
    {name:"Unlimited Public Projects",bl:"true"},
    {name:"Community Access",bl:"true"},
    {name:"Unlimited private Projects",bl:"false"},
    {name:"Dedicated Phone Support",bl:"false"},
    {name:"Free Subdomain",bl:"false"},
    {name:"Monthly Status Reports",bl:"false"}
    ],
    [ 
      {name:"5 Users",bl:"true"},
      {name:"50GB Storage",bl:"true"},
      {name:"Unlimited Public Projects",bl:"true"},
      {name:"Community Access",bl:"true"},
      {name:"Unlimited private Projects",bl:"true"},
      {name:"Dedicated Phone Support",bl:"true"},
      {name:"Free Subdomain",bl:"true"},
      {name:"Monthly Status Reports",bl:"false"}
    ],
    [ 
      {name:"Unlimited Users",bl:"true"},
    {name:"5GB Storage",bl:"true"},
    {name:"Unlimited Public Projects",bl:"true"},
    {name:"Community Access",bl:"true"},
    {name:"Unlimited private Projects",bl:"true"},
    {name:"Dedicated Phone Support",bl:"true"},
    {name:"Free Subdomain",bl:"true"},
    {name:"Monthly Status Reports",bl:"true"}
    ]
  ]
   
  var number=0
   
  return(
   <div className="cards">
    {element.map(x=>(
      <div className="card">
        <CardInfo arr={x} k={number++}/>
      </div>
    ))}
   </div>
  )

}
  
function CardInfo({arr,k}){
  
  const head=[
    {name:"FREE",price:"$0"},
    {name:"PLUS",price:"$9"},
    {name:"PRO",price:"$49"}
  ]
  
  return(
    <div>
      <div className="header">
        <div className="sbsc">
          {head[k].name}
        </div>
        <div>
          <span className="price">{head[k].price}</span>
          <span className="month">/month</span>
        </div>
        <hr></hr>
      </div>
      <div className="card-body">
          {arr.map(y=>(
                  <section style={{color:y.bl=="false"?"rgb(0, 0, 0,0.3)":''}}><span>{y.bl=="true"?"✔": y.bl=="false"?"✘":""}</span>{y.name}</section>
                ))}
      <button className="btn btn-primary rounded-pill">Button</button>   
      </div>
    </div>
  )
}

