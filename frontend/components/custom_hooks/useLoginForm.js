import { useState } from 'react';

const useLoginForm = (onSubmit) => {
  const [user, setInputs] = useState({email: '', password: ''});
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  }
  const handleChange = (e) => {
    e.persist();
    setInputs(user => ({
      ...user,
      [e.target.name]: e.target.value
    }))
  }
  return [user, handleChange, handleSubmit];
}

export default useLoginForm;