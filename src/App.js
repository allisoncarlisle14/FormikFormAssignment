import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
    
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Field Required';
      }
      return errors;
    }
  });
  return (
    <div >
      <form onSubmit = {formik.handleSubmit}>

        <div> Username </div>
        <input name= "email" id = "emailField" type = "email" onChange = {formik.handleChange} value = {formik.values.email}/>
        {formik.errors.email ? <div style = {{color: 'red'}} id = "emailError"> {formik.errors.email}</div> : null}
        <div> Password </div>
        <input name= "password" id = "pswField" type = "password" onChange = {formik.handleChange} value = {formik.values.password}/>
        {formik.errors.password ? <div style = {{color: 'red'}} id = "pswError"> {formik.errors.password}</div> : null}
        <br/>
        <button type = "submit" id = "submitBtn"> Submit </button>
      </form>
      
    </div>
  );
}

export default App;
