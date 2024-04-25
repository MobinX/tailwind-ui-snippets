<div>
  <div className="max-w-screen-xl mt-2 mx-auto px-4 md:px-8">
    <div className="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex" aria-label="Manage your account">
     { /*-use a map loop*/ }
        <button onClick={event => {}} className="{'bg-base-300 text-base-content shadow-sm': selectedTab === item, 'text-base-content hover:text-base-content hover:bg-base-300 active:bg-base-300': selectedTab !== item}">item</button>
      
    </div>
    <div className="relative text-base-content sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
      <select x-model="selectedTab" className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-base-content text-sm">
       { /*-use a map loop*/ }
          item
      </select>
    </div>
   { /*-use a map loop*/ }
      <div x-show="selectedTab === item" className="py-6">
        <p className="text-xs leading-normal">
          <span>This is </span><b>item</b><span> Tab</span>
        </p>
      </div>
    
  </div>
</div>