<section className="py-14" x-data="{ team: [\n  {\n      avatar: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',\n      name: 'Martiana dialan',\n      title: 'Product designer'\n  },\n  {\n      avatar: 'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',\n      name: 'Micheal colorand',\n      title: 'Software engineer'\n  },\n  {\n      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n      name: 'Brown Luis',\n      title: 'Full stack engineer'\n  },\n  {\n      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n      name: 'Lysa sandiago',\n      title: 'Head of designers'\n  },\n  {\n      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n      name: 'Daniel martin',\n      title: 'Product designer'\n  },\n  {\n      avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',\n      name: 'Vicky tanson',\n      title: 'Product manager'\n  },\n]\n}">
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-xl mx-auto sm:text-center">
      <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
        Our team
      </h3>
      <p className="text-base-content mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown.
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <template x-for="(item, index) in team" key="index" />
      </ul>
    </div>
  </div>
</section>