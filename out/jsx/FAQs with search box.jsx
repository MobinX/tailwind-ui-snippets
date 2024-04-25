<div>
  <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
        <h3 className="text-base-content text-3xl font-extrabold sm:text-4xl">
          How can we help?
        </h3>
        <p className="text-base-content">
          Everything you need to know about the product. Can&rsquor;t find the
          answer you&rsquor;re looking for? feel free to
          <a className="text-primary font-semibold base-100space-nowrap" href="javascript:void(0)">
            contact us </a>.
        </p>
        <form onSubmit={event => {}} className="mx-auto sm:max-w-xs">
          <div className="relative">
            <svg className="w-6 h-6 text-base-content absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillrule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input type="text" placeholder="Enter your email" className="w-full pl-12 pr-3 py-2 text-base-content bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg" />
          </div>
        </form>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
         { /*-use a map loop*/ }
            <li className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-base-content">item.q</summary>
              <p className="text-base-content leading-relaxed">item.a</p>
              <a href="item.href" className="flex items-center gap-x-1 text-sm text-primary hover:text-primary/85 duration-150 font-medium">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </li>
          
        </ul>
      </div>
    </div>
  </section>
</div>