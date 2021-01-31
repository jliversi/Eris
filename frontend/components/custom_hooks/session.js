import { useState } from 'react';
import { useSelector } from 'react-redux';


export const useSessionForm = (onSubmit, email = '') => {
  const [user, setInputs] = useState({ email: email, password: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  }
  const demoSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: 'user@demo.com', password: 'hunter2' });
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


export const useCheckEmail = () => {
  const [inputOpen, setOpen] = useState(false);
  const [email, setInput] = useState('');

  const handleChange = (e) => {
    e.persist();
    setInput(e.target.value);
  }
  const openInput = () => setOpen(true);

  return [inputOpen, email, openInput, handleChange];
}

export const useLoggedIn = () => {
  const loggedIn = useSelector(({ session }) => Boolean(session.currentUserId));
  return [loggedIn];
}
