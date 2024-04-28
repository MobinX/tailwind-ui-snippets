<div className="drawer h-56 rounded overflow-hidden">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col drawer-content">
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></label>
      </div>
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li><button>Navbar Item 1</button></li>
          <li><button>Navbar Item 2</button></li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center items-center flex-grow">Content</div>
  </div>
  <div className="drawer-side h-full absolute">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" />
    <ul className="p-4 menu w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>