<div>
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm" aria-label="Manage your account">
     { /*-use a map loop*/ }
        <button onClick={event => {}} className="{'border-primary text-primary': selectedTab === item.name, 'border-base-100 text-base-content': selectedTab !== item.name}">
          <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-primary group-hover:bg-base-200 group-active:bg-base-300 font-medium">
            { /* Replace with actual SVG */ }
            <div>item.icon</div>
            <span>item.name</span>
          </div>
        </button>
      
    </div>

   { /*-use a map loop*/ }
      <div x-show="selectedTab === item.name" className="py-6">
        <p className="text-xs leading-normal">
          This is <b>item.name</b> Tab
        </p>
      </div>
    
  </div>
</div>