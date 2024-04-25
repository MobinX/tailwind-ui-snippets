<section x-data="{ \n    plans: [\n    {\n        name: 'Basic plan',\n        price: 12,\n        features: [\n            'Curabitur faucibus',\n            'massa ut pretium maximus',\n            'Sed posuere nisi',\n            'Pellentesque eu nibh et neque',\n            'Suspendisse a leo',\n            'Praesent quis venenatis ipsum',\n            'Duis non diam vel tortor',\n\n        ],\n    },\n    {\n        name: 'Startup',\n        price: 35,\n        features: [\n            'Curabitur faucibus',\n            'massa ut pretium maximus',\n            'Sed posuere nisi',\n            'Pellentesque eu nibh et neque',\n            'Suspendisse a leo',\n            'Praesent quis venenatis ipsum',\n            'Duis non diam vel tortor',\n        ],\n    },\n    {\n        name: 'Enterprise',\n        price: 60,\n        features: [\n            'Curabitur faucibus',\n            'massa ut pretium maximus',\n            'Sed posuere nisi',\n            'Pellentesque eu nibh et neque',\n            'Suspendisse a leo',\n            'Praesent quis venenatis ipsum',\n            'Duis non diam vel tortor',\n        ],\n    },\n    ] \n  }">
  <div className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
      <div className="relative max-w-xl mx-auto sm:text-center">
        <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
          Pricing for all sizes
        </h3>
        <div className="mt-3 max-w-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur consequat nunc.
          </p>
        </div>
      </div>
      <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
        <template x-for="(plan, index) in plans" key="index" />
      </div>
    </div>
  </div>
</section>