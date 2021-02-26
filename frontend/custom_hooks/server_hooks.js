import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createServer } from '../actions/server_actions';


export const useSeverCreateForm = (closeModal, history) => {
  const username = useSelector(({entities: { users }, session: {currentUserId}}) => users[currentUserId].username);
  const dispatch = useDispatch();
  const [name, setName] = useState(`${username}'s server`);
  const [file, setFile] = useState({ imageUrl: "", imageFile: null });
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', name);
    if (file.imageFile) {
      formData.append('server[image]', file.imageFile)
    }
    dispatch(createServer(formData)).then(({server}) => {
      history.push(`/channels/${server.id}`);
      closeModal();
    })
  }
  const handleName = (e) => {
    e.persist();
    setName(e.target.value);
  }
  const handleFile = (e) => {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => setFile({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setFile({ imageUrl: "", imageFile: null });
    }
  }

  return [name, file, handleName, handleFile, handleSubmit];
};

