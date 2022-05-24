import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }

  if (error || gError || updateError) {
    signInError = <p className='text-error mb-5'>{error?.message || gError?.message || updateError?.message}</p>
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('Update done');
    navigate('/');
  };


  return (
    <div className='flex h-screen justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required"
                }
              })} />

              <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-error">{errors.name.message} </span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required"
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Provide a Valid Email'
                }
              })} />

              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message} </span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message} </span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required"
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })} />

              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message} </span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-error">{errors.password.message} </span>}
              </label>
            </div>

            {signInError}

            <input className='btn btn-outline w-full max-w-xs' type="submit" value="Signup" />

          </form>

          <p>Have an account? <Link className='text-primary' to='/login'>Login</Link> </p>

          <div class="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className='btn bg-primary'>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;