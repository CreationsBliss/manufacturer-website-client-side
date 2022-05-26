import React from 'react';

const AddAReview = () => {

  const handleAddReview = event => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const description = event.target.feedback.value;
    const user = { rating, description };

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      event.target.reset();
    })

  }

  return (
    <div>
      <h1 className='mb-10 text-2xl font-bold my-5'>Add a Review</h1>
      <form onSubmit={handleAddReview}>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Rating</span>
          </label>
          <input type="number" placeholder="Number between 1-5" id="rating" name="rating" min="1" max="5" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Feedback</span>
          </label>
          <textarea class="textarea textarea-bordered h-24  w-full max-w-xs" name="feedback" placeholder="Comments"></textarea>
        </div>

        <input className='btn btn-primary w-full max-w-xs mt-5' type="submit" value="Add" />

      </form>
    </div>
  );
};

export default AddAReview;