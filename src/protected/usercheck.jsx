import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

const UserCheck = () => {
  const { token } = useContext(AuthContext)
  const [status, setStatus] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    console.log(token);
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/check/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data.user);
        console.log('ID:');
        console.log(response.data.user.sub);
        setStatus(response.data.message);
        setInfo(response.data.user);
      })
      .catch(error => {
        setStatus(error.message);
      });
  }, []);


  return (
    <div>
      {status}
    </div>
  );
}

export default UserCheck;
