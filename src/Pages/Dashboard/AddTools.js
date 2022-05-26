import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Service from '../Home/Service';
import Loading from '../Shared/Loading';

const AddTools = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()));

  const imgStorageKey = "a36131b84f1846fcc7395b9a0f60b32a";

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const tool = {
            name: data.name,
            description: data.description,
            pricePerUnit: data.price,
            minimumOrderQuantity: data.quantity,
            availableQuantity: data.available,
            picture: img
          }
          // send to database
          fetch('http://localhost:5000/tool', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(tool)
          })
          .then(res => res.json())
          .then(inserted => {
           if(inserted.insertedId){
             toast.success('Tool added successfully');
             reset();
           }
           else{
            toast.error('Failed to add tool');
           }
          })
        }

      })
  };

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl font-bold my-5'>Add a Tool</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs" {...register("name", {
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
            <span class="label-text">Product Description</span>
          </label>
          <input type="text" placeholder="Product Description" class="input input-bordered w-full max-w-xs" {...register("description", {
            required: {
              value: true,
              message: "Description is Required"
            }
          })} />

          <label class="label">
            {errors.description?.type === 'required' && <span class="label-text-alt text-error">{errors.description.message} </span>}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Available Quantity</span>
          </label>
          <input type="text" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" {...register("available", {
            required: {
              value: true,
              message: "Available Quantity is Required"
            }
          })} />

          <label class="label">
            {errors.available?.type === 'required' && <span class="label-text-alt text-error">{errors.available.message} </span>}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Minimum Order Quantity</span>
          </label>
          <input type="text" placeholder="Minimum Order Quantity" class="input input-bordered w-full max-w-xs" {...register("quantity", {
            required: {
              value: true,
              message: "Quantity is Required"
            }
          })} />

          <label class="label">
            {errors.quantity?.type === 'required' && <span class="label-text-alt text-error">{errors.quantity.message} </span>}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product Price</span>
          </label>
          <input type="text" placeholder="Product Price" class="input input-bordered w-full max-w-xs" {...register("price", {
            required: {
              value: true,
              message: "Price is Required"
            }
          })} />

          <label class="label">
            {errors.price?.type === 'required' && <span class="label-text-alt text-error">{errors.price.message} </span>}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product Image</span>
          </label>
          <input type="file" class="input input-bordered w-full max-w-xs" {...register("image", {
            required: {
              value: true,
              message: "Image is Required"
            }
          })} />

          <label class="label">
            {errors.image?.type === 'required' && <span class="label-text-alt text-error">{errors.image.message} </span>}
          </label>
        </div>

        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add" />

      </form>
    </div>
  );
};

export default AddTools;