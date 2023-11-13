import React, { useState } from 'react'
import './Cardd.css';
import { Button } from 'react-bootstrap';


function Mycard() {
    const moi ={
        src: "https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/266177680_1373713763043756_10279645885656604_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d6CbkmyfpwUAX_NCvTJ&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAnHU0r27ik_12k4Pz68cqZLL5ccHwWg04JSL0p4U1UNg&oe=6557581C", 
        name:"Chadi Hassen",
        age:19,
        From:"Metouia La capitale",}
        const [show, setshow] = useState(false)

  return (
    <div>
        {show? <div className='carta'>
        <img src={moi.src}/>
        <h3>{moi.name}</h3>
        <p>{moi.age}</p>
        <p>{moi.From}</p>
    </div>:null}
    <Button onClick={()=>setshow(!show)}>ShowCard</Button>
    </div>
  )
}

export default Mycard