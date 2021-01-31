import { useState } from 'react';

const useLoginForm = (onSubmit, email = '') => {
  const [user, setInputs] = useState({email: email, password: ''});
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  }
  const demoSubmit = (e) => {
    e.preventDefault();
    onSubmit({email: 'user@demo.com', password: 'hunter2'});
  };
  const handleChange = (e) => {
    e.persist();
    setInputs(user => ({
      ...user,
      [e.target.name]: e.target.value
    }))
  }
  return [user, handleChange, handleSubmit, demoSubmit];
}

export default useLoginForm;