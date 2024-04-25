<div x-data="{\n  plans: [\n    {\n      name: 'Enterprise',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n      price: 32,\n      isMostPop: true,\n      features: [\n        'Curabitur faucibus',\n        'massa ut pretium maximus',\n        'Sed posuere nisi',\n        'Pellentesque eu nibh et neque',\n        'Suspendisse a leo',\n        'Praesent quis venenatis ipsum',\n        'Duis non diam vel tortor',\n      ],\n    },\n    {\n      name: 'Startup',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n      price: 12,\n      isMostPop: false,\n      features: [\n        'Curabitur faucibus',\n        'massa ut pretium maximus',\n        'Sed posuere nisi',\n        'Pellentesque eu nibh et neque',\n        'Suspendisse a leo',\n        'Praesent quis venenatis ipsum',\n        'Duis non diam vel tortor',\n      ],\n    },\n  ]\n}">
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
        <template x-for="plan in plans" key="plan.name" />
      </div>
    </div>
  </section>
</div>