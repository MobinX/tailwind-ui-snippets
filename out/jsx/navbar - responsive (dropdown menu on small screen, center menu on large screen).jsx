<div className="navbar bg-base-100 mb-48 shadow-xl rounded-box" data-svelte-h="svelte-vgn36m">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><button>Item 1</button></li>
        <li>
          <button>Parent</button>
          <ul className="p-2 bg-base-100 w-40">
            <li><button>Submenu 1</button></li>
            <li><button>Submenu 2</button></li>
          </ul>
        </li>
        <li><button>Item 3</button></li>
      </ul>
    </div>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><button>Item 1</button></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40">
            <li><button>Submenu 1</button></li>
            <li><button>Submenu 2</button></li>
          </ul>
        </details>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
  <div className="navbar-end"><button className="btn">Button</button></div>
</div>