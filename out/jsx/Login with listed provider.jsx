<main className="flex h-screen w-full flex-col items-center justify-center px-4">
  <div className="w-full max-w-sm space-y-8 text-base-content">
    <div className="text-center">
      { /* logo */ }
      <img src="https://floatui.com/logo.svg" width="150" className="mx-auto" />

      <h3 className="text-2xl font-bold text-base-content sm:text-3xl">Log In</h3>
    </div>
    <form onSubmit={event => {}} className="mt-8 space-y-5">
      <div>
        <label className="font-medium"> Email </label>
        <input type="email" required className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-base-content/90 shadow-sm outline-none focus:border-primary" />
      </div>
      <div>
        <label className="font-medium"> Password </label>
        <input type="password" required className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-base-content/90 shadow-sm outline-none focus:border-primary" />
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-x-3">
          <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
          <label htmlFor="remember-me-checkbox" className="bg-base after:border-base relative flex h-5 w-5 cursor-pointer rounded-md border ring-primary ring-offset-2 duration-150 after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 peer-checked:bg-primary peer-active:ring" />
          <span>Remember me</span>
        </div>
        <a href="" className="text-center text-primary hover:text-primary/90">Forgot password?</a>
      </div>
      <button className="btn btn-primary w-full text-base duration-150">Sign in</button>
    </form>
    <div className="relative">
      <span className="block h-px w-full bg-base-content/85" />
      <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-base-100 px-2 text-sm">Or continue with</p>
    </div>
    <div className="space-y-4 text-sm font-medium">
      { /* Google Button */ }
      <button className="btn btn-outline w-full text-base duration-150">
        { /* SVG for Google */ }
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" className="h-5 w-5" />
        { /* Comment: Google Icon SVG here */ }
        Continue with Google
      </button>
      { /* Twitter Button */ }
      <button className="btn btn-outline w-full text-base duration-150">
        { /* SVG for Twitter */ }
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg" alt="Twitter" className="h-5 w-5" />
        { /* Comment: Twitter Icon SVG here */ }
        Continue with Twitter
      </button>
      { /* Github Button */ }
      <button className="btn btn-outline w-full text-base duration-150">
        { /* SVG for Github */ }
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg" alt="Github" className="h-5 w-5" />
        { /* Comment: Github Icon SVG here */ }
        Continue with Github
      </button>
    </div>
    <p className="text-center">
      Don&apos;t have an account?
      <a href="" className="font-medium text-primary hover:text-base-content/90">Sign up</a>
    </p>
  </div>
</main>