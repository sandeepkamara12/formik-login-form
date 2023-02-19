import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import './App.css';

function App() {
  const [value, setValue] = useState({ username: '', password: '' });
  const [hidePassword, setHidePassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required.'),
      password: Yup.string().required('Password is required.')
    }),
    onSubmit: (values) => {
      console.log(values);
      setValue(prev => ({ ...prev, username: values.username, password: values.password }))
    }
  });

  const showPassword = () => {
    setHidePassword(prev => !prev);
  }

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <h1>Welcome</h1>
        <div className="field-wrap">
          <label>Username</label>
          <input type="text" name="username" id="username" placeholder="Enter Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
          {/* {value.username && <div className="output">Username is: {value.username}</div>} */}
          {formik.touched.username && formik.errors.username && (<div className="errors">{formik.errors.username}</div>)}
        </div>
        <div className="field-wrap">
          <label>Password</label>
          <input type={hidePassword ? 'password' : 'text'} name="password" id="password" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          <svg className="eye" onClick={showPassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <svg className="eye" onClick={showPassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>

          {/* {value.password && <div className="output">Password is: {value.password}</div>} */}
          {formik.touched.password && formik.errors.password && (<div className="errors">{formik.errors.password}</div>)}
        </div>
        <div className='field-wrap' style={{ marginBottom: '0' }}>
          <button type='submit'>Login</button>
        </div>
      </form >
    </div>
  );
}

export default App;
