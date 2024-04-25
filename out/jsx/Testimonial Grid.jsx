<div x-data="{\n  testimonials: [\n      {\n          avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',\n          name: 'Martin escobar',\n          title: 'Founder of meta',\n          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.'\n      },\n      {\n          avatar: 'https://randomuser.me/api/portraits/women/79.jpg',\n          name: 'Angela stian',\n          title: 'Product designer',\n          quote: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'\n      },\n      {\n          avatar: 'https://randomuser.me/api/portraits/men/86.jpg',\n          name: 'Karim ahmed',\n          title: 'DevOp engineer',\n          quote: 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.'\n      },\n  ]\n}">
  <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-xl sm:text-center md:mx-auto">
        <h3 className="text-base-content text-3xl font-semibold sm:text-4xl">
          See what others saying about us
        </h3>
        <p className="mt-3 text-base-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
          magna lorem, euismod volutpat arcu volutpat et.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <template x-for="(item, idx) in testimonials" key="idx" />
        </ul>
      </div>
    </div>
  </section>
</div>