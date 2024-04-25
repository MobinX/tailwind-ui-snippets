<div x-data="{ open: false }">
  <header>
    <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
      <div className="flex justify-between">
        <a href="javascript:void(0)">
          <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
        </a>
        <button className="text-base-content outline-none sm:hidden" onClick={event => {}}>
          <template x-if="open" />
          <template x-if="!open" />
        </button>
      </div>
      <ul className="{'hidden': !open, 'block': open}">
        <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
          <li className="text-base-content hover:text-primary"><a href="javascript:void(0)">Customers</a></li>
          <li className="text-base-content hover:text-primary"><a href="javascript:void(0)">Careers</a></li>
          <li className="text-base-content hover:text-primary"><a href="javascript:void(0)">Guides</a></li>
          <li className="text-base-content hover:text-primary"><a href="javascript:void(0)">Partners</a></li>
          <li className="text-base-content hover:text-primary"><a href="javascript:void(0)">Team</a></li>
        </div>
      </ul>
    </nav>
  </header>
  <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
      <h1 className="text-base-content font-bold text-4xl xl:text-5xl">
        Optimize your website for
        <span className="text-primary"> Search engine</span>
      </h1>
      <p className="text-base-content max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
      </p>
      <div>
        <p className="text-base-content py-3">
          Subscribe to our newsletter and we&apos;ll save your time
        </p>
        <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
          <input type="text" placeholder="Enter your email" className="text-base-content border outline-none p-3 rounded-md w-full sm:w-72" />
          <button className="outline-none bg-base-content text-base-100 text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-base-content focus:ring-2 sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
      <img src="https://i.postimg.cc/kgd4WhyS/container.png" className="w-full mx-auto sm:w-10/12 lg:w-full" />
    </div>
  </section>
</div>