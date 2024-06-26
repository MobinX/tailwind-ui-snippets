<div>
  <div className="max-w-screen-xl mx-auto mt-4 px-4 md:px-8">
    <div className="hidden border-l flex-col justify-start items-start gap-y-3 text-sm sm:flex" aria-label="Manage your account">
     { /*-use a map loop*/ }
        <button className="{'border-primary text-primary': selectedTab === tabItem, 'border-base-100 text-base-content': selectedTab !== tabItem}" onClick={event => {}}>
          <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-primary group-hover:bg-base-300 font-medium">tabItem</div>
        </button>
      
    </div>
    <div className="relative text-base-content sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
      <select x-model="selectedTab" className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-primary text-sm">
       { /*-use a map loop*/ }
          <option>tabItem</option>
        
      </select>
    </div>
   { /*-use a map loop*/ }
      <div x-show="selectedTab === tabItem" className="py-6">
        <p className="text-xs leading-normal">
          This is <strong>tabItem</strong> Tab
        </p>
      </div>
    
  </div>
</div>