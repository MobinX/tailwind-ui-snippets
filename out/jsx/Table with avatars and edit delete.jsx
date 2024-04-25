<div x-data="{ \n    tableItems: [\n        { avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ', name: 'Liam James', email: 'liamjames@example.com', phone_nimber: '+1 (555) 000-000', position: 'Software engineer', salary: '$100K' },\n        { avatar: 'https://randomuser.me/api/portraits/men/86.jpg', name: 'Olivia Emma', email: 'oliviaemma@example.com', phone_nimber: '+1 (555) 000-000', position: 'Product designer', salary: '$90K' },\n        { avatar: 'https://randomuser.me/api/portraits/women/79.jpg', name: 'William Benjamin', email: 'william.benjamin@example.com', phone_nimber: '+1 (555) 000-000', position: 'Front-end developer', salary: '$80K' },\n        { avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg', name: 'Henry Theodore', email: 'henrytheodore@example.com', phone_nimber: '+1 (555) 000-000', position: 'Laravel engineer', salary: '$120K' },\n        { avatar: 'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ', name: 'Amelia Elijah', email: 'amelia.elijah@example.com', phone_nimber: '+1 (555) 000-000', position: 'Open source manager', salary: '$75K' }\n    ]\n}" className="max-w-screen-xl mx-auto px-4 md:px-8">
  <div className="items-start justify-between md:flex">
    <div className="max-w-lg">
      <h3 className="text-base-content text-xl font-bold sm:text-2xl">
        Team members
      </h3>
      <p className="text-base-content mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div className="mt-3 md:mt-0">
      <a href="javascript:void(0)" className="inline-block px-4 py-2 text-base-100 duration-150 font-medium bg-primary rounded-lg hover:bg-primary/90 active:bg-primary md:text-sm">Add member</a>
    </div>
  </div>
  <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
      <thead className="bg-base-200 text-base-content font-medium border-b">
        <tr>
          <th className="py-3 px-6">Username</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Position</th>
          <th className="py-3 px-6">Salary</th>
          <th className="py-3 px-6" />
        </tr>
      </thead>
      <tbody className="text-base-content divide-y">
        <template x-for="(item, idx) in tableItems" key="idx" />
      </tbody>
    </table>
  </div>
</div>