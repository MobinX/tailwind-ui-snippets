<section x-data="{ features: [\n  {\n      icon: '',\n      title: 'Fast Refresh',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  },\n  {\n      icon: '',\n      title: 'Analytics',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  },\n  {\n      icon: '',\n      title: 'Datacenter security',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  },\n  {\n      icon: '',\n      title: 'Distributed architecture',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  },\n  {\n      icon: '',\n      title: 'API-first design',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  },\n  {\n      icon: '',\n      title: 'Microservices',\n      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',\n      href: 'javascript:void(0)'\n  }\n] }">
  <div className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-base-content md:px-8">
      <div className="max-w-xl space-y-3">
        <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
          Simple solutions for complex issues
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          congue, nisl eget molestie varius, enim ex faucibus purus.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <template x-for="item in features" key="item.title" />
        </ul>
      </div>
    </div>
  </div>
</section>