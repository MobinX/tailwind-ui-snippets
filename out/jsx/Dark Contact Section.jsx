<section className="relative py-28 bg-base-content">
  <div className="relative z-10 max-w-screen-xl mx-auto text-base-content sm:px-4 md:px-8">
    <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
      <h3 className="text-cyan-400 font-semibold">
        Contact
      </h3>
      <p className="text-base-100 text-3xl font-semibold sm:text-4xl">
        Get in touch
      </p>
      <p className="text-base-300/70">
        We&rsquor;d love to hear from you! Please fill out the form bellow.
      </p>
    </div>
    <div className="mt-12 mx-auto px-4 p-8 bg-base-100 sm:max-w-lg sm:px-8 sm:rounded-xl">
      <form onSubmit={event => { event.preventDefault(); }} className="space-y-5">
        <div>
          <label className="font-medium">
            Full name
          </label>
          <input type="text" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-base-content shadow-sm rounded-lg" />
        </div>
        <div>
          <label className="font-medium">
            Email
          </label>
          <input type="email" required className="w-full mt-2 px-3 py-2 text-base-content bg-transparent outline-none border focus:border-base-content shadow-sm rounded-lg" />
        </div>
        <div>
          <label className="font-medium">
            Phone number
          </label>
          <div className="relative mt-2">
            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
              <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                <option>US</option>
                <option>ES</option>
                <option>MR</option>
              </select>
            </div>
            <input type="number" placeholder="+1 (555) 000-000" required className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-base-content shadow-sm rounded-lg" />
          </div>
        </div>
        <div>
          <label className="font-medium">
            Message
          </label>
          <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-base-content shadow-sm rounded-lg" />
        </div>
        <button className="w-full px-4 py-2 text-base-100 font-medium bg-base-content hover:bg-base-content active:bg-base-content rounded-lg duration-150">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }} />
</section>