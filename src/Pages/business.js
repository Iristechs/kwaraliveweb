import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from "yup"
import {image} from "../config.json"
import { businessProfile } from "../Services/businessService";
 const RegisterBusiness = () => {
 // const [errorMessage, setErrorMessage] = useState("");
  //const [showError, setShowError] = useState(false);
  //const [initialValues, setInitialValues] = useState({});
    return (<div class="form-wrapper">
      <Formik
            enableReinitialize={true}
            initialValues={{first_name:"", last_name:"",
            
            email:"", phone_number:"", address:"", password:"",business_name:"", website_url:"", category: "", 
            longitude:"", latitude:"", image:image}}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Invalid email address format").required('Please provide user email address'),
                last_name: Yup.string().required('Please provide user lastname'),
                first_name: Yup.string().required('Please provide user firstname'),
                business_name: Yup.string().required('Please provide business name'),
                address: Yup.string().required('Please provide address'),
                password: Yup.string().required('Please provide password'),
                phone_number: Yup.string().required('Please provide phone Number'),
                website_url: Yup.string().required('Please provide website url'),
                category: Yup.string().required('Please provide category'),
                nature_of_business: Yup.string().required('Please provide nature of business'),
                longitude: Yup.string().required('Please provide longitude'),
                latitude: Yup.string().required('Please provide latitude'),


            })}
            onSubmit={async(values, {setSubmitting, resetForm}) => {
              console.log(values);  

             let res = await businessProfile(values)
             console.log('data below');
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
        

        
        <Form.Group controlId="website_url">
          <Form.Label>website Url</Form.Label>
          
          <Form.Control type="text"
          
          name="website_url"
          value={values.website_url}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.website_url && errors.website_url ? "error" : null}

          />
           {touched.website_url && errors.website_url ? (
                <div className="error-message">{errors.website_url}</div>
              ): null}
        </Form.Group>
       

       
        <Form.Group controlId="business_name">
          <Form.Label>Business Name</Form.Label>
          
          <Form.Control type="text"
          
          name="business_name"
          value={values.business_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.business_name && errors.business_name ? "error" : null}

          />
           {touched.business_name && errors.business_name ? (
                <div className="error-message">{errors.business_name}</div>
              ): null}
        </Form.Group>

        
        <Form.Group controlId="category">
          <Form.Label>Business Category</Form.Label>
          
          <Form.Control type="text"
          
          name="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.category && errors.category ? "error" : null}

          />
           {touched.category && errors.category ? (
                <div className="error-message">{errors.category}</div>
              ): null}
        </Form.Group>            
        <Form.Group controlId="nature_of_business">
          <Form.Label>Nature of Business</Form.Label>
          
          <Form.Control type="text"
          
          name="nature_of_business"
          value={values.nature_of_business}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.nature_of_business && errors.nature_of_business ? "error" : null}

          />
           {touched.nature_of_business && errors.nature_of_business ? (
                <div className="error-message">{errors.nature_of_business}</div>
              ): null}
        </Form.Group>            

        <Form.Group controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          
          <Form.Control type="text"
          
          name="longitude"
          value={values.longitude}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.longitude && errors.longitude ? "error" : null}

          />
           {touched.longitude && errors.longitude ? (
                <div className="error-message">{errors.longitude}</div>
              ): null}
        </Form.Group>            


        <Form.Group controlId="latitude">
          <Form.Label>Latitude</Form.Label>
          
          <Form.Control type="text"
          
          name="latitude"
          value={values.latitude}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.latitude && errors.latitude ? "error" : null}

          />
           {touched.latitude && errors.latitude ? (
                <div className="error-message">{errors.latitude}</div>
              ): null}
        </Form.Group>            



        <Button onClick={handleSubmit} color="primary" disabled={isSubmitting}> 
       
             {isSubmitting ? "Submitting..." : "Create Business"}
           </Button>
        </div>
      )
    }
  }
      </Formik>
    </div>);
    
  };
  export default RegisterBusiness;