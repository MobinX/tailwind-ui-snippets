<main className="w-full flex">
  <div className="relative flex-1 hidden items-center justify-center h-screen bg-base-content lg:flex">
    <div className="relative z-10 w-full max-w-md">
      <img src="https://floatui.com/logo-dark.svg" width="150" />
      <div className="mt-16 space-y-3">
        <h3 className="text-base-100 text-3xl font-bold">
          Start growing your business quickly
        </h3>
        <p className="text-base-300/70">
          Create an account and get access to all features for 30-days, No
          credit card required.
        </p>
        <div className="flex items-center -space-x-2 overflow-hidden">
          <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-base-100" />
          <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-base-100" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-base-100" />
          <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-base-100" />
          <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-base-100" />
          <p className="text-sm text-base-content font-medium translate-x-5">
            Join 5.000+ users
          </p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 my-auto h-[500px]" style={{ background: "linear-gradient(\n          152.92deg,\n          rgba(192, 132, 252, 0.2) 4.54%,\n          rgba(232, 121, 249, 0.26) 34.2%,\n          rgba(192, 132, 252, 0.1) 77.55%\n        )", filter: "blur(118px)" }} />
  </div>
  <div className="flex-1 flex items-center justify-center h-screen">
    <div className="w-full max-w-md space-y-8 px-4 bg-base-100 text-base-content sm:px-0">
      <div className="">
        <img src="https://floatui.com/logo.svg" width="150" className="lg:hidden" />
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
      <div className="grid grid-cols-3 gap-x-3">
        <button className="btn btn-outline duration-150">          { /* Comment: Google Icon SVG here */ }
          <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" className="w-5 h-5" />
        </button>
        <button className="btn btn-outline duration-150">          { /* Comment: Twitter Icon SVG here */ }
          <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg" alt="Twitter" className="w-5 h-5" />
        </button>
        <button className="btn btn-outline duration-150">          { /* Comment: GitHub Icon SVG here */ }
          <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg" alt="Github" className="w-5 h-5" />
        </button>
      </div>
      <div className="relative">
        <span className="block w-full h-px bg-base-300/70" />
        <p className="inline-block w-fit text-sm bg-base-100 px-2 absolute -top-2 inset-x-0 mx-auto">
          Or continue with
        </p>
      </div>
      <form onSubmit={event => { event.preventDefault(); }} className="space-y-5">
        <div>
          <label className="font-medium">Name</label>
          <input type="text" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input type="email" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
        </div>
        <div>
          <label className="font-medium">Password</label>
          <input type="password" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
        </div>
        <button className="w-full btn btn-primary text-base duration-150">          Create account
        </button>
      </form>
    </div>
  </div>
</main>