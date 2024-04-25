<div x-data="{ open: false }" className="fixed inset-0 z-10 overflow-y-auto">
  <button onClick={event => {}} className="w-32 py-2 ml-2 shadow-sm rounded-md bg-primary text-base-100 mt-4 flex items-center justify-center">
    Click me
  </button>

  <div x-show="open" className="fixed inset-0 w-full h-full bg-black bg-opacity-40">
    <div onClick={event => {}} className="fixed inset-0 w-full h-full" />

    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
      <div className="bg-base-100 rounded-md shadow-lg px-4 py-6">
        <div className="flex items-center justify-end">
          <button onClick={event => {}} className="p-2 text-base-content rounded-md hover:bg-base-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="max-w-sm mx-auto space-y-3 text-center">
          <h2 className="text-lg font-medium text-base-content">
            Sign up for our newsletter
          </h2>
          <p className="text-sm text-base-content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="relative">
            <svg className="w-6 h-6 text-base-content absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokelinecap="round" strokelinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input className="w-full pl-12 pr-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" placeholder="Enter your email" />
          </div>
          <button className="w-full mt-2 btn btn-primary text-base duration-150">           Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</div>