<section x-data="{ \n    plans: [\n    {\n      name: 'Enterprise',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n      price: 32,\n      isMostPop: true,\n      features: [\n          'Curabitur faucibus',\n          'massa ut pretium maximus',\n          'Sed posuere nisi',\n          'Pellentesque eu nibh et neque',\n          'Suspendisse a leo',\n          'Praesent quis venenatis ipsum',\n          'Duis non diam vel tortor',\n      ],\n  },\n  {\n      name: 'Startup',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n      price: 12,\n      isMostPop: false,\n      features: [\n          'Curabitur faucibus',\n          'massa ut pretium maximus',\n          'Sed posuere nisi',\n          'Pellentesque eu nibh et neque',\n          'Suspendisse a leo',\n          'Praesent quis venenatis ipsum',\n          'Duis non diam vel tortor',\n      ],\n  },\n    ]\n  }">
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
        <template x-for="(item, index) in plans" key="index" />
      </div>
    </div>
  </div>
</section>