import React,{useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

const Register = (props) => {

const[FirstName,setFirstName]=useState('');
const[LastName,setLastName]=useState('');
const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

const handleChangeFirstName=(e)=>{
    setFirstName(e.target.value)
}
const handleChangeLastName=(e)=>{
    setLastName(e.target.value)
}
const handleChangeEmail=(e)=>{
    setEmail(e.target.value)
}
const handleChangePassword=(e)=>{
    setPassword(e.target.value)
}


axios
.post('http://localhost:1337/collaborators', {
      FirstName: 'Kapman',
        LastName: 'aaaaa',
        Email: 'test@test.com',
        password: 'Password',
      })
      .then(response => {
        console.log('User profile', response);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
return(

        <div >
        <h1>Register</h1>

         <form>
          <TextField
          fullWidth
          id="FirstName"
          name="FirstName"
          label="FirstName"
          value={FirstName}
          onChange={handleChangeFirstName}

        />
        <TextField
          fullWidth
          id="LastName"
          name="LastName"
          label="LastName"
          value={LastName}
          onChange={handleChangeLastName}

        />
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




export default Register


















{/*
import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Register = () => {

const[FirstName,setFirstName]=useState('');
const[LastName,setLastName]=useState('');
const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

  const formik = useFormik({
    initialValues: {
        FirstName,
        LastName,
        Email,
        Password
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
     handleChangeFirstName: (e) => {
      setFirstName(e.target.value);
    },
     
  });



    return(

        <div >
         <h2>Register Now</h2>

          <form onSubmit={formik.handleSubmit}>
          <TextField
          fullWidth
          id="FirstName"
          name="FirstName"
          label="FirstName"
          value={formik.values.FirstName}
          onChange={formik.handleChangeFirstName}

        />
         
         <TextField
          fullWidth
          id="LastName"
          name="LastName"
          label="LastName"
          value={formik.values.LastName}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
        
        </div>
    )
}

export default Register

*/}


