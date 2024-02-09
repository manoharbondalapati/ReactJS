import React from 'react';


 class Home extends React.Component {
  
  render() 
  {
    return (
      <div>
        <h1>Class Home</h1>
        <h1>{this.props.name}</h1>
        </div>
    );
  }
}
export default Home;


// {/* <h1 style={{color:"red", backgroundColor:"black"}}></h1> */}