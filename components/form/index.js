const Form = ({ title, handleSubmit, handleChangeForm, isLoading, status }) => {
  return (
    <>
      <h3 className='mb-2 text-xl font-semibold sm:text-center sm:mb-2 sm:text-2xl'>
        {title}
      </h3>
      {status === "success" ? (
        <div>
          <svg
            viewBox='0 0 24 24'
            className='text-green-600 w-16 h-16 mx-auto my-6'
          >
            <path
              fill='currentColor'
              d='M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
            ></path>
          </svg>
          <div className='text-center'>
            <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
              Submit done!
            </h3>
            <p className='text-gray-600 my-2'>
              Thank you. Our staff will call you soon
            </p>
            <p> Have a great day! </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='fullName' className='inline-block mb-1 font-medium'>
              Fullname (*)
            </label>
            <input
              placeholder='Fullname'
              required
              type='text'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='fullName'
              name='fullName'
              onChange={handleChangeForm}
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label
              htmlFor='phoneNumber'
              className='inline-block mb-1 font-medium'
            >
              Phone number (*)
            </label>
            <input
              placeholder='Phone number'
              required
              type='text'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='phoneNumber'
              name='lastName'
              onChange={handleChangeForm}
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='email' className='inline-block mb-1 font-medium'>
              Email (*)
            </label>
            <input
              placeholder='Email'
              required
              type='text'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              onChange={handleChangeForm}
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='messsage' className='inline-block mb-1 font-medium'>
              Your message
            </label>
            <textarea
              placeholder='Your message'
              type='text'
              className='flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              rows={3}
              onChange={handleChangeForm}
            />
          </div>
          <div className='mt-3 mb-2 sm:mb-4'>
            <button
              type='submit'
              className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-bluesky-900 hover:bg-bluesky-900  focus:shadow-outline focus:outline-none'
            >
              {isLoading ? (
                <>
                  <svg
                    className='animate-spin h-5 w-5 mr-3 ...'
                    viewBox='0 0 24 24'
                  ></svg>
                  <span>Processing...</span>
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
