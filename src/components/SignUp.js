import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.scss';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../components/toast';




const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: true
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => { 
        setErrors(validate(data))
    },[data, touched])
       

    const changeHandler = event => {
        if(event.target.name === 'isAccepted'){
            setData({...data, [event.target.name]: event.target.checked})
        }
        else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            notify('You Signed in successfully', 'success')
        }
        else {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
            notify('Somthing is Wrong!', 'error')
        }
    }

    return (
        <div className='momSide'>
           <form onSubmit={submitHandler}>
            <h2>Sign Up</h2>
            <div className='name'>
                <TextField id="standard-basic" label="Name" variant="standard"
                 name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler}
                     style={{ width: '50%',}}
                 />
                    {errors.name && touched.name && <span className='error'>{errors.name}</span>}
            </div>
            <div className='email'> 
                <TextField id="standard-basic" label="Email" variant="standard"
                 name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}
                    style={{ width: '50%',}}
                 />
                    {errors.email && touched.email && <span className='error'>{errors.email}</span>}
       
            </div>
            <div className='pass'>
                <TextField id="standard-basic" label="Password" variant="standard"
                 name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}
                     style={{ width: '50%',}}
                 />
                    {errors.password && touched.password && <span className='error'>{errors.password}</span>}

            </div>
            <div className='confirm'>
            <TextField id="standard-basic" label="Confirm Password" variant="standard"
             name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}
                 style={{ width: '50%',}}
             />
                {errors.confirmPassword && touched.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}

            </div>
            <div className='check'>
                <label>I Accept term of privacy policy </label>
                <Checkbox defaultChecked name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
            </div>
            <div className="gir">
           <button onClick={submitHandler}>Sign Up</button>
           </div>
           </form>
           <span className='log'>Are You Already Have An Account? <Link to='/'> Login</Link></span>
           <ToastContainer />
        </div>
    );
};

export default SignUp;