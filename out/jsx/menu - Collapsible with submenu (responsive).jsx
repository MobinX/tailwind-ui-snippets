<ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
  <li><button>Item 1</button></li>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <li><button>Submenu 1</button></li>
        <li><button>Submenu 2</button></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><button>item 1</button></li>
              <li><button>item 2</button></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><button>Item 3</button></li>
</ul>