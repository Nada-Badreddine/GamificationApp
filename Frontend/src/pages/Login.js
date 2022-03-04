import React,{useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Login = (props) => {

const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

const handleChangeEmail=(e)=>{
    setEmail(e.target.value)
}
const handleChangePassword=(e)=>{
    setPassword(e.target.value)
}
return(

        <div >
        <h1>Login</h1>

        <form>
        <TextField
          fullWidth
          id="Email"
          name="Email"
          label="Email"
          value={Email}
          onChange={handleChangeEmail}

        />
        <TextField
          fullWidth
          id="Password"
          name="Password"
          label="Password"
          value={Password}
          onChange={handleChangePassword}

        />
         
         
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
        </div>
)
}




export default Login





















