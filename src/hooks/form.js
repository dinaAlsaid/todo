import  { useState } from 'react';

const useFormHandler = (cb)=>{
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    cb(item);
    e.target.reset();
    setItem({});
  };
  return[handleInputChange , handleSubmit];
}

export default useFormHandler;

