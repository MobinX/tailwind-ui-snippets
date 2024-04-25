<main className="w-full h-screen flex flex-col items-center justify-center px-4">
    <div className="max-w-sm w-full text-base-content space-y-5">
        <div className="text-center">
          { /* logo */ }
            <img src="https://floatui.com/logo.svg" width="150" className="mx-auto" />
            <div className="mt-5 space-y-2">
                <h3 className="text-base-content text-2xl font-bold sm:text-3xl">Log In</h3>
                  </div>
        </div>
        <form onSubmit={event => {}} className="mt-8 space-y-5">
            <div>
                <label className="font-medium">
                    Email
                </label>
                <input type="email" required className="w-full mt-2 px-3 py-2 text-base-content/90 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
            </div>
            <div>
                <label className="font-medium">
                    Password
                </label>
                <input type="password" required className="w-full mt-2 px-3 py-2 text-base-content/90 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
            
            </div>
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-x-3">
                  <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                  <label htmlFor="remember-me-checkbox" className="relative flex w-5 h-5 bg-base peer-checked:bg-primary rounded-md border ring-offset-2 ring-primary duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-base after:rotate-45" />
                  <span>Remember me</span> 
                </div>
                <a href="" className="text-center text-primary hover:text-primary/90">Forgot password?</a>
              </div>
            <button className="w-full btn btn-primary text-base duration-150">
                Sign in
            </button>
           
        </form>
        <button className="w-full btn btn-outline text-base duration-150">
        { /* SVG for Google Sign In */ }
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" className="w-5 h-5" />
        { /* Comment: Google Icon SVG here */ }
        Continue with Google
      </button>
      <p className="text-center">
        Don&apos;t have an account?
        <a href="" className="font-medium text-primary hover:text-base-content/90">Sign up</a>
      </p>
    </div>
</main>