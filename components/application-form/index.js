const ApplicationForm = ({
  handleSubmit,
  handleChangeForm,
  handleChangeFile,
  selectedFile,
  status,
  isLoading,
}) => {
  return (
    <div className='bg-white rounded shadow-2xl p-7 sm:p-10 h-1/2'>
      <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
        Apply now
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
            <label
              htmlFor='firstName'
              className='inline-block mb-1 font-medium'
            >
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
            <label htmlFor='email' className='inline-block mb-1 font-medium'>
              Email (*)
            </label>
            <input
              placeholder='email@example.com'
              required
              type='text'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              onChange={handleChangeForm}
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='email' className='inline-block mb-1 font-medium'>
              Upload CV{" "}
              <span className='text-gray-600 ml-2'>
                {selectedFile && selectedFile?.name}
              </span>
            </label>
            <label className='w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-deep-purple-accent-400 hover:text-white'>
              <svg
                className='w-8 h-8'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
              </svg>
              <span className='mt-2 text-base leading-normal'>
                Select a file
              </span>
              <input
                type='file'
                className='hidden'
                id='cv'
                name='cv'
                onChange={handleChangeFile}
              />
            </label>
          </div>

          <div className='mt-4 mb-2 sm:mb-4'>
            <button
              type='submit'
              className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
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
                "Submit"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;
