<section className="py-14" x-data="{\n  team: [\n  {\n    avatar: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',\n    name: 'Martiana dialan',\n    title: 'Product designer',\n    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy',\n    linkedin: 'javascript:void(0)',\n    twitter: 'javascript:void(0)',\n    github: 'javascript:void(0)'\n},\n{\n    avatar: 'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',\n    name: 'Micheal colorand',\n    title: 'Software engineer',\n    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy',\n    linkedin: 'javascript:void(0)',\n    twitter: 'javascript:void(0)',\n    github: 'javascript:void(0)'\n},\n{\n    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n    name: 'Daniel martin',\n    title: 'Product designer',\n    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy',\n    linkedin: 'javascript:void(0)',\n    twitter: 'javascript:void(0)',\n    github: 'javascript:void(0)'\n},\n{\n    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',\n    name: 'Vicky tanson',\n    title: 'Product manager',\n    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy',\n    linkedin: 'javascript:void(0)',\n    twitter: 'javascript:void(0)',\n    github: 'javascript:void(0)'\n},\n  ]\n}">
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="max-w-xl">
      <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
        Meet our talent team
      </h3>
      <p className="text-base-content mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum has been the industry&apos;s standard dummy.
      </p>
    </div>
    <div className="mt-12">
      <ul className="grid gap-8 lg:grid-cols-2">
        <template x-for="(item, index) in team" key="index" />
      </ul>
    </div>
  </div>
</section>