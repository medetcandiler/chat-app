import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Homepage({ user, setUser }) {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      setError('You have got to enter a username.');
      setTimeout(() => {
        setError('')
      }, 1500)
    } else {
      setUser(userName)
      navigate('/chat');
    }
  }


  return (
    <div className="container-homepage">
      <h1 className="newFont homepage">Sign Up for Chating</h1>
      <form onSubmit={handleSubmit} className='form-homepage'>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className='input input-homepage'
          placeholder="Create a username to enter the chat room"
        />
        <input
          type="submit"
          value="Enter"
          className="btn btn-homepage"
        />

      </form>
      {error && <div className="error error-homepage">{error}</div>}

    </div>
  )
}

export default Homepage;