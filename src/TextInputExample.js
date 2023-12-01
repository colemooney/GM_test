import React, { useState } from 'react';
import './App.css';
import { Input, PasswordInput, RadioGroup, Checkbox, Form, TextArea } from '@start-base/react-form-elements';

export default function FormElements() {
  const [inputs, setInputs] = useState({});
  const onChange = (e) => {
    const { name,  value, firstname, lastname, phone, email,  type } = e.target;
    console.log(e.target)
    
 

    setInputs((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? !prevState[name] : value,
    }));
    
  };

  return (
   <> 
   <h2>React Form Elements</h2>
    <Form>
      <Input
        label="Firstname"
        name="firstname"
        value={inputs.firstname}
        onChange={onChange}
        className="box"
     />
     <Input
       label="Lastname"
       name="lastname"
       value={inputs.lastname}
       onChange={onChange}
       className="box"
     />
     <Input
        name="phone"
        onChange={onChange}
        label="Phone Number"
        value={inputs.phone}
        className="box"
      />
      <Input
        name="email"
        onChange={onChange}
        label="Email Address"
        value={inputs.email}
        className="box"
      />
      <Input
        name="photo"
        onChange={onChange}
        label="Profile Picture"
        value={inputs.picture}
        accept="image/*"
        type="file"
        className="box"
      />
      <Input
        name="file"
        onChange={onChange}
        label="PDF"
        accept=".pdf"
        value={inputs.file}
        type="file"
        className="box"
      />
      <button
            
            
          >
            Submit Form
          </button>
     
   </Form></>
  )
}
