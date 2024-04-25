<div x-data="{ navigation: [\n  { href: 'javascript:void(0)', name: 'Overview' },\n  { href: 'javascript:void(0)', name: 'Integration' },\n  { href: 'javascript:void(0)', name: 'Billing' },\n  { href: 'javascript:void(0)', name: 'Transactions' },\n  { href: 'javascript:void(0)', name: 'Plans' }\n],\nactiveTab: 0\n}" className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
  <div className="max-w-lg">
    <h3 className="text-base-content text-2xl font-bold">Team members</h3>
    <p className="text-base-content mt-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>
  <div className="mt-6">
    <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
      <template x-for="(item, index) in navigation" key="index" />
    </ul>
  </div>
</div>