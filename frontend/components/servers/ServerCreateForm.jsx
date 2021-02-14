import React from 'react';
import { useSeverCreateForm } from '../../custom_hooks/server_hooks';

function ServerCreateForm(props) {

  const [name, file, handleName, handleFile, handleSubmit] = useSeverCreateForm(); 


  return (
    <div className='server-create-form'>
      <img src={file.imageUrl} />
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFile} />
        <input type='text' onChange={handleName} value={name} />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default ServerCreateForm;