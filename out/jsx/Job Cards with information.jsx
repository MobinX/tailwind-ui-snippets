<div x-data="{ \n  jobs: [\n      {\n          title: 'UI \u2013 Front End Dev',\n          desc: 'Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.',\n          date: 'May 17, 2022',\n          salary: '98,000 USD',\n          type: 'Full-time',\n          location: 'Columbia, MD',\n          href: 'javascript:void(0)'\n      },\n      {\n          title: 'Back End Developer',\n          desc: ' Help us solve problems and develop great user interface tools for our developers.',\n          date: 'Nov 11, 2022',\n          salary: '$105,000 USD',\n          type: 'Part-time',\n          location: 'Remote',\n          href: 'javascript:void(0)'\n      },\n      {\n          title: 'Full-Stack Developer',\n          desc: 'This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.',\n          date: 'Jan 2, 2022',\n          salary: '163,273 USD',\n          type: 'Full-time',\n          location: 'Remote',\n          href: 'javascript:void(0)'\n      }\n  ]\n}">
  <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
    <div>
      <h1 className="text-base-content text-3xl font-semibold">Explore The Jobs</h1>
    </div>

    <ul className="mt-12 space-y-6">
      <template x-for="(item, idx) in jobs" key="idx" />
    </ul>
  </section>
</div>