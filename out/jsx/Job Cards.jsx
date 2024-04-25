<div x-data="{ members: [\n  {\n      company_icon: '',\n      company_name: 'Google',\n      job_title: 'Full stack engineer',\n      job_description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',\n      job_type: 'Full-time',\n      location: 'Remotely',\n      path: 'javascript:void(0)'\n  }, {\n      company_icon: '',\n      company_name: 'Github',\n      job_title: 'Web tools manager',\n      job_description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',\n      job_type: 'Part-time',\n      location: 'USA, New york city',\n      path: 'javascript:void(0)'\n  }, {\n      company_icon: '',\n      company_name: 'Figma',\n      job_title: 'UI/UX Designer',\n      job_description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',\n      job_type: 'Full-time',\n      location: 'Mauritania',\n      path: 'javascript:void(0)',\n  }\n]}" className="py-28">
  <div className="max-w-screen-lg mx-auto px-4 md:px-8">
    <div className="max-w-md">
      <h1 className="text-base-content text-2xl font-extrabold sm:text-3xl">
        Open Positions
      </h1>
      <p className="text-base-content mt-2">
        We&apos;re currently looking talent software engineers, and designers to
        help us in our missions and to grow up.
      </p>
    </div>
    <ul className="mt-12 divide-y space-y-3">
      <template x-for="(item, idx) in members" key="idx" />
    </ul>
  </div>
</div>