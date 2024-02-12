import React,{useState} from 'react';
import './signup.css'

const Signup = () => {
     
    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [phno,setphno]=useState('');
    const [dob,setdob]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [gender,setgender]=useState('');
    const [check,setcheck]=useState(false);

const handleSubmit=(event)=>
{
    event.preventDefault();
    // const {firstname,lastname,phno,dob,email,password,gender,check}=useState;

    if(firstname==="" || lastname===""||  phno==="" || dob===""||email===""||password===""||gender===""|| check==="")
    {
        alert('please Enter all fields')
    }
    else
    {
        alert(`firstname: ${firstname}\n lastname: ${lastname} \n phon: ${phno} \n dob: ${dob} \n emailid: ${email} \n password: ${password} \n ${gender} \n Accepted Terms & Conditions \n Thank you !!!..`)
    }
       setfirstname('');
        setlastname('');
        setphno('');
        setdob('');
        setemail('');
        setpassword('');
        setgender('');
        setcheck(false);

}



  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className='form-group'>
    <label htmlFor="firstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstname" value={firstname} onChange={(event)=>{setfirstname(event.target.value)}}/>
    <label htmlFor="lastname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastname"  value={lastname} onChange={(event)=>{setlastname(event.target.value)}}/>
  </div>
  <div className='form-group'>
    <label htmlFor="phno" className="form-label">Phone Number</label>
    <input type="tel" className="form-control" id="phno"  value={phno} onChange={(event)=>{setphno(event.target.value)}}/>
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="dob" value={dob} onChange={(event)=>{setdob(event.target.value)}}/>
  </div>
  <div className='form-group'>
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(event)=>{setemail(event.target.value)}}/>
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
  </div>
  <div className='form-group1'>
    <label>Gender:</label>
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  value='male' checked={gender==='male'} onChange={(event)=>{setgender(event.target.value)}}/>
    <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"value='female' checked={gender==='female'} onChange={(event)=>{setgender(event.target.value)}}/>
    <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value='transgender'  checked={gender==='transgender'} onChange={(event)=>{setgender(event.target.value)}}/>
    <label className="form-check-label" htmlFor="exampleRadios3">Transgender</label>
  </div>
  <div className='form-group1'>
    <input type="checkbox" className="form-check-input" id="check" checked={check} onChange={(event)=>{setcheck(event.target.checked)}}/>
    <label className="form-check-label" htmlFor="check">Please Accept terms & conditions</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Signup;
