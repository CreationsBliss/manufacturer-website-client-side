import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

  const [user] = useAuthState(auth);

  // const [newUser, setNewUser] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${_id}`)
  // }, [])

  return (
    <div>
      <h1 className='mb-5'>Your Profile</h1>

      {
        user && <>
          <p> Your name: <span className='text-primary'> {user?.displayName} </span> </p>
          <p> Your Email: <span className='text-primary'> {user?.email} </span> </p>
        </>
      }

    </div>
  );
};

export default MyProfile;