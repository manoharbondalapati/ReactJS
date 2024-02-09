import React,{useState} from 'react';


function Homefun(props) 
{
    const [bgcolor,setbgcolor]=useState('red');
    const changeColor=()=>{
        setbgcolor(`#${Math.random().toString().slice(-6)}`)
    };
    
  return (
    <div style={{backgroundColor:bgcolor}}>
      <h1>Hello Manu!... from {props.from}</h1>
      <button style={{color:"white", backgroundColor:"black"}} type="submit" onClick={changeColor}>changeColor</button>
    </div>
  )
  }

  

export default Homefun;











// import React from 'react'
// import Aboutfunc from './Aboutfun';
 
// function Homefun(props) {
//   return (
//     <div>
//       <h1>Hello Manu!... from {props.from}</h1>
//       <Aboutfunc/>
//     </div>//called in Homefun 
//   )
//   }

// export default Homefun;


// import React from 'react'

// export  function Homefun() {
//   return (
//     <div>
//       <h1>named export</h1>
//     </div>
//   )
// }//named export