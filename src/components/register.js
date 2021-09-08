import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { userProfile } from "../Services/userService";
import { Formik } from 'formik';
import * as Yup from "yup"
import {image} from "../config.json"

 const Register = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  // const [showError, setShowError] = useState(false);
  //const [initialValues, setInitialValues] = useState({});
    return (<div class="form-wrapper">
      <div className='user-form-cont justify-content-center' style={{width: "600px"}}>
        <br/> <br/><br/><br/><br/>
      <Formik
            className='user-reg-form'
            enableReinitialize={true}
            initialValues={{first_name:"", last_name:"", email:"", phone_number:"", address:"", password:"", image:image}}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Invalid email address format").required('Please provide user email address'),
                last_name: Yup.string().required('Please provide user lastname'),
                first_name: Yup.string().required('Please provide user firstname'),
                address: Yup.string().required('Please provide address'),
                password: Yup.string().required('Please provide password'),
                phone_number: Yup.string().required('Please provide phone Number'),
            })}
            onSubmit={async(values, {setSubmitting, resetForm}) => {
              console.log(values);  

             let res = await userProfile(values)
             console.log(res.data)
             if (res.data.status ==="success"){
                 alert(res.data.message);
                 setSubmitting(false);
                 resetForm({values: ""})
             }else{ alert(res.data.message);}
            }}
        >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
                return(
                  <div>
                    
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text"
          
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}

          className={touched.first_name && errors.first_name ? "error" : null}

          />
           {touched.first_name && errors.first_name ? (
                <div className="error-message">{errors.first_name}</div>
              ): null}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"
                    
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.last_name && errors.last_name ? "error" : null}

          />
           {touched.last_name && errors.last_name ? (
                <div className="error-message">{errors.last_name}</div>
              ): null}
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
           name="email"
           value={values.email}
           onChange={handleChange}
           onBlur={handleBlur}
           className={touched.email && errors.email ? "error" : null}

           />
            {touched.email && errors.email ? (
                 <div className="error-message">{errors.email}</div>
               ): null}
        </Form.Group>

              
        <Form.Group controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control type="text"
          
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.password && errors.password ? "error" : null}

          />
           {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ): null}
        </Form.Group>


        <Form.Group controlId="phone_number">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="text"
          
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.phone_number && errors.phone_number ? "error" : null}

          />
           {touched.phone_number && errors.phone_number ? (
                <div className="error-message">{errors.phone_number}</div>
              ): null}
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          
          <Form.Control type="text"
          
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.address && errors.address ? "error" : null}

          />
           {touched.address && errors.address ? (
                <div className="error-message">{errors.address}</div>
              ): null}
        </Form.Group>
        
       
                      
        <Button onClick={handleSubmit} color="primary" disabled={isSubmitting}> 
        
             {isSubmitting ? "Submitting..." : "Create User"}
           </Button>
        </div>
      )
    }
  }
      </Formik>
      </div>
    </div>);
    
  };
  export default Register;