<div className="navbar bg-base-100 mb-32 shadow-xl rounded-box" data-svelte-h="svelte-1pdufef">
  <div className="flex-1">
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 bg-base-100">
      <li><button>Link</button></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><button>Link 1</button></li>
            <li><button>Link 2</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>