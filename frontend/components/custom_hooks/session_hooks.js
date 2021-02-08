import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/session_actions';


export const useSessionForm = (onSubmit, defaultUser = {}) => {
  const dispatch = useDispatch();
  const [user, setInputs] = useState(defaultUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onSubmit(user));
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



export const useDemoLogin = () => {
  const dispatch = useDispatch();
  const demoSubmit = (e) => {
    e.preventDefault();
    return dispatch(login({ email: 'user@demo.com', password: 'hunter2' }));
  };
  return [demoSubmit];
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
