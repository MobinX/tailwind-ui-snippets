<div x-data="{\n  plan: {\n    name: 'Basic plan',\n    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n    price: 32,\n    features: [\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n      'Curabitur faucibus',\n    ],\n  },\n  features: [\n    {\n      name: 'Scalable',\n      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',\n      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\n              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15' />\n            </svg>`\n    },\n    {\n      name: 'Flexible',\n      desc: 'Lorem Ipsum has been the industry\\'s standard dummy text.',\n      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\n              <path strokeLinecap='round' strokeLinejoin='round' d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' />\n            </svg>`\n    },\n    {\n      name: 'Smooth',\n      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',\n      icon:\n          `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\n              <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />\n          </svg>`\n    },\n    {\n      name: 'Secure',\n      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',\n      icon:\n          `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\n                <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />\n          </svg>`\n    },\n    // ... other features\n  ]\n}">
  <section className="relative py-14">
    <div className="max-w-screen-xl mx-auto text-base-content md:px-8">
      <div className="relative max-w-xl space-y-3 px-4 md:px-0">
        <h3 className="text-primary font-semibold" x-text="plan.name">
          { /* Dynamic Plan Name */ }
        </h3>
        <p className="text-base-content text-3xl font-semibold sm:text-4xl">
          Pay as you grow
        </p>
        <div className="max-w-xl">
          <p x-text="plan.desc">
            { /* Dynamic Plan Description */ }
          </p>
        </div>
      </div>
      <div className="mt-16 justify-between gap-8 md:flex">
        <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
          <template x-for="feature in features" key="feature.name" />
        </ul>
        <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
          <div className="p-4 py-8 border-b md:p-8">
            <div className="justify-between flex">
              <div className="max-w-xs">
                <span className="text-2xl text-base-content font-semibold" x-text="plan.name">
                  { /* Dynamic Plan Name */ }
                </span>
                <p className="mt-3 sm:text-sm" x-text="plan.desc">
                  { /* Dynamic Plan Description */ }
                </p>
              </div>
              <div className="flex-none text-base-content text-2xl font-semibold sm:text-3xl">
                <span x-text="`$${plan.price}`" />
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
            <template x-for="(featureItem, index) in plan.features" key="index" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>