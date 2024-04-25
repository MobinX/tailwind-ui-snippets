<div>
  <nav className="fixed top-0 left-0 w-full h-full border-r bg-base-100 space-y-8 sm:w-80">
    <div className="flex flex-col h-full">
      <div className="h-20 flex items-center px-8">
        <a href="javascript:void(0)" className="flex-none">
          <img src="https://floatui.com/logo.svg" width="140" className="mx-auto" />
        </a>
      </div>
      <div className="flex-1 flex flex-col h-full overflow-auto">
        <ul className="px-4 text-sm font-medium flex-1">
         { /*-use a map loop*/ }
            <li>
              <a href="item.href" className="flex items-center gap-x-2 text-base-content p-2 rounded-lg hover:bg-base-200 active:bg-base-300 duration-150">
                <div className="text-base-content">item.icon</div>
                <span>item.name</span>
              </a>
            </li>
          
        </ul>
        <div>
          <ul className="px-4 pb-4 text-sm font-medium">
           { /*-use a map loop*/ }
              <li>
                <a href="item.href" className="flex items-center gap-x-2 text-base-content p-2 rounded-lg hover:bg-base-200 active:bg-base-300 duration-150">
                  <div className="text-base-content">item.icon</div>
                  <span>item.name</span>
                </a>
              </li>
            
          </ul>
          <div className="py-4 px-4 border-t">
            <div className="flex items-center gap-x-4">
              <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
              <div>
                <span className="block text-base-content text-sm font-semibold">Alivika tony</span>
                <a href="javascript:void(0)" className="block mt-px text-base-content hover:text-primary text-xs">
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>