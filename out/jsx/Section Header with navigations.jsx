<div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
  <div className="max-w-lg">
    <h3 className="text-base-content text-2xl font-bold">Team members</h3>
    <p className="text-base-content mt-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>
  <div className="mt-6">
    <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
     { /*-use a map loop*/ }
        <li className="{'py-2 border-b-2 border-primary text-primary': index === activeTab, 'py-2 border-b-2 border-base-100 text-base-content': index !== activeTab}">
          <a href="item.href" className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-primary hover:bg-base-300 active:bg-base-300/90 font-medium" onClick={event => {}}>item.name</a>
        </li>
      
    </ul>
  </div>
</div>