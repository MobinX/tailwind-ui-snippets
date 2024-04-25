<div x-data="{ integrations: [\n    { title: 'Figma', desc: 'Ut enim ad minim veniam', icon: 'your Figma svg' },\n    { title: 'Github', desc: 'Ut enim ad minim veniam', icon: 'your Github svg' },\n    { title: 'Discord', desc: 'Ut enim ad minim veniam', icon: 'your Discord svg' }\n    ] }">
  <section className="py-16">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-md">
        <h1 className="text-base-content text-xl font-extrabold sm:text-2xl">
          Integrations
        </h1>
        <p className="text-base-content mt-2">
          Extend and automate your workflow by using integrations for your
          favorite tools.
        </p>
      </div>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <template x-for="item in integrations" key="item.title" />
      </ul>
    </div>
  </section>
</div>