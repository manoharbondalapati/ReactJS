// import React from 'react';


// function FunHome(props) 
// {
//   const {brand}=props
//   return (
//     <div>
//       <h1>Function Home</h1>
//       <h1>{brand.name}</h1>
//       <h1>{brand.age}</h1>
//       </div>
//   )
// }
// export default FunHome;



import React from 'react';


function FunHome(props) 
{
 
  return (
    <div>
      <h1>Function Home</h1>
      <h1 >{props.name}</h1>
      <h1>{props.age}</h1>
      </div>
  )
}
export default FunHome;

