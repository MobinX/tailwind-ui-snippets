<div>
  <section className="relative py-14">
    <div className="max-w-screen-xl mx-auto text-base-content md:px-8">
      <div className="relative max-w-xl space-y-3 px-4 md:px-0">
        <h3 className="text-primary font-semibold">plan.name</h3>
        <p className="text-base-content text-3xl font-semibold sm:text-4xl">
          Pay as you grow
        </p>
        <div className="max-w-xl">
          <p>plan.desc</p>
        </div>
      </div>
      <div className="mt-16 justify-between gap-8 md:flex">
        <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
         { /*-use a map loop*/ }
            <li className="flex gap-x-3">
              <div className="flex-none w-12 h-12 rounded-full bg-primary/80 text-primary flex items-center justify-center">feature.icon</div>
              <div>
                <h4 className="text-lg text-base-content font-medium">feature.name</h4>
                <p className="text-base-content mt-2 md:text-sm">feature.desc</p>
              </div>
            </li>
          
        </ul>
        <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
          <div className="p-4 py-8 border-b md:p-8">
            <div className="justify-between flex">
              <div className="max-w-xs">
                <span className="text-2xl text-base-content font-semibold">plan.name</span>
                <p className="mt-3 sm:text-sm">plan.desc</p>
              </div>
              <div className="flex-none text-base-content text-2xl font-semibold sm:text-3xl">
                <span>`$${ /*$merge: {plan.price}*/ }`</span>
                <span className="text-xl text-base-content font-normal">/mo</span>
                { /* Dynamic Price */ }
              </div>
            </div>
            <button className="w-full  btn btn-primary  duration-150 text-sm mt-4">             Get Started
            </button>
          </div>
          <ul className="p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid">
            <div className="pb-2 col-span-2 text-base-content font-medium">
              <p>Features</p>
            </div>
           { /*-use a map loop*/ }
              <li className="flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>featureItem</span>
                { /* Dynamic Feature Item */ }
              </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>