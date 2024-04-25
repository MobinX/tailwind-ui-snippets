<><div className="relative" x-data="{ state: false }">
  <div className="absolute inset-0 blur-xl h-[580px]" style={{ background: "linear-gradient(\n        143.6deg,\n        rgba(192, 132, 252, 0) 20.79%,\n        rgba(232, 121, 249, 0.26) 40.92%,\n        rgba(204, 171, 238, 0) 70.35%\n      )" }} />
  <div className="relative">
    <header>
      <div className="{'mx-2 pb-5': state, 'hidden': !state}">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="javascript:void(0)">
            <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
          </a>
          <div className="md:hidden">
            <button onClick={event => {}} className="menu-btn text-base-content hover:text-base-content">
              { /* Use x-show for conditional rendering in Alpine */ }
              <template x-if="state" />
              <template x-if="!state" />
            </button>
          </div>
        </div>
      </div>
      <nav className="{'absolute top-0 inset-x-0 bg-base-100 shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent': state}">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
              <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
            </a>
            <div className="md:hidden">
              <button onClick={event => {}} className="menu-btn text-base-content hover:text-base-content">
                <template x-if="state" />
                <template x-if="!state" />
              </button>
            </div>
          </div>
          <div className="{'block': state, 'hidden': !state}">
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <template x-for="item in [\n                              { title: 'Features', path: 'javascript:void(0)' },\n                              { title: 'Integrations', path: 'javascript:void(0)' },\n                              { title: 'Customers', path: 'javascript:void(0)' },\n                              { title: 'Pricing', path: 'javascript:void(0)' }\n                          ]" key="item.title" />
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-base-100 font-medium bg-base-content hover:bg-base-content active:bg-base-content rounded-full md:inline-flex">
                Sign in
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    { /* Section */ }
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-base-content overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
          <a href="javascript:void(0)" className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-base-100">
            <span className="inline-block rounded-full px-3 py-1 bg-primary text-base-100">
              News
            </span>
            <p className="flex items-center">
              Read the launch post from here
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillrule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" cliprule="evenodd" />
              </svg>
            </p>
          </a>
          <h1 className="text-4xl text-base-content font-extrabold sm:text-5xl">
            Build your SaaS exactly how you want
          </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-base-100 font-medium bg-base-content duration-150 hover:bg-base-content active:bg-base-content rounded-full md:inline-flex">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillrule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" cliprule="evenodd" />
              </svg>
            </a>
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-base-content hover:text-base-content font-medium duration-150 md:inline-flex">
              Contact sales
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillrule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" cliprule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          { /* Replace with your image */ }
          <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg" className="max-w-xl" />
        </div>
      </div>
    </section>
  </div>
</div>

<script>{`
  document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
      open: false,
      toggle() {
        this.open = !this.open;
      },
      close() {
        this.open = false;
      },
      init() {
        this.$watch("open", (value) => {
          if (value) {
            this.$nextTick(() => {
              window.addEventListener("click", this.close);
            });
          } else {
            window.removeEventListener("click", this.close);
          }
        });
      },
    }));
  });
`}</script></>