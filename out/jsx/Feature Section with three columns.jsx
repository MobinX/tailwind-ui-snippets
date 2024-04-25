<section className="py-14" x-data="{\n  features: [\n      {\n          title: 'Fast Refresh',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      },\n      {\n          title: 'Analytics',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      },\n      {\n          title: 'Datacenter security',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      },\n      {\n          title: 'Build on your terms',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      },\n      {\n          title: 'Safe to use',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      },\n      {\n          title: 'Flexible',\n          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n          icon: ''\n      }\n  ]\n  }">
  <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
    <div className="max-w-xl mx-auto space-y-3 sm:text-center">
      <h3 className="text-primary font-semibold">Features</h3>
      <p className="text-base-content text-3xl font-semibold sm:text-4xl">
        Do more with less complexity
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        congue, nisl eget molestie varius, enim ex faucibus purus
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        <template x-for="(item, idx) in features" key="idx" />
      </ul>
    </div>
  </div>
</section>