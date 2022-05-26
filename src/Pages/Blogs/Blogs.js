import React from 'react';

const Blogs = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 px-28'>
      <h1 className='text-center font-bold text-4xl mb-10'>Latest Blogs</h1>

      <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <p>Inside, React utilizes a few cunning procedures to limit the quantity of expensive DOM tasks expected to refresh the UI. For some applications, utilizing React will prompt a quick UI without accomplishing a lot of work to streamline for execution explicitly.Of course, React incorporates numerous accommodating alerts. These admonitions are extremely valuable being developed. Be that as it may, they make React bigger and more slow so you ought to try to utilize the creation variant when you send the application.</p>
        </div>
      </div>

      <div tabindex="1" class="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p>Local state:  Local state is data we manage in one or another component.</p>
          <p className='mt-3'>Global state: Global state is data we manage across multiple components.</p>
          <p className='mt-3'>URL state:  Data that exists on our URLs, including the pathname and query parameters.</p>
        </div>
      </div>

      <div tabindex="2" class="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div class="collapse-content">
          <p>In this programming worldview, a class is an outline for making objects. Assuming that you believe another class should reuse the usefulness of a current class, you can make another class that expands the current class. This is called classical inheritance. JavaScript doesn't utilize old style legacy. All things considered, it utilizes prototypal inheritance. In prototypal inheritance., an article "inherits" properties from another item through the model linkage.</p>
        </div>
      </div>

      <div tabindex="3" class="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is significant in light of the fact that product engineers in some cases have a go at saving time doing negligible unit testing and this is legend on the grounds that unseemly unit testing prompts significant expense Defect fixing during System Testing, Integration Testing and, surprisingly, Beta Testing after application is constructed.</p>
        </div>
      </div>

      <div tabindex="4" class="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          Why you do not set the state directly in React.
        </div>
        <div class="collapse-content">
          <p>On the off chance that you update it straightforwardly, calling the setState() a short time later may simply supplant the update you made. At the point when you straightforwardly update the state, it doesn't change this.state right away. All things being equal, it makes a forthcoming state change, and getting to it subsequent to calling this strategy will just return the current worth. You will fail to keep a grip on the state across all parts.</p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;