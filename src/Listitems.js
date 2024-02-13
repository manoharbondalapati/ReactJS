import React from 'react'

 function Listitems() {

    const items =[
        "Home",
        "ABout",
        "Service",
        "Contact",
    ];
  return (
    <div>
      <h1>Listitems</h1>
      {
      items.length>0 ? 
      (
      <ul>
        {items.map((items,index)=>(<li key={index}>
          {items}</li>))}</ul>
      ):(<h1>Noitems</h1>)}
    </div>
  )
}

export default Listitems