<><div x-data="pricingComponent()">
  <section className="py-14 text-base-content">
    <div className="relative max-w-xl mx-auto space-y-3 px-4 sm:text-center md:px-0">
      <h3 className="text-primary font-semibold">Pricing</h3>
      <p className="text-base-content text-3xl font-semibold sm:text-4xl">
        Compare our plans and find yours
      </p>
      <div className="max-w-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          efficitur consequat nunc.
        </p>
      </div>
    </div>
    <div className="mt-16">
      <div className="sticky top-0 py-6 border-b bg-base-100">
        <div className="max-w-screen-xl mx-auto">
          <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
            <template x-for="plan in plans" key="plan.name" />
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
        <template x-for="table in tables" key="table.label" />
      </div>
    </div>
  </section>
</div>

<script>{`
  function pricingComponent() {
    return {
      checkIcon: "<div class='text-primary text-xl'>+</div>",
      "<div class='text-xl'>-</div>": "<div class='text-xl'>-</div>",
      plans: [
        {
          name: "Basic",
          desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
          price: "15",
        },
        {
          name: "Business",
          desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
          price: "20",
        },
        {
          name: "Enterprise",
          desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
          price: "50",
        },
      ],
      tables: [
        {
          label: "Features",
          label_icon:
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',
          items: [
            {
              name: "Aliquam finibus",
              basic: "<div class='text-primary text-xl'>+</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Vestibulum tristique",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Aliquam finibus",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-xl'>-</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Praesent aliquet",
              basic: "<div class='text-xl'>-</div>",
              business: "150GB",
              enterprise: "Unlimited",
            },
          ],
        },
        {
          label: "Analytics",
          label_icon:
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',
          items: [
            {
              name: "Aliquam finibus",
              basic: "<div class='text-primary text-xl'>+</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Vestibulum tristique",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Aliquam finibus",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-xl'>-</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Lorinto dinor",
              basic: "30",
              business: "60",
              enterprise: "Custom",
            },
            {
              name: "Praesent aliquet",
              basic: "Limited",
              business: "Limited",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Praesent aliquet",
              basic: "<div class='text-xl'>-</div>",
              business: "150GB",
              enterprise: "Unlimited",
            },
          ],
        },
        {
          label: "Support",
          label_icon:
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>',
          items: [
            {
              name: "Aliquam finibus",
              basic: "<div class='text-primary text-xl'>+</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Vestibulum tristique",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-primary text-xl'>+</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Aliquam finibus",
              basic: "<div class='text-xl'>-</div>",
              business: "<div class='text-xl'>-</div>",
              enterprise: "<div class='text-primary text-xl'>+</div>",
            },
            {
              name: "Praesent aliquet",
              basic: "<div class='text-xl'>-</div>",
              business: "150GB",
              enterprise: "Unlimited",
            },
          ],
        },
      ],
      selectedPlan: "Basic",
    };
  }
`}</script></>