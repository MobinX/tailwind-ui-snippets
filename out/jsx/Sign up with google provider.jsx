<main className="w-full h-screen flex flex-col items-center justify-center px-4">
  <div className="max-w-sm w-full text-base-content">
    <div className="text-center">
      <img src="https://floatui.com/logo.svg" width="150" className="mx-auto" />
      <div className="mt-5 space-y-2">
        <h3 className="text-base-content text-2xl font-bold sm:text-3xl">
          Sign up
        </h3>
        <p className="">
          Already have an account?
          <a href="javascript:void(0)" className="font-medium text-primary hover:text-primary/90">Log in</a>
        </p>
      </div>
    </div>
    <form onSubmit={event => { event.preventDefault(); }} className="mt-8 space-y-5">
      <div>
        <label className="font-medium">Email</label>
        <input type="email" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input type="password" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
      </div>
      <button className="w-full btn btn-primary text-base duration-150">        Create account
      </button>
    </form>
    <button className="w-full btn btn-outline">      { /* Comment: Google Icon SVG here */ }
      <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" className="w-5 h-5" />
      Continue with Google
    </button>
  </div>
</main>