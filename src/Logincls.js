import React from "react";
import "./index.css";

class Logincls extends React.Component {

    constructor()
    {
        super();
        this.state={
            usereamil:"",
            userpassword:"",
            // errormsg:"",
        };
    }
    usereamil =(event)=>
    {
        this.setState({usereamil: event.target.value})
    }
    userpassword =(event)=>
    {
        this.setState({userpassword: event.target.value})
    }


    loginhandle=(event)=>
    {
        event.preventDefault();
        const {usereamil,userpassword}=this.state;

        if(usereamil=== "" || userpassword=== "")
        {
            // this.setState({errormsg:'please enter your email and password'});
            alert('Enter your Email and Password')
           
        }
        else{
            // this.setState({errormsg:`${usereamil}  and   ${userpassword}`,});
            alert(`your email:${usereamil} \n your password: ${userpassword}`)
        } 
        this.setState({
            usereamil: "",
            userpassword: ""
        });
       
       
    }
  render() {
    return (
      
        <form className="container" id="container" onSubmit={this.loginhandle}>
          <div className="mb-3">
            <label htmlFor="usereamil" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="usereamil"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              value={this.state.usereamil}
              onChange={this.usereamil}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userpassword" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="userpassword"placeholder="Enter your password" value={this.state.userpassword} onChange={this.userpassword} />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {/* {this.state.errormsg && <h1>{this.state.errormsg}</h1>} */}
        </form>
     
    );
  }
}

export default Logincls;
