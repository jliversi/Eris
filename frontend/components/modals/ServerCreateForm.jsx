import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSeverCreateForm } from '../../custom_hooks/server_hooks';

function ServerCreateForm(props) {
  const [name, file, handleName, handleFile, handleSubmit] = useSeverCreateForm(props.closeModal, props.history); 

  const fileInputContent = file.imageUrl ? '' : <><i className='fas fa-camera'></i><span>UPLOAD</span></>

  const onSubmit = e => {

  }

  return (
    <div className='server-create-form'>
      <h1>Customize your server</h1>
      <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
      <form onSubmit={handleSubmit}>
        <label style={file.imageUrl ? {overflow: 'hidden', backgroundImage: `url(${file.imageUrl})`} : {border: '2px dashed #36393f'} } htmlFor='server-file'>{fileInputContent}</label>
        <input type='file' id='server-file' onChange={handleFile} />
        <label htmlFor='server-name'>SERVER NAME</label>
        <input id='server-name' type='text' onChange={handleName} value={name} />
        <button disabled={ name.length === 0 }>Create</button>
      </form>
      <i onClick={props.closeModal} className='fas fa-times'></i>
    </div>
  )
}

export default withRouter(ServerCreateForm); 