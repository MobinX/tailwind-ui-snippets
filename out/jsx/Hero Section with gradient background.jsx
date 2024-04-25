<div x-data="{ open: false }">
  <div className="bg-base-content">
    <header>
      <div x-bind:class="{ 'mx-2 pb-5': open, 'hidden': !open }">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="javascript:void(0)">
            <img src="https://www.floatui.com/logo-dark.svg" width="120" height="50" alt="Float UI logo" />
          </a>
          <div className="md:hidden">
            <button className="menu-btn text-base-content hover:text-base-300/70" onClick={event => {}}>
              <template x-if="open" />
              <template x-if="!open" />
            </button>
          </div>
        </div>
      </div>
      <nav x-bind:class="{ 'pb-5 md:text-sm absolute z-20 top-0 inset-x-0 bg-base-content rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent': open, '' !open }">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
              <img src="https://www.floatui.com/logo-dark.svg" width="120" height="50" alt="Float UI logo" />
            </a>
            <div className="md:hidden">
              <button className="menu-btn text-base-content hover:text-base-300/70" onClick={event => {}}>
                <template x-if="open" />
                <template x-if="!open" />
              </button>
            </div>
          </div>
          <div x-bind:class="{ 'block' open, 'hidden' !open }" className="flex-1 items-center mt-8 md:mt-0 md:flex">
            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="text-base-300/70 hover:text-base-content">
                <a href="javascript:void(0)" className="block">Features</a>
              </li>
              <li className="text-base-300/70 hover:text-base-content">
                <a href="javascript:void(0)" className="block">Integrations</a>
              </li>
              <li className="text-base-300/70 hover:text-base-content">
                <a href="javascript:void(0)" className="block">Customers</a>
              </li>
              <li className="text-base-300/70 hover:text-base-content">
                <a href="javascript:void(0)" className="block">Pricing</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-base-100 font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex">
                  Get started
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section className="relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-base-100 font-extrabold mx-auto md:text-5xl">
            Build and scale up your startup with the best tools
          </h2>
          <p className="max-w-2xl mx-auto text-base-content">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <form onSubmit={event => {}} className="justify-center items-center gap-x-3 sm:flex">
            <input type="text" placeholder="Enter your email" className="w-full px-3 py-2.5 text-base-content bg-base-content focus:bg-base-content duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto" />
            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-base-100 font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
          <div className="flex justify-center items-center gap-x-4 text-base-content text-sm">
            <div className="flex">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
            </div>
            <p><span className="text-base-300">5.0</span> by over 200 users</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(\n            106.89deg,\n            rgba(192, 132, 252, 0.11) 15.73%,\n            rgba(14, 165, 233, 0.41) 15.74%,\n            rgba(232, 121, 249, 0.26) 56.49%,\n            rgba(79, 70, 229, 0.4) 115.91%\n          )" }} />
    </section>
  </div>
</div>