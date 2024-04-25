<div className="max-w-2xl mx-auto px-4">
    <div className="items-start justify-between sm:flex">
        <div>
            <h4 className="text-base-content text-xl font-semibold">Team members</h4>
            <p className="mt-2 text-base-content text-base sm:text-sm">Give your team members access to manage the system.</p>
        </div>
        <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-base-100 bg-primary hover:bg-primary/90 active:bg-primary rounded-lg sm:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            New member
        </a>
    </div>
    <ul className="mt-12 divide-y">
       { /*-use a map loop*/ }
            <li className="py-5 flex items-start justify-between">
                <div className="flex gap-3">
                    <imgsrc="item.avatar" className="flex-none w-12 h-12 rounded-full">
                    <div>
                        <span className="block text-sm text-base-content font-semibold">item.name</span>
                        <span className="block text-sm text-base-content">item.email</span>
                    </div>
                </imgsrc="item.avatar"></div>
                <a href="javascript:void(0)" className="text-base-content text-sm border rounded-lg px-3 py-2 duration-150 bg-base-100 hover:bg-base-300">Manage</a>
            </li>
        
    </ul>
</div>