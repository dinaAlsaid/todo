import  { useState } from 'react';

const useFormHandler = ()=>{
  const [formData, setFormData] = useState({});

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e,onSubmit) => {
    e.preventDefault();
    onSubmit(formData);
    e.target.reset();
  };

  return[handleInputChange , handleSubmit];
}

export default useFormHandler;

