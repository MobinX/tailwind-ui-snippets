<div>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm" aria-label="Manage your account">
           { /*-use a map loop*/ }
                <button onClick={event => {}} className="{'border-primary text-primary': selectedTab === item, 'border-base-100 text-base-content': selectedTab !== item}">
                    <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-primary group-hover:bg-base-200 group-active:bg-base-300 font-medium">item</div>
                </button>
            
        </div>
       { /*-use a map loop*/ }
            <div x-show="selectedTab === item" className="py-6">
                <p className="text-xs leading-normal">
                    <span>This is </span><b>item</b><span> Tab</span>
                </p>
            </div>
        
    </div>
</div>