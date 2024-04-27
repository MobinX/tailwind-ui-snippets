<div className="drawer lg:drawer-open h-56 rounded overflow-hidden" data-svelte-h="svelte-19dxrt2">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col items-center justify-center drawer-content">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>
  <div className="drawer-side h-full absolute">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay" />
    <ul className="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>