<section>
  <div className="relative py-14 bg-base-content">
    <div className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]" style={{ background: "linear-gradient(\n          106.89deg,\n          rgba(192, 132, 252, 0.11) 15.73%,\n          rgba(14, 165, 233, 0.41) 15.74%,\n          rgba(232, 121, 249, 0.26) 56.49%,\n          rgba(79, 70, 229, 0.4) 115.91%\n        )" }} />
    <div className="relative max-w-screen-xl mx-auto text-base-300/70 sm:px-4 md:px-8">
      <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
        <h3 className="text-cyan-400 font-semibold">Pricing</h3>
        <p className="text-base-100 text-3xl font-semibold sm:text-4xl">
          Pay as you grow
        </p>
        <div className="max-w-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur consequat nunc.
          </p>
        </div>
      </div>
      <div className="mt-16 justify-center sm:flex">
       { /*-use a map loop*/ }
          <div className="{'relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md': true, 'bg-base-content border-cyan-400 border-x-0 sm:border-x-2': item.isMostPop, 'border-transparent': !item.isMostPop}">
            <div className="p-4 py-8 space-y-4 border-b border-base-content md:p-8">
              <span className="text-base-300/90 font-medium">item.name</span>
              <div className="text-cyan-400 text-3xl font-semibold">
                <span>`$${ /*$merge: {item.price}*/ }`</span>
                <span className="text-xl font-normal">/mo</span>
              </div>
              <p className="text-base-content">item.desc</p>
              <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-base-100 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700">
                Get Started
              </button>
            </div>
            <ul className="p-4 py-8 space-y-3 md:p-8">
             { /*-use a map loop*/ }
                <li className="flex items-center gap-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>feature</span>
                </li>
              
            </ul>
          </div>
        
      </div>
    </div>
  </div>
</section>