<div>
  <nav className="fixed top-0 left-0 w-20 h-full border-r bg-base-100 space-y-8">
    <div className="flex flex-col h-full">
      <div className="h-20 flex items-center justify-center px-8">
        <a href="javascript:void(0)" className="flex-none">
          <img src="https://floatui.com/logo-letter.png" width="35" className="mx-auto" />
        </a>
      </div>
      <div className="flex-1 flex flex-col h-full">
        <ul className="px-4 text-sm font-medium flex-1">
         { /*-use a map loop*/ }
            <li>
              <a href="item.href" className="relative flex items-center justify-center gap-x-2 text-base-content p-2 rounded-lg hover:bg-base-200 active:bg-base-300 duration-150 group">
                <div className="text-base-content">item.icon</div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md base-100space-nowrap text-xs text-base-100 bg-base-content hidden group-hover:inline-block group-focus:hidden duration-150">item.name</span>
              </a>
            </li>
          
        </ul>
        <div>
          <ul className="px-4 pb-4 text-sm font-medium">
           { /*-use a map loop*/ }
              <li>
                <a href="item.href" className="relative flex items-center justify-center gap-x-2 text-base-content p-2 rounded-lg hover:bg-base-200 active:bg-base-300 duration-150 group">
                  <div className="text-base-content">item.icon</div>
                  <span className="absolute left-14 p-1 px-1.5 rounded-md base-100space-nowrap text-xs text-base-100 bg-base-content hidden group-hover:inline-block group-focus:hidden duration-150">item.name</span>
                </a>
              </li>
            
          </ul>
          <div className="relative py-4 px-4 border-t" onClick={event => {}}>
            <button onClick={event => {}} className="w-12 h-12 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-base-content focus:ring-2 duration-150">
              <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
            </button>
            <template x-if="isProfileActive" /></div></div></div></div></nav></div>