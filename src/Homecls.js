//state
import React from 'react'

 class Homecls extends React.Component {
     
    constructor()
    {
        super();
        console.log(this);
        this.state=
        {
            color: "red",
        }
    }
changeColor=()=>
{
      this.setState({
        color:`#${Math.random().toString().slice(-6)}`
    })
}
        


  render() {
    return (
      <div style={{backgroundColor:this.state.color}}>
        <h1>Class Home</h1>
        <button style={{color:"white", backgroundColor:"black"}} type="submit" onClick={this.changeColor}>changeColor</button>
      </div>
    )
  }
}

export default Homecls;









// import React from 'react';




//  class Homecls extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Manohar!.. from {this.props.from}</h1>
//       </div>
//     )
//   }
// }


// export default Homecls














// import { render } from "@testing-library/react";
// import React  from "react";

// class Homecls extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
        
//             this.state={
                
//                 message:`Hello Manohar!.... from ${this.props.from}`
            
//             }

//         }
            

// render()
// {
//     return(
//         <div>
//             <h1>{this.state.message}</h1>
//         </div>
//     )
// }

// }

// export default Homecls;
        
        








// import React,{Component} from "react";

//  export class Homecls extends Component
// {
//      render()
//     {
//         return(
//             <div>
//                 <h1>Manu!.....</h1>
//             </div>
//         )
//     }
// }