import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

  const [user] = useAuthState(auth);




  // const handleUpdateUser = event => {
  //   event.preventDefault();
  //   const education = event.target.education.value;
  //   const location = event.target.location.value;
  //   const phone = event.target.phone.value;
  //   const linkedin = event.target.linkedin.value;

  //   const updatedUser = { education, location, phone, linkedin };

  //   fetch(`http://localhost:5000/user/ `, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedUser)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       event.target.reset();
  //     })

  // }

  // const [newUser, setNewUser] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${_id}`)
  // }, [])







  return (
    <div>
      <h1 className='mb-5 my-5 text-2xl font-bold'>Your Profile</h1>

      {
        user && <>
          <p> Your name: <span className='text-primary'> {user?.displayName} </span> </p>
          <p> Your Email: <span className='text-primary'> {user?.email} </span> </p>
        </>
      }






      {/* <form onSubmit={handleUpdateUser} className="mt-10">

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <input type="text" placeholder="B.Sc" id="education" name="education" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Location</span>
          </label>
          <input type="text" placeholder="Bashundhara" id="location" name="location" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Mobile</span>
          </label>
          <input type="tel" placeholder="01..." id="mobile" name="mobile" class="input input-bordered w-full max-w-xs" />
        </div>


        <div class="form-control">
          <label class="label">
            <span class="label-text">Linkedin Profile</span>
          </label>
          <input type="url" placeholder="https://www.linkedin.com" id="linkedin" name="linkedin" class="input input-bordered w-full max-w-xs" />
        </div>

        <input className='btn btn-primary w-full max-w-xs mt-5' type="submit" value="Update" />

      </form> */}





    </div>
  );
};

export default MyProfile;