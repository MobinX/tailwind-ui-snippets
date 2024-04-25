<div>
  <section className="relative py-14">
    <div className="absolute top-0 w-full h-[521px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} />
    <div className="max-w-screen-xl mx-auto text-base-content sm:px-4 md:px-8">
      <div className="relative max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
        <h3 className="text-primary font-semibold">
          Pricing
        </h3>
        <p className="text-base-content text-3xl font-semibold sm:text-4xl">
          Pay as you grow
        </p>
        <div className="max-w-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
          </p>
        </div>
      </div>
      <div className="mt-16 justify-center sm:flex">
       { /*-use a map loop*/ }
          <div className="relative flex-1 flex items-stretch flex-col mt-6 sm:mt-0 sm:rounded-xl sm:max-w-md">
            <div className="p-4 py-8 space-y-4 border-b md:p-8">
              <span className="text-primary font-medium">plan.name</span>
              <div className="text-base-content text-3xl font-semibold">
                <span>`$${ /*$merge: {plan.price}*/ }`</span> <span className="text-xl text-base-content font-normal">/mo</span>
              </div>
              <p>plan.desc</p>
              <button className="w-full btn btn-primary text-base duration-150">                Get Started
              </button>
            </div>
            <ul className="p-4 py-8 space-y-3 md:p-8">
              <li className="pb-2 text-base-content font-medium">
                Features
              </li>
             { /*-use a map loop*/ }
                <li className="flex items-center gap-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>feature</span>
                </li>
              
            </ul>
          </div>
        
      </div>
    </div>
  </section>
</div>